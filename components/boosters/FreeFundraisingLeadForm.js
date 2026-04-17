'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Loader2, ChevronRight } from 'lucide-react'
import { useRecaptcha } from '../../utils/useRecaptcha'
import { safeParseJsonResponse } from '../../utils/safeJsonResponse'

export default function FreeFundraisingLeadForm() {
  const { execute: executeRecaptcha, isAvailable: recaptchaAvailable } = useRecaptcha()
  const [formData, setFormData] = useState({ name: '', school: '', email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const recaptchaToken = recaptchaAvailable ? await executeRecaptcha() : null
    if (recaptchaAvailable && !recaptchaToken) {
      setSubmitStatus({ type: 'error', message: 'Security verification failed. Please refresh and try again.' })
      return
    }
    setIsSubmitting(true)
    setSubmitStatus(null)
    try {
      const school = formData.school.trim()
      const message = [
        "I'd like a free fundraising plan for our school.",
        school && `School / organization: ${school}`,
      ]
        .filter(Boolean)
        .join('\n')
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        telephone: '',
        message,
      }
      if (recaptchaToken) payload.recaptchaToken = recaptchaToken
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await safeParseJsonResponse(response)
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Thank you! We will email your plan soon.' })
        setFormData({ name: '', school: '', email: '' })
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' })
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldBase =
    'w-full min-w-0 px-4 sm:px-5 py-3.5 text-base leading-normal bg-white/95 border border-parchment-400/90 rounded-md text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-fc-action/35 focus:border-fc-action outline-none transition-all shadow-sm'
  const inputClass = `${fieldBase} min-h-[3rem]`
  const labelClass = 'block text-base font-medium text-stone-700 mb-2.5'

  return (
    <form onSubmit={handleSubmit} className="space-y-5 relative max-w-md mx-auto">
      {isSubmitting && (
        <div className="absolute inset-0 rounded-2xl bg-white/70 backdrop-blur-sm z-10 pointer-events-auto" aria-hidden />
      )}
      <div>
        <label htmlFor="lead-name" className={labelClass}>
          Your name *
        </label>
        <input
          type="text"
          id="lead-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
          className={inputClass}
          placeholder="e.g. Jane Smith"
        />
      </div>
      <div>
        <label htmlFor="lead-school" className={labelClass}>
          School or PTO *
        </label>
        <input
          type="text"
          id="lead-school"
          name="school"
          value={formData.school}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="e.g. Lincoln Elementary PTO"
        />
      </div>
      <div>
        <label htmlFor="lead-email" className={labelClass}>
          Work email *
        </label>
        <input
          type="email"
          id="lead-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          className={inputClass}
          placeholder="e.g. pto@schooldistrict.org"
        />
      </div>
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={!isSubmitting ? { scale: 1.01 } : {}}
        whileTap={!isSubmitting ? { scale: 0.99 } : {}}
        className="btn-fc-primary w-full py-3.5 px-6 text-base font-medium justify-center rounded-md flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed min-h-[3rem]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Get Your Free Fundraising Plan <ChevronRight className="w-4 h-4" />
          </>
        )}
      </motion.button>
      <p className="text-stone-500 font-subheading text-xs text-center m-0">
        We respond within one business day. No obligation.
      </p>
      <AnimatePresence mode="wait">
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`p-4 rounded-lg border ${
              submitStatus.type === 'success'
                ? 'bg-[var(--fc-highlight-soft)] text-fc-structural border-fc-highlight/35'
                : 'bg-red-50 text-red-800 border-red-200'
            }`}
          >
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
