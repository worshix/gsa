import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'400px',
        'fold':'360px'
      },
      colors:{
        main: {
          100: "#13d4f7",
          200:"#14b8d4",
          300: "#109eb8",
          400: "#0e8aa0",
          500: "#0b6b7c",
          600: "#095563",
          700: "#084550",
          800: "#063841",
          900: "#062f36"         
      },
        main2: "#FFCC00",
        main3:"#9A0000",
      },
    },
  },
  plugins: [],
};
export default config;
