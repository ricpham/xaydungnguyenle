module.exports = {
  mode: 'jit',
  content: [
    './*.html', './*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        // 35 : "35px",
      },

      colors: {
        // Configure your color palette here
        // gray33: "#333",
        // orangefa: "#ffa400",
      },

      screens: {
        
        'mobile': '300px',

        'mobile-sm': '576px',
        
        'tablet': '768px',

        'tablet-sm': '992px',
  
        'laptop': '1200px',
 
        'laptop-sm':'1440px',
  
        'desktop': '1600px',

        'desktop-sm': '1920px',

      }


    },
  },
  plugins: [],

  variants: {
    extend: {
      backgroundColor: ['odd'],
      // ...
      // borderColor: ['focus-visible', 'first'],
      // // ...
      // textColor: ['visited'],
    }
  },
}
