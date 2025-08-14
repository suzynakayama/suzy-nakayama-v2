import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        head: ['var(--font-head)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        'violet-light': '#EDE0FF',
        'violet-dark': '#4B0082',
      },
    },
  },
  plugins: [typography],
};

export default config;
