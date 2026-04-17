import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Matriz Calculator',
        short_name: 'Matrizes+',
        description: 'Calculadora de matrizes e resolução de sistemas lineares passo a passo.',
        theme_color: '#2563eb', // Cor azul principal do seu Tailwind
        background_color: '#ffffff',
        display: 'standalone', // Faz a app abrir sem a barra de URL do navegador
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
            purpose: 'any maskable' // Importante para o Android adaptar o ícone perfeitamente
          }
        ]
      }
    })
  ]
});