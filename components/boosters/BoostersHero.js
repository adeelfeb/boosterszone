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

function HeroEconomicsSnapshot() {
  return (
    <div className="rounded-2xl border border-fc-highlight/25 bg-gradient-to-br from-[var(--fc-highlight-soft)]/90 via-white/80 to-parchment-50/90 p-5 sm:p-6 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_12px_40px_-24px_rgba(14,116,144,0.18)]">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
        <p className="font-heading text-stone-900 text-base sm:text-lg font-medium m-0 leading-tight">
          Typical economics, at a glance
        </p>
        <p className="text-stone-600 font-subheading text-sm m-0 sm:text-right max-w-[20rem] sm:max-w-[14rem]">
          Strong margin per copy · we handle design &amp; print—you promote and sell
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl bg-white/85 border border-parchment-300/60 px-2.5 py-3 sm:px-3 sm:py-3.5 text-center shadow-sm"
          >
            <p className="font-subheading text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wider text-stone-500 mb-1 leading-tight">
              {s.label}
            </p>
            <p className="font-heading text-lg sm:text-xl text-fc-structural leading-none">{s.value}</p>
            {s.sub ? <p className="font-subheading text-[0.65rem] text-stone-500 mt-1 mb-0">{s.sub}</p> : null}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pb-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Copy + CTAs + stats */}
          <div className="min-w-0 lg:col-span-5 xl:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5"
            >
              <p className="text-fc-structural font-subheading text-xs sm:text-sm tracking-[0.2em] uppercase m-0 mb-2">
                School &amp; PTO fundraising
              </p>
              <p className="text-stone-500 font-subheading text-sm m-0">Fall-ready · Limited 2026 school spots</p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-heading text-4xl sm:text-5xl md:text-[2.65rem] lg:text-5xl xl:text-6xl font-medium text-stone-900 mb-6 sm:mb-7 leading-[1.12] max-w-[22ch] min-[480px]:max-w-none"
            >
              Raise thousands for your school or PTO—without the catalog hassle
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mb-7 sm:mb-8 max-w-xl"
            >
              <HeroEconomicsSnapshot />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-stone-600 text-base md:text-lg font-subheading leading-relaxed mb-8 max-w-xl"
            >
              Custom local-history, trivia, and coloring books—keepsakes for elementary schools, boosters, and parent
              groups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mb-3"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl">
                <Link
                  href="/fundraising"
                  className="btn-fc-primary text-base px-7 py-3.5 no-underline inline-flex items-center justify-center flex-1 min-w-0 text-center shrink-0"
                >
                  Start a fundraiser
                </Link>
                <Link
                  href="/books"
                  className="btn-fc-secondary text-base px-7 py-3.5 no-underline inline-flex items-center justify-center flex-1 min-w-0 text-center shrink-0"
                >
                  Shop books
                </Link>
              </div>
              <p className="text-stone-500 font-subheading text-xs sm:text-sm mt-3 mb-0 max-w-xl leading-relaxed">
                <span className="text-stone-700 font-medium">Schools &amp; orgs:</span> fundraising details ·{' '}
                <span className="text-stone-700 font-medium">Families:</span> shop printed books
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.13 }}
              className="text-stone-500 font-subheading text-xs sm:text-sm leading-relaxed mb-8 max-w-xl"
            >
              <span className="text-stone-600 font-medium">Why schools trust us:</span> E. Philip Brown—public historian
              and filmmaker—books created with schools and PTOs across the Merrimack Valley.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="flex flex-wrap gap-x-5 gap-y-2.5 mb-10 max-w-xl"
            >
              <Link
                href="/contact#sample-page"
                className="text-fc-action font-subheading text-sm font-medium underline underline-offset-[5px] decoration-fc-action/40 hover:decoration-fc-action/70"
              >
                Free sample page
              </Link>
              <span className="text-stone-300 hidden sm:inline" aria-hidden>
                |
              </span>
              <Link
                href="/contact#book-demo"
                className="text-fc-action font-subheading text-sm font-medium underline underline-offset-[5px] decoration-fc-action/40 hover:decoration-fc-action/70"
              >
                10-min demo
              </Link>
              <span className="text-stone-300 hidden sm:inline" aria-hidden>
                |
              </span>
              <Link
                href="/#request-info"
                className="text-fc-action font-subheading text-sm font-medium underline underline-offset-[5px] decoration-fc-action/40 hover:decoration-fc-action/70"
              >
                Request info
              </Link>
            </motion.div>
          </div>

          {/* Image collage */}
          <div className="min-w-0 lg:col-span-7 xl:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
            >
              <div className="grid min-h-0 grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12 lg:grid-rows-2 lg:min-h-[420px]">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] lg:col-span-7 lg:row-span-2 lg:aspect-auto lg:min-h-[300px] rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-100">
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
                <div className="grid min-h-0 grid-cols-2 gap-4 md:gap-5 lg:contents">
                  <div className="relative aspect-[4/3] min-h-0 lg:col-span-5 lg:row-start-1 lg:min-h-[200px] rounded-md overflow-hidden shadow-bz-soft border border-parchment-300/80 bg-parchment-100">
                    <Image
                      src={marketingImages.heroSchool}
                      alt="Kids with books — school usage and classroom connection"
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 1024px) 50vw, 28vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] min-h-0 lg:col-span-5 lg:row-start-2 lg:min-h-[200px] rounded-md overflow-hidden shadow-bz-soft border border-parchment-300/80 bg-parchment-100">
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
