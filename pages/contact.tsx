import Head from 'next/head'

export default function Contact(){
  return (
    <>
      <Head>
        <title>Contact — king001gg</title>
      </Head>
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <p>GitHub: <a className="text-sky-600" href="https://github.com/king001gg">github.com/king001gg</a></p>
        <p className="mt-4">如果你想让我协助部署到 Vercel 或绑定域名，可以授权 Vercel 访问仓库并把域名发给我。</p>
      </main>
    </>
  )
}
