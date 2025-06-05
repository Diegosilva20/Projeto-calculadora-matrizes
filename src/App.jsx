import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CookieConsentWrapper from "./components/CookieConsentWrapper";
import Home from "./pages/Home";
import TutorialPage from "./pages/TutorialPage";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        <Header />
        <CookieConsentWrapper />
        <main className="flex-grow">
          <Suspense fallback={<div className="text-center p-4">Carregando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tutorial/:id" element={<TutorialPage />} />
              <Route path="/politica" element={<PoliticaPrivacidade />} />
              <Route path="/termos" element={<TermosUso />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;