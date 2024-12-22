module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',  // Taille extra petite
        'sm': '0.875rem', // Taille petite
        'base': '1rem',   // Taille par défaut
        'lg': '1.125rem', // Taille large
        'xl': '1.25rem',  // Taille extra large
        '2xl': '1.5rem',  // 2 fois extra large
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        // Tailles personnalisées
        'custom-small': '0.65rem',
        'custom-large': '2.75rem',
      },
    },
  },
  plugins: [],
};


