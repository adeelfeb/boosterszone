'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteAssets } from '../../lib/siteAssets'
import { siteName, contact } from '../../lib/siteConfig'

const products = [
  { label: 'How fundraising works', href: '/fundraising' },
  { label: 'Books & products', href: '/books' },
  { label: 'Free fundraising plan', href: '/contact#free-fundraising-plan' },
]

/** Matches pre–slim-header navbar logo scale (footer stays slightly more prominent than header) */
const FOOTER_LOGO_CLASS =
  'h-8 w-auto sm:h-8 md:h-9 lg:h-9 xl:h-10 object-contain'

function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (honeypot) return
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), website_url: honeypot }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setMessage(data.message || 'Something went wrong. Please try again.')
        return
      }
      setStatus('success')
      setMessage(data.message || 'Thanks for subscribing.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="mt-5 max-w-sm">
      <p className="font-subheading text-xs tracking-wide text-stone-500 uppercase mb-2">
        Stay in the loop
      </p>
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status !== 'loading') {
              setStatus('idle')
              setMessage('')
            }
          }}
          placeholder="Your email"
          disabled={status === 'loading'}
          className="flex-1 min-w-0 rounded-lg border border-parchment-400/80 bg-white/90 px-3 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-fc-action focus:outline-none focus:ring-1 focus:ring-fc-action/30 font-subheading shadow-sm"
        />
        <input
          type="text"
          name="website_url"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-px w-px opacity-0"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-fc-primary shrink-0 rounded-lg px-4 py-2.5 text-sm font-heading transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? '…' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p
          className={`mt-2 text-xs font-subheading ${status === 'error' ? 'text-red-600' : 'text-fc-highlight-dark'}`}
          role="status"
        >
          {message}
        </p>
      )}
    </div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative text-stone-700 border-t-[3px] border-fc-structural/25 bg-gradient-to-b from-parchment-100/98 via-parchment-200/85 to-fc-structural/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
      <section className="py-8 md:py-10">
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 lg:justify-between lg:items-start">
            {/* Logo + email capture */}
            <div className="max-w-md shrink-0">
              <Link href="/" className="inline-flex items-center leading-none no-underline hover:opacity-90 transition-opacity text-stone-800">
                <Image
                  src={siteAssets.logo}
                  alt={siteName}
                  width={200}
                  height={44}
                  className={FOOTER_LOGO_CLASS}
                />
              </Link>
              <FooterNewsletter />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10 flex-1 lg:max-w-3xl">
              {/* Menu */}
              <div>
                <h4 className="font-subheading font-medium text-stone-600 text-xs tracking-wide uppercase mb-3">Menu</h4>
                <ul className="space-y-2 text-sm font-subheading">
                  <li><Link href="/" className="text-stone-700 hover:text-fc-action transition-colors no-underline">Home</Link></li>
                  <li><Link href="/fundraising" className="text-stone-700 hover:text-fc-action transition-colors no-underline">Fundraising</Link></li>
                  <li><Link href="/books" className="text-stone-700 hover:text-fc-action transition-colors no-underline">Books</Link></li>
                  <li><Link href="/about" className="text-stone-700 hover:text-fc-action transition-colors no-underline">About</Link></li>
                  <li><Link href="/contact" className="text-stone-700 hover:text-fc-action transition-colors no-underline">Contact</Link></li>
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h4 className="font-subheading font-medium text-stone-600 text-xs tracking-wide uppercase mb-3">Programs</h4>
                <ul className="space-y-2 text-sm font-subheading">
                  {products.map((s) => (
                    <li key={s.label}>
                      <Link href={s.href} className="text-stone-700 hover:text-fc-action transition-colors no-underline">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get in touch */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-subheading font-medium text-stone-600 text-xs tracking-wide uppercase mb-3">Get in touch</h4>
                <ul className="space-y-2 text-sm font-subheading">
                  <li>
                    <a href={`mailto:${contact.email}`} className="text-stone-700 hover:text-fc-action transition-colors no-underline">
                      {contact.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${contact.phoneTel}`} className="text-stone-700 hover:text-fc-action transition-colors no-underline">
                      {contact.phoneDisplay}
                    </a>
                  </li>
                  <li className="text-stone-600">{contact.location}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 md:py-4 border-t border-parchment-400/50 bg-stone-900/[0.04]">
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10">
          <p className="text-center text-stone-500 text-xs font-subheading">
            © {currentYear} {siteName}. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  )
}
