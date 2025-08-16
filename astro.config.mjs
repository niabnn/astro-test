// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),

  server: {
    host: true,
  },

  base: '/',

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});