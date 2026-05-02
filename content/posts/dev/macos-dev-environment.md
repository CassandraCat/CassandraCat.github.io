---
title: "macOS 一行命令搭开发环境"
date: 2026-05-02
lastmod: 2026-05-02
tags:
  - dev-environment
  - macos
  - dotfiles
  - homebrew
  - mise
description: "新机器一键复刻：Homebrew + mise + stow 三件套。一个文件管所有系统包，一个工具管所有运行时，一个命令链接所有 dotfiles。13 步装完一台干净 mac。"
---

> 设计原则：**一个文件一条命令，新机器一键复刻**。
>
> 每一类工具用一个专门的管理器，职责清晰不重叠。所有配置集中在 `~/dotfiles`，用 git 管理。换机器只需要 `git clone` + 跑 `.install.sh`。

## 分层

### Homebrew（Brewfile）

系统级的统一声明入口。所有通过 `brew bundle` 能装的东西都放这里：

| 类型 | 举例 |
|------|------|
| **CLI 工具** | git, fzf, bat, ripgrep, fd, lazygit, neovim... |
| **GUI 应用（Cask）** | Chrome, VSCode, iTerm2, Arc, OrbStack, Raycast... |
| **Mac App Store** | Amphetamine, Xcode, Bob, Keynote... |
| **VSCode 插件** | ESLint, Prettier, Volar, GitLens... |

VSCode 插件其实不是 brew 管的，是 `brew bundle` 读到 `vscode "xxx"` 时调用 `code --install-extension` 装的。放在 Brewfile 的理由是**一个文件管所有**，省得记 4 个清单分别在哪里。

### mise（运行时管理器）

替代 `nvm` / `pyenv` / `goenv` / `jenv`。用一个工具管所有语言运行时。

```toml
# ~/.config/mise/config.toml
[tools]
node = "22"        # 默认
python = "3.14"
go = "1.26"
java = "openjdk-25"
```

另外还装了 `node 18` 作为 LTS 备用。项目级可以用 `.mise.toml` 覆盖。

mise 的好处是**一个 binary 解决所有运行时**：你不用记 nvm / pyenv / goenv 的不同 shell hook、不同 use 命令、不同配置位置。配置完全声明式。

### 生态工具（从 mise 分叉）

每种语言的包管理器装自己生态的工具，**不要交叉**：

- **`npm -g`**（从 node 出来）：JS/TS 工具
  - gitmoji-cli, lerna, typescript, vercel, http-server, markdownlint-cli
- **`go install`**（从 go 出来）：Go 开发工具
  - gopls, golangci-lint, delve, gofumpt, golines, mockgen, goimports, gotests...
- **rustup + cargo**（Rust 用官方方式）
  - selene, rust-analyzer 等

边界守得清楚，调试问题时不用猜"这个工具到底是哪里装的"。

### stow（dotfiles 符号链接）

`~/dotfiles` 下的所有配置文件，通过 `stow .` 一键符号链接到 `$HOME`。Git 仓库管理，换机器直接 clone。

```
~/dotfiles/
├── .config/
│   ├── zsh/
│   ├── nvim/
│   └── mise/config.toml
├── .zshrc
├── Brewfile
└── .install.sh
```

`stow .` 会把 `~/dotfiles/.zshrc` 链接到 `~/.zshrc`，`~/dotfiles/.config/nvim/` 链接到 `~/.config/nvim/`，依此类推。改完直接 commit + push，下次新机 clone 完再 stow 一次就同步。

### ~/.secrets

API 密钥单独存放，不入 git。在 `env.zsh` 里：

```bash
[ -f ~/.secrets ] && source ~/.secrets
```

新机器装完之后这一份要单独从密码管理器复制。是为数不多的非自动化步骤。

## 一键复刻

```bash
curl -fsSL <raw-url> | bash
# 或先 clone 再
cd ~/dotfiles && bash .install.sh
```

13 个步骤：

1. System check
2. Xcode CLI Tools
3. Homebrew + Brewfile（所有系统包）
4. Dotfiles（stow）
5. mise 运行时（node, python, go, java）
6. npm 全局工具
7. Go 开发工具（`go install`）
8. Rust 环境（rustup + cargo）
9. 字体（SF Mono Nerd Font, sketchybar）
10. 开发工具（SbarLua, LunarVim, Java debug）
11. macOS 系统默认设置
12. 启动系统服务（skhd, yabai, sketchybar）
13. 密钥配置提醒

跑完一遍约 20-40 分钟（看网络），然后是一台已经"我"的机器了。

## 判断新工具装哪里

加新工具时先回答这棵决策树：

```
是 Mac 应用 / CLI 工具 / VSCode 插件？
  └→ Brewfile (brew / cask / mas / vscode)

是语言运行时？（node, python, go, java）
  └→ mise config.toml

是 JS/TS 工具？（跑在 node 上的）
  └→ npm -g

是 Go 工具？
  └→ .install.sh 的 setup_go_tools 数组

是 Rust 工具？
  └→ .install.sh 的 cargo_packages 数组

是配置文件？
  └→ ~/dotfiles，stow 自动链接

是 API key / secrets？
  └→ ~/.secrets（不入 git）
```

判断标准很机械：装在哪取决于这个工具属于哪类。不要为了"方便"把 npm 工具装进 brew、把 dotfiles 散到 home 目录里。**职责重叠是混乱的开始。**

## 关键收益

跑了几年这套，最大的收益不在于"装得快"——而在于：

1. **可重复性**：上一次装的命令、清单、版本，git history 里全有
2. **可审计**：今天装了什么、为什么装、什么时候装的，commit message + Brewfile diff 全说清楚
3. **新机零脑力**：不用回忆"我那时怎么搭的"，跑脚本就完事
4. **环境一致**：办公 / 家用 / 临时机器，跑完同一个脚本就是同样的环境

最关键是第 4 条。对一个频繁切机器的人来说，这种"换台机器跟换台键盘一样"的感觉值得花一周整理。

---

> 配置仓库：`~/dotfiles` · Brewfile · `.install.sh` · mise config.toml · zsh env.zsh
