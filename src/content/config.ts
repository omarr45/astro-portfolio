import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean(),
    author: z.enum(["Omar AbdulRahman", "Shehab Ihab", "Ahmed Tawfik"]),
    categories: z.array(
      z.enum(["Development", "Books", "Religion", "Travel", "Recommendations"]),
    ),
    isArabic: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      draft: z.boolean(),
      featured: z.boolean(),
      description: z.string(),
      image: image().refine((img) => img.width >= 500, {
        message: "Image width must be more than 500px",
      }),
      technologies: z.array(
        z.enum([
          "ReactJS",
          "Next.js",
          "TailwindCSS",
          "Firebase",
          "SASS",
          "Admin Dashboard",
          "Blockchain",
          "NFT",
          "E-Commerce",
          "Canvas API",
          "Open Source",
          "Dark Mode",
          "Design System",
        ]),
      ),
      links: z.object({
        github: z.string().optional(),
        live: z.string().optional(),
      }),
    }),
});

export const collections = { blog, projects };
