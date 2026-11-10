import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';
import { AstroPWAIntegration } from '@vite-pwa/astro';
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
  // Keep Astro 2 styling/whitespace behavior after the upgrade
  scopedStyleStrategy: 'where',
  compressHTML: true,
  integrations: [
    robotsTxt(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    react(),
    AstroPWAIntegration({
      registerType: 'autoUpdate',
      generateSW: {
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null,
      },
      manifest,
    }),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    // build: {
    //   rollupOptions: {
    //     output: {
    //       entryFileNames: '[name]-[hash].js',
    //     },
    //   },
    // },
  },
});
