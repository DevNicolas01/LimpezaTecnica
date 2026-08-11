/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        action: '#1565C0',
        'action-dark': '#0D47A1',
        navy: '#0D1B3E',
        'navy-light': '#16264D',
        blue: '#0288D1',
        'blue-light': '#4FC3F7',
        check: '#1B4FC4',
        'badge-bg': '#E3F2FD',
        'gray-light': '#F5F7FA',
        'text-dark': '#1A1A1A',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'dot-pattern':
          'radial-gradient(circle, rgba(21,101,192,0.18) 1.5px, transparent 1.5px)',
      },
      backgroundSize: {
        dots: '18px 18px',
      },
    },
  },
  plugins: [],
}
