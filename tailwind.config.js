/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#22C55E',
        primaryDark: '#16A34A',
        background: '#0F172A',
        card: '#1E293B',
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
