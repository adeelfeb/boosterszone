'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
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

  const inputClass = 'w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-500 outline-none transition-all'
  const labelClass = 'block text-sm font-medium text-slate-700 mb-2'

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5 relative">
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
            rows={4}
            className={`${inputClass} resize-y min-h-[100px]`}
            placeholder="Type additional information which will help us to contact you."
          />
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.01 } : {}}
          whileTap={!isSubmitting ? { scale: 0.99 } : {}}
          className="w-full py-2.5 px-4 text-sm font-medium text-slate-900 bg-amber-500 border border-amber-600 rounded-lg hover:bg-amber-400 hover:border-amber-500 transition-all flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed shadow-fc-gold"
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
              className={`p-4 rounded-lg border ${submitStatus.type === 'success' ? 'bg-amber-50 text-amber-900 border-amber-200' : 'bg-red-50 text-red-800 border-red-200'}`}
            >
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}
