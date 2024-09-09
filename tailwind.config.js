/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#FF6452",
      },
      backgroundImage: {
        collectionBg: "url('./public/assets/images/collection-background.svg')",
        thumbnailBg: "url('./public/assets/images/thumbnail-background.svg')",
      },
    },
    fontFamily: {
      Montserrat: "'Montserrat', 'sans-serif'",
      Palanquin: "'Palanquin', 'sans-serif'",
    },
  },
  plugins: [],
};
