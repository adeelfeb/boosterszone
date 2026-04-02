/** Game Day Energy defaults + local persistence for school color preview. */

export const SCHOOL_THEME_STORAGE_KEY = 'bz-school-theme-v1'

export const DEFAULT_THEME = {
  action: '#C62828',
  structural: '#1A237E',
  highlight: '#F9A825',
}

function clamp01(n) {
  return Math.min(255, Math.max(0, n))
}

/** Returns #rrggbb */
export function darkenHex(hex, amount = 0.12) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim())
  if (!m) return hex
  const r = clamp01(parseInt(m[1], 16) * (1 - amount))
  const g = clamp01(parseInt(m[2], 16) * (1 - amount))
  const b = clamp01(parseInt(m[3], 16) * (1 - amount))
  return `#${[r, g, b].map((x) => Math.round(x).toString(16).padStart(2, '0')).join('')}`
}

function hexToRgb(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim())
  if (!m) return null
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) }
}

export function applySchoolThemeToDocument(theme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  const action = theme.action || DEFAULT_THEME.action
  const structural = theme.structural || DEFAULT_THEME.structural
  const highlight = theme.highlight || DEFAULT_THEME.highlight

  root.style.setProperty('--fc-action', action)
  root.style.setProperty('--fc-action-dark', darkenHex(action, 0.14))
  root.style.setProperty('--fc-structural', structural)
  root.style.setProperty('--fc-structural-deep', darkenHex(structural, 0.12))
  root.style.setProperty('--fc-highlight', highlight)
  root.style.setProperty('--fc-highlight-dark', darkenHex(highlight, 0.22))
  const hi = hexToRgb(highlight)
  if (hi) {
    root.style.setProperty('--fc-highlight-soft', `rgba(${hi.r},${hi.g},${hi.b},0.22)`)
  }
}

export function readStoredTheme() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(SCHOOL_THEME_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (
      typeof parsed?.action === 'string' &&
      typeof parsed?.structural === 'string' &&
      typeof parsed?.highlight === 'string'
    ) {
      return parsed
    }
  } catch {
    /* ignore */
  }
  return null
}

export function writeStoredTheme(theme) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(SCHOOL_THEME_STORAGE_KEY, JSON.stringify(theme))
  } catch {
    /* ignore */
  }
}

export function clearStoredTheme() {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(SCHOOL_THEME_STORAGE_KEY)
  } catch {
    /* ignore */
  }
}
