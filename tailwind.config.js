/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/page/**/*.{js,ts,jsx,tsx,mdx}',
    './app/globals.css/**/*.{js,ts,jsx,tsx,mdx}'
    // Add your own custom paths here
],
  theme: {
    extend: {
      color: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        accent: '#38c172',
      },
      spacing : {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [],
}

