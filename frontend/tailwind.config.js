/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'blue': "#3F7491",
      'pink': "#B185AB",
      'orange': "#B47F66",
      'purple': "#716687",
      'red': "#762D3F",
      'white': "#FFFFFF",
      'black': "#292929",
    },
    extend: {
      fontFamily: {
      'sans': ['Epilogue'],
    },
  },
  },
  plugins: [],
};