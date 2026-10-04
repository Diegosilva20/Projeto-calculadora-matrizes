import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function ScalarMultiplicationTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        Multiplicar uma matriz por um escalar significa multiplicar cada um de seus elementos por uma mesma constante numérica.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Como funciona a multiplicação por escalar
        </h2>
        <p className="mb-4 leading-relaxed">
          O termo "escalar" refere-se a um número real comum (ou fração). Quando multiplicamos uma matriz inteira por esse número, todas as entradas individuais são reescaladas proporcionalmente.
        </p>
        <TipBox>
          O escalar multiplica elemento por elemento, sem alterar a ordem (linhas e colunas) da matriz.
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Definição matemática</h2>
        <p className="mb-4 leading-relaxed">
          Se <Formula>k</Formula> é um número real e <Formula>A</Formula> é uma matriz, a matriz <Formula>kA</Formula> é obtida multiplicando cada entrada <Formula>a_(ij)</Formula> por <Formula>k</Formula>:
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg overflow-x-auto">
          <Formula>C(i, j) = k × A(i, j)</Formula>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Passo a passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Identifique o valor do escalar <Formula>k</Formula>.</li>
          <li>Percorra cada posição <Formula>(i, j)</Formula> da matriz original.</li>
          <li>Multiplique o número dessa posição por <Formula>k</Formula>.</li>
          <li>Escreva o produto na posição equivalente da nova matriz.</li>
        </ol>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo resolvido: multiplicação por 3
        </h2>
        <p className="mb-4 leading-relaxed">
          Considere a matriz <Formula>A</Formula> e o escalar <Formula>k = 3</Formula>:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-2">Matriz A</p>
            <MatrixDisplay
              matrix={[
                [2, -1],
                [0, 4],
              ]}
            />
          </div>
          <div>
            <p className="font-semibold mb-2">Resultado 3A</p>
            <MatrixDisplay
              matrix={[
                [6, -3],
                [0, 12],
              ]}
            />
          </div>
        </div>

        <UseExampleButton
          operation="escalar"
          scalar={3}
          matrixA={[
            [2, -1],
            [0, 4],
          ]}
        />

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">Primeira linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              3 × 2 = 6 e 3 × (-1) = -3
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">Segunda linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              3 × 0 = 0 e 3 × 4 = 12
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Cuidados importantes</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Multiplicar todos os elementos:</strong> o escalar afeta cada elemento da matriz, não apenas uma linha ou coluna isolada.
          </li>
          <li>
            <strong>Manutenção da dimensão:</strong> a matriz resultante possui exatamente o mesmo número de linhas e colunas da original.
          </li>
          <li>
            <strong>Sinais:</strong> um escalar negativo inverte o sinal de todos os elementos não nulos.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Aplicações práticas
        </h2>
        <p className="mb-4 leading-relaxed">
          Multiplicar por escalar é fundamental no redimensionamento (zoom) de vetores e geometrias, conversão de unidades monetárias ou físicas em matrizes de dados e combinações lineares de vetores.
        </p>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/soma-de-matrizes"
        secondaryLabel="Ver soma de matrizes"
      >
        Defina um escalar e os valores da matriz para visualizar a multiplicação elemento a elemento no passo a passo da calculadora.
      </TutorialCTA>
    </div>
  );
}

export default ScalarMultiplicationTutorial;
