/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-bg": "var(--base-bg)",
        "base-bg-2": "var(--base-bg-2)",
        "content-bg": "var(--content-bg)",
        "btn-primary": "var(--btn-primary)",
        "dark-purple": "var(--dark-purple)",
        "dark-red": "var(--dark-red)",
        "hover-primary": "var(--hover-primary)",
      },
      textColor: {
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
