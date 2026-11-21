import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    react(),
  ],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'poimandres',
    },
  },
  redirects: {
    '/work': '/',
    '/projects': '/',
  },
  output: 'static',
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Inter Variable",
    cssVariable: "--font-inter",
    styles: ["normal"],
    weights: ["400, 500, 700"],
    fallbacks: ["sans-serif"]
  },{
    provider: fontProviders.fontsource(),
    name: "Space Mono",
    cssVariable: "--font-space-mono",
    weights: ["400, 700"],
    fallbacks: ["monospace"]
  }]
});