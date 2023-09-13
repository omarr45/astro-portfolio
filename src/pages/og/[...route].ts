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
      border: { color: [255, 93, 1], width: 20, side: "inline-start" },
      bgGradient: [
        [42, 35, 62],
        [23, 20, 36],
      ],
    };
  },
  //   (_path, page) => ({
  //   title: "Omar AbdulRahman",
  //   border: { width: 10 },
  //   padding: 40,
  // }),
});
