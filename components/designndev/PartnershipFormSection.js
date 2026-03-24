'use client'

import FreeConsultationSection from './FreeConsultationSection'

/**
 * Home page contact/form section. Uses the shared FreeConsultationSection.
 */
export default function PartnershipFormSection() {
  return (
    <section id="free-fundraising-plan" className="py-16 md:py-24 relative overflow-hidden scroll-mt-28 bg-gradient-to-b from-parchment-200/65 via-parchment-100/90 to-parchment-50 border-t border-parchment-300/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FreeConsultationSection animated />
      </div>
    </section>
  )
}
