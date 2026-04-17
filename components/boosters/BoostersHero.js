'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import TextureOverlay from '../designndev/TextureOverlay'
import { marketingImages } from '../../lib/marketingImages'

const stats = [
  { label: 'Typical sell', value: '$15' },
  { label: 'Your cost', value: '$4–6' },
  { label: 'You keep', value: '~$9–11', sub: 'per book' },
]

const quickLinks = [
  { href: '/#get-free-fundraising-plan', label: 'Free plan' },
  { href: '/#how-it-works-home', label: 'How it works' },
  { href: '/fundraising', label: 'Fundraising' },
  { href: '/books', label: 'Shop books' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function HeroEconomicsSnapshot() {
  return (
    <div className="rounded-xl border border-fc-highlight/30 bg-gradient-to-br from-[var(--fc-highlight-soft)]/90 via-white/85 to-parchment-50/90 p-3.5 sm:p-4 shadow-[0_1px_0_rgba(255,255,255,0.75)_inset,0_10px_32px_-20px_rgba(14,116,144,0.16)]">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1.5 mb-3">
        <p className="font-heading text-stone-900 text-sm sm:text-base font-medium m-0 leading-tight">
          Typical economics, at a glance
        </p>
        <p className="text-stone-600 font-subheading text-xs m-0 sm:text-right max-w-[20rem] sm:max-w-[13rem]">
          Strong margin per book · we design &amp; print—you run the sale
        </p>
      </div>
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg bg-white/90 border border-parchment-300/60 px-2 py-2 sm:px-2.5 sm:py-2.5 text-center shadow-sm"
          >
            <p className="font-subheading text-[0.6rem] sm:text-[0.65rem] uppercase tracking-wider text-stone-500 mb-0.5 leading-tight">
              {s.label}
            </p>
            <p className="font-heading text-base sm:text-lg text-fc-structural leading-none">{s.value}</p>
            {s.sub ? <p className="font-subheading text-[0.6rem] text-stone-500 mt-0.5 mb-0">{s.sub}</p> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BoostersHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-bz-hero border-b border-parchment-300/50">
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 55% 40% at 88% 72%, rgba(14, 116, 144, 0.07) 0%, transparent 55%)',
        }}
        aria-hidden
      />
      <TextureOverlay opacity={0.055} className="mix-blend-multiply" />

      <div className="relative z-10 max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10 2xl:px-12 pt-24 pb-12 md:pb-16 lg:pt-28">
        {/* Quick navigation — extra CTAs */}
        <nav
          aria-label="Page sections"
          className="mb-6 flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-parchment-300/50 pb-4"
        >
          <span className="font-subheading text-[0.65rem] uppercase tracking-wider text-stone-500 mr-1 w-full sm:w-auto mb-0 sm:mb-0">
            Jump to
          </span>
          {quickLinks.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="font-subheading text-xs sm:text-sm font-medium rounded-md border border-parchment-300/90 bg-white/70 px-2.5 py-1 text-fc-structural shadow-sm transition-colors hover:border-fc-highlight/50 hover:bg-[var(--fc-highlight-soft)]/50 no-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* Copy + CTAs + stats */}
          <div className="min-w-0 lg:col-span-5 xl:col-span-5 order-2 lg:order-1">
            <div className="rounded-xl border border-parchment-300/60 bg-white/40 p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-[2px]">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-4"
              >
                <p className="text-fc-structural font-subheading text-[0.65rem] sm:text-xs tracking-[0.18em] uppercase m-0 mb-1.5">
                  School &amp; PTO fundraising
                </p>
                <p className="text-stone-500 font-subheading text-xs m-0">
                  2026 print windows fill early · Reply within one business day
                </p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.02 }}
                className="mb-3 inline-flex flex-wrap items-center gap-1.5 rounded-full border border-fc-highlight/35 bg-[var(--fc-highlight-soft)]/90 px-2.5 py-1 font-subheading text-[0.7rem] sm:text-xs text-stone-800 shadow-sm max-w-full"
              >
                <span className="font-heading font-medium text-fc-structural whitespace-nowrap">America&apos;s 250th (2026)</span>
                <span className="text-stone-600">Local history &amp; civics—families keep the books.</span>
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="font-heading text-3xl sm:text-4xl md:text-[2.15rem] lg:text-[2.35rem] xl:text-5xl font-medium text-stone-900 mb-4 sm:mb-5 leading-[1.14] max-w-[26ch] min-[480px]:max-w-none"
              >
                Real profit for your school—without candy, gift wrap, or catalog chaos
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className="mb-5 max-w-xl"
              >
                <HeroEconomicsSnapshot />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-stone-600 text-sm md:text-base font-subheading leading-relaxed mb-6 max-w-xl"
              >
                We design and print custom local-history, trivia, and coloring books your families actually want—strong
                margins per copy, minimal volunteer hours, and an educational story schools are proud to sell.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mb-2"
              >
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-xl">
                  <Link href="/#get-free-fundraising-plan" className="btn-fc-primary no-underline inline-flex items-center justify-center flex-1 min-w-0 text-center shrink-0">
                    Start Your School Fundraiser Today
                  </Link>
                  <Link href="/#get-free-fundraising-plan" className="btn-fc-secondary no-underline inline-flex items-center justify-center flex-1 min-w-0 text-center shrink-0">
                    Get Your Free Fundraising Plan
                  </Link>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-stone-500 font-subheading text-[0.7rem] sm:text-xs max-w-xl leading-relaxed">
                  <Link href="/books" className="text-fc-action font-medium underline underline-offset-2 hover:text-fc-action-dark">
                    Shop books
                  </Link>
                  <span className="text-stone-300" aria-hidden>
                    ·
                  </span>
                  <Link href="/faq" className="text-fc-action font-medium underline underline-offset-2 hover:text-fc-action-dark">
                    FAQ
                  </Link>
                  <span className="text-stone-300" aria-hidden>
                    ·
                  </span>
                  <Link href="/fundraising" className="text-fc-action font-medium underline underline-offset-2 hover:text-fc-action-dark">
                    Teams &amp; clubs
                  </Link>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.13 }}
                className="text-stone-500 font-subheading text-[0.7rem] sm:text-xs leading-relaxed mt-5 mb-0 max-w-xl border-t border-parchment-300/50 pt-4"
              >
                <span className="text-stone-600 font-medium">Why schools trust us:</span> E. Philip Brown—public historian
                and filmmaker—books created with schools and PTOs across the Merrimack Valley.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.14 }}
                className="mt-4 flex flex-wrap gap-x-4 gap-y-2 max-w-xl"
              >
                <Link
                  href="/contact#sample-page"
                  className="text-fc-action font-subheading text-xs font-medium underline underline-offset-[4px] decoration-fc-action/40 hover:decoration-fc-action/70"
                >
                  Free sample page
                </Link>
                <Link
                  href="/contact#book-demo"
                  className="text-fc-action font-subheading text-xs font-medium underline underline-offset-[4px] decoration-fc-action/40 hover:decoration-fc-action/70"
                >
                  10-min demo
                </Link>
                <Link
                  href="/#get-free-fundraising-plan"
                  className="text-fc-action font-subheading text-xs font-medium underline underline-offset-[4px] decoration-fc-action/40 hover:decoration-fc-action/70"
                >
                  Free fundraising plan
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Image collage */}
          <div className="min-w-0 lg:col-span-7 xl:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
              className="relative mx-auto w-full max-w-xl lg:max-w-none rounded-xl border border-parchment-300/70 bg-white/30 p-2 sm:p-3 shadow-bz-soft"
            >
              <div className="grid min-h-0 grid-cols-1 gap-3 md:gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:min-h-[380px]">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] lg:col-span-7 lg:row-span-2 lg:aspect-auto lg:min-h-[280px] rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-100">
                  <Image
                    src={marketingImages.heroMain}
                    alt="Custom book cover and stack — real printed school fundraiser editions"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/25 via-transparent to-transparent pointer-events-none" aria-hidden />
                </div>
                <div className="grid min-h-0 grid-cols-2 gap-3 md:gap-4 lg:contents">
                  <div className="relative aspect-[4/3] min-h-0 lg:col-span-5 lg:row-start-1 lg:min-h-[180px] rounded-md overflow-hidden shadow-bz-soft border border-parchment-300/80 bg-parchment-100">
                    <Image
                      src={marketingImages.heroSchool}
                      alt="Kids with books — school usage and classroom connection"
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 1024px) 50vw, 28vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] min-h-0 lg:col-span-5 lg:row-start-2 lg:min-h-[180px] rounded-md overflow-hidden shadow-bz-soft border border-parchment-300/80 bg-parchment-100">
                    <Image
                      src={marketingImages.heroCommunity}
                      alt="Community — local history and pride"
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 1024px) 50vw, 28vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
