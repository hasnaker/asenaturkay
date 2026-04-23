import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FDF8F3",
        linen: "#F7EFE6",
        blush: "#E8D5C4",
        blushDeep: "#D4B7A1",
        rose: "#D4B5C4",
        roseDeep: "#B8909E",
        sage: "#C7D0BB",
        sageDeep: "#9DAB8E",
        lavender: "#DDD3E8",
        ink: "#3A3937",
        inkSoft: "#5A5550",
        muted: "#8A8177",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 8px 32px -12px rgba(88, 70, 55, 0.15)",
        glow: "0 0 0 1px rgba(212, 181, 196, 0.3), 0 8px 32px -8px rgba(184, 144, 158, 0.25)",
      },
      backgroundImage: {
        "gradient-pastel":
          "linear-gradient(135deg, #FDF8F3 0%, #F7EFE6 30%, #EDE4DC 70%, #E8D5C4 100%)",
        "gradient-blush":
          "linear-gradient(180deg, #FDF8F3 0%, #F5E6E0 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
