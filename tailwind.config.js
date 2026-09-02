/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '.dark'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      // `tablet` (≤1020px) and `mobile` (≤740px) both use max-width, so they
      // overlap at narrow viewports — a 375px screen matches both. Tailwind
      // emits variants in this object's key order, and CSS gives the *later*
      // rule the win when specificity is equal, so `mobile` MUST be declared
      // after `tablet` or `mobile:` overrides get silently beaten by
      // `tablet:` on every element that sets both for the same property.
      tablet: { max: '1020px' },
      mobile: { max: '740px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        carbon: '#0C1322',
        'carbon-2': '#111B2E',
        'carbon-3': '#16243C',
        porcelain: '#FAFAFD',
        paper: '#FFFFFF',
        ink: '#101826',
        muted: '#5B6472',
        'muted-2': '#8B93A1',
        bronze: '#5646E5',
        silver: '#98A6B3',
        gold: '#6D5CFF',
        'gold-2': '#9F8BFF',
        signal: '#4CC3FF',
        'signal-deep': '#1E8FD5',
        line: 'rgba(16,24,38,.10)',
        'line-dark': 'rgba(255,255,255,.10)',
      },
      fontFamily: {
        display: ['var(--font-sora)', 'sans-serif'],
        body: ['var(--font-figtree)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '18px',
        sm: '12px',
      },
      boxShadow: {
        card: '0 18px 50px -18px rgba(12,19,34,.22)',
        dd: '0 30px 60px -20px rgba(16,24,38,.25)',
        arch: '0 40px 80px -34px rgba(16,24,38,.45)',
      },
      maxWidth: {
        wrap: '1180px',
      },
      backgroundImage: {
        molten: 'linear-gradient(110deg,#5646E5 0%,#6D5CFF 48%,#38BDF8 115%)',
      },
      // `pulse2`/`flow` keyframes are defined as plain @keyframes in globals.css
      // (used via literal `animation:` properties, not animate-* utilities),
      // so they don't need to be declared here too.
    },
  },
  plugins: [],
};
