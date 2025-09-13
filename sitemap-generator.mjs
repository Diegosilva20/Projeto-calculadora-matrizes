import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { tutoriais } from './src/data/tutorialsData.js'; // Agora podemos usar 'import'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper para obter o diretório correto com módulos ES
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateSitemap() {
  try {
    const baseUrl = 'https://www.matrizcalculator.com';

    // Rotas estáticas com prioridade e frequência de mudança
    const staticLinks = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/tutorials', changefreq: 'weekly', priority: 0.8 },
      { url: '/sobre', changefreq: 'monthly', priority: 0.5 },
      { url: '/contato', changefreq: 'monthly', priority: 0.5 },
      { url: '/politica-privacidade', changefreq: 'yearly', priority: 0.3 },
      { url: '/termos-uso', changefreq: 'yearly', priority: 0.3 },
    ];

    // Rotas dinâmicas dos tutoriais
    const tutorialLinks = tutoriais.map(tutorial => ({
      url: `/tutorial/${tutorial.id}`,
      changefreq: 'weekly',
      priority: 0.7,
    }));

    const allLinks = [...staticLinks, ...tutorialLinks];

    // Cria o sitemap
    const stream = new SitemapStream({ hostname: baseUrl });
    const sitemapXml = await streamToPromise(Readable.from(allLinks).pipe(stream)).then(data => data.toString());

    // Define o caminho de saída
    const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');

    // Salva o arquivo
    fs.writeFileSync(sitemapPath, sitemapXml);

    console.log('✅ sitemap.xml gerado com sucesso usando o novo método!');

  } catch (error) {
    console.error('❌ Erro ao gerar o sitemap:', error);
  }
}

generateSitemap();