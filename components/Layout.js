import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 20%, #1a1f35, #0B0C1A 80%)',
      }}
    >
      {/* 🌙 Başlık + Favicon */}
      <Head>
        <title>Zodiaxis – Gerçek Gökyüzü Astrolojisi</title>
        <meta name="description" content="Zodiaxis: 13’lü Gerçek Gökyüzü Astrolojisi ve Aks Sistemi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <meta name="theme-color" content="#120b2f" />
      </Head>

      <header className="sticky top-0 z-30 backdrop-blur bg-black/20 border-b border-aurora-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full"
              style={{
                background: 'linear-gradient(90deg,#A855F7,#00FFC6)',
              }}
            ></div>
            <span className="font-semibold text-aurora-text">Zodiaxis</span>
          </Link>

          <nav className="flex items-center gap-4 text-aurora-text/90">
            <Link href="/" className="hover:text-white">Harita</Link>
            <Link href="/aks-analizi" className="hover:text-white">Aks'ınız</Link>
            <Link href="/akis" className="hover:text-white">Akış</Link>
            <Link href="/aciklama" className="hover:text-white">Zodiaxis Nedir</Link>
            <a href="/burclar" className="hover:text-fuchsia-300">Burçlar</a>
            <a href="/onuc-sistem" className="hover:text-fuchsia-300">13’lü Gerçek Sistem</a>
            <a href="/aks-nedir" className="hover:text-fuchsia-300">Aks Nedir</a>
            <a href="/iletisim" className="hover:text-fuchsia-300">İletişim</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8">{children}</main>

      <footer className="border-t border-aurora-border/70 py-6 text-center text-aurora-text/70">
        © {new Date().getFullYear()} Zodiaxis — Aurora Sky
      </footer>
    </div>
  );
}
