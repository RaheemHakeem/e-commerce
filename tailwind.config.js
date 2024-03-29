/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
      xs: "480px",
      ss: "620px",
      sm: "850px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
      fontFamily: {
        cormorant: ['"Cormorant Garamond", serif'],
      },
    },
  },
  plugins: [],
};
