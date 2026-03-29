import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import MarketingPageHero from '../../components/boosters/MarketingPageHero'
import { siteName, siteTagline } from '../../lib/siteConfig'
import { marketingImages } from '../../lib/marketingImages'

export const metadata = {
  title: `Fundraising | ${siteName}`,
  description:
    'A smarter school and community fundraiser: custom books people value, keep, and share—with strong margins.',
  keywords: 'school fundraiser, booster club fundraiser, custom book fundraiser, nonprofit fundraising',
}

export default function FundraisingPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.055} className="mix-blend-multiply" />
      <Navbar />
      <MarketingPageHero
        eyebrow="Fundraising"
        title="A better way to fundraise"
        subtitle="Tired of selling products no one really wants? Boosters Zone helps you offer custom books—history, trivia, coloring—that families and neighbors are glad to buy."
        imageKey="fundraising"
        imageAlt="Team collaborating on a project"
      />

      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-0">
          <section className="py-16 md:py-20 border-t border-parchment-300/70">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <h2 className="font-heading text-2xl md:text-3xl text-stone-900 mb-8">Simple. Profitable. Proven.</h2>
                <ul className="space-y-6 text-stone-600 font-subheading list-none pl-0 m-0 text-lg">
                  <li>
                    <strong className="text-amber-800 font-heading font-medium">We create</strong> — Custom books based on
                    your town, school, or organization: history, trivia, coloring, and sponsored editions.
                  </li>
                  <li>
                    <strong className="text-amber-800 font-heading font-medium">You sell</strong> — Families and community
                    members buy something meaningful that celebrates where they live or learn.
                  </li>
                  <li>
                    <strong className="text-amber-800 font-heading font-medium">You profit</strong> — Low unit costs mean
                    strong margins on every copy.
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-100">
                  <Image
                    src={marketingImages.heroMain}
                    alt="Custom books for fundraising"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 border-t border-parchment-300/70 bg-parchment-50/50 rounded-sm px-4 sm:px-8 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative aspect-[16/11] rounded-md overflow-hidden shadow-bz-soft border border-parchment-300/80 bg-parchment-100">
                  <Image
                    src={marketingImages.sectionHeart}
                    alt="Community reading"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="font-heading text-2xl md:text-3xl text-stone-900 mb-6">Fundraising people feel good about</h2>
                <p className="text-stone-600 leading-relaxed mb-6 text-lg font-subheading">
                  Most fundraisers push stuff people don’t need. Our books celebrate your community, educate students,
                  and become keepsakes on shelves and coffee tables—not clutter in a closet.
                </p>
                <p className="text-stone-600 leading-relaxed m-0 text-lg font-subheading">{siteTagline}</p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 border-t border-parchment-300/70">
            <div className="max-w-3xl">
              <h2 className="font-heading text-2xl md:text-3xl text-stone-900 mb-6">See the numbers</h2>
              <p className="text-stone-600 leading-relaxed mb-4 text-lg font-subheading">
                Example economics: cost around <strong className="text-stone-900">$5</strong>, sell at{' '}
                <strong className="text-stone-900">$20</strong>, keep about <strong className="text-amber-800">$15</strong>{' '}
                per book. Sell 200 copies for roughly <strong className="text-amber-800">$3,000</strong>, or 500 for about{' '}
                <strong className="text-amber-800">$7,500</strong>—one of the easiest and most effective drives you’ll
                run.
              </p>
            </div>
          </section>

          <section className="py-16 md:py-20 border-t border-parchment-300/70">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="font-heading text-2xl md:text-3xl text-stone-900 mb-6">Proven in the Merrimack Valley</h2>
                <p className="text-stone-600 leading-relaxed mb-8 text-lg font-subheading">
                  Our books have been created and sold successfully across the region, with repeat interest from schools
                  and community groups. We’re ready to bring the same model to your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-fc-primary no-underline inline-flex justify-center">
                    Start a custom book project
                  </Link>
                  <Link href="/books" className="btn-fc-secondary no-underline inline-flex justify-center">
                    Browse products
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="relative aspect-square max-w-xs mx-auto lg:max-w-none rounded-md overflow-hidden border border-parchment-300/80 shadow-bz-soft bg-parchment-100">
                  <Image
                    src={marketingImages.heroCommunity}
                    alt="School community"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 280px, 320px"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
