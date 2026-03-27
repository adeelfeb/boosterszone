import Image from 'next/image'
import { marketingImages } from '../../lib/marketingImages'

const IMAGE_KEYS = {
  fundraising: 'pageFundraising',
  books: 'pageBooks',
  about: 'pageAbout',
  contact: 'pageContact',
  faq: 'pageFaq',
  team: 'pageTeam',
}

/**
 * Split hero for inner marketing pages: headline + supporting copy + featured image.
 */
export default function MarketingPageHero({
  title,
  subtitle,
  imageKey = 'fundraising',
  eyebrow,
  imageAlt = '',
  children,
}) {
  const key = IMAGE_KEYS[imageKey] || 'pageFundraising'
  const src = marketingImages[key]

  return (
    <section className="relative border-b border-parchment-300/60 bg-gradient-to-b from-parchment-100/95 via-amber-50/40 to-parchment-50/90 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 max-w-xl h-full opacity-[0.07] pointer-events-none bg-[url('/images/bz-texture.svg')] bg-repeat mix-blend-multiply" style={{ backgroundSize: '240px' }} aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 md:pb-16 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="min-w-0 lg:col-span-6 xl:col-span-5">
            {eyebrow && (
              <p className="text-amber-800 font-subheading text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">
                {eyebrow}
              </p>
            )}
            <h1 className="section-heading font-heading text-4xl sm:text-5xl md:text-[2.75rem] font-semibold text-amber-900 mb-5 normal-case leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-stone-600 text-lg md:text-xl font-subheading leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}
            {children}
          </div>
          <div className="min-w-0 lg:col-span-6 xl:col-span-7">
            <div className="relative aspect-[16/11] sm:aspect-[5/3] w-full max-w-2xl lg:max-w-none mx-auto rounded-md overflow-hidden shadow-bz-card border border-parchment-300/80 bg-parchment-200">
              <Image
                src={src}
                alt={imageAlt || `${title} — Boosters Zone`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
