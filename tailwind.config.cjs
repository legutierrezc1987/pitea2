/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513', // Marrón - Color principal que representa cuero/piel
        secondary: '#C0C0C0', // Plateado - Representa los hilos de plata
        accent: '#DAA520', // Dorado - Color complementario
        light: '#F5F5DC', // Beige claro - Para fondos
        dark: '#3C2A21', // Marrón oscuro - Para textos principales
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} 