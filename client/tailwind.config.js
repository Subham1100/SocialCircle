// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "rgb(var(--primary-dark))",
          main: "rgb(var(--primary-main))",
          light: "rgb(var(--primary-light))",
        },
        neutral: {
          dark: "rgb(var(--neutral-dark))",
          main: "rgb(var(--neutral-main))",
          mediumMain: "rgb(var(--neutral-mediumMain))",
          medium: "rgb(var(--neutral-medium))",
          light: "rgb(var(--neutral-light))",
        },
        background: {
          default: "rgb(var(--background-default))",
          alt: "rgb(var(--background-alt))",
        },
      },
    },
  },
  plugins: [],
};
