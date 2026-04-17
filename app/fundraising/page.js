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
        title="Raise real money for schools and organizations—simply"
        subtitle="Decision-makers need clear math: units sold, revenue, and profit. We design and print custom history, trivia, and coloring books—you set the price, families get keepsakes, and your group keeps strong margins with straightforward logistics."
        imageKey="fundraising"
        imageAlt="Team collaborating on a fundraising book project"
      />

      <div className="pb-20">
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10 space-y-0">
          <section className="py-12 md:py-16 border-t border-parchment-300/70">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <h2 className="font-heading text-xl md:text-2xl text-fc-structural mb-6">Simple. Profitable. Proven.</h2>
                <ul className="space-y-4 text-stone-600 font-subheading list-none pl-0 m-0 text-base">
                  <li>
                    <strong className="text-fc-action font-heading font-medium">We create</strong> — Custom books based on
                    your town, school, or organization: history, trivia, coloring, and sponsored editions.
                  </li>
                  <li>
                    <strong className="text-fc-action font-heading font-medium">You sell</strong> — Families and community
                    members buy something meaningful that celebrates where they live or learn.
                  </li>
                  <li>
                    <strong className="text-fc-action font-heading font-medium">You profit</strong> — Low unit costs mean
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

          <section className="py-12 md:py-16 border-t border-parchment-300/70 bg-parchment-50/50 rounded-sm px-4 sm:px-8 -mx-4 sm:-mx-5 lg:-mx-8">
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
                <h2 className="font-heading text-xl md:text-2xl text-fc-structural mb-4">Fundraising people feel good about</h2>
                <p className="text-stone-600 leading-relaxed mb-4 text-base font-subheading">
                  Most fundraisers push stuff people don’t need. Our books celebrate your community, educate students,
                  and become keepsakes on shelves and coffee tables—not clutter in a closet.
                </p>
                <p className="text-stone-600 leading-relaxed m-0 text-base font-subheading">{siteTagline}</p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 border-t border-parchment-300/70">
            <div className="max-w-4xl">
              <h2 className="font-heading text-xl md:text-2xl text-fc-structural mb-4">See the numbers</h2>
              <p className="text-stone-600 leading-relaxed mb-6 text-base font-subheading">
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
                      <td className="px-4 py-3">Books sold (example)</td>
                      <td className="px-4 py-3 text-right font-medium text-stone-900">300</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Sell price each (example)</td>
                      <td className="px-4 py-3 text-right font-medium text-stone-900">$15</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Gross revenue</td>
                      <td className="px-4 py-3 text-right font-medium text-stone-900">$4,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Your cost (example)</td>
                      <td className="px-4 py-3 text-right">~$4–6 / book</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Total cost (example)</td>
                      <td className="px-4 py-3 text-right">~$1,200–$1,800</td>
                    </tr>
                    <tr className="bg-[var(--fc-highlight-soft)]">
                      <td className="px-4 py-3 font-medium text-fc-structural">Estimated profit</td>
                      <td className="px-4 py-3 text-right font-heading text-lg text-fc-action">~$2,700–$3,300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="fc-card p-5 border border-parchment-300/70 shadow-bz-soft">
                  <p className="text-stone-500 font-subheading text-sm uppercase tracking-wider mb-1">200 books @ $15 (example)</p>
                  <p className="font-heading text-2xl text-stone-900 mb-0">
                    ~<span className="text-fc-action">$1,800–$2,200</span> profit
                  </p>
                  <p className="text-stone-500 font-subheading text-xs mt-2 mb-0">Using ~$9–11 margin per copy</p>
                </div>
                <div className="fc-card p-5 border border-parchment-300/70 shadow-bz-soft">
                  <p className="text-stone-500 font-subheading text-sm uppercase tracking-wider mb-1">500 books @ $15 (example)</p>
                  <p className="font-heading text-2xl text-stone-900 mb-0">
                    ~<span className="text-fc-action">$4,500–$5,500</span> profit
                  </p>
                  <p className="text-stone-500 font-subheading text-xs mt-2 mb-0">Same margin assumptions as above</p>
                </div>
              </div>
              <p className="text-stone-600 leading-relaxed m-0 text-base font-subheading">
                One of the easiest drives you’ll run—clear math for principals and booster treasurers.
              </p>
            </div>
          </section>

          <section className="py-12 md:py-16 border-t border-parchment-300/70">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="font-heading text-xl md:text-2xl text-fc-structural mb-4">Proven in the Merrimack Valley</h2>
                <p className="text-stone-600 leading-relaxed mb-6 text-base font-subheading">
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
