import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function TutorialPage() {
  const { id } = useParams();

  const tutoriais = [
    {
      id: 1,
      title: "O que é um Determinante? Guia Completo",
      description:
        "Aprenda o que é um determinante, como calculá-lo em matrizes 2x2 e 3x3, e suas aplicações práticas em álgebra linear.",
      content: (
        <div className="p-6 max-w-4xl mx-auto">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li>
                <Link to="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <span className="text-gray-500">O que é um Determinante?</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-4">
            O que é um Determinante? Guia Completo
          </h1>
          <p className="mb-4">
            O determinante é um valor escalar associado a uma matriz quadrada
            que fornece informações cruciais, como se a matriz é invertível ou
            como resolver sistemas lineares. É amplamente utilizado em álgebra
            linear, física e engenharia. Neste tutorial, exploraremos o
            conceito, os métodos de cálculo e exemplos práticos.
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-6">
            O que é um Determinante?
          </h2>
          <p className="mb-4">
            O determinante de uma matriz indica propriedades como a área ou
            volume de transformações geométricas. Se o determinante for zero, a
            matriz não tem inversa, o que é essencial para resolver equações
            lineares.
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-6">
            Cálculo para Matriz 2x2
          </h2>
          <p className="mb-4">
            Para uma matriz 2x2 da forma:
            <pre className="bg-gray-100 p-2 rounded my-2">[[a, b], [c, d]]</pre>
            A fórmula é: <code>det(A) = ad - bc</code>.
          </p>
          <h3 className="text-xl font-semibold mb-2">Exemplo 1: Matriz 2x2</h3>
          <p className="mb-4">
            Matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">[[1, 2], [3, 4]]</pre>
            Cálculo: <code>(1 * 4) - (2 * 3) = 4 - 6 = -2</code>.
            <Link to="/" className="text-blue-600 hover:underline">
              Teste na calculadora!
            </Link>
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-6">
            Cálculo para Matriz 3x3
          </h2>
          <p className="mb-4">
            Para uma matriz 3x3 da forma:
            <pre className="bg-gray-100 p-2 rounded my-2">
              [[a, b, c], [d, e, f], [g, h, i]]
            </pre>
            Use a Regra de Sarrus:{" "}
            <code>det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)</code>.
          </p>
          <h3 className="text-xl font-semibold mb-2">Exemplo 2: Matriz 3x3</h3>
          <p className="mb-4">
            Matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">
              [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
            </pre>
            Cálculo:{" "}
            <code>
              1(5*9 - 6*8) - 2(4*9 - 6*7) + 3(4*8 - 5*7) = 1(45-48) - 2(36-42) +
              3(32-35) = -3 + 12 - 3 = 6
            </code>
            .
            <Link to="/" className="text-blue-600 hover:underline">
              Experimente na calculadora!
            </Link>
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-6">
            Aplicações Práticas
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Verificar invertibilidade de matrizes.</li>
            <li>Resolver sistemas lineares com a regra de Cramer.</li>
            <li>Calcular áreas em geometria.</li>
          </ul>
          <p className="mb-4">
            Quer aprender mais? Confira nosso tutorial sobre{" "}
            <Link to="/tutorial/2" className="text-blue-600 hover:underline">
              Como Encontrar a Inversa de uma Matriz
            </Link>
            .
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Como Encontrar a Inversa de uma Matriz 2x2",
      description:
        "Descubra os passos para calcular a inversa de uma matriz 2x2 com exemplos práticos e aplicações em álgebra linear.",
      content: (
        <div className="p-6 max-w-4xl mx-auto">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li>
                <Link to="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <span className="text-gray-500">
                  Como Encontrar a Inversa de uma Matriz
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-4">
            Como Encontrar a Inversa de uma Matriz 2x2
          </h1>
          <p className="mb-4">
            A inversa de uma matriz A (A⁻¹) é aquela que, quando multiplicada
            por A, resulta na matriz identidade (I). Este conceito é fundamental
            para resolver sistemas lineares e tem aplicações em diversas áreas.
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-6">
            Passos para Calcular a Inversa
          </h2>
          <ol className="list-decimal pl-5 mb-4">
            <li>Calcule o determinante (deve ser diferente de zero).</li>
            <li>
              Troque os elementos da diagonal principal e inverta os sinais dos
              outros.
            </li>
            <li>Multiplique por 1/determinante.</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-2 mt-6">
            Fórmula para Matriz 2x2
          </h2>
          <p className="mb-4">
            Para uma matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">[[a, b], [c, d]]</pre>
            A inversa é: <code>(1 / (ad - bc)) * [[d, -b], [-c, a]]</code>.
          </p>
          <h3 className="text-xl font-semibold mb-2">Exemplo 1</h3>
          <p className="mb-4">
            Matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">[[4, 7], [2, 6]]</pre>
            Determinante: <code>(4 * 6) - (7 * 2) = 24 - 14 = 10</code>.
            Inversa:{" "}
            <code>
              (1 / 10) * [[6, -7], [-2, 4]] = [[0.6, -0.7], [-0.2, 0.4]]
            </code>
            .
            <Link to="/" className="text-blue-600 hover:underline">
              Teste na calculadora!
            </Link>
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-6">Aplicações</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Resolver equações lineares.</li>
            <li>Transformações lineares em gráficos.</li>
          </ul>
          <p className="mb-4">
            Explore mais com nosso tutorial sobre{" "}
            <Link to="/tutorial/3" className="text-blue-600 hover:underline">
              Eliminação de Gauss
            </Link>
            .
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Eliminação de Gauss Explicada",
      description:
        "Entenda como usar a eliminação de Gauss para resolver sistemas lineares e transformar matrizes.",
      content: (
        <div className="p-6 max-w-4xl mx-auto">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li>
                <Link to="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <span className="text-gray-500">Eliminação de Gauss</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-4">
            Eliminação de Gauss Explicada
          </h1>
          <p className="mb-4">
            A eliminação de Gauss é um método algébrico para transformar uma
            matriz em forma escalonada, facilitando a resolução de sistemas
            lineares e outras análises.
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-6">Passos do Método</h2>
          <ol className="list-decimal pl-5 mb-4">
            <li>
              Escolha um pivô e use operações de linha para zerar elementos
              abaixo dele.
            </li>
            <li>Repita para cada coluna até a forma escalonada.</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-2 mt-6">Exemplo Prático</h2>
          <p className="mb-4">
            Matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">
              [[2, 1, 5], [4, 3, 7]]
            </pre>
            Passo 1: Subtrair 2 * linha 1 da linha 2:
            <pre className="bg-gray-100 p-2 rounded my-2">
              [[2, 1, 5], [0, 1, -3]]
            </pre>
            <Link to="/" className="text-blue-600 hover:underline">
              Teste na calculadora!
            </Link>
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-6">Vantagens</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Simplicidade para matrizes pequenas.</li>
            <li>Base para métodos avançados como Gauss-Jordan.</li>
          </ul>
          <p className="mb-4">
            Volte ao início com nosso tutorial sobre{" "}
            <Link to="/tutorial/1" className="text-blue-600 hover:underline">
              Determinantes
            </Link>
            .
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "O que é Transposição de Matrizes?",
      description: "Aprenda como transpor uma matriz com exemplos práticos.",
      content: (
        <div className="p-6 max-w-4xl mx-auto">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li>
                <Link to="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <span className="text-gray-500">Transposição de Matrizes</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-4">
            O que é Transposição de Matrizes?
          </h1>
          <p className="mb-4">
            A transposição de uma matriz consiste em inverter suas linhas e
            colunas, criando uma nova matriz. É uma operação fundamental em
            álgebra linear.
          </p>
          <h2 className="text-2xl font-semibold mb-2 mt-6">Exemplo Prático</h2>
          <p className="mb-4">
            Matriz original:
            <pre className="bg-gray-100 p-2 rounded my-2">[[1, 2], [3, 4]]</pre>
            Transposta:
            <pre className="bg-gray-100 p-2 rounded my-2">[[1, 3], [2, 4]]</pre>
            <Link to="/" className="text-blue-600 hover:underline">
              Teste na calculadora!
            </Link>
          </p>
          <Link
            to="/"
            className="text-blue-600 hover:underline mt-6 inline-block"
          >
            Voltar para a página inicial
          </Link>
        </div>
      ),
    },
  ];

  const tutorial = tutoriais.find((t) => t.id === parseInt(id));

  if (!tutorial) {
    return (
      <main className="p-6 max-w-4xl mx-auto">
        <Helmet>
          <title>Tutorial Não Encontrado - Matrizes+</title>
          <meta
            name="description"
            content="O tutorial solicitado não foi encontrado no Matrizes+. Volte para a página inicial e explore nossos tutoriais de álgebra linear."
          />
          <meta
            name="keywords"
            content="tutorial não encontrado, matrizes, álgebra linear"
          />
          <meta name="robots" content="noindex" />
          <link
            rel="canonical"
            href="https://projeto-calculadora-matrizes.vercel.app/"
          />
        </Helmet>
        <h1 className="text-3xl font-bold mb-4">Tutorial Não Encontrado</h1>
        <p>Desculpe, o tutorial solicitado não existe.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Voltar para a página inicial
        </Link>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>{tutorial.title} | Tutoriais de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content={`${tutorial.description} Acesse exemplos práticos e use nossa calculadora online para matrizes!`}
        />
        <meta
          name="keywords"
          content={[
            "matrizes",
            "álgebra linear",
            "calculadora de matrizes",
            tutorial.id === 1
              ? "determinante"
              : tutorial.id === 2
              ? "inversa"
              : "eliminação de gauss",
            tutorial.title.toLowerCase().replace("?", ""),
          ].join(", ")}
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://projeto-calculadora-matrizes.vercel.app/tutorial/${id}`}
        />
        <meta
          property="og:title"
          content={`${tutorial.title} | Tutoriais de Matrizes - Matrizes+`}
        />
        <meta
          property="og:description"
          content={`${tutorial.description} Acesse exemplos práticos e use nossa calculadora online para matrizes!`}
        />
        <meta
          property="og:url"
          content={`https://projeto-calculadora-matrizes.vercel.app/tutorial/${id}`}
        />
        <meta
          property="og:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${tutorial.title} | Tutoriais de Matrizes - Matrizes+`}
        />
        <meta
          name="twitter:description"
          content={`${tutorial.description} Acesse exemplos práticos e use nossa calculadora online para matrizes!`}
        />
        <meta
          name="twitter:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: tutorial.title,
            description: tutorial.description,
            step: [
              { "@type": "HowToStep", text: "Leia o tutorial passo a passo." },
              {
                "@type": "HowToStep",
                text: "Siga os exemplos práticos fornecidos.",
              },
              {
                "@type": "HowToStep",
                text: "Use nossa calculadora para praticar os cálculos.",
              },
            ],
            supply: { "@type": "HowToSupply", name: "Calculadora de Matrizes" },
            estimatedCost: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "USD",
            },
          })}
        </script>
      </Helmet>
      <article>{tutorial.content}</article>
      <Link to="/" className="text-blue-600 hover:underline mt-6 inline-block">
        Voltar para a página inicial
      </Link>
    </main>
  );
}

export default TutorialPage;
