import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

function TransposeTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Transposição de Matrizes: Teoria, Propriedades, Exemplos e Aplicações | Tutoriais de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content="Aprenda o que é a transposta de uma matriz, suas propriedades, exemplos práticos e aplicações em álgebra linear. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          name="keywords"
          content="matrizes, álgebra linear, calculadora de matrizes, transposta, transposição de matrizes: teoria, propriedades, exemplos e aplicações"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.matrizcalculator.com/tutorial/4"
        />
        <meta
          property="og:title"
          content="Transposição de Matrizes: Teoria, Propriedades, Exemplos e Aplicações | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          property="og:description"
          content="Aprenda o que é a transposta de uma matriz, suas propriedades, exemplos práticos e aplicações em álgebra linear. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          property="og:url"
          content="https://www.matrizcalculator.com/tutorial/4"
        />
        <meta
          property="og:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Transposição de Matrizes: Teoria, Propriedades, Exemplos e Aplicações | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          name="twitter:description"
          content="Aprenda o que é a transposta de uma matriz, suas propriedades, exemplos práticos e aplicações em álgebra linear. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          name="twitter:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Transposição de Matrizes: Teoria, Propriedades, Exemplos e Aplicações",
            description: "Aprenda o que é a transposta de uma matriz, suas propriedades, exemplos práticos e aplicações em álgebra linear.",
            step: [
              { "@type": "HowToStep", text: "Leia o tutorial passo a passo." },
              { "@type": "HowToStep", text: "Siga os exemplos práticos fornecidos." },
              { "@type": "HowToStep", text: "Use nossa calculadora para praticar os cálculos." },
            ],
            supply: { "@type": "HowToSupply", name: "Calculadora de Matrizes" },
            estimatedCost: { "@type": "MonetaryAmount", value: "0", currency: "USD" },
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
          <li><span className="text-gray-500">Transposição de Matrizes</span></li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Transposição de Matrizes: Teoria, Propriedades, Exemplos e Aplicações
      </h1>
      <p className="mb-6 text-gray-700">
        A transposição de matrizes é uma operação fundamental na Álgebra Linear, que consiste em trocar as linhas por colunas de uma matriz.
        Essa operação é amplamente utilizada em diversas áreas, como estatística, computação gráfica, aprendizado de máquina e física, devido
        às suas propriedades e simplicidade.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          1. Definição Formal
        </h2>
        <p className="text-gray-700 mb-2">
          A transposta de uma matriz A, denotada por Aᵀ, é obtida trocando suas linhas por colunas (ou vice-versa). Formalmente:
        </p>
        <p className="text-gray-700">
          Se A é uma matriz m×n, então Aᵀ é uma matriz n×m, onde o elemento (i,j) de A se torna o elemento (j,i) de Aᵀ.
        </p>
        <p className="text-gray-700 mt-2">
          Matematicamente: (Aᵀ)<sub>ij</sub> = A<sub>ji</sub>
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          2. Como Calcular a Transposta
        </h2>
        <p className="text-gray-700 mb-2">
          Para encontrar a transposta de uma matriz, siga estes passos:
        </p>
        <ol className="list-decimal pl-6 text-gray-700">
          <li>Identifique as dimensões da matriz original (m×n).</li>
          <li>Crie uma nova matriz com dimensões n×m.</li>
          <li>Para cada elemento a<sub>ij</sub> da matriz original, coloque-o na posição (j,i) da nova matriz.</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          3. Exemplos Práticos
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Exemplo 1: Matriz 2×3
        </h3>
        <p className="text-gray-700 mb-2">Seja a matriz:</p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [1, 2, 3],
            [4, 5, 6],
          ]}
        />
        <p className="text-gray-700 mb-2">
          A transposta Aᵀ será uma matriz 3×2:
        </p>
        <MatrixDisplay
          matrix={[
            [1, 4],
            [2, 5],
            [3, 6],
          ]}
        />
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Exemplo 2: Matriz 3×2
        </h3>
        <p className="text-gray-700 mb-2">Seja a matriz:</p>
        <p className="text-gray-700 mb-2">B =</p>
        <MatrixDisplay
          matrix={[
            [2, 3],
            [0, 1],
            [4, 5],
          ]}
        />
        <p className="text-gray-700 mb-2">
          A transposta Bᵀ será uma matriz 2×3:
        </p>
        <MatrixDisplay
          matrix={[
            [2, 0, 4],
            [3, 1, 5],
          ]}
        />
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Exemplo 3: Matriz Quadrada 2×2
        </h3>
        <p className="text-gray-700 mb-2">Seja a matriz:</p>
        <p className="text-gray-700 mb-2">C =</p>
        <MatrixDisplay
          matrix={[
            [1, 2],
            [3, 4],
          ]}
        />
        <p className="text-gray-700 mb-2">
          A transposta Cᵀ será:
        </p>
        <MatrixDisplay
          matrix={[
            [1, 3],
            [2, 4],
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          4. Propriedades da Transposição
        </h2>
        <p className="text-gray-700 mb-2">
          A operação de transposição possui propriedades importantes:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Dupla transposição:</strong> (Aᵀ)ᵀ = A
          </li>
          <li>
            <strong>Soma de matrizes:</strong> (A + B)ᵀ = Aᵀ + Bᵀ
          </li>
          <li>
            <strong>Multiplicação por escalar:</strong> (kA)ᵀ = kAᵀ
          </li>
          <li>
            <strong>Multiplicação de matrizes:</strong> (AB)ᵀ = BᵀAᵀ (note a inversão da ordem)
          </li>
          <li>
            <strong>Determinante:</strong> Para uma matriz quadrada, det(Aᵀ) = det(A)
          </li>
          <li>
            <strong>Inversa:</strong> (A⁻¹)ᵀ = (Aᵀ)⁻¹, se A for invertível
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          5. Aplicações da Transposição
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Álgebra Linear:</strong> Simplifica cálculos em sistemas lineares e na obtenção da matriz adjunta.
          </li>
          <li>
            <strong>Estatística:</strong> Usada na manipulação de dados em matrizes de covariância.
          </li>
          <li>
            <strong>Aprendizado de Máquina:</strong> Multiplicação de matrizes em redes neurais frequentemente envolve matrizes transpostas.
          </li>
          <li>
            <strong>Computação Gráfica:</strong> Transformações geométricas podem usar matrizes transpostas.
          </li>
          <li>
            <strong>Física:</strong> Modelagem de sistemas dinâmicos e equações diferenciais.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          6. Conclusão
        </h2>
        <p className="text-gray-700">
          A transposição de matrizes é uma operação simples, mas extremamente poderosa, com aplicações em diversas áreas da matemática e da
          ciência. Suas propriedades permitem manipular matrizes de forma eficiente, facilitando cálculos complexos em Álgebra Linear e outras
          disciplinas. Compreender a transposição é essencial para avançar em tópicos como sistemas lineares, transformações e aprendizado de
          máquina.
        </p>
        <p className="mt-4 text-gray-700">
          Continue aprendendo com nosso tutorial sobre{" "}
          <Link to="/tutorial/5" className="text-blue-600 hover:underline">
            Multiplicação de Matrizes
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default TransposeTutorial;