/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        kh: {
          bg: 'var(--color-bg)',
          paper: 'var(--color-paper)',
          surface: 'var(--color-surface)',
          ink: 'var(--color-ink)',
          'ink-secondary': 'var(--color-ink-secondary)',
          'ink-muted': 'var(--color-ink-muted)',
          border: 'var(--color-border)',
          accent: 'var(--color-accent)',
          'accent-warm': 'var(--color-accent-warm)',
        }
      },
      fontFamily: {
        display: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Sora"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.03em',
        'widest-editorial': '0.24em',
        'super-wide': '0.32em',
      }
    },
  },
  plugins: [],
}
