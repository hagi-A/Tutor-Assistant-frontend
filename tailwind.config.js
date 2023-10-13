// @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': "poppins",     
       },
      colors: {
        primary: "#3E82FC",
        lightprimary: "#ECF3FF",
        'royal-purple': '#6B3E99',
        'midnight-blue': {
          50: 'rgba(25, 25, 112, 0.05)',
          100: 'rgba(25, 25, 112, 0.1)',
          200: 'rgba(25, 25, 112, 0.2)',
          300: 'rgba(25, 25, 112, 0.3)',
          400: 'rgba(25, 25, 112, 0.4)',
          500: 'rgba(25, 25, 112, 0.5)',
          600: 'rgba(25, 25, 112, 0.6)',
          700: 'rgba(25, 25, 112, 0.7)',
          800: 'rgba(25, 25, 112, 0.8)',
          900: 'rgba(25, 25, 112, 0.9)',
        },
        'gold': '#FFD700',
        'silver': '#C0C0C0',
        'black': '#000000',
        'deep-red': '#8B0000',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

// Background: Use Midnight Blue (#191970) as the primary background color for your app. This dark, rich color will set the tone for the luxurious theme.

// Text: Use White (#FFFFFF) for most text to ensure readability against the dark background.

// Accents: Use Gold (#FFD700) for accents such as headings, buttons, and important UI elements. This color will add a touch of luxury and draw attention to key areas of your app.

// Borders and Icons: Use Silver (#C0C0C0) for borders and icons to create a harmonious contrast with the dark background.

// Call-to-Action: Use Deep Red (#8B0000) sparingly for call-to-action buttons or highlights to create a sense of urgency and draw user attention.

// Secondary Text: Use Silver (#C0C0C0) or a lighter shade of gray for secondary text to maintain readability and hierarchy.