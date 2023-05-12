/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "alexRed": "#FF4501",
        "alexTeal": "#7FFFD4",
        "alexPink": "#D8BFD8",
      },
      fontFamily: {
        "roobert": ["Roobert", "sans-serif"],
        "reckless": ["Reckless", "sans-serif"],
        "blogh": ["Blogh", "serif"],
        "alpina": ["GTAlpina", "serif"],
      },
    },
  },
  plugins: [],
};
