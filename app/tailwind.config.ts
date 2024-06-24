import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        borderShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
      }
    },
  },
  plugins: [],
};
export default config;
