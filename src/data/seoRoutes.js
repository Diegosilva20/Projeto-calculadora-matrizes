import { tutorialsInfo } from "./tutorialsInfo.js";

export const siteBaseUrl = "https://www.matrizcalculator.com";
export const defaultLastmod = "2026-05-12";

export const staticSeoRoutes = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/tutorials", changefreq: "weekly", priority: "0.8" },
  { path: "/sobre", changefreq: "monthly", priority: "0.5" },
  { path: "/contato", changefreq: "monthly", priority: "0.5" },
  { path: "/politica-privacidade", changefreq: "yearly", priority: "0.3" },
  { path: "/termos-uso", changefreq: "yearly", priority: "0.3" },
];

export const tutorialSeoRoutes = tutorialsInfo.map((tutorial) => ({
  path: `/tutorial/${tutorial.slug}`,
  changefreq: "weekly",
  priority: "0.7",
}));

export const seoRoutes = [...staticSeoRoutes, ...tutorialSeoRoutes];

export const sitemapRoutes = seoRoutes;

export const prerenderRoutes = seoRoutes;

export const sitemapPaths = sitemapRoutes.map((route) => route.path);

export const prerenderPaths = prerenderRoutes.map((route) => route.path);
