---
title: "Obsidian Excalidraw plugin parsed mode 双层渲染坑"
date: 2026-05-02
lastmod: 2026-05-02
tags:
  - obsidian
  - excalidraw
  - plugin
  - lz-string
  - gotcha
description: "想在 Obsidian 笔记里嵌入 Excalidraw 图，走了三条路才搞通。中间踩到 plugin 的 parsed mode 设计陷阱（文字双重渲染）+ 渲染脚本国内访问慢的网络坑。最终修法：parsed mode + compressed-json + 空 Text Elements 节。"
---

> 写架构总览图时想嵌入一张 60-elements 的 Excalidraw 图。看似很简单的需求，结果走了三条路才搞通。中间踩到 Obsidian Excalidraw plugin 的 parsed mode 设计陷阱 + 渲染脚本国内访问慢的网络坑。
>
> 写下来给搜过同样错误的人省点时间。

## 三个现象

### 现象 A：文件不被 plugin 识别

直觉做法：写纯 JSON `.excalidraw` 文件，README 里 `![[file.excalidraw]]` 嵌入。结果 Obsidian 把它显示成 "link" 不是图。

**根因**：Obsidian Excalidraw plugin 只渲染 `.excalidraw.md` 后缀 + 特定 frontmatter（`excalidraw-plugin: parsed | raw`）。普通 `.excalidraw` 文件 plugin 不接管。

### 现象 B：parsed mode 双层渲染文字

第二条路：写 `.excalidraw.md` + frontmatter `excalidraw-plugin: parsed`。同时把文字写在 `## Text Elements` 节**和** JSON elements 的 `text` 字段。结果**两层都渲染**，画布上文字重叠 + 飘浮 `^id` 锚点字符串。

**根因**：parsed mode 设计原则是 `Text Elements` 节是文字真源，JSON elements 的 text 字段应该留空（或只有 ID 引用）。我两边都填了文字 → plugin 把 markdown 节当"额外渲染要求"，跟 JSON 里的字双重渲染。

这是设计陷阱：plugin 假定你只在一个地方写文字，但没有任何错误提示告诉你违反了。

### 现象 C：raw mode 不识别

第三条路：试 `excalidraw-plugin: raw` + 整个 JSON 在 ` ```json ` 代码块里。结果弹"加载失败"对话框（We encountered an error while loading your drawing）。

**根因**：raw mode 期待的格式跟 JSON 不一样，看起来要 `compressed-json` 块。没仔细查就放弃了。

## 修法（实际成功的）

最终走通的路径：**parsed mode + compressed-json + 空 Text Elements 节**。

```yaml
---
excalidraw-plugin: parsed
tags: [excalidraw]
---

==⚠ Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==

# Excalidraw Data

## Text Elements

%%
## Drawing
```compressed-json
N4IgLgngDgpiBcACEMAeBjAhgGwJYBMAnTAdxABpkA3GQgZ1wHsA7BRAJkpDsYFdD0cJCAAWYMFDrwA9...
```
%%
```

关键 3 点：

1. `## Text Elements` 节**留空**（不写文字 + ^id）→ 不双层渲染
2. JSON 包成 `compressed-json` 块（lz-string LZW + base64）→ plugin 期望的标准格式
3. 文字全在 JSON elements 的 `text` 字段里 → **单一来源**

## lz-string 压缩 / 解压

raw JSON → compressed-json，Python 用 `lzstring` 库：

```python
import json, lzstring

with open('xxx.excalidraw') as f: data = json.load(f)

# 给每个 element 补 plugin 期望的字段
for e in data['elements']:
    e.setdefault('boundElements', [])
    if e['boundElements'] is None: e['boundElements'] = []
    e.setdefault('index', None)
    e.setdefault('frameId', None)
    e.setdefault('updated', 1775369210113)
    if e.get('type') == 'text':
        e.setdefault('rawText', '')         # 必填空字符串, 不能 None
        e.setdefault('autoResize', True)
    if 'roundness' not in e:
        e['roundness'] = None

x = lzstring.LZString()
compressed = x.compressToBase64(json.dumps(data, ensure_ascii=False))
# compressed 是 base64 字符串, 按 80 字符换行写到 ```compressed-json 块
```

反向解压：

```python
import re, json, lzstring

with open(path) as f:
    content = f.read()
m = re.search(r'```compressed-json\n([\s\S]*?)\n```', content)
compressed = re.sub(r'\s+', '', m.group(1))   # 去掉换行符
x = lzstring.LZString()
data = json.loads(x.decompressFromBase64(compressed))
```

**注意**：`decompressFromBase64` 不行换 `decompressFromEncodedURIComponent`。不同生成方法用不同解法。

## 网络坑：render_excalidraw.py 超时

如果你顺着 Claude Code 的 excalidraw-diagram skill 走 PNG 嵌入路线（`~/.claude/skills/excalidraw-diagram/references/render_excalidraw.py`），会发现它用 playwright 加载 excalidraw.com 在线渲染 PNG。

**国内访问慢，timeout 30s 不够，提到 120s 也仍超时**。

修过 timeout 没解决。**走 PNG 嵌入路线放弃**，改用 plugin parsed mode 内嵌路径。

如果将来想 render PNG，要么走 Excalidraw 自部署（内网），要么换离线渲染器（`@excalidraw/excalidraw` SDK 在 node 跑）。

## 教训

1. **plugin 文件不是 plain JSON 文件**——后缀不一样 plugin 行为不一样
2. **parsed mode 双向同步**——JSON ↔ Text Elements 节，哪边重复填都炸
3. **compressed-json 是默认格式**——不是 raw JSON
4. **lz-string 算法是 LZW 变种**——Python `lzstring` 库 OK 用
5. **国内 excalidraw.com 慢**——涉及 PNG 渲染走在线服务的方案直接放弃

---

> Plugin：[obsidian-excalidraw-plugin](https://github.com/zsviczian/obsidian-excalidraw-plugin)。如果你也想嵌入 60+ elements 的复杂图、又不想踩这些坑，照上面的模板抄就好。
