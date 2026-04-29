import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function MatrixSubtractionTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        Subtrair matrizes é parecido com somar matrizes: a operação acontece
        posição por posição. A diferença é que, em vez de juntar os valores,
        tiramos de A o valor correspondente em B.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: Comparar Duas Matrizes
        </h2>
        <p className="mb-4 leading-relaxed">
          Pense em duas tabelas com o mesmo formato. A subtração mostra a
          diferença entre elas em cada posição. Por isso, ela é útil quando
          queremos comparar mudanças, perdas, aumentos ou desvios.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> em <Formula>A - B</Formula>, cada
          posição da resposta recebe o valor de A menos o valor de B na mesma
          posição.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Regra Principal</h2>
        <p className="mb-4 leading-relaxed">
          A subtração <Formula>A - B</Formula> só existe quando as duas matrizes
          têm o mesmo tamanho. A matriz resultado mantém esse mesmo tamanho.
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <Formula>C(i, j) = A(i, j) - B(i, j)</Formula>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Subtrair Matrizes Passo a Passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Confira se A e B têm o mesmo número de linhas e colunas.</li>
          <li>Escolha uma posição da matriz.</li>
          <li>Subtraia o valor de B do valor de A nessa mesma posição.</li>
          <li>Escreva o resultado na matriz resposta.</li>
          <li>Repita o processo para todas as posições.</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Resolvido: Subtração de Matrizes 2x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos calcular A - B. Como as duas matrizes são 2x2, podemos subtrair
          posição com posição.
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
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">Primeira linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              7 - 2 = 5 e 4 - 5 = -1
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">Segunda linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              3 - 1 = 2 e 9 - 6 = 3
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Resultado Final</h3>
        <MatrixDisplay
          matrix={[
            [5, -1],
            [2, 3],
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Erros Comuns</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Inverter a ordem:</strong> em geral,{" "}
            <Formula>A - B</Formula> não é igual a <Formula>B - A</Formula>.
          </li>
          <li>
            <strong>Ignorar tamanhos:</strong> só é possível subtrair matrizes
            com as mesmas dimensões.
          </li>
          <li>
            <strong>Errar com números negativos:</strong>{" "}
            <Formula>4 - 5 = -1</Formula>, então resultados negativos podem
            aparecer normalmente.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Onde a Subtração de Matrizes Aparece?
        </h2>
        <p className="mb-4 leading-relaxed">
          A subtração de matrizes aparece quando queremos medir diferenças entre
          tabelas no mesmo formato: orçamento planejado contra gasto real,
          notas antes e depois de uma prova, imagens antes e depois de uma
          transformação ou dados coletados em dois momentos.
        </p>
        <TipBox>
          Quando duas matrizes descrevem a mesma coisa em momentos diferentes,
          a subtração mostra o que mudou em cada posição.
        </TipBox>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        secondaryTo="/tutorial/soma-de-matrizes"
        secondaryLabel="Ver soma de matrizes"
      >
        Escolha “Subtração (A - B)”, use matrizes do mesmo tamanho e acompanhe a
        diferença calculada em cada elemento.
      </TutorialCTA>
    </div>
  );
}

export default MatrixSubtractionTutorial;
