import Navbar from '../../components/designndev/Navbar'
import PracticeAreasSection from '../../components/designndev/PracticeAreasSection'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import { siteName, siteTagline } from '../../lib/siteConfig'

export const metadata = {
  title: `Services | ${siteName}`,
  description: siteTagline,
  keywords: 'services, offerings, draft template',
}

export default function PracticeAreasPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
      <Navbar />
      <div className="w-full max-w-[420px] sm:max-w-none mx-auto sm:mx-0 pt-20">
        <PracticeAreasSection />
      </div>
      <Footer />
    </main>
  )
}
