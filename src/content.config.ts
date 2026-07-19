import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number(),
    journal: z.string(),
    details: z.string().optional(),
    doi: z.string().url().optional(),
    group: z.enum(['lead', 'collaborative']),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    role: z.string(),
    partner: z.string().optional(),
    location: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const photography = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/photography' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Birds', 'Landscapes', 'Fieldwork']),
    aspect: z.enum(['landscape', 'portrait', 'wide']),
    caption: z.string(),
    order: z.number(),
  }),
});

export const collections = { publications, projects, photography };
