// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://paboden.github.io',
  base: '/',
  publicDir: './public',
  integrations: [
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/' }],
    }),
  ],
  redirects: {
    '/about': '/#about',
    '/book': '/#book',
    '/reviews': '/#reviews',
    '/workshop': '/#workshop',
    '/workshops': '/#workshop',
    '/connect': '/#connect',
    '/blog': '/#blog',
    '/markgodi_com/about': '/markgodi_com/#about',
    '/markgodi_com/book': '/markgodi_com/#book',
    '/markgodi_com/reviews': '/markgodi_com/#reviews',
    '/markgodi_com/workshops': '/markgodi_com/#workshop',
    '/markgodi_com/workshop': '/markgodi_com/#workshop',
    '/markgodi_com/connect': '/markgodi_com/#connect',
    '/markgodi_com/blog': '/markgodi_com/#blog',
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "EB Garamond",
      cssVariable: "--font-garamond",
      fallbacks: ["serif"],
      weights: ["400 500 600"]
    }
  ]
});
