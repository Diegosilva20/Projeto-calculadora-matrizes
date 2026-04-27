import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaCalculator, FaTimes } from "react-icons/fa";

const navItems = [
  { to: "/tutorials", label: "Tutoriais" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    [
      "block rounded-full px-4 py-2 text-sm font-semibold text-white/90",
      "transition-all duration-200 hover:bg-white/10 hover:text-white",
      "focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-blue-600",
      isActive ? "bg-white/15 text-white shadow-sm ring-1 ring-white/20" : "",
    ].join(" ");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-blue-700/70 bg-blue-600 text-white shadow-md shadow-blue-950/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-blue-600"
          aria-label="Ir para a calculadora"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
            <FaCalculator className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight">
            Calculadora
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-2"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            {isMenuOpen ? (
              <FaTimes className="h-5 w-5" aria-hidden="true" />
            ) : (
              <FaBars className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden border-t border-white/10 bg-blue-700 px-4 py-3 shadow-lg"
          aria-label="Navegação mobile"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="container mx-auto grid gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
