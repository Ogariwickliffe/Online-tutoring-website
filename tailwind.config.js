/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind works in your React components
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'], // Adding Comfortaa font
      }, 
    },
  },
  plugins: [],
}

module.exports = {
  mode: 'jit', // Enable JIT mode
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}


