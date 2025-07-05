import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

function DeterminantTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>
          Determinante de Matrizes: Tutorial Completo com Exercícios Resolvidos
          | Matrizes+
        </title>
        <meta
          name="description"
          content="Domine determinantes com este guia completo: teoria, propriedades, métodos de cálculo passo a passo (Sarrus, Cofatores, Gauss, Laplace) e exercícios resolvidos de 2x2 a 4x4."
        />
        <meta
          name="keywords"
          content="determinante de matriz, exercícios resolvidos, regra de sarrus, expansão por cofatores, eliminação gaussiana, regra de cramer, álgebra linear, tutorial de matrizes, decomposição LU, transformação linear, matriz singular, autovalores, autovetores, teorema de Laplace, determinante de Vandermonde, análise numérica"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.matrizcalculator.com/tutorial/5"
        />
        <meta
          property="og:title"
          content="Determinante de Matrizes: Tutorial Completo com Exercícios Resolvidos | Matrizes+"
        />
        <meta
          property="og:description"
          content="Domine determinantes com este guia completo: teoria, propriedades, métodos de cálculo passo a passo (Sarrus, Cofatores, Gauss, Laplace) e exercícios resolvidos de 2x2 a 4x4."
        />
        <meta
          property="og:url"
          content="https://www.matrizcalculator.com/tutorial/5"
        />
        <meta
          property="og:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Determinante de Matrizes: Tutorial Completo com Exercícios Resolvidos | Matrizes+"
        />
        <meta
          name="twitter:description"
          content="Domine determinantes com este guia completo: teoria, propriedades, métodos de cálculo passo a passo (Sarrus, Cofatores, Gauss, Laplace) e exercícios resolvidos de 2x2 a 4x4."
        />
        <meta
          name="twitter:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Determinante de Matrizes: Tutorial Completo com Exercícios Resolvidos",
            description: "Domine determinantes com este guia completo: teoria, propriedades, métodos de cálculo passo a passo (Sarrus, Cofatores, Gauss, Laplace) e exercícios resolvidos de 2x2 a 4x4.",
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
            <span className="text-gray-500">Determinante de Matrizes</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Determinante de Matrizes: Tutorial Completo para Dominar Este Conceito
        Fundamental
      </h1>
      <p className="mb-6 text-gray-700">
        O determinante de uma matriz é um dos conceitos mais importantes da
        álgebra linear, sendo essencial para resolver sistemas de equações,
        calcular áreas e volumes, determinar se uma matriz é inversível e
        analisar transformações lineares. Neste tutorial completo, você
        aprenderá desde os conceitos básicos até as aplicações práticas mais
        avançadas.
      </p>

      {/* O que é e por que é importante */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          O Que É o Determinante de Uma Matriz?
        </h2>
        <p className="text-gray-700 mb-4">
          O determinante é um valor numérico único associado a cada matriz
          quadrada que nos fornece informações cruciais sobre suas propriedades
          matemáticas e geométricas. É denotado por <code>det(A)</code> ou{" "}
          <code>|A|</code>.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Por Que o Determinante É Importante?
        </h3>
        <h4 className="font-semibold text-gray-700 mt-2">
          Significado Algébrico:
        </h4>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Determina se uma matriz é inversível (<code>det ≠ 0</code>) ou
            singular (<code>det = 0</code>).
          </li>
          <li>
            É fundamental na resolução de sistemas lineares pela Regra de
            Cramer.
          </li>
          <li>Usado para calcular autovalores na equação característica.</li>
        </ul>
        <h4 className="font-semibold text-gray-700 mt-4">
          Significado Geométrico:
        </h4>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Para matrizes 2×2: representa a área do paralelogramo formado pelos
            vetores linha.
          </li>
          <li>
            Para matrizes 3×3: representa o volume do paralelepípedo formado
            pelos vetores linha.
          </li>
          <li>
            O sinal indica se a transformação preserva (+) ou inverte (-) a
            orientação.
          </li>
        </ul>
      </div>

      {/* Propriedades Fundamentais */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Propriedades Fundamentais do Determinante
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Transposição:</strong>{" "}
            <code>
              det(A<sup>T</sup>) = det(A)
            </code>
            .
          </li>
          <li>
            <strong>Multiplicação:</strong>{" "}
            <code>det(AB) = det(A) × det(B)</code>.
          </li>
          <li>
            <strong>Troca de Linhas:</strong> Trocar duas linhas (ou colunas)
            multiplica o determinante por -1.
          </li>
          <li>
            <strong>Combinação Linear:</strong> Somar um múltiplo de uma linha a
            outra não altera o determinante.
          </li>
          <li>
            <strong>Matriz Triangular:</strong> O determinante é o produto dos
            elementos da diagonal principal.
          </li>
          <li>
            <strong>Matriz com Linha/Coluna Nula:</strong> O determinante é 0.
          </li>
        </ul>
      </div>

      {/* Exercícios Práticos Resolvidos Passo a Passo */}
      <div className="p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Exercícios Práticos Resolvidos Passo a Passo
        </h2>

        {/* Exercício 1 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Exercício 1: Determinante 2×2 - Nível Básico
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Problema:</strong> Calcule o determinante da matriz abaixo.
          </p>
          <MatrixDisplay
            matrix={[
              [6, -3],
              [4, 2],
            ]}
          />
          <div className="mt-3">
            <p className="text-gray-700">
              <strong>Solução Passo a Passo:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 mt-1">
              <li>
                <strong>Identificar elementos:</strong>{" "}
                <code>a = 6, b = -3, c = 4, d = 2</code>.
              </li>
              <li>
                <strong>
                  Aplicar fórmula <code>ad - bc</code>:
                </strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Produto da diagonal principal:{" "}
                    <code>a × d = 6 × 2 = 12</code>.
                  </li>
                  <li>
                    Produto da diagonal secundária:{" "}
                    <code>b × c = (-3) × 4 = -12</code>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Calcular resultado:</strong>{" "}
                <code>det(A) = 12 - (-12) = 12 + 12 = 24</code>.
              </li>
            </ol>
            <p className="text-gray-700 mt-2">
              <strong>Interpretação:</strong> O determinante positivo indica que
              a matriz é inversível e a transformação preserva a orientação.
            </p>
          </div>
        </div>

        {/* Exercício 2 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Exercício 2: Determinante 3×3 - Método de Sarrus
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Problema:</strong> Calcule o determinante da matriz abaixo.
          </p>
          <MatrixDisplay
            matrix={[
              [1, 0, 2],
              [3, 1, 4],
              [2, 1, 0],
            ]}
          />
          <div className="mt-3">
            <p className="text-gray-700">
              <strong>Solução Passo a Passo:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 mt-1">
              <li>
                <strong>Calcular diagonais principais (soma positiva):</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <code>1 × 1 × 0 = 0</code>
                  </li>
                  <li>
                    <code>0 × 4 × 2 = 0</code>
                  </li>
                  <li>
                    <code>2 × 3 × 1 = 6</code>
                  </li>
                  <li>
                    Soma = <code>0 + 0 + 6 = 6</code>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Calcular diagonais secundárias (soma negativa):</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <code>2 × 1 × 2 = 4</code>
                  </li>
                  <li>
                    <code>1 × 4 × 1 = 4</code>
                  </li>
                  <li>
                    <code>0 × 3 × 0 = 0</code>
                  </li>
                  <li>
                    Soma = <code>4 + 4 + 0 = 8</code>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Calcular determinante final:</strong>{" "}
                <code>
                  det(A) = (Soma positiva) - (Soma negativa) = 6 - 8 = -2
                </code>
                .
              </li>
            </ol>
            <p className="text-gray-700 mt-2">
              <strong>Verificação pelo método de cofatores:</strong> Expandindo
              pela linha 1:{" "}
              <code>det(A) = 1×(-4) + 0×(8) + 2×(1) = -4 + 0 + 2 = -2</code> ✓
            </p>
          </div>
        </div>

        {/* Exercício 3 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Exercício 3: Determinante 3×3 - Método de Cofatores
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Problema:</strong> Calcule o determinante da matriz abaixo.
          </p>
          <MatrixDisplay
            matrix={[
              [2, 1, 0],
              [1, 3, 2],
              [0, 1, 1],
            ]}
          />
          <div className="mt-3">
            <p className="text-gray-700">
              <strong>Solução Passo a Passo:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 mt-1">
              <li>
                <strong>Escolher linha/coluna com mais zeros:</strong> A linha 1
                (ou coluna 3) é uma boa escolha. Vamos expandir pela linha 1.
              </li>
              <li>
                <strong>Identificar elementos não-nulos:</strong>{" "}
                <code>a₁₁ = 2</code> e <code>a₁₂ = 1</code>. O elemento{" "}
                <code>a₁₃ = 0</code> pode ser ignorado.
              </li>
              <li>
                <strong>Calcular cofatores necessários:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <strong>Cofator C₁₁:</strong> Sinal{" "}
                    <code>(-1)¹⁺¹ = +1</code>. Menor M₁₁ ={" "}
                    <code>det([[3, 2], [1, 1]]) = 3×1 - 2×1 = 1</code>. Logo,{" "}
                    <code>C₁₁ = +1 × 1 = 1</code>.
                  </li>
                  <li>
                    <strong>Cofator C₁₂:</strong> Sinal{" "}
                    <code>(-1)¹⁺² = -1</code>. Menor M₁₂ ={" "}
                    <code>det([[1, 2], [0, 1]]) = 1×1 - 2×0 = 1</code>. Logo,{" "}
                    <code>C₁₂ = -1 × 1 = -1</code>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Calcular determinante:</strong>{" "}
                <code>
                  det(A) = a₁₁×C₁₁ + a₁₂×C₁₂ = 2×(1) + 1×(-1) = 2 - 1 = 1
                </code>
                .
              </li>
            </ol>
          </div>
        </div>

        {/* Exercício 4 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Exercício 4: Determinante 4×4 - Eliminação Gaussiana
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Problema:</strong> Calcule o determinante da matriz abaixo.
          </p>
          <MatrixDisplay
            matrix={[
              [1, 2, 1, 0],
              [2, 1, 3, 1],
              [1, 0, 2, 1],
              [0, 1, 1, 2],
            ]}
          />
          <div className="mt-3">
            <p className="text-gray-700">
              <strong>Solução Passo a Passo:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 mt-1">
              <li>
                <strong>
                  Eliminar primeira coluna (abaixo do pivô <code>a₁₁=1</code>):
                </strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <code>L₂ ← L₂ - 2×L₁</code>: [2, 1, 3, 1] - 2×[1, 2, 1, 0] =
                    [0, -3, 1, 1]
                  </li>
                  <li>
                    <code>L₃ ← L₃ - 1×L₁</code>: [1, 0, 2, 1] - 1×[1, 2, 1, 0] =
                    [0, -2, 1, 1]
                  </li>
                </ul>
                <p>Matriz resultante:</p>
                <MatrixDisplay
                  matrix={[
                    [1, 2, 1, 0],
                    [0, -3, 1, 1],
                    [0, -2, 1, 1],
                    [0, 1, 1, 2],
                  ]}
                />
              </li>
              <li>
                <strong>
                  Eliminar segunda coluna (abaixo do pivô <code>a₂₂=-3</code>):
                </strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <code>L₃ ← L₃ - (2/3)×L₂</code>: [0, -2, 1, 1] - (2/3)×[0,
                    -3, 1, 1] = [0, 0, 1/3, 1/3]
                  </li>
                  <li>
                    <code>L₄ ← L₄ + (1/3)×L₂</code>: [0, 1, 1, 2] + (1/3)×[0,
                    -3, 1, 1] = [0, 0, 4/3, 7/3]
                  </li>
                </ul>
                <p>Matriz resultante:</p>
                <MatrixDisplay
                  matrix={[
                    [1, 2, 1, 0],
                    [0, -3, 1, 1],
                    [0, 0, "1/3", "1/3"],
                    [0, 0, "4/3", "7/3"],
                  ]}
                />
              </li>
              <li>
                <strong>
                  Eliminar terceira coluna (abaixo do pivô <code>a₃₃=1/3</code>
                  ):
                </strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <code>L₄ ← L₄ - 4×L₃</code>: [0, 0, 4/3, 7/3] - 4×[0, 0,
                    1/3, 1/3] = [0, 0, 0, 1]
                  </li>
                </ul>
                <p>Matriz triangular final:</p>
                <MatrixDisplay
                  matrix={[
                    [1, 2, 1, 0],
                    [0, -3, 1, 1],
                    [0, 0, "1/3", "1/3"],
                    [0, 0, 0, 1],
                  ]}
                />
              </li>
              <li>
                <strong>Calcular o determinante:</strong> O determinante de uma
                matriz triangular é o produto de sua diagonal. Não houve trocas
                de linha.
                <p className="font-bold mt-1">
                  <code>det(A) = 1 × (-3) × (1/3) × 1 = -1</code>
                </p>
              </li>
            </ol>
          </div>
        </div>

        {/* Exercício 5 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Exercício 5: Determinante de Vandermonde - Nível Avançado
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Problema:</strong> Calcule o determinante da matriz de
            Vandermonde abaixo, onde os valores são <code>x₁ = 1</code>,{" "}
            <code>x₂ = 2</code>, <code>x₃ = 3</code>.
          </p>
          <MatrixDisplay
            matrix={[
              [1, 1, 1],
              [1, 2, 4],
              [1, 3, 9],
            ]}
          />
          <div className="mt-3">
            <p className="text-gray-700">
              <strong>Solução Passo a Passo:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 mt-1">
              <li>
                <strong>Fórmula do determinante de Vandermonde:</strong> Para
                uma matriz de Vandermonde <code>[1, xᵢ, xᵢ²]</code> com{" "}
                <code>n</code> linhas, o determinante é dado por{" "}
                <code>∏(xⱼ - xᵢ)</code> para <code>j {">"} i</code>.
              </li>
              <li>
                <strong>Calcular diferenças:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <code>x₂ - x₁ = 2 - 1 = 1</code>
                  </li>
                  <li>
                    <code>x₃ - x₁ = 3 - 1 = 2</code>
                  </li>
                  <li>
                    <code>x₃ - x₂ = 3 - 2 = 1</code>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Produto das diferenças:</strong>{" "}
                <code>det(A) = 1 × 2 × 1 = 2</code>.
              </li>
            </ol>
            {/* CORREÇÃO APLICADA AQUI */}
            <p className="text-gray-700 mt-2">
              <strong>Verificação por Sarrus:</strong>{" "}
              <code>
                (1·2·9 + 1·4·1 + 1·1·3) - (1·2·1 + 4·3·1 + 9·1·1) = (18 + 4 + 3)
                - (2 + 12 + 9) = 25 - 23 = 2
              </code>{" "}
              ✓
            </p>
          </div>
        </div>

        {/* Exercício 6 */}
        {/* CORREÇÃO APLICADA AQUI: Adicionado className="mb-8" para consistência de estilo */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Exercício 6: Aplicação em Transformação Linear
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Problema:</strong> Determine o fator de escala da
            transformação linear definida pela matriz abaixo, que representa uma
            rotação seguida de escala.
          </p>
          <MatrixDisplay
            matrix={[
              [0, -1],
              [1, 0],
            ]}
          />
          <div className="mt-3">
            <p className="text-gray-700">
              <strong>Solução Passo a Passo:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 mt-1">
              <li>
                <strong>Calcular o determinante:</strong>{" "}
                <code>det(A) = 0×0 - (-1)×1 = 0 + 1 = 1</code>.
              </li>
              <li>
                <strong>Interpretação geométrica:</strong> O valor absoluto do
                determinante (<code>|det(A)| = 1</code>) representa o fator de
                escala da transformação. Aqui, indica que a área é preservada,
                típica de uma rotação de 90°.
              </li>
            </ol>
            <p className="text-gray-700 mt-2">
              <strong>Nota:</strong> O sinal positivo confirma que a orientação
              é preservada nesta rotação específica.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusão */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Conclusão e Próximos Passos
        </h2>
        <p className="text-gray-700">
          O determinante é uma ferramenta poderosa que conecta conceitos
          algébricos abstratos com interpretações geométricas concretas. Sua
          compreensão é fundamental para análise de sistemas de equações
          lineares, cálculos geométricos de áreas e volumes, e aplicações em
          transformações lineares, autovalores e análise numérica. Para dominar
          completamente este conceito, pratique regularmente com matrizes de
          diferentes ordens e características.
        </p>
        <p className="mt-4 text-gray-700">
          O próximo passo natural é explorar como os determinantes são usados
          para encontrar a inversa de uma matriz ou calcular autovalores.
          Continue seus estudos com nosso tutorial sobre{" "}
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