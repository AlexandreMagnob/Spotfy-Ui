import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
      circular:["var(--font-circular)"]
      
      },
       width: {
        '82': '350px',
        '84': '420px',
        '86': '460px',
        '88': '500px',
      },
      height: {
        '17': '70px'
      },
      fontSize: {
        'xxs': '6px'
      },
      backgroundColor:{
        'zinc-1000': '#191414'
      },
    },
  },
  plugins: [],
};
export default config;
