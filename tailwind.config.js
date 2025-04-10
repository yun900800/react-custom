/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        text: "var(--text-color)",
        background: {
          light: "#ffffff",
          dark: "#1e1e1e",
        },
      },
      minWidth: {
        'calc-100p-minus-2rem': 'calc(100% - 16rem)', // 自定义 min-width 值
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // 默认
    }),
  ],
  mode: 'jit',  // 启用 JIT 模式
  purge: ['./src/**/*.{html,js,jsx,ts,tsx}'],
}

