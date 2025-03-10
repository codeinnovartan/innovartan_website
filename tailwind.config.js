/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ["Metropolis"," sans-serif"],
        satisfy: ["Satisfy","sans-serif"]
      },
    },
  },
plugins:[],
}