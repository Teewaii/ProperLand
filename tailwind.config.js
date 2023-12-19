/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B3A5D",
        prim_hover: "#26244f",
        secondary: "#FFBB50",
        content: "#8F8F8F",
        link: "#B16642",
        hero: "#EAB196",
        hero_end: "#FFF0E9",
        link: "#C78A6C",
      },

      backgroundImage: {
        heroBgd_rt: "url('../src/img/Home/Icon_rt.png')",
        heroBgd_lft: "url('../src/img/Home/Icon.png')",
        heroImg: "url('../src/img/Home/hero_img.png')",
        vid_img: "url('../src/img/Home/vid_img.jpg')",
        feat_img: "url('../src/img/Home/Touch with us.png')",
        "1why1": "url('../src/img/Home/1why1.png')",
        "1why2": "url('../src/img/Home/1why2.png')",
        "2why2a": "url('../src/img/Home/2why2a.png')",
        "2why3": "url('../src/img/Home/2why3.png')",
        "3why1": "url('../src/img/Home/3why1.png')",
        about: "url('../src/img/Home/ImageAbout_bkg.png')",
        victor: "url('../src/img/Home/victor.jpg')",
        about_us_header: "url('../src/img/About/hero_img.png')",
        vintro: "url('../src/img/About/buying_sellin_Pattern.png')",
        vintro_img: "url('../src/img/About/vintro_img.png')",
      },
      fontFamily: {
        Source: ["Source Sans 3"],
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "5rem",
        xl: "7rem",
        // '2xl': '8rem',
      },

      center: true,
    },

    cont: {
      "padding-left": {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "5rem",
        xl: "7rem",
        // '2xl': '8rem',
      },

      center: true,
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
