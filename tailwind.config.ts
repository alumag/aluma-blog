import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";
import flowbitePlugin from "flowbite/plugin";
import tailwindcssAnimatePlugin from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // container class by shadcnui
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      // keyframes variants by shadcnui
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      // animation variants by shadcnui
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    typographyPlugin,
    flowbitePlugin, // used by flowbite-react
    tailwindcssAnimatePlugin,
  ], // used by shadcnui
} satisfies Config;

export default config;
