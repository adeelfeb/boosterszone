'use client'

import { useState } from 'react'
import Link from 'next/link'
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

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12">
        <div className="lg:col-span-5">
          <div className="sticky top-28 space-y-6">
            <h2 className="font-heading text-2xl text-fc-structural">Browse topics</h2>
            <p className="text-stone-600 font-subheading text-lg leading-relaxed m-0">
              Quick answers about using this template and rolling out your own content. Replace with real FAQs when you
              launch.
            </p>
            <p className="text-stone-600 font-subheading m-0">
              Still stuck?{' '}
              <Link href="/contact" className="text-fc-action hover:text-fc-action-dark underline-offset-2 hover:underline font-medium">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="fc-card border border-parchment-300/80 shadow-bz-soft divide-y divide-parchment-200/80 overflow-hidden">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index} className="px-5 sm:px-6 py-1">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 text-left py-5 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-fc-highlight/50 rounded-sm"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="font-subheading text-lg md:text-xl font-medium text-stone-800 pr-4">
                      {item.question}
                    </span>
                    <span className="shrink-0 w-9 h-9 flex items-center justify-center text-fc-structural bg-[var(--fc-highlight-soft)] border border-fc-highlight/35">
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
                    <p className="pt-0 pb-5 text-stone-600 leading-relaxed font-subheading text-base border-t border-transparent">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
