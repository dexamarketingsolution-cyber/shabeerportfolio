import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070B1E",
        deep: "#0C1330",
        panel: "#111A3D",
        mist: "#E7ECFF",
        haze: "#9AA6C8",
        indigo: { DEFAULT: "#5B5BF7", soft: "#A5B4FC" },
        violet: { DEFAULT: "#8B5CF6", soft: "#C4B5FD" },
        cyan: { DEFAULT: "#22D3EE", soft: "#A5F3FC" },
        teal: { DEFAULT: "#14B8A6", soft: "#99F6E4" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "76rem",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(4%, -6%, 0) scale(1.08)" },
          "66%": { transform: "translate3d(-5%, 4%, 0) scale(0.95)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        shimmer: {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        drift: "drift 22s ease-in-out infinite",
        "drift-slow": "drift 30s ease-in-out infinite reverse",
        "spin-slow": "spin 14s linear infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-ring": "pulseRing 1.8s ease-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
