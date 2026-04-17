'use client'

import { motion } from 'framer-motion'
import LetsChatForm from './LetsChatForm'

function ConsultationHeading({ className = '', variant = 'default' }) {
  const isHome = variant === 'home'
  return (
    <div className={className}>
      <p className="text-stone-500 text-sm md:text-base uppercase tracking-wider font-subheading mb-4">
        {isHome ? 'Full request · sample page · phone · demo' : 'Free fundraising plan · sample page · demo'}
      </p>
      <h2 className="section-heading font-heading text-2xl sm:text-3xl md:text-4xl font-medium text-fc-structural mb-4 text-left normal-case leading-[1.15] break-words">
        {isHome ? (
          <>
            Need more detail? <span className="text-stone-900">We&apos;re here</span>
          </>
        ) : (
          <>
            Get a <span className="text-stone-900">free fundraising plan</span>
          </>
        )}
      </h2>
      <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-subheading max-w-2xl break-words">
        {isHome ? (
          <>
            Add a phone number, request a sample page, or book a 10-minute walkthrough—same form. Prefer the short version
            first? Use the three-field plan higher on this page.
          </>
        ) : (
          <>
            Tell us your school and town—request a written plan, a free sample page, or a 10-minute walkthrough. We reply
            within one business day.
          </>
        )}
      </p>
    </div>
  )
}

/**
 * Reusable Free Consultation block: left column (heading + copy) + right column (contact form).
 * Used on the home page (inside PartnershipFormSection) and on the contact page.
 */
export default function FreeConsultationSection({ animated = true, variant = 'default' }) {
  const content = (
    <>
      <ConsultationHeading
        variant={variant}
        className="text-left flex min-w-0 flex-col justify-center min-h-0 lg:col-span-5"
      />
      <div className="min-w-0 rounded-sm border border-parchment-300/90 p-6 sm:p-8 lg:p-10 fc-card flex flex-col min-h-0 shadow-bz-card lg:col-span-7">
        <LetsChatForm />
      </div>
    </>
  )

  if (!animated) {
    return (
      <section className="grid min-w-0 grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-stretch">
        {content}
      </section>
    )
  }

  return (
    <div className="grid min-w-0 grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-stretch">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left flex min-w-0 flex-col justify-center min-h-0 lg:col-span-5"
      >
        <ConsultationHeading variant={variant} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="min-w-0 rounded-sm border border-parchment-300/90 p-6 sm:p-8 lg:p-10 fc-card flex flex-col min-h-0 shadow-bz-card lg:col-span-7"
      >
        <LetsChatForm />
      </motion.div>
    </div>
  )
}
