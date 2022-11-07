/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  variants: {
    borderColor: ['hover', 'focus'],
  },
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
