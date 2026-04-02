'use client'

import { useEffect } from 'react'
import { applySchoolThemeToDocument, readStoredTheme, DEFAULT_THEME } from '../lib/schoolTheme'

export default function SchoolThemeProvider({ children }) {
  useEffect(() => {
    const stored = readStoredTheme()
    applySchoolThemeToDocument(stored || DEFAULT_THEME)
  }, [])

  return children
}
