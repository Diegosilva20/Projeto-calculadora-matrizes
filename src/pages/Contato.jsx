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
          href="https://matrizcalculator.com/contato"
        />
        <meta property="og:title" content="Contato - Matrizes+" />
        <meta
          property="og:description"
          content="Entre em contato com o Matrizes+ para dúvidas, sugestões ou suporte."
        />
        <meta
          property="og:url"
          content="https://matrizcalculator.com/contato"
        />
        <meta
          property="og:image"
          content="https://matrizcalculator.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contato - Matrizes+" />
        <meta
          name="twitter:description"
          content="Entre em contato com o Matrizes+ para dúvidas, sugestões ou suporte."
        />
        <meta
          name="twitter:image"
          content="https://matrizcalculator.com/og-image.jpg"
        />
      </Helmet>
      
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Entre em Contato
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sua opinião é muito importante para nós!
        </p>
      </div>

      <div className="space-y-6 text-gray-700">
        <p>
          Se você tem alguma dúvida sobre nossas ferramentas, encontrou um erro
          nos cálculos, tem sugestões para novas funcionalidades ou simplesmente
          deseja nos dar um feedback, não hesite em nos contatar. Estamos em
          constante desenvolvimento e a sua colaboração é fundamental para
          melhorar a MatrizCalculator.
        </p>

        <div className="text-center bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Nosso Canal de Suporte
          </h2>
          <p className="mb-4">
            Para todas as comunicações, por favor, envie um e-mail para:
          </p>
          <a
            href="mailto:suporte@matrizcalculator.com"
            className="text-blue-600 text-lg font-medium hover:underline break-words"
          >
            suporte@matrizcalculator.com
          </a>
        </div>

        <p>
          Faremos o nosso melhor para analisar e responder a todas as mensagens
          o mais rápido possível. Agradecemos sua contribuição para tornar a
          MatrizCalculator uma ferramenta cada vez mais precisa e útil para
          todos.
        </p>
      </div>
    </main>
  );
}

export default Contato;