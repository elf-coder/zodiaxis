import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Akis(){
  const [feed, setFeed] = useState([]);

  useEffect(()=>{
    const f = JSON.parse(localStorage.getItem('zodiaxisFeed')||'[]');
    setFeed(f);
  },[]);

  return (
    <Layout>
      <Head><title>Akış – Zodiaxis</title></Head>
      <h1 className="text-3xl font-semibold mb-6">Topluluk Akışı</h1>
      {feed.length===0 && <p className="card p-4">Henüz paylaşım yok. Harita sayfasında “Akışta Paylaş”a basın.</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feed.map((p,idx)=>(
          <div key={idx} className="card p-3">
            {p.image && <img src={p.image} alt="paylaşılan kart" className="rounded-xl mb-2" />}
            <div className="text-sm text-aurora-text/80">{p.caption||''}</div>
            <div className="text-xs text-aurora-text/60">{new Date(p.ts).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
