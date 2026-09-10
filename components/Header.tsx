import Link from 'next/link'

export default function Header(){
  return (
    <header className="border-b">
      <div className="max-w-3xl mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="font-semibold">king001gg</Link>
        <nav className="space-x-4">
          <Link href="/projects" className="text-sm text-slate-600">Projects</Link>
          <Link href="/blog" className="text-sm text-slate-600">Blog</Link>
          <Link href="/about" className="text-sm text-slate-600">About</Link>
        </nav>
      </div>
    </header>
  )
}
