更新：添加网站全局 Head 组件，包含基本 SEO meta、Open Graph 与 Twitter Card；新增 favicon.svg 与 og-image.svg（用于社交预览）。

变更文件：
- components/SiteHead.tsx（新增）
- pages/_app.tsx（修改，注入 SiteHead）
- public/favicon.svg（新增）
- public/og-image.svg（新增）

建议：部署后检查 https://blog-king001gg.vercel.app/ 的社交分享预览（可用 Twitter Card Validator 或 Facebook 分享调试器）。
