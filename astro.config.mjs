import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tomoro.me',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
  redirects: {
    '/pricing': '/#pricing',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
