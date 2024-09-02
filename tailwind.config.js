import { createPreset, presets } from 'fumadocs-ui/tailwind-plugin';
import {nextui} from "@nextui-org/react";

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
  presets: [
    createPreset({
      presets: 'ocean',
    }),
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: "#5166EE",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'repeat-gradient-to-r':
          'repeating-linear-gradient(to right, var(--tw-gradient-stops))',
        'repeat-gradient-to-br':
          'repeating-linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      keyframes: {
        stroke: {
          from: {
            'stroke-dasharray': '1000',
          },
          to: {
            'stroke-dasharray': '1000',
            'stroke-dashoffset': '2000',
          },
        },
      },
      animation: {
        stroke: 'stroke 5s linear infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
