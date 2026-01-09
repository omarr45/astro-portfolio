import { defineConfig } from "astro/config";
import icon from "astro-icon";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), react(), markdoc({ allowHTML: true }), icon()],
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
