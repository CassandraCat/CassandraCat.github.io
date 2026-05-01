import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration · CassandraCat
 * Warm parchment aesthetic, Claude-inspired (matching personal project design language)
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "CassandraCat",
    pageTitleSuffix: " · 个人博客",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "cassandracat.github.io",
    ignorePatterns: ["private", "templates", ".obsidian", "_drafts"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Serif SC",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f4ed",          // parchment bg
          lightgray: "#e6e3d6",      // line
          gray: "#87867f",           // muted
          darkgray: "#4d4c48",       // body text
          dark: "#141413",           // heading text
          secondary: "#c96442",      // terracotta · primary accent
          tertiary: "#1a7a6d",       // teal · secondary accent
          highlight: "rgba(201, 100, 66, 0.08)",
          textHighlight: "rgba(184, 134, 11, 0.25)",
        },
        darkMode: {
          light: "#1a1a18",          // dark parchment
          lightgray: "#3a3934",      // muted line
          gray: "#7a7872",           // muted
          darkgray: "#cac8be",       // body text
          dark: "#f0eee5",           // heading text
          secondary: "#d97757",      // coral
          tertiary: "#56a89c",       // soft teal
          highlight: "rgba(217, 119, 87, 0.12)",
          textHighlight: "rgba(184, 134, 11, 0.3)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
