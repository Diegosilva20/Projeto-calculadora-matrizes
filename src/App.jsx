import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CookieConsentWrapper from "./components/CookieConsentWrapper";
import ScrollToTop from "./components/common/ScrollToTop";

// IMPORTAÇÃO DINÂMICA (Aumenta a velocidade do primeiro carregamento drastically!)
const Home = lazy(() => import("./pages/Home"));
const TutorialPage = lazy(() => import("./pages/TutorialPage"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade"));
const TermosUso = lazy(() => import("./pages/TermosUso"));
const Contato = lazy(() => import("./pages/Contato"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Tutorials = lazy(() => import("./pages/Tutorials"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        <Header />
        <CookieConsentWrapper />
        <main className="flex-grow container mx-auto p-4 pt-20">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[50vh]">
               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tutorial/:slug" element={<TutorialPage />} />
              <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/termos-uso" element={<TermosUso />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/tutorials" element={<Tutorials />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;