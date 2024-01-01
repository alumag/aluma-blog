import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          pink: "#dfd1e0",
          purple: "#aab8c8",
          blue: "#c9e4e2",
        },
      },
      fontFamily: {
        alef: ["Alef", "var(--font-alef)"],
        rubik: ["Rubik", "var(--font-rubik)"],
        sans: ["Inter", "var(--font-default)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
export default config;
