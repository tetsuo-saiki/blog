/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  media: true, // 'darkMode' or 'class'
  purge: {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
