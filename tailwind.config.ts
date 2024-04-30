import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        // inter: ["var(--font-inter)"],
        nunito: ["var(--font-nunito)"],
      },
      colors:{
        orange:{
          dark:"#F27405",
          light:"#F2B705",
          semiLight:"#F29F05",
          semiDark:"#F28705",
        }
      }
    },
  },
  plugins: [],
};
export default config;
