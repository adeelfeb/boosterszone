import '../styles/globals.css'
import { sourceSans, sourceSerif } from '../lib/fonts'
import { siteName, siteTagline, siteUrl } from '../lib/siteConfig'

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
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <body className={`${sourceSans.className} antialiased relative min-h-screen`} suppressHydrationWarning>
        {/* Static full-viewport background – all pages share this */}
        <div className="fixed inset-0 z-0 bg-gradient-bz-page" aria-hidden />
        <div
          className="fixed inset-0 z-0 pointer-events-none bg-[url('/images/bz-texture.svg')] bg-repeat opacity-[0.72] mix-blend-multiply"
          style={{ backgroundSize: '320px 320px' }}
          aria-hidden
        />
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-[0.14] bg-footer-pattern"
          aria-hidden
        />
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}

