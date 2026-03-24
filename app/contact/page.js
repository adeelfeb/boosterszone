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
    <main className="relative min-h-screen bg-white">
      <TextureOverlay opacity={0.035} className="mix-blend-multiply" />
      <Navbar />
      <section className="relative min-h-[30vh] flex items-center justify-center pt-28 pb-16 bg-gradient-to-b from-amber-50/40 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-amber-700 mb-6 normal-case">
            Ready to launch?
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-subheading">
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
