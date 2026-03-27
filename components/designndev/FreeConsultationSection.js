'use client'

import { motion } from 'framer-motion'
import LetsChatForm from './LetsChatForm'

/**
 * Reusable Free Consultation block: left column (heading + copy) + right column (contact form).
 * Used on the home page (inside PartnershipFormSection) and on the contact page.
 */
export default function FreeConsultationSection({ animated = true }) {
  const content = (
    <>
      <div className="text-left flex flex-col justify-center min-h-0">
        <p className="text-stone-500 text-sm md:text-base uppercase tracking-wider font-subheading mb-4">
          Free plan · sample page · demo
        </p>
        <h2 className="section-heading font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-amber-900 mb-6 text-left normal-case leading-tight">
          <span className="text-stone-900">Tell us</span> about your school
        </h2>
        <p className="text-stone-600 text-xl md:text-2xl leading-relaxed font-subheading max-w-lg">
          Request a fundraising plan, a free sample page for your school name and town, or a 10-minute walkthrough—we
          reply within one business day.
        </p>
      </div>
      <div className="rounded-sm border border-parchment-300/90 p-6 md:p-8 fc-card flex flex-col min-h-0 shadow-bz-card">
        <LetsChatForm />
      </div>
    </>
  )

  if (!animated) {
    return (
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        {content}
      </section>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left flex flex-col justify-center min-h-0"
      >
        <p className="text-stone-500 text-sm md:text-base uppercase tracking-wider font-subheading mb-4">
          Free plan · sample page · demo
        </p>
        <h2 className="section-heading font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-amber-900 mb-6 text-left normal-case leading-tight">
          <span className="text-stone-900">Tell us</span> about your school
        </h2>
        <p className="text-stone-600 text-xl md:text-2xl leading-relaxed font-subheading max-w-lg">
          Request a fundraising plan, a free sample page for your school name and town, or a 10-minute walkthrough—we
          reply within one business day.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="rounded-sm border border-parchment-300/90 p-6 md:p-8 fc-card flex flex-col min-h-0 shadow-bz-card"
      >
        <LetsChatForm />
      </motion.div>
    </div>
  )
}
