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
      },
    },
  },
  plugins: [],
};
