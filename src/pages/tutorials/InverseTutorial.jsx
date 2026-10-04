import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import SymbolicMatrix from "../../components/tutorial/SymbolicMatrix";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function InverseMatrixTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        A matriz inversa de uma matriz quadrada <Formula>A</Formula> é a matriz <Formula>A^(-1)</Formula> que, multiplicada por <Formula>A</Formula>, resulta na matriz identidade <Formula>I</Formula>. Ela permite isolar incógnitas em sistemas matriciais e reverter transformações lineares.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Conceito da matriz inversa
        </h2>
        <p className="mb-4 leading-relaxed">
          Analogamente à divisão com números reais (onde <Formula>5 × 1/5 = 1</Formula>), no cálculo matricial não existe divisão direta. Em vez disso, multiplicamos pela matriz inversa:
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg overflow-x-auto">
          <Formula>A × A^(-1) = A^(-1) × A = I</Formula>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Condições de existência (invertibilidade)
        </h2>
        <p className="mb-4 leading-relaxed">
          Uma matriz admite inversa se, e somente se, satisfizer dois critérios:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            Ser uma matriz <strong>quadrada</strong> (2×2, 3×3, 4×4, ..., n×n).
          </li>
          <li>
            Possuir determinante <strong>diferente de zero</strong>:{" "}
            <Formula>det(A) ≠ 0</Formula>.
          </li>
        </ul>
        <TipBox>
          Se <Formula>det(A) = 0</Formula>, a matriz é classificada como singular e não possui inversa.
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Fórmula analítica para matrizes 2x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Para qualquer matriz 2×2 com <Formula>det(A) ≠ 0</Formula>:
        </p>
        <SymbolicMatrix
          label="A ="
          matrix={[["a", "b"], ["c", "d"]]}
          className="mb-4"
        />
        <p className="mb-4 leading-relaxed">Sua inversa é calculada por:</p>
        <SymbolicMatrix
          label="A⁻¹ = (1 / det(A)) ×"
          matrix={[["d", "-b"], ["-c", "a"]]}
        />
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed mt-5">
          <li>Calcule o determinante <Formula>det(A) = ad - bc</Formula>.</li>
          <li>Troque de posição os elementos da diagonal principal (<Formula>a</Formula> e <Formula>d</Formula>).</li>
          <li>Inverta os sinais dos elementos da diagonal secundária (<Formula>b</Formula> vira <Formula>-b</Formula>, <Formula>c</Formula> vira <Formula>-c</Formula>).</li>
          <li>Multiplique a matriz resultante pela fração <Formula>1 / det(A)</Formula>.</li>
        </ol>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo resolvido (2x2)
        </h2>
        <p className="mb-4 leading-relaxed">
          Encontre a inversa da matriz <Formula>A</Formula>:
        </p>
        <MatrixDisplay
          matrix={[
            [2, 5],
            [1, 3],
          ]}
        />
        <UseExampleButton
          operation="inversa"
          matrixA={[
            [2, 5],
            [1, 3],
          ]}
        />

        <div className="mt-6 space-y-5">
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 1: Calcular o determinante
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              det(A) = (2 × 3) - (5 × 1) = 6 - 5 = 1
            </p>
            <p className="mt-3 leading-relaxed">
              Como <Formula>det(A) = 1 ≠ 0</Formula>, a matriz é invertível.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 2: Trocar e ajustar os sinais dos elementos
            </h3>
            <p className="mb-3 leading-relaxed">
              Trocamos 2 com 3 e invertemos os sinais de 5 e 1:
            </p>
            <MatrixDisplay
              matrix={[
                [3, -5],
                [-1, 2],
              ]}
            />
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 3: Multiplicar por 1 / det(A)
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              Como det(A) = 1, a matriz permanece inalterada.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Resultado final</h3>
        <MatrixDisplay
          matrix={[
            [3, -5],
            [-1, 2],
          ]}
        />
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Método de Gauss-Jordan para matrizes 3x3 e maiores
        </h2>
        <p className="mb-4 leading-relaxed">
          Para matrizes 3×3 ou superiores, monta-se a matriz estendida <Formula>[A | I]</Formula> e aplicam-se operações elementares de linha até que o lado esquerdo se transforme na identidade:
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg mb-4">
          <Formula>[A | I] → [I | A^(-1)]</Formula>
        </div>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Disponha a matriz original <Formula>A</Formula> no bloco esquerdo e a matriz identidade <Formula>I</Formula> no bloco direito.</li>
          <li>Aplique operações de linha para zerar elementos abaixo e acima dos pivôs.</li>
          <li>Quando o bloco esquerdo atingir a forma <Formula>I</Formula>, o bloco direito será a matriz inversa <Formula>A^(-1)</Formula>.</li>
        </ol>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Cuidados importantes</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Matrizes retangulares:</strong> matrizes como 2×3 ou 3×2 não possuem matriz inversa clássica.
          </li>
          <li>
            <strong>Determinante nulo:</strong> sempre calcule o determinante antes; se <Formula>det(A) = 0</Formula>, a matriz não admite inversa.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Aplicações práticas
        </h2>
        <p className="mb-4 leading-relaxed">
          A matriz inversa é utilizada na resolução analítica de sistemas lineares (<Formula>Ax = b \implies x = A^(-1)b</Formula>), criptografia matricial (cifra de Hill) e inversão de câmeras em computação gráfica 3D.
        </p>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/determinante-de-matrizes"
        secondaryLabel="Ver determinantes"
      >
        Selecione a operação “Inversa de A”, preencha sua matriz e veja o cálculo detalhado em frações exatas na calculadora.
      </TutorialCTA>
    </div>
  );
}

export default InverseMatrixTutorial;
