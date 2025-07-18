import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="mt-12 border-t pt-6 bg-gray-100">
    <div className="container mx-auto text-center">
      <p className="text-sm text-gray-600">© 2025 MatrizCalculator. Todos os direitos reservados.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <Link to="/sobre" className="text-blue-600 hover:underline text-sm">
          Sobre
        </Link>
        <Link to="/contato" className="text-blue-600 hover:underline text-sm">
          Contato
        </Link>
        <Link to="/politica" className="text-blue-600 hover:underline text-sm">
          Política de Privacidade
        </Link>
        <Link to="/termos" className="text-blue-600 hover:underline text-sm">
          Termos de Uso
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;