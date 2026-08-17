import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    hero: z.string(),
    card: z.string(),
    images: z.array(z.string()),
  }),
});

export const collections = { portfolio };
