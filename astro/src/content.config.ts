import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().nullish(),
      date: z.string(),
      updatedDate: z.string().optional(),
      // Transform string to Date object
      // date: z.coerce.date(),
      // updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).nullish(),
      category: z.string().nullish(),
      series: z.string().nullish(),
    }),
});

export const collections = { blog };
