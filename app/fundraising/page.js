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
    'Raise thousands with high-margin custom books for schools and booster clubs—clear profit examples, simple steps, keepsakes families buy.',
  keywords: 'school fundraiser, booster club fundraiser, custom book fundraiser, nonprofit fundraising',
}

export default function FundraisingPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.055} className="mix-blend-multiply" />
      <Navbar />
      <MarketingPageHero
        eyebrow="Fundraising"
        title="Raise thousands with high-margin custom books"
        subtitle="Schools and booster clubs need clear outcomes: profit per book, simple logistics, and products people actually want. We deliver custom history, trivia, and coloring books—families buy keepsakes; you keep strong margins."
        imageKey="fundraising"
        imageAlt="Team collaborating on a fundraising book project"
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
              <p className="text-stone-600 leading-relaxed mb-8 text-lg font-subheading">
                Example economics (illustrative—your rep confirms exact pricing for your run):
              </p>
              <div className="overflow-x-auto rounded-sm border border-parchment-300/80 bg-white/90 shadow-bz-soft mb-8">
                <table className="w-full min-w-[280px] text-left font-subheading text-stone-700">
                  <caption className="sr-only">Example profit per book and total profit by copies sold</caption>
                  <thead>
                    <tr className="border-b border-parchment-300/80 bg-parchment-50/95">
                      <th scope="col" className="px-4 py-3 font-heading text-stone-900 text-sm uppercase tracking-wide">
                        Line item
                      </th>
                      <th scope="col" className="px-4 py-3 font-heading text-stone-900 text-sm uppercase tracking-wide text-right">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-parchment-200/90">
                    <tr>
                      <td className="px-4 py-3">Sell price (example)</td>
                      <td className="px-4 py-3 text-right font-medium text-stone-900">$20 / book</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Your cost (example)</td>
                      <td className="px-4 py-3 text-right">~$5 / book</td>
                    </tr>
                    <tr className="bg-amber-50/80">
                      <td className="px-4 py-3 font-medium text-amber-950">Profit per book</td>
                      <td className="px-4 py-3 text-right font-heading text-lg text-amber-900">~$15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="fc-card p-5 border border-parchment-300/70 shadow-bz-soft">
                  <p className="text-stone-500 font-subheading text-sm uppercase tracking-wider mb-1">200 books sold</p>
                  <p className="font-heading text-2xl text-stone-900 mb-0">
                    ~<span className="text-amber-900">$3,000</span> total profit
                  </p>
                </div>
                <div className="fc-card p-5 border border-parchment-300/70 shadow-bz-soft">
                  <p className="text-stone-500 font-subheading text-sm uppercase tracking-wider mb-1">500 books sold</p>
                  <p className="font-heading text-2xl text-stone-900 mb-0">
                    ~<span className="text-amber-900">$7,500</span> total profit
                  </p>
                </div>
              </div>
              <p className="text-stone-600 leading-relaxed m-0 text-lg font-subheading">
                One of the easiest drives you’ll run—clear math for principals and booster treasurers.
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
                  <Link href="/contact#free-fundraising-plan" className="btn-fc-primary no-underline inline-flex justify-center">
                    Start a fundraiser
                  </Link>
                  <Link href="/books" className="btn-fc-secondary no-underline inline-flex justify-center">
                    Shop books
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
