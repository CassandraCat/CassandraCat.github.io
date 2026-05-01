---
title: 路线图 · 2026.05—2027.01
date: 2026-05-01
description: AI 工程 + 计算机图形学 + 算法 三线并行 · 9 个月 · 1260 小时
---

<div class="roadmap-page">

<div class="rm-intro">
<strong>三线并行 · 每天 5h · 9 个月 · 1260h 总投入</strong><br>
主线 AI 工程，并线 GAMES101+202 + 左程云体系班，所有产出注入 BIM+GIS 项目 (hy-bim-gis)。
</div>

<div class="roadmap-summary">
<div class="rm-stat"><span class="rm-num" id="rm-done">0</span><span class="rm-label">已完成</span></div>
<div class="rm-stat"><span class="rm-num" id="rm-total">0</span><span class="rm-label">总任务</span></div>
<div class="rm-stat"><span class="rm-num" id="rm-pct">0%</span><span class="rm-label">进度</span></div>
</div>

<div class="rm-progress-bar"><div class="rm-progress-fill" id="rm-fill"></div></div>

<div class="rm-phase-banner rm-pb1">
<span class="rm-phase-num">PHASE 01</span>
<span class="rm-phase-title">AI Backend 基础</span>
<span class="rm-phase-sub">5月—6月 · 跑通全栈AI对话 · CG开荒 · 算法奠基</span>
</div>

<div class="rm-month">
<div class="rm-mhdr"><span class="rm-mtag">5月</span><span class="rm-mtitle">Spring AI 第一关 · GAMES101 入门 · 算法奠基</span><span class="rm-mnote">AI 56h · CG 56h · Algo 28h</span></div>

<div class="rm-track rm-t-ai"><span class="rm-tk-tag">AI</span><span class="rm-tk-text">Spring AI · 流式对话 · 第一个能跑的 AI 应用</span><span class="rm-tk-note">每天 2h</span></div>

<div class="rm-week rm-c1">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-b1">环境</span><span class="rm-w-title">JDK 17 + Spring Boot + Spring AI 跑通第一个 LLM 调用</span></div>

- [ ] JDK 17 + IntelliJ 环境 (1h 搞定)
- [ ] Spring Initializr 生成项目: spring-ai-openai-spring-boot-starter
- [ ] application.yml: API Key / base-url / model 多模型路由
- [ ] 第一个 ChatClient · /api/chat 接口 Postman 打通

<div class="rm-rs">📖 <a href="https://docs.spring.io/spring-ai/reference">Spring AI 官方文档</a> · 全程参考</div>
<div class="rm-rs">📖 <a href="https://docs.anthropic.com">Anthropic API 文档</a> · Claude 调用参考</div>
</div>

<div class="rm-week rm-c1">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-b1">流式</span><span class="rm-w-title">SSE 流式输出 · 打字机效果 · TTFT 基线</span></div>

- [ ] 理解 Flux&lt;String&gt; 响应式流 vs Promise 本质差异
- [ ] 后端 SseEmitter + 前端 EventSource 接收
- [ ] 三个坑: 连接超时 / 断开重连 / [DONE] 结束标志
- [ ] 前端 Vue useStreamChat composable (复用到 hy-bim-gis)
- [ ] 记录 TTFT 基线数据
</div>

<div class="rm-week rm-c1">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-b1">鉴权+记忆</span><span class="rm-w-title">JWT 鉴权 + 对话记忆 · 从无状态到有上下文</span></div>

- [ ] Spring Interceptor 实现 JWT 校验
- [ ] 对话历史存 Redis: key = userId:sessionId, TTL=24h
- [ ] 滑动窗口最近 10 轮历史
- [ ] System Prompt 写入 yml 支持多角色 (BIM 助手 / 通用助手)
</div>

<div class="rm-week rm-c1">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-bpaper">课程</span><span class="rm-w-title">Prompt Engineering for Developers + 第一个 BIM 试水 Demo</span></div>

- [ ] 完成 ChatGPT Prompt Engineering for Developers 课程 (5h)
- [ ] 掌握 Zero-shot / Few-shot / CoT / ReAct 区别和适用场景
- [ ] 同需求 4 种策略测试，记录质量差异
- [ ] 个人 System Prompt 库 (markdown 长期维护)
- [ ] **BIM 场景初始化代码生成助手 v0.1** (给团队前端用)

<div class="rm-rs">🎓 <a href="https://learn.deeplearning.ai/courses/chatgpt-prompt-eng">DeepLearning.AI · 5h 免费</a></div>
<div class="rm-deliv"><strong>5月 AI 验收</strong> · 流式对话 + JWT + Redis 记忆 + 多模型切换 + TTFT 基线 + Prompt 策略库 ≥5 条 + BIM 助手雏形可用</div>
</div>

<div class="rm-track rm-t-cg"><span class="rm-tk-tag">CG</span><span class="rm-tk-text">GAMES101 L1-L4 · 概述 + 线性代数 + 变换</span><span class="rm-tk-note">每天 2h · 视频 + 笔记 + 作业 0-1</span></div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L1-L2 · 计算机图形学概述 + 线性代数复习</span></div>

- [ ] L1 Overview (1h) · 闫令琪概述图形学四大主题
- [ ] L2 Linear Algebra Review (1.5h) · 向量、矩阵、点积、叉积
- [ ] 笔记重点 · 叉积的几何意义 (法向量 / 判左右 / 面积)
- [ ] 虎书 Ch.2 Miscellaneous Math
- [ ] 作业 0 · 配置环境 + 旋转一个点

<div class="rm-rs">🎬 <a href="https://www.bilibili.com/video/BV1X7411F744">GAMES101 闫令琪 · 全 22 讲</a></div>
<div class="rm-rs">🌐 <a href="https://games-cn.org/intro-graphics">GAMES101 官方课程主页</a></div>
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L3 · 2D 变换 (旋转 / 缩放 / 切变 / 齐次坐标)</span></div>

- [ ] L3 Transformation (1.5h) · 缩放 / 旋转 / 平移要齐次坐标
- [ ] 齐次坐标: 为什么加一维, 点 (x,y,1) vs 向量 (x,y,0)
- [ ] 变换复合顺序: 矩阵不可交换
- [ ] 虎书 Ch.6 Transformation Matrices
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L4 · 3D 变换 + MVP 矩阵 ⭐</span></div>

- [ ] L4 Transformation Cont. · 罗德里格斯公式
- [ ] View 变换 / 正交投影 / 透视投影
- [ ] **融合** · hy-bim-gis camera 模块 setView() 内部就是 MVP
- [ ] 虎书 Ch.7 Viewing
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-bcheck">作业</span><span class="rm-w-title">作业 1 · 旋转和投影 + 第一阶段总结</span></div>

- [ ] 实现 get_model_matrix / get_view_matrix / get_projection_matrix
- [ ] 提高项 · 任意轴旋转 (罗德里格斯)
- [ ] L1-L4 cheatsheet (一页 A4)

<div class="rm-rs">📖 虎书 · Fundamentals of Computer Graphics 4th · Ch.1-7</div>
<div class="rm-deliv"><strong>5月 CG 验收</strong> · L1-L4 视频+笔记 + 作业 0-1 + 能向他人解释 MVP 矩阵推导</div>
</div>

<div class="rm-track rm-t-algo"><span class="rm-tk-tag">ALGO</span><span class="rm-tk-text">左程云体系 · 复杂度 + 排序基础 + 二分</span><span class="rm-tk-note">每天 1h · 体系班 1-15 节</span></div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-balgo">第1-3节</span><span class="rm-w-title">复杂度 · 异或运算 · 简单排序</span></div>

- [ ] 时间空间复杂度 · 大 O 表示法
- [ ] 异或运算 · 经典题 (奇数次出现的数)
- [ ] 选择 / 冒泡 / 插入排序 (各 1 遍默写)
- [ ] 对数器思想

<div class="rm-rs">🎬 <a href="https://www.bilibili.com">左程云算法体系学习班</a></div>
<div class="rm-rs">📖 程序员代码面试指南 (左程云 · 第二版)</div>
<div class="rm-rs">🔗 <a href="https://leetcode.cn">LeetCode 中国 · 全程刷题 ≥200 题</a></div>
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-balgo">第4-5节</span><span class="rm-w-title">二分查找 · 各种变体 · 局部最小值</span></div>

- [ ] 二分基础 · 有序数组找数
- [ ] 找 ≥ num 的最左 / ≤ num 的最右
- [ ] 无序数组找局部最小
- [ ] LeetCode: 704 / 35 / 34 / 162
- [ ] 二分模板 3 种写法
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-balgo">第6-8节</span><span class="rm-w-title">归并排序 · 小和问题 · 逆序对</span></div>

- [ ] 归并排序 (递归 + 非递归)
- [ ] Master 公式 · T(N) = aT(N/b) + O(N^d)
- [ ] 小和、逆序对应用
- [ ] LeetCode: 912 / 剑指 51
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-balgo">第9-15节</span><span class="rm-w-title">快排 · 荷兰国旗 · 堆排序 · 桶排序</span></div>

- [ ] 荷兰国旗 + 快排 1.0 / 2.0 / 3.0
- [ ] 堆 (大根堆 / 小根堆) heapInsert + heapify
- [ ] 优先队列 · TopK / 数据流中位数
- [ ] 桶排序 / 计数排序 / 基数排序
- [ ] LeetCode: 215 / 295

<div class="rm-deliv"><strong>5月 算法验收</strong> · 3 简单 + 归并 + 快排 + 堆排默写 + 二分模板熟练 + LeetCode ≥15</div>
</div>

<div class="rm-fusion">
<div class="rm-fu-lbl">5月领域融合 · BIM+GIS 锚点</div>

- CG L3-L4 学的 MVP 矩阵 = hy-bim-gis 的 `core/camera/` 模块底层
- AI W4 第一个 BIM Demo · 场景初始化代码生成助手注入团队封装规范
- 算法分治思维 = 后续 CG L12 (Mesh 简化) + Douglas-Peucker decimation 同源
</div>

</div><!-- /rm-month 5月 -->

<div class="rm-month">
<div class="rm-mhdr"><span class="rm-mtag">6月</span><span class="rm-mtitle">AI Backend 收官 · GAMES101 光栅化与着色 · 链表与栈队列</span><span class="rm-mnote">AI 56h · CG 56h · Algo 28h</span></div>

<div class="rm-track rm-t-ai"><span class="rm-tk-tag">AI</span><span class="rm-tk-text">异常处理 + 可观测性 + Phase 1 完整产出</span></div>

<div class="rm-week rm-c1">
<div class="rm-w-hdr"><span class="rm-w-label">W1-2</span><span class="rm-bdg rm-b1">生产级</span><span class="rm-w-title">异常处理 + 日志 + 基础可观测</span></div>

- [ ] @ControllerAdvice 全局异常 (AI 限流/超时单独处理)
- [ ] Logback + MDC · 每个 AI 请求带 traceId
- [ ] 记录每次请求 · 模型 / Token / 延迟 / 流式
- [ ] Actuator + Prometheus · ai_request_total / ai_token_total
- [ ] 熔断设计 · 上游 LLM 挂了的降级方案
</div>

<div class="rm-week rm-c1">
<div class="rm-w-hdr"><span class="rm-w-label">W3-4</span><span class="rm-bdg rm-b1">完整demo</span><span class="rm-w-title">单元测试 + 录屏 + 技术笔记 · Phase 1 收官</span></div>

- [ ] JUnit5 + Mockito 单元测试 (Mock LLM)
- [ ] 测试重点 · Prompt 构建 / 历史窗口裁剪 / 异常路径
- [ ] 完整链路录屏 (登录→流式→记忆→多模型)
- [ ] **技术博客 1** · 「Spring AI 生产级对话服务的 10 个坑」
- [ ] **BIM 代码助手 v0.2** (含对话记忆，团队多轮迭代)

<div class="rm-deliv"><strong>Phase 1 完整验收</strong> · 可演示 AI 对话应用 + 关键指标可观测 + 博客 1 篇 + BIM v0.2 团队使用</div>
</div>

<div class="rm-track rm-t-cg"><span class="rm-tk-tag">CG</span><span class="rm-tk-text">GAMES101 L5-L8 · 光栅化 + 反走样 + 着色 1-2</span></div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L5 · 光栅化 1 (三角形 / 采样)</span></div>

- [ ] L5 Rasterization 1 · 为什么是三角形
- [ ] 像素中心点判断 · 三次叉积同号
- [ ] 包围盒 BBox 优化
- [ ] 虎书 Ch.8 The Graphics Pipeline (核心章节)
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L6 · 光栅化 2 (反走样 / Z-Buffer / MSAA) ⭐</span></div>

- [ ] 走样根本原因 · 频率 / 奈奎斯特
- [ ] 反走样 · 滤波 / SSAA / MSAA
- [ ] Z-Buffer 深度缓冲
- [ ] **融合** · hy-bim-gis 的 MSAA 配置 = 这一节理论
- [ ] 作业 2 · Z-Buffer + MSAA
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L7 · 着色 1 (Blinn-Phong)</span></div>

- [ ] L7 Shading 1 · 着色 ≠ 阴影
- [ ] 漫反射 / 镜面 / 环境光三分量
- [ ] Lambert 余弦定律
- [ ] 半程向量 H = (V+L)/|V+L|
- [ ] 虎书 Ch.10 Surface Shading
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L8 · 着色 2 (着色频率 / 管线 / 纹理)</span></div>

- [ ] L8 · Flat / Gouraud / Phong 区别
- [ ] 完整图形管线
- [ ] 纹理映射 UV 坐标
- [ ] 作业 3 启动 · Blinn-Phong + 纹理

<div class="rm-deliv"><strong>6月 CG 验收</strong> · L5-L8 视频+笔记 + 作业 2 (光栅化 + Z-Buffer + MSAA) + 作业 3 启动</div>
</div>

<div class="rm-track rm-t-algo"><span class="rm-tk-tag">ALGO</span><span class="rm-tk-text">左程云体系 · 链表 + 栈队列 + 哈希表</span></div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-balgo">第16-18节</span><span class="rm-w-title">单/双链表 · 反转 · 公共部分</span></div>

- [ ] 单/双链表 节点 + 增删改查
- [ ] 反转单链表 (递归 + 迭代)
- [ ] LeetCode: 206 / 92 / 25
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-balgo">第19-20节</span><span class="rm-w-title">链表面试题 · 回文 / 分区 / 复制 / 相交</span></div>

- [ ] 判断链表回文 (栈 / 快慢指针 + 反转)
- [ ] 链表按值分区
- [ ] 复制带随机指针的链表
- [ ] 找相交节点
- [ ] LeetCode: 234 / 86 / 138 / 160
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-balgo">第21-25节</span><span class="rm-w-title">栈队列 · 最小栈 · 单调栈 · 滑动窗口</span></div>

- [ ] 数组实现栈/队列/循环队列
- [ ] 最小栈 + 用栈实现队列
- [ ] 单调栈结构 (左右最近大/小)
- [ ] 滑动窗口最大值 (单调队列)
- [ ] LeetCode: 155 / 232 / 84 / 239
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-balgo">第26-30节</span><span class="rm-w-title">哈希 · RandomPool · 蓄水池抽样 · 一致性哈希</span></div>

- [ ] 哈希函数性质
- [ ] 设计 RandomPool (insert/delete/getRandom O(1))
- [ ] 蓄水池抽样
- [ ] 布隆过滤器
- [ ] 一致性哈希
- [ ] LeetCode: 380 / 381 / 528

<div class="rm-deliv"><strong>6月 算法验收</strong> · 链表 6 大题型默写 + 单调栈/滑动窗口模板 + LeetCode ≥30</div>
</div>

<div class="rm-fusion">
<div class="rm-fu-lbl">6月领域融合 · BIM+GIS 锚点</div>

- CG L6 反走样 = hy-bim-gis SuperMap3D 默认 MSAA 配置的理论基础
- CG L8 图形管线 = 你之前写 `tool/drawCallCounter.ts` 时一直在感知但没系统学过的链路
- AI Phase 1 完整产出可对接 hy-bim-gis · BIM 代码助手 v0.2 给团队用
- 算法的单调栈/滑动窗口 = 后续 RAG Sliding Window History + Re-rank Top-K 同源
</div>

<div class="rm-milestone rm-ms1">
<span class="rm-ms-flag">🏁</span>
<div>
<div class="rm-ms-title">6月底 · Phase 1 完整收官 + CG/Algo 第二阶段</div>
<div class="rm-ms-chips"><span>AI Backend 生产级</span><span>技术博客 1 篇</span><span>GAMES101 L5-L8 + 作业 2-3</span><span>链表/栈队列/哈希</span><span>LeetCode ≥30</span></div>
</div>
</div>

</div><!-- /rm-month 6月 -->

<div class="rm-phase-banner rm-pb2">
<span class="rm-phase-num">PHASE 02</span>
<span class="rm-phase-title">RAG 工程</span>
<span class="rm-phase-sub">7月—8月 · 朴素到 Advanced</span>
</div>

<div class="rm-month">
<div class="rm-mhdr"><span class="rm-mtag">7月</span><span class="rm-mtitle">RAG Pipeline + GAMES101 几何与光线追踪入门 + 二叉树</span></div>

<div class="rm-track rm-t-ai"><span class="rm-tk-tag">AI</span><span class="rm-tk-text">RAG 基础 · 从 Embedding 到完整 Pipeline</span></div>

<div class="rm-week rm-c2">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-b2">向量DB</span><span class="rm-w-title">Embedding + pgvector · 向量检索跑通</span></div>

- [ ] Docker PostgreSQL + pgvector 扩展
- [ ] Spring AI 接 OpenAI Embedding (text-embedding-3-small)
- [ ] 10 篇技术文章向量化入库
- [ ] 相似度检索 Top-K 接口
- [ ] HNSW vs IVFFlat 索引对比

<div class="rm-rs">📖 <a href="https://github.com/pgvector/pgvector">pgvector 文档</a></div>
</div>

<div class="rm-week rm-c2">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-b2">分块策略</span><span class="rm-w-title">文档切分实验 · 决定 RAG 质量上限</span></div>

- [ ] 4 种切分对比 (Fixed / Sentence / Paragraph / Semantic)
- [ ] chunk_overlap 0% → 50% 影响实验
- [ ] Metadata 设计 (source / section / page_num)
- [ ] Parent-Child Retrieval
</div>

<div class="rm-week rm-c2">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-b2">Pipeline</span><span class="rm-w-title">端到端 RAG · 从文档到答案</span></div>

- [ ] 完整 Pipeline (PDF→解析→切分→Embedding→检索→Prompt→回答)
- [ ] DocumentReader 支持 PDF / Markdown / txt
- [ ] 引用来源标注 (可信度)
- [ ] 完成 LangChain for LLM Application Dev 课程 (8h)

<div class="rm-rs">🎓 <a href="https://learn.deeplearning.ai/courses/langchain">LangChain · DeepLearning.AI · 8h 免费</a></div>
</div>

<div class="rm-week rm-c2">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-bpaper">论文</span><span class="rm-w-title">RAG 原始论文精读 (Lewis 2020)</span></div>

- [ ] 精读 Lewis et al. 2020 (5h)
- [ ] 理解 RAG vs Fine-tuning 在知识更新场景的优劣
- [ ] DPR 检索器设计
- [ ] 写读后感 500 字 · 论文 RAG vs 自己实现的差距

<div class="rm-rs">📄 <a href="https://arxiv.org/abs/2005.11401">RAG · Lewis et al. 2020</a></div>
</div>

<div class="rm-track rm-t-cg"><span class="rm-tk-tag">CG</span><span class="rm-tk-text">GAMES101 L9-L12 · 几何 + 光线追踪入门</span></div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L9 · 着色 3 (重心坐标 + MIPMAP)</span></div>

- [ ] L9 · 重心坐标 (α,β,γ) 任意属性插值
- [ ] Bilinear / Bicubic 三次插值
- [ ] MIPMAP 金字塔 + Trilinear
- [ ] 各向异性过滤
- [ ] **融合** · 你的 KTX2 转码 = MIPMAP + GPU 压缩格式
- [ ] 作业 3 收尾 · Bilinear 纹理过滤
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L10 · 几何 1 (隐式 vs 显式)</span></div>

- [ ] 隐式表示 f(x,y,z) = 0
- [ ] 显式 · 顶点列表 / 三角形面片
- [ ] CSG 布尔运算 / SDF
- [ ] **融合** · BIM 模型本质 = 顶点 + 面片 + 材质 + 元数据
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L11 · 几何 2 (贝塞尔 + B 样条 + 曲面)</span></div>

- [ ] 贝塞尔曲线 De Casteljau
- [ ] 贝塞尔曲面 (u,v) 双参数
- [ ] B 样条 / NURBS
- [ ] 作业 4 启动 · 贝塞尔曲线
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L12 · 几何 3 (网格简化) ⭐⭐⭐</span></div>

- [ ] L12 · 网格细分 (Loop / Catmull-Clark)
- [ ] 边坍缩 + 二次误差度量 QEM
- [ ] **融合 ⭐** · hy-bim-gis 的 Douglas-Peucker = 1D 简化思想
- [ ] 作业 4 完成 · 提高项 (de Casteljau 递归)

<div class="rm-deliv"><strong>7月 CG 验收</strong> · L9-L12 视频+笔记 + 作业 3 + 作业 4 + 能解释 Douglas-Peucker 与网格简化的同源性</div>
</div>

<div class="rm-track rm-t-algo"><span class="rm-tk-tag">ALGO</span><span class="rm-tk-text">左程云体系 · 二叉树基础 + 递归三步法</span></div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-balgo">第31-33节</span><span class="rm-w-title">二叉树遍历 (递归 + 迭代)</span></div>

- [ ] 前/中/后序 (递归 + 栈版)
- [ ] 层序 (BFS + 队列)
- [ ] LeetCode: 144 / 94 / 145 / 102
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-balgo">第34-35节</span><span class="rm-w-title">序列化 · 折纸 · 最大宽度</span></div>

- [ ] 序列化 (前+中序还原)
- [ ] 层序序列化 (# 占位)
- [ ] 折纸问题 / 最大宽度
- [ ] LeetCode: 297 / 449 / 662
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-balgo">第36-38节</span><span class="rm-w-title">二叉树 DP 套路 (左右树要什么)</span></div>

- [ ] 平衡二叉树判断
- [ ] 搜索二叉树判断
- [ ] 完全二叉树 / 满二叉树节点数 O(logN²)
- [ ] 最大 BST 子树 / 最远距离 / LCA
- [ ] LeetCode: 110 / 98 / 958 / 222 / 236
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-balgo">第39-42节</span><span class="rm-w-title">递归思维 · Master 公式 · N 皇后</span></div>

- [ ] Master 公式 · 求时间复杂度
- [ ] 暴力递归 → DP 转换方法论 (为后续做铺垫)
- [ ] N 皇后 + 位运算优化
- [ ] 汉诺塔 / 全排列 / 子序列
- [ ] LeetCode: 51 / 78 / 46

<div class="rm-deliv"><strong>7月 算法验收</strong> · 二叉树递归套路熟练 + 暴力递归 4 种尝试模型 + LeetCode ≥45</div>
</div>

<div class="rm-fusion">
<div class="rm-fu-lbl">7月领域融合 · BIM+GIS 锚点</div>

- CG L9 MIPMAP + 纹理压缩 = hy-bim-gis 的 `scripts/build:ktx2` 转码管线理论基础
- CG L12 网格简化 = `algorithm/lineExtension.ts` Douglas-Peucker decimation 同源 (1D 版)
- RAG W3 Pipeline 可在 8月对接 CG 知识库
</div>

</div>

<div class="rm-month">
<div class="rm-mhdr"><span class="rm-mtag">8月</span><span class="rm-mtitle">高级 RAG + GAMES101 光线追踪深入 + DP 入门</span></div>

<div class="rm-track rm-t-ai"><span class="rm-tk-tag">AI</span><span class="rm-tk-text">HyDE + Re-rank + RAGAS + 个人知识库</span></div>

<div class="rm-week rm-c2">
<div class="rm-w-hdr"><span class="rm-w-label">W1-2</span><span class="rm-bdg rm-b2">高级RAG</span><span class="rm-w-title">HyDE + Re-ranking + Hybrid Search</span></div>

- [ ] HyDE 实现 (两次 LLM 调用)
- [ ] 测试 HyDE 在哪类问题有效
- [ ] 两阶段 · 向量召回 50 + CrossEncoder Re-rank Top-5
- [ ] Cohere Rerank API 接入
- [ ] BM25 + 向量 Hybrid Search + RRF 融合
</div>

<div class="rm-week rm-c2">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-b2">评估</span><span class="rm-w-title">RAGAS 评估体系 · 给 RAG 打分</span></div>

- [ ] RAGAS 4 指标 (Faithfulness / Answer Relevancy / Context Precision / Context Recall)
- [ ] 测试集 20 条问答对
- [ ] 三版本对比 (Naive / HyDE / Hybrid)
- [ ] 哪个指标提升最明显，是否有反例下降

<div class="rm-rs">📖 <a href="https://docs.ragas.io">RAGAS 评估框架</a></div>
</div>

<div class="rm-week rm-c2">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-b2">收官</span><span class="rm-w-title">个人 CG/GIS 知识库 RAG · Phase 2 产出</span></div>

- [ ] GAMES101 笔记 + Cesium 文档 + SuperMap3D API 全部入库
- [ ] 真实使用 · 「PCSS 优化大场景阴影?」「BIM 模型 LOD 切换最佳策略?」
- [ ] **技术博客 2** · 「RAG 工程实践: Naive 到 Advanced」
- [ ] **技术博客 3** · 「构建 GIS 领域知识库的 5 个坑」
- [ ] RAG 决策树文档 (Prompt vs RAG vs Fine-tune)

<div class="rm-deliv"><strong>Phase 2 完整验收</strong> · 个人知识库 RAG 可演示 + RAGAS 报告 + 博客 2-3 + 决策树文档</div>
</div>

<div class="rm-track rm-t-cg"><span class="rm-tk-tag">CG</span><span class="rm-tk-text">GAMES101 L13-L16 · 光线追踪 (基础到路径追踪)</span></div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L13 · 光线追踪 1 (Whitted)</span></div>

- [ ] 为什么需要光追 (光栅化的局限)
- [ ] 光线-平面 / 光线-三角形相交 (Möller-Trumbore)
- [ ] Whitted 反射 + 折射 + 阴影射线
- [ ] 作业 5 启动 · 光线-三角形相交

<div class="rm-rs">🛠️ <a href="https://github.com/jameshfisher/raytracing-in-one-weekend">Ray Tracing in One Weekend</a></div>
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L14 · 光线追踪 2 (BVH/KD-Tree) ⭐</span></div>

- [ ] AABB 包围盒
- [ ] BVH 构建
- [ ] KD-Tree / Octree 空间划分
- [ ] **融合 ⭐** · hy-bim-gis LOD 选择器内部用空间划分思路
- [ ] 作业 6 启动 · BVH
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L15 · 光线追踪 3 (Radiometry + BRDF)</span></div>

- [ ] 辐射度量学 (Radiant Energy / Flux / Intensity)
- [ ] Irradiance / Radiance 区分
- [ ] BRDF 双向反射分布函数
- [ ] **写出渲染方程** L_o = L_e + ∫ f_r · L_i · cosθ dω_i
- [ ] 虎书 Ch.14 Light
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L16 · 光线追踪 4 (Monte Carlo Path Tracing)</span></div>

- [ ] 蒙特卡洛积分原理
- [ ] 路径追踪递归思路
- [ ] 俄罗斯轮盘赌
- [ ] 重要性采样
- [ ] 作业 7 启动 · Path Tracing 大作业

<div class="rm-deliv"><strong>8月 CG 验收</strong> · L13-L16 视频+笔记 + 作业 5/6/7 启动 + 能写渲染方程并解释每一项</div>
</div>

<div class="rm-track rm-t-algo"><span class="rm-tk-tag">ALGO</span><span class="rm-tk-text">左程云体系 · 暴力递归 → DP 入门</span></div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-balgo">第43-46节</span><span class="rm-w-title">从暴力递归到 DP (左程云核心)</span></div>

- [ ] 4 种尝试模型 (从左到右 / 范围 / 样本对应 / 业务限制)
- [ ] 暴力递归 → 记忆化 → 严格表 DP
- [ ] 转换方法 · 找可变参数 / 建表 / 推依赖
- [ ] 机器人路径问题
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-balgo">第47-50节</span><span class="rm-w-title">一维 DP (从左到右)</span></div>

- [ ] 背包问题 (01 / 完全 / 多重)
- [ ] LIS (O(N²) 与 O(NlogN))
- [ ] LCS / 编辑距离
- [ ] LeetCode: 300 / 1143 / 72 / 416
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-balgo">第51-53节</span><span class="rm-w-title">范围 DP (区间型)</span></div>

- [ ] 纸牌问题 (先后手博弈)
- [ ] 回文子序列
- [ ] 矩阵链乘法 / 戳气球
- [ ] LeetCode: 877 / 5 / 312
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-balgo">第54-56节</span><span class="rm-w-title">样本对应 DP + 空间优化</span></div>

- [ ] 子串子序列 (LCS / 最长公共子串)
- [ ] 正则匹配 / 通配符匹配
- [ ] DP 空间优化 (滚动数组 / 降维)
- [ ] LeetCode: 10 / 44 / 718

<div class="rm-deliv"><strong>8月 算法验收</strong> · 暴力递归→DP 方法论熟练 + 背包/LIS/LCS/编辑距离默写 + LeetCode ≥60</div>
</div>

<div class="rm-fusion">
<div class="rm-fu-lbl">8月领域融合 · BIM+GIS 锚点</div>

- RAG W4 个人 GIS+CG 知识库 = 领域注入实质性产出
- CG L14 BVH = 后续 LOD 选择器中空间索引同源思想
- CG L15 渲染方程 = 后续 GAMES202 全部章节根基 (一定不能跳)
- 算法 DP 方法论 = AI Agent 任务分解 / Tree-of-Thought 同源思维
</div>

<div class="rm-milestone rm-ms2">
<span class="rm-ms-flag">🏁</span>
<div>
<div class="rm-ms-title">8月底 · Phase 2 RAG 收官 · CG 光追全套</div>
<div class="rm-ms-chips"><span>个人 GIS+CG 知识库</span><span>RAGAS 评估报告</span><span>技术博客 ≥3 篇</span><span>GAMES101 L13-L16 + 作业 5-7</span><span>DP 入门</span><span>LeetCode ≥60</span></div>
</div>
</div>

</div>

<div class="rm-phase-banner rm-pb3">
<span class="rm-phase-num">PHASE 03</span>
<span class="rm-phase-title">Agent 工程</span>
<span class="rm-phase-sub">9月—10月 · 自主推理 · GAMES101 收官 → GAMES202 起步 · 图论DP</span>
</div>

<div class="rm-month">
<div class="rm-mhdr"><span class="rm-mtag">9月</span><span class="rm-mtitle">Transformer + Tool Use + ReAct + GAMES101 收官 + 图论</span></div>

<div class="rm-track rm-t-ai"><span class="rm-tk-tag">AI</span><span class="rm-tk-text">Agent 基础 · Transformer + Function Calling + ReAct</span></div>

<div class="rm-week rm-c3">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-bpaper">论文</span><span class="rm-w-title">Attention is All You Need 精读</span></div>

- [ ] 精读 Vaswani et al. 2017 (5h)
- [ ] Self-Attention · Q/K/V 含义
- [ ] Multi-Head · 为什么多头每头学什么
- [ ] Position Encoding 正弦原理
- [ ] 读后感 · 「理解 Transformer 对写 Prompt 的实际帮助」

<div class="rm-rs">📄 <a href="https://arxiv.org/abs/1706.03762">Attention is All You Need · Vaswani 2017</a></div>
</div>

<div class="rm-week rm-c3">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-b3">Tool Use</span><span class="rm-w-title">Function Calling · LLM 调用外部能力</span></div>

- [ ] Spring AI Function Calling · @Bean 注册
- [ ] 3 个工具 · 搜索知识库 / 查 GIS 坐标 / 执行 BIM 查询
- [ ] JSON Schema 工具描述
- [ ] **融合 ⭐** · 给 Agent 接入 hy-bim-gis profiler.ts + drawCallCounter.ts
- [ ] 渲染性能诊断 Agent 雏形

<div class="rm-rs">📖 <a href="https://docs.langchain4j.dev">LangChain4j</a></div>
</div>

<div class="rm-week rm-c3">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-bpaper">论文</span><span class="rm-w-title">ReAct 论文精读 + 实现</span></div>

- [ ] 精读 Yao et al. 2022 (4h)
- [ ] Thought→Action→Observation 循环
- [ ] LangChain4j ReAct Agent 实现
- [ ] 测试 · 「分析 ShadowController 性能瓶颈并写报告」
- [ ] 记录失败模式 · 死循环 / 工具误用 / 幻觉参数

<div class="rm-rs">📄 <a href="https://arxiv.org/abs/2210.03629">ReAct · Yao 2022</a></div>
</div>

<div class="rm-week rm-c3">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-b3">记忆系统</span><span class="rm-w-title">Agent 三层记忆 (短期 / 长期 / 情景)</span></div>

- [ ] 短期 · Sliding Window 复用
- [ ] 长期 · 重要信息提取 → 向量化 → pgvector
- [ ] 情景 · 关键事件摘要 → 结构化 → 按需召回
- [ ] 记忆整合策略
</div>

<div class="rm-track rm-t-cg"><span class="rm-tk-tag">CG</span><span class="rm-tk-text">GAMES101 L17-L22 收官 + 完整光追渲染器</span></div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L17-L18 · 材质 + 高级渲染</span></div>

- [ ] L17 Materials · BRDF / 微表面
- [ ] L18 Advanced · 双向 / Metropolis / 光子映射
- [ ] 参与介质 (烟雾 / 云)
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L19-L20 · 摄像机 + 光场 + 颜色感知</span></div>

- [ ] L19 摄像机模型 (光圈 / 快门 / 焦距 / 景深)
- [ ] L20 颜色 (锥/杆细胞 / sRGB / Adobe RGB / HDR)
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L21-L22 · 动画 (关键帧 / IK)</span></div>

- [ ] L21 关键帧 / 物理模拟 (质点弹簧)
- [ ] L22 FK/IK / 骨骼蒙皮
- [ ] **融合** · BIM 中机械臂 / 起重机用得到 IK
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-bcheck">总作业</span><span class="rm-w-title">作业 7-8 完整光追渲染器 · GAMES101 收官</span></div>

- [ ] 作业 7 · Path Tracing 完整 (Cornell Box)
- [ ] 作业 8 · 质点弹簧绳子模拟
- [ ] 渲染图作品 1-2 张
- [ ] **GAMES101 学习总结博客** (4 个月心得)

<div class="rm-deliv"><strong>9月 CG 验收</strong> · GAMES101 全 22 讲 + 8 作业全部通过 + Path Tracing 渲染图 + 收官博客</div>
</div>

<div class="rm-track rm-t-algo"><span class="rm-tk-tag">ALGO</span><span class="rm-tk-text">左程云体系 · DP 进阶 + 图论基础</span></div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-balgo">第57-60节</span><span class="rm-w-title">DP 进阶 · 状压 + 树形</span></div>

- [ ] 状压 DP (位运算表示状态)
- [ ] TSP 旅行商
- [ ] 树形 DP · 二叉树最大路径和
- [ ] 打家劫舍 III
- [ ] LeetCode: 124 / 337 / 943
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-balgo">第61-63节</span><span class="rm-w-title">图论基础 · DFS + BFS + 拓扑</span></div>

- [ ] 图三种表达 (邻接矩阵 / 表 / 边集)
- [ ] DFS / BFS 模板
- [ ] 拓扑排序 (DAG)
- [ ] LeetCode: 200 / 207 / 210
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-balgo">第64-66节</span><span class="rm-w-title">最小生成树 + 并查集</span></div>

- [ ] Prim (从一个点扩展)
- [ ] Kruskal (按边排序 + 并查集)
- [ ] 并查集 路径压缩
- [ ] LeetCode: 1135 / 1584 / 547
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-balgo">第67-70节</span><span class="rm-w-title">最短路径 · Dijkstra/Bellman/Floyd</span></div>

- [ ] Dijkstra (堆优化)
- [ ] Bellman-Ford (允许负权)
- [ ] Floyd (任意两点)
- [ ] LeetCode: 743 / 787 / 1631

<div class="rm-deliv"><strong>9月 算法验收</strong> · 状压/树形 DP 模板 + DFS/BFS + 最短路三大算法 + LeetCode ≥80</div>
</div>

<div class="rm-fusion">
<div class="rm-fu-lbl">9月领域融合 · BIM+GIS 锚点 ⭐⭐</div>

- AI W2 渲染性能诊断 Agent 雏形 = 接入 `tool/profiler.ts` 和 `drawCallCounter.ts`
- AI W3 ReAct 测试场景 = 「分析 ShadowController 性能瓶颈并写报告」真实业务任务
- 算法图论 (Dijkstra) = GIS 路径规划根基
</div>

</div>

<div class="rm-month">
<div class="rm-mhdr"><span class="rm-mtag">10月 ⭐</span><span class="rm-mtitle">Multi-Agent + Agentic RAG · GAMES202 实时阴影 ⭐ · 字符串</span><span class="rm-mnote">关键融合月</span></div>

<div class="rm-track rm-t-ai"><span class="rm-tk-tag">AI</span><span class="rm-tk-text">多 Agent + Agentic RAG + 可靠性</span></div>

<div class="rm-week rm-c3">
<div class="rm-w-hdr"><span class="rm-w-label">W1-2</span><span class="rm-bdg rm-b3">多Agent</span><span class="rm-w-title">Multi-Agent 架构 · 分工协作</span></div>

- [ ] Orchestrator + Specialist 模式
- [ ] 研究 Agent (RAG) + 渲染诊断 Agent + 写作 Agent
- [ ] 结构化 JSON 通信
- [ ] 任务分发逻辑
- [ ] 测试非确定性系统的策略
</div>

<div class="rm-week rm-c3">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-b3">集成</span><span class="rm-w-title">Agentic RAG · Self-RAG + Corrective RAG</span></div>

- [ ] Self-RAG · 生成后自我评估
- [ ] Corrective RAG · 检索差时修正 query
- [ ] 研究助手 · 自主多轮检索综合答案
- [ ] 对比 Agentic RAG vs 朴素 RAG 复杂问题准确率
</div>

<div class="rm-week rm-c3">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-b3">收官</span><span class="rm-w-title">Guardrails + Phase 3 完整产出</span></div>

- [ ] 三道防线 · 输入校验 / 输出校验 / 工具调用校验
- [ ] Retry + Timeout + 优雅降级
- [ ] Human-in-the-Loop 高风险确认
- [ ] **技术博客 4** · 「构建生产级 Agent 系统的 5 个关键决策」
- [ ] 渲染诊断 Agent 团队推广 demo

<div class="rm-deliv"><strong>Phase 3 完整验收</strong> · ReAct Agent + Agentic RAG + 渲染诊断真实业务可用 + 博客 ≥4</div>
</div>

<div class="rm-track rm-t-cg"><span class="rm-tk-tag">CG</span><span class="rm-tk-text">GAMES202 L1-L4 · 实时渲染概览 + CSM 阴影 ⭐⭐⭐</span></div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">GAMES202 L1-L2 · 实时渲染概览</span></div>

- [ ] L1 Overview · 60 FPS 工业要求
- [ ] L2 Recap · GAMES101 渲染管线复习
- [ ] 实时 vs 离线差别 (光栅化优先 / 近似 / 缓存)
- [ ] 《Real-Time Rendering 4th》Ch.1-2

<div class="rm-rs">🎬 <a href="https://www.bilibili.com/video/BV1YK4y1T7yY">GAMES202 闫令琪 · 全 16 讲</a></div>
<div class="rm-rs">🌐 <a href="https://games-cn.org/games202">GAMES202 官方课程主页</a></div>
<div class="rm-rs">📖 Real-Time Rendering 4th · Akenine-Möller · Haines · Hoffman</div>
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L3 · 实时阴影 1 (Shadow Mapping) ⭐</span></div>

- [ ] L3 · Shadow Map 2-pass
- [ ] 第一遍 · 光源视角深度图
- [ ] 第二遍 · 摄像机视角转换比较
- [ ] Self-occlusion / Peter Panning / 锯齿
- [ ] **融合 ⭐⭐⭐** · hy-bim-gis ShadowController = 这一节理论
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L4 · 实时阴影 2 (PCF/PCSS/VSSM) ⭐⭐⭐</span></div>

- [ ] PCF (Percentage Closer Filtering) 软阴影
- [ ] PCSS (Percentage Closer Soft Shadow) 真实软阴影
- [ ] VSSM (Variance Shadow Map) / MSM (Moment SM)
- [ ] **CSM (Cascaded Shadow Maps)** 大场景级联
- [ ] 作业 1 · Shadow Mapping + PCF + PCSS

<div class="rm-rs">📄 <a href="https://developer.nvidia.com/cascaded-shadow-maps">Cascaded Shadow Maps · NVIDIA 2007</a></div>
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-bcheck">领域注入</span><span class="rm-w-title">⭐ 重写 hy-bim-gis ShadowController · 理论补完</span></div>

- [ ] 用 GAMES202 L3-L4 理论重写 `core/lighting/ShadowController.ts`
- [ ] 4 档预设 (off / low / medium / high) 加数学推导注释
- [ ] 新增第 5 档 ultra · 4096 PCSS + 16k 距离 (BIM 室内精细)
- [ ] 解决 Peter Panning 大模型偏移调参
- [ ] 5 档预设视觉对比图
- [ ] **技术博客 5** · 「从 GAMES202 到生产级 CSM 的工程化」

<div class="rm-deliv"><strong>10月 CG 验收 ⭐</strong> · L1-L4 视频+笔记 + 作业 1 + ShadowController 5 档重写 + 博客 5 已发</div>
</div>

<div class="rm-track rm-t-algo"><span class="rm-tk-tag">ALGO</span><span class="rm-tk-text">左程云体系 · 字符串算法 + 高级数据结构</span></div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-balgo">第71-73节</span><span class="rm-w-title">前缀树 Trie + 字典应用</span></div>

- [ ] Trie 节点定义 + 增删查 + 前缀匹配
- [ ] AutoComplete 设计
- [ ] LeetCode: 208 / 211 / 212
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-balgo">第74-76节</span><span class="rm-w-title">KMP + Manacher</span></div>

- [ ] KMP next 数组 + O(N+M) 匹配
- [ ] Manacher 最长回文 O(N)
- [ ] Z 函数 (扩展 KMP)
- [ ] LeetCode: 28 / 5 / 214
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-balgo">第77-79节</span><span class="rm-w-title">线段树 (Segment Tree)</span></div>

- [ ] 线段树 · 单点更新 + 区间查询
- [ ] 区间更新 + 懒标记 (Lazy Propagation)
- [ ] LeetCode: 307 / 308 / 715
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-balgo">第80-82节</span><span class="rm-w-title">滑动窗口最难 + 单调栈进阶</span></div>

- [ ] 最长无重复子串 / 最小覆盖子串
- [ ] 接雨水 / 柱状图最大矩形 / 最大矩形
- [ ] LeetCode: 3 / 76 / 42 / 84 / 85

<div class="rm-deliv"><strong>10月 算法验收</strong> · Trie/KMP/Manacher 模板 + 线段树会写 + 滑动窗口/单调栈难题 + LeetCode ≥100</div>
</div>

<div class="rm-fusion">
<div class="rm-fu-lbl">10月领域融合 · BIM+GIS 锚点 ⭐⭐⭐⭐⭐ 关键融合月</div>

- CG GAMES202 L3-L4 = **直接重写 hy-bim-gis 的 `core/lighting/ShadowController.ts`** + PCSS 第 5 档
- AI W4 渲染诊断 Agent 团队 demo · CG W4 ShadowController 重构 · 同时落地是 2026 最关键工程产出
- 论文 · 读《Cascaded Shadow Maps》(NVIDIA 2007) 原文，medium/high 视距分级来自这篇
</div>

<div class="rm-milestone rm-ms3">
<span class="rm-ms-flag">🏁</span>
<div>
<div class="rm-ms-title">10月底 · Phase 3 收官 · 关键融合月成果</div>
<div class="rm-ms-chips"><span>Multi-Agent + Agentic RAG</span><span>渲染诊断 Agent 团队推广</span><span>GAMES202 L1-L4 + 作业 1</span><span>ShadowController 5 档重构</span><span>CSM 工程化博客 5</span><span>字符串 + 线段树</span><span>LeetCode ≥100</span></div>
</div>
</div>

</div>

<div class="rm-phase-banner rm-pb4">
<span class="rm-phase-num">PHASE 04</span>
<span class="rm-phase-title">Production AI</span>
<span class="rm-phase-sub">11月 · 跑稳跑省跑快 · GAMES202 GI/PBR · 高级数据结构</span>
</div>

<div class="rm-month">
<div class="rm-mhdr"><span class="rm-mtag">11月</span><span class="rm-mtitle">AI 系统生产化 · GAMES202 全局光照 + PBR · 单调结构</span></div>

<div class="rm-track rm-t-ai"><span class="rm-tk-tag">AI</span><span class="rm-tk-text">链路追踪 + 成本优化 + 评估 + 安全</span></div>

<div class="rm-week rm-c4">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-b4">可观测</span><span class="rm-w-title">SkyWalking + LLM 专项监控</span></div>

- [ ] SkyWalking 链路追踪
- [ ] LLM 埋点 (Token / 延迟 / 模型)
- [ ] Grafana AI 成本仪表盘
- [ ] **融合** · hy-bim-gis ai-profile.ts 接入 SkyWalking 统一监控

<div class="rm-rs">📖 <a href="https://skywalking.apache.org/docs">SkyWalking 文档</a></div>
</div>

<div class="rm-week rm-c4">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-b4">成本</span><span class="rm-w-title">Token 缓存 + 模型路由</span></div>

- [ ] Prompt Caching (Anthropic / OpenAI 原生)
- [ ] 语义缓存 (相似度 0.95 命中)
- [ ] 模型路由 (Haiku / Sonnet / Opus)
- [ ] 成本实测对比 (前后差距)
</div>

<div class="rm-week rm-c4">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-b4">评估</span><span class="rm-w-title">LLM Eval 工程化 · 持续测试非确定系统</span></div>

- [ ] LLM-as-Judge 评估
- [ ] Eval 测试集 ≥60 用例
- [ ] Regression Testing
- [ ] A/B + Shadow Mode 测试框架

<div class="rm-rs">📄 <a href="https://crfm.stanford.edu/helm/latest">HELM 评估基准</a></div>
</div>

<div class="rm-week rm-c4">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-b4">安全</span><span class="rm-w-title">Guardrails + 部署清单 · Phase 4 收官</span></div>

- [ ] Prompt Injection 防御
- [ ] 输出过滤 (敏感词 / 个人信息)
- [ ] 速率限制 (用户级 + IP级)
- [ ] 审计日志 (合规存档)
- [ ] AI 部署 10 项必检清单

<div class="rm-deliv"><strong>Phase 4 验收</strong> · Grafana 成本仪表盘 (含 hy-bim-gis 集成) + 语义缓存实测降幅 + Eval ≥60 + 部署清单</div>
</div>

<div class="rm-track rm-t-cg"><span class="rm-tk-tag">CG</span><span class="rm-tk-text">GAMES202 L5-L9 · 环境光照 + GI + PBR 1</span></div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L5 · 环境贴图 + PRT (球谐函数)</span></div>

- [ ] Cube Map / Sphere Map
- [ ] PRT (Precomputed Radiance Transfer)
- [ ] 球谐函数 SH (前 N 阶系数表示光照)
- [ ] 作业 2 启动 · PRT 预计算
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L6-L7 · 全局光照 (RSM / LPV / VXGI)</span></div>

- [ ] L6 · RSM (Reflective Shadow Maps)
- [ ] L7 · LPV (Light Propagation Volumes)
- [ ] VXGI (Voxel GI · NVIDIA)
- [ ] **融合** · 大型 BIM 室内场景间接光照
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L8 · SSR (屏幕空间反射)</span></div>

- [ ] 屏幕空间方法的优劣
- [ ] Ray Marching 在屏幕空间
- [ ] Hi-Z (Hierarchical Z-buffer) 加速
- [ ] **融合** · GIS 地形水面反射 = SSR
- [ ] 作业 3 启动 · SSR
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L9 · Real-time PBR 1 (微表面 / Disney BRDF)</span></div>

- [ ] 微表面理论 (从 GAMES101 L17 接续)
- [ ] Cook-Torrance BRDF
- [ ] Disney Principled BRDF (工业实践)
- [ ] 金属度 / 粗糙度工作流
- [ ] **融合** · BIM 材质库 (玻璃幕墙 / 金属 / 混凝土) 物理参数

<div class="rm-deliv"><strong>11月 CG 验收</strong> · L5-L9 视频+笔记 + 作业 2/3 + 能解释微表面理论物理直觉</div>
</div>

<div class="rm-track rm-t-algo"><span class="rm-tk-tag">ALGO</span><span class="rm-tk-text">左程云体系 · 高级数据结构</span></div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-balgo">第83-85节</span><span class="rm-w-title">单调栈进阶 + 单调队列</span></div>

- [ ] 子数组累加和 ≥ K 的最短 (单调队列)
- [ ] 每日温度 / 下一个更大元素
- [ ] LeetCode: 739 / 496 / 503
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-balgo">第86-88节</span><span class="rm-w-title">前缀和 + 差分 + 二维前缀</span></div>

- [ ] 一维前缀和应用
- [ ] 差分数组 (区间加 → 单点查)
- [ ] 二维前缀和 (子矩阵和)
- [ ] LeetCode: 303 / 304 / 1109
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-balgo">第89-91节</span><span class="rm-w-title">并查集进阶 + 强连通分量</span></div>

- [ ] 按秩合并 + 路径压缩 优化
- [ ] 带权并查集
- [ ] Tarjan 强连通分量
- [ ] LeetCode: 547 / 684 / 685
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-balgo">第92-94节</span><span class="rm-w-title">DP 高级 (区间 + 子矩阵)</span></div>

- [ ] 区间 DP (戳气球 / 最长回文子序列)
- [ ] 最大子矩阵 (压缩成一维 + 子数组和)
- [ ] 最大正方形 / 最大矩形
- [ ] LeetCode: 312 / 221 / 85 / 363

<div class="rm-deliv"><strong>11月 算法验收</strong> · 单调栈/队列 + 前缀和/差分模板 + 并查集进阶 + LeetCode ≥120</div>
</div>

<div class="rm-fusion">
<div class="rm-fu-lbl">11月领域融合 · BIM+GIS 锚点</div>

- AI W1 hy-bim-gis ai-profile.ts 接入 SkyWalking 统一 AI 调用 + 渲染性能监控
- CG L9 PBR 微表面 = BIM 材质库未来支持的物理材质标准 (金属度/粗糙度)
- CG L8 SSR = GIS 地形水面反射的工业方案
- 算法前缀和/差分 = LOD 距离区间统计、预热加载窗口工程模式
</div>

<div class="rm-milestone rm-ms4">
<span class="rm-ms-flag">🏁</span>
<div>
<div class="rm-ms-title">11月底 · Phase 4 收官 · AI 生产级保障</div>
<div class="rm-ms-chips"><span>SkyWalking + 成本仪表盘</span><span>语义缓存 + 模型路由</span><span>Eval ≥60</span><span>GAMES202 GI + PBR1</span><span>作业 2-3</span><span>LeetCode ≥120</span></div>
</div>
</div>

</div>

<div class="rm-phase-banner rm-pb5">
<span class="rm-phase-num">PHASE 05</span>
<span class="rm-phase-title">Fine-tuning</span>
<span class="rm-phase-sub">12月 · 微调 · GAMES202 RTRT/LOD ⭐ · DP 高级</span>
</div>

<div class="rm-month">
<div class="rm-mhdr"><span class="rm-mtag">12月 ⭐</span><span class="rm-mtitle">LoRA 微调 · GAMES202 RTRT + LOD ⭐⭐⭐ · 算法综合</span><span class="rm-mnote">第二关键融合月</span></div>

<div class="rm-track rm-t-ai"><span class="rm-tk-tag">AI</span><span class="rm-tk-text">Fine-tune 理论 + LoRA 实战</span></div>

<div class="rm-week rm-c5">
<div class="rm-w-hdr"><span class="rm-w-label">W1-2</span><span class="rm-bdg rm-b5">理论</span><span class="rm-w-title">Fine-tuning 决策 + LoRA 原理</span></div>

- [ ] Fine-tune vs RAG vs Prompt 边界
- [ ] LoRA 数学 · W' = W + BA, B∈R^(d×r), A∈R^(r×k)
- [ ] rank 选择 (不是越大越好)
- [ ] 哪些层加 LoRA (Attention vs FFN)
- [ ] QLoRA 4-bit 量化

<div class="rm-rs">📖 <a href="https://huggingface.co/docs/peft/index">Hugging Face PEFT</a></div>
</div>

<div class="rm-week rm-c5">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-b5">数据</span><span class="rm-w-title">训练数据工程 + LIMA 论文</span></div>

- [ ] 数据格式 instruction/input/output 三元组
- [ ] 质量控制 · 去重 / 过滤 / 平衡
- [ ] **从 hy-bim-gis 团队代码库收集 ≥100 条** (Shader / 场景初始化 / 性能优化)
- [ ] 评估集构建 (训练集不重叠)
- [ ] 精读 LIMA 论文

<div class="rm-rs">📄 <a href="https://arxiv.org/abs/2305.11206">LIMA · Zhou 2023</a></div>
</div>

<div class="rm-week rm-c5">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-b5">实战</span><span class="rm-w-title">LoRA 微调 BIM 代码风格小模型</span></div>

- [ ] Unsloth + PEFT · Llama 3.1 8B LoRA (Google Colab)
- [ ] 微调目标 · 团队 BIM/GIS 代码风格
- [ ] 评估前后对比 (hy-bim-gis 风格代码补全)
- [ ] 合并权重 → Ollama 本地部署
- [ ] 总结 · 这次微调是否值，RAG 能否替代

<div class="rm-deliv"><strong>Phase 5 验收</strong> · LoRA 微调跑通 + Ollama 部署 + BIM 代码风格小模型 + 决策框架</div>
</div>

<div class="rm-track rm-t-cg"><span class="rm-tk-tag">CG</span><span class="rm-tk-text">GAMES202 L10-L16 · PBR 2 + RTRT + LOD ⭐</span></div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L10 · PBR 2 (Kulla-Conty + IBL)</span></div>

- [ ] Kulla-Conty 多次散射补偿
- [ ] 能量损失问题
- [ ] IBL (Image-Based Lighting)
- [ ] Split Sum 近似 (实时 IBL 工业方案)
- [ ] 作业 4 启动 · Kulla-Conty BRDF
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L11-L12 · Real-time Ray Tracing</span></div>

- [ ] L11 · NVIDIA RTX 硬件加速
- [ ] L12 · SVGF 时空滤波降噪
- [ ] 1 SPP 路径追踪 + 时空滤波 = 实时画质
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-bvideo">视频</span><span class="rm-w-title">L13-L14 · 抗锯齿 + 超分 (TAA / DLSS)</span></div>

- [ ] L13 · TAA 时间抗锯齿
- [ ] L14 · DLSS / FSR 超分 (深度学习)
- [ ] 历史帧重投影 + 拒绝
- [ ] **融合** · 大型 GIS 场景画质优化方向
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-bcheck">领域注入 ⭐⭐⭐</span><span class="rm-w-title">L15-L16 LOD + 重写 hy-bim-gis lod/</span></div>

- [ ] L15 · MIP 纹理 LOD / 几何 LOD
- [ ] L16 · 工业实践 (含 Nanite 简介)
- [ ] **重写 hy-bim-gis `core/lod/` 模块**
- [ ] SSE (Screen-Space Error) 数学推导补完
- [ ] Hysteresis 滞回理论建模
- [ ] Transition 过渡函数优化
- [ ] 精读 Nanite Virtual Geometry (Karis 2021)
- [ ] **技术博客 6** · 「从 GAMES202 到生产级 LOD 工程化」

<div class="rm-rs">📄 <a href="https://advances.realtimerendering.com/s2021">Nanite Virtual Geometry · Karis 2021 (SIGGRAPH)</a></div>
<div class="rm-deliv"><strong>12月 CG 验收 ⭐</strong> · L10-L16 视频+笔记 + 作业 4 + lod/ 模块重写 + 博客 6 + Nanite 论文读后感</div>
</div>

<div class="rm-track rm-t-algo"><span class="rm-tk-tag">ALGO</span><span class="rm-tk-text">左程云体系 · 综合训练</span></div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-balgo">第95-97节</span><span class="rm-w-title">DP 终极 (双串 / 三维)</span></div>

- [ ] 双串问题 (编辑距离变种)
- [ ] 三维 DP (Dilworth 定理类)
- [ ] LeetCode: 1143 / 583 / 712 / 174
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-balgo">第98-100节</span><span class="rm-w-title">贪心算法 (排序 + 局部最优)</span></div>

- [ ] 会议室预订 (区间排序贪心)
- [ ] 哈夫曼编码
- [ ] 跳跃游戏 / 加油站
- [ ] LeetCode: 55 / 45 / 134 / 763
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-balgo">第101-103节</span><span class="rm-w-title">字符串高级 + AC 自动机</span></div>

- [ ] AC 自动机 (多模式串)
- [ ] Manacher 进阶
- [ ] 后缀数组基础
- [ ] LeetCode: 30
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-balgo">综合</span><span class="rm-w-title">LeetCode Hot 100 攻坚 + 笔试模拟</span></div>

- [ ] LeetCode Hot 100 完整刷一遍
- [ ] 每天 3 题 (中 2 + 困 1) × 7 天
- [ ] 3 套大厂笔试题模拟 (限时 2h)
- [ ] 错题本归档

<div class="rm-rs">🔗 <a href="https://leetcode.cn/studyplan/top-100-liked">LeetCode Hot 100</a></div>
<div class="rm-rs">🔗 <a href="https://nowcoder.com">牛客网 · 大厂笔试模拟</a></div>
<div class="rm-deliv"><strong>12月 算法验收</strong> · DP 终极 + 贪心 + Hot 100 通过 + LeetCode ≥160</div>
</div>

<div class="rm-fusion">
<div class="rm-fu-lbl">12月领域融合 · BIM+GIS 锚点 ⭐⭐⭐⭐⭐ 第二关键融合月</div>

- AI W3-W4 LoRA 微调 = 团队 BIM/GIS 代码风格小模型，训练数据来自 hy-bim-gis
- CG W4 重写 hy-bim-gis `core/lod/` = SSE 数学推导 + Hysteresis 理论补完，工程产出第二里程碑
- 10月 ShadowController + 12月 LOD 模块 = hy-bim-gis 两大核心子系统理论补完，闭环
- 论文 · Nanite Virtual Geometry (Unreal 5)，工业级 Geometry LOD 怎么做
</div>

<div class="rm-milestone rm-ms5">
<span class="rm-ms-flag">🏁</span>
<div>
<div class="rm-ms-title">12月底 · Phase 5 收官 · 第二关键融合月成果</div>
<div class="rm-ms-chips"><span>LoRA 跑通</span><span>BIM 代码风格小模型</span><span>GAMES202 全 16 讲 + 4 作业</span><span>hy-bim-gis lod/ 重构</span><span>LOD 工程化博客 6</span><span>LeetCode ≥160</span></div>
</div>
</div>

</div>

<div class="rm-phase-banner rm-pb6">
<span class="rm-phase-num">PHASE 06</span>
<span class="rm-phase-title">综合产出</span>
<span class="rm-phase-sub">2027.01 · 三维场景 AI 研发中台 · 沉淀 + 2027 规划</span>
</div>

<div class="rm-month">
<div class="rm-mhdr"><span class="rm-mtag">1月</span><span class="rm-mtitle">旗舰项目 · 引擎源码精读 · 算法综合</span><span class="rm-mnote">收官</span></div>

<div class="rm-track rm-t-ai"><span class="rm-tk-tag">AI</span><span class="rm-tk-text">三维场景 AI 研发中台 · 旗舰项目</span></div>

<div class="rm-week rm-c6">
<div class="rm-w-hdr"><span class="rm-w-label">W1-2</span><span class="rm-bdg rm-b6">旗舰</span><span class="rm-w-title">三维场景 AI 研发中台 · 给团队 10 个前端用</span></div>

- [ ] 能力 1 · 自然语言→空间查询 (高亮所有超载承重墙)
- [ ] 能力 2 · Vibe Coding 助手 (用 12月微调小模型)
- [ ] 能力 3 · 渲染性能诊断 (PBR/SSR/LOD 多维度)
- [ ] 能力 4 · GIS+CG 知识库 RAG 集成
- [ ] 生产级保障 · 链路追踪 + 成本监控 + Eval (Phase 4 全接入)
- [ ] 公司内网部署上线
- [ ] 项目 README · 架构图 + 选型理由 + 关键决策
</div>

<div class="rm-week rm-c6">
<div class="rm-w-hdr"><span class="rm-w-label">W3</span><span class="rm-bdg rm-b6">沉淀</span><span class="rm-w-title">年度技术总结 + AI 工程 Cookbook</span></div>

- [ ] **年度博客** · 「2026 三线并行学到的 10 件事」
- [ ] 个人 Cookbook 7 章 (RAG / 模型路由 / Agent / Fine-tune / 部署 / CG 工程化 / 算法)
- [ ] 5 篇 AI 论文一张图串联 (Transformer / RAG / ReAct / LIMA / HELM)
- [ ] 3 篇 CG 论文一张图串联 (CSM / Nanite / Kulla-Conty)
</div>

<div class="rm-week rm-c6">
<div class="rm-w-hdr"><span class="rm-w-label">W4</span><span class="rm-bdg rm-b6">2027</span><span class="rm-w-title">下一年技术方向定义</span></div>

- [ ] 旗舰项目最感兴趣模块识别
- [ ] 候选方向 5 选 1 (基础设施 / 产品 / 图形学 / 引擎 / 开源)
- [ ] 2027 Q1 第一个具体任务
- [ ] 路线图结束，成长不结束
</div>

<div class="rm-track rm-t-cg"><span class="rm-tk-tag">CG</span><span class="rm-tk-text">引擎源码精读 + 综合实战</span></div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W1</span><span class="rm-bdg rm-bbook">源码</span><span class="rm-w-title">Cesium tile 加载源码精读</span></div>

- [ ] 读 Cesium3DTileset.js 源码
- [ ] SSE 计算流程 / Tile 加载策略 / Cache 管理
- [ ] 对比 hy-bim-gis 实现差异
- [ ] 记录工业级实现的优雅之处

<div class="rm-rs">📖 <a href="https://github.com/CesiumGS/cesium">Cesium 源码</a></div>
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W2</span><span class="rm-bdg rm-bpaper">论文</span><span class="rm-w-title">3D Gaussian Splatting (前沿)</span></div>

- [ ] 精读 3DGS 论文 (Kerbl 2023, SIGGRAPH)
- [ ] 理解为什么颠覆传统三维表示
- [ ] 评估对 BIM+GIS 10 年内的潜在影响

<div class="rm-rs">📄 <a href="https://arxiv.org/abs/2308.04079">3DGS · Kerbl 2023</a></div>
</div>

<div class="rm-week rm-ccg">
<div class="rm-w-hdr"><span class="rm-w-label">W3-4</span><span class="rm-bdg rm-bcheck">综合</span><span class="rm-w-title">hy-bim-gis 综合实战 · 渲染管线全景图</span></div>

- [ ] **画出 hy-bim-gis 完整渲染管线图** (放到 docs/)
- [ ] 升级 ai-gpu.ts 到 PBR 材质审查级别
- [ ] CG 学习笔记成电子书 (Cookbook 第 6 章)

<div class="rm-deliv"><strong>1月 CG 验收</strong> · Cesium 源码笔记 + 3DGS 读后感 + 完整渲染管线图 + CG 电子书</div>
</div>

<div class="rm-track rm-t-algo"><span class="rm-tk-tag">ALGO</span><span class="rm-tk-text">左程云体系 · 收官</span></div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W1-2</span><span class="rm-bdg rm-balgo">复盘</span><span class="rm-w-title">9 个月算法复盘 + 高频题汇总</span></div>

- [ ] 9 个月算法笔记整理 (Cookbook 算法章)
- [ ] 错题本归档 (按主题分类)
- [ ] 大厂高频题汇总 (近 3 年 中 + 困)
- [ ] 每个主题留 3 道经典题做肌肉记忆
</div>

<div class="rm-week rm-calgo">
<div class="rm-w-hdr"><span class="rm-w-label">W3-4</span><span class="rm-bdg rm-balgo">综合</span><span class="rm-w-title">LeetCode 综合冲刺 + 2027 算法计划</span></div>

- [ ] LeetCode 周赛 4 场
- [ ] 累计 ≥200 题
- [ ] 2027 算法路线 (继续刷题 / 专题深入 / 算法竞赛)

<div class="rm-deliv"><strong>1月 算法验收</strong> · LeetCode ≥200 + 错题本/高频题归档 + 个人算法 Cookbook + 2027 计划已定</div>
</div>

<div class="rm-fusion">
<div class="rm-fu-lbl">1月领域融合 · 旗舰项目集成</div>

- 三维场景 AI 研发中台 = 整合 9 个月所有产出 (RAG 知识库 + Agent 诊断 + Vibe Coding 微调模型 + 链路追踪)
- CG W3-4 hy-bim-gis 完整渲染管线图 = 你能跟任何人讲清楚每一行代码背后的理论
- 个人 Cookbook 7 章 · RAG / 模型路由 / Agent / Fine-tune / 部署 / CG 工程化 / 算法
- 2027 方向定义 · 基于 1月旗舰项目里最感兴趣的部分，选一个
</div>

<div class="rm-milestone rm-ms6">
<span class="rm-ms-flag">🏁</span>
<div>
<div class="rm-ms-title">2027 年初 · 三线全栈架构师 · 完整能力图谱</div>
<div class="rm-ms-chips"><span>AI Backend</span><span>RAG 工程</span><span>Agent 工程</span><span>Production AI</span><span>Fine-tuning</span><span>GAMES101 全 22 讲</span><span>GAMES202 全 16 讲</span><span>算法体系班 100+ 节</span><span>hy-bim-gis ShadowController + lod/ 重构</span><span>三维场景 AI 研发中台</span><span>5 AI + 3 CG 论文</span><span>技术博客 ≥6 篇</span><span>个人 Cookbook 7 章</span><span>LeetCode ≥200</span><span>2027 方向已定</span></div>
</div>
</div>

</div>

</div>

<script src="/static/roadmap-checklist.js" defer></script>
