/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#3F7491",
      pink: "#B185AB",
      orange: "#B47F66",
      purple: "#716687",
      red: "#762D3F",
      white: "#FFFFFF",
      grey: "#757575",
      black: "#292929",
      purple2: {
        500: "#716687",
      },
      pink2: {
        500: "#B185AB",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Epilogue"],
      },
    },
  },
  plugins: [],
};
