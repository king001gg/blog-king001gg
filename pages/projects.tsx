import Head from 'next/head'

export default function Projects(){
  return (
    <>
      <Head>
        <title>Projects — king001gg</title>
      </Head>
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Projects</h1>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold">AURA — Python Agent</h3>
            <p>轻量级 Agent 智能伴侣，ReAct + BM25 RAG + 长期记忆。仓库：<a className="text-sky-600" href="https://github.com/king001gg">github.com/king001gg</a></p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">航班管家 — Java Agent</h3>
            <p>基于 Spring Boot 的企业级 Agent，支持 Function Calling、SSE 流式输出与仪表盘。</p>
          </li>
        </ul>
      </main>
    </>
  )
}
