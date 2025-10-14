// sitemap-generator.mjs - VERSÃO CORRIGIDA

import fs from 'fs';
// Importa do novo arquivo de dados puros
import { tutorialsInfo as tutoriais } from './src/data/tutorialsInfo.js';

const baseUrl = "https://www.matrizcalculator.com";

const staticPages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/tutorials', changefreq: 'weekly', priority: '0.8' },
  { url: '/sobre', changefreq: 'monthly', priority: '0.5' },
  { url: '/contato', changefreq: 'monthly', priority: '0.5' },
  { url: '/politica-privacidade', changefreq: 'yearly', priority: '0.3' },
  { url: '/termos-uso', changefreq: 'yearly', priority: '0.3' },
];

const createSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // AQUI ESTÁ A CORREÇÃO: trocamos tutorial.id por tutorial.slug
  tutoriais.forEach(tutorial => {
    sitemap += `
  <url>
    <loc>${baseUrl}/tutorial/${tutorial.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
};

createSitemap();
console.log('Sitemap gerado com sucesso!');