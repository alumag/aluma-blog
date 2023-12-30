import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
  plugins: [require("@tailwindcss/typography")],
};
export default config;
