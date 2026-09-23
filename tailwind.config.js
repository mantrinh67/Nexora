/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#0B132B',   // Deep Navy Text & Accents
          navy: '#1C2541',      // Slate Navy secondary
          steel: '#3A506B',     // Muted text & subtle borders
          teal: '#5BC0BE',      // Vibrant Teal Accent
          tealLight: '#7CE5E3', // Highlight Teal
          tealDark: '#0D7A78',  // Readable Teal for text on white
          white: '#FFFFFF',     // Pure White background
          surface: '#F8FAFC',   // Light soft surface
          border: '#E2E8F0',    // Clean subtle light border
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 35px -5px rgba(91, 192, 190, 0.35)',
        'glow-teal-sm': '0 0 15px -3px rgba(91, 192, 190, 0.25)',
        'card': '0 4px 20px -2px rgba(11, 19, 43, 0.05)',
        'card-hover': '0 16px 32px -4px rgba(11, 19, 43, 0.1)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
