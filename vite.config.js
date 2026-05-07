import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { prerenderPaths } from './src/data/seoRoutes.js';
import { ssrPrerenderPlugin } from './scripts/vite-ssr-prerender-plugin.mjs';

export default defineConfig({
  plugins: [
    react(),
    ssrPrerenderPlugin({ routes: prerenderPaths }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo192.png', 'logo512.png'],
      manifest: {
        name: 'Matriz Calculator',
        short_name: 'Matrizes+',
        description:
          'Calculadora de matrizes e resolu\u00e7\u00e3o de sistemas lineares passo a passo.',
        lang: 'pt-BR',
        start_url: '/',
        scope: '/',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/logo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
