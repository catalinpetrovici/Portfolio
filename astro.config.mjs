import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import svelte from '@astrojs/svelte';
import { VitePWA } from 'vite-plugin-pwa';

import sitemap from '@astrojs/sitemap';

import manifest from './src/utils/manifest.ts';

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
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        workbox: {
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null,
        },
        manifest: {
          name: 'Petrovici Catalin',
          short_name: 'Petrovici Catalin',
          start_url: '/',
          display: 'standalone',
          background_color: '#0A0915',
          theme_color: '#ffffff',
          lang: 'en',
          scope: '/',
          icons: [
            {
              src: './favicon/favicon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: './favicon/favicon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: './favicon/favicon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: './favicon/favicon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
    ],
  },
});
