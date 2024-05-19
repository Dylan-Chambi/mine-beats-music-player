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
        primary: '#5200F5',
        secondary: '#bd08ff',
        onPrimary: '#ffffff',
        onSecondary: '#ffffff',
        background: '#111218',
        onBackground: {
          DEFAULT: '#ffffff',
          muted: '#a3a3a3',
        },
        backgroundSidebar: '#14141d',
        onBackgroundSidebar: {
          DEFAULT: '#ffffff',
          muted: '#a3a3a3',
        },
        icon: '#ffffff',
      },
    },
  },
  plugins: [],
};
export default config;
