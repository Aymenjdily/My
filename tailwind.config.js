/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        extraDarkBlue : '#011f4b',
        darkBlue : '#03396c',
        primary : '#005b96',
        secondary: "#FD7F20",
        lightBlue : '#6497b1',
        extraLightBlue : '#b3cde0',
      },
      fontFamily: {
        Signika: ["Signika", "sans-serif"]
      },
    },
  },
  plugins: [],
}