/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#0077FF',
        'cherry-blossom-pink': '#FF66B3',
        'midnight-black': '#121212',
        'cyber-yellow': '#FFD700',
        'soft-grey': '#F0F0F0',
        'emerald-green': '#50C878',
      },
      backgroundImage: {
        'aniflix-banner': "url('/img/aniflix_banner.webp')",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
