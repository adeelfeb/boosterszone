import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import { siteName, siteTagline } from '../../lib/siteConfig'

export const metadata = {
  title: `Fundraising | ${siteName}`,
  description:
    'A smarter school and community fundraiser: custom books people value, keep, and share—with strong margins.',
  keywords: 'school fundraiser, booster club fundraiser, custom book fundraiser, nonprofit fundraising',
}

export default function FundraisingPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <TextureOverlay opacity={0.035} className="mix-blend-multiply" />
      <Navbar />
      <section className="relative min-h-[30vh] flex items-center justify-center pt-28 pb-16 bg-gradient-to-b from-amber-50/40 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-amber-700 mb-6 normal-case">
            A better way to fundraise
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-subheading">
            Tired of selling products no one really wants? Boosters Zone helps you offer custom books—history,
            trivia, coloring—that families and neighbors are glad to buy.
          </p>
        </div>
      </section>

      <div className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <section className="border-t border-slate-200 pt-14">
            <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-6">Simple. Profitable. Proven.</h2>
            <ul className="space-y-6 text-slate-600 font-subheading list-none pl-0 m-0">
              <li>
                <strong className="text-amber-700 font-heading font-medium">We create</strong> — Custom books based on
                your town, school, or organization: history, trivia, coloring, and sponsored editions.
              </li>
              <li>
                <strong className="text-amber-700 font-heading font-medium">You sell</strong> — Families and community
                members buy something meaningful that celebrates where they live or learn.
              </li>
              <li>
                <strong className="text-amber-700 font-heading font-medium">You profit</strong> — Low unit costs mean
                strong margins on every copy.
              </li>
            </ul>
          </section>

          <section className="border-t border-slate-200 pt-14">
            <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-6">Fundraising people feel good about</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Most fundraisers push stuff people don’t need. Our books celebrate your community, educate students,
              and become keepsakes on shelves and coffee tables—not clutter in a closet.
            </p>
            <p className="text-slate-600 leading-relaxed m-0">{siteTagline}</p>
          </section>

          <section className="border-t border-slate-200 pt-14">
            <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-6">See the numbers</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Example economics: cost around <strong className="text-slate-900">$5</strong>, sell at{' '}
              <strong className="text-slate-900">$20</strong>, keep about <strong className="text-amber-700">$15</strong>{' '}
              per book. Sell 200 copies for roughly <strong className="text-amber-700">$3,000</strong>, or 500 for about{' '}
              <strong className="text-amber-700">$7,500</strong>—one of the easiest and most effective drives you’ll
              run.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-14">
            <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-6">Proven in the Merrimack Valley</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
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
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
