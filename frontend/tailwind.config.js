/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@headlessui/react/dist/index.cjs",
  ],
  theme: {
    extend: {
      backgroundImage: {
        striped: "repeating-linear-gradient(to bottom,var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
