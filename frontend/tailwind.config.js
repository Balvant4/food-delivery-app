const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/header_img.png')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
