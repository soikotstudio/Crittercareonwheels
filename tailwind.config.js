/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: '#4B3FD8',
          50:  '#EEEDFB',
          100: '#D5D3F7',
          200: '#ABA7EF',
          300: '#817BE7',
          400: '#5750DF',
          500: '#4B3FD8',
          600: '#3B30BE',
          700: '#2C239F',
          800: '#1D1780',
          900: '#0E0C5A',
        },
        lime: {
          DEFAULT: '#C6F26B',
          light: '#E2FAB3',
        },
        yellow: {
          DEFAULT: '#F5B82E',
          light: '#FFF0BC',
        },
        cream: '#FFF8E7',
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', '"Fredoka"', 'system-ui', 'sans-serif'],
        body:    ['"Figtree"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card:  '0 4px 24px rgba(75, 63, 216, 0.08)',
        cardHover: '0 12px 40px rgba(75, 63, 216, 0.16)',
      },
    },
  },
  plugins: [],
}
