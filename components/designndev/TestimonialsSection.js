'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { siteAssets } from '../../lib/siteAssets'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Client A',
    role: 'Member',
    quote: 'Replace with a real testimonial when you have one. This slot shows how the carousel works on the home page.',
  },
  {
    name: 'Client B',
    role: 'Member',
    quote: 'Another placeholder quote — swap names and copy to match your organization.',
  },
  {
    name: 'Client C',
    role: 'Member',
    quote: 'Short, credible quotes work best here. You can add or remove entries in TestimonialsSection.js.',
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, 6000)
    return () => clearInterval(t)
  }, [total])

  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src={siteAssets.texture}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-slate-50/90" aria-hidden />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading font-heading text-4xl md:text-5xl font-medium text-amber-700 mb-12 md:mb-16 text-left normal-case"
        >
          <span className="text-slate-900">Reviews</span> From Clients
        </motion.h2>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-4"
            >
              <Quote className="w-12 h-12 md:w-14 md:h-14 text-amber-500/80 mb-4" strokeWidth={1.2} />
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl text-center">
                {testimonials[index].quote}
              </p>
              <p className="mt-6 text-slate-800 font-medium">
                — {testimonials[index].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={goPrev}
            className="p-2 rounded-full border border-amber-300 text-amber-700 hover:bg-amber-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === index ? 'bg-amber-600' : 'bg-amber-300 hover:bg-amber-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            className="p-2 rounded-full border border-amber-300 text-amber-700 hover:bg-amber-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
