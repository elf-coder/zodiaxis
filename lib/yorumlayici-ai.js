/**
 * Bu sürüm, AI yorumunu doğrudan OpenAI istemcisiyle oluşturmak yerine,
 * Next.js backend endpoint’ine (/api/ai) gönderir. Böylece API anahtarı tarayıcıya gitmez.
 * 
 * Not: /pages/api/ai.js dosyası bu yapıyı destekleyecek şekilde eklenmelidir.
 */
export async function generateInsight(sun, asc, root, shadow) {
  const payload = { sun, asc, root, shadow };

  try {
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Sunucu hatası: ${res.status}`);
    }

    const data = await res.json();
    return data.text || "AI yorum üretilemedi.";
  } catch (err) {
    console.error("AI yorum hatası:", err);
    return "Yorum oluşturulamadı (bağlantı hatası veya sunucu yanıt vermedi).";
  }
}
