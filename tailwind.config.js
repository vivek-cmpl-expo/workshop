/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2E44',
        accent: '#C8963E',
        background: '#F5F4F0',
        surface: '#FFFFFF',
        foreground: '#1A2E44',
        muted: '#6B7A8D',
        border: '#DDD9D0',
        'gold-light': '#F0E6CE',
        'navy-light': '#E8EDF2',
        banawat: '#7C3AED',
        launchpad: '#2563EB',
        savore: '#16A34A',
        unpack: '#92400E',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(26, 46, 68, 0.08)',
        'card-hover': '0 20px 60px -10px rgba(26, 46, 68, 0.18)',
        'nav': '0 1px 0 #DDD9D0',
      },
      borderRadius: {
        'sm': '2px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};