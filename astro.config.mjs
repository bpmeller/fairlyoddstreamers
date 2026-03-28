import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fairlyoddstreamers.com',
  vite: {
    ssr: {
      external: ['node:fs', 'node:path'],
    },
  },
});
