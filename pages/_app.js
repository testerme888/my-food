import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        
        <link rel="icon" href="/logo.jpg" />
        <title>SAMRIT FOOD</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
