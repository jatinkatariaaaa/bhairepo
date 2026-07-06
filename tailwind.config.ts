import type { Config } from "tailwindcss";

/**
 * TrusTax design tokens — "Trust Emerald" palette.
 * Everything here mirrors the CSS variables declared in app/globals.css so
 * colors can be tuned in one place. See README.md → "Design System".
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        canvas: "#FAFAF7", // off-white page background
        ink: "#0B0F0E", // near-black headings
        body: "#5B6B66", // slate body text
        muted: "#8A968F", // muted / captions
        hairline: "#E7E5E0", // 1px borders

        mint: {
          DEFAULT: "#E7F5EF", // soft tint (badges / section backgrounds)
          deep: "#B6DFC9", // stronger tint — used for FAQ index counter
        },
        gold: "#C6A15B", // premium accent — use sparingly

        primary: {
          DEFAULT: "#0E5C43", // deep emerald (brand)
          dark: "#0A4A36", // hover / active
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#10B981", // bright emerald (accents / highlights)
          dark: "#0E9E70",
          foreground: "#FFFFFF",
        },

        // Cinematic dark bookends (Preloader / Why / Dashboard / CTA)
        obsidian: {
          DEFAULT: "#06110D", // emerald-black
          soft: "#0B1A15",
          700: "#0E241C",
        },
        cream: {
          DEFAULT: "#F4F1E9", // warm ivory text on dark
          muted: "#A8B5AE", // dimmed cream for secondary text on dark
        },

        // Semantic
        success: "#10B981",
        warning: "#E0A100",
        error: "#DC2626",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "var(--font-inter-tight)",
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-instrument-serif)",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        overline: ["0.75rem", { lineHeight: "1", letterSpacing: "0.12em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        h4: ["1.25rem", { lineHeight: "1.35", letterSpacing: "-0.01em" }],
        h3: ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "h2-sm": ["1.75rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        h2: ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1-sm": ["2.125rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["3.5rem", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        display: ["4.5rem", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        // Cinematic keynote type — fluid, clamps between mobile & desktop
        "display-lg": [
          "clamp(2.75rem, 7vw, 5.75rem)",
          { lineHeight: "0.98", letterSpacing: "-0.035em" },
        ],
        mega: [
          "clamp(3.25rem, 12vw, 11rem)",
          { lineHeight: "0.9", letterSpacing: "-0.045em" },
        ],
      },
      maxWidth: {
        container: "1200px",
        prose: "68ch",
      },
      spacing: {
        // named rhythm helpers on top of the default 4px scale
        section: "8rem", // 128px desktop section padding
        "section-sm": "4.5rem", // 72px mobile section padding
      },
      borderRadius: {
        card: "20px",
        button: "12px",
        input: "12px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,15,14,0.04), 0 12px 32px rgba(11,15,14,0.06)",
        card: "0 1px 2px rgba(11,15,14,0.04), 0 8px 24px rgba(11,15,14,0.05)",
        lift: "0 2px 4px rgba(11,15,14,0.05), 0 20px 44px rgba(11,15,14,0.09)",
        focus: "0 0 0 3px rgba(16,185,129,0.30)",
        // Floating device — deep, soft, cinematic drop shadow
        phone:
          "0 50px 120px -30px rgba(6,17,13,0.45), 0 24px 60px -24px rgba(6,17,13,0.30)",
        "phone-dark":
          "0 60px 140px -30px rgba(0,0,0,0.65), 0 20px 60px -24px rgba(0,0,0,0.55)",
        glass:
          "0 8px 40px rgba(6,17,13,0.10), inset 0 1px 0 rgba(255,255,255,0.65)",
        "glass-dark":
          "0 12px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s cubic-bezier(0.16,1,0.3,1)",
        "accordion-up": "accordion-up 0.25s cubic-bezier(0.16,1,0.3,1)",
        "fade-up": "fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 34s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        shimmer: "shimmer 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
