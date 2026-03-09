'use client'

import Image from 'next/image'
import Link from 'next/link'
import { foundersClubImages } from '../../lib/foundersClubImages'

const services = [
  { label: 'Wills & Estates', href: '#practice-areas' },
  { label: 'Corporate Law', href: '#practice-areas' },
  { label: 'Real Estate Law', href: '#practice-areas' },
  { label: 'Immigration Law', href: '#practice-areas' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-100 text-neutral-700 border-t border-neutral-300">
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            {/* Logo only */}
            <div className="md:col-span-5 lg:col-span-4">
              <Link href="/" className="inline-flex items-center no-underline hover:opacity-90 transition-opacity">
                <Image
                  src={foundersClubImages.logo}
                  alt="Sahail Law"
                  width={140}
                  height={46}
                  className="h-10 w-auto md:h-11 object-contain"
                />
              </Link>
            </div>

            {/* Menu / Services */}
            <div className="md:col-span-4 lg:col-span-4">
              <h4 className="font-medium text-neutral-900 text-sm tracking-wide mb-4">Menu</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/about-us" className="text-neutral-600 hover:text-neutral-900 transition-colors no-underline">About Us</Link></li>
                <li><Link href="#practice-areas" className="text-neutral-600 hover:text-neutral-900 transition-colors no-underline">Services</Link></li>
                <li><Link href="/contact" className="text-neutral-600 hover:text-neutral-900 transition-colors no-underline">Team</Link></li>
                <li><Link href="/contact" className="text-neutral-600 hover:text-neutral-900 transition-colors no-underline">Contact Us</Link></li>
              </ul>
              <h4 className="font-medium text-neutral-900 text-sm tracking-wide mt-6 mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                {services.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} className="text-neutral-600 hover:text-neutral-900 transition-colors no-underline">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in touch */}
            <div className="md:col-span-3 lg:col-span-4">
              <h4 className="font-medium text-neutral-900 text-sm tracking-wide mb-4">Get in touch</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:info@sahailaw.ca" className="text-neutral-600 hover:text-neutral-900 transition-colors no-underline">
                    info@sahailaw.ca
                  </a>
                </li>
                <li>
                  <a href="tel:+14374515551" className="text-neutral-600 hover:text-neutral-900 transition-colors no-underline">
                    +1 437-451-5551
                  </a>
                </li>
                <li className="text-neutral-600">Ontario, Canada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 border-t border-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-neutral-500 text-sm">
            © {currentYear} Sahail Law. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  )
}
