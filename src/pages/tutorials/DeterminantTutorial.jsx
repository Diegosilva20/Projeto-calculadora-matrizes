import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

function DeterminantTutorial() {
  const pageTitle = "Determinante de Matrizes: O Guia Definitivo";
  const pageDescription = "Aprenda a calcular determinantes de matrizes 2x2, 3x3 e 4x4 com métodos passo a passo como Sarrus, Cofatores e Eliminação Gaussiana.";

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <Helmet>
        <title>{`${pageTitle} | Matrizes+`}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="determinante de matriz, regra de sarrus, método dos cofatores, eliminação gaussiana, álgebra linear, tutorial de matrizes, matriz 2x2, matriz 3x3, matriz 4x4" />
        <link rel="canonical" href="https://www.matrizcalculator.com/tutorial/determinante-de-matrizes" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://www.matrizcalculator.com/tutorial/determinante-de-matrizes" />
        <meta property="og:image" content="https://www.matrizcalculator.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.matrizcalculator.com/og-image.jpg" />
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        {pageTitle}
      </h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">O que é e Para que Serve um Determinante?</h2>
        <p className="mb-4">
          O determinante é um <strong>número único</strong> extraído de uma <strong>matriz quadrada</strong>. Ele revela informações cruciais sobre a matriz, tanto em termos algébricos quanto geométricos. É representado por <InlineMath math="\det(A)" /> ou <InlineMath math="|A|" />.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-lg">Importância Algébrica:</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><strong>Inversibilidade:</strong> Se <InlineMath math="\det(A) \neq 0" />, a matriz tem inversa. Se <InlineMath math="\det(A) = 0" />, ela é "singular" e não pode ser invertida.</li>
              <li><strong>Sistemas Lineares:</strong> Usado na Regra de Cramer para resolver sistemas de equações.</li>
              <li><strong>Autovalores:</strong> Essencial para encontrar os autovalores de uma matriz.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Importância Geométrica:</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><strong>Área e Volume:</strong> O valor absoluto do determinante representa o fator de escala que uma transformação linear aplica a uma área (em 2D) ou volume (em 3D).</li>
              <li><strong>Orientação:</strong> O sinal indica se a transformação inverte (<InlineMath math="\det < 0" />) ou preserva (<InlineMath math="\det > 0" />) a orientação do espaço.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Como Calcular Determinantes: Métodos e Exemplos</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 1: Matriz 2x2 (O Básico)</h3>
          <p className="mb-2">Para uma matriz 2x2, a fórmula é a diferença entre o produto da diagonal principal e o da diagonal secundária.</p>
          <MatrixDisplay matrix={[[6, -3], [4, 2]]} />
          <p className="mt-3"><strong>Solução:</strong></p>
          <p><InlineMath math="\det(A) = (a \cdot d) - (b \cdot c)" /></p>
          <p><InlineMath math="\det(A) = (6 \times 2) - (-3 \times 4) = 12 - (-12) = 24" /></p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 2: Matriz 3x3 (Regra de Sarrus)</h3>
          <p className="mb-2">A Regra de Sarrus é um método rápido para matrizes 3x3. Some os produtos das diagonais principais e subtraia a soma dos produtos das diagonais secundárias.</p>
          <MatrixDisplay matrix={[[1, 0, 2], [3, 1, 4], [2, 1, 0]]} />
          <p className="mt-3"><strong>Solução:</strong></p>
          <p>Soma das diagonais principais: <InlineMath math="(1 \cdot 1 \cdot 0) + (0 \cdot 4 \cdot 2) + (2 \cdot 3 \cdot 1) = 0 + 0 + 6 = 6" /></p>
          <p>Soma das diagonais secundárias: <InlineMath math="(2 \cdot 1 \cdot 2) + (1 \cdot 4 \cdot 1) + (0 \cdot 3 \cdot 0) = 4 + 4 + 0 = 8" /></p>
          <p><strong>Resultado:</strong> <InlineMath math="\det(A) = 6 - 8 = -2" /></p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 3: Teorema de Laplace (Expansão por Cofatores)</h3>
          <p className="mb-2">Ideal para matrizes com muitos zeros. O determinante é a soma dos elementos de uma fila (linha ou coluna) multiplicados por seus respetivos cofatores.</p>
          <p className="text-sm text-gray-600 mb-2">Lembre-se da "matriz de sinais" para o cofator: <InlineMath math="C_{ij} = (-1)^{i+j} \cdot M_{ij}" /></p>
          <MatrixDisplay matrix={[[2, 1, 0], [1, 3, 2], [0, 1, 1]]} />
          <p className="mt-3"><strong>Solução (expandindo pela linha 1):</strong></p>
          <p><InlineMath math="\det(A) = 2 \cdot C_{11} + 1 \cdot C_{12} + 0 \cdot C_{13}" /></p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Cofator <InlineMath math="C_{11}" />: <InlineMath math="(+1) \times \det\begin{pmatrix} 3 & 2 \\ 1 & 1 \end{pmatrix} = 1 \times (3 - 2) = 1" /></li>
            <li>Cofator <InlineMath math="C_{12}" />: <InlineMath math="(-1) \times \det\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = -1 \times (1 - 0) = -1" /></li>
          </ul>
          <p className="mt-2"><strong>Resultado:</strong> <InlineMath math="\det(A) = 2 \cdot (1) + 1 \cdot (-1) = 2 - 1 = 1" /></p>
        </div>

        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 4: Eliminação Gaussiana (Para Matrizes Maiores)</h3>
          <p className="mb-2">Transforme a matriz numa matriz triangular superior. O determinante será o produto dos elementos da diagonal principal. <strong>É o método mais eficiente para matrizes grandes.</strong></p>
          <MatrixDisplay matrix={[[1, 2, 1, 0], [2, 1, 3, 1], [1, 0, 2, 1], [0, 1, 1, 2]]} />
          <p className="mt-3"><strong>Solução:</strong></p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Objetivo:</strong> Zerar os elementos abaixo do primeiro pivô (<InlineMath math="a_{11}=1" />).
              <ul className="list-disc list-inside ml-4 text-sm mt-1">
                <li><InlineMath math="L_2 \leftarrow L_2 - 2 \cdot L_1" /></li>
                <li><InlineMath math="L_3 \leftarrow L_3 - 1 \cdot L_1" /></li>
              </ul>
            </li>
            <li><strong>Resultado Parcial:</strong> A matriz torna-se triangular superior.</li>
            <MatrixDisplay matrix={[[1, 2, 1, 0], [0, -3, 1, 1], [0, 0, "1/3", "1/3"], [0, 0, 0, 1]]} />
            <li><strong>Cálculo Final:</strong> Multiplique a diagonal principal.
              <p className="mt-1"><strong>Resultado:</strong> <InlineMath math="\det(A) = 1 \times (-3) \times \frac{1}{3} \times 1 = -1" /></p>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Propriedades Fundamentais</h2>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Matriz Transposta:</strong> O determinante não se altera. <InlineMath math="\det(A^T) = \det(A)" />.</li>
            <li><strong>Produto de Matrizes:</strong> O determinante do produto é o produto dos determinantes. <InlineMath math="\det(A \cdot B) = \det(A) \cdot \det(B)" />.</li>
            <li><strong>Troca de Filas:</strong> Trocar duas linhas ou colunas inverte o sinal do determinante.</li>
            <li><strong>Matriz Triangular:</strong> O determinante é simplesmente o produto dos elementos da diagonal principal.</li>
            <li><strong>Fila Nula:</strong> Se uma matriz possui uma linha ou coluna inteira de zeros, o seu determinante é 0.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Conclusão e Próximos Passos</h2>
        <p>Dominar o cálculo de determinantes é um passo essencial na Álgebra Linear. Com ele, pode analisar a inversibilidade de matrizes, resolver sistemas e entender transformações geométricas.</p>
        <p className="mt-4">
          Pratique com a nossa calculadora e avance os seus estudos aprendendo sobre a{" "}
          <Link to="/tutorial/matriz-inversa" className="text-blue-600 hover:underline">
            inversa de uma matriz
          </Link>.
        </p>
      </div>
    </div>
  );
}

export default DeterminantTutorial;