/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        tv: "url('./src/assets/tv.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
