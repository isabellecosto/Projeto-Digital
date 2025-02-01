/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#C92071",
        secondaryColor: "#47474717",
        secondaryColorLight: "#E09E79",
        yellow: "#F6AA1C",
        yellowLight: "#E7FF86",
        bgFooter: "#1F1F1F",
        bgCard: "#D8E3F2",
        lightGrey: "#F5F5F5",
        lightGrey1: "#8F8F8F",
        darkGray2: "#474747",
        darkGray: "#1F1F1F",
      },
    },
  },
  plugins: [],
};
