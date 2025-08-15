/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark green backgrounds
        primary: {
          50: '#f0f2f1',
          100: '#e1e5e2',
          200: '#c3cbc5',
          300: '#a5b1a8',
          400: '#87978b',
          500: '#6b7d70',
          600: '#556355',
          700: '#3F4F44',
          800: '#2C3930',
          900: '#1a211c',
        },
        // Gray for logo text
        accent: {
          50: '#faf9f8',
          100: '#f5f3f0',
          200: '#ebe7e1',
          300: '#e1dbd2',
          400: '#d7cfc3',
          500: '#DCD7C9',
          600: '#c8c1b0',
          700: '#b4ab97',
          800: '#a0957e',
          900: '#8c7f65',
        },
        // Brown accent color
        highlight: {
          50: '#faf8f6',
          100: '#f5f1ed',
          200: '#ebe3db',
          300: '#e1d5c9',
          400: '#d7c7b7',
          500: '#A27B5C',
          600: '#926d4f',
          700: '#825f42',
          800: '#725135',
          900: '#624328',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
