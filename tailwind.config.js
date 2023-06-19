/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['helvetica'],
        'sans': ['helvetica'],
      },
      colors: {
        'primary': '#F08300',
        'secondary': '#1D6C8B',
        'accent': '#2C4055',
        'accent-2': '#1B2933',
        'accent-3': '#9AD1D4',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
