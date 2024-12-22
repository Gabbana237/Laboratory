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
      colors: {
        darkBlue: '#314d66',
        turquoiseLight: '#1eb798',
        emeraldLight: '#3bc0a5',
        lightGray: '#e2eceb',
        blueGrayDark: '#384555',
        brightBlue: '#2d7fb6',
        turquoiseDark: '#1da389',
        blueGray: '#5288ab',
        graym: '#ccd0d4',
        darkGreen: '#299581',
      },
    },
  },
  plugins: [],
};


