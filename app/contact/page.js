import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import FreeConsultationSection from '../../components/designndev/FreeConsultationSection'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import MarketingPageHero from '../../components/boosters/MarketingPageHero'
import { siteName, contact } from '../../lib/siteConfig'

export const metadata = {
  title: `Contact | ${siteName}`,
  description: 'Request a free fundraising plan or start a custom book project for your school or community group.',
  keywords: 'contact Boosters Zone, school fundraiser contact, custom book quote',
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.055} className="mix-blend-multiply" />
      <Navbar />
      <MarketingPageHero
        eyebrow="Get started"
        title="Ready to launch?"
        subtitle="Tell us about your organization—we will outline a custom book idea and how the fundraiser can work for your timeline and goals."
        imageKey="contact"
        imageAlt="Reach out to plan your fundraiser"
      />

      <div id="free-fundraising-plan" className="pb-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
              <div className="fc-card p-6 border border-parchment-300/80 shadow-bz-soft">
                <h2 className="font-heading text-lg text-amber-900 mb-3">What to include</h2>
                <ul className="text-stone-600 font-subheading space-y-2 m-0 pl-4 list-disc text-base">
                  <li>Your school or organization name</li>
                  <li>Rough timeline for the drive</li>
                  <li>Whether you want history, coloring, trivia, or a mix</li>
                </ul>
              </div>
              <div className="fc-card p-6 border border-parchment-300/80 shadow-bz-soft">
                <h2 className="font-heading text-lg text-amber-900 mb-3">Direct contact</h2>
                <p className="text-stone-600 font-subheading text-base m-0 mb-2">
                  <a href={`mailto:${contact.email}`} className="text-amber-900 hover:underline">
                    {contact.email}
                  </a>
                </p>
                <p className="text-stone-600 font-subheading text-base m-0 mb-2">
                  <a href={`tel:${contact.phoneTel}`} className="text-amber-900 hover:underline">
                    {contact.phoneDisplay}
                  </a>
                </p>
                <p className="text-stone-500 font-subheading text-sm m-0">{contact.location}</p>
              </div>
            </aside>
            <div className="lg:col-span-8 order-1 lg:order-2 w-full min-w-0">
              <FreeConsultationSection animated={false} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
