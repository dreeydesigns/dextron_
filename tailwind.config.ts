import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dextron: {
          red: "#D32F2F",
          "red-dark": "#B71C1C",
          "red-light": "#FFEBEE",
          blue: "#1565C0",
          "blue-dark": "#0D47A1",
          "blue-light": "#E3F2FD",
        },
        brand: {
          nuna: {
            DEFAULT: "#2563EB", // Blue
            light: "#EFF6FF",
            border: "#BFDBFE",
            accent: "#1D4ED8",
          },
          nunalac: {
            DEFAULT: "#EA580C", // Warm Amber / Orange
            light: "#FFF7ED",
            border: "#FED7AA",
            accent: "#C2410C",
          },
          bilan: {
            DEFAULT: "#BE185D", // Deep Rose / Magenta
            light: "#FDF2F8",
            border: "#FBCFE8",
            accent: "#9D174D",
          },
          sofresh: {
            DEFAULT: "#16A34A", // Fresh Green
            light: "#F0FDF4",
            border: "#BBF7D0",
            accent: "#15803D",
          },
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
