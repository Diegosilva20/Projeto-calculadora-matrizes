import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { AppRoutes, AppShell } from "./App.jsx";

import Home from "./pages/Home";
import TutorialPage from "./pages/TutorialPage";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Tutorials from "./pages/Tutorials";
import Pratica from "./pages/Pratica";
import Visualizador from "./pages/Visualizador";
import NotFound from "./pages/NotFound";

const pages = {
  Home,
  TutorialPage,
  PoliticaPrivacidade,
  TermosUso,
  Contato,
  Sobre,
  Tutorials,
  Pratica,
  Visualizador,
  NotFound,
};

const decodeHtmlEntities = (value) =>
  String(value)
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const extractTitle = (titleMarkup) => {
  const match = titleMarkup.match(/<title[^>]*>(.*?)<\/title>/is);
  return match?.[1] ? decodeHtmlEntities(match[1]) : "";
};

const extractHoistedHeadFromHtml = (rawHtml) => {
  let bodyHtml = rawHtml;
  const extractedElements = [];
  let extractedTitleMarkup = "";

  const leadingHeadPattern =
    /^(?:<(?:title|base)\b[^>]*>.*?<\/(?:title|base)>|<(?:meta|link)\b[^>]*\/?>)+/is;
  const leadingMatch = bodyHtml.match(leadingHeadPattern);

  if (leadingMatch) {
    const leadingChunk = leadingMatch[0];
    bodyHtml = bodyHtml.slice(leadingChunk.length);

    const titleMatch = leadingChunk.match(/<title\b[^>]*>.*?<\/title>/is);
    if (titleMatch) {
      extractedTitleMarkup = titleMatch[0];
    }

    const tagMatches =
      leadingChunk.match(/<(?:base\b[^>]*>.*?<\/base|meta\b[^>]*\/?|link\b[^>]*\/?)>/gis) || [];
    extractedElements.push(...tagMatches);
  }

  const ldJsonPattern = /<script\b[^>]*type="application\/ld\+json"[^>]*>.*?<\/script>/gis;
  const ldJsonMatches = bodyHtml.match(ldJsonPattern) || [];
  if (ldJsonMatches.length > 0) {
    extractedElements.push(...ldJsonMatches);
    bodyHtml = bodyHtml.replace(ldJsonPattern, "");
  }

  return {
    bodyHtml,
    extractedTitleMarkup,
    extractedElements,
  };
};

export function prerender({ url }) {
  const helmetContext = {};
  const rawHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppShell>
          <AppRoutes pages={pages} />
        </AppShell>
      </StaticRouter>
    </HelmetProvider>,
  );

  const { helmet } = helmetContext;
  const { bodyHtml, extractedTitleMarkup, extractedElements } =
    extractHoistedHeadFromHtml(rawHtml);

  const helmetElements = [
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
    helmet?.script?.toString(),
  ].filter(Boolean);

  const headElements = [...helmetElements, ...extractedElements].filter(Boolean);
  const resolvedTitle =
    extractTitle(helmet?.title?.toString() || "") ||
    extractTitle(extractedTitleMarkup) ||
    "Calculadora de Matrizes";

  return {
    html: bodyHtml,
    head: {
      lang: "pt-BR",
      title: resolvedTitle,
      elements: new Set(headElements),
    },
  };
}
