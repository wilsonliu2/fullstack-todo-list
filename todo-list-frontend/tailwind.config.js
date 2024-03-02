/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          '50': '#e8f1ff',
          '100': '#d5e4ff',
          '200': '#b3ccff',
          '300': '#85a8ff',
          '400': '#5676ff',
          '500': '#2f45ff',
          '600': '#0c0eff',
          '700': '#0000ff',
          '800': '#0609cd',
          '900': '#10169f',
          '950': '#0a0b5c',
        },
      },
    },
  },
  plugins: [],
}
