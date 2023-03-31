import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import { VitePWA } from 'vite-plugin-pwa';
import sitemap from '@astrojs/sitemap';
import { manifest } from './src/utils/manifest';

// https://astro.build/config
export default defineConfig({
  site: 'https://catalinpetrovici.com',
  integrations: [tailwind(), robotsTxt(), sitemap()],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        workbox: {
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null,
        },
        manifest,
      }),
    ],
  },
});
