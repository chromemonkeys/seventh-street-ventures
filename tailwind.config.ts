import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./slide-one.tsx", // Added for SlideOne to be included in Tailwind scan
    "./slide-two.tsx", // Added for SlideTwo to be included in Tailwind scan
    "./slide-three.tsx", // Added for SlideThree to be included in Tailwind scan

    "./slide-five.tsx", // Added for SlideFive to be included in Tailwind scan
    "./slide-six.tsx", // Added for SlideSix to be included in Tailwind scan
    "./slide-seven.tsx", // Added for SlideSeven to be included in Tailwind scan
    "./slide-eight.tsx", // Added for SlideEight to be included in Tailwind scan
    "./slide-nine.tsx", // Added for SlideNine to be included in Tailwind scan
    "./slide-ten.tsx", // Added for easter egg slide
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for sidebar from brand guide [^2]
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: {
            DEFAULT: "hsl(var(--sidebar-primary))",
            foreground: "hsl(var(--sidebar-primary-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--sidebar-accent))",
            foreground: "hsl(var(--sidebar-accent-foreground))",
          },
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        // Custom keyframes for the renewals graphic
        "pulse-subtle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        "data-particle-flow": {
          "0%": { transform: "translateY(-16px)", opacity: "0" }, // Start at center of top circle, invisible
          "10%": { transform: "translateY(-12px)", opacity: "1" }, // Appear at bottom edge of top circle
          "45%": { transform: "translateY(0px)", opacity: "1" }, // Mid-point of the gap (center of h-8 div)
          "80%": { transform: "translateY(12px)", opacity: "1" }, // Reach top edge of bottom circle
          "90%": { transform: "translateY(16px)", opacity: "0" }, // Disappear at center of bottom circle
          "100%": { transform: "translateY(-16px)", opacity: "0" }, // Reset for loop
        },
        // New keyframes for usage-based slide
        "data-flow-down-usage": {
          "0%": { transform: "translateY(-40px)", opacity: "0" }, // Start above the bars, invisible
          "10%": { transform: "translateY(-20px)", opacity: "1" }, // Appear at the bottom of the bars
          "80%": { transform: "translateY(20px)", opacity: "1" }, // Move down towards the card
          "100%": { transform: "translateY(40px)", opacity: "0" }, // Disappear into the card
        },
        // Easter egg square opening animations
        "square-open-top": {
          "0%": { transform: "translateY(0) scaleY(0)", opacity: "0.3" },
          "50%": { transform: "translateY(-16px) scaleY(1)", opacity: "0.6" },
          "100%": { transform: "translateY(0) scaleY(0)", opacity: "0.3" },
        },
        "square-open-right": {
          "0%": { transform: "translateX(0) scaleX(0)", opacity: "0.3" },
          "50%": { transform: "translateX(16px) scaleX(1)", opacity: "0.6" },
          "100%": { transform: "translateX(0) scaleX(0)", opacity: "0.3" },
        },
        "square-open-bottom": {
          "0%": { transform: "translateY(0) scaleY(0)", opacity: "0.3" },
          "50%": { transform: "translateY(16px) scaleY(1)", opacity: "0.6" },
          "100%": { transform: "translateY(0) scaleY(0)", opacity: "0.3" },
        },
        "square-open-left": {
          "0%": { transform: "translateX(0) scaleX(0)", opacity: "0.3" },
          "50%": { transform: "translateX(-16px) scaleX(1)", opacity: "0.6" },
          "100%": { transform: "translateX(0) scaleX(0)", opacity: "0.3" },
        },
        // Outer layer squares - larger movement
        "square-open-top-outer": {
          "0%": { transform: "translateY(0) scaleY(0)", opacity: "0.1" },
          "50%": { transform: "translateY(-24px) scaleY(1)", opacity: "0.3" },
          "100%": { transform: "translateY(0) scaleY(0)", opacity: "0.1" },
        },
        "square-open-right-outer": {
          "0%": { transform: "translateX(0) scaleX(0)", opacity: "0.1" },
          "50%": { transform: "translateX(24px) scaleX(1)", opacity: "0.3" },
          "100%": { transform: "translateX(0) scaleX(0)", opacity: "0.1" },
        },
        "square-open-bottom-outer": {
          "0%": { transform: "translateY(0) scaleY(0)", opacity: "0.1" },
          "50%": { transform: "translateY(24px) scaleY(1)", opacity: "0.3" },
          "100%": { transform: "translateY(0) scaleY(0)", opacity: "0.1" },
        },
        "square-open-left-outer": {
          "0%": { transform: "translateX(0) scaleX(0)", opacity: "0.1" },
          "50%": { transform: "translateX(-24px) scaleX(1)", opacity: "0.3" },
          "100%": { transform: "translateX(0) scaleX(0)", opacity: "0.1" },
        },
        // New keyframes for the distribution flow particles
        "flow-particle-1": {
          "0%": { left: "12.5%", opacity: "0" },
          "10%": { opacity: "1" },
          "30%": { left: "37.5%", opacity: "1" },
          "31%": { opacity: "0" },
          "100%": { left: "12.5%", opacity: "0" },
        },
        "flow-particle-2": {
          "0%": { left: "37.5%", opacity: "0" },
          "33%": { opacity: "0" },
          "43%": { opacity: "1" },
          "63%": { left: "62.5%", opacity: "1" },
          "64%": { opacity: "0" },
          "100%": { left: "37.5%", opacity: "0" },
        },
        "flow-particle-3": {
          "0%": { left: "62.5%", opacity: "0" },
          "66%": { opacity: "0" },
          "76%": { opacity: "1" },
          "96%": { left: "87.5%", opacity: "1" },
          "97%": { opacity: "0" },
          "100%": { left: "62.5%", opacity: "0" },
        },
        // Simple bounce animation for arrows
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
        "data-particle-flow": "data-particle-flow 3s ease-in-out infinite", // Slowed down to 3s
        // New animations for usage-based slide
        "data-flow-down-usage": "data-flow-down-usage 3s ease-in-out infinite", // Reverted to 3s
        // Easter egg square opening animations - slow and staggered
        "square-open-top": "square-open-top 8s ease-in-out infinite",
        "square-open-right": "square-open-right 8s ease-in-out infinite 2s",
        "square-open-bottom": "square-open-bottom 8s ease-in-out infinite 4s",
        "square-open-left": "square-open-left 8s ease-in-out infinite 6s",
        // Outer layer animations - even slower
        "square-open-top-outer": "square-open-top-outer 12s ease-in-out infinite 1s",
        "square-open-right-outer": "square-open-right-outer 12s ease-in-out infinite 4s",
        "square-open-bottom-outer": "square-open-bottom-outer 12s ease-in-out infinite 7s",
        "square-open-left-outer": "square-open-left-outer 12s ease-in-out infinite 10s",
        // New animations for the distribution flow particles
        "flow-particle-1": "flow-particle-1 6s linear infinite",
        "flow-particle-2": "flow-particle-2 6s linear infinite",
        "flow-particle-3": "flow-particle-3 6s linear infinite",
        // Bounce animation for arrows
        "bounce-slow": "bounce-slow 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
