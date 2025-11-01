/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B0082',
        accent: '#FF4500',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
