import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function MatrixTransposeTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        A matriz transposta é uma das operações mais visuais da álgebra linear.
        A ideia é simples: tudo que está em uma linha passa a ficar em uma
        coluna. Por isso, ela é um ótimo primeiro passo para entender como as
        matrizes mudam de formato.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: Virar Linhas em Colunas
        </h2>
        <p className="mb-4 leading-relaxed">
          Imagine que você está lendo uma tabela. Na matriz original, os valores
          aparecem organizados por linhas. Ao transpor, você reorganiza a mesma
          informação por colunas. Nenhum número muda de valor; apenas muda de
          posição.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> na transposta, o elemento que estava
          na posição <Formula>(i, j)</Formula> vai para a posição{" "}
          <Formula>(j, i)</Formula>.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          O Que Acontece com o Tamanho da Matriz?
        </h2>
        <p className="mb-4 leading-relaxed">
          Se a matriz A tem <strong>m linhas</strong> e{" "}
          <strong>n colunas</strong>, a matriz transposta terá{" "}
          <strong>n linhas</strong> e <strong>m colunas</strong>.
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg">
          A (<Formula>m x n</Formula>) vira A^T (<Formula>n x m</Formula>)
        </div>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          Uma matriz 2x3 vira 3x2. Uma matriz 4x1 vira 1x4. Se a matriz for
          quadrada, como 3x3, ela continua 3x3, mas os elementos trocam de
          lugar em relação à diagonal principal.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Calcular a Matriz Transposta Passo a Passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Observe o tamanho da matriz original.</li>
          <li>Crie uma nova matriz com as dimensões invertidas.</li>
          <li>Pegue a primeira linha da matriz original.</li>
          <li>Escreva essa linha como a primeira coluna da transposta.</li>
          <li>Repita o processo para todas as linhas.</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Resolvido: Transposta de uma Matriz 2x3
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos transpor a matriz A abaixo. Ela tem 2 linhas e 3 colunas, então
          sua transposta terá 3 linhas e 2 colunas.
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
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Primeira linha vira primeira coluna
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              [1, 2, 3] vira a coluna [1, 2, 3]^T.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Segunda linha vira segunda coluna
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              [4, 5, 6] vira a coluna [4, 5, 6]^T.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Erros Comuns</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Achar que os números mudam:</strong> a transposta não altera
            os valores, apenas troca suas posições.
          </li>
          <li>
            <strong>Esquecer de inverter o tamanho:</strong> uma matriz 2x3 não
            continua 2x3; ela vira 3x2.
          </li>
          <li>
            <strong>Confundir com matriz inversa:</strong> transposta e inversa
            são operações diferentes. A transposta troca linhas e colunas; a
            inversa “desfaz” a ação de uma matriz.
          </li>
          <li>
            <strong>Errar a posição:</strong> o elemento da posição{" "}
            <Formula>(i, j)</Formula> sempre vai para <Formula>(j, i)</Formula>.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Propriedades Importantes
        </h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Transpor duas vezes volta ao começo:</strong>{" "}
            <Formula>(A^T)^T = A</Formula>.
          </li>
          <li>
            <strong>A transposta da soma:</strong>{" "}
            <Formula>(A + B)^T = A^T + B^T</Formula>.
          </li>
          <li>
            <strong>A transposta do produto inverte a ordem:</strong>{" "}
            <Formula>(A x B)^T = B^T x A^T</Formula>.
          </li>
          <li>
            <strong>Determinante:</strong> se A for quadrada,{" "}
            <Formula>det(A^T) = det(A)</Formula>.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Onde a Transposta Aparece na Prática?
        </h2>
        <p className="mb-4 leading-relaxed">
          A transposta aparece quando precisamos mudar a orientação de dados. Em
          estatística e machine learning, ela ajuda a organizar tabelas de dados
          e fórmulas de regressão. Em álgebra linear, ela é essencial para
          entender matrizes simétricas, produtos entre vetores e propriedades da
          multiplicação.
        </p>
        <TipBox>
          Se uma matriz representa dados em linhas, a transposta permite olhar
          para os mesmos dados por colunas. É a mesma informação, reorganizada.
        </TipBox>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        secondaryTo="/tutorial/multiplicacao-de-matrizes"
        secondaryLabel="Ver multiplicação de matrizes"
      >
        Escolha “Transposição de A”, preencha sua matriz e veja como cada
          posição muda no passo a passo. É uma boa forma de conferir se você
          entendeu a regra sem decorar.
      </TutorialCTA>
    </div>
  );
}

export default MatrixTransposeTutorial;
