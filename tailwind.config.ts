import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1176px",
      },
      colors: {
        "light-white": "#FAFAFA",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/images/png/homepage-bg.png')",
      }
    },
  },
  plugins: [],
} satisfies Config;
