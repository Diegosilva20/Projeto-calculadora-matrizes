import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

function GaussTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>
          Método de Gauss: Teoria, Passo a Passo e Exemplos Detalhados |
          Tutoriais de Matrizes - Matrizes+
        </title>
        <meta
          name="description"
          content="Aprenda o Método de Gauss para resolver sistemas lineares, com teoria, passos detalhados e exemplos práticos. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          name="keywords"
          content="matrizes, álgebra linear, calculadora de matrizes, eliminação de gauss, método de gauss: teoria, passo a passo e exemplos detalhados"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.matrizcalculator.com/tutorial/3"
        />
        <meta
          property="og:title"
          content="Método de Gauss: Teoria, Passo a Passo e Exemplos Detalhados | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          property="og:description"
          content="Aprenda o Método de Gauss para resolver sistemas lineares, com teoria, passos detalhados e exemplos práticos. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          property="og:url"
          content="https://www.matrizcalculator.com/tutorial/3"
        />
        <meta
          property="og:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Método de Gauss: Teoria, Passo a Passo e Exemplos Detalhados | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          name="twitter:description"
          content="Aprenda o Método de Gauss para resolver sistemas lineares, com teoria, passos detalhados e exemplos práticos. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          name="twitter:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Método de Gauss: Teoria, Passo a Passo e Exemplos Detalhados",
            description:
              "Aprenda o Método de Gauss para resolver sistemas lineares, com teoria, passos detalhados e exemplos práticos.",
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
      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link to="/tutorials" className="text-blue-600 hover:underline">
              Tutoriais
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <span className="text-gray-500">Método de Gauss</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Método de Gauss: Teoria, Passo a Passo e Exemplos Detalhados
      </h1>
      <p className="mb-6 text-gray-700">
        O Método de Gauss, ou eliminação de Gauss, é uma técnica algébrica usada
        para resolver sistemas lineares. Ele consiste em aplicar operações
        elementares nas equações do sistema (ou nas linhas de uma matriz) até
        obter uma forma mais simples, chamada de forma escalonada, que permite
        encontrar as variáveis por substituição retroativa.
      </p>
      <p className="mb-6 text-gray-700">
        Esse método é um dos mais importantes da Álgebra Linear, base de
        diversos algoritmos computacionais e de ferramentas utilizadas em
        engenharia, ciência de dados, estatística, física e economia.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Objetivo do Método de Gauss
        </h2>
        <p className="text-gray-700 mb-2">
          Transformar o sistema linear (ou matriz ampliada) em uma forma
          triangular superior ou escalonada, de modo que:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Os coeficientes abaixo da diagonal principal sejam zerados.</li>
          <li>
            A última linha contenha apenas uma variável, a penúltima contenha
            duas, e assim por diante.
          </li>
        </ul>
        <p className="text-gray-700">
          Isso permite resolver o sistema com substituições retroativas.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Forma matricial de um sistema linear
        </h2>
        <p className="text-gray-700 mb-2">Dado um sistema:</p>
        <p className="text-gray-700">
          a₁₁x + a₁₂y + a₁₃z = b₁
          <br />
          a₂₁x + a₂₂y + a₂₃z = b₂
          <br />
          a₃₁x + a₃₂y + a₃₃z = b₃
        </p>
        <p className="text-gray-700 mt-2">
          Pode-se representá-lo por uma matriz aumentada [A | b]:
        </p>
        <MatrixDisplay
          matrix={[
            [
              <code>a₁₁</code>,
              <code>a₁₂</code>,
              <code>a₁₃</code>,
              <code>b₁</code>,
            ],
            [
              <code>a₂₁</code>,
              <code>a₂₂</code>,
              <code>a₂₃</code>,
              <code>b₂</code>,
            ],
            [
              <code>a₃₁</code>,
              <code>a₃₂</code>,
              <code>a₃₃</code>,
              <code>b₃</code>,
            ],
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Operações elementares permitidas
        </h2>
        <p className="text-gray-700 mb-2">
          Durante o processo de eliminação, podemos usar três operações
          elementares com as linhas da matriz:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Trocar duas linhas entre si: Lᵢ ↔ Lⱼ</li>
          <li>Multiplicar uma linha por um escalar não-nulo: Lᵢ ← λ ⋅ Lᵢ</li>
          <li>
            Somar ou subtrair um múltiplo de uma linha em outra: Lᵢ ← Lᵢ + λ ⋅
            Lⱼ
          </li>
        </ul>
        <p className="text-gray-700">
          Essas operações não alteram a solução do sistema.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Passo a passo do Método de Gauss
        </h2>
        <p className="text-gray-700 mb-2">
          Transformar a matriz aumentada em forma escalonada:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4">
          <li>Escolha um pivô (elemento não-nulo) na coluna atual.</li>
          <li>
            Use-o para zerar os elementos abaixo dele na mesma coluna, com
            operações do tipo Lᵢ ← Lᵢ - m ⋅ Lₖ.
          </li>
          <li>
            Repetir o processo nas linhas seguintes, até que toda a parte
            inferior da matriz esteja zerada.
          </li>
          <li>
            Resolver o sistema por substituição retroativa, começando da última
            linha.
          </li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Exemplo completo
        </h2>
        <p className="text-gray-700 mb-2">Resolver o sistema:</p>
        <p className="text-gray-700">
          2x + 3y - z = 5
          <br />
          4x + 4y - 3z = 3
          <br />
          -2x + 3y + 2z = 7
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
          Passo 1: Montar a matriz aumentada
        </h3>
        <MatrixDisplay
          matrix={[
            [2, 3, -1, 5],
            [4, 4, -3, 3],
            [-2, 3, 2, 7],
          ]}
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
          Passo 2: Eliminar o x das linhas 2 e 3
        </h3>
        <p className="text-gray-700 mb-2">Pivô: 2 (posição (1,1))</p>
        <p className="text-gray-700 mb-2">L₂ ← L₂ - 2 ⋅ L₁:</p>
        <p className="text-gray-700">
          L₂ = [4, 4, -3 | 3] - 2 ⋅ [2, 3, -1 | 5] = [0, -2, -1 | -7]
        </p>
        <p className="text-gray-700 mb-2">L₃ ← L₃ + L₁:</p>
        <p className="text-gray-700">
          L₃ = [-2, 3, 2 | 7] + [2, 3, -1 | 5] = [0, 6, 1 | 12]
        </p>
        <MatrixDisplay
          matrix={[
            [2, 3, -1, 5],
            [0, -2, -1, -7],
            [0, 6, 1, 12],
          ]}
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
          Passo 3: Eliminar o y da linha 3 usando linha 2
        </h3>
        <p className="text-gray-700 mb-2">
          Pivô da coluna 2: -2 (posição (2,2))
        </p>
        <p className="text-gray-700 mb-2">L₃ ← L₃ - 3 ⋅ L₂:</p>
        <p className="text-gray-700">
          L₃ = [0, 6, 1 | 12] - 3 ⋅ [0, -2, -1 | -7] = [0, 0, 4 | 33]
        </p>
        <MatrixDisplay
          matrix={[
            [2, 3, -1, 5],
            [0, -2, -1, -7],
            [0, 0, 4, 33],
          ]}
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
          Passo 4: Substituição retroativa
        </h3>
        <p className="text-gray-700 mb-2">Última equação: 4z = 33 ⇒ z = 33/4</p>
        <p className="text-gray-700 mb-2">
          Segunda: -2y - z = -7 ⇒ -2y - 33/4 = -7 ⇒ y = 1/8
        </p>
        <p className="text-gray-700 mb-2">
          Primeira: 2x + 3y - z = 5 ⇒ 2x + 3 ⋅ 1/8 - 33/4 = 5
        </p>
        <p className="text-gray-700">
          2x + 3/8 - 33/4 = 5 ⇒ 2x = 5 - 3/8 + 33/4 ⇒ 2x = 103/8 ⇒ x = 103/16
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Vantagens do Método de Gauss
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Serve para qualquer sistema linear, mesmo com muitas variáveis.
          </li>
          <li>É sistemático e pode ser automatizado em algoritmos.</li>
          <li>
            Pode ser adaptado para verificar existência e unicidade de soluções.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Tipos de soluções possíveis
        </h2>
        <p className="text-gray-700 mb-2">
          Durante o processo, o sistema pode revelar diferentes situações:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Sistema possível e determinado (SPD): uma única solução.</li>
          <li>
            Sistema possível e indeterminado (SPI): infinitas soluções (aparece
            linha com zeros e igualdade verdadeira, como 0 = 0).
          </li>
          <li>
            Sistema impossível (SI): sem solução (aparece linha com zeros e
            igualdade falsa, como 0 = 5).
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Conclusão</h2>
        <p className="text-gray-700">
          O método de Gauss é uma ferramenta poderosa para resolver sistemas
          lineares de forma organizada e precisa. Ele baseia-se na eliminação
          progressiva de variáveis, transformando a matriz aumentada em uma
          forma escalonada, facilitando a resolução por substituição retroativa.
          É um dos pilares da Álgebra Linear, amplamente utilizado em aplicações
          computacionais, científicas e tecnológicas.
        </p>
        <p className="mt-4 text-gray-700">
          Continue aprendendo com nosso tutorial sobre{" "}
          <Link to="/tutorial/1" className="text-blue-600 hover:underline">
            Determinantes
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default GaussTutorial;