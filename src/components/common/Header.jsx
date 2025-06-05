import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav aria-label="Navegação principal" className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold" aria-label="Página inicial do Matrizes+">
          Matrizes+
        </Link>
        <div className="space-x-4">
          <Link to="/sobre" aria-label="Sobre o Matrizes+">Sobre</Link>
          <Link to="/contato" aria-label="Contato">Contato</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header; // Certifique-se de usar export default