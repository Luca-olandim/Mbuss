const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#B1A9A9',
        inputNav: '#DBDBDB', 
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}