/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ea6500",

          secondary: "#aa1651",

          accent: "#d8692d",

          neutral: "#232E38",

          "base-100": "#364A59",

          info: "#9FBFE0",

          success: "#26C066",

          warning: "#FCD92C",

          error: "#E65B74",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
