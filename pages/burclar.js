import Layout from '../components/Layout'

export default function Burclar() {
  return (
    <Layout title="Burçlar">
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900/90 to-fuchsia-900/80 text-gray-100 px-6 md:px-12 py-16 font-sans">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-cyan-300">
          Burçlar
        </h1>

        <p className="text-center max-w-3xl mx-auto mb-10 text-lg text-aurora-text/90">
          12 burcun sembolleri ve enerjileri bizi zodyak çemberi içinde dört yönde etkiler.  
          <strong>ZodyAxis</strong> sistemi bu döngüyü 13’lü gerçek düzenle bütünsel biçimde sunar.
        </p>

        {/* Burç kartları grid düzeninde */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♈ <b>Koç</b> — Cesaretin ve başlangıçların öncüsüdür.  
            Harekete geçme gücünü, liderlik ve özgüveni temsil eder.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♉ <b>Boğa</b> — Huzur, sabır ve zevkle ilgilidir.  
            Güzellik, doğa ve güvenlik duygusuyla denge kurar.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♊ <b>İkizler</b> — Meraklı, zeki ve iletişim ustasıdır.  
            Bilgi paylaşımı ve sosyal bağlar onun alanıdır.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♋ <b>Yengeç</b> — Şefkat, aidiyet ve duygusal güvenin burcudur.  
            Aile, kökler ve kalp bağıyla ilgilenir.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♌ <b>Aslan</b> — Işığıyla parlayan yaratıcılıktır.  
            Sahneye çıkar, kalpten sever ve kendini cesurca ifade eder.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♍ <b>Başak</b> — Düzen, analiz ve hizmet bilincidir.  
            Detaylara dikkat eder, mükemmeli arar ve iyileştirir.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♎ <b>Terazi</b> — Estetik, adalet ve uyum arayışını simgeler.  
            İlişkilerde denge kurmak onun doğasında vardır.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♏ <b>Akrep</b> — Dönüşümün ve derinliğin burcudur.  
            Tutku, gizem ve yeniden doğuş enerjisini taşır.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♐ <b>Yay</b> — Özgürlük, keşif ve bilgelik yolcusudur.  
            Yeni ufuklar ve anlam arayışı onun itici gücüdür.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♑ <b>Oğlak</b> — Sorumluluk ve azmin sembolüdür.  
            Hedeflerine kararlılıkla tırmanır, somut başarı ister.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♒ <b>Kova</b> — Yenilikçi, bağımsız ve toplumsal vizyon sahibidir.  
            Farklı düşünür, geleceği şekillendirir.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition">
            ♓ <b>Balık</b> — Şefkat, sezgi ve hayal gücüyle akar.  
            Ruhsal derinlik ve empatiyle birliğe ulaşır.
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg hover:shadow-fuchsia-700/30 transition sm:col-span-2 lg:col-span-3">
            ⛎ <b>Yılancı (Ophiuchus)</b> — Bilgeliğin ve şifanın burcudur.  
            Yenilenmeyi, içsel gücü ve gizli bilgeliği temsil eder.
          </div>
        </div>

        <p className="text-center text-fuchsia-200 mt-12 italic">
          ✨ ZodyAxis — Gerçek gökyüzünün 13’lü ritmiyle evrilen astrolojik sistem.
        </p>
      </div>
    </Layout>
  )
}
