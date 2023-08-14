import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean(),
    author: z.enum(['Omar AbdulRahman', 'Shehab Ihab', 'Ahmed Tawfik']),
    isArabic: z.boolean().optional(),
  }),
});

export const collections = { blog };
