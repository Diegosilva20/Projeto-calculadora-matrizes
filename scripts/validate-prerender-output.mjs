import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { prerenderPaths, tutorialSeoRoutes } from "../src/data/seoRoutes.js";

const distDir = fileURLToPath(new URL("../dist/", import.meta.url));

const mandatoryRoutes = [
  "/",
  "/tutorials",
  "/tutorial/o-que-e-uma-matriz",
  "/tutorial/matriz-identidade",
  "/tutorial/eliminacao-de-gauss",
];

const routeExpectations = {
  "/": ["Calculadora de Matrizes", "application/ld+json"],
  "/tutorials": ["Tutoriais"],
  "/tutorial/o-que-e-uma-matriz": ["O que", "Matriz", "application/ld+json"],
  "/tutorial/matriz-identidade": [
    "Matriz Identidade",
    "application/ld+json",
  ],
  "/tutorial/eliminacao-de-gauss": [
    "Escalonamento",
    "application/ld+json",
  ],
};

const tutorialPaths = new Set(tutorialSeoRoutes.map((route) => route.path));
const routesToCheck = [...new Set([...prerenderPaths, ...mandatoryRoutes])];

const fileForRoute = (routePath) => {
  if (routePath === "/") {
    return path.join(distDir, "index.html");
  }

  return path.join(
    distDir,
    ...routePath.replace(/^\//, "").split("/"),
    "index.html",
  );
};

const failures = [];

routesToCheck.forEach((routePath) => {
  const filePath = fileForRoute(routePath);

  if (!fs.existsSync(filePath)) {
    failures.push(`${routePath}: arquivo HTML nao encontrado`);
    return;
  }

  const html = fs.readFileSync(filePath, "utf8");

  if (html.includes('<div id="root"></div>')) {
    failures.push(`${routePath}: shell React vazio encontrado`);
  }

  if (!/<title[^>]*>[^<]+<\/title>/i.test(html)) {
    failures.push(`${routePath}: title renderizado nao encontrado`);
  }

  if (!/<h1[\s>]/i.test(html)) {
    failures.push(`${routePath}: h1 renderizado nao encontrado`);
  }

  if (
    (tutorialPaths.has(routePath) || routePath === "/tutorial/eliminacao-de-gauss") &&
    !html.includes("application/ld+json")
  ) {
    failures.push(`${routePath}: JSON-LD esperado nao encontrado`);
  }

  (routeExpectations[routePath] || []).forEach((expectedText) => {
    if (!html.includes(expectedText)) {
      failures.push(`${routePath}: texto esperado ausente: ${expectedText}`);
    }
  });
});

if (failures.length > 0) {
  console.error("Falhas na validacao do pre-render:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Pre-render validado em ${routesToCheck.length} rotas.`);
