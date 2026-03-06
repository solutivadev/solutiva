/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neumorfismo:
          "8px 8px 20px rgba(0,0,0,0.15), -8px -8px 20px rgba(255,255,255,0.05)",
        soft: "0 4px 12px rgba(0,0,0,0.1)",
        premium: "0 20px 50px rgba(0,0,0,0.05)",
      },
    colors: {
      solutiva: {

        // ☀️ LIGHT MODE
        bg: "#f0fff8",
        text: "#2f2f2f",
        primary: "#0f4d5c",
        accent: "#36ecdf",
        card: "#ffffff",
        border: "#e6eaed",
        input: "#ffffff",

        // 🌑 DARK MODE
        dark: {
          bg: "#20272c",
          text: "#d9d9d9",
          primary: "#064728",
          accent: "#22c3b8",
          card: "#20272c",
          border: "#064728",
          input: "#20272c",
        },
      },
    },
            // ⭐ Animaciones
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },

      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}