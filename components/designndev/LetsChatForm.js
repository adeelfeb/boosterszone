'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Loader2, ChevronRight } from 'lucide-react'
import { useRecaptcha } from '../../utils/useRecaptcha'
import { safeParseJsonResponse } from '../../utils/safeJsonResponse'

export default function LetsChatForm() {
  const { execute: executeRecaptcha, isAvailable: recaptchaAvailable } = useRecaptcha()
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    telephone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const raw = window.location.hash.replace(/^#/, '')
    const prefills = {
      'sample-page': "I'd like a free sample page for our school (school name + town).",
      'free-fundraising-plan': "I'd like a free fundraising plan for our school.",
      'book-demo': "I'd like to book a 10-minute demo.",
      'request-info': "I'd like more information about fundraising with Boosters Zone (school/org name + town).",
    }
    const text = prefills[raw]
    if (!text) return
    setFormData((prev) => {
      if (prev.message.trim()) return prev
      return { ...prev, message: text }
    })
  }, [])

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
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        telephone: formData.telephone.trim(),
        message: formData.message.trim(),
      }
      if (recaptchaToken) payload.recaptchaToken = recaptchaToken
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await safeParseJsonResponse(response)
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Thank you! We will get back to you soon.' })
        setFormData({ email: '', name: '', telephone: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' })
      }
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldBase =
    'w-full min-w-0 px-4 sm:px-5 py-3.5 text-base leading-normal bg-white/95 border border-parchment-400/90 rounded-md text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-fc-action/35 focus:border-fc-action outline-none transition-all shadow-sm'
  const inputClass = `${fieldBase} min-h-[3rem]`
  const textareaClass = `${fieldBase} min-h-[10rem] resize-y py-4`
  const labelClass = 'block text-base font-medium text-stone-700 mb-2.5'

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6 relative">
        {isSubmitting && (
          <div className="absolute inset-0 rounded-2xl bg-white/70 backdrop-blur-sm z-10 pointer-events-auto" aria-hidden />
        )}
        <div>
          <label htmlFor="letschat-email" className={labelClass}>Email Address *</label>
          <input
            type="email"
            id="letschat-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Example: info@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="letschat-name" className={labelClass}>Full Name *</label>
          <input
            type="text"
            id="letschat-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Example: John Doe"
          />
        </div>
        <div>
          <label htmlFor="letschat-telephone" className={labelClass}>Telephone *</label>
          <input
            type="tel"
            id="letschat-telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="+43 232 232 56"
          />
        </div>
        <div>
          <label htmlFor="letschat-message" className={labelClass}>Message *</label>
          <textarea
            id="letschat-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={textareaClass}
            placeholder="Type additional information which will help us to contact you."
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
            <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
          ) : (
            <>Send Request <ChevronRight className="w-4 h-4" /></>
          )}
        </motion.button>
        <AnimatePresence mode="wait">
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`p-4 rounded-lg border ${submitStatus.type === 'success' ? 'bg-[var(--fc-highlight-soft)] text-fc-structural border-fc-highlight/35' : 'bg-red-50 text-red-800 border-red-200'}`}
            >
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}
