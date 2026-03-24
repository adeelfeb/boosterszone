'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import TextureOverlay from '../designndev/TextureOverlay'
import { marketingImages } from '../../lib/marketingImages'

const stats = [
  { label: 'Your cost', value: '$5' },
  { label: 'Typical sell', value: '$20' },
  { label: 'You keep', value: '$15+' },
]

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 md:pb-20 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Copy + CTAs + stats */}
          <div className="lg:col-span-5 xl:col-span-5 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-amber-800 font-subheading text-sm md:text-base tracking-[0.2em] uppercase mb-4"
            >
              Fundraising that tells your story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-heading text-4xl sm:text-5xl md:text-[2.65rem] lg:text-5xl xl:text-6xl font-medium text-stone-900 mb-5 leading-[1.1]"
            >
              Turn Local History Into Fundraising Gold
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="text-stone-600 text-lg md:text-xl font-subheading leading-relaxed mb-8 max-w-xl"
            >
              Custom books, coloring books, and educational materials that schools, teams, and communities sell to raise
              money—while celebrating their story.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10"
            >
              <Link href="/contact" className="btn-fc-primary text-base px-7 py-3.5 no-underline inline-flex items-center justify-center">
                Start a Fundraiser
              </Link>
              <Link href="/books" className="btn-fc-secondary text-base px-7 py-3.5 no-underline inline-flex items-center justify-center">
                Shop Books
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-8 border-t border-parchment-300/80"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center sm:text-left rounded-sm bg-white/60 border border-parchment-300/70 px-3 py-3 shadow-sm backdrop-blur-sm"
                >
                  <p className="font-subheading text-[0.65rem] sm:text-xs uppercase tracking-wider text-stone-500 mb-1">
                    {s.label}
                  </p>
                  <p className="font-heading text-xl sm:text-2xl text-amber-900">{s.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image collage */}
          <div className="lg:col-span-7 xl:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
            >
              <div className="grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:min-h-[420px]">
                <div className="relative aspect-[16/10] lg:col-span-7 lg:row-span-2 lg:aspect-auto lg:min-h-[300px] rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-100">
                  <Image
                    src={marketingImages.heroMain}
                    alt="Stack of books — custom editions for fundraisers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/25 via-transparent to-transparent pointer-events-none" aria-hidden />
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:contents">
                  <div className="relative aspect-[4/3] lg:col-span-5 lg:row-start-1 lg:min-h-[200px] rounded-md overflow-hidden shadow-bz-soft border border-parchment-300/80 bg-parchment-100">
                    <Image
                      src={marketingImages.heroSchool}
                      alt="Students learning — materials schools can sell"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 28vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] lg:col-span-5 lg:row-start-2 lg:min-h-[200px] rounded-md overflow-hidden shadow-bz-soft border border-parchment-300/80 bg-parchment-100">
                    <Image
                      src={marketingImages.heroCommunity}
                      alt="Community — local history and pride"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 28vw"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center lg:text-right text-xs text-stone-500 font-subheading">
                Stock imagery for layout — swap for your town, school, or book photos anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
