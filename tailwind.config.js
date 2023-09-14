/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'primary': '#3B3A5D',
        'prim_hover': '#26244f',
        'secondary': '#FFBB50',
        'content': '#8F8F8F',
        'link': '#B16642',
        'hero': '#EAB196',
        'hero_end': '#FFF0E9',
        'link': '#C78A6C',


      },

      backgroundImage: {
        'heroBgd_rt': "url('../src/img/Home/Icon_rt.png')",
        'heroBgd_lft': "url('../src/img/Home/Icon.png')",
        'heroImg': "url('../src/img/Home/hero_img.png')",
        'vid_img': "url('../src/img/Home/vid_img.jpg')",
        'feat_img': "url('../src/img/Home/Touch with us.png')"
      },
      fontFamily: {
        Source: ['Source Sans 3'],
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '7rem',
        // '2xl': '8rem',
      },

      center: true,
    },


  },

  plugins: [],
}

