import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#020617",
          900: "#030712",
          850: "#050816"
        },
        neon: {
          cyan: "#22d3ee",
          blue: "#3b82f6",
          violet: "#8b5cf6",
          purple: "#a855f7"
        }
      },
      boxShadow: {
        glow: "0 0 34px rgba(34, 211, 238, 0.18)",
        violetGlow: "0 0 42px rgba(139, 92, 246, 0.22)"
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(96,165,250,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.08) 1px, transparent 1px)",
        "neon-gradient": "linear-gradient(135deg, #22d3ee 0%, #3b82f6 45%, #a855f7 100%)"
      },
      opacity: {
        "6": "0.06",
        "7": "0.07",
        "8": "0.08",
        "12": "0.12",
        "13": "0.13",
        "14": "0.14",
        "15": "0.15",
        "16": "0.16",
        "18": "0.18",
        "24": "0.24",
        "26": "0.26",
        "28": "0.28",
        "35": "0.35",
        "36": "0.36",
        "45": "0.45",
        "46": "0.46",
        "55": "0.55",
        "65": "0.65",
        "76": "0.76"
      }
    }
  },
  plugins: []
};

export default config;
