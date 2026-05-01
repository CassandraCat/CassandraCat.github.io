---
title: 路线图 · 2026.05—2027.01
date: 2026-05-01
description: AI 工程 + 计算机图形学 + 算法 三线并行 · 9 个月 · 1260 小时
cssclasses:
  - roadmap-page
---

<div class="roadmap-page">

> **三线并行 · 每天 5h · 9 个月 · 1260h 总投入**  
> 主线 AI 工程，并线 GAMES101+202 + 左程云体系班，所有产出注入 BIM+GIS 项目 (hy-bim-gis)。

<div class="roadmap-summary">
  <div class="rm-stat"><span class="rm-num" id="rm-done">0</span><span class="rm-label">已完成</span></div>
  <div class="rm-stat"><span class="rm-num" id="rm-total">0</span><span class="rm-label">总任务</span></div>
  <div class="rm-stat"><span class="rm-num" id="rm-pct">0%</span><span class="rm-label">进度</span></div>
</div>

<div class="rm-progress-bar"><div class="rm-progress-fill" id="rm-fill"></div></div>

## Phase 1 · AI Backend 基础 <span class="rm-phase-meta">5月—6月 · 跑通全栈AI对话</span>

### 5月 · AI 工程
- [ ] JDK 17 + Spring Boot + Spring AI 环境
- [ ] 第一个 ChatClient · /api/chat 接口 Postman 打通
- [ ] 多模型路由配置 (Claude / DeepSeek 可切换)
- [ ] SSE 流式输出 · TTFT 基线记录
- [ ] JWT 鉴权 + Redis 对话历史 (滑动窗口10轮)
- [ ] 完成 Prompt Engineering for Developers 课程 (5h)
- [ ] 建立个人 System Prompt 库
- [ ] BIM 场景初始化代码生成助手 v0.1 (给团队前端用)

### 5月 · 图形学
- [ ] GAMES101 L1 Overview
- [ ] GAMES101 L2 Linear Algebra Review
- [ ] GAMES101 L3 2D Transformation
- [ ] GAMES101 L4 3D Transformation + MVP 矩阵
- [ ] 作业 0 · 环境配置 + 旋转点
- [ ] 作业 1 · 实现 model/view/projection 矩阵
- [ ] 虎书 Ch.1-7 同步阅读
- [ ] 写一页 MVP 矩阵 cheatsheet

### 5月 · 算法
- [ ] 时间空间复杂度 + 大 O 表示法
- [ ] 异或运算经典题 (奇数次出现)
- [ ] 选择/冒泡/插入排序默写
- [ ] 二分查找 3 种模板 (左闭右闭 / 左闭右开 / 左开右开)
- [ ] LeetCode: 704 / 35 / 34 / 162
- [ ] 归并排序 + Master 公式
- [ ] 小和问题 / 逆序对
- [ ] 快排 1.0 / 2.0 / 3.0 + 荷兰国旗
- [ ] 堆排序 + 优先队列 (TopK / 数据流中位数)
- [ ] 桶排序 / 计数排序 / 基数排序

### 6月 · AI 工程
- [ ] 全局异常 (@ControllerAdvice) + AI 限流/超时
- [ ] Logback + MDC traceId 链路日志
- [ ] Actuator + Prometheus AI 指标
- [ ] JUnit5 + Mockito 单元测试
- [ ] 完整 demo 录屏 (登录→流式→记忆→多模型)
- [ ] 技术博客 1 · 「Spring AI 生产级对话服务的 10 个坑」
- [ ] BIM 代码助手 v0.2 (含对话记忆)

### 6月 · 图形学
- [ ] GAMES101 L5 光栅化 1 (三角形)
- [ ] GAMES101 L6 光栅化 2 (反走样 / Z-Buffer / MSAA)
- [ ] GAMES101 L7 着色 1 (Blinn-Phong)
- [ ] GAMES101 L8 着色 2 (着色频率 / 管线 / 纹理映射)
- [ ] 作业 2 · 光栅化三角形 + Z-Buffer + MSAA
- [ ] 作业 3 启动 · Blinn-Phong 着色器
- [ ] 虎书 Ch.8-10 同步

### 6月 · 算法
- [ ] 单链表 / 双链表反转 (递归+迭代)
- [ ] 链表 6 大经典 (回文/分区/复制/相交)
- [ ] LeetCode: 206 / 92 / 25 / 234 / 86 / 138 / 160
- [ ] 栈队列实现 + 最小栈 + 互相实现
- [ ] 单调栈结构 (柱状图最大矩形)
- [ ] 滑动窗口最大值 (单调队列)
- [ ] 哈希函数 + 一致性哈希
- [ ] 设计 RandomPool / 蓄水池抽样
- [ ] 布隆过滤器原理

## Phase 2 · RAG 工程 <span class="rm-phase-meta">7月—8月 · 朴素到 Advanced</span>

### 7月 · AI 工程
- [ ] Docker PostgreSQL + pgvector 跑通
- [ ] OpenAI Embedding (text-embedding-3-small)
- [ ] 4 种切分策略对比实验 (Fixed/Sentence/Paragraph/Semantic)
- [ ] chunk_overlap 影响实验 (0% → 50%)
- [ ] 完整 RAG Pipeline (PDF 上传到流式回答)
- [ ] 引用来源标注
- [ ] 完成 LangChain for LLM Application Dev 课程 (8h)
- [ ] 精读 RAG 论文 (Lewis 2020) + 读后感

### 7月 · 图形学
- [ ] GAMES101 L9 着色 3 (重心坐标 / MIPMAP)
- [ ] GAMES101 L10 几何 1 (隐式 / 显式)
- [ ] GAMES101 L11 几何 2 (贝塞尔曲线 / B-样条)
- [ ] GAMES101 L12 几何 3 (Mesh 简化 / QEM)
- [ ] 作业 3 完成 (Bilinear 纹理过滤)
- [ ] 作业 4 · 贝塞尔曲线
- [ ] 联系 hy-bim-gis 的 Douglas-Peucker decimation

### 7月 · 算法
- [ ] 二叉树前/中/后序遍历 (递归+迭代)
- [ ] 层序遍历 (BFS)
- [ ] LeetCode: 144 / 94 / 145 / 102
- [ ] 序列化 / 反序列化
- [ ] 折纸问题 / 最大宽度
- [ ] 二叉树 DP 套路 (左右树要什么)
- [ ] 平衡 / 搜索 / 完全 / 满二叉树判断
- [ ] LCA 最近公共祖先
- [ ] LeetCode: 110 / 98 / 958 / 222 / 236 / 51 / 78 / 46

### 8月 · AI 工程
- [ ] HyDE 实现 (两次 LLM 调用)
- [ ] Cohere Rerank API 接入
- [ ] BM25 + 向量稠密 Hybrid Search
- [ ] RRF 排序融合
- [ ] RAGAS 4 指标评估测试集 (20条)
- [ ] 三版本对比打分 (Naive / HyDE / Hybrid)
- [ ] 个人 GIS+CG 知识库入库
- [ ] 技术博客 2 · 「RAG 工程实践: Naive 到 Advanced」
- [ ] 技术博客 3 · 「构建 GIS 领域知识库的 5 个坑」
- [ ] RAG 决策树文档 (Prompt vs RAG vs Fine-tune)

### 8月 · 图形学
- [ ] GAMES101 L13 光线追踪 1 (Whitted)
- [ ] GAMES101 L14 光线追踪 2 (BVH/KD-Tree)
- [ ] GAMES101 L15 光线追踪 3 (Radiometry/BRDF)
- [ ] GAMES101 L16 光线追踪 4 (Path Tracing)
- [ ] 作业 5 · 光线-三角形相交 (Möller-Trumbore)
- [ ] 作业 6 · BVH 加速结构
- [ ] 作业 7 启动 · Path Tracing
- [ ] 写出渲染方程并解释

### 8月 · 算法
- [ ] 暴力递归 4 种尝试模型
- [ ] 记忆化搜索 → 严格表 DP 转换方法
- [ ] 背包 (01 / 完全 / 多重)
- [ ] LIS / LCS / 编辑距离
- [ ] 区间 DP (回文子序列 / 戳气球)
- [ ] LeetCode: 300 / 1143 / 72 / 416 / 877 / 5 / 312 / 10 / 44

## Phase 3 · Agent 工程 <span class="rm-phase-meta">9月—10月 · 自主推理</span>

### 9月 · AI 工程
- [ ] 精读 Attention is All You Need (Vaswani 2017)
- [ ] Self-Attention / Multi-Head / Position Encoding 笔记
- [ ] Spring AI Function Calling 注册 3 个工具
- [ ] 给 Agent 接入 hy-bim-gis 的 profiler.ts
- [ ] 给 Agent 接入 drawCallCounter.ts
- [ ] 渲染性能诊断 Agent 雏形
- [ ] 精读 ReAct 论文 (Yao 2022)
- [ ] LangChain4j ReAct Agent 实现
- [ ] Agent 三层记忆 (短期/长期/情景)

### 9月 · 图形学
- [ ] GAMES101 L17 材质 (BRDF / 微表面)
- [ ] GAMES101 L18 高级渲染 (双向 / Metropolis)
- [ ] GAMES101 L19 摄像机 + 光场
- [ ] GAMES101 L20 颜色感知
- [ ] GAMES101 L21-L22 动画 (关键帧 / IK)
- [ ] 作业 7 完成 · Path Tracing (Cornell Box)
- [ ] 作业 8 · 质点弹簧绳子
- [ ] **GAMES101 收官博客**
- [ ] 渲染图作品 1-2 张

### 9月 · 算法
- [ ] 状压 DP + TSP
- [ ] 树形 DP (二叉树最大路径和 / 打家劫舍 III)
- [ ] 图的三种表达 (邻接矩阵 / 邻接表 / 边集)
- [ ] DFS / BFS 模板
- [ ] 拓扑排序 (DAG)
- [ ] Prim / Kruskal 最小生成树
- [ ] 并查集 (Union-Find)
- [ ] Dijkstra / Bellman-Ford / Floyd
- [ ] LeetCode: 124 / 337 / 943 / 200 / 207 / 547 / 743

### 10月 · AI 工程 ⭐
- [ ] Multi-Agent Orchestrator + Specialist
- [ ] Agent 间通信 (结构化 JSON)
- [ ] Agentic RAG (Self-RAG + Corrective RAG)
- [ ] Guardrails 三道防线 (输入/输出/工具)
- [ ] Human-in-the-Loop
- [ ] 技术博客 4 · 「构建生产级 Agent 系统的 5 个关键决策」
- [ ] 渲染诊断 Agent 团队 demo

### 10月 · 图形学 ⭐⭐⭐
- [ ] GAMES202 L1-L2 概览 + CG 复习
- [ ] GAMES202 L3 实时阴影 1 (Shadow Mapping)
- [ ] GAMES202 L4 实时阴影 2 (PCF/PCSS/VSSM/MSM)
- [ ] 精读 Cascaded Shadow Maps (NVIDIA 2007)
- [ ] 作业 1 · Shadow Mapping + PCF + PCSS
- [ ] **重写 hy-bim-gis ShadowController.ts (4 档预设理论补完)**
- [ ] 新增 PCSS 第 5 档 ultra 预设
- [ ] 技术博客 5 · 「从 GAMES202 到生产级 CSM 的工程化」
- [ ] 同场景 5 档预设视觉对比图

### 10月 · 算法
- [ ] Trie 前缀树 + AutoComplete
- [ ] KMP 字符串匹配 (next 数组)
- [ ] Manacher 最长回文 O(N)
- [ ] 线段树 (单点更新 + 区间查询 + 懒标记)
- [ ] 滑动窗口最长无重复 / 最小覆盖
- [ ] 单调栈进阶 (接雨水 / 最大矩形)
- [ ] LeetCode: 208 / 28 / 5 / 307 / 3 / 76 / 42 / 84

## Phase 4 · Production AI <span class="rm-phase-meta">11月 · 跑稳跑省跑快</span>

### 11月 · AI 工程
- [ ] SkyWalking 链路追踪接入
- [ ] LLM 专项埋点 (Token / 延迟 / 模型)
- [ ] Grafana AI 成本仪表盘
- [ ] hy-bim-gis ai-profile.ts 接入 SkyWalking
- [ ] Prompt Caching (Anthropic / OpenAI 原生)
- [ ] 语义缓存 (相似度 0.95 命中)
- [ ] 模型路由决策树 (Haiku / Sonnet / Opus)
- [ ] LLM-as-Judge 评估
- [ ] Eval 测试集 60+ 用例
- [ ] A/B + Shadow Mode 测试框架
- [ ] Prompt Injection 防御
- [ ] AI 部署 10 项必检清单

### 11月 · 图形学
- [ ] GAMES202 L5 环境贴图 + PRT (球谐函数)
- [ ] GAMES202 L6-L7 GI (RSM/LPV/VXGI)
- [ ] GAMES202 L8 SSR
- [ ] GAMES202 L9 PBR 1 (微表面 / Disney BRDF)
- [ ] 作业 2 · PRT 预计算
- [ ] 作业 3 · SSR 实现
- [ ] 微表面理论联系 BIM 材质库

### 11月 · 算法
- [ ] 单调栈进阶 (每日温度 / 下一个更大)
- [ ] 一维前缀和 + 差分数组
- [ ] 二维前缀和
- [ ] 并查集按秩合并 + 路径压缩
- [ ] Tarjan 强连通分量
- [ ] 区间 DP (戳气球 / 最长回文子序列)
- [ ] 最大子矩阵
- [ ] LeetCode: 739 / 303 / 304 / 312 / 221 / 85 / 363

## Phase 5 · Fine-tuning <span class="rm-phase-meta">12月 · 第二关键融合月</span>

### 12月 · AI 工程
- [ ] Fine-tune vs RAG vs Prompt 决策框架
- [ ] LoRA 数学原理 (低秩分解)
- [ ] QLoRA 4-bit 量化 + LoRA
- [ ] 精读 LIMA (Less Is More) 论文
- [ ] 收集 hy-bim-gis 团队代码 ≥100 条
- [ ] 评估集构建 (与训练集不重叠)
- [ ] Unsloth + PEFT 微调 Llama 3.1 8B
- [ ] LoRA 权重合并 + Ollama 部署
- [ ] BIM 代码风格小模型评估对比

### 12月 · 图形学 ⭐⭐⭐
- [ ] GAMES202 L10 PBR 2 (Kulla-Conty + IBL)
- [ ] GAMES202 L11-L12 RTRT (RTX / SVGF)
- [ ] GAMES202 L13-L14 抗锯齿 (TAA / DLSS)
- [ ] GAMES202 L15 LOD (MIP / 几何)
- [ ] GAMES202 L16 工业实践 (Nanite)
- [ ] 作业 4 · Kulla-Conty BRDF
- [ ] 精读 Nanite Virtual Geometry (Karis 2021)
- [ ] **重写 hy-bim-gis core/lod/ 模块**
- [ ] SSE 数学推导 + Hysteresis 理论补完
- [ ] 技术博客 6 · 「从 GAMES202 到生产级 LOD 工程化」

### 12月 · 算法
- [ ] DP 终极 (双串 / 三维 / 地下城游戏)
- [ ] 贪心算法 (会议室 / 哈夫曼 / 跳跃游戏)
- [ ] AC 自动机 (多模式串)
- [ ] 后缀数组基础
- [ ] LeetCode Hot 100 完整刷一遍
- [ ] 3 套大厂笔试题模拟 (限时 2h)
- [ ] 错题本归档
- [ ] LeetCode: 1143 / 583 / 712 / 174 / 55 / 45 / 134 / 763

## Phase 6 · 综合产出 <span class="rm-phase-meta">2027 · 1月 · 沉淀 + 2027 规划</span>

### 1月 · AI 工程 ⭐
- [ ] **三维场景 AI 研发中台旗舰项目**
- [ ] 能力 1 · 自然语言→空间查询
- [ ] 能力 2 · Vibe Coding 助手 (用 12月微调小模型)
- [ ] 能力 3 · 渲染性能诊断 (PBR/SSR/LOD 多维)
- [ ] 能力 4 · GIS+CG 知识库 RAG 集成
- [ ] 生产级保障 (链路+成本+Eval) 全部接入
- [ ] 公司内网部署上线
- [ ] 项目 README (架构图 + 选型理由)
- [ ] 年度博客 · 「2026 三线并行学到的 10 件事」
- [ ] 个人 Cookbook 7 章整理

### 1月 · 图形学
- [ ] Cesium Cesium3DTileset.js 源码精读
- [ ] 精读 3D Gaussian Splatting (Kerbl 2023)
- [ ] 升级 ai-gpu.ts 到 PBR 材质审查
- [ ] hy-bim-gis 完整渲染管线图
- [ ] CG 学习电子书 (Cookbook 第 6 章)

### 1月 · 算法
- [ ] 9 个月算法笔记整理
- [ ] 大厂高频题汇总 (3 年内 中等+困难)
- [ ] LeetCode 周赛 4 场
- [ ] 累计 ≥200 题
- [ ] 2027 算法计划定稿

### 1月 · 2027 方向定义
- [ ] 旗舰项目最感兴趣模块识别
- [ ] 候选方向 5 选 1 (基础设施 / 产品 / 图形学 / 引擎 / 开源)
- [ ] 2027 Q1 第一个具体任务
- [ ] 路线图结束，成长不结束

</div>

<script>
(function() {
  const STORAGE_PREFIX = 'rm-task-';
  let updateScheduled = false;

  function makeId(li) {
    const text = (li.textContent || '').trim().slice(0, 120);
    let h = 0;
    for (let i = 0; i < text.length; i++) {
      h = ((h << 5) - h) + text.charCodeAt(i);
      h |= 0;
    }
    return STORAGE_PREFIX + Math.abs(h).toString(36);
  }

  function updateProgress() {
    const cbs = document.querySelectorAll('.roadmap-page input[type="checkbox"]');
    const total = cbs.length;
    let done = 0;
    cbs.forEach(cb => { if (cb.checked) done++; });
    const pct = total === 0 ? 0 : Math.round(done / total * 100);
    const elDone = document.getElementById('rm-done');
    const elTotal = document.getElementById('rm-total');
    const elPct = document.getElementById('rm-pct');
    const elFill = document.getElementById('rm-fill');
    if (elDone) elDone.textContent = done;
    if (elTotal) elTotal.textContent = total;
    if (elPct) elPct.textContent = pct + '%';
    if (elFill) elFill.style.width = pct + '%';
    updateScheduled = false;
  }

  function init() {
    const cbs = document.querySelectorAll('.roadmap-page input[type="checkbox"]');
    cbs.forEach(cb => {
      cb.disabled = false;
      cb.removeAttribute('disabled');
      const li = cb.closest('li');
      if (!li) return;
      const id = makeId(li);
      cb.dataset.rmId = id;
      const stored = localStorage.getItem(id);
      if (stored === '1') cb.checked = true;
      cb.addEventListener('change', () => {
        localStorage.setItem(id, cb.checked ? '1' : '0');
        if (!updateScheduled) {
          updateScheduled = true;
          requestAnimationFrame(updateProgress);
        }
      });
    });
    updateProgress();
  }

  // Quartz uses SPA navigation; re-init on every nav event
  document.addEventListener('nav', init);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>
