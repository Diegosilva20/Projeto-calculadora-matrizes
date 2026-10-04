import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function MatrixAdditionTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        A soma de matrizes é calculada elemento a elemento. Para somar duas matrizes, basta somar os valores que ocupam a mesma posição em cada uma delas.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Como funciona a soma
        </h2>
        <p className="mb-4 leading-relaxed">
          Se duas matrizes compartilham as mesmas dimensões, cada entrada da primeira corresponde diretamente à mesma entrada na segunda. A operação une esses valores ponto a ponto.
        </p>
        <TipBox>
          Cada elemento <Formula>c_(ij)</Formula> da matriz resposta vem da soma direta de <Formula>a_(ij) + b_(ij)</Formula>.
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Condição de existência</h2>
        <p className="mb-4 leading-relaxed">
          A operação <Formula>A + B</Formula> só é definida quando <Formula>A</Formula> e <Formula>B</Formula> possuem exatamente a mesma ordem (mesmo número de linhas e mesmo número de colunas).
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg overflow-x-auto">
          <Formula>C(i, j) = A(i, j) + B(i, j)</Formula>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Passo a passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Verifique se ambas as matrizes têm a mesma ordem.</li>
          <li>Identifique o elemento na linha <Formula>i</Formula> e coluna <Formula>j</Formula> de cada matriz.</li>
          <li>Some os dois números mantendo a atenção aos sinais.</li>
          <li>Posicione o resultado na mesma linha <Formula>i</Formula> e coluna <Formula>j</Formula> da matriz resultante.</li>
          <li>Repita o procedimento para todas as posições.</li>
        </ol>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo resolvido (2x2)
        </h2>
        <p className="mb-4 leading-relaxed">
          Considere as matrizes <Formula>A</Formula> e <Formula>B</Formula> de ordem 2×2:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-2">Matriz A</p>
            <MatrixDisplay
              matrix={[
                [2, 1],
                [3, 4],
              ]}
            />
          </div>
          <div>
            <p className="font-semibold mb-2">Matriz B</p>
            <MatrixDisplay
              matrix={[
                [5, 0],
                [-1, 2],
              ]}
            />
          </div>
        </div>

        <UseExampleButton
          operation="soma"
          matrixA={[
            [2, 1],
            [3, 4],
          ]}
          matrixB={[
            [5, 0],
            [-1, 2],
          ]}
        />

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">Primeira linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              2 + 5 = 7 e 1 + 0 = 1
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">Segunda linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              3 + (-1) = 2 e 4 + 2 = 6
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Resultado final</h3>
        <MatrixDisplay
          matrix={[
            [7, 1],
            [2, 6],
          ]}
        />
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Cuidados importantes</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Dimensões incompatíveis:</strong> matrizes com ordens diferentes (como 2×3 e 3×2) não podem ser somadas.
          </li>
          <li>
            <strong>Alinhamento de posições:</strong> sempre some posições idênticas entre as matrizes.
          </li>
          <li>
            <strong>Regras de sinais:</strong> somar um elemento negativo equivale a uma subtração (ex: <Formula>3 + (-1) = 2</Formula>).
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Aplicações práticas
        </h2>
        <p className="mb-4 leading-relaxed">
          A soma matricial é comum na consolidação de dados de períodos diferentes, sobreposição de camadas em processamento gráfico e combinação linear de vetores.
        </p>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/subtracao-de-matrizes"
        secondaryLabel="Ver subtração de matrizes"
      >
        Insira matrizes personalizadas e veja a soma calculada passo a passo com o detalhamento de cada posição.
      </TutorialCTA>
    </div>
  );
}

export default MatrixAdditionTutorial;
