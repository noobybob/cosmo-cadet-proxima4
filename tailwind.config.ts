import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm dark umber — the shared "ink" of the app (was navy #0B1035).
        primary: "#241913",
        // Warm gold accent (was cyan); unused in components today.
        secondary: "#E8B84B",
        // Warm dusty paper for light mode (was cool blue-white).
        background: "#F7F2ED",
        // Deep basalt / lunar-night surfaces (was navy space tones).
        space: {
          950: "#16110E",
          900: "#1E1712",
          850: "#291E17",
          800: "#3A2A1F",
        },
        // Shared "transition" accent — muted dusty rose (was violet nebula).
        nebula: {
          300: "#E6C2BC",
          400: "#D6A49D",
          500: "#C2867F",
          600: "#A96B66",
        },
        // Highlight accent — butterscotch gold (was cyan glow). Vibrant on
        // dark surfaces, deepened for light-mode readability.
        glow: {
          300: "#FFC978",
          400: "#E8A93F",
          500: "#B3731F",
        },
        // Lunar environment — grays dominant, warmed by titanium-rich
        // basalts (brown/tan) and cooled by a faint mineral blue.
        lunar: {
          50: "#F4F3F1",
          100: "#E7E5E1",
          200: "#D2CEC7",
          300: "#B6B0A5",
          400: "#97918A",
          500: "#7E7C78",
          600: "#656462",
          700: "#4E4E4D",
          800: "#3A3A3A",
          900: "#2A2A2B",
          tan: "#C4A882",
          brown: "#8A7355",
          blue: "#8FA3B8",
        },
        // Martian environment — rust, butterscotch, gold over dark basalt.
        martian: {
          50: "#FBF2E7",
          100: "#F5E1C9",
          200: "#EAC79C",
          300: "#DDA76A",
          400: "#D08B45",
          500: "#B96B32",
          600: "#9A4F26",
          700: "#7A3B20",
          800: "#56291A",
          900: "#33180F",
          rust: "#A84B2A",
          butterscotch: "#D9913F",
          gold: "#E8B84B",
          tan: "#D9B48A",
          basalt: "#241410",
        },
        // Shared surfaces where the two worlds meet: taupe-gray and muted
        // dusty rose, used for chrome, dividers and transition bands.
        dust: {
          100: "#EDE7E3",
          200: "#DCD2CC",
          300: "#C3B5AE",
          400: "#A8978F",
          500: "#8E7C74",
          600: "#6F5F59",
          700: "#544642",
          rose: "#C99A96",
          roseDark: "#9C6F70",
        },
        // Vibrant pixel accents for interactive elements only.
        pixel: {
          cyan: "#3DE8FF",
          magenta: "#FF4FA3",
          lime: "#9BF00B",
          gold: "#FFD23F",
          violet: "#A87CFF",
          orange: "#FF8A3D",
          red: "#FF4D4D",
          ink: "#14161C",
        },
      },
      fontFamily: {
        // Body copy — Inter (variable).
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        // Titles — Orbitron.
        display: [
          "var(--font-orbitron)",
          "Orbitron",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        // Subtitles — Exo 2.
        subtitle: [
          "var(--font-exo)",
          "\"Exo 2\"",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        pixel: [
          "var(--font-pixel)",
          "\"Press Start 2P\"",
          "ui-monospace",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 24px rgba(232, 169, 63, 0.35), 0 0 64px rgba(232, 169, 63, 0.12)",
        "glow-lg":
          "0 0 44px rgba(232, 169, 63, 0.5), 0 16px 48px rgba(169, 107, 102, 0.35)",
        "glow-purple":
          "0 0 24px rgba(201, 154, 150, 0.4), 0 0 64px rgba(201, 154, 150, 0.15)",
        glass: "0 8px 32px rgba(22, 17, 14, 0.35)",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(40px, -30px, 0) scale(1.12)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 24px rgba(232, 169, 63, 0.35)" },
          "50%": { boxShadow: "0 0 64px rgba(201, 154, 150, 0.6)" },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        shoot: {
          "0%": { opacity: "0", transform: "translate(0, 0) rotate(20deg)" },
          "2%": { opacity: "1" },
          "12%": {
            opacity: "0",
            transform: "translate(240px, 87px) rotate(20deg)",
          },
          "100%": {
            opacity: "0",
            transform: "translate(240px, 87px) rotate(20deg)",
          },
        },
        "page-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "logo-breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "pixel-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        "pixel-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        twinkle: "twinkle 3.5s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.8s ease-in-out infinite",
        progress: "progress 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        shoot: "shoot 7s linear infinite",
        "page-fade": "page-fade 0.4s ease-out backwards",
        "logo-breathe": "logo-breathe 3s ease-in-out infinite",
        "pixel-blink": "pixel-blink 1.1s steps(2, jump-none) infinite",
        "pixel-float": "pixel-float 3s steps(6, end) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
