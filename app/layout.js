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
  title: `${siteName} | Fundraising books for schools & communities`,
  description: siteTagline,
  keywords:
    'fundraising, school fundraiser, custom books, coloring books, local history books, booster club, PTO, PTA',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: `${siteName} | Fundraising books for schools & communities`,
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
          className="fixed inset-0 z-0 bg-gradient-to-br from-forest-950 via-forest-900 to-[#0a1a2e]"
          aria-hidden
        />
        <div
          className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-[url('/images/bz-texture.svg')] bg-repeat"
          style={{ backgroundSize: '400px 400px' }}
          aria-hidden
        />
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}

