/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SUSE', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFE',
        hot: '#EEBBC3',
        clay: '#B8C1EC',
        black: '#232946',
        customGreen: '#2ff29e',
      },
      keyframes: {
        'bounce-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(20px)' },
        }
      },
      animation: {
        'bounce-right': 'bounce-right 1s infinite',
      },
    },
  },
  plugins: [],
}

