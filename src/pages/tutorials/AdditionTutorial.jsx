import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function MatrixAdditionTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        Somar matrizes é uma das operações mais diretas da álgebra linear. A
        ideia é comparar duas matrizes do mesmo tamanho e somar os números que
        ocupam a mesma posição.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: Somar Posição com Posição
        </h2>
        <p className="mb-4 leading-relaxed">
          Imagine duas tabelas com a mesma estrutura. Se uma posição representa
          o mesmo tipo de informação nas duas tabelas, faz sentido somar esses
          dois valores. É exatamente isso que acontece na soma de matrizes.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> na soma, cada elemento da resposta
          vem da soma dos elementos que estão na mesma posição em A e B.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Regra Principal</h2>
        <p className="mb-4 leading-relaxed">
          A soma <Formula>A + B</Formula> só existe quando A e B têm o mesmo
          número de linhas e colunas. Se A é 2x2, B também precisa ser 2x2. Se A
          é 3x4, B também precisa ser 3x4.
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <Formula>C(i, j) = A(i, j) + B(i, j)</Formula>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Somar Matrizes Passo a Passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Confira se as duas matrizes têm o mesmo tamanho.</li>
          <li>Comece pela primeira posição.</li>
          <li>Some o valor de A com o valor de B nessa mesma posição.</li>
          <li>Escreva o resultado na mesma posição da matriz resposta.</li>
          <li>Repita até preencher todos os elementos.</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Resolvido: Soma de Matrizes 2x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos somar A + B. As duas matrizes são 2x2, então a operação é
          permitida e a resposta também será 2x2.
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
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">Primeira linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              2 + 5 = 7 e 1 + 0 = 1
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">Segunda linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              3 + (-1) = 2 e 4 + 2 = 6
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Resultado Final</h3>
        <MatrixDisplay
          matrix={[
            [7, 1],
            [2, 6],
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Erros Comuns</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Somar matrizes de tamanhos diferentes:</strong> uma matriz
            2x3 não pode ser somada com uma matriz 3x2.
          </li>
          <li>
            <strong>Trocar posições:</strong> o elemento da posição (1, 2) deve
            ser somado com o elemento da posição (1, 2), não com outro lugar.
          </li>
          <li>
            <strong>Esquecer sinais negativos:</strong> somar um número negativo
            equivale a diminuir.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Onde a Soma de Matrizes Aparece?
        </h2>
        <p className="mb-4 leading-relaxed">
          A soma de matrizes aparece quando queremos juntar informações
          organizadas no mesmo formato: notas por disciplina, custos por mês,
          pixels de imagens, tabelas de dados ou resultados de medições.
        </p>
        <TipBox>
          Se duas matrizes representam a mesma estrutura de dados, a soma ajuda
          a combinar essas informações sem mudar a organização da tabela.
        </TipBox>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        secondaryTo="/tutorial/subtracao-de-matrizes"
        secondaryLabel="Ver subtração de matrizes"
      >
        Escolha “Soma (A + B)”, preencha duas matrizes do mesmo tamanho e confira
        cada posição no passo a passo.
      </TutorialCTA>
    </div>
  );
}

export default MatrixAdditionTutorial;
