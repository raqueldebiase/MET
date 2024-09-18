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
        primary: "#212121",
        foreground: "var(--foreground)",
        white: '#FFFFFF',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/bg/hero.png')",
        'dutch-exhibition': "url('/img/bg/theAnnunciation.jpg')",
        'manuscript-exhibition': "url('/img/bg/capitalLetter.jpg')"
      },
      height: {
        '200': '230vh',
      },
      backgroundSize: {
        '100': '100%',
        '130': '130%',
      },
      transitionTimingFunction: {
        'in-out-slow': 'cubic-bezier(0.4, 0, 0.2, 1)', // Ajuste para suavidade
      },
      transitionDuration: {
        '3000': '3000ms', // Um tempo mais longo para a transição
      },
    },
  },
  plugins: [],
};
export default config;
