---
title: "什么时候该自写 MCP server：以接禅道为例"
date: 2026-05-02
lastmod: 2026-05-02
tags:
  - mcp
  - claude-code
  - zentao
  - dev-tooling
  - api-quirks
description: "GitLab、Slack、Notion 这种主流工具有现成的社区 MCP server，能用就用。但当目标是国内自建系统（比如禅道），社区方案没有，只能自写。这篇讲我自写禅道 MCP server 的全过程：决策框架、API quirks 8 连击、双身份 token、客户端 filter、避免静默失败的关键 header。"
---

> 之前写过一篇 [《接内网 GitLab 用社区 MCP server，别自己写》](/posts/dev/mcp-server-third-party)，主张能用社区方案就别造轮子。但有些场景社区是真的没东西，只能自写。
>
> 这篇是它的姐妹篇——我自写禅道 MCP server 的全过程。决策框架在哪、踩了几个坑、最后落地的设计是什么。

## 一、决策框架

每次想接一个新工具到 Claude Code，按这个顺序走：

1. **官方 MCP server**（`@modelcontextprotocol/server-*`）—— 看有没有 + 是否 active 维护
2. **社区方案**（npm 上 `mcp-*` 关键词搜）—— 看 download 量 / star / 最近发版
3. **自写** —— 前两条都没有再考虑

判断"该自写"的硬条件：

- **社区没有可用的** —— 国内自建系统（禅道、企业微信内部版、自研工具）经常处于此类
- **工具数量不多**（10 个以内）—— 投入产出合理
- **API 有非标准 quirks** —— 必须自己处理（评论 endpoint 静默失败、特定 Header 必填等）

我接禅道时三条全中：

- 社区零 MCP 可选
- 我只需要 11 个 tool（5 读 + 6 写）
- 禅道 v18+ API 有 8 个怪癖必须客户端处理

## 二、栈和路径

```
~/.claude/mcp-servers/zentao/
├── package.json
├── tsconfig.json
├── src/
│   └── index.ts        # 单文件 ~380 行, 全部逻辑在内
├── dist/index.js       # tsc 编译产物
└── README.md
```

技术栈：

- Node.js + TypeScript（`tsc` 编译）
- `@modelcontextprotocol/sdk` —— MCP SDK
- `zod` —— 参数校验
- 没引重型依赖，fetch 用 Node 内置

**单文件**是关键。MCP server 不是产品，是黏合层。所有逻辑塞在一个 `index.ts` 里看起来粗糙，但维护成本比拆成 8 个文件低得多——改一个 quirk 不需要在三个文件之间跳。

## 三、11 个 Tool 的设计

### 读

| Tool | 用途 |
|---|---|
| `zentao_list_products` | 列所有产品（id + name） |
| `zentao_list_my_bugs` | 列我的 bug，多产品聚合 + 客户端 filter |
| `zentao_get_bug` | 单 bug 全字段 |
| `zentao_search_bugs` | title 关键词搜，跨产品 |
| `zentao_list_my_tasks` | 列我的执行任务 |
| `zentao_get_task` | 单 task 详情 |

### 写

| Tool | 用途 |
|---|---|
| `zentao_comment_bug` | 给 bug 加评论（append-only history） |
| `zentao_update_bug` | 通用 PUT（转派 / 改优先级 / 严重度 / 重激活 / 改标题） |
| `zentao_resolve_bug` | 解决（resolution 必填: fixed/duplicate/...） |
| `zentao_close_bug` | 归档（resolve 之后再 close 才完整） |
| `zentao_confirm_bug` | 确认 bug（产品/测试方动作） |

### 关键设计：不暴露 raw API

**包成业务语义工具**，而不是 `PUT /bugs/{id}` `POST /bugs/{id}/resolve` 这种裸接口。

理由：

- 业务语义工具（`resolve_bug`）比 PUT 整字段稳——动作端点会自动维护 history、触发通知
- AI 用 tool 时**意图可读**：`resolve_bug` 比 `PUT /bugs/{id} status=resolved` 更易读
- 校验集中——参数 schema 写在工具入口，违规一律拒绝

## 四、禅道 v18+ API 的 8 个 quirks

这部分是踩坑大全。我把每个 quirks 都编码进了 MCP server 里。

### Quirk 1：comment 端点 v1 API 不可用（静默失败）

**症状**：`PUT /api.php/v1/bugs/{id}` 带 `{"comment":"..."}` 返回 200，**但 history 里看不到任何 "添加备注" 行**。

**根因**：禅道 v1 API 的 PUT bug 接口不接受 comment 字段进 history。服务端把 comment 字段当成 unknown field 静默吞掉，不报错。

**正确路径**：必须走老路由 `/index.php?m=action&f=comment&objectType=bug&objectID={id}&onlybody=yes`（form-encoded）。

**还要带 3 个关键 header**：

- `Cookie: zentaosid=<token>`
- `Referer: <base>/index.php?m=bug&f=view&bugID={id}` ← **缺这个 200 但不入 history**
- `X-Requested-With: XMLHttpRequest` ← **缺这个也 200 但不入 history**

少任一 header 都是"成功假象"。实测下来必须三个都齐：

```bash
curl -X POST -H "Token: $TOKEN" -H "Cookie: zentaosid=$TOKEN" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Referer: <base>/index.php?m=bug&f=view&bugID=2441" \
  -H "X-Requested-With: XMLHttpRequest" \
  --data-urlencode "comment=正文" \
  "<base>/index.php?m=action&f=comment&objectType=bug&objectID=2441"
```

### Quirk 2：token 双身份（v1 Token + zentaosid cookie 一个值）

**症状**：同一个 token 字符串既能当 v1 API `Token: ...` header，又能当老路由 `zentaosid=...` cookie。

**根因**：禅道 v1 token 复用了 web session id。设计上为了兼容（老路由继续 work + v1 也能用同一身份），但 API 文档没明说。

**实用价值**：不需要为老路由额外做"web 登录拿 cookie"步骤，token 一份用两处。

**注意**：这意味着 token 泄露 = web session 也丢，安全风险等同密码。

### Quirk 3：GET 接口 query filter 服务端忽略

**症状**：`GET /api.php/v1/products/6/bugs?assignedTo=zhangtao&status=active&limit=3` 返回的 `total` 跟 `?limit=3`（无 filter）一样，说明 filter 没生效。

**根因**：禅道 v1 GET bugs 接口对 query 里的 unknown 参数静默忽略，不报错 + 不 filter。

**修法**：客户端 filter。

```ts
const r = await api(`/products/${pid}/bugs?limit=200`);  // 拉全量
for (const b of r.bugs) {
  if (!isMine(b)) continue;        // 客户端 filter assignedTo
  if (status !== 'all' && b.status !== status) continue;
  // ...
}
```

注意 limit 给到 200 让单产品一次拉完，多产品聚合时不要过分页。

### Quirk 4：bug.assignedTo 是对象不是字符串

**症状**：期望 `bug.assignedTo === "zhangtao"`，实际 `bug.assignedTo = {id: 5, account: "zhangtao", avatar: "", realname: "张桃"}`。

**根因**：禅道 v1 序列化用户字段时返回完整 user 对象，不是 account string。

**修法**：

```ts
function isMine(b) {
  const at = b.assignedTo;
  if (!at) return false;
  if (typeof at === 'string') return at === ACCOUNT;
  return at.account === ACCOUNT;  // 实际命中这条
}
```

`openedBy`, `resolvedBy`, `closedBy`, `lastEditedBy` 同样是 user 对象。

### Quirk 5：没 /my/bugs 端点，必须按产品聚合

**症状**：`GET /my/bugs` `GET /users/{u}/bugs` `GET /users/{id}/bugs` 全 404。

**根因**：禅道 v1 没"全局我的 bug"端点。bugs 必须按 product 维度查（`/products/{id}/bugs`），没 product 就 `Need product id`。

**修法**：MCP 层先 `GET /products?limit=100` 拿所有产品，然后对每个产品 `GET /products/{id}/bugs`，在客户端 filter assignedTo，聚合返回。

```
listProducts() → N 个产品
对每个产品 GET /products/{id}/bugs?limit=200
客户端 filter assignedTo.account === ACCOUNT
按 status 切片
```

性能：内网延迟低，数个串行请求 ~1 秒。业务方产品数一般 <100，OK。

### Quirk 6：POST /bugs/{id}/{resolve,close,confirm} 空 body 也会真触发

**症状**：调试探针时 `POST /bugs/2441/confirm` 不带 body，返回 200。以为没真改，实际**真把 bug 状态改成"已确认"**，history 多了一条 "张桃 确认 Bug"。

**根因**：这些动作端点的 body 大部分字段是可选的。空 body = 用默认值执行。resolve 如果不带 resolution 默认 fixed；confirm 不需要任何 body。

**教训**：探禅道写动作端点必须在**测试 bug** 上做，严禁拿真业务 bug 当靶子。

### Quirk 7：POST /bugs/{id}/resolve|close|confirm 比 PUT 整字段稳

**症状**：`PUT /api.php/v1/bugs/{id}` 带 `{"status":"resolved","resolution":"fixed","resolvedBuild":"trunk"}` 返回 200，但部分字段（history / 时间戳 / 通知）没 propagate 完整。

**修法**：用专用动作端点 `POST /bugs/{id}/resolve`（body: `{resolution, resolvedBuild?, comment?}`）。同理 close / confirm。

设计逻辑：禅道老路由的 web UI 走"动作"模式（按钮 = 一个动作），v1 把这些动作映射成 POST sub-resource。比 PUT 整字段更准确触发"流程"，自动维护 history + 触发通知。

**保留 PUT 用于**：通用更新（改 title / 改 severity / 改 assignedTo / 重激活 = status:active）。没专用端点的字段才用 PUT。

### Quirk 8：v1 API 返回的 `comment` 字段是空，history 在另一表

**症状**：`GET /api.php/v1/bugs/2441` 返回的 JSON 里 `"comment": ""`，但 web UI 上明明有 N 条备注。

**根因**：禅道 history（含 comment）存独立 `actions` 表，不是 bug 主表的字段。v1 API bug GET 返回主表字段，不带 history。

**修法**：看 history 走 web UI 或暴露内部端点（我的 MCP 暂没暴露读 history，优先级低）。写历史（添加备注）靠 quirk 1 的方式。

## 五、鉴权设计：双模式

```
启动时读 env:
  ZENTAO_BASE_URL    必填 (例: http://<your-zentao-host>)
  ZENTAO_ACCOUNT     必填 (用户名, 用于 list_my_bugs 客户端 filter)

二选一:
  ZENTAO_TOKEN       已有 token, 直接用
  ZENTAO_PASSWORD    没 token, 启动时 POST /tokens 自动换
```

token 失效（401）自动重换一次（有 ZENTAO_PASSWORD 时），再失败抛错。

**关键**：token 同时是 v1 API `Token: <token>` header **和** 老路由 `zentaosid` cookie（见 quirk 2）。

拿 token：

```bash
curl -X POST <base>/api.php/v1/tokens \
  -H "Content-Type: application/json" \
  -d '{"account":"zhangtao","password":"..."}'
# → {"token":"cuejkiesahl9k1j8be5bv5lndo"}
```

token 有效期 session-based（~2h），用完自动续（account+password 模式）或手动重 issue。

## 六、配置

```json
{
  "mcpServers": {
    "zentao": {
      "type": "stdio",
      "command": "node",
      "args": ["/Users/<user>/.claude/mcp-servers/zentao/dist/index.js"],
      "env": {
        "ZENTAO_BASE_URL": "http://<your-zentao-host>",
        "ZENTAO_ACCOUNT": "<your-account>",
        "ZENTAO_TOKEN": "..."
      }
    }
  }
}
```

或用 CLI：

```bash
claude mcp add -s user \
  -e ZENTAO_BASE_URL=http://<your-zentao-host> \
  -e ZENTAO_ACCOUNT=<your-account> \
  -e ZENTAO_TOKEN=<token> \
  zentao -- node ~/.claude/mcp-servers/zentao/dist/index.js
```

shell 引号注意：token 含特殊字符要加 `'...'` 单引号包。

## 七、5 个关键设计决策

### 1. 不暴露 raw API → 包成业务语义工具

`resolve_bug` 而非 `PUT /bugs/{id} status=resolved`。禅道动作端点比 PUT 整字段稳，走 history 自动正确（quirk 7）。

### 2. 客户端 filter assignedTo

GET filter 服务端忽略 unknown query，必须客户端做（quirk 3）。

### 3. comment 走老路由

v1 PUT comment 字段不入 history（静默失败）。必须老路由 + Referer + X-Requested-With（quirk 1）。

### 4. 不自动加 AI 署名

模型名动态变化，MCP 跨进程拿不到当前 Claude 实例的模型 ID。让调用方 Claude 拼署名，MCP 只负责发送。

```ts
// 调用方 Claude:
const myModel = "Opus 4.7"; // 从 system prompt 读
const comment = `<p>${正文}<br><br><span style="color:#9ca3af;font-size:12px">— Co-Authored-By: Claude ${myModel} via CassandraCat</span></p>`;
mcp__zentao__zentao_comment_bug({ id: 2441, comment });
```

### 5. 永远不缓存 bug 数据

bug 是运行数据，实时拉。Wiki 永远不写"今天 active bug 列表"快照——快照立刻过期。

## 八、检查清单：下次接禅道前过一遍

- [ ] 鉴权：`ZENTAO_TOKEN` 还是 `account+password`？（token 失效自动续不？）
- [ ] 写 comment：用老路由 + Referer + X-Requested-With？
- [ ] list bugs：客户端 filter assignedTo？bug.assignedTo 当对象处理？
- [ ] 动作（resolve/close/confirm）：用专用端点不要 PUT？
- [ ] 探针：在测试 bug 还是真 bug 上跑？（一定测试 bug！）
- [ ] History：知道 v1 GET bug 不返回 history 吗？

## 九、为什么自写 MCP 比想象中容易

写完 380 行 + 调通 8 个 quirk 之后回头看：

- **MCP SDK 抽象很薄**——`Server` + `setRequestHandler` 几行就起来了
- **stdio 模式不用部署**——本地 node process，Claude Code 启动时拉起
- **单文件**——所有逻辑集中，调试快
- **TypeScript + zod**——参数校验编译时 + 运行时双保险

工程量集中在**摸清目标 API 的 quirks**，而不是 MCP 协议本身。

## 十、什么时候才该自写

回到决策框架：

| 场景 | 建议 |
|------|-----|
| GitLab / GitHub / Slack / Notion / Linear / Jira 等主流 SaaS | 用社区 MCP server |
| 国内自建系统（禅道、企业微信内部版、自研工具）| 自写 |
| 只需要少量 tool（< 10 个） | 自写性价比高 |
| 需要 100+ tool | 用社区方案，自写维护不动 |
| API 行为标准 | 用社区方案 |
| API 有 quirks 必须客户端处理 | 自写更可控 |

否则能用社区就用社区。**MCP server 不是核心竞争力，业务集成才是**。把时间花在"怎么让 Agent 在你的工作流里干活"，而不是"怎么把第 N 个 REST API 包装成 MCP"。

---

> 姐妹篇：[接内网 GitLab 用社区 MCP server，别自己写](/posts/dev/mcp-server-third-party)
> 实测环境：禅道 v18+ 自托管 · TypeScript + Node 22 · MCP SDK 0.5+
