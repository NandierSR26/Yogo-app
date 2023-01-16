/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": "'Inter', sans-serif"
      },
      colors: {
        primary: "#61C90F",
        orange: "#FFBA33",
        gray: "#E7E7E7",
        purple: "#C638F8",
        red: "#FF4F4F",
        blue: "#4E73F4"
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px'
      },
    },
  },
  plugins: [],
}
