'use client'

import FreeConsultationSection from './FreeConsultationSection'

/**
 * Home page contact/form section. Uses the shared FreeConsultationSection.
 */
export default function PartnershipFormSection() {
  return (
    <section
      id="request-info"
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-parchment-200/65 via-parchment-100/90 to-parchment-50 border-t border-parchment-300/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] scroll-mt-28"
    >
      <div id="free-fundraising-plan" className="h-0 w-full scroll-mt-28 overflow-hidden" aria-hidden />
      <div id="sample-page" className="h-0 w-full scroll-mt-28 overflow-hidden" aria-hidden />
      <div id="book-demo" className="h-0 w-full scroll-mt-28 overflow-hidden" aria-hidden />
      <div className="relative max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
        <FreeConsultationSection animated variant="home" />
      </div>
    </section>
  )
}
