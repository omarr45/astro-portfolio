/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#282a36',
        'brand-bg-dark': '#1e202b',
        'brand-text': '#f8f8f2',
        'brand-accent-cyan': '#8be9fd',
        'brand-accent-cyan-hover': '#76c6d7',
        'brand-accent-green': '#50fa7b',
        'brand-accent-green-hover': '#44d569',
        'brand-accent-orange': '#ffb86c',
        'brand-accent-orange-hover': '#d99c5c',
        'brand-accent-pink': '#ff79c6',
        'brand-accent-pink-hover': '#d967a8',
        'brand-accent-purple': '#bd93f9',
        'brand-accent-purple-hover': '#a17dd4',
        'brand-accent-red': '#ff5555',
        'brand-accent-red-hover': '#d94848',
        'brand-accent-yellow': '#f1fa8c',
        'brand-accent-yellow-hover': '#cdd577',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
