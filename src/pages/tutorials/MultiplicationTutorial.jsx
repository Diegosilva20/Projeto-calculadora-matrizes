import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function MatrixMultiplicationTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        Multiplicar matrizes parece estranho no começo porque não funciona como
        uma soma: você não multiplica posição com posição. A regra é sempre
        combinar uma <strong>linha da primeira matriz</strong> com uma{" "}
        <strong>coluna da segunda matriz</strong>. Depois que essa ideia fica
        clara, o cálculo vira uma repetição bem previsível.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: Linha Encontra Coluna
        </h2>
        <p className="mb-4 leading-relaxed">
          Pense na primeira matriz como uma lista de linhas com informações. A
          segunda matriz traz colunas com outros pesos ou combinações. Cada
          número da matriz final mede o encontro entre uma linha de A e uma
          coluna de B.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> para preencher uma posição da resposta,
          escolha a linha correspondente em A, escolha a coluna correspondente
          em B, multiplique os pares e some tudo.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Antes de Calcular: As Matrizes Podem Ser Multiplicadas?
        </h2>
        <p className="mb-4 leading-relaxed">
          A multiplicação A x B só existe quando o número de{" "}
          <strong className="text-blue-700">colunas de A</strong> é igual ao
          número de <strong className="text-red-700">linhas de B</strong>.
        </p>

        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg">
          A (
          <Formula>
            m x <span className="text-blue-700">n</span>
          </Formula>
          ) x B (
          <Formula>
            <span className="text-red-700">n</span> x p
          </Formula>
          ) = C (<Formula>m x p</Formula>)
        </div>

        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          Os números de dentro precisam bater: colunas de A e linhas de B. O
          resultado fica com os números de fora: linhas de A e colunas de B.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Multiplicar Matrizes Passo a Passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Veja o tamanho das duas matrizes.</li>
          <li>Confira se as colunas da primeira são iguais às linhas da segunda.</li>
          <li>Descubra o tamanho da resposta: linhas de A por colunas de B.</li>
          <li>Para cada posição da resposta, pegue uma linha de A e uma coluna de B.</li>
          <li>Multiplique os valores correspondentes.</li>
          <li>Some os produtos para obter o número final daquela posição.</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Resolvido: Multiplicando uma Matriz 2x3 por uma 3x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos calcular A x B. A primeira matriz tem tamanho 2x3 e a segunda
          tem tamanho 3x2. Como o 3 aparece nas duas dimensões internas, a
          multiplicação existe. O resultado será 2x2.
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
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              C11: linha 1 de A com coluna 1 de B
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              [2, 1, 3] com [1, 2, 3] = (2 x 1) + (1 x 2) + (3 x 3) = 13
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              C12: linha 1 de A com coluna 2 de B
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              [2, 1, 3] com [4, 1, 5] = (2 x 4) + (1 x 1) + (3 x 5) = 24
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              C21: linha 2 de A com coluna 1 de B
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              [4, 0, 2] com [1, 2, 3] = (4 x 1) + (0 x 2) + (2 x 3) = 10
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              C22: linha 2 de A com coluna 2 de B
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              [4, 0, 2] com [4, 1, 5] = (4 x 4) + (0 x 1) + (2 x 5) = 26
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">
          Resultado Final
        </h3>
        <MatrixDisplay
          matrix={[
            [13, 24],
            [10, 26],
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Erros Comuns</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Multiplicar posição com posição:</strong> isso vale para
            algumas operações elemento a elemento, mas não para multiplicação
            matricial.
          </li>
          <li>
            <strong>Ignorar as dimensões:</strong> se colunas de A e linhas de B
            não forem iguais, A x B não existe.
          </li>
          <li>
            <strong>Trocar a ordem sem verificar:</strong> em geral,{" "}
            <Formula>A x B != B x A</Formula>. A ordem importa.
          </li>
          <li>
            <strong>Esquecer a soma final:</strong> cada posição é a soma dos
            produtos, não apenas uma lista de multiplicações.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Onde Isso Aparece na Prática?
        </h2>
        <p className="mb-4 leading-relaxed">
          Multiplicação de matrizes aparece quando várias informações precisam
          ser combinadas de forma organizada. Em computação gráfica, ela ajuda a
          mover, girar e redimensionar objetos. Em inteligência artificial, ela é
          usada para combinar entradas, pesos e camadas de redes neurais. Em
          sistemas lineares, ela permite escrever muitas equações em uma forma
          compacta.
        </p>
        <TipBox>
          Se você já viu uma fórmula como <Formula>A x x = b</Formula>, a
          multiplicação de matrizes é justamente a operação que conecta os
          coeficientes, as variáveis e os resultados.
        </TipBox>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        secondaryTo="/tutorial/matriz-transposta"
        secondaryLabel="Ver matriz transposta"
      >
        Agora teste com seus próprios valores. Escolha a operação
          “Multiplicação (A x B)”, preencha as matrizes e veja o resultado junto
          com o passo a passo de cada elemento calculado.
      </TutorialCTA>
    </div>
  );
}

export default MatrixMultiplicationTutorial;
