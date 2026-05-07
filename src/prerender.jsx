import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Helmet } from "react-helmet";
import { AppRoutes, AppShell } from "./App.jsx";

import Home from "./pages/Home";
import TutorialPage from "./pages/TutorialPage";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Tutorials from "./pages/Tutorials";
import NotFound from "./pages/NotFound";

const pages = {
  Home,
  TutorialPage,
  PoliticaPrivacidade,
  TermosUso,
  Contato,
  Sobre,
  Tutorials,
  NotFound,
};

const extractTitle = (titleMarkup) => {
  const match = titleMarkup.match(/<title[^>]*>(.*?)<\/title>/i);
  return match?.[1] || "Calculadora de Matrizes";
};

export function prerender({ url }) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppShell>
        <AppRoutes pages={pages} />
      </AppShell>
    </StaticRouter>,
  );

  const helmet = Helmet.renderStatic();
  const headElements = [
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].filter(Boolean);

  return {
    html,
    head: {
      lang: "pt-BR",
      title: extractTitle(helmet.title.toString()),
      elements: new Set(headElements),
    },
  };
}
