import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

function InverseTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Inversa de uma Matriz: Conceito, Teoria, Passo a Passo e Exemplos | Tutoriais de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content="Aprenda o conceito de inversa de uma matriz, os métodos para calculá-la e suas aplicações em álgebra linear. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          name="keywords"
          content="matrizes, álgebra linear, calculadora de matrizes, inversa, inversa de uma matriz: conceito, teoria, passo a passo e exemplos"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://projeto-calculadora-matrizes.vercel.app/tutorial/2"
        />
        <meta
          property="og:title"
          content="Inversa de uma Matriz: Conceito, Teoria, Passo a Passo e Exemplos | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          property="og:description"
          content="Aprenda o conceito de inversa de uma matriz, os métodos para calculá-la e suas aplicações em álgebra linear. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          property="og:url"
          content="https://projeto-calculadora-matrizes.vercel.app/tutorial/2"
        />
        <meta
          property="og:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Inversa de uma Matriz: Conceito, Teoria, Passo a Passo e Exemplos | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          name="twitter:description"
          content="Aprenda o conceito de inversa de uma matriz, os métodos para calculá-la e suas aplicações em álgebra linear. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          name="twitter:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Inversa de uma Matriz: Conceito, Teoria, Passo a Passo e Exemplos",
            description: "Aprenda o conceito de inversa de uma matriz, os métodos para calculá-la e suas aplicações em álgebra linear.",
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
          <li><span className="text-gray-500">Inversa de uma Matriz</span></li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Inversa de uma Matriz: Conceito, Teoria, Passo a Passo e Exemplos
      </h1>
      <p className="mb-6 text-gray-700">
        A inversa de uma matriz é um conceito fundamental na Álgebra Linear, muito utilizado na resolução de sistemas lineares, na computação
        gráfica, no processamento de sinais, na estatística e na engenharia. Assim como o inverso de um número a é 1/a, o inverso de uma matriz
        A, quando existe, é uma matriz A⁻¹ tal que:
      </p>
      <p className="text-gray-700 mb-6">A · A⁻¹ = A⁻¹ · A = I</p>
      <p className="text-gray-700 mb-6">
        Onde I é a matriz identidade, análoga ao número 1 na multiplicação.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Condições para uma matriz ter inversa
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Ela deve ser quadrada (mesmo número de linhas e colunas).</li>
          <li>Seu determinante deve ser diferente de zero: det(A) ≠ 0</li>
          <li>
            Se o determinante for zero, dizemos que a matriz é singular e não possui inversa.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Como encontrar a inversa de uma matriz?
        </h2>
        <p className="text-gray-700 mb-2">
          Existem vários métodos. Vamos abordar os principais:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4">
          <li>
            <strong>1. Matriz 2×2</strong>
            <p className="text-gray-700 mb-2">Seja:</p>
            <MatrixDisplay
              matrix={[
                [<code>a</code>, <code>b</code>],
                [<code>c</code>, <code>d</code>],
              ]}
            />
            <p className="text-gray-700 mt-2">A inversa é dada por:</p>
            <p className="text-gray-700">
              A⁻¹ = (1 / (ad - bc)) · 
              <MatrixDisplay
                matrix={[
                  [<code>d</code>, <code>-b</code>],
                  [<code>-c</code>, <code>a</code>],
                ]}
              />
            </p>
            <p className="text-gray-700 mt-2">
              Onde (ad - bc) é o determinante da matriz. Se ele for zero, a inversa não existe.
            </p>
          </li>
          <li>
            <strong>2. Matriz 3×3 ou maior: método da matriz adjunta</strong>
            <ol className="list-decimal pl-5 text-gray-700 mt-2">
              <li>
                Calcule o determinante det(A). Se for igual a zero, a matriz não tem inversa.
              </li>
              <li>
                Calcule a matriz dos cofatores de A. Para cada elemento a_ij, calcule o cofator C_ij = (-1)^(i+j) · M_ij, onde M_ij
                é o menor complementar (determinante da matriz que sobra ao remover a linha i e a coluna j).
              </li>
              <li>Calcule a matriz adjunta: adj(A) = Cof(A)ᵀ</li>
              <li>Use a fórmula da inversa: A⁻¹ = (1 / det(A)) · adj(A)</li>
            </ol>
          </li>
          <li>
            <strong>3. Método de Gauss-Jordan (prático para qualquer ordem)</strong>
            <p className="text-gray-700 mb-2">
              Monte uma matriz aumentada [A | I], onde I é a matriz identidade de mesma ordem de A, e aplique operações elementares até
              transformar A na identidade. Ao final, a parte que era I se transforma em A⁻¹.
            </p>
          </li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Exemplo 1: Inversa de uma matriz 2×2
        </h2>
        <p className="text-gray-700 mb-2">Seja:</p>
        <p className="text-gray-700 mb-2">Matriz A:</p>
        <MatrixDisplay
          matrix={[
            [2, 5],
            [1, 3],
          ]}
        />
        <p className="text-gray-700 mb-2">
          Determinante: det(A) = 2 · 3 - 5 · 1 = 6 - 5 = 1
        </p>
        <p className="text-gray-700 mb-2">
          A⁻¹ = (1 / det(A)) · 
          <MatrixDisplay
            matrix={[
              [3, -5],
              [-1, 2],
            ]}
          />
        </p>
        <p className="text-gray-700 mb-2">Substituindo det(A) = 1:</p>
        <p className="text-gray-700">
          A⁻¹ = (1 / 1) · 
          <MatrixDisplay
            matrix={[
              [3, -5],
              [-1, 2],
            ]}
          />
          =
          <MatrixDisplay
            matrix={[
              [3, -5],
              [-1, 2],
            ]}
          />
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Exemplo 2: Inversa de matriz 3×3 (resumo por adjunta)
        </h2>
        <p className="text-gray-700 mb-2">Seja:</p>
        <p className="text-gray-700 mb-2">Matriz A:</p>
        <MatrixDisplay
          matrix={[
            [1, 0, 2],
            [-1, 3, 1],
            [2, -2, 1],
          ]}
        />
        <p className="text-gray-700 mb-2">
          Calcule det(A) = 1·(3·1 - 1·(-2)) - 0 + 2·(-1·1 - 3·2) = 1·(3 + 2) + 2·(-1 - 6) = 5 - 14 = -9
        </p>
        <p className="text-gray-700 mb-2">
          Calcule os cofatores de cada elemento (não mostrado aqui por espaço).
        </p>
        <p className="textanet-gray-700 mb-2">
          Monte a matriz adjunta (transposta dos cofatores).
        </p>
        <p className="text-gray-700 mb-2">
          Aplique: A⁻¹ = (1 / -9) · adj(A)
        </p>
        <p className="text-gray-700">
          O cálculo é mais longo, mas totalmente mecânico.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Propriedades da inversa de matrizes
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>(A⁻¹)⁻¹ = A</li>
          <li>(AB)⁻¹ = B⁻¹ · A⁻¹ (inverte a ordem!)</li>
          <li>(Aᵀ)⁻¹ = (A⁻¹)ᵀ</li>
          <li>Se det(A) ≠ 0, então A é invertível</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Aplicações da matriz inversa
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Resolução de sistemas lineares: AX = B ⇒ X = A⁻¹·B</li>
          <li>Criptografia (criptografar/decodificar mensagens com multiplicação de matrizes)</li>
          <li>Transformações geométricas reversas</li>
          <li>Normalização de dados em IA e redes neurais</li>
          <li>Modelagem de equações diferenciais</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 mb-4">
          Conclusão
        </h2>
        <p className="text-gray-700">
          A inversa de uma matriz é uma das ferramentas mais poderosas da Álgebra Linear, permitindo resolver sistemas, inverter transformações
          e operar com precisão em diversas áreas científicas. Embora o cálculo possa parecer complexo em matrizes maiores, os métodos
          apresentados — como a adjunta ou Gauss-Jordan — são sistemáticos e eficientes. Com prática, a obtenção da inversa se torna simples e
 e natural.
        </p>
        <p className="mt-4 text-gray-700">
          Continue aprendendo com nosso tutorial sobre {" "}
          <Link to="/tutorial/3" className="text-blue-600 hover:underline">
            Método de Gauss-Jordan
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default InverseTutorial;