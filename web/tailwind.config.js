module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          400: "#996DFF",
          500: "#8257E5",
        },
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
