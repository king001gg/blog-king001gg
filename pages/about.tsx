import Head from 'next/head'

export default function About(){
  return (
    <>
      <Head>
        <title>About — king001gg</title>
      </Head>
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">About</h1>
        <p className="mb-4">我是桂林航天工业学院软件工程专业的学生，专注在 AI Agent 实践与工程化。两个自研项目：AURA（Python）与航班管家（Java）。</p>

        <h2 className="text-xl font-semibold mt-6">Contact</h2>
        <p>GitHub: <a className="text-sky-600" href="https://github.com/king001gg">github.com/king001gg</a></p>
        <p className="mt-2">如需私聊，请把邮箱或微信放在这里（建议不要直接将敏感信息放在公网上）</p>
      </main>
    </>
  )
}
