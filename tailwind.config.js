/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F5F8FA',
          100: '#E2E8F0',
          200: '#B4C6E1',
          300: '#94ABC7',
          400: '#7691AE',
          500: '#5A7795',
          600: '#445D7B',
          700: '#334561',
          800: '#233147',
          900: '#141D2D',
        },
        gray: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECF0',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        cream: {
          50: '#FFFCF7',
          100: '#FFF9F0',
          200: '#FFF3E0',
          300: '#FFE9C7',
          400: '#FFDFA8',
          500: '#FFD58A',
          600: '#E6C07C',
          700: '#BF9F67',
          800: '#997F52',
          900: '#735F3D',
        }
      },
      fontFamily: {
        cursive: ['Great Vibes', 'cursive'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};