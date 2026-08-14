/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Indian Tricolour Palette
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff671f', // Official Flag Kesari Saffron
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        harit: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#046a38', // Official Flag Harit India Green
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        ashoka: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1e40af',
          600: '#1d4ed8',
          700: '#1e3a8a',
          800: '#0a192f', // Deep Ashoka Navy
          900: '#050b14', // Flag Midnight Navy
        },
        glass: {
          bg: 'var(--glass-bg)',
          border: 'var(--glass-border)',
          highlight: 'var(--glass-highlight)',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'Sora', 'system-ui', 'sans-serif'],
      },
      animation: {
        'running-tricolor': 'runningTricolor 6s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'float-saffron': 'floatSaffron 14s ease-in-out infinite alternate',
        'float-green': 'floatGreen 16s ease-in-out infinite alternate',
        'float-blue': 'floatBlue 18s ease-in-out infinite alternate',
        'shimmer-stream': 'shimmerStream 3s infinite linear',
      },
      keyframes: {
        runningTricolor: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSaffron: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -25px) scale(1.1)' },
        },
        floatGreen: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-25px, 20px) scale(1.08)' },
        },
        floatBlue: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, 30px) scale(0.95)' },
        },
        shimmerStream: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(150%)' },
        },
      },
    },
  },
  plugins: [],
};
