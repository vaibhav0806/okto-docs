import { createPreset } from 'fumadocs-ui/tailwind-plugin';
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '980px',  // Set the lg breakpoint to 980px
      },
    },
  },
  presets: [createPreset({
    preset: 'ocean',
  }),],
  darkMode: "class",
  plugins: [nextui()],
};
