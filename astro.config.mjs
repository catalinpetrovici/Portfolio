import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import { VitePWA } from 'vite-plugin-pwa';
import sitemap from '@astrojs/sitemap';
import { manifest } from './src/utils/manifest';
import partytown from '@astrojs/partytown';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // site: 'http://192.168.0.111',
  // server: {
  //   port: 80,
  //   host: true
  // },
  site: 'https://catalinpetrovici.com',
  integrations: [
    tailwind(),
    robotsTxt(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    react(),
  ],
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
