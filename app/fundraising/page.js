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
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.08} className="mix-blend-overlay" />
      <Navbar />
      <section className="relative min-h-[30vh] flex items-center justify-center pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-gold-400 mb-6 normal-case">
            A better way to fundraise
          </h1>
          <p className="text-gold-100/95 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-subheading">
            Tired of selling products no one really wants? Boosters Zone helps you offer custom books—history,
            trivia, coloring—that families and neighbors are glad to buy.
          </p>
        </div>
      </section>

      <div className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <section className="border-t border-forest-600/50 pt-14">
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-6">Simple. Profitable. Proven.</h2>
            <ul className="space-y-6 text-gold-100/90 font-subheading list-none pl-0 m-0">
              <li>
                <strong className="text-gold-400 font-heading font-medium">We create</strong> — Custom books based on
                your town, school, or organization: history, trivia, coloring, and sponsored editions.
              </li>
              <li>
                <strong className="text-gold-400 font-heading font-medium">You sell</strong> — Families and community
                members buy something meaningful that celebrates where they live or learn.
              </li>
              <li>
                <strong className="text-gold-400 font-heading font-medium">You profit</strong> — Low unit costs mean
                strong margins on every copy.
              </li>
            </ul>
          </section>

          <section className="border-t border-forest-600/50 pt-14">
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-6">Fundraising people feel good about</h2>
            <p className="text-gold-100/90 leading-relaxed mb-6">
              Most fundraisers push stuff people don’t need. Our books celebrate your community, educate students,
              and become keepsakes on shelves and coffee tables—not clutter in a closet.
            </p>
            <p className="text-gold-100/90 leading-relaxed m-0">{siteTagline}</p>
          </section>

          <section className="border-t border-forest-600/50 pt-14">
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-6">See the numbers</h2>
            <p className="text-gold-100/90 leading-relaxed mb-4">
              Example economics: cost around <strong className="text-white">$5</strong>, sell at{' '}
              <strong className="text-white">$20</strong>, keep about <strong className="text-gold-400">$15</strong>{' '}
              per book. Sell 200 copies for roughly <strong className="text-gold-400">$3,000</strong>, or 500 for about{' '}
              <strong className="text-gold-400">$7,500</strong>—one of the easiest and most effective drives you’ll
              run.
            </p>
          </section>

          <section className="border-t border-forest-600/50 pt-14">
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-6">Proven in the Merrimack Valley</h2>
            <p className="text-gold-100/90 leading-relaxed mb-8">
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
