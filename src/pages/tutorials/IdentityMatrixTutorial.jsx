import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";

function IdentityMatrixTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        A matriz identidade funciona como o elemento neutro da multiplicação matricial. Assim como multiplicar um número real por 1 não altera seu valor, multiplicar qualquer matriz compatível pela matriz identidade preserva a matriz original.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          O que é a matriz identidade
        </h2>
        <p className="mb-4 leading-relaxed">
          Comparando com a aritmética básica:
        </p>
        <p className="font-mono text-center p-3 bg-slate-50 dark:bg-slate-900 rounded mb-4">
          5 × 1 = 5
        </p>
        <p className="mb-4 leading-relaxed">
          Com matrizes de mesma dimensão compatível:
        </p>
        <p className="font-mono text-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
          A × I = A
        </p>
        <p className="mt-4 leading-relaxed">
          A matriz identidade <Formula>I</Formula> é a referência central para definir matrizes inversas e escalonamento reduzido por linhas.
        </p>
        <TipBox>
          A matriz identidade é sempre quadrada, com o número 1 em todos os elementos da diagonal principal e 0 em todas as outras posições.
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Estrutura da matriz identidade
        </h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed mb-4">
          <li>
            <strong>Diagonal principal com 1:</strong> posições <Formula>(1,1)</Formula>, <Formula>(2,2)</Formula>, <Formula>(3,3)</Formula>, etc.
          </li>
          <li>
            <strong>Demais posições com 0:</strong> todos os elementos fora da diagonal principal são nulos.
          </li>
          <li>
            <strong>Formato quadrado:</strong> ordens 2×2, 3×3, 4×4, ..., n×n.
          </li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Notação: Representa-se por <Formula>I</Formula> ou <Formula>I_n</Formula> (onde <Formula>n</Formula> indica a dimensão).
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplos: ordens 2x2 e 3x3
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-3">Identidade 2×2 (I₂)</p>
            <div className="bg-blue-50 border border-accent/30 p-4 rounded">
              <MatrixDisplay
                matrix={[
                  [1, 0],
                  [0, 1],
                ]}
              />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              1 na diagonal principal e 0 fora dela.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-3">Identidade 3×3 (I₃)</p>
            <div className="bg-green-50 border border-green-200 p-4 rounded">
              <MatrixDisplay
                matrix={[
                  [1, 0, 0],
                  [0, 1, 0],
                  [0, 0, 1],
                ]}
              />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              1 nas posições (1,1), (2,2) e (3,3), com 0 em todas as outras.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Elemento neutro: A × I = A
        </h2>
        <p className="mb-4 leading-relaxed">
          Para qualquer matriz quadrada <Formula>A</Formula>:
        </p>

        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg mb-5">
          <Formula>A × I = A</Formula>
          <br />
          <Formula>I × A = A</Formula>
        </div>

        <div className="space-y-4">
          <div className="border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4 rounded">
            <h3 className="font-semibold mb-2">Exemplo com cálculo 2×2:</h3>
            <div className="grid md:grid-cols-3 gap-3 items-center">
              <div>
                <p className="text-xs font-semibold mb-1">Matriz A</p>
                <MatrixDisplay
                  matrix={[
                    [3, 7],
                    [2, 5],
                  ]}
                />
              </div>
              <div className="text-center font-bold">×</div>
              <div>
                <p className="text-xs font-semibold mb-1">Identidade I</p>
                <MatrixDisplay
                  matrix={[
                    [1, 0],
                    [0, 1],
                  ]}
                />
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="font-bold">=</p>
              <p className="mt-2 text-xs font-semibold mb-1">Resultado final</p>
              <MatrixDisplay
                matrix={[
                  [3, 7],
                  [2, 5],
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Relação com a matriz inversa
        </h2>
        <p className="mb-4 leading-relaxed">
          A definição formal de matriz inversa depende diretamente da matriz identidade:
        </p>

        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg mb-4">
          <Formula>A × A^(-1) = A^(-1) × A = I</Formula>
        </div>

        <p className="mb-2 leading-relaxed">
          Multiplicar uma matriz pela sua inversa produz a matriz identidade.
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Relação com a eliminação de Gauss-Jordan
        </h2>
        <p className="mb-4 leading-relaxed">
          No método de Gauss-Jordan para calcular a inversa, monta-se a matriz estendida <Formula>[A | I]</Formula> e aplicam-se operações elementares de linha até que o lado esquerdo se transforme na identidade:
        </p>

        <div className="border border-accent/30 bg-blue-50 p-4 rounded mb-4">
          <p className="font-mono text-sm text-center">
            [A | I] → [I | A^(-1)]
          </p>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300">
          Quando o bloco esquerdo atinge a forma <Formula>I</Formula>, o bloco direito contém a matriz inversa <Formula>A^(-1)</Formula>.
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Propriedades fundamentais
        </h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Simetria:</strong> <Formula>I^T = I</Formula> (sua transposta é idêntica a ela mesma).
          </li>
          <li>
            <strong>Determinante unitário:</strong> <Formula>det(I) = 1</Formula> para qualquer ordem <Formula>n</Formula>.
          </li>
          <li>
            <strong>Auto-inversa:</strong> <Formula>I^(-1) = I</Formula>.
          </li>
          <li>
            <strong>Potências:</strong> <Formula>I^k = I</Formula> para qualquer expoente inteiro <Formula>k</Formula>.
          </li>
        </ul>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/matriz-inversa"
        secondaryLabel="Ver Matriz Inversa"
      >
        Teste a multiplicação de qualquer matriz pela identidade na calculadora e veja como o resultado se mantém idêntico no passo a passo.
      </TutorialCTA>
    </div>
  );
}

export default IdentityMatrixTutorial;
