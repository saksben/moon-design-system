/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        main: {
          piccolo: "rgb(var(--color-piccolo))",
          jiren: "rgba(var(--color-jiren), var(--opacity-jiren))",
          hit: "rgb(var(--color-hit))",
          heles: "rgba(var(--color-heles), var(--opacity-heles))",
          beerus: "rgb(var(--color-beerus))",
          goku: "rgb(var(--color-goku))",
          gohan: "rgb(var(--color-gohan))",
          zeno: "rgba(var(--color-zeno), var(--opacity-zeno))",
          bulma: "rgb(var(--color-bulma))",
          trunks: "rgb(var(--color-trunks))",
          goten: "rgb(var(--color-goten))",
          popo: "rgb(var(--color-popo))",
        },
      },
    },
  },
  plugins: [],
};
