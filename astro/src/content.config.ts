import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
    generateId: ({ entry }) =>
      entry
        // Converts '20260101 spaced title.md' to 'spaced-title'
        .replace(/^\d+\s/, '') // Remove date index
        .replace(/\s+/g, '-') // Replace space with hyphen
        .replace(/\.md|x$/, ''), // Remove md, mdx file name
  }),
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
      tags: z.array(z.string()).default([]),
      category: z.string(),
      series: z.string().nullish(),
      wip: z.boolean().optional(),
    }),
});

export const collections = { blog };
