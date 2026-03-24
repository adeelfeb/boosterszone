import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import MarketingPageHero from '../../components/boosters/MarketingPageHero'
import { siteName } from '../../lib/siteConfig'
import { marketingImages } from '../../lib/marketingImages'

const products = [
  {
    title: 'Local history books',
    body: 'Celebrate your town’s people, places, and stories in a professional volume your supporters will want to own.',
    image: marketingImages.productHistory,
    alt: 'Historic architecture and local stories',
  },
  {
    title: 'Coloring books',
    body: 'Easy sellers for elementary events and family nights—fun for kids, simple for volunteers to explain.',
    image: marketingImages.productColoring,
    alt: 'Creative coloring activities',
  },
  {
    title: 'Trivia books',
    body: 'Interactive and educational: great for teams, clubs, and community pride.',
    image: marketingImages.productTrivia,
    alt: 'Trivia and games in book form',
  },
  {
    title: 'Custom editions',
    body: 'Add your logo, sponsor pages, and school-specific content so the book feels unmistakably yours.',
    image: marketingImages.productCustom,
    alt: 'Branded and custom-printed books',
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
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.055} className="mix-blend-multiply" />
      <Navbar />
      <MarketingPageHero
        eyebrow="Products"
        title="Products that actually sell"
        subtitle="Custom books and materials built for schools, booster clubs, PTOs, teams, historical societies, and civic groups—not another forgettable catalog item."
        imageKey="books"
        imageAlt="Books and reading materials"
      />

      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {products.map((item, i) => (
              <article
                key={item.title}
                className={`flex flex-col sm:flex-row gap-6 p-6 md:p-8 border border-parchment-300/80 bg-white/70 shadow-bz-soft rounded-sm ${
                  i % 2 === 1 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className="relative w-full sm:w-[220px] shrink-0 aspect-[4/3] sm:aspect-[5/4] rounded-md overflow-hidden border border-parchment-300/60 bg-parchment-100">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 220px" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-2xl md:text-3xl text-stone-900 mb-4">{item.title}</h2>
                  <p className="text-stone-600 leading-relaxed font-subheading m-0 text-lg">{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-16 md:mt-20 pt-12 border-t border-parchment-300/70">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-stone-600 text-lg font-subheading mb-8">
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
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
