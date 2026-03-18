/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // ── Primary Palette (Brand Guidelines v2) ──
        ink:   '#0E0F0D',          // Primary text, dark backgrounds, mark
        teal:  {
          DEFAULT: '#0A8A7A',      // Envitect Teal — brand accent, CTAs
          deep:    '#065A4F',      // Dark mode accent
          pale:    '#D6EFEC',      // Tints, highlights
        },
        paper: '#F5F2EB',          // Page background, warmth
        // ── Secondary Palette ──
        gold:  {
          DEFAULT: '#F0C96B',      // Premium accents, logo lock point
          pale:    '#FDF3D6',
        },
        slate: '#3A4050',          // Body text, secondary info
        mist:  '#E8E4DC',          // Subtle borders, dividers
        // ── Legacy aliases ──
        navy:     '#0E0F0D',
        charcoal: '#3A4050',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body:    ['Barlow Condensed', 'sans-serif'],
        serif:   ['Cormorant Garamond', 'serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      animation: {
        'float':     'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up':   'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        float:  { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      backgroundImage: {
        'blueprint-grid': "linear-gradient(rgba(14,15,13,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,15,13,0.06) 1px, transparent 1px)",
        'blueprint-teal': "linear-gradient(rgba(10,138,122,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(10,138,122,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'blueprint': '40px 40px',
      },
    },
  },
  plugins: [],
}
