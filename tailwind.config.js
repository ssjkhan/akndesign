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
        "roobert": ["", "sans-serif"],
        "reckless": ["", "sans-serif"],
        "blogh": ["", "serif"],
        "alpina": ["", "serif"],
        "testing": ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
