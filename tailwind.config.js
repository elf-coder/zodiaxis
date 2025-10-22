/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          bg: "#0B0C1A",
          surface: "#15182B",
          text: "#E6E6FA",
          accent: "#A855F7",
          glow: "#00FFC6",
          border: "#2D2F4A"
        }
      },
      boxShadow: {
        aurora: "0 0 20px rgba(168, 85, 247, 0.4)",
        neon: "0 0 12px rgba(0, 255, 198, 0.6)",
      },
      backgroundImage: {
        "aurora-gradient": "linear-gradient(135deg, #1b1e3f 0%, #3b2667 50%, #00FFC6 100%)",
        "starfield": "radial-gradient(circle at 20% 20%, #1a1f35, #0B0C1A 80%)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
}
