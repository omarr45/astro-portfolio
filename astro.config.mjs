import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), react(), markdoc()],
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
  site: "https://omar45.com",
  adapter: vercel(),
});
