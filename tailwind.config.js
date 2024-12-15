/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#2D2D2D',
          850: '#1F1F1F',
          900: '#171717',
          950: '#0A0A0A',
        },
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
};