import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* 🌟 Site Başlığı */}
        <title>Zodiaxis – Gerçek Gökyüzü Astrolojisi</title>

        {/* 🪞 Arama Motoru Açıklaması */}
        <meta
          name="description"
          content="Gerçek gökyüzü astrolojisi – 13’lü Zodiaxis sistemiyle kişisel aks analizini keşfet! Kök, gölge, yükselen ve ruh akslarını analiz eden modern astroloji platformu."
        />

        {/* ✨ Anahtar Kelimeler (SEO) */}
        <meta
          name="keywords"
          content="astroloji, doğum haritası, zodyak, aks analizi, kök aks, gölge aks, yükselen burç, 13 burç sistemi, Zodiaxis, gerçek gökyüzü astrolojisi"
        />

        {/* 🌈 Görünüm ve Tema Ayarları */}
        <meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
/>

        <meta name="theme-color" content="#120b2f" />

        {/* 💫 Open Graph (Facebook / Instagram / WhatsApp) */}
        <meta property="og:title" content="Zodiaxis – Gerçek Gökyüzü Astrolojisi" />
        <meta
          property="og:description"
          content="Zodiaxis: 13’lü Gerçek Gökyüzü Astrolojisi – kişisel aks dengenizi, gölge yönlerinizi ve ruhsal gelişiminizi keşfedin."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zodiaxis.vercel.app" />
        <meta property="og:image" content="/logo.png" />

        {/* 🐦 Twitter Kartları */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zodiaxis – Gerçek Gökyüzü Astrolojisi" />
        <meta
          name="twitter:description"
          content="Gerçek gökyüzü astrolojisiyle tanış: 13’lü sistemde aks dengeni, öz ve gölge yönlerini keşfet!"
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* 🔮 Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
