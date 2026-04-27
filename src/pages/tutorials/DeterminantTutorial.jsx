import { Link } from "react-router-dom";
import MatrixDisplay from "../../components/common/MatrixDisplay";

// Micro-componente profissional para estilizar matemática (substitui o KaTeX pesado)
const Formula = ({ children }) => (
  <span className="font-serif italic font-medium text-blue-900 bg-blue-50/50 px-1.5 py-0.5 rounded">
    {children}
  </span>
);

function DeterminantTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3 text-slate-800">O que é e Para que Serve um Determinante?</h2>
        <p className="mb-4 leading-relaxed">
          O determinante é um <strong>número único</strong> extraído de uma <strong>matriz quadrada</strong>. Ele revela informações cruciais sobre a matriz, tanto em termos algébricos quanto geométricos. É representado por <Formula>det(A)</Formula> ou <Formula>|A|</Formula>.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
            <h3 className="font-semibold text-lg text-slate-800 mb-2">Importância Algébrica:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li><strong>Inversibilidade:</strong> Se <Formula>det(A) ≠ 0</Formula>, a matriz tem inversa. Se <Formula>det(A) = 0</Formula>, ela é "singular" e não pode ser invertida.</li>
              <li><strong>Sistemas Lineares:</strong> Usado na Regra de Cramer para resolver sistemas de equações.</li>
              <li><strong>Autovalores:</strong> Essencial para encontrar os autovalores de uma matriz.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
            <h3 className="font-semibold text-lg text-slate-800 mb-2">Importância Geométrica:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li><strong>Área e Volume:</strong> O valor absoluto do determinante representa o fator de escala que uma transformação aplica a uma área ou volume.</li>
              <li><strong>Orientação:</strong> O sinal indica se a transformação inverte (<Formula>det &lt; 0</Formula>) ou preserva (<Formula>det &gt; 0</Formula>) a orientação do espaço.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">Como Calcular Determinantes: Métodos e Exemplos</h2>

        {/* Método 1 */}
        <div className="mb-10">
          <h3 className="text-xl font-bold border-b pb-2 mb-4 text-slate-700">Método 1: Matriz 2x2 (O Básico)</h3>
          <p className="mb-4 text-slate-600">Para uma matriz 2x2, a fórmula é a diferença entre o produto da diagonal principal e o da diagonal secundária.</p>
          <div className="inline-block p-4 bg-slate-50 rounded-lg border border-slate-200 mb-4">
            <MatrixDisplay matrix={[[6, -3], [4, 2]]} />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Solução:</p>
            <p><Formula>det(A) = (a · d) - (b · c)</Formula></p>
            <p><Formula>det(A) = (6 × 2) - (-3 × 4) = 12 - (-12) = 24</Formula></p>
          </div>
        </div>

        {/* Método 2 */}
        <div className="mb-10">
          <h3 className="text-xl font-bold border-b pb-2 mb-4 text-slate-700">Método 2: Matriz 3x3 (Regra de Sarrus)</h3>
          <p className="mb-4 text-slate-600">A Regra de Sarrus é um método rápido para matrizes 3x3. Some os produtos das diagonais principais e subtraia a soma dos produtos das diagonais secundárias.</p>
          <div className="inline-block p-4 bg-slate-50 rounded-lg border border-slate-200 mb-4">
            <MatrixDisplay matrix={[[1, 0, 2], [3, 1, 4], [2, 1, 0]]} />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Solução:</p>
            <p>Diagonais principais: <Formula>(1 × 1 × 0) + (0 × 4 × 2) + (2 × 3 × 1) = 0 + 0 + 6 = 6</Formula></p>
            <p>Diagonais secundárias: <Formula>(2 × 1 × 2) + (1 × 4 × 1) + (0 × 3 × 0) = 4 + 4 + 0 = 8</Formula></p>
            <p className="mt-2 text-lg"><strong>Resultado:</strong> <Formula>det(A) = 6 - 8 = -2</Formula></p>
          </div>
        </div>
        
        {/* Método 3 */}
        <div className="mb-10">
          <h3 className="text-xl font-bold border-b pb-2 mb-4 text-slate-700">Método 3: Teorema de Laplace (Expansão por Cofatores)</h3>
          <p className="mb-2 text-slate-600">Ideal para matrizes com muitos zeros. O determinante é a soma dos elementos de uma fila multiplicados por seus respetivos cofatores.</p>
          <p className="text-sm text-blue-600 bg-blue-50 p-2 rounded inline-block mb-4">Lembre-se da "matriz de sinais" para o cofator: <Formula>C_ij = (-1)^(i+j) · M_ij</Formula></p>
          <br/>
          <div className="inline-block p-4 bg-slate-50 rounded-lg border border-slate-200 mb-4">
            <MatrixDisplay matrix={[[2, 1, 0], [1, 3, 2], [0, 1, 1]]} />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Solução (expandindo pela linha 1):</p>
            <p><Formula>det(A) = 2 · C₁₁ + 1 · C₁₂ + 0 · C₁₃</Formula></p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-700">
              <li>Cofator <Formula>C₁₁</Formula>: <Formula>(+1) × det([3, 2], [1, 1]) = 1 × (3 - 2) = 1</Formula></li>
              <li>Cofator <Formula>C₁₂</Formula>: <Formula>(-1) × det([1, 2], [0, 1]) = -1 × (1 - 0) = -1</Formula></li>
            </ul>
            <p className="mt-2 text-lg"><strong>Resultado:</strong> <Formula>det(A) = 2 · (1) + 1 · (-1) = 2 - 1 = 1</Formula></p>
          </div>
        </div>

        {/* Método 4 */}
        <div>
          <h3 className="text-xl font-bold border-b pb-2 mb-4 text-slate-700">Método 4: Eliminação Gaussiana (Matrizes Maiores)</h3>
          <p className="mb-4 text-slate-600">Transforme a matriz numa matriz triangular superior. O determinante será o produto dos elementos da diagonal principal. <strong>É o método mais eficiente para matrizes grandes.</strong></p>
          <div className="inline-block p-4 bg-slate-50 rounded-lg border border-slate-200 mb-4">
            <MatrixDisplay matrix={[[1, 2, 1, 0], [2, 1, 3, 1], [1, 0, 2, 1], [0, 1, 1, 2]]} />
          </div>
          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Solução Passo a Passo:</p>
            <ol className="list-decimal list-inside space-y-4 text-slate-700">
              <li className="bg-slate-50 p-4 rounded border border-slate-100">
                <strong>Objetivo:</strong> Zerar os elementos abaixo do primeiro pivô (<Formula>a₁₁=1</Formula>).
                <ul className="list-none ml-6 mt-2 space-y-1">
                  <li>↳ <Formula>L₂ ← L₂ - 2 · L₁</Formula></li>
                  <li>↳ <Formula>L₃ ← L₃ - 1 · L₁</Formula></li>
                </ul>
              </li>
              <li className="bg-slate-50 p-4 rounded border border-slate-100">
                <strong>Resultado Parcial:</strong> A matriz torna-se triangular superior.
                <div className="mt-4">
                  <MatrixDisplay matrix={[[1, 2, 1, 0], [0, -3, 1, 1], [0, 0, "1/3", "1/3"], [0, 0, 0, 1]]} />
                </div>
              </li>
              <li className="bg-slate-50 p-4 rounded border border-slate-100">
                <strong>Cálculo Final:</strong> Multiplique a diagonal principal.
                <p className="mt-3 text-lg"><strong>Resultado:</strong> <Formula>det(A) = 1 × (-3) × (1/3) × 1 = -1</Formula></p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800">Propriedades Fundamentais</h2>
        <ul className="list-none space-y-3 text-slate-700">
            <li className="flex gap-2">
              <span className="text-blue-500">❖</span>
              <span><strong>Matriz Transposta:</strong> O determinante não se altera. <Formula>det(Aᵀ) = det(A)</Formula>.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">❖</span>
              <span><strong>Produto de Matrizes:</strong> O determinante do produto é o produto dos determinantes. <Formula>det(A · B) = det(A) · det(B)</Formula>.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">❖</span>
              <span><strong>Troca de Filas:</strong> Trocar duas linhas ou colunas inverte o sinal do determinante.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">❖</span>
              <span><strong>Matriz Triangular:</strong> O determinante é o produto dos elementos da diagonal principal.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">❖</span>
              <span><strong>Fila Nula:</strong> Se uma matriz possui uma linha inteira de zeros, o seu determinante é 0.</span>
            </li>
        </ul>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Conclusão e Próximos Passos</h2>
        <p className="text-slate-300 leading-relaxed">Dominar o cálculo de determinantes é um passo essencial na Álgebra Linear. Com ele, pode analisar a inversibilidade de matrizes, resolver sistemas e entender transformações geométricas.</p>
        <p className="mt-6">
          Pratique com a nossa calculadora e avance os seus estudos aprendendo sobre a{" "}
          <Link to="/tutorial/matriz-inversa" className="text-blue-400 font-bold hover:text-white transition-colors underline underline-offset-4">
            inversa de uma matriz →
          </Link>
        </p>
      </div>
    </div>
  );
}

export default DeterminantTutorial;
