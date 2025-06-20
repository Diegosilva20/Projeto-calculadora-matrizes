import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

function DeterminantTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Determinante de Matrizes: Teoria, Passo a Passo, Propriedades e Exemplos | Tutoriais de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content="Aprenda o que é o determinante de uma matriz, como calculá-lo em diferentes ordens, suas propriedades e aplicações práticas em álgebra linear. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          name="keywords"
          content="matrizes, álgebra linear, calculadora de matrizes, determinante, determinante de matrizes: teoria, passo a passo, propriedades e exemplos"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://projeto-calculadora-matrizes.vercel.app/tutorial/1"
        />
        <meta
          property="og:title"
          content="Determinante de Matrizes: Teoria, Passo a Passo, Propriedades e Exemplos | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          property="og:description"
          content="Aprenda o que é o determinante de uma matriz, como calculá-lo em diferentes ordens, suas propriedades e aplicações práticas em álgebra linear. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          property="og:url"
          content="https://projeto-calculadora-matrizes.vercel.app/tutorial/1"
        />
        <meta
          property="og:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Determinante de Matrizes: Teoria, Passo a Passo, Propriedades e Exemplos | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          name="twitter:description"
          content="Aprenda o que é o determinante de uma matriz, como calculá-lo em diferentes ordens, suas propriedades e aplicações práticas em álgebra linear. Acesse exemplos práticos e use nossa calculadora online para matrizes!"
        />
        <meta
          name="twitter:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Determinante de Matrizes: Teoria, Passo a Passo, Propriedades e Exemplos",
            description: "Aprenda o que é o determinante de uma matriz, como calculá-lo em diferentes ordens, suas propriedades e aplicações práticas em álgebra linear.",
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
          <li><span className="text-gray-500">Determinante de Matrizes</span></li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Determinante de Matrizes: Teoria, Passo a Passo, Propriedades e Exemplos
      </h1>
      <p className="mb-6 text-gray-700">
        O determinante de uma matriz é um número associado a uma matriz quadrada (ou seja, que tem o mesmo número de linhas e colunas). Ele
        é amplamente utilizado na álgebra linear, especialmente em sistemas lineares, geometria, cálculo e transformações lineares. O
        determinante indica, por exemplo, se uma matriz é invertível, ou a área/volume transformado por uma matriz.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <span className="mr-2">O que é uma matriz quadrada?</span>
        </h2>
        <p className="text-gray-700">
          Uma matriz quadrada é uma matriz que possui o mesmo número de linhas e colunas, ou seja, de ordem <code>n × n</code>
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <span className="mr-2">O que é o determinante?</span>
        </h2>
        <p className="text-gray-700 mb-2">
          O determinante é um número real (ou complexo) obtido a partir dos elementos de uma matriz quadrada.
 Ele é representado por:
        </p>
        <p className="text-gray-700">
          <code>det(A)</code> ou simplesmente <code>|A|</code>
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <span className="mr-2">Determinante de ordem 1</span>
        </h2>
        <p className="text-gray-700 mb-2">
          Para uma matriz <code>1×1</code>, o determinante é o próprio número:
        </p>
        <p className="text-gray-700">
          A = [<code>a</code>] ⇒ det(A) = <code>a</code>
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <span className="mr-2">Determinante de ordem 2</span>
        </h2>
        <p className="text-gray-700 mb-2">Para uma matriz:</p>
        <MatrixDisplay
          matrix={[
            [<code>a</code>, <code>b</code>],
            [<code>c</code>, <code>d</code>],
          ]}
        />
        <p className="text-gray-700 mt-2">
          O determinante é calculado assim:
        </p>
        <p className="text-gray-700">
          <code>det(A) = ad - bc</code>
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
          Exemplo 1: Determinante de ordem 2
        </h3>
        <p className="text-gray-700 mb-2">Matriz:</p>
        <MatrixDisplay
          matrix={[
            [4, 3],
            [2, 5],
          ]}
        />
        <p className="text-gray-700">
          Cálculo: <code>det(A) = (4 ⋅ 5) - (3 ⋅ 2) = 20 - 6 = 14</code>
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <span className="mr-2">Determinante de ordem 3 (Regra de Sarrus)</span>
        </h2>
        <p className="text-gray-700 mb-2">Seja a matriz:</p>
        <MatrixDisplay
          matrix={[
            [<code>a</code>, <code>b</code>, <code>c</code>],
            [<code>d</code>, <code>e</code>, <code>f</code>],
            [<code>g</code>, <code>h</code>, <code>i</code>],
          ]}
        />
        <p className="text-gray-700 mt-2">
          A regra de Sarrus consiste em repetir as duas primeiras colunas ao lado da matriz e somar os produtos das diagonais principais e
          subtrair os das diagonais secundárias:
        </p>
        <p className="text-gray-700">
          <code>det(A) = aei + bfg + cdh - ceg - bdi - afh</code>
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
          Exemplo 2: Determinante de ordem 3
        </h3>
        <p className="text-gray-700 mb-2">Matriz:</p>
        <MatrixDisplay
          matrix={[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
          ]}
        />
        <p className="text-gray-700 mb-2">
          Repetimos as duas primeiras colunas:
        </p>
        <MatrixDisplay
          matrix={[
            [1, 2, 3, 1, 2],
            [4, 5, 6, 4, 5],
            [7, 8, 9, 7, 8],
          ]}
        />
        <p className="text-gray-700 mt-2">
          Somas das diagonais principais:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>1 ⋅ 5 ⋅ 9 = 45</li>
          <li>2 ⋅ 6 ⋅ 7 = 84</li>
          <li>3 ⋅ 4 ⋅ 8 = 96</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Somas das diagonais secundárias:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>3 ⋅ 5 ⋅ 7 = 105</li>
          <li>2 ⋅ 4 ⋅ 9 = 72</li>
          <li>1 ⋅ 6 ⋅ 8 = 48</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Cálculo: <code>det(A) = (45 + 84 + 96) - (105 + 72 + 48) = 225 - 225 = 0</code>
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <span className="mr-2">Como calcular determinantes de ordem maior que 3</span>
        </h2>
        <p className="text-gray-700 mb-2">
          Para matrizes maiores que <code>3×3</code>, usamos o método da expansão por cofatores (ou Laplace). Ele consiste em escolher uma
          linha ou coluna, multiplicar cada elemento por seu cofator e somar os resultados.
        </p>
        <p className="text-gray-700">
          Cofator <code>C_ij</code>: <code>C_ij = (-1)^(i+j) ⋅ M_ij</code>
        </p>
        <p className="text-gray-700">
          Onde <code>M_ij</code> é o menor complementar, ou seja, o determinante da matriz que resulta da remoção da linha i e da coluna j.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <span className="mr-2">Propriedades importantes do determinante</span>
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Uma linha (ou coluna) nula: o determinante é 0.</li>
          <li>Troca de linhas ou colunas: troca o sinal do determinante.</li>
          <li>Linha ou coluna multiplicada por escalar: o determinante é multiplicado por esse escalar.</li>
          <li>Linhas ou colunas iguais ou proporcionais: determinante = 0.</li>
          <li>Determinante do produto: <code>det(A ⋅ B) = det(A) ⋅ det(B)</code></li>
          <li>Determinante da transposta: <code>det(A^T) = det(A)</code></li>
          <li>Determinante da inversa: <code>det(A^-1) = 1 / det(A)</code> (se <code>det(A) ≠ 0</code>)</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <span className="mr-2">Aplicações do determinante</span>
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Verificar se uma matriz é invertível (uma matriz só tem inversa se <code>det(A) ≠ 0</code>)</li>
          <li>Resolver sistemas lineares pelo método de Cramer</li>
          <li>Cálculo de área e volume em geometria analítica</li>
          <li>Mudança de base e transformações lineares</li>
          <li>Verificar independência linear de vetores</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <span className="mr-2">Conclusão</span>
        </h2>
        <p className="text-gray-700">
          O determinante de matrizes é uma ferramenta poderosa e versátil na matemática e nas ciências aplicadas. Ele fornece informações
          cruciais sobre a estrutura da matriz, como sua invertibilidade e suas propriedades geométricas. Embora seu cálculo se torne mais
          complexo à medida que a ordem da matriz aumenta, com o uso de métodos como a Regra de Sarrus e a expansão por cofatores, é
          possível resolver até mesmo determinantes grandes de forma sistemática.
        </p>
        <p className="mt-4 text-gray-700">
          Quer aprender mais? Confira nosso tutorial sobre{" "}
          <Link to="/tutorial/2" className="text-blue-600 hover:underline">
            Como Encontrar a Inversa de uma Matriz
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default DeterminantTutorial;