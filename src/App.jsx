import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CookieConsentWrapper from "./components/CookieConsentWrapper";
import ScrollToTop from "./components/common/ScrollToTop";

// 1. IMPORTAÇÃO DIRETA PARA A HOME (Corrige bugs visuais e SEO)
import Home from "./pages/Home";

// 2. LAZY LOADING (Apenas para as outras páginas)
const TutorialPage = lazy(() => import("./pages/TutorialPage"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade"));
const TermosUso = lazy(() => import("./pages/TermosUso"));
const Contato = lazy(() => import("./pages/Contato"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Tutorials = lazy(() => import("./pages/Tutorials"));
const Pratica = lazy(() => import("./pages/Pratica"));
const Visualizador = lazy(() => import("./pages/Visualizador"));
const NotFound = lazy(() => import("./pages/NotFound"));

const lazyPages = {
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

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export function AppRoutes({ pages = lazyPages }) {
  const {
    Home: HomePage,
    TutorialPage: TutorialPageComponent,
    PoliticaPrivacidade: PoliticaPrivacidadePage,
    TermosUso: TermosUsoPage,
    Contato: ContatoPage,
    Sobre: SobrePage,
    Tutorials: TutorialsPage,
    Pratica: PraticaPage,
    Visualizador: VisualizadorPage,
    NotFound: NotFoundPage,
  } = pages;

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
         <div className="animate-spin rounded-xl h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    }>
      <Routes>
        {/* O Elemento Home agora carrega instantaneamente */}
        <Route path="/" element={<HomePage />} />
        <Route path="/tutorial/:slug" element={<TutorialPageComponent />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidadePage />} />
        <Route path="/termos-uso" element={<TermosUsoPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/pratica" element={<PraticaPage />} />
        <Route path="/visualizador" element={<VisualizadorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export function AppShell({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDarkMode = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
    window.localStorage.setItem("theme", theme);
  }, [isDarkMode, theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  };

  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col pattern-bg transition-colors duration-300">
        <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
        <CookieConsentWrapper />
        <main className="flex-grow container mx-auto p-4 pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppShell>
          <AppRoutes />
        </AppShell>
      </Router>
    </HelmetProvider>
  );
}

export default App;
