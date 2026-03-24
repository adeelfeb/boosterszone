'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What is this project?',
    answer:
      'A Next.js draft with a marketing shell (home, about, team, services, FAQ, contact) plus member login, signup, and a dashboard area. Replace copy and assets with your own before production.',
  },
  {
    question: 'How do I change the site name and contact info?',
    answer:
      'Update the values exported from the site config module in the lib folder. Logo and favicon live under public; hero and section images use files under public/images or paths you configure in the site assets module.',
  },
  {
    question: 'How do members sign in?',
    answer:
      'Use the Login page linked from your navigation or bookmarks. After authentication, users are sent to the dashboard. Adjust redirects in the login flow if you need a different default landing page.',
  },
  {
    question: 'Can I remove sections from the home page?',
    answer:
      'Yes. Edit the home page component in the app folder and delete or reorder imports (hero, icon row, service grid, testimonials, contact block, and so on).',
  },
  {
    question: 'Is content in the FAQ legally binding?',
    answer:
      'No. Everything here is placeholder text for development. Replace with accurate information for your organization and have it reviewed as appropriate.',
  },
  {
    question: 'How do I get help with deployment?',
    answer:
      'Refer to your hosting provider’s Next.js guide and the deployment notes in this repository if present. Environment variables for the database and auth layer must be set in each environment.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <main className="relative min-h-screen bg-white">
      <TextureOverlay opacity={0.035} className="mix-blend-multiply" />
      <Navbar />
      <section className="relative min-h-[30vh] flex items-center justify-center pt-28 pb-16 bg-gradient-to-b from-amber-50/40 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-semibold text-amber-700 mb-6 normal-case">
            Frequently asked questions
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-subheading">
            Draft answers for developers and stakeholders. Replace with questions your real users ask.
          </p>
        </div>
      </section>
      <div className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="space-y-0">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index} className="py-6 border-b border-slate-200 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 text-left no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="font-subheading text-lg md:text-xl font-medium text-slate-800 pr-4">
                      {item.question}
                    </span>
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center text-amber-700 bg-amber-50 transition-colors rounded-none border border-amber-200">
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={2.5} aria-hidden />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2.5} aria-hidden />
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="pt-2 pb-2 text-slate-600 leading-relaxed font-subheading">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-12 text-slate-600 font-subheading">
            Still stuck?{' '}
            <Link href="/contact" className="text-amber-700 hover:text-amber-800 underline-offset-2 hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
