---
title: "Vue3 大表单输入卡顿的 6 层排查"
date: 2026-05-02
lastmod: 2026-05-02
tags:
  - frontend
  - vue3
  - performance
  - vuetify
description: "30 行明细表，每行 7 列含 Vuetify 输入框 + TreeSelect。输入一个数字要等 1 分多钟才有反应——分别踩到了浏览器、Vue 响应式、vdom、模板 O(n²)、v-model 双写、DevTools 6 层雷。"
---

> 接手一个表单页：30 行明细表，每行 7 列含 Vuetify 输入框 + TreeSelect。打字进去要等 1 分多钟才有反应；滚动严重卡顿；某次修复完页面直接卡死。
>
> 我第一反应是「肯定不只一处」——单点优化救不回分钟级的延迟。后来逐层拆开，发现至少踩了**六层雷**，每层都在放大下一层的成本。

## Layer 1：浏览器渲染管线

`v-text-field` 不是 `<input>`。它是 Vuetify 包装组件，内部展开成 **5–10 个 DOM 节点**（`.v-input`、`.v-field`、`.v-label`、`.v-field__input`、`.v-field__overlay`、append/prepend slot、错误信息容器…）。

- 30 行 × 7 列 ≈ **210 个组件 ≈ 1000+ DOM 节点**
- 任意一格变化都触发浏览器重排
- 没有 CSS containment 时，整个视口都参与 reflow

这一层是地基，地基松软之后上面所有动作都贵。

## Layer 2：Vue 响应式系统

`ref(treeData)` 对树做**深 Proxy**。原始大纲树几百到几千节点，每个对象都被包了一层 Proxy。

- 任意属性访问都过一层 trap
- 任何 watcher 遍历都被记录为依赖
- 把树作为 prop 传进 30 行子组件 → 每行都成了潜在订阅者

更糟的是 TreeSelect 内部对 `items` 用了 `deep: true, immediate: true` 的 watcher。当时每行通过 computed 算自己的 `items`（"过滤掉已用叶子"），即使内容相同也产生**新数组引用**，触发 30 个子组件 watcher 同时跑深遍历。

我后来意识到，这一层才是「页面卡死」那次事故的真凶。

## Layer 3：vdom diff

Vue 的 patch 粒度是组件。父级一处 reactive 写入会让整个 v-for 重新 diff，30 行 × 7 列 = 210 个子组件走一遍 props 对比 + 内部 setup 重跑。

这本身不算太贵，但叠加 Layer 2 的 Proxy 访问，每次 patch 都在做大量无意义工作。

## Layer 4：模板里的隐藏 O(n²)

`getFullLevelText(row)` 在模板里被调了 6 次（多个 tooltip / text-field 都读它）。每次调用走 `treeData.find()` 沿父链回溯，单次 O(深度 × 树宽)。

**单次渲染：30 × 6 × O(n×d) ≈ 几十万到上百万次操作。** 每按一键就跑一遍。

我看到这里的时候挺意外的——一个看似无害的工具函数，在循环里用就成了核弹。

## Layer 5：v-model 双写

```vue
<v-text-field v-model="row.completedQtt" @input="...handler" />
```

按键流程：

1. v-model 把字符串写进 `row.completedQtt` → 触发响应式
2. handler 解析后再写一次 `row.completedQtt`，外加 `completedRate` / `completedValue` / `accCmpltRatio` → 又一次响应式

**每键 2 次响应式写入 + 2 次完整 vdom diff。** 相当于把所有上述成本都翻倍。

## Layer 6：DevTools 放大器

热路径上挂了 `console.warn('已存在重复...')`。打开 DevTools 时，每次 warn 要采集完整调用栈、序列化参数、推到 Console panel。**单次 console.warn 在 DevTools 开启时可达 1–5ms**。

30 行 × 多列 × 频繁触发 → 数百 ms 直接吃掉。

我一开始忽略了这一层，以为是无关紧要的日志——结果它贡献了用户体感卡顿里相当大的一块。

## 解决方案（按贡献度排序）

| # | 改动 | 命中层 | 收益来源 |
|---|------|--------|---------|
| 1 | 移除热路径 `console.warn`，改为 save 时 `Set` 去重校验 | L6 | 每键省几十到几百 ms（DevTools 开启时） |
| 2 | `treeData` 改 `shallowRef` + 建 `nodeMap`（Map） + `fullPathCache` | L2 / L4 | 树停止深 Proxy；查找 O(n×d) → O(1) |
| 3 | 行上缓存 `row.fullLevelText` 字段 | L4 | 模板 180 次函数调用 → 180 次属性读取 |
| 4 | TreeSelect 加 `hiddenLeafIds: Set` prop，30 行共享同一引用 | L2 | 杀掉 deep watcher 级联 |
| 5 | `content-visibility: auto` + `contain-intrinsic-size` | L1 | 滚出视口的行跳过 layout / paint |
| 6 | 去掉 `v-model`，改 `:model-value` | L5 | 每键写入次数减半 |
| 7 | `@input` 加 100ms debounce + `@change` 立即 flush | L3 / L5 | 连续打字只触发一次 cascade，失焦保证落盘 |

整体效果：

- 输入响应：1+ 分钟 → 流畅
- 滚动：明显卡顿 → 流畅
- 保存逻辑、UX（隐藏已用叶子）零变化

中途我尝试过 `v-memo` 想再榨一波，结果踩到 Vue 编译器对 `??` 与 `&&` 混用的处理 bug，又触发了运行时 `_cached.memo` undefined 报错。两次失败后我决定回退——前面六层改动叠加已经够顺滑，不必为了边际收益冒框架兼容性的险。

## 还能继续优化的点（按 ROI）

**1. 拆 `<DetailRow :row="row" />` 子组件 ⭐⭐⭐⭐⭐**

Vue 的更新最小单位是组件——把单行抽成子组件后，行内 input 变化只 patch 那一个子组件，**根本不再触发父级 v-for 的 diff**。等价于手工实现 v-memo 但更可控、不会撞编译/运行时 bug。

**2. 替换 `v-text-field` → 原生 `<input>` ⭐⭐⭐⭐**

DOM 节点 1000+ → 300+，组件实例 210 → 0。代价是要自己写样式、border、focus 态。建议只针对**只读列**先换（不需要 Vuetify 的交互能力）。

**3. 虚拟滚动（vue-virtual-scroller）⭐⭐⭐**

30 行场景 `content-visibility` 已经够用，但行数到 100+ 时必须上虚拟滚动。常驻 DOM 砍到 ~10 行。

**4. `markRaw(node)` 标记树节点 ⭐⭐**

`shallowRef` 只让根 ref 浅响应，节点对象进入子组件后还会被再代理。如果确认整棵树**完全不可变**，可以在构建 `nodeMap` 时 `markRaw` 每个节点。

**5. 输入用非受控模式 ⭐**

更激进：input 完全不绑 `:model-value`，只在 `@change` 时同步。打字过程 Vue 完全不知情。代价是初始化、重置场景要手动 `inputRef.value = ...`。

## 教训

复盘最后我从这次问题里带走了几条经验：

1. **响应式不是免费的**——大对象进 ref 之前先想想 `shallowRef` 或 `markRaw` 是不是已经够了
2. **模板里的函数调用等于循环里的函数调用**——n 行 × m 列 × k 次 / render，乘起来是天文数字
3. **v-model 是语法糖**——它做了什么必须清楚。混用 `v-model` + `@input` 是最常见的双写陷阱
4. **DevTools 会改变性能特征**——卡顿先关 DevTools 复测，能甄别一大类「假问题」
5. **第三方组件的 watcher 是黑盒**——传给它的 prop 引用稳不稳定，常常比自己写的代码更影响性能
6. **不要为边际收益冒框架兼容风险**——`v-memo` 的失败让我重新校准了"够用就停"的边界

> 性能问题不是单一 bug。是堆叠出来的。一次解一层，到第三层你就能看见底了。
