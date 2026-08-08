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
    period: z.string().optional(),
    role: z.string().optional(),
    partner: z.string().optional(),
    location: z.string().optional(),
    tags: z.array(z.string()),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).default([]),
    relatedPublications: z.array(z.string()).default([]),
    externalLinks: z.array(z.object({
      label: z.string(),
      href: z.string().url(),
    })).default([]),
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
    image: z.string(),
    alt: z.string(),
    order: z.number(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    summary: z.string(),
    order: z.number(),
    relatedPublications: z.array(z.string()).default([]),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).default([]),
    presentation: z.object({
      title: z.string(),
      event: z.string(),
      location: z.string(),
      year: z.number(),
      links: z.array(z.object({ label: z.string(), href: z.string().url() })),
    }).optional(),
  }),
});

export const collections = { publications, projects, photography, research };
