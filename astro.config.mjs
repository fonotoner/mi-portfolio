// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://fonotoner.es',
  
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'eu'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  integrations: [
    react(),
    sitemap()
  ],
});