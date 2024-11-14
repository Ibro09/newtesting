/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        circularMotion: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": {
            transform: "rotate(-360deg) translateX(100px) rotate(360deg)",
          },
        },
        fall: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(300%)", opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        grow: {
          "0%": { transform: "scaleY(1)" },
          "25%": { transform: "scaleY(0.5)" },
          "50%": { transform: "scaleY(0.5)" },
          "100%": { transform: "scaleY(1)" },
        },
        dot: {
          "0%, 20%": { opacity: 0 },
          "25%, 100%": { opacity: 1 },
        },
      },
      animation: {
        fall: "fall 4s ease-in-out infinite",
        "slide-up": "slideUp 1s ease-out",
        circle: "circularMotion 5s linear infinite",
        run: "run 5s linear infinite",
        jump: "jump 0.5s ease",
        grow: "grow 1s infinite ease-out",
        dot: "dot 1.5s steps(1, end) infinite",
      },
    },
  },
  plugins: [],
};

