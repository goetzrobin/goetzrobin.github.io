/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,md}",
  ],
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
