import { Link } from "react-router-dom";

const footerLinkClasses =
  "text-sm text-blue-600 hover:underline dark:text-blue-400";

const Footer = () => (
  <footer className="mt-12 border-t border-gray-200 bg-gray-100 pt-6 transition-colors dark:border-slate-800 dark:bg-slate-950">
    <div className="container mx-auto text-center">
      <p className="text-sm text-gray-600 dark:text-slate-400">
        © 2026 MatrizCalculator. Todos os direitos reservados.
      </p>
      <div className="mt-2 flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Link to="/sobre" className={footerLinkClasses}>
          Sobre
        </Link>
        <Link to="/contato" className={footerLinkClasses}>
          Contato
        </Link>
        <Link to="/politica-privacidade" className={footerLinkClasses}>
          Política de Privacidade
        </Link>
        <Link to="/termos-uso" className={footerLinkClasses}>
          Termos de Uso
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
  