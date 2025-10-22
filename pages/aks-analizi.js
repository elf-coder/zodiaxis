import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { getSign } from '../lib/astro-utils';
import ZodiacChart from '../components/ZodiacChart';

export default function AksAnalizi() {
  const [axes, setAxes] = useState(null);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('zodiaxisAxes') || '{}');
      if (stored.rootLon == null || stored.shadowLon == null) return;

      const root = getSign(stored.rootLon);
      const oppRoot = getSign((stored.rootLon + 180) % 360);
      const shadow = getSign(stored.shadowLon);
      const oppShadow = getSign((stored.shadowLon + 180) % 360);

      setAxes({
        rootLon: stored.rootLon,
        shadowLon: stored.shadowLon,
        rootPair: `${root.sign} – ${oppRoot.sign}`,
        shadowPair: `${shadow.sign} – ${oppShadow.sign}`
      });
    } catch (err) {
      console.error('Aks analizi yüklenemedi:', err);
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Aks Analizi – Zodiaxis</title>
      </Head>

      {/* Genel font ayarı */}
      <div className="font-sans text-[15px] leading-relaxed text-aurora-text/90">

        <h1 className="text-3xl font-semibold mb-6">Aks Analizi</h1>

        {!axes && (
          <p className="card p-4">
            Önce harita oluşturun; veriler buraya otomatik gelecektir.
          </p>
        )}

        {axes && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {/* ☀️ Kök Aks */}
              <div className="card p-5 font-sans">
                <h2 className="text-xl font-semibold mb-2">☀️ Kök Aks</h2>
                <p className="text-aurora-text/90">{axes.rootPair}</p>
                <p className="mt-2 text-aurora-text/80 text-sm">
                  🔆 <strong>Kök Aks:</strong> “Ben” ile “Biz” Arasındaki Dengeyi ifade eder.
                </p>
                <br />
                <p>🌞 <strong>1) Kök Aks Nedir?</strong> Kök Aks, Güneş burcundan türetilir; yaşam enerjini, iradeni ve kimlik bilincini temsil eder. “Ben kimim, ne istiyorum, nereye gidiyorum?” sorularına bu hat üzerinde yanıt aranır. Karşı uçtaki burç, ilişkilerdeki yansımayı ve geçmişten taşınan kalıpları göstererek hem kim olduğunu hem de nereden geldiğini aydınlatır.</p>
                <br />
                <p>💪 <strong>2) Bireysel İrade (Ben)</strong> Bu kutup; kendi yolunu çizme, karar alma ve hedef belirleme gücünü ifade eder. Öz güven, bağımsızlık ve özgürlük buradan doğar. Aşırı ben vurgusu bencillik veya kopukluk riski taşıyabileceği için, dengeyi kurmak üzere diğer kutup olan ilişki alanı devreye girer.</p>
                <br />
                <p>🤝 <strong>3) İlişki Dinamikleri (Biz)</strong> Bu taraf; sevgi, empati, uyum ve iş birliği kapasitesini anlatır. Karşındaki kişi bir ayna gibi çalışır; kendi özünü onun üzerinden fark edersin. Buradaki temel ders, “Bireyselliğimi korurken başkalarına nasıl alan açarım?” sorusunun yanıtını olgunlaştırmaktır.</p>
                <br />
                <p>⚖️ <strong>4) Denge Mekanizması</strong> Aks, “Ben” (özgürlük, irade) ile “Biz” (uyum, bağ) arasında salınan bir sarkaç gibidir. Amaç, sarkacın ortasında kalmak; yani özünü kaybetmeden ilişkide var olabilmektir. Denge, her iki kutbun gücünü sırayla değil, birlikte ve yerinde kullanabilme becerisidir.</p>
                <br />
                <p>🔥 <strong>5) Örnek: Koç–Terazi Aksı</strong> Koç “Ben varım” diyerek başlangıç, cesaret ve girişim enerjisini temsil eder; Terazi “Biz varız” diyerek denge, zarafet ve ortaklık bilincini taşır. Bu hattın dersi, bağımsızlık ile uyum arasında köprü kurmak; hem kendin olmak hem de birlikte var olmayı öğrenmektir.</p>
                <br />
                <p>🌌 <strong>6) Ruhsal Derinlik</strong> Kök Aks, ego bilincinin evrimini anlatır. “Sadece ben” odaklı bakıştan “ben ve biz” bilincine geçiş sağlanır. Kişi hem kendini gerçekleştirir hem de ilişkilerinde olgunlaşır; irade ile şefkat, özgürlük ile sorumluluk arasında daha bilinçli bir denge kurar.</p>
                <br />
                <p>💫 <strong>7) Sonuç</strong> Kök Aks dengedeyse kişi kendi iradesinin efendisidir ve sevgi dolu, adil, sürdürülebilir ilişkiler kurabilir. Gerçek özgürlük ve gerçek sevgi, merkezde kalabilme yeteneğiyle görünür olur: ne bütünüyle “ben”, ne de tamamen “biz”; ikisinin uyumlu ve bilinçli dengesi.</p>
              </div>

              {/* 🌑 Gölge Aks */}
              <div className="card p-5 font-sans">
                <h2 className="text-xl font-semibold mb-2">🌑 Gölge Aks</h2>
                <p className="text-aurora-text/90">{axes.shadowPair}</p>
                <p className="mt-2 text-aurora-text/80 text-sm">
                  <strong>Gölge Aks:</strong> Yüzleşmen gereken yönü gösterir.
                </p>
                <br />
                <p>🌑 <strong>1) Gölge Aks Nedir?</strong> Gölge Aks, yükselen burçtan türetilir ve kişinin dünyaya yansımasıyla ilişkilerdeki görünmeyen yönünü temsil eder. Kök Aks “kim olduğunu” anlatırken, Gölge Aks “kimden kaçtığını ama yüzleşmen gereken yönü” gösterir. Bu eksen, farkındalık kazandıkça gizli kalan potansiyeli açığa çıkarır ve içsel bütünlüğü güçlendirir.</p>
                <br />
                <p>🏠 <strong>2) Güvenlik ve Kontrol</strong> Her ruh, kendini güvende hissetmek için bir düzen kurar; fakat fazla kontrol, büyüme alanını daraltır. Gölge Aks’ın öğretisi şudur: Gerçek güven, kontrol etmekte değil, bırakabilme cesaretindedir. Bu anlayış, kalıpları yumuşatır ve ruhun daha doğal bir akışla ilerlemesine izin verir.</p>
                <br />
                <p>🦂 <strong>3) Dönüşüm ve Teslimiyet</strong> Bu aks, Akrep arketipiyle ilişkilidir: ölüm, yeniden doğuş ve dönüşüm döngüsüdür. Teslimiyet, vazgeçmek değil; akışa güvenmek ve bırakışta öz gücü bulmaktır. Kriz anları, ruhsal evrimin katalizörleri haline gelir ve kişi, kendi karanlığının içinden yeni bir bilgelik çıkarır.</p>
                <br />
                <p>⚖️ <strong>4) Denge</strong> Gölge Aks’ın dengesi, ne tam kontrol ne de tamamen dağılmadadır. Gerçek olgunluk “köklerim var ama değişimden korkmuyorum” diyebilmektir. Tutunmadan sevebilmek, kaybetmeden bırakabilmek ve sabit kalmadan derinleşmek bu eksenin olgun meyvesidir.</p>
                <br />
                <p>🜃 <strong>5) Ruhsal Düzey</strong> Genellikle Boğa–Akrep hattıyla ilişkilidir. Boğa, sahip olduklarıyla güvende hisseder; Akrep, bıraktıkça dönüşür. Bu aksın dersi şudur: Sahip oldukların seni tanımlamaz; bıraktıkların seni özgürleştirir. Gerçek güven, maddeye değil bilince dayanır.</p>
                <br />
                <p>🪞 <strong>6) Psikolojik Boyut</strong> Bu eksen, duygusal güven arayışıyla birlikte kontrol isteğini ve kayıp korkusunu da içinde barındırır. Kriz anlarında aktif hale gelir ve kişiyi özüne döndürür. Teslim olmayı öğrenmek, güç kaybı değil; içsel dayanıklılığın yeniden doğuşudur.</p>
                <br />
                <p>🌸 <strong>7) Evrim Süreci</strong> Gölge Aks’ın yolculuğu; güvenliği kontrolle aramaktan, kaybı kabule ve teslimiyetle huzuru yeniden kurmaya doğru ilerler. Akışa bırakmayı öğrendikçe kişi gerçek içsel gücü ve derin sükûneti keşfeder. Böylece bırakmak, kaybetmek değil; dönüşerek yeniden doğmaktır.</p>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
