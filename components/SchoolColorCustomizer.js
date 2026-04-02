'use client'

import { useCallback, useEffect, useId, useState } from 'react'
import {
  applySchoolThemeToDocument,
  clearStoredTheme,
  DEFAULT_THEME,
  readStoredTheme,
  writeStoredTheme,
} from '../lib/schoolTheme'

export default function SchoolColorCustomizer() {
  const baseId = useId()
  const [open, setOpen] = useState(false)
  const [action, setAction] = useState(DEFAULT_THEME.action)
  const [structural, setStructural] = useState(DEFAULT_THEME.structural)
  const [highlight, setHighlight] = useState(DEFAULT_THEME.highlight)

  useEffect(() => {
    const stored = readStoredTheme()
    if (stored) {
      setAction(stored.action)
      setStructural(stored.structural)
      setHighlight(stored.highlight)
    }
  }, [])

  const persist = useCallback((next) => {
    applySchoolThemeToDocument(next)
    writeStoredTheme(next)
  }, [])

  const handleChange = (field, value) => {
    const next = { action, structural, highlight, [field]: value }
    if (field === 'action') setAction(value)
    if (field === 'structural') setStructural(value)
    if (field === 'highlight') setHighlight(value)
    persist(next)
  }

  const handleReset = () => {
    setAction(DEFAULT_THEME.action)
    setStructural(DEFAULT_THEME.structural)
    setHighlight(DEFAULT_THEME.highlight)
    clearStoredTheme()
    applySchoolThemeToDocument(DEFAULT_THEME)
  }

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end gap-2">
      {open && (
        <div
          className="w-[min(100vw-2rem,20rem)] rounded-lg border border-neutral-200 bg-white/95 p-4 shadow-bz-card backdrop-blur-md"
          role="dialog"
          aria-labelledby={`${baseId}-title`}
        >
          <h2 id={`${baseId}-title`} className="font-heading text-base text-fc-structural mb-1">
            Preview your school colors
          </h2>
          <p className="text-xs text-stone-600 font-subheading mb-4 leading-relaxed">
            Applies on this device only. Primary = buttons &amp; key links. Secondary = headers &amp; nav. Accent = badges
            &amp; highlights.
          </p>
          <div className="space-y-3">
            <label className="flex items-center justify-between gap-3 text-sm font-subheading text-stone-700">
              <span>Primary (actions)</span>
              <input
                type="color"
                value={action}
                onChange={(e) => handleChange('action', e.target.value)}
                className="h-9 w-14 cursor-pointer rounded border border-neutral-300 bg-white p-0.5"
                aria-label="Primary action color"
              />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm font-subheading text-stone-700">
              <span>Secondary (structure)</span>
              <input
                type="color"
                value={structural}
                onChange={(e) => handleChange('structural', e.target.value)}
                className="h-9 w-14 cursor-pointer rounded border border-neutral-300 bg-white p-0.5"
                aria-label="Secondary structural color"
              />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm font-subheading text-stone-700">
              <span>Accent (highlights)</span>
              <input
                type="color"
                value={highlight}
                onChange={(e) => handleChange('highlight', e.target.value)}
                className="h-9 w-14 cursor-pointer rounded border border-neutral-300 bg-white p-0.5"
                aria-label="Accent highlight color"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="mt-4 w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm font-heading text-stone-800 hover:bg-neutral-100 transition-colors"
          >
            Reset to Boosters Zone colors
          </button>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="rounded-full border-2 border-fc-structural bg-fc-structural px-4 py-2.5 text-sm font-heading text-white shadow-bz-soft hover:brightness-110 transition-all"
        aria-expanded={open}
      >
        {open ? 'Close' : 'School colors'}
      </button>
    </div>
  )
}
