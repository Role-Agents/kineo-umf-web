import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d5e0eb',
          500: '#1A3A5C',
          600: '#152f4a',
          700: '#102438',
          800: '#0b1926',
          900: '#060e14'
        },
        teal: {
          medical: '#00B5AD',
          light: '#33C4BD',
          dark: '#008C85'
        },
        brand: {
          primary: '#1A3A5C',
          secondary: '#2E7DAE',
          accent: '#00B5AD',
          light: '#F0F4F8',
          muted: '#6B7A8D'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
