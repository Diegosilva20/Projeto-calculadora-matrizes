import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function MatrixTransposeTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        A transposição de uma matriz consiste em trocar ordenadamente suas linhas por colunas. O que era a linha 1 vira a coluna 1, o que era a linha 2 vira a coluna 2, e assim por diante.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Como funciona a transposição
        </h2>
        <p className="mb-4 leading-relaxed">
          Nenhum elemento numérico é alterado ou recalculado. Apenas o índice da linha e o índice da coluna são invertidos para cada entrada da matriz.
        </p>
        <TipBox>
          O elemento que ocupava a posição <Formula>(i, j)</Formula> passa a ocupar a posição <Formula>(j, i)</Formula> na transposta <Formula>A^(T)</Formula>.
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Dimensão da matriz transposta
        </h2>
        <p className="mb-4 leading-relaxed">
          Se a matriz original <Formula>A</Formula> possui dimensão <Formula>m × n</Formula>, sua transposta <Formula>A^(T)</Formula> terá dimensão <Formula>n × m</Formula>:
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg overflow-x-auto">
          A (m × n) → A^T (n × m)
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Uma matriz 2×3 torna-se 3×2. Matrizes quadradas (como 3×3) mantêm a mesma ordem, com os elementos refletidos em relação à diagonal principal.
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Passo a passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Identifique a ordem <Formula>m × n</Formula> da matriz original.</li>
          <li>Prepare a matriz de saída com ordem invertida <Formula>n × m</Formula>.</li>
          <li>Converta cada elemento da linha <Formula>k</Formula> na coluna <Formula>k</Formula> da nova matriz.</li>
        </ol>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo resolvido: matriz 2x3 para 3x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Considere a matriz <Formula>A</Formula> de ordem 2×3:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-2">Matriz original A (2x3)</p>
            <MatrixDisplay
              matrix={[
                [1, 2, 3],
                [4, 5, 6],
              ]}
            />
          </div>
          <div>
            <p className="font-semibold mb-2">Matriz transposta A^T (3x2)</p>
            <MatrixDisplay
              matrix={[
                [1, 4],
                [2, 5],
                [3, 6],
              ]}
            />
          </div>
        </div>
        <UseExampleButton
          operation="transposicao"
          matrixA={[
            [1, 2, 3],
            [4, 5, 6],
          ]}
        />

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Linha 1 vira Coluna 1
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              Os elementos [1, 2, 3] passam a ocupar a primeira coluna.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Linha 2 vira Coluna 2
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              Os elementos [4, 5, 6] passam a ocupar a segunda coluna.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Propriedades algébricas</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Dupla transposição:</strong> <Formula>(A^T)^T = A</Formula>.
          </li>
          <li>
            <strong>Transposta da soma:</strong> <Formula>(A + B)^T = A^T + B^T</Formula>.
          </li>
          <li>
            <strong>Transposta do produto:</strong> inverte a ordem da multiplicação, <Formula>(A × B)^T = B^T × A^T</Formula>.
          </li>
          <li>
            <strong>Determinante preservado:</strong> para matrizes quadradas, <Formula>det(A^T) = det(A)</Formula>.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Cuidados importantes</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Transposta vs Inversa:</strong> a transposta apenas inverte linhas e colunas; a matriz inversa desfaz a multiplicação matricial (<Formula>A × A^(-1) = I</Formula>).
          </li>
          <li>
            <strong>Matrizes simétricas:</strong> quando <Formula>A^T = A</Formula>, a matriz é chamada de simétrica (exige ser quadrada).
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Aplicações práticas
        </h2>
        <p className="mb-4 leading-relaxed">
          A transposição é utilizada no cálculo de produtos escalares, formulação de equações normais em regressão linear (método dos mínimos quadrados) e manipulação de tensores em machine learning.
        </p>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/multiplicacao-de-matrizes"
        secondaryLabel="Ver multiplicação de matrizes"
      >
        Insira qualquer matriz retangular ou quadrada para visualizar a transposição direta na calculadora.
      </TutorialCTA>
    </div>
  );
}

export default MatrixTransposeTutorial;
