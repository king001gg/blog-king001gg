## Giscus 评论集成 （已添加组件）

我已在仓库中添加了一个可复用的 Giscus 评论组件（components/GiscusComments.tsx）。该组件使用 `@giscus/react` 并在客户端动态加载，只有在你把必要的环境变量配置到部署环境（例如 Vercel）之后才会显示。

必需的环境变量（在 Vercel 项目设置 -> Environment Variables 添加）：

- NEXT_PUBLIC_GISCUS_REPO=king001gg/blog-king001gg
- NEXT_PUBLIC_GISCUS_REPOSITORY_ID=<repositoryId from giscus.app>
- NEXT_PUBLIC_GISCUS_CATEGORY=<category name>
- NEXT_PUBLIC_GISCUS_CATEGORY_ID=<categoryId from giscus.app>

如何获取 repositoryId 和 categoryId：

1. 访问 https://giscus.app/ 并用你的 GitHub 账号授权。
2. 在配置向导中选择：Repository = king001gg/blog-king001gg，选择或创建一个 Discussion/Issue Category（例如：General）。
3. 在生成的配置中会��示 repositoryId 与 categoryId，把它们复制粘贴到 Vercel 的环境变量中。

部署后，Giscus 评论会自动在文章页底部显示（mapping 使用 pathname）。

如需我代为把这四个值设置到 Vercel（你在 Vercel 控制台授权我访问仓库），我也可以替你完成环境变量设置并触发一次部署。
