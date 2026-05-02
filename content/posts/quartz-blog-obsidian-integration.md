---
title: "搭一个能跟 Obsidian 对接的 Quartz 博客"
date: 2026-05-02
lastmod: 2026-05-02
tags:
  - blog
  - quartz
  - obsidian
  - engineering-notes
description: "Quartz v4 选型理由 / 暖色羊皮纸视觉对齐 / GitHub Pages 部署踩的坑 / 跟 Obsidian 对接的 /publish skill 设计 / 4 个真踩过的工程坑"
---

# 搭一个能跟 Obsidian 对接的 Quartz 博客

> 「[关于这个博客](/posts/welcome)」那篇写了为什么要博客，这篇是配套的怎么搭——一个工程笔记 + 几个踩过的坑。

## 选型对比

候选过的方案：

| 方案 | 优势 | 劣势 | 时间投入 |
|------|------|------|---------|
| **Obsidian Publish** | 零配置，原生 wikilinks / Excalidraw | 8 美元/月，主题定制有限 | 30 分钟 |
| **Quartz v4** | 免费，Obsidian 兼容（wikilinks / callouts / Excalidraw 插件），SCSS 可深度定制 | 主题层需手工写 | 2-4 小时 |
| **Astro / Next.js 自撸** | 设计自由度满分 | wikilinks / Excalidraw 都得自己处理 | 1-2 周 |

**选 Quartz v4**：免费 + GitHub Pages + 配套 Obsidian 生态 + SCSS 可改主题 = 甜点。Astro 自撸虽然漂亮，但已经在卷的工程项目挤不出这块时间。

## 视觉对齐

设计语言对齐我手上的工程项目，用 Anthropic 风格的暖羊皮纸 + ring-shadow。三件套字体：

```scss
:root {
  --headerFont: 'Noto Serif SC';   /* 标题: 500 wt, 不用 bold */
  --bodyFont: 'Inter';              /* 正文: cv11 ss01 ss03 */
  --codeFont: 'JetBrains Mono';     /* 等宽: ss01 calt liga zero */
  --secondary: #c96442;             /* terracotta accent */
}
```

ring-shadow 哲学（不是 drop-shadow）：

```scss
.card {
  background: var(--light);
  box-shadow: 0 0 0 1px var(--lightgray), 0 1px 2px rgba(20, 20, 19, 0.025);
}
.card:hover {
  box-shadow: 0 0 0 1px var(--ring-warm), 0 4px 24px rgba(20, 20, 19, 0.05);
}
```

阴影是细线 + 微弱外扩，hover 时颜色加深、外扩范围扩大——比 drop-shadow 更克制，更"纸面"。

## Pages 部署两次摔倒

GitHub 仓库名 `<username>.github.io` 时，Pages 默认走 legacy build：直接把 main 分支根目录当成静态站。所以第一次 push 后，访问 `cassandracat.github.io` 看到的是 README.md 渲染出来的"Quartz v4 Sponsors"页（项目 README 而不是我的 content）。

改 `build_type: workflow` 后，问题没立刻消失：legacy build **和** 新 workflow 同时被触发，谁后完成谁覆盖。Legacy 50 秒，workflow 39 秒，最终 legacy 赢——线上还是 README。

**修法**：再 push 一次。Pages 切到 workflow 后，下一次 push 只会触发自定义 workflow，不再走 legacy。

## 跟 Obsidian 对接：`/publish` skill

我已经有一个 vault 用 `/promote` 把 wiki 笔记推飞书。最初想法：扩 `/promote` 加一个 `--target=blog`。

否决理由：

| 维度 | `/promote` (飞书) | `/publish` (博客) |
|------|------------------|-------------------|
| 受众 | 同事 | 公网读者 |
| 错误恢复 | 可删可改 | SEO 已索引，难收回 |
| 内容 schema | atomic claim+evidence | narrative 长文 |
| 失败模式 | lark-cli API 错误 | git push / Actions 错误 |
| drift 检查 | 拉远端 doc | 拉本地 git |

机械动作相似不等于语义相似。塞进一个命令会变成 if/else 的"上帝命令"，长期负担更大。拆开后两个 skill 各自单一职责，互相 reject 不属于自己的 type，反而清晰。

**vault 状态机**：

```
Wiki/Posts/
├── Drafts/         # type:post, visibility:private/public 草稿
└── Published/      # /publish 之后从 Drafts 移过来, 带 blog_url
```

`/publish` 7 步：候选扫描 → pre-flight（仓库 clean / main 分支 / slug ascii）→ frontmatter 转换（vault 范式 → Quartz 范式）→ 文件复制 + git push → vault 文件 `mv` 到 `Published/` → 回写 `blog_url + published` → 写 log。

## 真踩过的坑

**post-card 子元素被甩出卡片**：

```html
<a class="post-card">
  <div class="post-meta">日期</div>
  <h3>标题</h3>  ← Quartz 自动给 h3 加锚点链接
  <p>描述</p>
</a>
```

Quartz 给 `<h3>` 自动加 `<a role="anchor">` 锚点。结果就是 `<a>` 嵌套 `<a>`，浏览器遇到内层会**强制闭合外层**，后面的 `<h3>` 和 `<p>` 被甩到 post-card 外面，渲染成三块独立小盒子。修法：把 `<h3>` 换成 `<div class="post-card-title">`。

**ToC chevron 视觉偏下**：

`align-items: center` 已经把 svg 几何居中，但中文字符在 line-box 里偏上（没有 descender），文字视觉中心比几何中心高 1-2px。`transform: translateY(1px)` 把文字下推一像素就对齐了。这种细节在英文设计里没注意，做中文站要专门处理。

**Specificity 战胜 `!important`**：

```scss
.right.sidebar h3 { line-height: 1.4 !important; margin: 0 0 0.7rem !important; }  /* 0,2,1 */
.toc-header h3   { line-height: 1   !important; margin: 0           !important; }  /* 0,1,1 */
```

两条都 `!important`，第一条 specificity 高（两个 class 一个元素），赢。结果 ToC 头按钮被撑到 26.88px，里面文字看着偏上。修法：把第二条改成 `.right.sidebar .toc-header h3` 把 specificity 提到 0,3,1。

`!important` 不能跨越 specificity，相同重要性下 specificity 决定胜负——这条算 CSS 基础，但实际写起来还是会忘。

**Inline `<script>` 被 markdown 转义**：

在 markdown 里直接写 `<script>...</script>`，Quartz 的 sanitize 流水会把 `<` 转成 `&lt;`，script 内容被当成可显示文本，浏览器渲染出一段不可见但占空间的"假内容"——页面底部莫名其妙一大块空白。修法：脚本提到 `quartz/static/`，markdown 里只写 `<script src="/static/xxx.js" defer></script>` 引用。

## 现在的工作流

```
1. vault: Wiki/Posts/Drafts/<slug>.md 起草, type:post + visibility:private
2. 写完, 改 visibility:public
3. CC 跑 /publish
4. 自动: frontmatter 转换 / 文件复制到博客 repo / git push / mv Drafts→Published / 回写 blog_url
5. 1-2 分钟后 cassandracat.github.io/posts/<slug> 上线
```

vault 是 source of truth，博客仓库是 build target。改文章只在 vault 改，再跑 `/publish` 覆盖；不在博客仓库直接编辑，避免单源漂移。

> 这套搭完，写作摩擦只剩"写"本身。基础设施隐到背景里，是它该在的位置。
