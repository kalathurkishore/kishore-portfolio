/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Poppins"', "system-ui", "sans-serif"],
        body: ['"Poppins"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}