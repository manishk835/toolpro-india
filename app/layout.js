import '../globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Script from "next/script"

export const metadata = {
  title: 'FastTools - Simple Indian Tools & AI Directory',
  description: 'Free calculators, handy utilities and curated AI tools for India.',
  verification: {
    google: 'NcB-1mTwGv2JFZclXf5pGrm_Vs_a3EfM6UYI-zdr0L8',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-7279809363476102"
        />
      </head>

      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <Footer />

        {/* AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7279809363476102"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}