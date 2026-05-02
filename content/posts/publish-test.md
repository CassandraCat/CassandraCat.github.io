---
title: "Publish 链路测试"
date: 2026-05-02
lastmod: 2026-05-02
tags:
  - meta
  - test
description: "/publish skill 跑通的端到端测试，验证 Obsidian vault → 个人博客的发布链路"
---

# Publish 链路测试

这篇是 `/publish` skill 跑通的端到端测试。如果你能在 [cassandracat.github.io/posts/publish-test](https://cassandracat.github.io/posts/publish-test) 看到这篇，说明 Obsidian vault → 个人博客 的发布链路正常。

## 测试覆盖

- Frontmatter 从 vault 范式（`type: post`、`slug`、`visibility`、`sources`）转成 Quartz 范式（`title`、`date`、`tags`、`description`）
- 文件从 `Wiki/Posts/Drafts/<slug>.md` 复制到博客仓库 `content/posts/<slug>.md`
- vault 内 `Drafts/<slug>.md` 移动到 `Published/<slug>.md`
- 博客仓库自动 commit + push，触发 GitHub Actions 部署
- 回写 `blog_url` 和 `published` 日期到 vault `Published/<slug>.md`

## 验证后续

测试完成后此页面会被删除或替换为真正的首篇文章。
