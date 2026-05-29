# Personal OS — 个人博客

基于 Next.js 构建的个人博客，采用 Notion 风格设计语言。

## 技术栈

- **框架**: Next.js 16 (App Router) + React 19 + TypeScript
- **样式**: TailwindCSS v4 + shadcn/ui
- **动画**: Framer Motion
- **内容**: MDX（`next-mdx-remote/rsc`）+ gray-matter
- **主题**: next-themes（系统自动 / 手动切换 dark mode）

## 项目结构

```
src/
├── app/
│   ├── page.tsx          # 首页
│   ├── blog/
│   │   ├── page.tsx      # 文章列表
│   │   └── [slug]/       # 文章详情
│   └── about/page.tsx    # 关于页
├── components/
│   ├── navbar.tsx        # 顶部导航
│   ├── footer.tsx        # 底部
│   ├── theme-provider.tsx
│   ├── home-client.tsx   # 首页动画组件
│   └── post-content.tsx  # MDX 文章渲染
└── lib/
    └── mdx.ts            # 文章读取工具

content/
└── blog/                 # MDX 文章（.mdx 文件）
```

## 快速开始

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 写文章

在 `content/blog/` 目录下新建 `.mdx` 文件，添加 frontmatter：

```mdx
---
title: "文章标题"
date: "2024-01-01"
description: "文章摘要"
tags: ["标签1", "标签2"]
---

正文内容（支持 Markdown + JSX 组件）
```

## 页面

| 路径 | 说明 |
|------|------|
| `/` | 首页，展示简介和最近文章 |
| `/blog` | 文章列表 |
| `/blog/[slug]` | 文章详情 |
| `/about` | 关于页 |

## 构建部署

```bash
npm run build
npm start
```

支持部署到 Vercel、Netlify 等平台（静态生成）。

