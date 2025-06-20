import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

function MultiplicationTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Multiplicação de Matrizes: Teoria, Regras, Passo a Passo e Exemplos | Tutoriais de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content="Explore a teoria, regras e exemplos práticos da multiplicação de matrizes, uma operação essencial em álgebra linear com aplicações em diversas áreas. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          name="keywords"
          content="matrizes, álgebra linear, calculadora de matrizes, multiplicação, multiplicação de matrizes: teoria, regras, passo a passo e exemplos"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://projeto-calculadora-matrizes.vercel.app/tutorial/5"
        />
        <meta
          property="og:title"
          content="Multiplicação de Matrizes: Teoria, Regras, Passo a Passo e Exemplos | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          property="og:description"
          content="Explore a teoria, regras e exemplos práticos da multiplicação de matrizes, uma operação essencial em álgebra linear com aplicações em diversas áreas. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          property="og:url"
          content="https://projeto-calculadora-matrizes.vercel.app/tutorial/5"
        />
        <meta
          property="og:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Multiplicação de Matrizes: Teoria, Regras, Passo a Passo e Exemplos | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          name="twitter:description"
          content="Explore a teoria, regras e exemplos práticos da multiplicação de matrizes, uma operação essencial em álgebra linear com aplicações em diversas áreas. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          name="twitter:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Multiplicação de Matrizes: Teoria, Regras, Passo a Passo e Exemplos",
            description: "Explore a teoria, regras e exemplos práticos de multiplicação de matrizes, uma operação essencial na álgebra linear com aplicações em diversas áreas.",
            step: [
              { "@type": "HowToStep", text: "Leia o tutorial passo a passo." },
              { "@type": "HowToStep", text: "Siga os exemplos práticos fornecidos." },
              { "@type": "HowToStep", text: "Use nossa calculadora para praticar os cálculos." },
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
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link to="/tutorials" className="text-blue-600 hover:underline">Tutoriais</Link>
          </li>
          <li className="mx-2">/</li>
          <li><span className="text-gray-500">Multiplicação de Matrizes</span></li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Multiplicação de Matrizes: Teoria, Regras, Passo a Passo e Exemplos
      </h1>
      <p className="mb-6 text-gray-700">
        A multiplicação de matrizes é uma operação fundamental na Álgebra Linear, utilizada em diversas áreas como programação, inteligência
        artificial, gráficos computacionais, economia, física, engenharia e estatística. Diferente da multiplicação comum de números, a
        multiplicação de matrizes obedece a regras específicas e exige que determinadas condições sejam atendidas.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          1. Introdução Teórica
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Definição Formal
        </h3>
        <p className="text-gray-700">
          Sejam A uma matriz de ordem m×n e B uma matriz de ordem p×q. O produto AB existe se e somente se n = p, resultando em uma matriz C
          de ordem m×q, onde cada elemento c<sub>ij</sub> é calculado por:
        </p>
        <p className="text-gray-700">
          c<sub>ij</sub> = Σ<sub>k=1</sub><sup>n</sup> a<sub>ik</sub> × b<sub>kj</sub>
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          2. Regras Fundamentais
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          2.1 Condição de Existência
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Regra Principal:</strong> Para multiplicar A×B, o número de colunas de A deve ser igual ao número de linhas de B.
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>A: matriz m×n</li>
          <li>B: matriz n×p</li>
          <li>Produto AB: matriz m×p</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          2.2 Propriedades da Multiplicação Matricial
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Propriedades Válidas:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Associatividade: (AB)C = A(BC)</li>
          <li>Distributividade à esquerda: A(B + C) = AB + AC</li>
          <li>Distributividade à direita: (A + B)C = AC + BC</li>
          <li>Elemento neutro: AI = IA = A (onde I é a matriz identidade)</li>
        </ul>
        <p className="text-gray-700 mb-2">
          <strong>Propriedades NÃO Válidas:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>NÃO é comutativa: AB ≠ BA (em geral)</li>
          <li>NÃO vale o cancelamento: AB = AC não implica B = C</li>
          <li>Produto zero: AB = 0 não implica A = 0 ou B = 0</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          2.3 Casos Especiais
        </h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Multiplicação por Escalar: Se k é um escalar: k(AB) = (kA)B = A(kB)
          </li>
          <li>
            Multiplicação por Matriz Identidade:
            <ul className="list-none pl-5">
              <li>AI = A (multiplicação à direita)</li>
              <li>IA = A (multiplicação à esquerda)</li>
            </ul>
          </li>
          <li>
            Potência de Matriz: A<sup>n</sup> = A × A × ... × A (n vezes), onde A deve ser quadrada.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          3. Algoritmo Passo a Passo
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Passo 1: Verificar Compatibilidade
        </h3>
        <ol className="list-decimal pl-6 text-gray-700 mb-4">
          <li>Identifique as dimensões das matrizes A(m×n) e B(p×q)</li>
          <li>Verifique se n = p</li>
          <li>Se sim, o produto resultará em matriz C(m×q)</li>
        </ol>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Passo 2: Configurar a Matriz Resultado
        </h3>
        <ol className="list-decimal pl-6 text-gray-700 mb-4">
          <li>Crie uma matriz C com m linhas e q colunas</li>
          <li>Inicialize todos os elementos como zero</li>
        </ol>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Passo 3: Calcular Cada Elemento
        </h3>
        <ol className="list-decimal pl-6 text-gray-700 mb-4">
          <li>
            Para cada posição (i,j) da matriz resultado:
            <ul className="list-none pl-5">
              <li>Tome a linha i da matriz A</li>
              <li>Tome a coluna j da matriz B</li>
              <li>Multiplicação elemento por elemento</li>
              <li>Sume todos os produtos</li>
              <li>O resultado é c<sub>ij</sub></li>
            </ul>
          </li>
        </ol>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Passo 4: Repetir para Todos os Elementos
        </h3>
        <p className="text-gray-700">
          Continue até preencher toda a matriz resultado.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          4. Exemplos Práticos
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Exemplo 1: Multiplicação Básica 2×2
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Matrizes:</strong>
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [2, 3],
            [1, 4],
          ]}
        />
        <p className="text-gray-700 mb-2">B =</p>
        <MatrixDisplay
          matrix={[
            [5, 1],
            [2, 6],
          ]}
        />
        <p className="text-gray-700 mb-2">
          <strong>Verificação:</strong> A é 2×2, B é 2×2. Como 2 = 2, a multiplicação é possível.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Cálculos:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            c<sub>11</sub> = (2×5) + (3×2) = 10 + 6 = 16
          </li>
          <li>
            c<sub>12</sub> = (2×1) + (3×6) = 2 + 18 = 20
          </li>
          <li>
            c<sub>21</sub> = (1×5) + (4×2) = 5 + 8 = 13
          </li>
          <li>
            c<sub>22</sub> = (1×1) + (4×6) = 1 + 24 = 25
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          <strong>Resultado:</strong>
        </p>
        <MatrixDisplay
          matrix={[
            [16, 20],
            [13, 25],
          ]}
        />
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Exemplo 2: Multiplicação com Dimensões Diferentes
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Matrizes:</strong>
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [1, 2, 3],
            [4, 5, 6],
          ]}
        />
        <p className="text-gray-700 mb-2">B =</p>
        <MatrixDisplay
          matrix={[
            [2],
            [1],
            [3],
          ]}
        />
        <p className="text-gray-700 mb-2">
          <strong>Verificação:</strong> A é 2×3, B é 3×1. Como 3 = 3, a multiplicação é possível, resultando em matriz 2×1.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Cálculos:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            c<sub>11</sub> = (1×2) + (2×1) + (3×3) = 2 + 2 + 9 = 13
          </li>
          <li>
            c<sub>21</sub> = (4×2) + (5×1) + (6×3) = 8 + 5 + 18 = 31
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          <strong>Resultado:</strong>
        </p>
        <MatrixDisplay
          matrix={[
            [13],
            [31],
          ]}
        />
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Exemplo 3: Multiplicação 3×3 Completa
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Matrizes:</strong>
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [1, 2, 0],
            [3, 1, 2],
            [1, 0, 1],
          ]}
        />
        <p className="text-gray-700 mb-2">B =</p>
        <MatrixDisplay
          matrix={[
            [3, 1, 2],
            [0, 2, 1],
            [1, 1, 0],
          ]}
        />
        <p className="text-gray-700 mb-2">
          <strong>Cálculos detalhados:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            c<sub>11</sub> = (1×3) + (2×0) + (0×1) = 3 + 0 + 0 = 3
          </li>
          <li>
            c<sub>12</sub> = (1×1) + (2×2) + (0×1) = 1 + 4 + 0 = 5
          </li>
          <li>
            c<sub>13</sub> = (1×2) + (2×1) + (0×0) = 2 + 2 + 0 = 4
          </li>
          <li>
            c<sub>21</sub> = (3×3) + (1×0) + (2×1) = 9 + 0 + 2 = 11
          </li>
          <li>
            c<sub>22</sub> = (3×1) + (1×2) + (2×1) = 3 + 2 + 2 = 7
          </li>
          <li>
            c<sub>23</sub> = (3×2) + (1×1) + (2×0) = 6 + 1 + 0 = 7
          </li>
          <li>
            c<sub>31</sub> = (1×3) + (0×0) + (1×1) = 3 + 0 + 1 = 4
          </li>
          <li>
            c<sub>32</sub> = (1×1) + (0×2) + (1×1) = 1 + 0 + 1 = 2
          </li>
          <li>
            c<sub>33</sub> = (1×2) + (0×1) + (1×0) = 2 + 0 + 0 = 2
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          <strong>Resultado:</strong>
        </p>
        <MatrixDisplay
          matrix={[
            [3, 5, 4],
            [11, 7, 7],
            [4, 2, 2],
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          5. Aplicações da Multiplicação de Matrizes
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Transformações Lineares:</strong> Em computação gráfica, como rotações, escalas e translações de objetos 2D ou 3D.
          </li>
          <li>
            <strong>Sistemas Lineares:</strong> Resolver equações matriciais como AX = B.
          </li>
          <li>
            <strong>Redes Neurais:</strong> Multiplicação de matrizes é usada em camadas de redes neurais artificiais.
          </li>
          <li>
            <strong>Economia:</strong> Modelagem de cadeias de produção e análise de insumo-produto.
          </li>
          <li>
            <strong>Física:</strong> Cálculos em mecânica quântica e relatividade.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          6. Conclusão
        </h2>
        <p className="text-gray-700">
          A multiplicação de matrizes é uma operação essencial na Álgebra Linear, com regras específicas e amplas aplicações em diversas áreas
          da ciência e tecnologia. Embora não seja comutativa e exija compatibilidade de dimensões, seu cálculo é sistemático e pode ser
          facilmente automatizado. Com prática, você dominará essa técnica e poderá aplicá-la em problemas reais.
        </p>
        <p className="mt-4 text-gray-700">
          Continue aprendendo com nosso tutorial sobre{" "}
          <Link to="/tutorial/4" className="text-blue-600 hover:underline">
            Transposição de Matrizes
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default MultiplicationTutorial;