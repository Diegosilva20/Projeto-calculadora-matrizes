import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function MatrixMultiplicationTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        A multiplicação de matrizes não é calculada elemento a elemento. A regra fundamental consiste em combinar cada <strong>linha da primeira matriz</strong> com cada <strong>coluna da segunda matriz</strong> por meio de produtos escalares.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Como funciona a multiplicação matricial
        </h2>
        <p className="mb-4 leading-relaxed">
          Cada elemento <Formula>c_(ij)</Formula> da matriz produto é a soma dos produtos entre os elementos da linha <Formula>i</Formula> da matriz <Formula>A</Formula> e os elementos correspondentes da coluna <Formula>j</Formula> da matriz <Formula>B</Formula>.
        </p>
        <TipBox>
          Para preencher a posição <Formula>(i, j)</Formula> do resultado: multiplique os pares ordenados da linha <Formula>i</Formula> de A pela coluna <Formula>j</Formula> de B e some todos os produtos.
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Condição de existência e dimensão resultante
        </h2>
        <p className="mb-4 leading-relaxed">
          O produto <Formula>A × B</Formula> só é definido se o número de{" "}
          <strong className="text-blue-700">colunas de A</strong> for estritamente igual ao
          número de <strong className="text-red-700">linhas de B</strong>.
        </p>

        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg overflow-x-auto">
          A (
          <Formula>
            m × <span className="text-blue-700">n</span>
          </Formula>
          ) × B (
          <Formula>
            <span className="text-red-700">n</span> × p
          </Formula>
          ) = C (<Formula>m × p</Formula>)
        </div>

        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          As dimensões internas (<Formula>n</Formula>) devem coincidir. A dimensão da matriz resultante é dada pelas dimensões externas: <Formula>m × p</Formula>.
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Passo a passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Verifique se as colunas da matriz <Formula>A</Formula> equivalem às linhas da matriz <Formula>B</Formula>.</li>
          <li>Determine a ordem da matriz resultado (<Formula>linhas de A × colunas de B</Formula>).</li>
          <li>Para cada entrada <Formula>(i, j)</Formula>, multiplique ordenadamente os termos da linha <Formula>i</Formula> pelos da coluna <Formula>j</Formula>.</li>
          <li>Some todos os produtos parciais para obter o número final daquela célula.</li>
        </ol>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo resolvido: matriz 2x3 por matriz 3x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos calcular o produto <Formula>A × B</Formula>. A matriz <Formula>A</Formula> é 2×3 e a matriz <Formula>B</Formula> é 3×2. O resultado terá dimensão 2×2:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-2">Matriz A (2x3)</p>
            <MatrixDisplay
              matrix={[
                [2, 1, 3],
                [4, 0, 2],
              ]}
            />
          </div>
          <div>
            <p className="font-semibold mb-2">Matriz B (3x2)</p>
            <MatrixDisplay
              matrix={[
                [1, 4],
                [2, 1],
                [3, 5],
              ]}
            />
          </div>
        </div>
        <UseExampleButton
          operation="multiplicacao"
          matrixA={[
            [2, 1, 3],
            [4, 0, 2],
          ]}
          matrixB={[
            [1, 4],
            [2, 1],
            [3, 5],
          ]}
        />

        <div className="mt-6 space-y-5">
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              C11: Linha 1 de A × Coluna 1 de B
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (2 × 1) + (1 × 2) + (3 × 3) = 2 + 2 + 9 = 13
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              C12: Linha 1 de A × Coluna 2 de B
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (2 × 4) + (1 × 1) + (3 × 5) = 8 + 1 + 15 = 24
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              C21: Linha 2 de A × Coluna 1 de B
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (4 × 1) + (0 × 2) + (2 × 3) = 4 + 0 + 6 = 10
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              C22: Linha 2 de A × Coluna 2 de B
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (4 × 4) + (0 × 1) + (2 × 5) = 16 + 0 + 10 = 26
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">
          Resultado final
        </h3>
        <MatrixDisplay
          matrix={[
            [13, 24],
            [10, 26],
          ]}
        />
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Cuidados importantes</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>A multiplicação matricial não é comutativa:</strong> em regra geral,{" "}
            <Formula>A × B ≠ B × A</Formula>. Inclusive, muitas vezes um dos produtos existe e o inverso sequer é compatível em dimensões.
          </li>
          <li>
            <strong>Dimensões incompatíveis:</strong> se as colunas de <Formula>A</Formula> não forem iguais às linhas de <Formula>B</Formula>, o produto é indefinido.
          </li>
          <li>
            <strong>Não confundir com produto direto:</strong> não multiplique elementos de índices iguais diretamente (<Formula>a_(ij) × b_(ij)</Formula>); o produto matricial exige o método linha × coluna.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Aplicações práticas
        </h2>
        <p className="mb-4 leading-relaxed">
          A multiplicação de matrizes é utilizada na composição de transformações geométricas (como rotações sucessivas em 3D), na representação compacta de sistemas lineares <Formula>Ax = b</Formula> e na propagação direta em camadas de redes neurais profundas.
        </p>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/matriz-transposta"
        secondaryLabel="Ver matriz transposta"
      >
        Escolha a operação “Multiplicação (A × B)”, preencha as matrizes e confira o cálculo de cada elemento detalhado passo a passo.
      </TutorialCTA>
    </div>
  );
}

export default MatrixMultiplicationTutorial;
