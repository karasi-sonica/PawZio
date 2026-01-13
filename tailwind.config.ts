import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#FBBF24",
        background: "#FAFAFA",
      },
    },
  },
  plugins: [],
};

export default config;
