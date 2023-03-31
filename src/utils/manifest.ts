import type { ManifestOptions } from 'vite-plugin-pwa';

/**
 * Configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
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
};
