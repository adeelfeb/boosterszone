import Navbar from '../components/designndev/Navbar'
import BoostersHomeContent from '../components/boosters/BoostersHomeContent'
import PartnershipFormSection from '../components/designndev/PartnershipFormSection'
import Footer from '../components/designndev/Footer'
import { siteName, siteTagline, siteUrl } from '../lib/siteConfig'

export const metadata = {
  title: `${siteName} | Raise thousands for your school or PTO`,
  description: siteTagline,
  keywords:
    'elementary school fundraiser, custom books, coloring books, local history, booster club, PTO, PTA, cookie dough alternative, Merrimack Valley',
  openGraph: {
    title: `${siteName} | Raise thousands for your school or PTO`,
    description: siteTagline,
    url: siteUrl,
    siteName,
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="relative w-full mx-auto">
        <BoostersHomeContent />
        <PartnershipFormSection />
      </div>
      <Footer />
    </main>
  )
}
