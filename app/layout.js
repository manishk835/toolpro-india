import '../globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'FastTools - Simple Indian Tools & AI Directory',
  description: 'Free calculators, handy utilities and curated AI tools for India.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>

        {/* Google Search Console Verification */}
        <meta 
          name="google-site-verification" 
          content="NcB-1mTwGv2JFZclXf5pGrm_Vs_a3EfM6UYI-zdr0L8" 
        />

        {/* Add your AdSense client id here after approval */}
        <script
          data-ad-client="ca-pub-REPLACE_WITH_YOUR_ID"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>

      </Head>

      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
