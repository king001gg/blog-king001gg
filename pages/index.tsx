import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>king001gg — Blog & Portfolio</title>
        <meta name="description" content="Blog and projects by king001gg — AURA, 航班管家, Agent engineering notes" />
      </Head>
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">king001gg — Blog & Portfolio</h1>
        <p className="mb-4">两个自研Agent项目：AURA（Python）与航班管家（Java）。在这里我记录实现细节、踩坑、以及工程化经验。</p>
        <div className="space-y-3">
          <Link href="/projects" className="text-sky-600">Projects</Link>
          <Link href="/blog" className="text-sky-600">Blog</Link>
          <Link href="/about" className="text-sky-600">About</Link>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Featured</h2>
          <ul className="mt-3 list-disc list-inside">
            <li><Link href="/blog/reac" className="text-sky-600">从零实现 ReAct：设计与最小可行实现</Link></li>
            <li><Link href="/blog/bm25-rag" className="text-sky-600">BM25+RAG 的轻量实现（Python 实战）</Link></li>
            <li><Link href="/blog/java-flight" className="text-sky-600">Java 航班管家：Function Calling 与 SSE 实战</Link></li>
          </ul>
        </section>
      </main>
    </>
  )
}
