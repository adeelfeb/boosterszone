'use client'

import FreeConsultationSection from './FreeConsultationSection'

/**
 * Home page contact/form section. Uses the shared FreeConsultationSection.
 */
export default function PartnershipFormSection() {
  return (
    <section id="free-fundraising-plan" className="py-16 md:py-24 relative overflow-hidden scroll-mt-28">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FreeConsultationSection animated />
      </div>
    </section>
  )
}
