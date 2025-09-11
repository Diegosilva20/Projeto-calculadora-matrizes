import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

// Adicionando um componente para formatação de LaTeX para clareza
// Se você já usa uma biblioteca como KaTeX, substitua este componente.
const Latex = ({ children }) => <span className="font-serif italic">{children}</span>;

function DeterminantTutorialRefactored() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <Helmet>
        {/* As tags de SEO estão excelentes, nenhuma alteração necessária. */}
        <title>
          Determinante de Matrizes: Tutorial Completo com Exemplos | Matrizes+
        </title>
        <meta
          name="description"
          content="Aprenda a calcular determinantes de matrizes 2x2, 3x3 e 4x4 com métodos passo a passo como Sarrus, Cofatores e Eliminação Gaussiana. Tutorial com exemplos práticos."
        />
        <meta
          name="keywords"
          content="determinante de matriz, regra de sarrus, método dos cofatores, eliminação gaussiana, álgebra linear, tutorial de matrizes, matriz 2x2, matriz 3x3, matriz 4x4"
        />
        {/* ... restante das suas ótimas meta tags ... */}
      </Helmet>

      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link to="/tutorials" className="text-blue-600 hover:underline">Tutoriais</Link></li>
          <li className="mx-2">/</li>
          <li className="text-gray-500">Determinante de Matrizes</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Determinante de Matrizes: O Guia Definitivo
      </h1>
      
      {/* 1. O que é e por que é importante (Seção Resumida) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">O que é e Para que Serve um Determinante?</h2>
        <p className="mb-4">
          O determinante é um <strong>número único</strong> extraído de uma <strong>matriz quadrada</strong>. Ele revela informações cruciais sobre a matriz, tanto em termos algébricos quanto geométricos. É representado por <Latex>det(A)</Latex> ou <Latex>|A|</Latex>.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-lg">Importância Algébrica:</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><strong>Inversibilidade:</strong> Se <Latex>det(A) ≠ 0</Latex>, a matriz tem inversa. Se <Latex>det(A) = 0</Latex>, ela é "singular" e não pode ser invertida.</li>
              <li><strong>Sistemas Lineares:</strong> Usado na Regra de Cramer para resolver sistemas de equações.</li>
              <li><strong>Autovalores:</strong> Essencial para encontrar os autovalores de uma matriz.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Importância Geométrica:</h3>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><strong>Área e Volume:</strong> O valor absoluto do determinante representa o fator de escala que uma transformação linear aplica a uma área (em 2D) ou volume (em 3D).</li>
              <li><strong>Orientação:</strong> O sinal indica se a transformação inverte (<Latex>det {"<"} 0</Latex>) ou preserva (<Latex>det {">"} 0</Latex>) a orientação do espaço.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Como Calcular Determinantes (Seção Principal com Métodos) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Como Calcular Determinantes: Métodos e Exemplos</h2>

        {/* Método 1: Matriz 2x2 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 1: Matriz 2x2 (O Básico)</h3>
          <p className="mb-2">Para uma matriz 2x2, a fórmula é a diferença entre o produto da diagonal principal e o da diagonal secundária.</p>
          <MatrixDisplay matrix={[[6, -3], [4, 2]]} />
          <p className="mt-3"><strong>Solução:</strong></p>
          <p><Latex>det(A) = (a·d) - (b·c)</Latex></p>
          <p><Latex>det(A) = (6 × 2) - (-3 × 4) = 12 - (-12) = 24</Latex></p>
        </div>

        {/* Método 2: Matriz 3x3 (Regra de Sarrus) */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 2: Matriz 3x3 (Regra de Sarrus)</h3>
          <p className="mb-2">A Regra de Sarrus é um método rápido para matrizes 3x3. Some os produtos das diagonais principais e subtraia a soma dos produtos das diagonais secundárias.</p>
          <MatrixDisplay matrix={[[1, 0, 2], [3, 1, 4], [2, 1, 0]]} />
          <p className="mt-3"><strong>Solução:</strong></p>
          <p>Soma das diagonais principais: <Latex>(1·1·0) + (0·4·2) + (2·3·1) = 0 + 0 + 6 = 6</Latex></p>
          <p>Soma das diagonais secundárias: <Latex>(2·1·2) + (1·4·1) + (0·3·0) = 4 + 4 + 0 = 8</Latex></p>
          <p><strong>Resultado:</strong> <Latex>det(A) = 6 - 8 = -2</Latex></p>
        </div>
        
        {/* Método 3: Teorema de Laplace (Expansão por Cofatores) */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 3: Teorema de Laplace (Expansão por Cofatores)</h3>
          <p className="mb-2">Ideal para matrizes com muitos zeros. O determinante é a soma dos elementos de uma fila (linha ou coluna) multiplicados por seus respectivos cofatores.</p>
          <p className="text-sm text-gray-600 mb-2">Lembre-se da "matriz de sinais" para o cofator: <Latex>Cᵢⱼ = (-1)ⁱ⁺ʲ · Mᵢⱼ</Latex></p>
          <MatrixDisplay matrix={[[2, 1, 0], [1, 3, 2], [0, 1, 1]]} />
          <p className="mt-3"><strong>Solução (expandindo pela linha 1):</strong></p>
          <p><Latex>det(A) = 2·C₁₁ + 1·C₁₂ + 0·C₁₃</Latex></p>
          <ul className="list-disc pl-5 mt-1">
            <li>Cofator <Latex>C₁₁</Latex>: <Latex>(+1) × det([[3, 2], [1, 1]]) = 1 × (3 - 2) = 1</Latex></li>
            <li>Cofator <Latex>C₁₂</Latex>: <Latex>(-1) × det([[1, 2], [0, 1]]) = -1 × (1 - 0) = -1</Latex></li>
          </ul>
          <p className="mt-2"><strong>Resultado:</strong> <Latex>det(A) = 2·(1) + 1·(-1) = 2 - 1 = 1</Latex></p>
        </div>

        {/* Método 4: Eliminação Gaussiana */}
        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 4: Eliminação Gaussiana (Para Matrizes Maiores)</h3>
          <p className="mb-2">Transforme a matriz em uma matriz triangular superior. O determinante será o produto dos elementos da diagonal principal. <strong>É o método mais eficiente para matrizes grandes.</strong></p>
          <MatrixDisplay matrix={[[1, 2, 1, 0], [2, 1, 3, 1], [1, 0, 2, 1], [0, 1, 1, 2]]} />
          <p className="mt-3"><strong>Solução:</strong></p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Objetivo:</strong> Zerar os elementos abaixo do primeiro pivô (<Latex>a₁₁=1</Latex>).
              <ul className="list-disc list-inside ml-4 text-sm">
                <li><Latex>L₂ ← L₂ - 2·L₁</Latex></li>
                <li><Latex>L₃ ← L₃ - 1·L₁</Latex></li>
              </ul>
            </li>
            <li><strong>Resultado Parcial:</strong> A matriz se torna triangular superior.</li>
            <MatrixDisplay matrix={[[1, 2, 1, 0], [0, -3, 1, 1], [0, 0, "1/3", "1/3"], [0, 0, 0, 1]]} />
            <li><strong>Cálculo Final:</strong> Multiplique a diagonal principal.
              <p><strong>Resultado:</strong> <Latex>det(A) = 1 × (-3) × (1/3) × 1 = -1</Latex></p>
            </li>
          </ol>
        </div>
      </div>
      
      {/* 3. Propriedades Fundamentais */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Propriedades Fundamentais</h2>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Matriz Transposta:</strong> O determinante não se altera. <Latex>det(Aᵀ) = det(A)</Latex>.</li>
            <li><strong>Produto de Matrizes:</strong> O determinante do produto é o produto dos determinantes. <Latex>det(A·B) = det(A)·det(B)</Latex>.</li>
            <li><strong>Troca de Filas:</strong> Trocar duas linhas ou colunas inverte o sinal do determinante.</li>
            <li><strong>Matriz Triangular:</strong> O determinante é simplesmente o produto dos elementos da diagonal principal.</li>
            <li><strong>Fila Nula:</strong> Se uma matriz possui uma linha ou coluna inteira de zeros, seu determinante é 0.</li>
        </ul>
      </div>

      {/* 4. Conclusão */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Conclusão e Próximos Passos</h2>
        <p>Dominar o cálculo de determinantes é um passo essencial na Álgebra Linear. Com ele, você pode analisar a inversibilidade de matrizes, resolver sistemas e entender transformações geométricas.</p>
        <p className="mt-4">
          Pratique com nossa calculadora e avance seus estudos aprendendo sobre a{" "}
          <Link to="/tutorial/2" className="text-blue-600 hover:underline">
            inversa de uma matriz
          </Link>.
        </p>
      </div>
    </div>
  );
}

export default DeterminantTutorialRefactored;