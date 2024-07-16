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
        "project-green": "#399E5A",
      },
      animation: {
        spinLoader: "spin .4s linear infinite",
        spinSlow: "spin 5s linear infinite",
      },
      patterns: {
        opacities: {
            100: "1",
            80: ".80",
            60: ".60",
            40: ".40",
            20: ".20",
            10: ".10",
            5: ".05",
        },
        sizes: {
            1: "0.25rem",
            2: "0.5rem",
            4: "1rem",
            6: "1.5rem",
            8: "2rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            32: "8rem",
            40: "4rem",
        }
    }
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}

