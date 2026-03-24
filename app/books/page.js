import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import { siteName } from '../../lib/siteConfig'

const lines = [
  {
    title: 'Local history books',
    body: 'Celebrate your town’s people, places, and stories in a professional volume your supporters will want to own.',
  },
  {
    title: 'Coloring books',
    body: 'Easy sellers for elementary events and family nights—fun for kids, simple for volunteers to explain.',
  },
  {
    title: 'Trivia books',
    body: 'Interactive and educational: great for teams, clubs, and community pride.',
  },
  {
    title: 'Custom editions',
    body: 'Add your logo, sponsor pages, and school-specific content so the book feels unmistakably yours.',
  },
]

export const metadata = {
  title: `Books & products | ${siteName}`,
  description:
    'Local history books, coloring books, trivia, and custom editions for school and community fundraisers.',
  keywords: 'custom school books, fundraising coloring books, local history book fundraiser',
}

export default function BooksPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <TextureOverlay opacity={0.035} className="mix-blend-multiply" />
      <Navbar />
      <section className="relative min-h-[30vh] flex items-center justify-center pt-28 pb-16 bg-gradient-to-b from-amber-50/40 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-amber-700 mb-6 normal-case">
            Products that actually sell
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-subheading">
            Custom books and materials built for schools, booster clubs, PTOs, teams, historical societies, and civic
            groups—not another forgettable catalog item.
          </p>
        </div>
      </section>

      <div className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0 border-t border-slate-200">
            {lines.map((item, i) => (
              <article
                key={item.title}
                className={`py-12 ${i > 0 ? 'border-t border-slate-200' : ''}`}
              >
                <h2 className="font-heading text-2xl md:text-3xl text-slate-900 mb-4">{item.title}</h2>
                <p className="text-slate-600 leading-relaxed font-subheading m-0">{item.body}</p>
              </article>
            ))}
          </div>

          <section className="mt-16 pt-12 border-t border-slate-200 text-center">
            <p className="text-slate-600 text-lg font-subheading mb-8 max-w-xl mx-auto">
              Ready to see what a book could look like for your group? Request a free fundraising plan—no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#free-fundraising-plan" className="btn-fc-primary no-underline inline-flex justify-center">
                Send my plan
              </Link>
              <Link href="/fundraising" className="btn-fc-secondary no-underline inline-flex justify-center">
                How fundraising works
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
