import { z, defineCollection } from "astro:content";

const BlogPosts = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string().trim(),
    authors: z.array(z.string().trim()),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    image: image(),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const Authors = defineCollection({
  schema: ({ image }) => z.object({
    name: z.string(),
    slug: z.string(),
    image: image(),
    coreteam: z.boolean().optional(),
    bio: z.string(),
  }),
});


export const collections = {
  blog: BlogPosts,
  authors: Authors,
};
