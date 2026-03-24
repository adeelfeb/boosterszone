'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import BoostersHero from './BoostersHero'
import { marketingImages } from '../../lib/marketingImages'

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
  'Schools',
  'Booster Clubs',
  'PTO / PTA',
  'Teams',
  'Historical Societies',
  'Civic Groups',
  'City Events',
]

const sectionBorder = 'border-t border-parchment-300/80'

export default function BoostersHomeContent() {
  return (
    <>
      <BoostersHero />

      <section className={`relative py-16 md:py-24 ${sectionBorder} bg-parchment-50/95`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-600 mb-6 rounded-full opacity-90" aria-hidden />
              <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-amber-900 mb-6 normal-case">
                A Better Way to Fundraise
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed font-subheading">
                Tired of selling products no one really wants? Boosters Zone offers a smarter alternative—custom books
                people value, keep, and share. We help schools and organizations turn local history into high-quality
                books that generate real profits and community pride.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div className="relative aspect-[16/11] rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-200">
                <Image
                  src={marketingImages.sectionBooks}
                  alt="Books and reading — fundraising products people keep"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`relative py-16 md:py-24 ${sectionBorder} bg-gradient-to-b from-parchment-100/90 to-parchment-200/40`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-amber-900 mb-12 text-center normal-case">
            Simple. Profitable. Proven.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { title: 'We Create', body: 'Custom books based on your town, school, or organization (history, trivia, coloring).' },
              { title: 'You Sell', body: 'Families and community members buy something meaningful.' },
              { title: 'You Profit', body: 'Low costs = strong margins.' },
            ].map((item) => (
              <div key={item.title} className="fc-card p-8 border border-parchment-300/70 shadow-bz-card">
                <h3 className="font-heading text-xl md:text-2xl text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 font-subheading leading-relaxed m-0">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`relative py-16 md:py-24 ${sectionBorder} bg-parchment-50/90`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-600 mb-6 rounded-full opacity-90" aria-hidden />
            <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-amber-900 mb-4 normal-case">
              Products That Actually Sell
            </h2>
            <p className="text-stone-500 font-subheading text-lg">
              Materials designed for schools and community groups—not another catalog nobody asked for.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.title}
                className="group flex flex-col border border-parchment-300/80 bg-white/80 overflow-hidden hover:border-amber-400/70 transition-all duration-300 shadow-bz-soft hover:shadow-bz-card"
              >
                <div className="relative aspect-[16/10] shrink-0 bg-parchment-200">
                  <Image src={p.image} alt={p.alt} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-lg md:text-xl text-stone-900 mb-2 group-hover:text-amber-900 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-stone-600 font-subheading leading-relaxed text-base m-0">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/books" className="btn-fc-secondary no-underline inline-flex">
              Explore all products
            </Link>
          </div>
        </div>
      </section>

      <section className={`relative py-16 md:py-24 ${sectionBorder} bg-gradient-to-br from-amber-50/50 via-parchment-100/80 to-sky-50/30`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] max-h-[420px] mx-auto lg:mx-0 rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-200">
                <Image
                  src={marketingImages.sectionHeart}
                  alt="Reading together — meaningful fundraising"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>
            <div className="lg:col-span-7">
              <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-amber-900 mb-6 normal-case">
                Fundraising People Feel Good About
              </h2>
              <p className="text-stone-600 text-lg mb-8 font-subheading leading-relaxed">
                Most fundraisers rely on products people don’t need. Our books:
              </p>
              <ul className="space-y-4 text-stone-700 font-subheading text-lg list-none pl-0 m-0">
                {['Celebrate your community', 'Educate students', 'Create lasting keepsakes'].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1 shrink-0 font-bold" aria-hidden>
                      ✔
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-stone-600 font-subheading text-lg leading-relaxed">
                This is something people want to buy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`relative py-16 md:py-24 ${sectionBorder} bg-parchment-50/95`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-amber-900 mb-6 normal-case">
            Proven Success
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-subheading">
            Our books have been successfully created and sold throughout the Merrimack Valley, generating strong
            community interest and repeat demand. Now we bring this model to your organization.
          </p>
        </div>
      </section>

      <section className={`relative py-16 md:py-24 ${sectionBorder} bg-parchment-100/70`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-amber-900 mb-10 text-center normal-case">
            See the Fundraising Potential
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Cost', value: '$5' },
              { label: 'Sell', value: '$20' },
              { label: 'Profit', value: '$15', highlight: true },
            ].map((cell) => (
              <div
                key={cell.label}
                className={`p-6 text-center border rounded-sm backdrop-blur-[1px] ${
                  cell.highlight
                    ? 'border-amber-400/60 bg-gradient-to-b from-amber-100/90 to-amber-50/95 shadow-bz-soft'
                    : 'border-parchment-300/90 bg-white/85 shadow-bz-soft'
                }`}
              >
                <p className="text-stone-500 font-subheading text-sm uppercase tracking-wider mb-2">{cell.label}</p>
                <p className={`font-heading text-3xl md:text-4xl ${cell.highlight ? 'text-amber-900' : 'text-stone-900'}`}>
                  {cell.value}
                </p>
                {cell.highlight && <p className="text-stone-500 font-subheading text-sm mt-2 mb-0">per book</p>}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="fc-card p-6 text-center border border-parchment-300/70 shadow-bz-card">
              <p className="font-heading text-2xl text-stone-900 mb-1">Sell 200</p>
              <p className="text-amber-700 font-heading text-3xl mb-0">$3,000</p>
            </div>
            <div className="fc-card p-6 text-center border border-parchment-300/70 shadow-bz-card">
              <p className="font-heading text-2xl text-stone-900 mb-1">Sell 500</p>
              <p className="text-amber-700 font-heading text-3xl mb-0">$7,500</p>
            </div>
          </div>
          <p className="text-center text-stone-600 font-subheading text-lg mt-10 mb-0">
            One of the easiest and most effective fundraisers you’ll run.
          </p>
        </div>
      </section>

      <section className={`relative py-16 md:py-24 ${sectionBorder} bg-parchment-50/95`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-amber-900 mb-8 text-center normal-case">
            Perfect For
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {perfectFor.map((label) => (
              <span
                key={label}
                className="inline-flex items-center px-4 py-2 rounded-full border border-amber-300/50 bg-gradient-to-br from-amber-50/95 to-orange-50/70 text-stone-800 font-subheading text-sm md:text-base shadow-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`relative py-16 md:py-24 ${sectionBorder} bg-gradient-to-b from-parchment-200/50 to-parchment-100/90`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-amber-900 mb-6 normal-case">
            About Boosters Zone
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-subheading mb-6">
            Created by E. Philip Brown, a public historian and award-winning filmmaker.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed font-subheading mb-8">
            <strong className="text-stone-900 font-heading font-medium">Mission:</strong> turn community stories into
            products that educate, inspire, and generate revenue.
          </p>
          <Link href="/about" className="btn-fc-secondary no-underline inline-flex">
            Read more about us
          </Link>
        </div>
      </section>

      <section className={`relative py-16 md:py-24 ${sectionBorder} bg-parchment-50/95`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-amber-900 mb-6 normal-case">
            Get Your Free Fundraising Plan
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-subheading mb-8">
            Tell us about your organization and we’ll outline a custom book idea.
          </p>
          <Link href="/contact#free-fundraising-plan" className="btn-fc-primary text-base px-8 py-3.5 no-underline inline-flex">
            Send My Plan
          </Link>
        </div>
      </section>

      <section className={`relative py-16 md:py-24 ${sectionBorder} bg-gradient-to-br from-amber-100/55 via-parchment-100 to-sky-100/25`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-stone-900 mb-6 normal-case">
            Ready to Launch?
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-subheading mb-10">
            Let’s create something your community will be proud of—and that raises real money.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-fc-primary text-base px-8 py-3.5 no-underline inline-flex justify-center">
              Start a Custom Book Project
            </Link>
            <Link href="/contact" className="btn-fc-secondary text-base px-8 py-3.5 no-underline inline-flex justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
