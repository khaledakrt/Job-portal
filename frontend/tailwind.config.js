/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#1E3A8A",
      accent: "#3B82F6",
      yellow: "#FACC15",
      grayLight: "#F3F4F6",
      textDark: "#111827",
    },
  },
};
export const plugins = [];
