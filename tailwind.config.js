/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: theme => theme('colors'),
      colors: {
        primary: {
          DEFAULT: '#3F8451', // accent green
          50: 'rgba(63,132,81,0.05)',
          100: 'rgba(63,132,81,0.1)',
          200: 'rgba(63,132,81,0.2)',
          300: 'rgba(63,132,81,0.3)',
          400: 'rgba(63,132,81,0.4)',
          500: '#3F8451',
          600: '#4FA564',
          700: '#2F6A31',
          800: '#1F4A20',
          900: '#0F260F',
        },
        background: '#050505',
        secondaryBg: '#0A0A0A',
        cardBg: '#101311',
        border: '#1D241F',
        textPrimary: '#F5F5F5',
        textSecondary: '#A1A1AA',
        textMuted: '#71717A',
      },
      backdropBlur: { xs: '4px' },
      animation: { float: 'float 6s ease-in-out infinite' },
      keyframes: { float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } } },
      screens: { xs: '320px', sm: '375px', md: '481px', lg: '768px', xl: '1024px', '2xl': '1280px', '3xl': '1536px', '4xl': '1920px' },
      fontFamily: { display: ['"Outfit"', 'sans-serif'], body: ['"Inter"', 'sans-serif'] },
    },
  },
  plugins: [],
};
