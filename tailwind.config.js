/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5F2",
        ink: "#111111",
        charcoal: "#2A2A2A",
        cobalt: "#0052CC",
        mist: "#E8ECF5",
        beige: "#EDE4D8"
      },
      fontFamily: {
        sans: ["Inter", "General Sans", "Satoshi", "system-ui", "sans-serif"],
        display: ["General Sans", "Satoshi", "Inter", "system-ui", "sans-serif"],
        editorial: ["Satoshi", "Inter", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        hero: "-0.04em"
      },
      boxShadow: {
        paper: "0 16px 40px rgba(15, 15, 15, 0.08)",
        tape: "0 8px 20px rgba(0, 0, 0, 0.12)",
        depth: "0 22px 40px rgba(0, 82, 204, 0.16)"
      },
      keyframes: {
        grain: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-3%, 2%)" },
          "40%": { transform: "translate(2%, -3%)" },
          "60%": { transform: "translate(-2%, 3%)" },
          "80%": { transform: "translate(3%, -2%)" },
          "100%": { transform: "translate(0, 0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        marquee: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" }
        }
      },
      animation: {
        grain: "grain 7s steps(8) infinite",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 24s linear infinite"
      }
    }
  },
  plugins: []
};
