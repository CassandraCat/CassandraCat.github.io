# CassandraCat

个人博客源码 · https://cassandracat.github.io/

基于 [Quartz v4](https://quartz.jzhao.xyz/) 搭建，部署在 GitHub Pages。

## 写作

- 文章放在 `content/posts/`，markdown + frontmatter
- 首页是 `content/index.md`
- 推到 `main` 分支会自动 build & deploy

## 本地预览

```bash
npm ci
npx quartz build --serve
# http://localhost:8080
```

## 风格定制

- `quartz.config.ts` — 站点配置（标题、颜色、字体）
- `quartz.layout.ts` — 布局
- `quartz/styles/custom.scss` — 自定义 CSS（暖色羊皮纸 + ring-shadow + Noto Serif SC）
