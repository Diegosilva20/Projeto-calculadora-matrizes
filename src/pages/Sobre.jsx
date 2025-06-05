import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Sobre() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Sobre - Matrizes+</title>
        <meta
          name="description"
          content="Conheça o Matrizes+, uma ferramenta educacional gratuita para cálculos de matrizes e aprendizado de álgebra linear."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://projeto-calculadora-matrizes.vercel.app/sobre" />
        <meta property="og:title" content="Sobre - Matrizes+" />
        <meta
          property="og:description"
          content="Saiba mais sobre o Matrizes+, uma ferramenta gratuita para estudantes e professores de matemática."
        />
        <meta
          property="og:url"
          content="https://projeto-calculadora-matrizes.vercel.app/sobre"
        />
        <meta
          property="og:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre - Matrizes+" />
        <meta
          name="twitter:description"
          content="Saiba mais sobre o Matrizes+, uma ferramenta gratuita para estudantes e professores de matemática."
        />
        <meta
          name="twitter:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Sobre o Matrizes+</h1>
      <p className="mb-4">
        O Matrizes+ é uma plataforma educacional gratuita criada para ajudar estudantes e professores a realizar cálculos com matrizes e aprender álgebra linear. Oferecemos uma calculadora online que suporta operações como soma, subtração, multiplicação, determinante, inversa, transposição e eliminação de Gauss, além de tutoriais detalhados.
      </p>
      <p className="mb-4">
        Nosso objetivo é simplificar o aprendizado de matemática e fornecer ferramentas acessíveis a todos. Para mais informações ou suporte, visite a página de{" "}
        <Link to="/contato" className="text-blue-600 hover:underline">
          Contato
        </Link>
        .
      </p>
    </main>
  );
}

export default Sobre;