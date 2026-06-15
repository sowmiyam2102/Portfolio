/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
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
      backdropBlur: {
        xs: '4px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      screens: {
        xs: '320px', // small mobile
        sm: '375px', // normal mobile
        md: '481px', // large mobile / small tablet
        lg: '768px', // tablet
        xl: '1024px', // laptop
        '2xl': '1280px', // desktop
        '3xl': '1536px', // large desktop
        '4xl': '1920px', // very large screens
      },
      fontFamily: {
        display: ['"Outfit"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // indigo
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          violet: '#8b5cf6',
          purple: '#a855f7',
          indigo: '#6366f1',
          pink: '#ec4899',
          fuchsia: '#d946ef',
          cyan: '#06b6d4',
          blue: '#3b82f6',
        },
        cyberBgDark: '#060415',
        cyberBgCard: '#0d0a27',
      },
      backdropBlur: {
        xs: '4px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
