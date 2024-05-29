/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0A0C1C',
        bgSecondary: '#1B1937',
        white: '#fff',
        purple: '#AB5CDB',
      },
    },
  },
  plugins: [],
};
