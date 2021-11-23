module.exports = {
  mode: 'jit',
  purge: [
    // './public/**/*.html',
    //  './src/**/*.{js,jsx,ts,tsx,vue}',
 
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue:'#5F99F7',
      },

      spacing: {
        'width-logo': '200px',
       
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
