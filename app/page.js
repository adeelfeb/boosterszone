import Navbar from '../components/designndev/Navbar'
import SiteHero from '../components/designndev/SiteHero'
import PracticeAreasSection from '../components/designndev/PracticeAreasSection'
import PartnershipFormSection from '../components/designndev/PartnershipFormSection'
import Footer from '../components/designndev/Footer'
import TextureOverlay from '../components/designndev/TextureOverlay'
import { siteName, siteTagline, siteUrl } from '../lib/siteConfig'

export const metadata = {
  title: `${siteName} | Home`,
  description: siteTagline,
  keywords: 'draft template, next.js, login, dashboard',
  openGraph: {
    title: `${siteName} | Home`,
    description: siteTagline,
    url: siteUrl,
    siteName,
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay />
      <Navbar />
      <div className="relative w-full mx-auto">
        <SiteHero />
        <PracticeAreasSection />
        <PartnershipFormSection />
      </div>
      <Footer />
    </main>
  )
}
