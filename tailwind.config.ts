import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF5EE",
        bone: "#EFE6DA",
        sand: "#E3D5C2",
        clay: "#C9A68A",
        rust: "#9C6B4A",
        terracotta: "#B97A5A",
        forest: "#4A5543",
        olive: "#8B8670",
        rose: "#C8A5A1",
        roseDeep: "#A27975",
        ink: "#2B2724",
        inkSoft: "#524B44",
        muted: "#8A8177",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Cormorant Garamond", "Georgia", "serif"],
        serif: ["var(--font-fraunces)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5.25rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        widest: "0.28em",
      },
      boxShadow: {
        frame: "0 30px 60px -30px rgba(43, 39, 36, 0.35)",
        soft: "0 12px 40px -16px rgba(43, 39, 36, 0.18)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.168 0 0 0 0 0.152 0 0 0 0 0.141 0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
