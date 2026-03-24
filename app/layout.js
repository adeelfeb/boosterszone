import { Poppins, Cormorant_Garamond } from 'next/font/google'
import '../styles/globals.css'
import { siteName, siteTagline, siteUrl } from '../lib/siteConfig'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: `${siteName} | Draft template`,
  description: siteTagline,
  keywords: 'draft, template, web app',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: `${siteName} | Draft template`,
    description: siteTagline,
    url: siteUrl,
    siteName,
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className={`${poppins.className} antialiased relative min-h-screen`} suppressHydrationWarning>
        {/* Static full-viewport background – all pages share this */}
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/bg.png)' }}
          aria-hidden
        />
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}

