import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Sadece POST istekleri kabul edilir." });
  }

  const { sun, asc, root, shadow } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Sen bir astroloji uzmanısın.
Kişinin doğum haritası:
- Güneş: ${sun}
- Yükselen: ${asc}
- Kök Aks: ${root}
- Gölge Aks: ${shadow}

Bu bilgilere göre 2-3 paragraflık içsel, ruhsal bir astroloji yorumu yaz.`,
        },
      ],
      temperature: 0.8,
    });

    const text = completion.choices[0].message.content.trim();
    res.status(200).json({ text });
  } catch (err) {
    console.error("AI yorum hatası:", err);
    res.status(500).json({ error: "AI yorum oluşturulamadı." });
  }
}
