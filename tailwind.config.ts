import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        // Used as: animate-[fadeInUp_0.6s_ease-out_forwards]
        // The arbitrary value syntax handles this automatically —
        // no extra entry needed here unless you want a shorthand class.
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        "site-text": "var(--site-text)",
        "site-accent": "var(--site-accent)",
        "site-bg": "var(--site-bg-start)",
        "site-bg-accent": "var(--site-bg-accent)",
        "site-panel": "var(--site-panel-bg)",
        "site-border": "var(--site-border)",
        "site-muted": "var(--site-muted)",
        "gray-light": "#f1f1f1",
        black: "#000",
        "red-primary": "#DD2D2C",
        background: "hsl(var(--background))",
        title: "#011936",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      screens: {
        xs: "540px",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          DEFAULT: "1140px",
        },
      },
      backgroundImage: {
        "banner-gradient":
          "linear-gradient(270deg, rgba(255,255,255, 1) 0%, rgba(255, 255,255,1) 40%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [nextui(), animate],
} satisfies Config;
