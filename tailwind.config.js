/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      colors: {
        "yellow": "#D2F038",
        "blue": "#097980",
      },
      fontSize: {
        "custom-xs": "15px",
        "custom-sm": "120px",
        "custom-md": "100px",
        
      },
      lineHeight: {
        "custom-sm": "115%",
      }
    },
  },
  plugins: [],
}