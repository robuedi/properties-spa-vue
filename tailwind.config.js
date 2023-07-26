/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      flexBasis: {
        "1/2-gap-3": "calc(50% - (1/2 * 1rem))",
        "1/3-gap-3": "calc(33.3% - (2/3 * 1rem))",
        "1/4-gap-3": "calc(25% - (3/4 * 1rem))"
      },
      colors:{
        'surface-border': '#dfe7ef',
        'surface-ground': '#eff3f8'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

