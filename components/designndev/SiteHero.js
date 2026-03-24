'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import TextureOverlay from './TextureOverlay'

/** Legacy hero — marketing home uses BoostersHomeContent. Gradient-only (no external hero image). */
export default function SiteHero() {
  return (
    <section className="relative min-h-[min(85vh,720px)] flex items-center justify-start pt-20 pb-20 overflow-hidden bg-forest-950">
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-900/85 to-transparent"
        aria-hidden
      />
      <TextureOverlay opacity={0.1} className="mix-blend-overlay" />
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 90% at 20% 45%, rgba(245,158,11,0.14) 0%, transparent 55%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-left pt-2">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight max-w-3xl drop-shadow-lg"
        >
          Boosters Zone
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-gold-100/90 text-lg md:text-xl max-w-2xl mb-8 font-subheading leading-relaxed"
        >
          Custom books and materials for schools and communities that fundraise with pride.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <Link href="/contact" className="btn-fc-primary text-base px-8 py-3.5 no-underline inline-flex items-center gap-2">
            Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
