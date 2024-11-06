/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      },
      colors: {
        turquoise: {
          300: '#62E0D9'
        },
        mirage: {
          700: '#202A3C',
          800: '#181F2B',
          900: '#1B2330',
          950: '#0B1524'
        },
        stone: {
          200: '#DFE4F0'
        },
        silver: {
          400: '#C0C0C0'
        }
      }
    }
  },
  plugins: []
};
