import { Helmet } from "react-helmet";

function Contato() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Contato - Matrizes+</title>
        <meta
          name="description"
          content="Entre em contato com o Matrizes+ para dúvidas ou suporte."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://projeto-calculadora-matrizes.vercel.app/contato"
        />
        <meta property="og:title" content="Contato - Matrizes+" />
        <meta
          property="og:description"
          content="Entre em contato com o Matrizes+ para dúvidas, sugestões ou suporte."
        />
        <meta
          property="og:url"
          content="https://projeto-calculadora-matrizes.vercel.app/contato"
        />
        <meta
          property="og:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contato - Matrizes+" />
        <meta
          name="twitter:description"
          content="Entre em contato com o Matrizes+ para dúvidas, sugestões ou suporte."
        />
        <meta
          name="twitter:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <p className="text-sm">
        Se você tiver dúvidas, sugestões ou precisar de suporte, entre em
        contato:
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        <li>
          <strong>📧 E-mail:</strong> suporte@matrizesmais.com
        </li>
      </ul>
    </main>
  );
}

export default Contato;