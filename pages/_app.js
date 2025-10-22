import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zodiaxis – Gerçek Gökyüzü Astrolojisi</title>
        <meta name="description" content="Zodiaxis: 13’lü Gerçek Gökyüzü Astrolojisi ve Aks Sistemi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta name="theme-color" content="#120b2f" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
