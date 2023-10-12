/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
      zenDots: ['Zen Dots', 'sans'],
      phudu: ['Phudu', 'sans'],
      roboto: ['Roboto', 'sans'],
      montserrat: ['Montserrat', 'sans'],
      splineSans: ['Spline Sans', 'sans'],
      originalSurfer: ['Original Surfer', 'cursive'],
      outfit : ['Outfit', 'sans-serif'],
    },
  },
  },
  plugins: [],
}

