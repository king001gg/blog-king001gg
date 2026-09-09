import Head from 'next/head'

export default function SiteHead({ title, description }: { title?: string; description?: string }) {
  const siteTitle = title || 'king001gg — Blog & Portfolio'
  const siteDescription =
    description ||
    'king001gg — AI Agent 实践：AURA (Python) 与 航班管家 (Java) 的实现笔记与作品集'
  const siteUrl = 'https://blog-king001gg.vercel.app'
  const ogImage = `${siteUrl}/og-image.svg`

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="icon" href="/favicon.svg" />
      <meta name="theme-color" content="#0ea5a4" />
    </Head>
  )
}
