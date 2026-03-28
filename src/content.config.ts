import { defineCollection, z } from 'astro:content';

const sponsorships = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    logo: z.string().optional(),
    category: z.string(),
    type: z.string(),
    sponsorshipType: z.string().optional(),
    website: z.string().url().optional(),
    applicationLink: z.string().url().optional(),
    compensation: z.string().optional(),
    favorite: z.boolean().optional(),
    featured: z.boolean().optional(),
    fosAffiliate: z.string().optional(),
    fosAffiliateApply: z.string().optional(),
    fosAffiliateLink: z.string().optional(),
    publishDate: z.date().optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    coverImage: z.string().optional(),
    ogImage: z.string().optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
    metaDescription: z.string().optional(),
    postSummary: z.string().optional(),
    readTime: z.string().optional(),
    publishDate: z.date().optional(),
  }),
});

const interviews = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    title: z.string().optional(),
    coverPhoto: z.string().optional(),
    category: z.string().optional(),
    categoryColor: z.string().optional(),
    twitch: z.string().optional(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    discord: z.string().optional(),
    followers: z.string().optional(),
    views: z.string().optional(),
    ogImage: z.string().optional(),
    publishDate: z.date().optional(),
  }),
});

const analytics = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    website: z.string().url().optional(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
    publishDate: z.date().optional(),
  }),
});

const bots = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    website: z.string().url().optional(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
    publishDate: z.date().optional(),
  }),
});

const graphics = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    website: z.string().url().optional(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
    publishDate: z.date().optional(),
  }),
});

const music = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    website: z.string().url().optional(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
    publishDate: z.date().optional(),
  }),
});

const broadcastTools = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    website: z.string().url().optional(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
    publishDate: z.date().optional(),
  }),
});

const streamingTools = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    website: z.string().url().optional(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
    publishDate: z.date().optional(),
  }),
});

export const collections = {
  sponsorships,
  blog,
  interviews,
  analytics,
  bots,
  graphics,
  music,
  'broadcast-tools': broadcastTools,
  'streaming-tools': streamingTools,
};
