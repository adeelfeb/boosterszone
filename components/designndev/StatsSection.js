'use client'

import { motion } from 'framer-motion'
import { siteAssets } from '../../lib/siteAssets'

const stats = [
  { value: '—', label: 'Metric one (replace)' },
  { value: '—', label: 'Metric two (replace)' },
  { value: '—', label: 'Metric three (replace)' },
  { value: '—', label: 'Metric four (replace)' },
]

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-forest-800 border-t border-forest-700/50 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-repeat pointer-events-none" style={{ backgroundImage: `url(${siteAssets.texture})`, backgroundSize: 'cover' }} aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading font-heading text-2xl md:text-3xl font-medium text-gold-500 mb-12 md:mb-16 text-left normal-case"
        >
          At a glance
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-heading text-4xl md:text-5xl font-medium text-gold-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gold-100/80 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
