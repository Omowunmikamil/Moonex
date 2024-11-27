/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pageBg: "#071624",
        yellow: "#F9D423",
        yellow1: "#EDD955",
        yellow2: "#FBD966",
        gold: "#E4B40D",
        btnText: "#111111",
        footerBg: "#051422",
      },
      fontFamily: {
        ultraBold: ["Ultrabold"],
        neueRegular: ["Regular"],
      },
    },
  },
  plugins: [],
};
