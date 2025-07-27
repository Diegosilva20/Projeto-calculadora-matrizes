import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = ({ customClasses = '' }) => {
    const baseClasses = `
      text-white 
      transition-colors duration-200 
      block rounded-md 
      py-2 px-4 
      hover:bg-blue-500 hover:border-blue-400
      md:ml-4 md:inline-block md:py-1
      border-2 border-transparent
      focus:outline-none focus:ring-2 focus:ring-blue-400
    `;
    const activeClasses = 'bg-blue-500 border-blue-400';
    const finalClasses = `${baseClasses} ${customClasses}`;

    return (
      <>
        <NavLink to="/tutorials" className={({ isActive }) => `${finalClasses} ${isActive ? activeClasses : ''}`}>
          Tutoriais
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => `${finalClasses} ${isActive ? activeClasses : ''}`}>
          Sobre
        </NavLink>
        <NavLink to="/contato" className={({ isActive }) => `${finalClasses} ${isActive ? activeClasses : ''}`}>
          Contato
        </NavLink>
      </>
    );
  };

  return (
    <header className="bg-blue-600 text-white border-b border-blue-800 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold" aria-label="Página inicial da MatrizCalculator" onClick={() => setIsMenuOpen(false)}>
          MatrizCalculator
        </Link>
        <nav className="hidden md:flex items-center" aria-label="Navegação principal" role="navigation">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu de navegação"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          className="md:hidden bg-blue-700 p-4 space-y-2"
          aria-label="Navegação mobile"
          role="navigation"
          onClick={() => setIsMenuOpen(false)}
        >
          <NavLinks customClasses="border-sky-500" />
        </nav>
      )}
    </header>
  );
}

export default Header;