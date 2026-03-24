'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import TextureOverlay from '../designndev/TextureOverlay'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const products = [
  {
    title: 'Local History Books',
    body: 'Celebrate your town’s people and stories.',
  },
  {
    title: 'Coloring Books',
    body: 'Easy, high-margin sellers for schools.',
  },
  {
    title: 'Trivia Books',
    body: 'Fun, interactive, educational.',
  },
  {
    title: 'Custom Editions',
    body: 'Add logos, sponsors, and school content.',
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

export default function BoostersHomeContent() {
  return (
    <>
      <section className="relative min-h-[min(88vh,780px)] flex items-center justify-start pt-24 pb-20 overflow-hidden bg-forest-950">
        <div
          className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-90 bg-gradient-to-r from-forest-950/95 via-forest-900/85 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 60% at 15% 40%, rgba(245,158,11,0.2) 0%, transparent 55%)',
          }}
          aria-hidden
        />
        <TextureOverlay opacity={0.12} className="mix-blend-overlay" />

        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-left pt-4">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55 }}
            className="text-gold-400 font-subheading text-sm md:text-base tracking-widest uppercase mb-4"
          >
            Fundraising that tells your story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[3.35rem] xl:text-7xl font-medium text-white mb-6 leading-[1.08] max-w-4xl drop-shadow-md"
          >
            Turn Local History Into Fundraising Gold
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="text-gold-100/90 text-lg md:text-xl max-w-2xl mb-10 font-subheading leading-relaxed"
          >
            Custom books, coloring books, and educational materials that schools, teams, and communities sell to
            raise money—while celebrating their story.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <Link href="/contact" className="btn-fc-primary text-base px-8 py-3.5 no-underline inline-flex items-center justify-center gap-2">
              Start a Fundraiser
            </Link>
            <Link href="/books" className="btn-fc-secondary text-base px-8 py-3.5 no-underline inline-flex items-center justify-center gap-2">
              Shop Books
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-forest-600/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-gold-400 mb-6 normal-case">
            A Better Way to Fundraise
          </h2>
          <p className="text-gold-100/90 text-lg leading-relaxed font-subheading">
            Tired of selling products no one really wants? Boosters Zone offers a smarter alternative—custom books
            people value, keep, and share. We help schools and organizations turn local history into high-quality
            books that generate real profits and community pride.
          </p>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-forest-600/50 bg-forest-950/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-gold-400 mb-12 text-center normal-case">
            Simple. Profitable. Proven.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { title: 'We Create', body: 'Custom books based on your town, school, or organization (history, trivia, coloring).' },
              { title: 'You Sell', body: 'Families and community members buy something meaningful.' },
              { title: 'You Profit', body: 'Low costs = strong margins.' },
            ].map((item) => (
              <div key={item.title} className="fc-card p-8 border border-forest-600/80">
                <h3 className="font-heading text-xl md:text-2xl text-white mb-4">{item.title}</h3>
                <p className="text-gold-100/85 font-subheading leading-relaxed m-0">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-forest-600/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-gold-400 mb-4 normal-case">
            Products That Actually Sell
          </h2>
          <p className="text-gold-200/80 font-subheading mb-12 max-w-2xl">
            Materials designed for schools and community groups—not another catalog nobody asked for.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((p) => (
              <div
                key={p.title}
                className="group p-6 border border-forest-600/70 bg-forest-900/30 hover:border-gold-500/40 transition-colors"
              >
                <h3 className="font-heading text-xl text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gold-100/85 font-subheading leading-relaxed m-0">{p.body}</p>
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

      <section className="relative py-16 md:py-24 border-t border-forest-600/50 bg-forest-950/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-gold-400 mb-6 normal-case">
            Fundraising People Feel Good About
          </h2>
          <p className="text-gold-100/90 text-lg mb-8 font-subheading leading-relaxed">
            Most fundraisers rely on products people don’t need. Our books:
          </p>
          <ul className="space-y-4 text-gold-100/90 font-subheading text-lg list-none pl-0 m-0">
            {['Celebrate your community', 'Educate students', 'Create lasting keepsakes'].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="text-gold-500 mt-1 shrink-0" aria-hidden>
                  ✔
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gold-200/90 font-subheading text-lg leading-relaxed">
            This is something people want to buy.
          </p>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-forest-600/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-gold-400 mb-6 normal-case">
            Proven Success
          </h2>
          <p className="text-gold-100/90 text-lg leading-relaxed font-subheading">
            Our books have been successfully created and sold throughout the Merrimack Valley, generating strong
            community interest and repeat demand. Now we bring this model to your organization.
          </p>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-forest-600/50 bg-forest-950/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-gold-400 mb-10 text-center normal-case">
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
                className={`p-6 text-center border ${
                  cell.highlight
                    ? 'border-gold-500/60 bg-gold-500/10'
                    : 'border-forest-600/80 bg-forest-900/40'
                }`}
              >
                <p className="text-gold-200/80 font-subheading text-sm uppercase tracking-wider mb-2">{cell.label}</p>
                <p className={`font-heading text-3xl md:text-4xl ${cell.highlight ? 'text-gold-400' : 'text-white'}`}>
                  {cell.value}
                </p>
                {cell.highlight && <p className="text-gold-200/80 font-subheading text-sm mt-2 mb-0">per book</p>}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="fc-card p-6 text-center">
              <p className="font-heading text-2xl text-white mb-1">Sell 200</p>
              <p className="text-gold-400 font-heading text-3xl mb-0">$3,000</p>
            </div>
            <div className="fc-card p-6 text-center">
              <p className="font-heading text-2xl text-white mb-1">Sell 500</p>
              <p className="text-gold-400 font-heading text-3xl mb-0">$7,500</p>
            </div>
          </div>
          <p className="text-center text-gold-100/85 font-subheading text-lg mt-10 mb-0">
            One of the easiest and most effective fundraisers you’ll run.
          </p>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-forest-600/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-gold-400 mb-8 text-center normal-case">
            Perfect For
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {perfectFor.map((label) => (
              <span
                key={label}
                className="inline-flex items-center px-4 py-2 rounded-full border border-gold-500/35 bg-forest-900/50 text-gold-100/95 font-subheading text-sm md:text-base"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-forest-600/50 bg-forest-950/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-gold-400 mb-6 normal-case">
            About Boosters Zone
          </h2>
          <p className="text-gold-100/90 text-lg leading-relaxed font-subheading mb-6">
            Created by E. Philip Brown, a public historian and award-winning filmmaker.
          </p>
          <p className="text-gold-100/90 text-lg leading-relaxed font-subheading mb-8">
            <strong className="text-white font-heading font-medium">Mission:</strong> turn community stories into
            products that educate, inspire, and generate revenue.
          </p>
          <Link href="/about" className="btn-fc-secondary no-underline inline-flex">
            Read more about us
          </Link>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-forest-600/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-gold-400 mb-6 normal-case">
            Get Your Free Fundraising Plan
          </h2>
          <p className="text-gold-100/90 text-lg leading-relaxed font-subheading mb-8">
            Tell us about your organization and we’ll outline a custom book idea.
          </p>
          <Link href="/contact#free-fundraising-plan" className="btn-fc-primary text-base px-8 py-3.5 no-underline inline-flex">
            Send My Plan
          </Link>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-forest-600/50 bg-gradient-to-b from-forest-950/60 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading font-heading text-3xl md:text-4xl font-medium text-white mb-6 normal-case">
            Ready to Launch?
          </h2>
          <p className="text-gold-100/90 text-lg leading-relaxed font-subheading mb-10">
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
