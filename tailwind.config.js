/** @type {import('tailwindcss').Config} */
export default {
     content: ["./src/**/*.{html,js,svelte,ts}"],
     theme: {
          extend: {
               fontFamily: {
                    manrope: ["Manrope", "sans-serif"],
               },
               colors: {
                    "dark-orange": "#D87D4A",
                    "light-orange": "#fbaf85",
                    "dark-black": "#101010",
                    "dark-gray": "#F1F1F1",
                    "light-gray": "#FAFAFA",
               },
               screens: {
                    desktop: "1440px",
               },
          },
     },
     plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp")],
};
