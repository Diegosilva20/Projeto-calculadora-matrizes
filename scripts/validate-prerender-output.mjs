import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  prerenderPaths,
  siteBaseUrl,
  tutorialSeoRoutes,
} from "../src/data/seoRoutes.js";
import { tutorialsInfo } from "../src/data/tutorialsInfo.js";

const distDir = fileURLToPath(new URL("../dist/", import.meta.url));

const mandatoryRoutes = [
  "/",
  "/tutorials",
  "/tutorial/o-que-e-uma-matriz",
  "/tutorial/matriz-identidade",
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
const routeExpectations = {
  ...tutorialExpectations,
  "/": ["Calculadora de Matrizes", "application/ld+json"],
  "/tutorials": ["Tutoriais de Álgebra Linear"],
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

const splitHeadAndBody = (html) => {
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  return {
    head: headMatch?.[1] || "",
    body: bodyMatch?.[1] || "",
  };
};

const failures = [];

routesToCheck.forEach((routePath) => {
  const filePath = fileForRoute(routePath);

  if (!fs.existsSync(filePath)) {
    failures.push(`${routePath}: arquivo HTML nao encontrado`);
    return;
  }

  const html = fs.readFileSync(filePath, "utf8");
  const { head, body } = splitHeadAndBody(html);

  if (html.includes('<div id="root"></div>')) {
    failures.push(`${routePath}: shell React vazio encontrado`);
  }

  if (body.includes("<!--$!-->")) {
    failures.push(
      `${routePath}: fronteira Suspense em fallback/erro detectada no SSR (<!--$!-->)`,
    );
  }

  const headTitles = head.match(/<title\b[^>]*>[^<]+<\/title>/gi) || [];
  const bodyTitles = body.match(/<title\b[^>]*>[\s\S]*?<\/title>/gi) || [];

  if (headTitles.length !== 1) {
    failures.push(
      `${routePath}: esperado exatamente 1 <title> no <head>, encontrado(s) ${headTitles.length}`,
    );
  }

  if (bodyTitles.length > 0) {
    failures.push(
      `${routePath}: encontrado(s) ${bodyTitles.length} <title> indevido(s) no <body>`,
    );
  }

  const headDescriptions =
    head.match(/<meta\b[^>]*name=["']description["'][^>]*>/gi) || [];
  const bodyDescriptions =
    body.match(/<meta\b[^>]*name=["']description["'][^>]*>/gi) || [];

  if (headDescriptions.length !== 1) {
    failures.push(
      `${routePath}: esperado exatamente 1 <meta name="description"> no <head>, encontrado(s) ${headDescriptions.length}`,
    );
  }

  if (bodyDescriptions.length > 0) {
    failures.push(
      `${routePath}: encontrado(s) ${bodyDescriptions.length} <meta name="description"> indevido(s) no <body>`,
    );
  }

  const expectedCanonicalHref = `${siteBaseUrl}${routePath === "/" ? "/" : routePath}`;
  const headCanonicals =
    head.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi) || [];
  const bodyCanonicals =
    body.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi) || [];

  if (headCanonicals.length !== 1) {
    failures.push(
      `${routePath}: esperado exatamente 1 <link rel="canonical"> no <head>, encontrado(s) ${headCanonicals.length}`,
    );
  } else if (!headCanonicals[0].includes(`href="${expectedCanonicalHref}"`)) {
    failures.push(
      `${routePath}: canonical no <head> nao corresponde a ${expectedCanonicalHref}`,
    );
  }

  if (bodyCanonicals.length > 0) {
    failures.push(
      `${routePath}: <link rel="canonical"> encontrado no <body> (ignorado pelo Googlebot)`,
    );
  }

  if (!/<h1[\s>]/i.test(body)) {
    failures.push(`${routePath}: h1 renderizado nao encontrado no <body>`);
  }

  if (tutorialPaths.has(routePath) && !head.includes("application/ld+json")) {
    failures.push(`${routePath}: JSON-LD esperado nao encontrado no <head>`);
  }

  if (body.includes("application/ld+json")) {
    failures.push(`${routePath}: JSON-LD encontrado no <body> em vez do <head>`);
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

console.log(`Pre-render validado em ${routesToCheck.length} rotas (head + body).`);
