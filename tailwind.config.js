/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Alkalami: ["Alkalami", "regular"],
        Cinzel: ["Cinzel", "regular"],
        Pacifico: ["Pacifico", "regular"],
      },
    },
  },
  plugins: [],
};
