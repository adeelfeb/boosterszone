import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import FreeConsultationSection from '../../components/designndev/FreeConsultationSection'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import { siteName, siteTagline } from '../../lib/siteConfig'

export const metadata = {
  title: `Contact | ${siteName}`,
  description: 'Request a free fundraising plan or start a custom book project for your school or community group.',
  keywords: 'contact Boosters Zone, school fundraiser contact, custom book quote',
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
      <Navbar />
      <section className="relative min-h-[30vh] flex items-center justify-center pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-gold-400 mb-6 normal-case">
            Ready to launch?
          </h1>
          <p className="text-gold-100/95 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-subheading">
            Tell us about your organization—we&apos;ll outline a custom book idea and how the fundraiser can work for
            your timeline and goals.
          </p>
        </div>
      </section>
      <div id="free-fundraising-plan" className="pb-20 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <FreeConsultationSection animated={false} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
