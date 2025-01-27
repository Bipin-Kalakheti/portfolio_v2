/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          primary: "#ffffff",
          secondary: "#f3f4f6",
          text: "#1f2937",
        },
        // Dark mode colors
        dark: {
          primary: "#1f2937",
          secondary: "#111827",
          text: "#f3f4f6",
        },
      },
    },
  },
  plugins: [],
};
