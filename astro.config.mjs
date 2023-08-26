import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  experimental: {
    viewTransitions: true,
    assets: true,
  },
  integrations: [mdx(), tailwind(), react(), markdoc()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
  // vite: {
  //   ssr: {
  //     external: ["svgo"],
  //   },
  // },
  site: "https://omar45.vercel.app",
  adapter: vercel(),
});
