import '../globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}