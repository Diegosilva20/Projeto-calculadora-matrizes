import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estilo para o link ativo, para o usuário saber em qual página está
  const activeLinkStyle = {
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  };

  // Componente reutilizável para os links de navegação
  const NavLinks = () => (
    <>
      <NavLink 
        to="/tutorials" 
        className="text-white hover:text-gray-300 transition-colors duration-200 block py-2 md:py-0 md:ml-6" 
        style={({ isActive }) => isActive ? activeLinkStyle : undefined}
        onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link no mobile
      >
        Tutoriais
      </NavLink>
      <NavLink 
        to="/sobre" 
        className="text-white hover:text-gray-300 transition-colors duration-200 block py-2 md:py-0 md:ml-6" 
        style={({ isActive }) => isActive ? activeLinkStyle : undefined}
        onClick={() => setIsMenuOpen(false)}
      >
        Sobre
      </NavLink>
      <NavLink 
        to="/contato" 
        className="text-white hover:text-gray-300 transition-colors duration-200 block py-2 md:py-0 md:ml-6" 
        style={({ isActive }) => isActive ? activeLinkStyle : undefined}
        onClick={() => setIsMenuOpen(false)}
      >
        Contato
      </NavLink>
    </>
  );

  return (
    <header className="bg-blue-600 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold" aria-label="Página inicial da MatrizCalculator" onClick={() => setIsMenuOpen(false)}>
          MatrizCalculator
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center" aria-label="Navegação principal">
          <NavLinks />
        </nav>

        {/* Botão do Menu Mobile (Hambúrguer) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu de navegação"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // Ícone "X" para fechar
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ícone "Hambúrguer"
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700 px-4 pb-4" aria-label="Navegação mobile">
          <NavLinks />
        </nav>
      )}
    </header>
  );
}

export default Header;