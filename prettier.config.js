module.exports = {
  trailingComma: "es6",
  tabWidth: 4,
  semi: false,
  singleQuote: false,
  plugins: [import("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.cjs",
};
