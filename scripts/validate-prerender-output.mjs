import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { prerenderPaths, tutorialSeoRoutes } from "../src/data/seoRoutes.js";
import { tutorialsInfo } from "../src/data/tutorialsInfo.js";

const distDir = fileURLToPath(new URL("../dist/", import.meta.url));

const mandatoryRoutes = [
  "/",
  "/tutorials",
  "/tutorial/o-que-e-uma-matriz",
  "/tutorial/matriz-identidade",
  "/tutorial/eliminacao-de-gauss",
  "/tutorial/determinante-de-matrizes",
  "/tutorial/matriz-inversa",
  "/tutorial/multiplicacao-de-matrizes",
];

const tutorialExpectations = Object.fromEntries(
  tutorialsInfo.map((tutorial) => [
    `/tutorial/${tutorial.slug}`,
    [tutorial.title, tutorial.description, "application/ld+json"],
  ]),
);
const gaussTutorial = tutorialsInfo.find(
  (tutorial) => tutorial.slug === "escalonamento-gauss",
);

const routeExpectations = {
  ...tutorialExpectations,
  "/": ["Calculadora de Matrizes", "application/ld+json"],
  "/tutorials": ["Catálogo de Tutoriais"],
  "/tutorial/eliminacao-de-gauss": [
    gaussTutorial.title,
    gaussTutorial.description,
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
