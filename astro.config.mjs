import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    // compress({
    //   css: false,
    //   html: false,
    //   js: false,
    //   svg: false,
    //   png: false,
    // }),
    robotsTxt(),
    // image(),
  ],
});
