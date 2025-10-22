import Head from 'next/head'
import Layout from '../components/Layout'

export default function Aciklama() {
  return (
    <Layout>
      <Head>
        <title>Açıklama – Zodiaxis</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900/90 to-fuchsia-900/80 text-gray-100 px-6 md:px-12 py-16 font-sans">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-cyan-300">
          Zodiaxis Nedir?
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 text-[17px] leading-relaxed tracking-wide">
          <p className="text-center text-lg text-aurora-text/90">
            <b>Zodiaxis</b>, gerçek gökyüzü temelli (True Sidereal) bir astroloji sistemidir.  
            13 takımyıldızı — Yılancı (Ophiuchus) dahil — dikkate alır ve gökyüzünün
            <em>gerçek astronomik düzenini</em> temel alır.
          </p>

          <p>
            Klasik sistemlerde her burç 30°’lik eşit dilimlere bölünürken,  
            Zodiaxis Uluslararası Astronomi Birliği (IAU) sınırlarını kullanarak  
            Güneş’in gerçekten geçtiği takımyıldız konumlarını hesaplar.  
            Böylece “Ben aslında hangi burcun içindeyim?” sorusu gökyüzü verileriyle yanıt bulur.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-fuchsia-300">🔭 Sistemin Temelleri</h2>

          <p><b>☀️ Güneş (Kök Aks):</b> Yaşam enerjini, iradeni ve kimliğini temsil eder.</p>
          <p><b>⬆️ Yükselen (Gölge Aks):</b> Dünyaya sunduğun maskeyi, kişisel farkındalığını ve sınav alanlarını gösterir.</p>
          <p><b>🌙 Ay & Diğer Noktalar:</b> Yakında eklenecek; duygusal döngü ve içsel motivasyonları detaylandıracak.</p>

          <h2 className="text-2xl font-semibold mt-10 text-fuchsia-300">⚖️ Akslar Sistemi</h2>

          <p>
            Her aks, zodyak çemberinde 180° karşıt iki burcun oluşturduğu enerjik hattır.  
            Bu hatlar yaşamın dört temel dengesini gösterir:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li><b>Öz–Gölge:</b> Kimliğin görünür ve bastırılmış yönleri</li>
            <li><b>Kök–Yükselen:</b> Güvenlik ve dış imaj dengesi</li>
            <li><b>Ruh–Madde:</b> Maneviyat ve dünya deneyimi</li>
            <li><b>Ben–Biz:</b> Bireysellik ve ilişki bilinci</li>
          </ul>

          <p>
            Her aks bir “denge öğretmeni” gibi çalışır.  
            Örneğin, <b>Koç–Terazi</b> bireysellik ↔ uyum,  
            <b>Boğa–Akrep</b> güvenlik ↔ dönüşüm dengesini öğretir.  
            13. eksen olan <b>Yılancı</b> ise şifayı, bilinç dönüşümünü ve yenilenmeyi temsil eder.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-fuchsia-300">🌈 Aurora Arayüz & AI Yorumlayıcı</h2>

          <p>
            Zodiaxis arayüzü, mor–turkuaz geçişli “Aurora Sky” temasıyla tasarlandı.  
            Her kullanıcı için kişisel yorumlar, yapay zeka tarafından üretilir.  
            AI; Güneş, Yükselen, Kök ve Gölge Aks verilerini birleştirerek duygusal ve sezgisel analizler oluşturur.
          </p>

          <p>
            Haritanı oluşturduktan sonra kişisel kartını indirip sosyal medyada paylaşabilirsin.  
            Mobil cihazlarda <code>navigator.share()</code> özelliğiyle doğrudan paylaşım yapılabilir.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-fuchsia-300">🪐 Teknik Altyapı</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Next.js 14 + React 18 + Tailwind CSS (Aurora Theme)</li>
            <li>Gerçek gökyüzü hesaplaması: Astronomy Engine / Swiss Ephemeris</li>
            <li>Yapay zeka yorumları: OpenAI API veya yerel LLM</li>
            <li>Veri saklama: localStorage entegrasyonu</li>
            <li>Konum desteği: Otomatik enlem–boylam algılama</li>
          </ul>

          <p className="text-center text-fuchsia-200 mt-10 italic">
            ✨ Gerçek gökyüzüyle hizalan, dengenle buluş.  
            Zodiaxis — dönüşüm yolculuğunun haritası.
          </p>
        </div>
      </div>
    </Layout>
  )
}
