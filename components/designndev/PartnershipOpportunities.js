'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Hexagon, Mic } from 'lucide-react'

const opportunities = [
  {
    title: 'Clear positioning',
    description:
      'Use this grid to highlight three or four reasons people choose you. Replace each title and paragraph with copy that fits your organization.',
    Icon: Calendar,
  },
  {
    title: 'Responsive support',
    description:
      'Draft placeholder: explain how you stay in touch with members or clients — response times, channels, or onboarding.',
    Icon: Users,
  },
  {
    title: 'Take the next step',
    description:
      'Draft placeholder: invite visitors to contact you or sign up. Point them to your contact page or member application flow.',
    Icon: Hexagon,
  },
  {
    title: 'Outcomes you care about',
    description:
      'Draft placeholder: summarize what success looks like for the people you serve, without naming specific brands or past projects unless you want to.',
    Icon: Mic,
  },
]

export default function PartnershipOpportunities() {
  return (
    <section className="py-16 md:py-24 section-divider-gold relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading font-heading text-4xl md:text-5xl font-medium text-amber-700 text-left mb-12 md:mb-16 normal-case"
        >
          <span className="text-slate-900">Highlights</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {opportunities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="fc-card p-6 md:p-8 flex flex-col"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-700 border border-amber-200">
                  <item.Icon className="w-6 h-6" />
                </div>
                <h3 className="font-subheading text-xl font-medium text-slate-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <svg className="w-6 h-6 text-amber-600/70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
