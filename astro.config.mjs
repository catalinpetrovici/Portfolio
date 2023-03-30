import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://catalinpetrovici.com',
  integrations: [
    svelte(),
    tailwind(),
    // compress({
    //   css: false,
    //   html: false,
    //   js: false,
    //   svg: false,
    //   png: false,
    // }),
    robotsTxt(),
    sitemap(),
  ],
  // server: {
  //   port: 3001
  // }
});
