
import Layout from '../components/Layout'

export default function Iletisim() {
  return (
    <Layout title="İletişim">
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-fuchsia-900 text-white p-10 text-center">
        <h1 className="text-4xl font-bold mb-6">İletişim</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Bizimle iletişime geçmek için e-posta veya sosyal medya hesaplarımızı kullanabilirsin.<br/>
          ✨ E-posta: <a href="mailto:info@zodiaxis.com" className="text-fuchsia-300 underline">info@zodiaxis.com</a><br/>
          🌙 Instagram: <a href="https://instagram.com/zodiaxis" className="text-fuchsia-300 underline">@zodiaxis</a>
        </p>
      </div>
    </Layout>
  )
}
