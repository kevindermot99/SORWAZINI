/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ['Kanit', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        NotoSansElymaic: ['Noto Sans Elymaic', 'sans-serif'],
      },
      colors: {
        // "main-color": "#181d27",
        "light-body-color": "#FFFFFF",
        "dark-body-color": "#181d27",
        "text-dark-color": "#1E1F22",
        "text-light-color": "#ebebeb",
        "button-color": "#3A7D44",
      },
    },
  },
  plugins: [],
}

