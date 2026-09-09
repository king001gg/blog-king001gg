import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import SiteHead from '../components/SiteHead'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
