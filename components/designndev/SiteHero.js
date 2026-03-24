'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import TextureOverlay from './TextureOverlay'

/** Same asset as the global page background — forest / green texture */
const HERO_IMAGE = '/images/bg.png'

export default function SiteHero() {
  return (
    <section className="relative min-h-[min(85vh,720px)] flex items-center justify-start pt-20 pb-20 overflow-hidden bg-forest-950">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Green-forward scrim — matches site forest + gold palette */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-900/80 to-forest-950/50"
        aria-hidden
      />
      <div className="absolute inset-0 bg-forest-950/25" aria-hidden />
      <TextureOverlay opacity={0.1} className="mix-blend-overlay" />
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 90% at 20% 45%, rgba(201,162,39,0.12) 0%, transparent 55%)',
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
          Your headline goes here
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-gold-100/90 text-lg md:text-xl max-w-2xl mb-8 font-subheading leading-relaxed"
        >
          Replace this subtext with your value proposition. The member login, signup, and dashboard flows stay as the base implementation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Link href="/contact" className="btn-fc-primary text-base px-8 py-3.5 no-underline inline-flex items-center gap-2">
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
