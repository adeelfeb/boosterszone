import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import { siteAssets } from '../../lib/siteAssets'
import { siteName, siteTagline } from '../../lib/siteConfig'

const sections = [
  {
    id: '01',
    title: 'Our story',
    image: siteAssets.aboutStory,
    body: `Every organization has an origin story. This paragraph is a placeholder: describe why you started, what problem you saw, and what you set out to build.

Keep it authentic when you replace this text. Short paragraphs read better on the web than one long block.`,
  },
  {
    id: '02',
    title: 'What we focus on',
    image: siteAssets.aboutProblem,
    body: `Explain the main themes of your work — for example community, product quality, education, or operations. This template does not assume a specific industry.

Use this section to set expectations before someone signs up, books a call, or logs into the member area.`,
  },
  {
    id: '03',
    title: 'How we work',
    image: siteAssets.aboutSpark,
    body: `Describe your principles: how decisions get made, how you treat customers or members, and what people can rely on when they engage with you.

You can align this copy with your FAQ and contact page so the same messages appear everywhere.`,
  },
  {
    id: '04',
    title: 'Growth',
    image: siteAssets.aboutGrowth,
    body: `Optional milestone section: team size, geography, product stages, or community stats — only if you are comfortable sharing them.

If you prefer not to use numbers, rewrite this block as a narrative about where you are headed next.`,
  },
  {
    id: '05',
    title: 'Mission',
    image: siteAssets.aboutMission,
    body: `Close with a clear mission statement: who you serve and the change you want to see. One or two sentences is enough.

The login and dashboard experience behind this site stays as the technical base; this page is yours to customize.`,
  },
]

export const metadata = {
  title: `About Us | ${siteName}`,
  description: siteTagline,
  keywords: 'about us, organization, draft template',
}

export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
      <Navbar />
      <section className="relative min-h-[30vh] flex items-center justify-center pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-6 normal-case">
            About us
          </h1>
          <p className="text-gold-100/95 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed font-subheading">
            {siteTagline}
          </p>
          <Link href="/contact" className="btn-fc-primary">
            Contact us
          </Link>
        </div>
      </section>
      <div className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          {sections.map((section, index) => (
            <section key={section.id} className="border-t border-forest-600/50 pt-16">
              <div
                className={`grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 items-center`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <span className="text-gold-500/80 font-subheading text-lg">{section.id}</span>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gold-300 mt-2 mb-6">
                    {section.title}
                  </h2>
                  <div className="text-gold-100/90 leading-relaxed whitespace-pre-line font-subheading">
                    {section.body}
                  </div>
                </div>
                {section.image && (
                  <div
                    className={`relative aspect-[16/11] overflow-hidden bg-forest-700 ${
                      index % 2 === 1 ? 'md:order-1' : ''
                    }`}
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
            </section>
          ))}
          <section className="mt-20 pt-12 border-t border-forest-600/50">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gold-500 mb-4">
              Next steps
            </h2>
            <p className="text-gold-100/90 text-lg leading-relaxed mb-8 font-subheading">
              Ready to go deeper? Point visitors to contact, signup, or your member login — whichever matches your funnel.
            </p>
            <p className="text-gold-100/80 leading-relaxed mb-10 font-subheading">
              Replace this section with a call to action that fits your launch: waitlist, demo request, or account creation.
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gold-500 mb-4">
              Create an account
            </h2>
            <p className="text-gold-100/90 mb-6 font-subheading">
              Member signup and the dashboard are part of the base implementation. Update the shared site name and contact details in your site config module when you fork this template.
            </p>
            <Link href="/signup" className="btn-fc-primary">
              Sign up
            </Link>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
