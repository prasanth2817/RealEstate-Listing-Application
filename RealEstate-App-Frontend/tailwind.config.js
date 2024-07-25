/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('https://res.cloudinary.com/dlovthlr8/image/upload/v1721895377/library/ce5r3czzefwxikzteym9.jpg')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
      },
    },
    plugins: [],
  }