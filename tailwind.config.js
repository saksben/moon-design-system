/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        // The main colors depend on whether using light/dark theme, so must use variables
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
        supportive: {
          "krillin-100": "rgb(var(--supportive-krillin))",
          "krillin-60": "rgba(var(--supportive-krillin), 0.56)",
          "krillin-10": "rgba(var(--supportive-krillin), 0.12)",
          "chiChi-100": "rgb(var(--supportive-chiChi))",
          "chiChi-60": "rgba(var(--supportive-chiChi), 0.56)",
          "chiChi-10": "rgba(var(--supportive-chiChi), 0.12)",
          "roshi-100": "rgb(var(--supportive-roshi))",
          "roshi-60": "rgba(var(--supportive-roshi), 0.56)",
          "roshi-10": "rgba(var(--supportive-roshi), 0.12)",
          "dodoria-100": "rgb(var(--supportive-dodoria))",
          "dodoria-60": "rgba(var(--supportive-dodoria), 0.56)",
          "dodoria-10": "rgba(var(--supportive-dodoria), 0.12)",
          "cell-100": "rgb(var(--supportive-cell))",
          "cell-60": "rgba(var(--supportive-cell), 0.56)",
          "cell-10": "rgba(var(--supportive-cell), 0.12)",
          "raditz-100": "rgb(var(--supportive-raditz))",
          "raditz-60": "rgba(var(--supportive-raditz), 0.56)",
          "raditz-10": "rgba(var(--supportive-raditz), 0.12)",
          "whis-100": "rgb(var(--supportive-whis))",
          "whis-60": "rgba(var(--supportive-whis), 0.56)",
          "whis-10": "rgba(var(--supportive-whis), 0.12)",
          "frieza-100": "rgb(var(--supportive-frieza))",
          "frieza-60": "rgba(var(--supportive-frieza), 0.56)",
          "frieza-10": "rgba(var(--supportive-frieza), 0.12)",
          "nappa-100": "rgb(var(--supportive-nappa))",
          "nappa-60": "rgba(var(--supportive-nappa), 0.56)",
          "nappa-10": "rgba(var(--supportive-nappa), 0.12)",
        },
      },
      textColor: {
        main: {
          piccolo: "rgb(var(--color-goten))",
          jiren: "rgb(var(--text-jiren))",
          hit: "rgb(var(--text-hit))",
          heles: "rgb(var(--text-heles))",
          beerus: "rgb(var(--text-beerus))",
          goku: "rgb(var(--text-goku))",
          gohan: "rgb(var(--text-gohan))",
          zeno: "rgb(var(--color-goten))",
          bulma: "rgb(var(--text-bulma))",
          trunks: "rgb(var(--color-goten))",
          goten: "rgb(var(--text-goten))",
          popo: "rgb(var(--text-popo))",
        },
        supportive: {
          "krillin-100": "rgb(var(--main-goten))",
          "krillin-60": "rgb(var(--main-bulma))",
          "krillin-10": "rgb(var(--main-bulma))",
          "chiChi-100": "rgb(var(--main-goten))",
          "chiChi-60": "rgb(var(--main-bulma))",
          "chiChi-10": "rgb(var(--main-bulma))",
          "roshi-100": "rgb(var(--main-goten))",
          "roshi-60": "rgb(var(--main-bulma))",
          "roshi-10": "rgb(var(--main-bulma))",
          "dodoria-100": "rgb(var(--main-goten))",
          "dodoria-60": "rgb(var(--main-bulma))",
          "dodoria-10": "rgb(var(--main-bulma))",
          "cell-100": "rgb(var(--main-bulma))", // Yes, cell-100 is supposed to have --main-bulma text color
          "cell-60": "rgb(var(--main-bulma))",
          "cell-10": "rgb(var(--main-bulma))",
          "raditz-100": "rgb(var(--main-goten))",
          "raditz-60": "rgb(var(--main-bulma))",
          "raditz-10": "rgb(var(--main-bulma))",
          "whis-100": "rgb(var(--main-goten))",
          "whis-60": "rgb(var(--main-bulma))",
          "whis-10": "rgb(var(--main-bulma))",
          "frieza-100": "rgb(var(--main-goten))",
          "frieza-60": "rgb(var(--main-bulma))",
          "frieza-10": "rgb(var(--main-bulma))",
          "nappa-100": "rgb(var(--main-goten))",
          "nappa-60": "rgb(var(--main-bulma))",
          "nappa-10": "rgb(var(--main-bulma))",
        },
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
      },
      maxWidth: {
        container: "1328px",
      },
      gap: {
        'moon-sm': '16px',
        'moon-md': '24px',
        'moon-lg': '32px',
        'x-moon-sm': '16px',
        'x-moon-md': '24px',
        'x-moon-lg': '32px',
        'y-moon-sm': '16px',
        'y-moon-md': '24px',
        'y-moon-lg': '32px',
      },
      // The shadow is best seen when using the appropriate light/dark mode, on a div with a background color of the same type, and on gohan/goku-colored boxes that are 64x64 rounded-md.
      boxShadow: {
        'sm': [
          'var(--shadow-first) var(--shadow-first-blur) rgba(var(--shadow-first-color))',
          'var(--shadow-sm) var(--shadow-sm-blur) rgba(var(--shadow-second-color))',
        ],
        'md': [
          'var(--shadow-first) var(--shadow-first-blur) rgba(var(--shadow-first-color))',
          'var(--shadow-md) var(--shadow-md-blur) rgba(var(--shadow-second-color))',
        ],
        'lg': [
          'var(--shadow-first) var(--shadow-first-blur) rgba(var(--shadow-first-color))',
          'var(--shadow-lg) var(--shadow-lg-blur) rgba(var(--shadow-second-color))',
        ],
        'xl': [
          'var(--shadow-first) var(--shadow-first-blur) rgba(var(--shadow-first-color))',
          'var(--shadow-xl) var(--shadow-xl-blur) rgba(var(--shadow-second-color-xl))',
          'var(--shadow-xl-third) var(--shadow-xl-third-blur) rgba(var(--shadow-xl-third-color))',
        ],
      },
      dropShadow: {
        'sm': [
          'var(--shadow-first) rgba(var(--shadow-first-color))',
          'var(--shadow-sm) rgba(var(--shadow-second-color))',
        ],
        'md': [
          'var(--shadow-first) rgba(var(--shadow-first-color))',
          'var(--shadow-md) rgba(var(--shadow-second-color))',
        ],
        'lg': [
          'var(--shadow-first) rgba(var(--shadow-first-color))',
          'var(--shadow-lg) rgba(var(--shadow-second-color))',
        ],
        'xl': [
          'var(--shadow-first) rgba(var(--shadow-first-color))',
          'var(--shadow-xl) rgba(var(--shadow-second-color-xl))',
          'var(--shadow-xl-third) rgba(var(--shadow-xl-third-color))',
        ],
      },
      fontFamily: {
        'sans': ["DM Sans", "Roboto"],
      },
      fontSize: {
        '3xs': '0.5625rem',
        '2xs': '0.625rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'md': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.5rem',
        '7xl': '4rem',
        '8xl': '4.5rem',
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
      },
    },
  },
  variants: {
    extend: {
      maxWidth: ["responsive"],
    },
  },
  plugins: [],
};
