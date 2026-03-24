'use client'

import { motion } from 'framer-motion'

export default function VettedForImpact() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-heading font-heading text-4xl md:text-5xl font-medium text-gold-500 mb-6 text-center normal-case">
            <span className="text-white">About</span> us
          </h2>
          <div className="text-gold-100/90 text-base md:text-lg leading-relaxed lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6">
            <p>
              This is placeholder copy for a short “about” block on the home page. Use it to summarize what you do, who you serve, and why it matters.
            </p>
            <p>
              Keep paragraphs scannable: one idea each. Replace this block with your own story, or remove the section if you do not need it on the home page.
            </p>
            <p>
              The layout, styling, and animation patterns are ready; only the words and imagery need to reflect your brand.
            </p>
            <p className="text-gold-200 font-medium mt-4 lg:mt-2 lg:col-span-2 text-center">
              Replace this tagline with yours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
