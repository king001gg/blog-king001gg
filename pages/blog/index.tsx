import Link from 'next/link'
import Head from 'next/head'

export default function Blog(){
  return (
    <>
      <Head>
        <title>Blog — king001gg</title>
      </Head>
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <ul className="list-disc list-inside space-y-2">
          <li><Link href="/blog/reac" className="text-sky-600">从零实现 ReAct：设计与最小可行实现</Link></li>
          <li><Link href="/blog/bm25-rag" className="text-sky-600">BM25+RAG 的轻量实现（Python 实战）</Link></li>
          <li><Link href="/blog/java-flight" className="text-sky-600">Java 航班管家：Function Calling 与 SSE 实战</Link></li>
        </ul>
      </main>
    </>
  )
}
