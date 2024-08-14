/* @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.html', './layout/**/*.ejs', './main.js'],
  theme: {
    extend: {
      colors: {
        primary: "#aa0601",
        secondary: "#fbf2f2",
        third: "#9f1213",
        pink: "#FBF2F2",
        'text-primary': "#650300",
        'border-gray': "#DEE2E6",
        'gray': "#707070",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '992px', // 將 lg 斷點設為 992px
        xl: '1320px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'home-header': "url('/assets/images/home-header.png')",
        'home-header-sm': "url('/assets/images/home-header-sm.png')",
        'index-bg-sm': "url('/assets/images/index-bg-sm.png')",
        'index-bg-md': "url('/assets/images/index-bg-md.png')",
        'index-bg': "url('/assets/images/index-bg.png')",
      },
      fontSize: {
        'xs': ['0.75rem', '1.5'],
        'sm': ['0.875rem', '1.5'],
        'base': ['1rem', '1.5'],
        'lg': ['1.125rem', '1.5'],
        'xl': ['1.25rem', '1.5'],
        '2xl': ['1.5rem', '1.5'],
        '3xl': ['1.875rem', '1.5'],
        '4xl': ['2.25rem', '1.5'],
        '5xl': ['3rem', '1.5'],
        '6xl': ['3.75rem', '1.5'],
        '7xl': ['4.5rem', '1.5'],
        '8xl': ['6rem', '1.5'],
        '9xl': ['8rem', '1.5'],
      },
    },
    container: {
      center: true,
      padding: '12px', // 預設的內邊距
      screens: {
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1320px', // 將 xl 的最大寬度設置為 1320px
        '2xl': '1536px',
      },
    }
  },
  plugins: [require('@tailwindcss/forms')],
};
