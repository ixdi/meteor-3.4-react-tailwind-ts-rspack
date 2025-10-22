/**** Tailwind Config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./imports/**/*.{js,jsx,ts,tsx}', './client/*.{html,css,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
    },
  },
  plugins: [],
};
