import Head from 'next/head'

export default function BM25(){
  return (
    <>
      <Head>
        <title>BM25+RAG 的轻量实现（Python 实战）</title>
      </Head>
      <article className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">BM25+RAG 的轻量实现（Python 实战）</h1>
        <p>示例文章：如何在不使用向量数据库与 embedding 模型的情况下，实现一个基于 BM25 的 RAG 检索流程。</p>
        <h2 className="text-xl mt-4">步骤概览</h2>
        <ol className="list-decimal list-inside">
          <li>文本切片（段落/固定大小）</li>
          <li>倒排索引与 IDF/TF 计算</li>
          <li>查询时检索 Top-K 并把结果注入到 LLM 上下文</li>
        </ol>

        <div className="mt-8">
          {/* placeholder for comments */}
        </div>
      </article>
    </>
  )
}
