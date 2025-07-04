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
      
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Nossa Missão: Simplificando a Álgebra Linear
        </h1>
        <p className="text-lg text-gray-600">
          Tornando a matemática mais acessível, uma matriz de cada vez.
        </p>
      </div>

      <div className="space-y-8 text-gray-700 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Por Que Criamos a MatrizCalculator?</h2>
          <p>
            Nascemos da paixão pela educação e da percepção de uma necessidade real: a álgebra linear, embora fundamental em diversas áreas da ciência e tecnologia, muitas vezes é vista como um campo complexo e intimidador. Fórmulas abstratas e cálculos trabalhosos podem se tornar barreiras para o aprendizado.
          </p>
          <p className="mt-4">
            A MatrizCalculator foi criada para quebrar essas barreiras. Nosso objetivo é oferecer uma ponte entre a teoria e a prática, fornecendo uma ferramenta que não apenas entrega resultados, mas que também ajuda a visualizar o processo, permitindo que estudantes e profissionais solidifiquem seu conhecimento.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">O Que Oferecemos?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Calculadoras Precisas:</strong> Ferramentas fáceis de usar para uma variedade de operações com matrizes, desde as mais básicas até as mais complexas.
            </li>
            <li>
              <strong>Tutoriais Detalhados:</strong> Guias passo a passo que explicam a teoria por trás dos cálculos, ideais para quem está aprendendo ou precisa relembrar um conceito.
            </li>
            <li>
              <strong>Acesso Gratuito e Universal:</strong> Acreditamos que o conhecimento deve ser livre. Por isso, mantemos a plataforma 100% gratuita, suportada por anúncios para cobrir os custos de manutenção e desenvolvimento.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Nossa Visão</h2>
          <p>
            Almejamos ser a principal ferramenta de apoio online para o estudo de matrizes em língua portuguesa. Estamos em constante evolução, trabalhando para adicionar novas calculadoras, aprofundar nossos tutoriais e garantir que a plataforma continue sendo rápida, confiável e, acima de tudo, útil para a nossa comunidade de usuários.
          </p>
        </section>

        <div className="text-center pt-6">
          <p className="text-gray-800 text-lg">
            Agradecemos por usar a MatrizCalculator!
          </p>
          <p className="text-gray-600 mt-2">
            Se tiver qualquer sugestão ou dúvida, não hesite em{" "}
            <Link to="/contato" className="text-blue-600 hover:underline">
              entrar em contato
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

export default Sobre;