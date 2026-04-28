/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B2C',
        primaryDark: '#16A34A',
        secondary: '#C8D8FF',
        tertiary: '#E4F222',
        neutral: '#0F0F0F',
        background: '#0F172A',
        card: '#1f2020',
        text: '#E2E8F0',
        subtext: '#94A3B8',
        danger: '#EF4444',
      },
      fontFamily: {
        regular: ['System'],
        bold: ['System'],
      },
    },
  },
  plugins: [],
};
