/** @type {import('tailwindcss').Config} */

export default {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      maxWidth: {
        'desktop': '1200px'
      }
    },
  },
  plugins: [],
}
