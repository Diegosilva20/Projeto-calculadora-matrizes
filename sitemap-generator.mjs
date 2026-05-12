import fs from "node:fs";
import {
  defaultLastmod,
  sitemapRoutes,
  siteBaseUrl,
} from "./src/data/seoRoutes.js";

const createSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  sitemapRoutes.forEach((route) => {
    const lastmod = route.lastmod || defaultLastmod;

    sitemap += `
  <url>
    <loc>${siteBaseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
};

createSitemap();
console.log(`Sitemap gerado com ${sitemapRoutes.length} rotas.`);
