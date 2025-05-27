// src/components/common/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="mt-12 border-t pt-6">
    <p className="text-sm">© 2025 Matrizes+. Todos os direitos reservados.</p>
    <div className="space-x-4 mt-2">
      <Link to="/politica" className="text-blue-600 hover:underline">
        Política de Privacidade
      </Link>
      <Link to="/termos" className="text-blue-600 hover:underline">
        Termos de Uso
      </Link>
      <Link to="/contato" className="text-blue-600 hover:underline">
        Contato
      </Link>
    </div>
  </footer>
);

export default Footer;