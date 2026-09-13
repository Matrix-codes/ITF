import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#071428",
          900: "#0F2A52", // Primary Brand
          800: "#163B72",
          700: "#1F4E93",
          600: "#2B68C1",
        },
        gold: {
          DEFAULT: "#E8962B", // Accent Brand (Used ONLY for CTA and small highlight details)
          hover: "#D2831E",
          active: "#BB7215",
          light: "#FDF5EA",
        },
        base: {
          surface: "#FFFFFF",
          subtle: "#F6F5EE",
          muted: "#ECEAE1",
          border: "#E2E0D5",
        },
        body: {
          DEFAULT: "#5B5A54", // Warm gray body text
          muted: "#7B7A73",
          light: "#9A9992",
        },
      },
      backgroundColor: {
        base: "#FFFEFB",
      },
      fontFamily: {
        heading: ["Lora", "Georgia", "serif"],
        body: ['"IBM Plex Sans"', "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
