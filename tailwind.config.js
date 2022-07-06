/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/src/assets/header-background.webp')",
        'accueil-background': "url('/src/assets/bg-accueil.webp')",
        'page-legumes-background': "url('/src/assets/teplica-bg.jpg')",
        'page-fruits-background':"url('/src/assets/fruits-ban.jpg')",

      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'shopping-cart-cols': '96px 1fr',
      },
      colors: {
        'main-gray':"#D6DACF",
        'main-orange':"#ff914d"
      }
    },
  },
  plugins: [],
}
