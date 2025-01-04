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
      fontFamily: {
        "sohne": "'Sohne Schmal', sans-serif",
        'maisonLight': "'MaisonNeueLight',sans-serif",
        'maisonMedium': "'MaisonNeueMedium',sans-serif",
        'maisonDemi': "'MaisonNeueDemi',sans-serif",
        'maisonMono': "'MaisonNeueMono',sans-serif",
      },
      backgroundImage: {
        'mobile-marketing-one': "url('/public/assets/images/webp/mobile-read-one.webp')",
        'mobile-marketing-two': "url('/public/assets/images/webp/mobile-read-two.webp')",
        'mobile-marketing-three': "url('/public/assets/images/webp/mobile-read-three.webp')",
      },
      colors: {
        "yellow": "#D2F038",
        "blue": "#097980",
        "grey": "#9DC9CC", 
        "sky": "#00AFB5",
      },
      fontSize: {
        "custom-xs": "15px",
        "custom-sm": "120px",
        "custom-md": "100px",
        "custom-lg": "80px",
        "custom-xl": "50px",
        "custom-2xl": "40px",
      },
      lineHeight: {
        "custom-sm": "92%",
      },
      
    },
  },
  plugins: [],
}