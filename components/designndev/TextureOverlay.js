'use client'

import { siteAssets } from '../../lib/siteAssets'

/**
 * Same texture as contact page form section – use on all pages/sections for consistent background.
 * Place inside a relative container (e.g. main or page wrapper).
 */
export default function TextureOverlay({ opacity = 0.08, className = '' }) {
  return (
    <div
      className={`absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none ${className}`}
      style={{
        backgroundImage: `url(${siteAssets.texture})`,
        opacity,
      }}
      aria-hidden
    />
  )
}
