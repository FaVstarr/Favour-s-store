/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   'purple': '#a86fc1',
    // }
  },
  plugins: [require("daisyui")],
}
