/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        main : "#ff4a57",
        second: "#212336",
        three : "#23263a",
        card : "#2b2d41"
      }
    },
  },
  plugins: [],
}