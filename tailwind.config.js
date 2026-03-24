/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Light UI surfaces (legacy name "forest" — white / cool gray)
        forest: {
          950: '#ffffff',
          900: '#f8fafc',
          800: '#f1f5f9',
          700: '#e2e8f0',
          600: '#cbd5e1',
          500: '#94a3b8',
          400: '#64748b',
          350: '#475569',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        /* Warm editorial surfaces (Boosters Zone) */
        parchment: {
          50: '#fdfbf7',
          100: '#f7f2ea',
          200: '#ebe4d8',
          300: '#ddd4c6',
          400: '#c9bdae',
          500: '#a89886',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Source Sans 3', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Source Serif 4', 'Georgia', 'Cambria', 'serif'],
        heading: ['var(--font-serif)', 'Source Serif 4', 'Georgia', 'Cambria', 'serif'],
        subheading: ['var(--font-sans)', 'Source Sans 3', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'fc': '0.5rem',
        'fc-lg': '0.75rem',
        'fc-xl': '1rem',
      },
      boxShadow: {
        'fc-gold': '0 1px 3px rgba(212, 175, 55, 0.2)',
        'fc-gold-md': '0 4px 16px rgba(212, 175, 55, 0.28)',
        'fc-gold-lg': '0 6px 24px rgba(201, 162, 39, 0.25)',
        'bz-card':
          '0 1px 0 rgba(255, 255, 255, 0.65) inset, 0 1px 2px rgba(45, 40, 35, 0.06), 0 16px 48px -20px rgba(45, 40, 35, 0.14)',
        'bz-soft': '0 4px 24px -8px rgba(45, 40, 35, 0.12), 0 2px 8px -4px rgba(45, 40, 35, 0.06)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #fef3c7 0%, #fcd34d 45%, #f59e0b 100%)',
        'gradient-forest': 'linear-gradient(180deg, #ffffff 0%, #f8fafc 45%, #fffbeb 100%)',
        'gradient-forest-subtle-glow': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,158,11,0.12) 0%, transparent 55%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        'gradient-forest-textured': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\"), radial-gradient(ellipse 70% 45% at 50% 10%, rgba(251,191,36,0.15) 0%, transparent 50%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        'gradient-gold-subtle': 'linear-gradient(180deg, rgba(255,251,235,0.9) 0%, rgba(254,243,199,0.35) 100%)',
        'gradient-bz-page':
          'radial-gradient(ellipse 120% 80% at 10% -20%, rgba(251, 191, 36, 0.18) 0%, transparent 50%), radial-gradient(ellipse 90% 60% at 100% 0%, rgba(125, 211, 252, 0.12) 0%, transparent 45%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(180, 83, 9, 0.06) 0%, transparent 55%), linear-gradient(180deg, #f7f2ea 0%, #fdfbf7 38%, #f3eee6 100%)',
        'gradient-bz-hero':
          'radial-gradient(ellipse 85% 70% at 12% 28%, rgba(251, 191, 36, 0.35) 0%, transparent 52%), radial-gradient(ellipse 60% 50% at 92% 18%, rgba(147, 197, 253, 0.2) 0%, transparent 48%), linear-gradient(165deg, #fff9f0 0%, #fdfbf7 45%, #f0ebe3 100%)',
        'footer-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='24' viewBox='0 0 56 24'%3E%3Cpath fill='%23D4AF37' fill-opacity='0.12' fill-rule='evenodd' d='M0 8h8V4h8V0h8v4h8v4h8v8h-8v4h-8v4h-8v-4H8v-4H0V8zm16 0v4h8V8h-8zm16 4v4h8v-4h-8z'/%3E%3C/svg%3E\")",
        'noise-subtle': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      backgroundRepeat: {
        'forest-textured-rep': 'repeat, no-repeat, no-repeat',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s ease-in-out infinite',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'pulse-soft': 'pulse 1.5s ease-in-out infinite',
      },
      backgroundSize: {
        'shimmer': '200% 100%',
        'texture': 'auto',
        'forest-textured-size': '256px 256px, 100% 100%, cover',
      },
    },
  },
  plugins: [],
}