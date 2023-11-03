/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '640px',
      md: '710px',
    },
    extend: {
      fontFamily: {
        sans: [
          'IBM Plex Mono',
          'Open Sans',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        bgDark: 'var(--bg-color-dark)',
        fontDark: 'var(--font-color-dark)',
        fontDarkGray1: 'var(--font-color-dark-gray-1)',
        fontDarkGray2: 'var(--font-color-dark-gray-2)',
        fontDarkGray3: 'var(--font-color-dark-gray-3)',
        fontDarkGray4: 'var(--font-color-dark-gray-4)',
        fontDarkGray5: 'var(--font-color-dark-gray-5)',
        fontLightGray1: 'var(--font-color-light-gray-1)',
        fontLightGray2: 'var(--font-color-light-gray-2)',
        fontLightGray3: 'var(--font-color-light-gray-3)',
        bgLight: 'var(--bg-color-light)',
        fontLight: 'var(--font-color-light)',
        btnDark: 'var(--btn-bg-color-dark)',
        btnLight: 'var(--btn-bg-color-light)',
        btnFont: 'var(--btn-font-color)',
        light: 'var(--accent-light)',
        dark: 'var(--accent-dark)',
      },
    },
  },
  plugins: [],
};
