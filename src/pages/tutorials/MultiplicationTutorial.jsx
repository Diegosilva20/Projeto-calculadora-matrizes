import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

// Componente para formatação de LaTeX para clareza e consistência
const Latex = ({ children }) => (
  <span className="font-serif italic">{children}</span>
);

function MatrixMultiplicationTutorial() {
  const pageTitle = "Como Multiplicar Matrizes: Guia Passo a Passo";
  const pageDescription =
    "Aprenda a multiplicar matrizes com um guia passo a passo. Entenda a regra de compatibilidade, o método linha-por-coluna e veja exemplos práticos.";
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <Helmet>
        {/* --- SEO Básico e Meta Tags --- */}
        <title>{`${pageTitle} | Matrizes+`}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="multiplicação de matrizes, como multiplicar matrizes, regra da multiplicação de matrizes, exemplo de multiplicação, álgebra linear"
        />
        <link
          rel="canonical"
          href="https://www.matrizcalculator.com/tutorial/5"
        />

        {/* --- Open Graph / Facebook e Twitter Tags --- */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content="https://www.matrizcalculator.com/tutorial/5"
        />
        <meta
          property="og:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />

        {/* --- Schema.org para Rich Snippets --- */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalResource",
            headline: pageTitle,
            author: {
              "@type": "Organization",
              name: "Matrizes+",
            },
            datePublished: "2025-06-18", // Sugestão de data de criação
            dateModified: "2025-06-18",
            description: pageDescription,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.matrizcalculator.com/tutorial/5",
            },
            educationalLevel: "Ensino Superior",
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
          <li className="text-gray-500">Multiplicação de Matrizes</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Como Multiplicar Matrizes: Um Guia Passo a Passo
      </h1>
      <p className="mb-6">
        A multiplicação de matrizes é uma das operações mais importantes da
        álgebra linear, mas sua regra pode parecer confusa no início. Este guia
        vai desmistificar o processo.
      </p>

      {/* 1. A Regra de Ouro */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Pode Multiplicar? A Regra de Ouro
        </h2>
        <p className="mb-4">
          Antes de qualquer cálculo, você precisa verificar se a multiplicação é
          possível. A regra é simples:
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-blue-50 border border-blue-200 rounded">
          O número de <span className="text-blue-600">colunas</span> da primeira
          matriz deve ser IGUAL ao número de{" "}
          <span className="text-red-600">linhas</span> da segunda.
        </div>
        <p className="mt-4 text-center">
          Matriz A (<Latex>m</Latex> x{" "}
          <span className="text-blue-600">
            <Latex>n</Latex>
          </span>
          ) × Matriz B (
          <span className="text-red-600">
            <Latex>n</Latex>
          </span>{" "}
          x <Latex>p</Latex>) → Matriz C (<Latex>m</Latex> x <Latex>p</Latex>)
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          A matriz resultante terá o número de linhas da primeira e o número de
          colunas da segunda.
        </p>
      </div>

      {/* 2. A Mecânica do Cálculo */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Mecânica do Cálculo: Linha por Coluna
        </h2>
        <p className="mb-4">
          Cada elemento da matriz resultante é calculado multiplicando uma{" "}
          <strong>linha</strong> da primeira matriz por uma{" "}
          <strong>coluna</strong> da segunda.
        </p>
        <p>
          Para encontrar o elemento na{" "}
          <strong>
            linha <Latex>i</Latex>
          </strong>{" "}
          e{" "}
          <strong>
            coluna <Latex>j</Latex>
          </strong>{" "}
          da matriz resultado (C), você deve:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-2 bg-gray-50 p-4 rounded">
          <li>
            Pegar a{" "}
            <strong>
              linha <Latex>i</Latex>
            </strong>{" "}
            da primeira matriz (A).
          </li>
          <li>
            Pegar a{" "}
            <strong>
              coluna <Latex>j</Latex>
            </strong>{" "}
            da segunda matriz (B).
          </li>
          <li>Multiplicar os elementos correspondentes um a um.</li>
          <li>Somar todos os produtos.</li>
        </ol>
      </div>

      {/* 3. Exemplo Prático Completo */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Prático Completo
        </h2>
        <p className="mb-2">Vamos calcular A × B, onde:</p>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div>
            <p>Matriz A (2x3):</p>
            <MatrixDisplay
              matrix={[
                [2, 1, 3],
                [4, 0, 2],
              ]}
            />
          </div>
          <div>
            <p>Matriz B (3x2):</p>
            <MatrixDisplay
              matrix={[
                [1, 4],
                [2, 1],
                [3, 5],
              ]}
            />
          </div>
        </div>
        <p className="mt-4">
          <strong>Verificação:</strong> A (2x
          <span className="text-blue-600">3</span>) e B (
          <span className="text-red-600">3</span>x2) são compatíveis. O
          resultado C será (2x2).
        </p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Elemento C₁₁ (Linha 1 de A × Coluna 1 de B):
          </h3>
          <p className="font-mono mt-1">
            <span className="text-red-500">[2, 1, 3]</span> ·{" "}
            <span className="text-blue-500">[1, 2, 3]</span> = (2×1) + (1×2) +
            (3×3) = 2 + 2 + 9 = <strong>13</strong>
          </p>

          <h3 className="text-lg font-semibold mt-3">
            Elemento C₁₂ (Linha 1 de A × Coluna 2 de B):
          </h3>
          <p className="font-mono mt-1">
            <span className="text-red-500">[2, 1, 3]</span> ·{" "}
            <span className="text-blue-500">[4, 1, 5]</span> = (2×4) + (1×1) +
            (3×5) = 8 + 1 + 15 = <strong>24</strong>
          </p>

          <h3 className="text-lg font-semibold mt-3">
            Elemento C₂₁ (Linha 2 de A × Coluna 1 de B):
          </h3>
          <p className="font-mono mt-1">
            <span className="text-red-500">[4, 0, 2]</span> ·{" "}
            <span className="text-blue-500">[1, 2, 3]</span> = (4×1) + (0×2) +
            (2×3) = 4 + 0 + 6 = <strong>10</strong>
          </p>

          <h3 className="text-lg font-semibold mt-3">
            Elemento C₂₂ (Linha 2 de A × Coluna 2 de B):
          </h3>
          <p className="font-mono mt-1">
            <span className="text-red-500">[4, 0, 2]</span> ·{" "}
            <span className="text-blue-500">[4, 1, 5]</span> = (4×4) + (0×1) +
            (2×5) = 16 + 0 + 10 = <strong>26</strong>
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6">
          Resultado Final (Matriz C):
        </h3>
        <MatrixDisplay
          matrix={[
            [13, 24],
            [10, 26],
          ]}
        />
      </div>

      {/* 4. Propriedades e Aplicações */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Propriedades e Aplicações
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Propriedades Essenciais
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Não é comutativa:</strong> Geralmente,{" "}
                <Latex>A · B ≠ B · A</Latex>. A ordem importa!
              </li>
              <li>
                <strong>Associativa:</strong>{" "}
                <Latex>(A · B) · C = A · (B · C)</Latex>.
              </li>
              <li>
                <strong>Distributiva:</strong>{" "}
                <Latex>A · (B + C) = A · B + A · C</Latex>.
              </li>
              <li>
                <strong>Elemento Neutro:</strong> <Latex>A · I = A</Latex>, onde
                I é a matriz identidade.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Aplicações Importantes
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Computação Gráfica:</strong> Para rotacionar, escalar e
                mover objetos em 3D.
              </li>
              <li>
                <strong>Redes Neurais:</strong> O cálculo principal em IA é uma
                série de multiplicações de matrizes.
              </li>
              <li>
                <strong>Física e Engenharia:</strong> Para resolver sistemas
                complexos e simulações.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. Tópicos Avançados */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Para Curiosos: Tópicos Avançados
        </h2>
        <p className="text-sm mb-4">
          A multiplicação de matrizes é um campo vasto. Aqui estão alguns
          conceitos para explorar depois:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <strong>Complexidade Computacional:</strong> O método padrão tem
            complexidade <Latex>O(n³)</Latex>. Algoritmos como o de Strassen são
            mais rápidos para matrizes gigantescas.
          </li>
          <li>
            <strong>Tipos de Matrizes:</strong> A multiplicação se comporta de
            maneira especial com matrizes ortogonais (rotações), triangulares e
            simétricas.
          </li>
          <li>
            <strong>Interpretação Geométrica:</strong> Multiplicar matrizes é o
            mesmo que compor transformações lineares (aplicar uma rotação e
            depois uma escala, por exemplo).
          </li>
          <li>
            <strong>Otimização:</strong> Bibliotecas como BLAS e cuBLAS (para
            GPUs) são ultra otimizadas para realizar essas operações em alta
            velocidade.
          </li>
        </ul>
      </div>

      {/* 6. Conclusão */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Conclusão</h2>
        <p>
          Apesar de parecer ter muitas regras, a multiplicação de matrizes se
          resume a um processo repetitivo: verificar dimensões e aplicar o
          método "linha por coluna". Dominar esta operação abre as portas para
          entender os pilares da computação gráfica, inteligência artificial e
          muito mais.
        </p>
        <p className="mt-4">
          Continue seus estudos com nosso tutorial sobre a{" "}
          <Link to="/tutorial/4" className="text-blue-600 hover:underline">
            Transposição de Matrizes
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default MatrixMultiplicationTutorial;
