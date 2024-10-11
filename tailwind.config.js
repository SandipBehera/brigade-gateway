/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/home.css",
    // {
    //   relative: true,
    //   transform: (content) => content.replace(/taos:/g, ''),
    //   files: ['./src/*.{html,js}'],
    // },
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#000000',
      'bg-blue-600': '#1fb6ff',
      'slate':'rgb(226 232 240)',
      'bg-white':'#ffffff',
      'text-white':'#ffffff',
      'bg-gray-800':'#2d3748',
      'bg-gray-700':'#4a5568',
      'nav-text':'#ffffff',
      'bg-gray-500':'#718096',
      
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundColor:['active','group-focus','group-hover','group-active','group-visited','group-disabled','hover','focus','visited','disabled'],
      textColor:['active','group-focus','group-hover','group-active','group-visited','group-disabled','hover','focus','visited','disabled'],
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      88: '22rem',
      96: '24rem',
      97:'33rem',
      115:'115vh'
    },
    maxWidth: {
      'none': 'none',
    },
    boxShadow: {
      'custom-lg': '0 10px 30px rgba(0, 0, 0, 0.3)', // Example custom shadow
    }
  },
  variants: {
    extend: {
      hover: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  // safelist: [
  //   '!duration-[0ms]',
  //   '!delay-[0ms]',
  //   'html.js :where([class*="taos:"]:not(.taos-init))'
  // ]
}

