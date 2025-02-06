import { defineConfig } from 'astro/config';

export default defineConfig({
  image: {
    // Enable the new experimental image service
    experimentalLayout: 'responsive',
  },
  experimental: {
    // Enable the new responsive images feature
    responsiveImages: true,
  },
  output: "static",
  prefetch: true,
  compressHTML: true,
});