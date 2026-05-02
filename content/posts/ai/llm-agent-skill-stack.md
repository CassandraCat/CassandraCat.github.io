---
title: "LLM → Agent → Skill：理解这条概念栈"
date: 2026-05-02
lastmod: 2026-05-02
tags:
  - ai
  - llm
  - agent
  - mcp
  - learning
description: "LM、Token、Context、Prompt、Tool、MCP、Agent、Skill——这套术语堆栈层层包裹。理清每一层在干什么、为什么需要，比记定义更重要。"
---

> 学 AI 工程的时候最容易卡在术语层级。LM、Token、Context、Prompt、Tool、MCP、Agent、Skill——名字一堆，关系不清。这篇把它们拆开，看一层一层是怎么叠起来的。

## LM：底层引擎

**Large Language Model**，简称大模型。底层架构是 Transformer（2017 年 Google 论文《Attention is All You Need》提出）。

工作原理简单说就是**文字接龙**——给一段文字，预测下一个概率最高的词。看起来朴素，但 scaling 上去之后涌现出了理解、推理、翻译、编程的能力。

发展节点：

| 时间 | 事件 |
|------|------|
| 2017 | Transformer 架构提出 |
| 2022.11 | GPT-3.5 发布，第一个达到可用级别的大模型 |
| 2023.03 | GPT-4 发布，能力天花板大幅抬高 |
| 2023+ | Claude / Gemini / Llama 等涌现，多强竞争 |

## Token：数据单位

LM 不直接处理文字，处理的是 **Token**。

Tokenizer（分词器）把文本切成 Token，然后映射成数字 ID。LM 看到的全是数字。

| 语言 | Token 关系 |
|------|-----------|
| 中文词语 | 一一对应或被拆分（如"工作"→"工"+"作"） |
| 英文常见词 | 通常 1 词 = 1 Token |
| 复杂英文词 | 会被拆（如 "helpfully"→"help"+"ful"） |
| emoji / 特殊字符 | 可能 1 字符 = 多个 Token |

参考量化：

- 1 Token ≈ 0.75 个英文单词
- 1 Token ≈ 1.5-2 个汉字

为什么要懂 Token？因为**计费按 Token**，**Context Window 限制按 Token**，**长文本截断按 Token**。绕不过这个最小单位。

## Context：临时记忆体

LM 每次推理时接收的所有信息总和叫 **Context**。

组成：

- 用户当前问题
- 对话历史（多轮对话时）
- 当前已生成的部分输出
- 可调用的工具列表
- System Prompt（开发者后台配的人设）

容量上限叫 **Context Window**。当前主流：

| 模型 | Context Window |
|------|----------------|
| GPT-5.4 | ~105 万 Token |
| Gemini 3.1 Pro | ~100 万 Token |
| Claude Opus 4.6 | ~100 万 Token |

超过怎么办？

- 截断：滚动窗口，丢掉最早的对话
- 摘要：把老对话压缩成摘要再喂
- **RAG**：把外部知识库分块，每次只拉相关片段进 Context

## Prompt：交互接口

给 LM 的具体指令叫 Prompt。两类：

- **User Prompt**：用户当下的问题（"帮我写一段 Vue 代码"）
- **System Prompt**：开发者后台配的人设 + 输出规则（"你是耐心的数学老师，引导思考而不是直接给答案"）

Prompt Engineering 一年前还是显学，现在重要性降了——主要因为模型理解力变强，能猜模糊意图。但**清晰、具体、可测、明确**这四个原则永远不过时。

## Tool：外部能力

LM 自己不能查实时天气、不能算复杂数学、不能改文件系统——这些超出"接龙"范畴。**Tool** 就是给 LM 调用外部世界的接口。

工作流：

1. 用户提问 → 平台把问题 + 工具列表喂给 LM
2. LM 决定要调哪个工具，生成调用参数（JSON）
3. 平台执行调用，把结果返回给 LM
4. LM 整理结果输出

LM 是**决策方**（选什么工具、怎么传参、怎么解释结果），工具是**执行方**（干具体活），平台是**协调方**。

## MCP：工具标准化

每家 LLM 平台（OpenAI / Anthropic / Google）的工具接入规范都不一样——Anthropic 的 function calling 跟 OpenAI 的 tool use 字段名都不同。一个工具想接入三家就得写三套适配。

**Model Context Protocol** 是统一标准。比喻就是手机充电的 Type-C：

- 工具开发者按 MCP 规范写一次
- 所有支持 MCP 的平台（Claude Code / Cursor / Continue / ChatGPT Desktop 等）都能用

MCP 解决的不是"AI 能不能调用工具"，而是"AI 调用工具的协议怎么不重复造轮子"。

## Agent：自主决策系统

**Agent** = 能自主规划 + 自主调用工具 + 持续推进 + 最终完成用户任务的系统。

跟单次 LLM 调用的区别：单次调用是"一问一答"，Agent 是"循环推理 + 行动 + 观察"直到任务完成。

代表产品：Claude Code / Codex / Cursor / Gemini CLI / GitHub Copilot Workspace。

经典模式：

- **ReAct**：Reasoning + Acting 交替循环（思考 → 调工具 → 看结果 → 再思考）
- **Plan-and-Execute**：先生成完整计划，再分步执行
- **Reflexion**：执行后自我反思，迭代优化

## Skill：任务定制

Agent 是通用决策系统。**Skill** 是给 Agent 的"任务说明书"，告诉它"在某个特定场景该怎么做"。

组成：

- **元数据**：name + description（用于路由匹配）
- **指令集**：目标 + 步骤 + 判断规则 + 输出格式 + 示例

Claude Code 的 Skill 存在 `~/.claude/skills/<skill-name>/SKILL.md`，文件名固定 `SKILL.md`。

加载机制是**懒加载**：用户问题跟 skill 的 name/description 匹配上才把整份 skill 内容塞进 Context，避免无关 skill 浪费 Token。

## 整条栈

```
LM (核心引擎)
  ↓
Token (数据单位)
  ↓
Context (记忆空间)
  ↓
Prompt (交互接口)
  ↓
Tool (外部能力)
  ↓
MCP (工具标准)
  ↓
Agent (决策系统)
  ↓
Skill (任务定制)
```

每一层都包着下一层，越往下越具体。理解这条栈最实用的好处是：**写 AI 应用时知道每个问题该在哪一层解决**——

- 模型能力不够 → 换 LM
- 上下文丢失 → 调 Context 策略
- 输出不准 → 优化 Prompt
- 缺信息 → 加 Tool
- 工具复用难 → 上 MCP
- 多步任务 → 用 Agent 框架
- Agent 在某场景表现差 → 写 Skill

知道在哪一层，问题就解决一半了。

---

> 来源：[B 站 · 马克的技术工作坊](https://www.bilibili.com/video/BV1E7wtzaEdq/) 整理 + 我的工程理解
