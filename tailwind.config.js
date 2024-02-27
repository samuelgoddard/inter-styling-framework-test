/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#17100E',
        white: '#FFF',
      },
      fontFamily: {
        mediumLL: ['var(--font-MediumLL)', ...fontFamily.sans],
        ivoryLL: ['var(--font-IvoryLL)', ...fontFamily.serif]
      },
    }
  }
};
