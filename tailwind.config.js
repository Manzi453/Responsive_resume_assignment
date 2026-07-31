/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Token names (ochre/gold/sage/ivory) are historical from an earlier
        // warm palette; values below are the cooler cyan/blue direction.
        // Kept the names to avoid a 20-file rename — see project notes.
        ink: '#10141C',
        charcoal: '#1B2530',
        ochre: '#2D8FD1',
        gold: '#7DCFE0',
        sage: '#5FB0A8',
        ivory: '#EDF2F5',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
