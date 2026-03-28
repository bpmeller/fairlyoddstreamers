import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fairlyoddstreamers.com',
  integrations: [sitemap()],
  vite: {
    ssr: {
      external: ['node:fs', 'node:path'],
    },
  },
});
