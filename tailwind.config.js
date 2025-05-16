/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#6B3612'
        },
        secondary: {
          DEFAULT: '#D4AF37',
          light: '#F4D160',
          dark: '#B8942F'
        },
        cream: {
          DEFAULT: '#FFF8DC',
          light: '#FFFAEF',
          dark: '#F5EDD0'
        },
        accent: {
          DEFAULT: '#CD5C5C',
          light: '#E07F7F',
          dark: '#B04545'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}