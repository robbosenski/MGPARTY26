import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Freigeist"', "sans-serif"],
        body: ['"Special Gothic"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
