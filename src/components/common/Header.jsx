import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estilo para o link ativo (página atual)
  const activeLinkStyle = {
    backgroundColor: '#3b82f6',
    borderColor: '#60a5fa',
  };

  // CORREÇÃO 1: "Ensinamos" o NavLinks a aceitar a prop `customClasses` novamente.
  const NavLinks = ({ customClasses = '' }) => {
    
    // CORREÇÃO 2: Definimos as classes base que você queria.
    const baseClasses = `
      text-white 
      transition-colors duration-200 
      block rounded-md 
      py-2 px-4 
      hover:bg-blue-500 hover:border-blue-400
      md:ml-4 md:inline-block md:py-1
      border-2 border-transparent 
    `;
    /*
      - Adicionei 'border-2' como base.
      - Usei 'border-transparent' para que a borda ocupe espaço sem ter cor, 
        evitando que o layout "pule" quando a cor da borda aparece.
    */

    // Juntamos as classes base com as customizadas (que virão do menu mobile)
    const finalClasses = `${baseClasses} ${customClasses}`;

    return (
      <>
        <NavLink to="/tutorials" className={finalClasses} style={({ isActive }) => isActive ? activeLinkStyle : undefined} onClick={() => setIsMenuOpen(false)}>
          Tutoriais
        </NavLink>
        <NavLink to="/sobre" className={finalClasses} style={({ isActive }) => isActive ? activeLinkStyle : undefined} onClick={() => setIsMenuOpen(false)}>
          Sobre
        </NavLink>
        <NavLink to="/contato" className={finalClasses} style={({ isActive }) => isActive ? activeLinkStyle : undefined} onClick={() => setIsMenuOpen(false)}>
          Contato
        </NavLink>
      </>
    );
  };

  return (
    <header className="bg-blue-600 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold" aria-label="Página inicial da MatrizCalculator" onClick={() => setIsMenuOpen(false)}>
          MatrizCalculator
        </Link>

        {/* Menu Desktop (usa NavLinks sem classes extras) */}
        <nav className="hidden md:flex items-center" aria-label="Navegação principal">
          <NavLinks />
        </nav>

        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu de navegação" aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700 p-4 space-y-2" aria-label="Navegação mobile">
          {/* CORREÇÃO 3: Agora a prop funciona e passa a cor da borda corretamente. */}
          <NavLinks customClasses="border-sky-500" />
        </nav>
      )}
    </header>
  );
}

export default Header;