/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        // The main colors depend on whether using light/dark theme, so must use variables
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

        krillin: "rgb(var(--supportive-krillin))",
        "krillin-60": "rgba(var(--supportive-krillin), 0.56)",
        "krillin-10": "rgba(var(--supportive-krillin), 0.12)",
        chiChi: "rgb(var(--supportive-chiChi))",
        "chiChi-60": "rgba(var(--supportive-chiChi), 0.56)",
        "chiChi-10": "rgba(var(--supportive-chiChi), 0.12)",
        roshi: "rgb(var(--supportive-roshi))",
        "roshi-60": "rgba(var(--supportive-roshi), 0.56)",
        "roshi-10": "rgba(var(--supportive-roshi), 0.12)",
        dodoria: "rgb(var(--supportive-dodoria))",
        "dodoria-60": "rgba(var(--supportive-dodoria), 0.56)",
        "dodoria-10": "rgba(var(--supportive-dodoria), 0.12)",
        cell: "rgb(var(--supportive-cell))",
        "cell-60": "rgba(var(--supportive-cell), 0.56)",
        "cell-10": "rgba(var(--supportive-cell), 0.12)",
        raditz: "rgb(var(--supportive-raditz))",
        "raditz-60": "rgba(var(--supportive-raditz), 0.56)",
        "raditz-10": "rgba(var(--supportive-raditz), 0.12)",
        whis: "rgb(var(--supportive-whis))",
        "whis-60": "rgba(var(--supportive-whis), 0.56)",
        "whis-10": "rgba(var(--supportive-whis), 0.12)",
        frieza: "rgb(var(--supportive-frieza))",
        "frieza-60": "rgba(var(--supportive-frieza), 0.56)",
        "frieza-10": "rgba(var(--supportive-frieza), 0.12)",
        nappa: "rgb(var(--supportive-nappa))",
        "nappa-60": "rgba(var(--supportive-nappa), 0.56)",
        "nappa-10": "rgba(var(--supportive-nappa), 0.12)",
        // Original Figma design creates hover effect with a <span> underlay in a <Hover /> component; maybe in the future, but I'm going simple with hard-coded hovering
        hover: {
          piccolo: "rgba(var(--hover-piccolo))",
          jiren: "rgba(var(--hover-jiren))",
          hit: "rgba(var(--hover-hit))",
          heles: "rgba(var(--hover-heles))",
          beerus: "rgba(var(--hover-beerus))",
          goku: "rgba(var(--hover-goku))",
          gohan: "rgba(var(--hover-gohan))",
          zeno: "rgba(var(--hover-zeno))",
          bulma: "rgba(var(--hover-bulma))",
          trunks: "rgba(var(--hover-trunks))",
          goten: "rgba(var(--hover-goten))",
          popo: "rgba(var(--hover-popo))",

          krillin: "rgba(var(--hover-krillin-100))",
          chiChi: "rgba(var(--hover-chiChi-100))",
          roshi: "rgba(var(--hover-roshi-100))",
          dodoria: "rgba(var(--hover-dodoria-100))",
          cell: "rgba(var(--hover-cell-100))",
          raditz: "rgba(var(--hover-raditz-100))",
          whis: "rgba(var(--hover-whis-100))",
          frieza: "rgba(var(--hover-frieza-100))",
          nappa: "rgba(var(--hover-nappa-100))",
          "krillin-60": "rgba(var(--hover-krillin-60))",
          "chiChi-60": "rgba(var(--hover-chiChi-60))",
          "roshi-60": "rgba(var(--hover-roshi-60))",
          "dodoria-60": "rgba(var(--hover-dodoria-60))",
          "cell-60": "rgba(var(--hover-cell-60))",
          "raditz-60": "rgba(var(--hover-raditz-60))",
          "whis-60": "rgba(var(--hover-whis-60))",
          "frieza-60": "rgba(var(--hover-frieza-60))",
          "nappa-60": "rgba(var(--hover-nappa-60))",
          "krillin-10": "rgba(var(--hover-krillin-10))",
          "chiChi-10": "rgba(var(--hover-chiChi-10))",
          "roshi-10": "rgba(var(--hover-roshi-10))",
          "dodoria-10": "rgba(var(--hover-dodoria-10))",
          "cell-10": "rgba(var(--hover-cell-10))",
          "raditz-10": "rgba(var(--hover-raditz-10))",
          "whis-10": "rgba(var(--hover-whis-10))",
          "frieza-10": "rgba(var(--hover-frieza-10))",
          "nappa-10": "rgba(var(--hover-nappa-10))",
        },
        // Focus ring should be focus:ring-1 focus:ring-offset-1 focus:ring-main-bulma. Make sure that inner elements are rounded too when you want rounding (ex. button)
      },
      textColor: {
        piccolo: "rgb(var(--color-piccolo))",
        jiren: "rgb(var(--color-jiren))",
        hit: "rgb(var(--color-hit))",
        heles: "rgb(var(--color-heles))",
        beerus: "rgb(var(--color-beerus))",
        goku: "rgb(var(--color-goku))",
        gohan: "rgb(var(--color-gohan))",
        zeno: "rgb(var(--color-zeno))",
        bulma: "rgb(var(--color-bulma))",
        trunks: "rgb(var(--color-trunks))",
        goten: "rgb(var(--color-goten))",
        popo: "rgb(var(--color-popo))",

        krillin: "rgb(var(--supportive-krillin))",
        "krillin-60": "rgba(var(--supportive-krillin), 0.56)",
        "krillin-10": "rgba(var(--supportive-krillin), 0.12)",
        chiChi: "rgb(var(--supportive-chiChi))",
        "chiChi-60": "rgba(var(--supportive-chiChi), 0.56)",
        "chiChi-10": "rgba(var(--supportive-chiChi), 0.12)",
        roshi: "rgb(var(--supportive-roshi))",
        "roshi-60": "rgba(var(--supportive-roshi), 0.56)",
        "roshi-10": "rgba(var(--supportive-roshi), 0.12)",
        dodoria: "rgb(var(--supportive-dodoria))",
        "dodoria-60": "rgba(var(--supportive-dodoria), 0.56)",
        "dodoria-10": "rgba(var(--supportive-dodoria), 0.12)",
        cell: "rgb(var(--supportive-cell))",
        "cell-60": "rgba(var(--supportive-cell), 0.56)",
        "cell-10": "rgba(var(--supportive-cell), 0.12)",
        raditz: "rgb(var(--supportive-raditz))",
        "raditz-60": "rgba(var(--supportive-raditz), 0.56)",
        "raditz-10": "rgba(var(--supportive-raditz), 0.12)",
        whis: "rgb(var(--supportive-whis))",
        "whis-60": "rgba(var(--supportive-whis), 0.56)",
        "whis-10": "rgba(var(--supportive-whis), 0.12)",
        frieza: "rgb(var(--supportive-frieza))",
        "frieza-60": "rgba(var(--supportive-frieza), 0.56)",
        "frieza-10": "rgba(var(--supportive-frieza), 0.12)",
        nappa: "rgb(var(--supportive-nappa))",
        "nappa-60": "rgba(var(--supportive-nappa), 0.56)",
        "nappa-10": "rgba(var(--supportive-nappa), 0.12)",
      },
      // SVG icon customization: fill-{color} (or) stroke-{color} stroke-2. Size has 4 SVG sizes.
      spacing: {
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        7: "1.75rem", // 28px
        8: "2rem", // 32px
        9: "2.25rem", // 36px
        10: "2.5rem", // 40px
        11: "2.75rem", // 44px
        12: "3rem", // 48px
        13: "3.25rem", // 52px
        14: "3.5rem", // 56px
      },
      size: {
        "svg-1": "0.5rem", // 8px
        "svg-2": "1rem", // 16px
        "svg-3": "1.5rem", // 24px
        "svg-4": "2rem", // 32px
      },
      maxWidth: {
        container: "1328px",
      },
      gap: {
        "moon-sm": "16px",
        "moon-md": "24px",
        "moon-lg": "32px",
        "x-moon-sm": "16px",
        "x-moon-md": "24px",
        "x-moon-lg": "32px",
        "y-moon-sm": "16px",
        "y-moon-md": "24px",
        "y-moon-lg": "32px",
      },
      // The shadow is best seen when using the appropriate light/dark mode, on a div with a background color of the same type, and on gohan/goku-colored boxes that are 64x64 rounded-md.
      boxShadow: {
        sm: [
          "var(--shadow-first) var(--shadow-first-blur) rgba(var(--shadow-first-color))",
          "var(--shadow-sm) var(--shadow-sm-blur) rgba(var(--shadow-second-color))",
        ],
        md: [
          "var(--shadow-first) var(--shadow-first-blur) rgba(var(--shadow-first-color))",
          "var(--shadow-md) var(--shadow-md-blur) rgba(var(--shadow-second-color))",
        ],
        lg: [
          "var(--shadow-first) var(--shadow-first-blur) rgba(var(--shadow-first-color))",
          "var(--shadow-lg) var(--shadow-lg-blur) rgba(var(--shadow-second-color))",
        ],
        xl: [
          "var(--shadow-first) var(--shadow-first-blur) rgba(var(--shadow-first-color))",
          "var(--shadow-xl) var(--shadow-xl-blur) rgba(var(--shadow-second-color-xl))",
          "var(--shadow-xl-third) var(--shadow-xl-third-blur) rgba(var(--shadow-xl-third-color))",
        ],
      },
      dropShadow: {
        sm: [
          "var(--shadow-first) rgba(var(--shadow-first-color))",
          "var(--shadow-sm) rgba(var(--shadow-second-color))",
        ],
        md: [
          "var(--shadow-first) rgba(var(--shadow-first-color))",
          "var(--shadow-md) rgba(var(--shadow-second-color))",
        ],
        lg: [
          "var(--shadow-first) rgba(var(--shadow-first-color))",
          "var(--shadow-lg) rgba(var(--shadow-second-color))",
        ],
        xl: [
          "var(--shadow-first) rgba(var(--shadow-first-color))",
          "var(--shadow-xl) rgba(var(--shadow-second-color-xl))",
          "var(--shadow-xl-third) rgba(var(--shadow-xl-third-color))",
        ],
      },
      fontFamily: {
        sans: ["DM Sans", "Roboto"],
      },
      fontSize: {
        "3xs": "0.5rem", // 8px (the theme doesn't like when I put as 0.5625rem)
        "2xs": "0.625rem", // 10px
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        md: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "2rem", // 28px
        "4xl": "2.5rem", // 32px
        "5xl": "3rem", // 36px
        "6xl": "3.5rem", // 40px
        "7xl": "4rem", // 44px
        "8xl": "4.5rem", // 48px
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
        bold: "700",
      },
      keyframes: {
        // Horizontal bounce
        "bounce-x": {
          "0%, 100%": {
            transform: "translateX(2%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "25%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
          "50%": {
            transform: "translateX(2%)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
          "75%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        "bounce-x": "bounce-x 1s infinite", // Horizontal bounce
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite", // Pulse effect for ping
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
