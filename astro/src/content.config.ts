import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({
    base: './src/__content/articles',
    pattern: '**/*.{md,mdx}',
    // { entry, base, data } https://docs.astro.build/en/reference/content-loader-reference/#generateid
    generateId: ({ entry }) => prettifySlug(entry),
  }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      description: z.coerce.string(),
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

/**
 * all IDs are in this structure 'folderName/YYYYMMDD spaced title.md'
 * blog/20220518 hello world.md
 * jcpta/20260404 exams.md
 * recipes/20240921 bak kut teh.md
 *
 * this value is used directly as a slug making the url messy
 * so we need to format the slug into a prettier format
 */
function prettifySlug(entry: string) {
  // Uncomment to display original value
  // console.log('entry', entry);

  const slug = entry
    .replace(/^[^_]*\//, '') // Remove date index and space between date and title
    .replace(/^\d+\s/, '') // Remove date index and space between date and title
    .replace(/\s+/g, '-') // Replace space with hyphen
    .replace(/\.md|x$/, ''); // Remove md, mdx file name

  // Uncomment to display output
  // console.log('slug', slug);
  return slug;
}
