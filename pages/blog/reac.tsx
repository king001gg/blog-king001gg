import Head from 'next/head'
import GiscusComments from '../../components/GiscusComments'

export default function ReAct(){
  return (
    <>
      <Head>
        <title>从零实现 ReAct — 设计与最小可行实现</title>
      </Head>
      <article className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">从零实现 ReAct：设计与最小可行实现</h1>
        <p>本文为示例文章，介绍如何实现最小可行的 ReAct Agent：LLM 推理 → 工具调用 → 结果反馈 → 最终回复。</p>
        <h2 className="text-xl mt-4">核心思想</h2>
        <ul className="list-disc list-inside">
          <li>循环上限（例如 5 次）防止无限循环</li>
          <li>工具注册表自动生成 function-calling schema</li>
          <li>异常由工具处理并返回给 LLM</li>
        </ul>
        <p className="mt-4">更多内容请参见你的 AURA 与 航班管家 仓库。</p>

        {/* Giscus comments - will render only if env vars are set */}
        <div className="mt-8">
          <GiscusComments />
        </div>
      </article>
    </>
  )
}
