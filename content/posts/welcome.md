---
title: 关于这个博客
date: 2026-05-01
tags:
  - meta
description: 为什么我在已经有 Obsidian 知识库的情况下，还是搭了这个站
---

我本地有一个按 Karpathy LLM-Wiki 范式搭起来的 Obsidian 仓库，41 篇 atomic claim+evidence 风格的笔记，配套 `/ingest` `/distill` `/promote` `/lint` `/cross` `/trace` `/query` 一整套工具，按 `type` 字段过滤操作，是给 LLM 读的结构化知识图谱。

那为什么还要有这个博客？

## 写作产物有两种，不能共用一个 schema

**Wiki 笔记**是原子的：一个 claim、配证据、加链接，密集且机器友好。它存在的目的是被检索、被引用、被组合。

**博客文章**是叙事的：一个完整的论点，从背景到推导到结论，给人读，需要节奏感。它存在的目的是被理解、被记住、被反驳。

这是两种**写作产物**，硬要塞进同一个 schema 只会让两边都别扭。

## 这个博客的位置

它是 Wiki 的**公开综合输出层**：

```
本地 Obsidian Wiki   →   /distill 蒸馏成 Topic   →   博客综合成长文   →   公开
   (atomic, 私有)         (pattern, 私有)            (narrative, 公开)
```

技术栈：

- **Quartz v4** 静态站生成器（Obsidian 原生兼容，wikilinks / callouts / Excalidraw 都能用）
- **GitHub Pages** 部署，GitHub Actions 自动 build
- **Noto Serif SC + Inter + JetBrains Mono** 字体三件套
- 设计语言对齐我手上的 BIM+GIS 工程项目：暖色羊皮纸 + ring-shadow + Claude 风格

## 接下来

这里会陆续出现的内容，对应我从 2026 年 5 月起开始跑的一份[三线并行学习路线](https://github.com/CassandraCat)：

- **5—6 月** Spring AI 全栈对话 · GAMES101 光栅化与变换
- **7—8 月** RAG 工程从朴素到 Advanced · GAMES101 几何与光线追踪
- **9—10 月** Agent 工程 · GAMES202 实时阴影（直接重写引擎的 ShadowController）
- **11 月** Production AI · GAMES202 GI / PBR
- **12 月** Fine-tuning · GAMES202 LOD（重写引擎的 lod 模块）
- **2027 年 1 月** 三维场景 AI 研发中台 · 综合产出

每个阶段结束会有一篇综合性的文章在这里。

> 不是为了配合任何人，是为了沉淀自己。
