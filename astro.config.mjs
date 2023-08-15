import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
    assets: true,
  },
  integrations: [mdx(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  site: 'https://omar45.vercel.app',
});
