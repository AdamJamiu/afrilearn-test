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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_green: "#0AAC6C",
        primary_yellow: "#FFDF37",
        glass_green: "#CEEEE2",
        primary_grey: "#374258",
      },
      fontFamily: {
        wixMadeforTex: "var(--font-wixMadeforTex)",
        nunitoSans: "var(--font-nunito-sans)",
      },
    },
  },
  plugins: [],
};
export default config;
