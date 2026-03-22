// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://paboden.github.io',
  base: '/markgodi_com',
  publicDir: './public',
  redirects: {
    '/about': '/markgodi_com/#about',
    '/book': '/markgodi_com/#book',
    '/workshops': '/markgodi_com/#workshops',
    '/connect': '/markgodi_com/#connect',
    '/blog': '/markgodi_com/#blog',
  }
});
