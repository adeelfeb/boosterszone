'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import BoostersHero from './BoostersHero'
import FreeFundraisingLeadForm from './FreeFundraisingLeadForm'
import { marketingImages } from '../../lib/marketingImages'

const planCtaHref = '/#get-free-fundraising-plan'

const products = [
  {
    title: 'Local History Books',
    body: 'Celebrate your town’s people and stories.',
    image: marketingImages.productHistory,
    alt: 'Local history and archival materials',
  },
  {
    title: 'Coloring Books',
    body: 'Easy, high-margin sellers for schools.',
    image: marketingImages.productColoring,
    alt: 'Art and coloring supplies',
  },
  {
    title: 'Trivia Books',
    body: 'Fun, interactive, educational.',
    image: marketingImages.productTrivia,
    alt: 'Open book pages',
  },
  {
    title: 'Custom Editions',
    body: 'Add logos, sponsors, and school content.',
    image: marketingImages.productCustom,
    alt: 'Custom printed materials',
  },
]

const perfectFor = [
  'Elementary schools',
  'PTO / PTA',
  'Booster clubs',
  'Preschools & early learning',
]

const testimonials = [
  {
    quote:
      'Parents actually thanked us for running this—unlike the usual catalog. The history angle made it feel like our town, not a generic product.',
    name: 'PTO president',
    detail: 'Merrimack Valley area',
  },
  {
    quote:
      'We hit our goal without chasing cookie dough pickups. The books sold themselves once families saw the cover with our school name.',
    name: 'Fundraising chair',
    detail: 'Local elementary',
  },
]

const sectionBorder = 'border-t border-parchment-300/80'
const assemblyShowsUrl = 'http://assemblyshowsforschools.com/'

export default function BoostersHomeContent() {
  return (
    <>
      <BoostersHero />

      <section className={`relative py-12 md:py-14 ${sectionBorder} bg-parchment-50/95`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <a
            href={assemblyShowsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block mx-auto max-w-4xl rounded-md border border-parchment-300/80 bg-white shadow-bz-soft transition-all duration-300 hover:shadow-bz-card hover:border-fc-highlight/50"
            aria-label="Visit Assembly Shows For Schools"
          >
            <div className="relative w-full aspect-[21/9] bg-parchment-100">
              <Image
                src="/images/home-page-link.png"
                alt="Assembly Shows For Schools"
                fill
                className="object-contain object-center p-2 sm:p-3"
                sizes="(max-width: 1024px) 100vw, 960px"
                priority={false}
              />
            </div>
          </a>
          <div className="mt-5 text-center">
            <a
              href={assemblyShowsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fc-primary no-underline inline-flex"
            >
              Visit Assembly Shows For Schools
            </a>
          </div>
        </div>
      </section>

      <section className={`relative py-10 md:py-12 ${sectionBorder} bg-gradient-to-r from-fc-structural/[0.06] via-[var(--fc-highlight-soft)]/80 to-parchment-50/95`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10 text-center">
          <p className="font-heading text-lg md:text-xl text-fc-structural m-0 mb-2 normal-case">
            Perfect for America&apos;s 250th Anniversary (2026)
          </p>
          <p className="text-stone-600 font-subheading text-base md:text-lg m-0 max-w-3xl mx-auto leading-relaxed">
            Tie your fundraiser to local history, civics, and community pride—books families shelve instead of toss. Plan
            early; peak school seasons book up.
          </p>
        </div>
      </section>

      <section className={`relative py-12 md:py-16 ${sectionBorder} bg-parchment-100/90`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-3 normal-case">
              See the math—before you commit
            </h2>
            <p className="text-stone-600 font-subheading text-base md:text-lg m-0">
              Transparent units, revenue, and profit so your PTO can decide fast. Illustrative example; your rep confirms
              exact numbers for your run.
            </p>
          </div>
          <div className="overflow-x-auto rounded-sm border border-parchment-300/80 bg-white/95 shadow-bz-card">
            <table className="w-full min-w-[300px] text-left font-subheading text-stone-700">
              <caption className="sr-only">
                Example books sold, sell price, gross revenue, estimated costs, and profit to your school
              </caption>
              <thead>
                <tr className="border-b border-parchment-300/80 bg-parchment-50/95">
                  <th scope="col" className="px-4 py-3 font-heading text-stone-900 text-sm">
                    Line item
                  </th>
                  <th scope="col" className="px-4 py-3 font-heading text-stone-900 text-sm text-right">
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
                  <td className="px-4 py-3">Sell price each</td>
                  <td className="px-4 py-3 text-right">$15</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Gross revenue</td>
                  <td className="px-4 py-3 text-right font-medium text-stone-900">$4,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Your cost (about $4–6 each)</td>
                  <td className="px-4 py-3 text-right">~$1,200–$1,800</td>
                </tr>
                <tr className="bg-[var(--fc-highlight-soft)]">
                  <td className="px-4 py-3 font-medium text-fc-structural">Estimated profit to your school</td>
                  <td className="px-4 py-3 text-right font-heading text-lg text-fc-action">~$2,700–$3,300</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-stone-500 font-subheading text-sm mt-4 mb-6">
            Most partners: elementary PTOs, PTAs, and booster clubs—especially in the Merrimack Valley.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <Link href={planCtaHref} className="btn-fc-primary no-underline inline-flex justify-center text-center">
              Start Your School Fundraiser Today
            </Link>
            <Link href={planCtaHref} className="btn-fc-secondary no-underline inline-flex justify-center text-center">
              Get Your Free Fundraising Plan
            </Link>
          </div>
        </div>
      </section>

      <section
        id="get-free-fundraising-plan"
        className={`relative scroll-mt-28 py-16 md:py-20 ${sectionBorder} bg-parchment-50/95`}
      >
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10 text-center">
          <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-3 normal-case">
            Get a Free Fundraising Plan
          </h2>
          <p className="text-stone-600 font-subheading text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Name, school, and email—we send a written plan you can share with your board. No pressure; we reply within
            one business day.
          </p>
          <FreeFundraisingLeadForm />
          <p className="mt-8 mb-0 text-stone-500 font-subheading text-sm">
            Want a sample page or a call?{' '}
            <Link href="/#free-fundraising-plan" className="text-fc-action font-medium underline underline-offset-2">
              Use the full form below
            </Link>
            .
          </p>
        </div>
      </section>

      <section className={`relative py-12 md:py-18 ${sectionBorder} bg-parchment-50/95`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="min-w-0 lg:col-span-5 order-2 lg:order-1">
              <div className="h-1 w-16 bg-gradient-to-r from-fc-highlight to-fc-highlight-dark mb-6 rounded-full opacity-90" aria-hidden />
              <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-6 normal-case">
                Why this works (better than candy &amp; gift wrap)
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-subheading mb-6">
                Catalog fundraisers burn volunteer time on logistics. Candy and gift wrap sell guilt, not value. Custom
                books are{' '}
                <strong className="text-stone-800 font-medium">educational, local, and keepable</strong>—so parents
                feel good opening their wallets.
              </p>
              <ul className="space-y-3 text-stone-700 font-subheading text-base m-0 pl-0 list-none">
                {[
                  'No freezer inventory or last-minute pickup chaos',
                  'No cheap trinkets—families get something they read and keep',
                  'Strong per-unit margin with pricing you control',
                  'Built for elementary PTOs; teams &amp; civic groups can start on our fundraising page',
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="text-fc-highlight-dark font-bold shrink-0" aria-hidden>
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href={planCtaHref} className="btn-fc-primary no-underline inline-flex justify-center text-center">
                  Start Your School Fundraiser Today
                </Link>
                <Link href="/fundraising" className="btn-fc-secondary no-underline inline-flex justify-center text-center">
                  Non-school groups
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="min-w-0 lg:col-span-7 order-1 lg:order-2"
            >
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-200">
                <Image
                  src={marketingImages.sectionBooks}
                  alt="Books and reading — fundraising products people keep"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works-home"
        className={`relative scroll-mt-28 py-12 md:py-16 ${sectionBorder} bg-gradient-to-b from-parchment-100/90 to-parchment-200/40`}
      >
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-4 text-center normal-case">
            How it works — 3 steps
          </h2>
          <p className="text-center text-stone-600 font-subheading text-base md:text-lg max-w-3xl mx-auto mb-10">
            We handle design and production—you focus on one clear job: getting books into families&apos; hands.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                step: '1',
                title: 'We create your book',
                body: 'Local history, trivia, or coloring—custom to your school and town. You approve the cover and key pages before we print.',
              },
              {
                step: '2',
                title: 'You sell to families',
                body: 'Simple order window; no warehouses of cookie dough. You set the sell price and run the drive the way your PTO already communicates.',
              },
              {
                step: '3',
                title: 'You keep the profits',
                body: 'Strong margin per book (often about $9–11 typical). Money stays with your school for what you need most.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="fc-card min-w-0 p-6 sm:p-8 border border-parchment-300/70 shadow-bz-card flex flex-col items-center text-center md:items-stretch md:text-left"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fc-highlight to-fc-highlight-dark text-white font-heading text-xl mb-4 mx-auto md:mx-0"
                  aria-hidden
                >
                  {item.step}
                </div>
                <h3 className="font-heading text-xl md:text-2xl text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 font-subheading leading-relaxed m-0">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <Link href={planCtaHref} className="btn-fc-primary no-underline inline-flex justify-center text-center">
              Start Your School Fundraiser Today
            </Link>
            <Link href={planCtaHref} className="btn-fc-secondary no-underline inline-flex justify-center text-center">
              Get Your Free Fundraising Plan
            </Link>
          </div>
        </div>
      </section>

      <section className={`relative py-12 md:py-18 ${sectionBorder} bg-parchment-50/90`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <div className="max-w-3xl mb-12">
            <div className="h-1 w-16 bg-gradient-to-r from-fc-highlight to-fc-highlight-dark mb-6 rounded-full opacity-90" aria-hidden />
            <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-4 normal-case">
              Products parents actually buy
            </h2>
            <p className="text-stone-500 font-subheading text-lg">
              Keepsakes tied to your town and school—not another catalog cluttering the kitchen counter.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.title}
                className="group flex min-w-0 flex-col border border-parchment-300/80 bg-white/80 overflow-hidden hover:border-fc-highlight/55 transition-all duration-300 shadow-bz-soft hover:shadow-bz-card"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 bg-parchment-200">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-lg md:text-xl text-stone-900 mb-2 group-hover:text-fc-action transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-stone-600 font-subheading leading-relaxed text-base m-0">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-10 border-t border-parchment-300/70">
            <h3 className="font-heading text-xl md:text-2xl text-fc-structural mb-6 text-center normal-case">
              Real books—not a mockup pitch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-bz-wide mx-auto">
              <figure className="m-0 min-w-0">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-200">
                  <Image
                    src={marketingImages.productHistory}
                    alt="Printed book cover — custom school fundraiser edition"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="text-stone-600 font-subheading text-sm mt-3 text-center px-1">
                  Printed covers with your school or town—looks like a real bookstore title, not a flyer
                </figcaption>
              </figure>
              <figure className="m-0 min-w-0">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-200">
                  <Image
                    src={marketingImages.productTrivia}
                    alt="Inside pages — stories and activities families keep"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="text-stone-600 font-subheading text-sm mt-3 text-center px-1">
                  Interior spreads—history, trivia, and activities families read together
                </figcaption>
              </figure>
              <figure className="m-0 min-w-0 md:col-span-2 xl:col-span-1">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-200">
                  <Image
                    src={marketingImages.heroSchool}
                    alt="Students and schools with custom fundraiser books in the classroom"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="text-stone-600 font-subheading text-sm mt-3 text-center px-1">
                  Books in school settings—tangible proof families are buying something meaningful
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href={planCtaHref} className="btn-fc-primary no-underline inline-flex justify-center">
              Start Your School Fundraiser Today
            </Link>
            <Link href="/books" className="btn-fc-secondary no-underline inline-flex justify-center">
              Browse printed books
            </Link>
          </div>
        </div>
      </section>

      <section className={`relative py-12 md:py-18 ${sectionBorder} bg-gradient-to-br from-[var(--fc-highlight-soft)] via-parchment-100/90 to-fc-structural/[0.06]`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="min-w-0 lg:col-span-5"
            >
              <div className="relative mx-auto w-full max-w-[min(100%,22rem)] sm:max-w-md lg:max-w-none aspect-[4/5] rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-200">
                <Image
                  src={marketingImages.sectionHeart}
                  alt="Reading together — meaningful fundraising"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </motion.div>
            <div className="min-w-0 lg:col-span-7">
              <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-6 normal-case">
                Fundraising People Feel Good About
              </h2>
              <p className="text-stone-600 text-lg mb-8 font-subheading leading-relaxed">
                Most fundraisers rely on products people don’t need. Our books:
              </p>
              <ul className="space-y-4 text-stone-700 font-subheading text-lg list-none pl-0 m-0">
                {['Celebrate your community', 'Educate students', 'Create lasting keepsakes'].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="text-fc-highlight-dark mt-1 shrink-0 font-bold" aria-hidden>
                      ✔
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-stone-600 font-subheading text-lg leading-relaxed">
                <strong className="text-stone-800 font-medium">A fundraiser families keep forever</strong>—not something
                they forget in the pantry.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href={planCtaHref} className="btn-fc-primary no-underline inline-flex justify-center">
                  Get Your Free Fundraising Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`relative py-12 md:py-18 ${sectionBorder} bg-parchment-50/95`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-6 text-center md:text-left normal-case">
            Proven in the Merrimack Valley
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-subheading text-center md:text-left mb-12">
            Local schools have run these drives with strong repeat interest. Here is what leaders say—then see a sample
            outcome snapshot.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.name + t.detail}
                className="fc-card min-w-0 p-5 sm:p-8 border border-parchment-300/80 shadow-bz-soft m-0"
              >
                <p className="text-stone-700 font-subheading text-base sm:text-lg leading-relaxed mb-6 break-words">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-stone-500 font-subheading text-sm">
                  <cite className="not-italic font-heading font-medium text-stone-800">{t.name}</cite>
                  <span className="block text-stone-500 mt-1">{t.detail}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className={`relative py-12 md:py-18 ${sectionBorder} bg-gradient-to-b from-parchment-100/90 to-parchment-50/95`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-4 text-center normal-case">
            Real results (example case)
          </h2>
          <p className="text-center text-stone-600 font-subheading text-lg max-w-2xl mx-auto mb-10">
            Illustrative numbers based on typical elementary runs—your rep confirms pricing and timeline for your school.
          </p>
          <div className="fc-card border border-parchment-300/80 shadow-bz-card p-8 md:p-10">
            <p className="font-subheading text-stone-500 text-sm uppercase tracking-wider mb-2 m-0">Placeholder case study</p>
            <p className="font-heading text-xl text-stone-900 mb-6 m-0">Elementary PTO · single-town history book · fall window</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-subheading text-stone-500 text-sm mb-1 m-0">Books sold</p>
                <p className="font-heading text-3xl text-fc-action m-0">~300</p>
              </div>
              <div>
                <p className="font-subheading text-stone-500 text-sm mb-1 m-0">Est. profit to school</p>
                <p className="font-heading text-3xl text-fc-action m-0">~$2.7k–$3.3k</p>
              </div>
              <div>
                <p className="font-subheading text-stone-500 text-sm mb-1 m-0">Volunteer lift</p>
                <p className="font-heading text-2xl text-stone-900 m-0">Low vs. catalog</p>
              </div>
            </div>
            <p className="text-stone-600 font-subheading text-sm mt-8 mb-0 text-center">
              Replace with your school&apos;s story when you have permission to share—we help you capture metrics that
              boards care about.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={planCtaHref} className="btn-fc-primary no-underline inline-flex justify-center">
              Start Your School Fundraiser Today
            </Link>
            <Link href={planCtaHref} className="btn-fc-secondary no-underline inline-flex justify-center">
              Get Your Free Fundraising Plan
            </Link>
          </div>
        </div>
      </section>

      <section className={`relative py-12 md:py-18 ${sectionBorder} bg-parchment-100/70`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-4 text-center normal-case">
            What can your school earn?
          </h2>
          <p className="text-center text-stone-600 font-subheading text-lg max-w-2xl mx-auto mb-10">
            Same logic as the table above—quick view. Final pricing depends on page count, quantity, and season; you get
            line items in writing before you commit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Sell price', value: '$15' },
              { label: 'Your cost', value: '$4–6' },
              { label: 'You keep (typ.)', value: '~$9–11', highlight: true },
            ].map((cell) => (
              <div
                key={cell.label}
                className={`p-6 text-center border rounded-sm backdrop-blur-[1px] ${
                  cell.highlight
                    ? 'border-fc-highlight/50 bg-gradient-to-b from-[var(--fc-highlight-soft)] to-white/95 shadow-bz-soft'
                    : 'border-parchment-300/90 bg-white/85 shadow-bz-soft'
                }`}
              >
                <p className="text-stone-500 font-subheading text-sm uppercase tracking-wider mb-2">{cell.label}</p>
                <p
                  className={`font-heading text-2xl sm:text-2xl md:text-3xl break-words ${cell.highlight ? 'text-fc-action' : 'text-stone-900'}`}
                >
                  {cell.value}
                </p>
                {cell.highlight && <p className="text-stone-500 font-subheading text-sm mt-2 mb-0">per book (typical)</p>}
              </div>
            ))}
          </div>
          <div className="max-w-xl mx-auto fc-card p-8 md:p-10 text-center border border-fc-highlight/40 bg-gradient-to-b from-[var(--fc-highlight-soft)] to-white/90 shadow-bz-card">
            <p className="font-subheading text-stone-600 uppercase tracking-wider text-sm mb-2">Example drive</p>
            <p className="font-heading text-2xl md:text-3xl text-stone-900 mb-2">
              Sell <strong className="text-fc-action">300</strong> books @ <strong className="text-fc-action">$15</strong>
            </p>
            <ul className="text-left font-subheading text-stone-600 text-base space-y-2 max-w-sm mx-auto mb-4 list-none pl-0">
              <li className="flex justify-between gap-4 border-b border-parchment-200/80 pb-2">
                <span>Gross revenue</span>
                <span className="font-medium text-stone-900">$4,500</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-parchment-200/80 pb-2">
                <span>Est. cost ($4–6 × 300)</span>
                <span>~$1,200–$1,800</span>
              </li>
              <li className="flex justify-between gap-4 pt-1">
                <span className="font-medium text-fc-structural">Est. profit</span>
                <span className="font-heading text-fc-action text-lg">~$2,700–$3,300</span>
              </li>
            </ul>
            <p className="text-stone-500 font-subheading text-sm m-0">Midpoint ~$3,000 to your school; your rep confirms exact numbers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
            <div className="fc-card p-6 text-center border border-parchment-300/70 shadow-bz-card">
              <p className="font-heading text-2xl text-stone-900 mb-1">Sell 200</p>
              <p className="text-fc-highlight-dark font-heading text-3xl mb-0">~$2,000</p>
            </div>
            <div className="fc-card p-6 text-center border border-parchment-300/70 shadow-bz-card">
              <p className="font-heading text-2xl text-stone-900 mb-1">Sell 500</p>
              <p className="text-fc-highlight-dark font-heading text-3xl mb-0">~$5,000</p>
            </div>
          </div>
          <p className="text-center text-stone-600 font-subheading text-lg mt-10 mb-6">
            One of the easiest, highest-trust fundraisers you can run—without the junk-food hangover.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <Link href={planCtaHref} className="btn-fc-primary no-underline inline-flex justify-center">
              Start Your School Fundraiser Today
            </Link>
            <Link href={planCtaHref} className="btn-fc-secondary no-underline inline-flex justify-center">
              Get Your Free Fundraising Plan
            </Link>
          </div>
        </div>
      </section>

      <section className={`relative py-12 md:py-18 ${sectionBorder} bg-parchment-50/95`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-4 text-center normal-case">
            Who we work with first
          </h2>
          <p className="text-center text-stone-600 font-subheading text-lg mb-8 max-w-2xl mx-auto">
            Elementary schools and parent groups are our sweet spot—other organizations use the same model on our
            fundraising page.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {perfectFor.map((label) => (
              <span
                key={label}
                className="inline-flex items-center px-4 py-2 rounded-full border border-fc-highlight/45 bg-gradient-to-br from-[var(--fc-highlight-soft)] to-white/90 text-stone-800 font-subheading text-sm md:text-base shadow-sm"
              >
                {label}
              </span>
            ))}
          </div>
          <p className="text-center mt-8 mb-0">
            <Link href="/fundraising" className="text-fc-action font-subheading font-medium underline underline-offset-2">
              Sports teams, clubs &amp; civic groups → Fundraising page
            </Link>
          </p>
        </div>
      </section>

      <section className={`relative py-12 md:py-18 ${sectionBorder} bg-gradient-to-b from-parchment-200/50 to-parchment-100/90`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-6 normal-case">
            About Boosters Zone
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-subheading mb-6">
            Created by <strong className="text-stone-900 font-medium">E. Philip Brown</strong>, a public historian and
            award-winning filmmaker—work rooted in archival research, local narrative, and classroom-ready storytelling.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed font-subheading mb-8">
            <strong className="text-stone-900 font-heading font-medium">Mission:</strong> turn community stories into
            products that educate, inspire, and generate revenue schools can plan around.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href={planCtaHref} className="btn-fc-primary no-underline inline-flex justify-center">
              Get Your Free Fundraising Plan
            </Link>
            <Link href="/about" className="btn-fc-secondary no-underline inline-flex justify-center">
              Read more about us
            </Link>
          </div>
        </div>
      </section>

      <section className={`relative py-12 md:py-18 ${sectionBorder} bg-parchment-50/95`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10 text-center">
          <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-fc-structural mb-6 normal-case">
            Want a free sample page?
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-subheading mb-8">
            Send your school name and town—we&apos;ll mock up a cover or sample spread. Or start with the free plan above;
            the full form below covers demos and detailed requests too.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link
              href={planCtaHref}
              className="btn-fc-primary no-underline inline-flex justify-center w-full sm:w-auto min-w-0 text-center text-sm py-2.5 px-4"
            >
              Start Your School Fundraiser Today
            </Link>
            <Link
              href="/contact#sample-page"
              className="btn-fc-secondary no-underline inline-flex justify-center w-full sm:w-auto min-w-0 text-center text-sm py-2.5 px-4"
            >
              Request a sample page
            </Link>
            <Link
              href="/#free-fundraising-plan"
              className="btn-fc-secondary no-underline inline-flex justify-center w-full sm:w-auto min-w-0 text-center text-sm py-2.5 px-4"
            >
              Full contact form
            </Link>
          </div>
        </div>
      </section>

      <section className={`relative py-12 md:py-18 ${sectionBorder} bg-gradient-to-br from-[var(--fc-highlight-soft)] via-parchment-100 to-fc-structural/[0.08]`}>
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10 text-center">
          <h2 className="section-heading font-heading text-2xl md:text-3xl font-medium text-stone-900 mb-6 normal-case">
            Ready to raise real money?
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-subheading mb-10">
            Lock in your 2026 window before calendars fill. Get your free plan now—or book a short call if you prefer to
            walk through options live.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link
              href={planCtaHref}
              className="btn-fc-primary no-underline inline-flex justify-center w-full sm:w-auto min-w-0 text-center text-sm py-2.5 px-4"
            >
              Start Your School Fundraiser Today
            </Link>
            <Link
              href={planCtaHref}
              className="btn-fc-secondary no-underline inline-flex justify-center w-full sm:w-auto min-w-0 text-center text-sm py-2.5 px-4"
            >
              Get Your Free Fundraising Plan
            </Link>
            <Link
              href="/contact#book-demo"
              className="btn-fc-secondary no-underline inline-flex justify-center w-full sm:w-auto min-w-0 text-center text-sm py-2.5 px-4"
            >
              Book a 10-min demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
