'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRecaptcha } from '../../utils/useRecaptcha'
import { safeParseJsonResponse } from '../../utils/safeJsonResponse'

export default function LetsChatForm() {
  const { execute: executeRecaptcha, isAvailable: recaptchaAvailable } = useRecaptcha()
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    message: '',
    consentTransactional: false,
    consentMarketing: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
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
      const payload = { name: formData.name.trim(), email: formData.email.trim() }
      if (recaptchaToken) payload.recaptchaToken = recaptchaToken
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await safeParseJsonResponse(response)
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Thank you! We will get back to you soon.' })
        setFormData({ name: '', businessName: '', email: '', phone: '', message: '', consentTransactional: false, consentMarketing: false })
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' })
      }
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = 'w-full px-4 py-3 bg-forest-700/80 border border-forest-600 rounded-lg text-gold-100 placeholder-gold-200/40 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition-all'
  const labelClass = 'block text-sm font-medium text-gold-200/90 mb-2'

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5 relative">
        {isSubmitting && (
          <div className="absolute inset-0 rounded-2xl bg-forest-800/60 backdrop-blur-sm z-10 pointer-events-auto" aria-hidden />
        )}
        <div>
          <label htmlFor="letschat-name" className={labelClass}>Name</label>
          <input type="text" id="letschat-name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="letschat-business" className={labelClass}>Business Name</label>
          <input type="text" id="letschat-business" name="businessName" value={formData.businessName} onChange={handleChange} className={inputClass} placeholder="Company or brand" />
        </div>
        <div>
          <label htmlFor="letschat-email" className={labelClass}>Email Address</label>
          <input type="email" id="letschat-email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="letschat-phone" className={labelClass}>Phone Number</label>
          <input type="tel" id="letschat-phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+1 (555) 000-0000" />
        </div>
        <div>
          <label htmlFor="letschat-message" className={labelClass}>Message</label>
          <textarea id="letschat-message" name="message" value={formData.message} onChange={handleChange} rows={4} className={`${inputClass} resize-y min-h-[100px]`} placeholder="Your message..." />
        </div>
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" name="consentTransactional" checked={formData.consentTransactional} onChange={handleChange} className="mt-1 rounded border-forest-600 bg-forest-700 text-gold-500 focus:ring-gold-500/50" />
            <span className="text-gold-100/80 text-sm">
              I consent to transactional messages (e.g. appointment reminders, order confirmations). Message &amp; data rates may apply. Reply HELP for help or STOP to opt-out.
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" name="consentMarketing" checked={formData.consentMarketing} onChange={handleChange} className="mt-1 rounded border-forest-600 bg-forest-700 text-gold-500 focus:ring-gold-500/50" />
            <span className="text-gold-100/80 text-sm">
              I consent to marketing messages (offers, updates). Message &amp; data rates may apply. Reply HELP for help or STOP to opt-out.
            </span>
          </label>
        </div>
        <p className="text-gold-100/60 text-xs">
          <Link href="/privacy-policy" className="text-gold-400/80 hover:text-gold-400 no-underline">Terms &amp; Conditions</Link>
          {' · '}
          <Link href="/privacy-policy" className="text-gold-400/80 hover:text-gold-400 no-underline">Privacy Policy</Link>
        </p>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.01 } : {}}
          whileTap={!isSubmitting ? { scale: 0.99 } : {}}
          className="w-full py-4 px-6 font-semibold text-forest-950 bg-gold-500 border border-gold-500 rounded-lg hover:bg-gold-400 hover:border-gold-400 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-fc-gold"
        >
          {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Submitting…</> : 'Submit'}
        </motion.button>
        <AnimatePresence mode="wait">
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`p-4 rounded-lg border ${submitStatus.type === 'success' ? 'bg-gold-400/10 text-gold-200 border-gold-500/30' : 'bg-red-900/20 text-red-200 border-red-700/50'}`}
            >
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}
