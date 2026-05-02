---
title: "AI 协作的署名格式：让 AI 写的部分被追踪到"
date: 2026-05-02
lastmod: 2026-05-02
tags:
  - ai
  - claude-code
  - workflow
  - convention
description: "用 Claude Code 写 commit、留评论、提 MR 时，给 AI 协作的部分加个统一署名。模型名动态读、不带邮箱、按平台格式化。规则简单但养成习惯能省很多账面上的扯皮。"
---

> 我用 Claude Code 干日常活——回禅道评论、写 commit、提 MR。一个朴素的需求：**让我的工具产物里 AI 协作的部分能被识别出来**。
>
> 不是把功劳分一半给 AI，是让"这段是 AI 写的"这件事在 git history 和评论里有个稳定的痕迹，将来出问题查起来知道哪些是我手写哪些是 AI 生成。

## 一句话规则

所有 AI 协作的工具产物末尾加一行统一署名：

```
Co-Authored-By: Claude {模型名} via CassandraCat
```

**模型名动态从 system prompt 读**。**不带邮箱**。

## 为什么需要规则

我自己用了几个月之后总结的几件事：

- **不写署名 → 几个月后翻 git history 完全不知道哪些是 AI 协作**。复盘代码风格演变时丢掉一半信息
- **写得不统一 → 没法 grep**。有的写 `via Claude`、有的写 `[AI]`、有的写中文"AI 协作"，搜不出来
- **写死模型名 → 模型升级后过期**。从 Sonnet 到 Opus、从 4.6 到 4.7，每次都改一遍很烦

## 按平台格式化

不同地方的渲染规则不一样，署名格式也得分情况：

### git commit (纯文本 trailer)

```
<commit message>

Co-Authored-By: Claude Opus 4.7 via CassandraCat
```

约束：

- 双换行后 `Co-Authored-By:` 作 trailer
- **没邮箱**。这意味着 GitHub/GitLab 不会把它解析为协作者（通常需要 `<email@example.com>`）。我的取舍：让它只起标识作用，不计入 co-author 统计——不刷"AI 写了我多少代码"的数据，单纯做痕迹

### 禅道评论 (HTML, Tiptap 富文本)

```html
<p>评论正文<br><br><span style="color:#9ca3af;font-size:12px">— Co-Authored-By: Claude Opus 4.7 via CassandraCat</span></p>
```

为什么这格式：

- 禅道 v18 备注是 Tiptap 富文本编辑器，接收 HTML
- 纯文本 `\n\n` 会被自动包成两个 `<p>`，段落 margin 大，视觉空 3-4 行
- 同段内 `<br><br>` 比 `</p><p>` 间距小、视觉清爽
- 署名用 `<span>` 内联灰色小字，跟正文区分但不抢主题
- 起头 em-dash `—` 跟 git commit 的 trailer 视觉区分，对齐"人写补充备注"的常见样式

## 模型名动态读

不写死，从当前 Claude 实例的 system prompt 那行 "powered by the model named X" 读：

- 现在 → `Claude Opus 4.7 via CassandraCat`
- 升 4.8 之后 → `Claude Opus 4.8 via CassandraCat`（自动跟）

不写运行时附注（如 `(1M context)`、`(thinking)`）——它们跟"哪个模型"是不同维度，混进署名只会让格式乱。

## 为什么不让 MCP server 自动加

我早期版本的 zentao-mcp 自己拼署名。后来撤掉了。理由：

- MCP server 是独立进程，跨 stdio 拿不到调用方 Claude 的当前模型
- 写死模型名就过期了
- 让 env var 同步意味着模型升级后还要改环境变量，太脆

**正确做法**：让 Claude 这一侧（调用方）拼好署名，再传给 MCP 的 comment / message 字段。

```ts
const myModel = "Opus 4.7"; // 从 system prompt 读
const comment = `<p>${正文}<br><br><span style="color:#9ca3af;font-size:12px">— Co-Authored-By: Claude ${myModel} via CassandraCat</span></p>`;
mcp__zentao__zentao_comment_bug({ id: 2441, comment });
```

## 应用清单

| 场景 | 加署名？ | 为什么 |
|------|--------|------|
| git commit message | ✅ | 长期可追溯，git history 是 source of truth |
| 禅道评论（bug / 任务） | ✅ | 团队协作场景，有审计价值 |
| MR description | ✅ | 评审时看得到 |
| 飞书 IM 消息 | ❌ | 日常协作，加了显得生疏 |
| 飞书任务 / 评论 | ❌ | 同上 |
| Obsidian Wiki | ❌ | frontmatter 已有 created/updated 元数据 |

判断原则：**会被翻出来回看的产物（git / 评论 / MR）加署名；当下消费即过的产物（IM / 任务讨论）不加**。

## 不要做

- ❌ MCP server 自动加（模型名会过期）
- ❌ 加邮箱（个人偏好，但同样可以加，看你团队约定）
- ❌ 写运行时附注 `(1M context)` `(thinking)`
- ❌ 不同场景用不同署名格式（统一就完了）
- ❌ 在 IM 类会话里加（太生疏）

---

> 这套规则定下来之后我再没纠结过"这条该不该署名"。简单的约定省脑力。
