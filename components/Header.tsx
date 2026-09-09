import Link from 'next/link'

export default function Header(){
  return (
    <header className="border-b">
      <div className="max-w-3xl mx-auto p-4 flex justify-between items-center">
        <Link href="/"><a className="font-semibold">king001gg</a></Link>
        <nav className="space-x-4">
          <Link href="/projects"><a className="text-sm text-slate-600">Projects</a></Link>
          <Link href="/blog"><a className="text-sm text-slate-600">Blog</a></Link>
          <Link href="/about"><a className="text-sm text-slate-600">About</a></Link>
        </nav>
      </div>
    </header>
  )
}
