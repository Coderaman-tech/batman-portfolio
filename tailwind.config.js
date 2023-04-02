/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
            fontFamily: {
              'primary': ['Major Mono Display', "Roboto"],
              'bolder': ["Anton","Roboto"]
            }
          },
        },
  plugins: [],
}
