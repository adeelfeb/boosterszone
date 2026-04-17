import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import MarketingPageHero from '../../components/boosters/MarketingPageHero'
import { siteName, siteTagline } from '../../lib/siteConfig'
import { marketingImages } from '../../lib/marketingImages'

export const metadata = {
  title: `About | ${siteName}`,
  description:
    'Boosters Zone turns community stories into books that educate, inspire, and raise real money—founded by public historian E. Philip Brown.',
  keywords: 'Boosters Zone, E. Philip Brown, community history books, school fundraising',
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.055} className="mix-blend-multiply" />
      <Navbar />
      <MarketingPageHero
        eyebrow="Our story"
        title="About Boosters Zone"
        subtitle={siteTagline}
        imageKey="about"
        imageAlt="Library shelves — research and local history"
      />

      <div className="pb-20">
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10 space-y-0">
          <section className="py-12 md:py-16 border-t border-parchment-300/70">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80">
                  <Image
                    src={marketingImages.pageAboutBody}
                    alt="Research and archives for community books"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <h2 className="font-heading text-xl md:text-2xl text-fc-structural mb-4">Our founder</h2>
                <p className="text-stone-600 leading-relaxed font-subheading text-base m-0 mb-6">
                  Boosters Zone was created by <strong className="text-stone-900">E. Philip Brown</strong>, a public historian
                  and award-winning filmmaker. His work centers on telling local stories with care and credibility—exactly
                  the foundation these fundraising books are built on.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 border-t border-parchment-300/70 bg-parchment-50/60 -mx-4 sm:-mx-5 lg:-mx-8 px-4 sm:px-8 rounded-sm">
            <div className="max-w-4xl">
              <h2 className="font-heading text-xl md:text-2xl text-fc-structural mb-4">Mission</h2>
              <p className="text-stone-600 leading-relaxed font-subheading text-base m-0">
                Turn community stories into products that <strong className="text-fc-action">educate</strong>,{' '}
                <strong className="text-fc-action">inspire</strong>, and{' '}
                <strong className="text-fc-action">generate revenue</strong> for the schools and organizations that keep
                those stories alive.
              </p>
            </div>
          </section>

          <section className="py-12 md:py-16 border-t border-parchment-300/70">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h2 className="font-heading text-xl md:text-2xl text-fc-structural mb-4">Proven results</h2>
                <p className="text-stone-600 leading-relaxed font-subheading text-base m-0">
                  Books developed under this approach have sold successfully throughout the Merrimack Valley, sparking repeat
                  demand and real pride—not a one-off gimmick, but a fundraiser communities ask for again.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] rounded-md overflow-hidden border border-parchment-300/80 shadow-bz-soft">
                  <Image
                    src={marketingImages.heroSchool}
                    alt="Schools and students"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-12">
              <Link href="/contact" className="btn-fc-primary no-underline inline-flex justify-center">
                Start a custom book project
              </Link>
              <Link href="/fundraising" className="btn-fc-secondary no-underline inline-flex justify-center">
                See how fundraising works
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
