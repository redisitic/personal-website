/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        nm: '20px 20px 35px #999999, -20px -20px 35px #ffffff',
        nmb: '12px 12px 30px #afafaf, -12px -12px 30px #ffffff',
        nma: '12px 12px 30px #afafaf',
        nmd: '20px 20px 35px #0a0a0a, -20px -20px 35px #1e1e1e',
        nmdb: '12px 12px 30px #0a0a0a, -12px -12px 30px #1e1e1e'
      },
      backgroundImage: {
        dk: "linear-gradient(145deg, #121212, #151515)"
      }
    },
  },
  plugins: [],
}

