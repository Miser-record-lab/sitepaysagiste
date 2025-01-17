import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : {
          DEFAULT: '#8a4d2e',
          100: '#322217',
          200: '#f5e9e0',
          300: '#f2e9d8',
        },
        green : {
          DEFAULT: '#468e5e',
          100: '#4e8561',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
