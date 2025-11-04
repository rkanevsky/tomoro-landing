import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tomoro Brand Colors
        black: {
          rich: "#0D0D0D",
          DEFAULT: "#000000",
        },
        emerald: {
          caribbean: "#00E5B0",
          DEFAULT: "#10b981",
          light: "#1EE5B0",
        },
        teal: {
          bangladesh: "#088867",
          mountain: "#3C9B7D",
          pine: "#063B35",
          forest: "#0B5E45",
          mint: "#20B2AA",
          frog: "#1B8B6F",
          basil: "#0B5D44",
        },
        neutral: {
          stone: "#5F6B67",
          pistachio: "#B8D4C8",
          "anti-flash": "#F5F5F5",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
