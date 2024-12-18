/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cedarville: ['Cedarville Cursive', 'cursive'],
        noto: ['Noto Sans JP', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
        playwrite: ['Playwrite CO Guides', 'sans-serif'],
        playwriteDEVA: ['Playwrite DE VA Guides', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
