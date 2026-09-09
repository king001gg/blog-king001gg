# blog-king001gg

现代博客模板：Next.js + Tailwind + TypeScript

这个仓库为 king001gg 的个人博客与作品集起点，包含：

- Next.js + TypeScript + Tailwind 的基础结构
- 简单的页面：Home / About / Projects / Blog / Contact
- 三篇示例文章（可替换）

快速开始

1. 本地运行

```bash
# 安装依赖
npm install
# 本地开发
npm run dev
```

2. 部署到 Vercel

- 访问 https://vercel.com/new 并选择该仓库导入（登录 Vercel 并授权 GitHub 后）。
- 构建命令：npm run build，输出目录：(默认)
- 添加环境变量（可选）：
  - NEXT_PUBLIC_GISCUS_REPO=yourname/yourrepo
  - NEXT_PUBLIC_GISCUS_REPOSITORY_ID=...
  - NEXT_PUBLIC_GISCUS_CATEGORY=General

Giscus 评论集成说明

我们在 site 使用 Giscus（通过 GitHub Issues 做评论）。要启用：

1. 在你的仓库创建一个讨论或启用 Issues
2. 在 Vercel 或 .env.local 中添加 NEXT_PUBLIC_GISCUS_REPO 等变量
3. 可参考：https://giscus.app/

下一步建议（可由我代为完成）

- 在 Vercel 导入并自动部署
- 添加自定义域与 HTTPS
- 集成 Giscus（需要 repo ID）与 Plausible Analytics

