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
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '992px', // 將 lg 斷點設為 992px
        xl: '1320px',
        '2xl': '1536px',
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
