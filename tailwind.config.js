/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1B4FC4',
        'brand-dark': '#15399B',
        navy: '#0D1B3E',
        'navy-light': '#16264D',
        action: '#E8321A',
        'action-dark': '#C22711',
        'gray-light': '#F5F7FA',
        'text-dark': '#1A1A1A',
        whatsapp: '#25D366',
        'badge-bg': '#E8EEFB',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, rgba(27,79,196,0.25) 1.5px, transparent 1.5px)',
      },
      backgroundSize: {
        dots: '18px 18px',
      },
    },
  },
  plugins: [],
}
