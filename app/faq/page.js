import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import MarketingPageHero from '../../components/boosters/MarketingPageHero'
import FAQAccordion from '../../components/boosters/FAQAccordion'
import { siteName } from '../../lib/siteConfig'

export const metadata = {
  title: `FAQ | ${siteName}`,
  description: 'Frequently asked questions about Boosters Zone and this site template.',
}

export default function FAQPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.055} className="mix-blend-multiply" />
      <Navbar />
      <MarketingPageHero
        eyebrow="Help"
        title="Frequently asked questions"
        subtitle="Draft answers for developers and stakeholders. Replace with questions your real users ask."
        imageKey="faq"
        imageAlt="Reading and reference"
      />
      <FAQAccordion />
      <Footer />
    </main>
  )
}
