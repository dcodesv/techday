/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        customBounce: "customBounce 2s infinite",
      },
      keyframes: {
        customBounce: {
          "0%, 100%": { transform: "translateY(-12px)" },
          "50%": { transform: "translateY(12px)" },
        },
      },
    },
  },
  plugins: [],
}
