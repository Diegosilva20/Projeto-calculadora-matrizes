import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Sobre() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Sobre o Matrizes+: Calculadora de Matrizes Online</title>
        <meta
          name="description"
          content="O Matrizes+ é uma plataforma gratuita com calculadora de matrizes online e tutoriais de álgebra linear para estudantes e professores."
        />
        <meta
          name="keywords"
          content="álgebra linear, calculadora de matrizes online, tutoriais de matrizes, matemática"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.matrizcalculator.com/sobre"
        />
        <meta
          property="og:title"
          content="Sobre o Matrizes+: Calculadora de Matrizes Online"
        />
        <meta
          property="og:description"
          content="O Matrizes+ oferece calculadora de matrizes online gratuita e tutoriais de álgebra linear para estudantes e professores."
        />
        <meta
          property="og:url"
          content="https://www.matrizcalculator.com/sobre"
        />
        <meta
          property="og:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sobre o Matrizes+: Calculadora de Matrizes Online"
        />
        <meta
          name="twitter:description"
          content="O Matrizes+ oferece calculadora de matrizes online gratuita e tutoriais de álgebra linear para estudantes e professores."
        />
        <meta
          name="twitter:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sobre o Matrizes+",
            "description": "O Matrizes+ é uma plataforma educacional gratuita com calculadora de matrizes online e tutoriais de álgebra linear.",
            "url": "https://www.matrizcalculator.com/sobre",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.matrizcalculator.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Sobre",
                  "item": "https://www.matrizcalculator.com/sobre"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <nav className="text-sm mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          </li>
          <li className="mx-2">/</li>
          <li><span className="text-gray-500">Sobre</span></li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Sobre o Matrizes+</h1>
      <p className="text-gray-700 mb-4">
        O Matrizes+ é uma plataforma educacional gratuita que simplifica o aprendizado de <strong>álgebra linear</strong>. Oferecemos uma <strong>calculadora de matrizes online</strong> para operações como multiplicação, determinante e transposição, além de <Link to="/tutorials" className="text-blue-600 hover:underline">tutoriais de matrizes</Link> claros e práticos.
      </p>
      <p className="text-gray-700">
        Desenvolvido para estudantes, professores e profissionais, nosso objetivo é tornar a matemática acessível. Para dúvidas ou sugestões, visite nossa página de <Link to="/contato" className="text-blue-600 hover:underline">contato</Link>.
      </p>
    </main>
  );
}

export default Sobre;