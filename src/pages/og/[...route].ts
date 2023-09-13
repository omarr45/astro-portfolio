import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

const blogs = await getCollection("blog");
const projects = await getCollection("projects");

const pages = Object.fromEntries(
  [...blogs, ...projects].map(({ id, slug, data }) => [id, { data, slug }]),
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages,
  getImageOptions: async (_, { data }: (typeof pages)[string]) => {
    return {
      title: data.title,
      description: data.description,
      //@ts-ignore
      dir: data.isArabic ? "rtl" : "ltr",
      border: { color: [114, 221, 64], width: 20, side: "inline-start" },
      bgGradient: [
        [6, 38, 45],
        [8, 3, 2],
      ],
      logo: {
        path: "./src/logo.png",
        size: [500],
      },
      font: {
        title: {
          size: 80,
          lineHeight: 1.25,
          families: ["Zilla Slab", "IBM Plex Sans Arabic"],
          weight: "Bold",
        },
        description: {
          size: 40,
          lineHeight: 1.25,
          families: ["Zilla Slab", "IBM Plex Sans Arabic"],
          weight: "Medium",
        },
      },
      fonts: [
        "https://github.com/omarr45/astro-portfolio/raw/master/public/fonts/ZillaSlab-Medium.ttf",
        "https://github.com/omarr45/astro-portfolio/raw/master/public/fonts/ZillaSlab-Bold.ttf",

        "https://github.com/omarr45/astro-portfolio/raw/master/public/fonts/IBMPlexSansArabic-Medium.ttf",
        "https://github.com/omarr45/astro-portfolio/raw/master/public/fonts/IBMPlexSansArabic-Bold.ttf",
      ],
    };
  },
  //   (_path, page) => ({
  //   title: "Omar AbdulRahman",
  //   border: { width: 10 },
  //   padding: 40,
  // }),
});
