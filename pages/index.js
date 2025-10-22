import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/Layout';
import {
  sunEclipticLongitude,
  ascendantLongitude,
  getSign,
  computeAxes,
  dailyEffect
} from '../lib/astro-utils';
import { generateInsight } from '../lib/yorumlayici-ai';

export default function Home(){
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tz, setTz] = useState(3); // Istanbul default
  const [query, setQuery] = useState('İstanbul');
  const [lat, setLat] = useState(41.015);
  const [lon, setLon] = useState(28.979);
  const [fetching, setFetching] = useState(false);
  const [results, setResults] = useState(null);

  async function lookupCoordinates(q){
    if(!q) return;
    setFetching(true);
    try{
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}`;
      const res = await fetch(url);
      const data = await res.json();
      if(data && data[0]){
        setLat(parseFloat(data[0].lat));
        setLon(parseFloat(data[0].lon));
      }
    } catch(e){
      alert('Konum bulunamadı.');
    } finally { setFetching(false); }
  }

  function toUTC(d, t, offsetHours){
    const local = new Date(`${d}T${t}:00`);
    return new Date(local.getTime() - offsetHours*3600*1000);
  }

    async function compute(){
    if(!date || !time) { alert('Tarih ve saat gerekli'); return; }
    const utc = toUTC(date, time, tz);
    const sunLon = sunEclipticLongitude(utc);
    const ascLon = ascendantLongitude(utc, lat, lon);
    const sun = getSign(sunLon);
    const asc = getSign(ascLon);
    const axes = computeAxes(sunLon, ascLon);
    const insight = await generateInsight(sun.sign, asc.sign, axes.rootSign, axes.shadowSign);

    const daily = dailyEffect(new Date(), axes.rootLon, axes.shadowLon);

    const payload = {
      utc, sun, asc, ...axes, daily, insight,
      place: {lat, lon, name: query}
    };
    setResults(payload);
    try {
      localStorage.setItem('zodiaxisAxes', JSON.stringify({rootLon:axes.rootLon, shadowLon:axes.shadowLon}));
    } catch {}
  }

  async function capture(){
    const card = document.getElementById('shareCard');
    if(!card) return;
    const canvas = await window.html2canvas(card, {scale:2, backgroundColor:'#0B0C1A', useCORS:true});
    const img = canvas.toDataURL('image/png');
    localStorage.setItem('zodiaxisLastCard', img);
    const a = document.createElement('a');
    a.href = img; a.download = 'zodiaxis-karti.png'; a.click();
  }

  return (
    <Layout>
      <Head><title>Zodiaxis – Harita</title></Head>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" strategy="afterInteractive" />
      <h1 className="text-3xl font-semibold mb-6">Doğum Haritası</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={(e)=>{e.preventDefault(); compute();}} className="card p-4 space-y-4">
          <div>
            <label className="block mb-1 text-aurora-text/90">Doğum Tarihi</label>
            <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full" required />
          </div>
          <div>
            <label className="block mb-1 text-aurora-text/90">Doğum Saati</label>
            <input type="time" value={time} onChange={e=>setTime(e.target.value)} className="w-full" required />
          </div>
          <div>
            <label className="block mb-1 text-aurora-text/90">Zaman Dilimi (UTC)</label>
            <input type="number" step="0.5" value={tz} onChange={e=>setTz(parseFloat(e.target.value))} className="w-full" />
            <small className="text-aurora-text/70">İstanbul: 3</small>
          </div>
          <div>
            <label className="block mb-1 text-aurora-text/90">Şehir veya Koordinat</label>
            <div className="flex gap-2">
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="İstanbul" className="flex-1" />
              <button type="button" onClick={()=>lookupCoordinates(query)} className="button whitespace-nowrap">{fetching?'Aranıyor…':'Konumu Bul'}</button>
            </div>
            <div className="text-xs text-aurora-text/70 mt-1">Enlem: {lat.toFixed(3)} / Boylam: {lon.toFixed(3)}</div>
          </div>
          <button className="button w-full">Haritayı Hesapla</button>
        </form>

        <div className="card p-4">
          <h2 className="text-xl font-semibold mb-3">Sonuç</h2>
          {!results && <p className="text-aurora-text/70">Formu doldurup “Haritayı Hesapla”ya basın.</p>}
          {results && (
            <div>
              <div id="shareCard" className="p-5 rounded-2xl border border-aurora-border shadow-xl bg-gradient-to-br from-indigo-950/80 via-slate-900/70 to-fuchsia-900/60 backdrop-blur-md ring-1 ring-white/5">
                <h3 className="text-lg font-semibold mb-2">Doğum Haritanız</h3>
                <p><b>Güneş:</b> {results.sun.sign} {results.sun.degWithinSign.toFixed(2)}°</p>
                <p><b>Yükselen:</b> {results.asc.sign} {results.asc.degWithinSign.toFixed(2)}°</p>
                <p><b>Kök Aks:</b> {results.rootSign} {results.rootDeg.toFixed(2)}°</p>
                <p><b>Gölge Aks:</b> {results.shadowSign} {results.shadowDeg.toFixed(2)}°</p>
                <p><b>Günlük Etki:</b> Kök {results.daily.root} • Gölge {results.daily.shadow}</p>
                <hr className="my-3 border-aurora-border" />
                <h4 className="text-md font-semibold mb-1">🪄 Karakter Analizi ve Kişilik Yorumu</h4>
                <p className="text-aurora-text/90 whitespace-pre-line">{results.insight}</p>
              </div>
              <div className="mt-3 flex gap-2">
                <button onClick={capture} className="button flex-1">Kartı İndir</button>
                <button onClick={()=>{
                  const img = localStorage.getItem('zodiaxisLastCard');
                  const feed = JSON.parse(localStorage.getItem('zodiaxisFeed')||'[]');
                  feed.unshift({image: img, caption:`#${results.rootSign.replace(' ','_')}`, ts: new Date().toISOString()});
                  localStorage.setItem('zodiaxisFeed', JSON.stringify(feed));
                  alert('Akışa gönderildi.');
                }} className="button flex-1">Akışta Paylaş</button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(() => {
                  const caption = `Güneş: ${results.sun.sign} ${results.sun.degWithinSign.toFixed(1)}° | Yükselen: ${results.asc.sign} ${results.asc.degWithinSign.toFixed(1)}° | Kök: ${results.rootSign} | Gölge: ${results.shadowSign}`;
                  const encodedText = encodeURIComponent(caption);
                  const url = typeof window!=='undefined' ? window.location.href : '';
                  const encodedUrl = encodeURIComponent(url);
                  return (
                    <>
                      <a href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`} target="_blank" rel="noopener" className="button !bg-[#1d9bf0]">X</a>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener" className="button !bg-[#0a66c2]">LinkedIn</a>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener" className="button !bg-[#1877f2]">Facebook</a>
                      <button type="button" onClick={()=>alert('Instagram için: Kartı indirip uygulama üzerinden Hikaye/Gönderi olarak paylaşın.')} className="button">Instagram</button>
                    </>
                  );
                })()}
              </div>

            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
