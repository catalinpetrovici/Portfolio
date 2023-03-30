// Type imports
import type { ManifestOptions } from 'vite-plugin-pwa';

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: 'Petrovici Catalin',
  short_name: 'Petrovici Catalin',
  description:
    'Petrovici Catalin is a Personal website portfolio to showcase projects and personal information.',
  theme_color: '#0A0915', // Change this to your primary color.
  background_color: '#0A0915', // Change this to your background color.
  display: 'minimal-ui',
  icons: [
    {
      src: './favicons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: './favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: './favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    },
  ],
};
