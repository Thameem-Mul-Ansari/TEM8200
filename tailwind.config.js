/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/React components
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 15s ease-in-out infinite', // Custom float animation
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)' // Starting and ending position
          },
          '50%': { 
            transform: 'translate(20px, 20px) rotate(10deg)' // Midpoint position
          },
        },
      },
    },
  },
  plugins: [], // Add plugins here if needed
};