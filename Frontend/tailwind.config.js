/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  media: false, // or 'purge' or 'class'
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        robotoslab: ['Roboto Slab', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    },
    screens: {
      xxl: '1600px',
      xl: '1440px',
      sl: '1024px',
      t: '768px',
      l: '425px',
      m: '375px',
      s: '320px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}