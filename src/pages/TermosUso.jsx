import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function TermosUso() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Termos de Uso - Matrizes+</title>
        <meta
          name="description"
          content="Conheça os termos de uso do Matrizes+, site educacional gratuito."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.matrizcalculator.com/termos"
        />
        <meta property="og:title" content="Termos de Uso - Matrizes+" />
        <meta
          property="og:description"
          content="Leia os termos de uso do Matrizes+, site gratuito para aprendizado de matrizes."
        />
        <meta
          property="og:url"
          content="https://www.matrizcalculator.com/termos"
        />
        <meta
          property="og:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Termos de Uso - Matrizes+" />
        <meta
          name="twitter:description"
          content="Leia os termos de uso do Matrizes+, site gratuito para aprendizado de matrizes."
        />
        <meta
          name="twitter:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        <li>
          <strong>Uso Permitido:</strong> este site é gratuito e para fins
          educacionais.
        </li>
        <li>
          <strong>Conteúdo:</strong> fornecido "como está". Não garantimos
          precisão absoluta.
        </li>
        <li>
          <strong>Propriedade Intelectual:</strong> o conteúdo pertence ao site
          Matrizes+. Cópias não autorizadas são proibidas.
        </li>
        <li>
          <strong>Limitação de Responsabilidade:</strong> não nos
          responsabilizamos por perdas decorrentes do uso do site.
        </li>
        <li>
          <strong>Anúncios:</strong> anúncios são gerenciados pelo Google. Não
          nos responsabilizamos pelo conteúdo dos mesmos.
        </li>
        <li>
          <strong>Alterações:</strong> estes termos podem ser modificados sem
          aviso prévio.
        </li>
      </ul>
      <p className="mt-4 text-sm">
        Veja também nossa{" "}
        <Link to="/politica" className="text-blue-600 hover:underline">
          Política de Privacidade
        </Link>
        .
      </p>
    </main>
  );
}

export default TermosUso;