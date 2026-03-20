/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'china-red': '#B93A3A',
        'ink': '#1A1A1A',
        'ink-black': '#1A1A1A',
        'ink-gray': '#4A4A4A',
        'paper': '#F9F8F4',
        'paper-dark': '#F0EEE8',
        'glazed-yellow': '#FFD700',
        'qinghua-blue': '#1E3A8A',
        'xuan-paper': '#F5F5F0',
        'antique-bronze': '#8B4513',
        'jade-green': '#00A862',
      },
      fontFamily: {
        'chinese': ['Georgia', 'SimSun', 'KaiTi', 'STKaiti', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
