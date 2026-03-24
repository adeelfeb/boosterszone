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
        // Boosters Zone — deep navy surfaces + warm amber accents
        forest: {
          950: '#050d18',
          900: '#0c1929',
          800: '#132f4c',
          700: '#1a3d5c',
          600: '#245078',
          500: '#2d6a8f',
          400: '#3b82a8',
          350: '#4a9bc4',
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
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
        heading: ['var(--font-heading)', 'Luxerie', 'Georgia', 'Cambria', 'serif'],
        subheading: ['var(--font-subheading)', 'Dragon-Serial', 'Georgia', 'Cambria', 'serif'],
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
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #fef3c7 0%, #fcd34d 45%, #f59e0b 100%)',
        'gradient-forest': 'linear-gradient(180deg, #050d18 0%, #0c1929 30%, #132f4c 55%, #0f2744 80%, #050d18 100%)',
        'gradient-forest-subtle-glow': 'radial-gradient(ellipse 80% 50% at 50% 15%, rgba(56,189,248,0.12) 0%, transparent 55%), linear-gradient(180deg, #050d18 0%, #0c1929 40%, #132f4c 85%, #0c1929 100%)',
        'gradient-forest-textured': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\"), radial-gradient(ellipse 80% 50% at 50% 15%, rgba(245,158,11,0.08) 0%, transparent 50%), linear-gradient(180deg, #050d18 0%, #0c1929 45%, #132f4c 100%)",
        'gradient-gold-subtle': 'linear-gradient(180deg, rgba(254,243,199,0.1) 0%, rgba(245,158,11,0.06) 100%)',
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