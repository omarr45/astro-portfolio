import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

const paths = await getCollection("blog");

const pages = Object.fromEntries(
  paths.map(({ id, slug, data }) => [id, { data, slug }]),
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages,
  getImageOptions: async (_, { data }: (typeof pages)[string]) => {
    return {
      title: data.title,
      description: data.date,
      dir: data.isArabic ? "rtl" : "ltr",
      border: { color: [114, 221, 64], width: 20, side: "inline-start" },
      bgGradient: [
        [6, 38, 45],
        [8, 3, 2],
      ],
      font: {
        title: {
          size: 78,
          families: [
            "Zilla Slab",
            "Work Sans",
            "Noto Sans Black",
            "Noto Sans Arabic",
          ],
          weight: "ExtraBold",
        },
        description: {
          size: 45,
          lineHeight: 1.25,
          families: [
            "Zilla Slab",
            "Work Sans",
            "Noto Sans",
            "Noto Sans Arabic",
          ],
          weight: "Normal",
        },
      },
      fonts: [
        "https://github.com/withastro/docs/raw/temp-fonts-cdn/src/pages/open-graph/_fonts/work-sans/latin-400-normal.ttf",
        "https://github.com/withastro/docs/raw/temp-fonts-cdn/src/pages/open-graph/_fonts/work-sans/latin-800-normal.ttf",

        "https://github.com/withastro/docs/raw/temp-fonts-cdn/src/pages/open-graph/_fonts/noto-sans/arabic-400-normal.ttf",
        "https://github.com/withastro/docs/raw/temp-fonts-cdn/src/pages/open-graph/_fonts/noto-sans/arabic-800-normal.ttf",
      ],
    };
  },
  //   (_path, page) => ({
  //   title: "Omar AbdulRahman",
  //   border: { width: 10 },
  //   padding: 40,
  // }),
});
