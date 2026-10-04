import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function MatrixSubtractionTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        A subtração de matrizes é realizada calculando a diferença entre os elementos que ocupam a mesma posição em duas matrizes de mesma dimensão.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Como funciona a subtração
        </h2>
        <p className="mb-4 leading-relaxed">
          Cada elemento da matriz resultante é obtido subtraindo o valor de <Formula>B</Formula> do valor de <Formula>A</Formula> na mesma linha e coluna.
        </p>
        <TipBox>
          Em <Formula>A - B</Formula>, calculamos <Formula>c_(ij) = a_(ij) - b_(ij)</Formula> para cada posição.
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Condição de existência</h2>
        <p className="mb-4 leading-relaxed">
          Assim como na soma, a subtração só é possível se ambas as matrizes tiverem a mesma ordem (mesma quantidade de linhas e colunas).
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg overflow-x-auto">
          <Formula>C(i, j) = A(i, j) - B(i, j)</Formula>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Passo a passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Confirme se as matrizes <Formula>A</Formula> e <Formula>B</Formula> possuem dimensões iguais.</li>
          <li>Identifique os elementos na posição <Formula>(i, j)</Formula> em ambas as matrizes.</li>
          <li>Calcule <Formula>a_(ij) - b_(ij)</Formula>, observando as regras de sinais para números negativos.</li>
          <li>Insira a resposta na posição correspondente da matriz final.</li>
          <li>Repita a operação para todas as entradas.</li>
        </ol>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo resolvido (2x2)
        </h2>
        <p className="mb-4 leading-relaxed">
          Considere as matrizes de ordem 2×2 abaixo:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-2">Matriz A</p>
            <MatrixDisplay
              matrix={[
                [7, 4],
                [3, 9],
              ]}
            />
          </div>
          <div>
            <p className="font-semibold mb-2">Matriz B</p>
            <MatrixDisplay
              matrix={[
                [2, 5],
                [1, 6],
              ]}
            />
          </div>
        </div>

        <UseExampleButton
          operation="subtracao"
          matrixA={[
            [7, 4],
            [3, 9],
          ]}
          matrixB={[
            [2, 5],
            [1, 6],
          ]}
        />

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">Primeira linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              7 - 2 = 5 e 4 - 5 = -1
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">Segunda linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              3 - 1 = 2 e 9 - 6 = 3
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Resultado final</h3>
        <MatrixDisplay
          matrix={[
            [5, -1],
            [2, 3],
          ]}
        />
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Cuidados importantes</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>A subtração não é comutativa:</strong> em geral,{" "}
            <Formula>A - B ≠ B - A</Formula>. A ordem dos termos altera os sinais dos resultados.
          </li>
          <li>
            <strong>Jogo de sinais:</strong> subtrair um número negativo equivale a somá-lo (ex: <Formula>3 - (-2) = 5</Formula>).
          </li>
          <li>
            <strong>Compatibilidade de ordem:</strong> matrizes com dimensões diferentes não admitem subtração.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Aplicações práticas
        </h2>
        <p className="mb-4 leading-relaxed">
          A subtração matricial é usada para calcular variações temporais de dados, diferenças entre estimativas e valores reais, e filtros de detecção de bordas em visão computacional.
        </p>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/soma-de-matrizes"
        secondaryLabel="Ver soma de matrizes"
      >
        Insira matrizes personalizadas na calculadora para conferir a subtração elemento a elemento no passo a passo.
      </TutorialCTA>
    </div>
  );
}

export default MatrixSubtractionTutorial;
