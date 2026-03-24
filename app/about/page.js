import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import { siteName, siteTagline } from '../../lib/siteConfig'

export const metadata = {
  title: `About | ${siteName}`,
  description:
    'Boosters Zone turns community stories into books that educate, inspire, and raise real money—founded by public historian E. Philip Brown.',
  keywords: 'Boosters Zone, E. Philip Brown, community history books, school fundraising',
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <TextureOverlay opacity={0.035} className="mix-blend-multiply" />
      <Navbar />
      <section className="relative min-h-[30vh] flex items-center justify-center pt-28 pb-16 bg-gradient-to-b from-amber-50/40 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-amber-700 mb-6 normal-case">
            About Boosters Zone
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-subheading">
            {siteTagline}
          </p>
        </div>
      </section>

      <div className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <section className="fc-card p-8 md:p-10 border border-slate-200">
            <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-6">Our founder</h2>
            <p className="text-slate-600 leading-relaxed font-subheading m-0">
              Boosters Zone was created by <strong className="text-slate-900">E. Philip Brown</strong>, a public historian
              and award-winning filmmaker. His work centers on telling local stories with care and credibility—exactly
              the foundation these fundraising books are built on.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-14">
            <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-6">Mission</h2>
            <p className="text-slate-600 leading-relaxed font-subheading m-0">
              Turn community stories into products that <strong className="text-amber-700">educate</strong>,{' '}
              <strong className="text-amber-700">inspire</strong>, and{' '}
              <strong className="text-amber-700">generate revenue</strong> for the schools and organizations that keep
              those stories alive.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-14">
            <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-6">Proven results</h2>
            <p className="text-slate-600 leading-relaxed font-subheading m-0">
              Books developed under this approach have sold successfully throughout the Merrimack Valley, sparking repeat
              demand and real pride—not a one-off gimmick, but a fundraiser communities ask for again.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact" className="btn-fc-primary no-underline inline-flex justify-center">
              Start a custom book project
            </Link>
            <Link href="/fundraising" className="btn-fc-secondary no-underline inline-flex justify-center">
              See how fundraising works
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
