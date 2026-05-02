---
title: "接内网 GitLab 用社区 MCP server，别自己写"
date: 2026-05-02
lastmod: 2026-05-02
tags:
  - mcp
  - claude-code
  - gitlab
  - dev-tooling
description: "想给 Claude Code 接自托管 GitLab？先别动手写。社区 @zereight/mcp-gitlab 已经覆盖 90+ tools，PAT 鉴权，自托管 ready。一行命令装好，剩下时间该花在业务集成而不是协议封装。"
---

> 给 Claude Code 接内网工具时，第一直觉常常是"自己写一个 MCP server 吧"。我后来的经验是：**先看社区有没有现成的，再决定要不要造轮子**。
>
> 这篇讲为什么我的内网 GitLab CE 选了社区方案 `@zereight/mcp-gitlab`，怎么装、覆盖了什么、踩过什么坑。

## 先看社区，再决定造轮子

MCP 协议出来不久，但 GitLab、Slack、Notion、Linear、Jira 这种主流工具的 MCP server 已经有现成的了。判断步骤：

1. **先看官方** `@modelcontextprotocol/server-*` 系列。但要注意：很多官方包已 **DEPRECATED**，被社区版本取代
2. **再看社区** `@zereight/mcp-gitlab`、`mcp-server-jira` 等。看 npm 下载量 + GitHub star + 最近发版日期
3. **都不行才自写**

我的内网是 GitLab CE 15.9.8。`@modelcontextprotocol/server-gitlab` 已经标 DEPRECATED，社区接班的是 `@zereight/mcp-gitlab`，v2.x 持续维护，覆盖 90+ tools。自写工程量太大没价值。

## 一行命令安装

```bash
claude mcp add -s user \
  -e GITLAB_PERSONAL_ACCESS_TOKEN='glpat-...' \
  -e GITLAB_API_URL='http://<your-gitlab-host>/api/v4' \
  gitlab -- npx -y @zereight/mcp-gitlab
```

或写到 `~/.claude.json`：

```json
{
  "mcpServers": {
    "gitlab": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@zereight/mcp-gitlab"],
      "env": {
        "GITLAB_PERSONAL_ACCESS_TOKEN": "glpat-...",
        "GITLAB_API_URL": "http://<your-gitlab-host>/api/v4"
      }
    }
  }
}
```

**自托管 GitLab 注意**：`GITLAB_API_URL` 要带 `/api/v4` 后缀，不是裸根 URL。

PAT 准备：GitLab → User Settings → Access Tokens → 新建。scopes 至少 `api` + `read_repository`。token 形如 `glpat-XXXXXXXXX`，**复制 once**，关页面就看不到了。

## 90+ tools 概览

按用途分组（详见 `discover_tools` 元工具自查）：

**项目 / 命名空间**
- `list_projects` / `get_project`
- `list_namespaces` / `list_group_projects`

**Merge Request（核心）**
- `list_merge_requests` / `get_merge_request`
- `get_merge_request_diffs` / `get_merge_request_file_diff`
- `create_merge_request` / `update_merge_request` / `merge_merge_request`
- `approve_merge_request` / `unapprove_merge_request`
- `create_merge_request_note` / `create_merge_request_thread`
- `mr_discussions` / `get_merge_request_approval_state`

**Issue / Label**
- `list_issues` / `get_issue` / `create_issue` / `update_issue`
- `my_issues` / `list_labels` / `create_label`

**Branch / File**
- `create_branch` / `get_file_contents`
- `create_or_update_file` / `push_files`
- `get_repository_tree` / `list_commits` / `get_commit_diff`

**其它**
- `discover_tools`（元工具，列出所有可用 tool）
- `download_attachment` / `upload_markdown`
- `get_users` / `list_events`

## 用例：给 AI 干"review MR"

```
mcp__gitlab__get_merge_request({project_id: "<group>/<repo>", merge_request_iid: "42"})
mcp__gitlab__get_merge_request_diffs({project_id: ..., merge_request_iid: "42"})
# Claude 分析 diff, 加评论:
mcp__gitlab__create_merge_request_note({merge_request_iid: "42", body: "..."})
```

或"提一个 fix MR 关联工单"：

```
mcp__gitlab__create_branch(...)
mcp__gitlab__create_or_update_file(...) × N
mcp__gitlab__create_merge_request({
  title: "fix: #2441 ...",
  description: "Closes #2441\n\n<详情>",
  source_branch: "fix/2441-...",
  target_branch: "develop"
})
```

## 踩坑速记

- **`project_id` 接受 namespace path（`group/repo`）或数字 ID**。字符串路径要 URL-encoded
- **`merge_request_iid` 是项目内序号**，不是全局 id。容易跟其它 GitLab API 的 `merge_request_id` 混
- `list_projects` 的 `owned: true` 只过滤"我创建的"，不含我作为 maintainer 的项目。要拿全用 `membership: true`
- `create_merge_request` 的 `target_project_id` 默认 = source，跨项目 MR 才填
- `create_merge_request_thread` 的 `position` 字段是 review-on-diff 必填，没填就成了 general comment
- self-hosted 速度比 gitlab.com 慢，大列表加 `per_page` limit
- 老式 GitLab CE（&lt;14）部分 endpoint 缺，15+ 都齐

## 什么时候才该自写 MCP server

我后来还是自写了一个（接内部禅道）。决定自写的判断标准：

1. **社区没有可用的**——禅道 API 没现成 MCP，只能自己来
2. **工具数量不多**（10 个以内）——投入产出合理
3. **API 有非标准 quirks**——必须自己处理（比如评论 endpoint 静默失败、特定 Header 必填等）

否则能用社区就用社区。**MCP server 不是你的核心竞争力，业务集成才是**。把时间花在"怎么让 Agent 在你的工作流里干活"，而不是"怎么把第 N 个 REST API 包装成 MCP"。

---

> 包：[`@zereight/mcp-gitlab`](https://www.npmjs.com/package/@zereight/mcp-gitlab) · 自托管 GitLab CE 15.9.8 实测可用
