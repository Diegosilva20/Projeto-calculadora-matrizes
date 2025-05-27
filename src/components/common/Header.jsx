// src/components/common/Header.jsx
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold text-lg">Matrizes+</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Início
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;