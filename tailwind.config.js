module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as necessary
  ],
  theme: {
    
    backgroundImage: {
        'nav': "url('../public/images/packTrain.jpg')",
      },
    extend: {
      colors: {
        dark: '#343a40 ',
        body: '#6c757d',
        primary: '#007bff',
        white: '#ffffff',
        light: '#f8f9fa',
        secondary: '#6c757d',
        
      },
      spacing: {
        '30': '30px',
        '100': '100px',
      },
    },
  },
  plugins: [],
}
