/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Fluid, clamped typography: make all Tailwind text-* utilities scale smoothly
    // across viewport sizes without affecting spacing (which remains rem-based).
    fontSize: {
      xs: ['clamp(0.72rem, 0.68rem + 0.20vw, 0.80rem)', { lineHeight: '1rem' }],
      sm: ['clamp(0.84rem, 0.80rem + 0.25vw, 0.95rem)', { lineHeight: '1.25rem' }],
      base: ['clamp(0.95rem, 0.90rem + 0.30vw, 1.10rem)', { lineHeight: '1.5rem' }],
      lg: ['clamp(1.05rem, 1.00rem + 0.35vw, 1.25rem)', { lineHeight: '1.75rem' }],
      xl: ['clamp(1.20rem, 1.10rem + 0.50vw, 1.40rem)', { lineHeight: '1.75rem' }],
      '2xl': ['clamp(1.45rem, 1.25rem + 0.70vw, 1.75rem)', { lineHeight: '2rem' }],
      '3xl': ['clamp(1.75rem, 1.45rem + 1.20vw, 2.20rem)', { lineHeight: '2.25rem' }],
      '4xl': ['clamp(2.10rem, 1.70rem + 1.80vw, 2.60rem)', { lineHeight: '2.5rem' }],
      '5xl': ['clamp(2.60rem, 2.20rem + 2.80vw, 3.20rem)', { lineHeight: '1' }],
      '6xl': ['clamp(3.10rem, 2.70rem + 3.50vw, 3.80rem)', { lineHeight: '1' }],
      '7xl': ['clamp(3.70rem, 3.10rem + 4.20vw, 4.60rem)', { lineHeight: '1' }],
      '8xl': ['clamp(5.00rem, 4.20rem + 6.00vw, 6.00rem)', { lineHeight: '1' }],
      '9xl': ['clamp(6.50rem, 5.00rem + 9.00vw, 8.00rem)', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        'btf-dark': '#0a2239',
        'btf-light': '#e0f7fa',
        'btf-accent': '#199383',
      },
    },
  },
  plugins: [],
}