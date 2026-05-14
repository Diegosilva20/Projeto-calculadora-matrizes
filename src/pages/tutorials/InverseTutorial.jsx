import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import SymbolicMatrix from "../../components/tutorial/SymbolicMatrix";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function InverseMatrixTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        A matriz inversa é a matriz que desfaz o efeito de outra matriz. Ela é
        muito usada para resolver sistemas lineares e para reverter
        transformações, mas só existe em alguns casos. A boa notícia: dá para
        entender a ideia antes de decorar qualquer fórmula.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: A Matriz Que Desfaz
        </h2>
        <p className="mb-4 leading-relaxed">
          Com números comuns, o inverso de 5 é <Formula>1/5</Formula>, porque{" "}
          <Formula>5 × 1/5 = 1</Formula>. Com matrizes, a lógica é parecida: a
          inversa de <Formula>A</Formula> é uma matriz <Formula>A⁻¹</Formula>{" "}
          que, ao multiplicar <Formula>A</Formula>, gera a matriz identidade.
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <Formula>A × A⁻¹ = A⁻¹ × A = I</Formula>
        </div>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          A matriz identidade funciona como o número 1 na multiplicação: ela não
          altera a matriz quando aparece em um produto.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Quando uma Matriz Tem Inversa?
        </h2>
        <p className="mb-4 leading-relaxed">
          Antes de calcular, verifique duas condições:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            A matriz precisa ser <strong>quadrada</strong>, como 2x2, 3x3 ou
            4x4.
          </li>
          <li>
            O determinante precisa ser <strong>diferente de zero</strong>:{" "}
            <Formula>det(A) ≠ 0</Formula>.
          </li>
        </ul>
        <TipBox>
          Se <Formula>det(A) = 0</Formula>, a matriz é chamada de singular e não
          possui inversa.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Calcular a Matriz Inversa 2x2 Passo a Passo
        </h2>
        <p className="mb-4 leading-relaxed">
          Para uma matriz 2x2, existe uma fórmula rápida. Se:
        </p>
        <SymbolicMatrix
          label="A ="
          matrix={[["a", "b"], ["c", "d"]]}
          className="mb-4"
        />
        <p className="mb-4 leading-relaxed">então:</p>
        <SymbolicMatrix
          label="A⁻¹ = 1/det(A) ×"
          matrix={[["d", "-b"], ["-c", "a"]]}
        />
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed mt-5">
          <li>Calcule o determinante.</li>
          <li>Troque os elementos da diagonal principal.</li>
          <li>Inverta o sinal dos outros dois elementos.</li>
          <li>Multiplique tudo por <Formula>1/det(A)</Formula>.</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Resolvido: Inversa de uma Matriz 2x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos encontrar a inversa da matriz:
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
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 1: calcular o determinante
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              det(A) = (2 × 3) - (5 × 1) = 6 - 5 = 1
            </p>
            <p className="mt-3 leading-relaxed">
              Como o determinante é diferente de zero, a inversa existe.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 2: montar a matriz ajustada
            </h3>
            <p className="mb-3 leading-relaxed">
              Trocamos <Formula>2</Formula> com <Formula>3</Formula> e mudamos o
              sinal de <Formula>5</Formula> e <Formula>1</Formula>.
            </p>
            <MatrixDisplay
              matrix={[
                [3, -5],
                [-1, 2],
              ]}
            />
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 3: multiplicar por 1/determinante
            </h3>
            <SymbolicMatrix
              label="A⁻¹ = 1/1 ×"
              matrix={[["3", "-5"], ["-1", "2"]]}
              className="mx-auto"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Resultado Final</h3>
        <MatrixDisplay
          matrix={[
            [3, -5],
            [-1, 2],
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Escalonamento para Matrizes Maiores
        </h2>
        <p className="mb-4 leading-relaxed">
          Para matrizes 3x3 ou maiores, o método mais comum é montar a matriz
          aumentada <Formula>[A | I]</Formula>. Depois, usamos operações de linha
          para transformar o lado esquerdo em identidade.
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg mb-4">
          <Formula>[A | I] → [I | A⁻¹]</Formula>
        </div>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Escreva a matriz original à esquerda.</li>
          <li>Coloque a matriz identidade do mesmo tamanho à direita.</li>
          <li>Faça operações de linha até a esquerda virar identidade.</li>
          <li>Leia a inversa no lado direito.</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Erros Comuns</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Tentar inverter matriz não quadrada:</strong> matriz 2x3 ou
            3x2 não tem inversa comum.
          </li>
          <li>
            <strong>Esquecer de verificar o determinante:</strong> se ele for
            zero, a inversa não existe.
          </li>
          <li>
            <strong>Aplicar a fórmula 2x2 em matriz 3x3:</strong> a fórmula
            rápida só vale para 2x2.
          </li>
          <li>
            <strong>Trocar a ordem na multiplicação:</strong> em matrizes, a
            ordem importa.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Onde a Matriz Inversa Aparece?
        </h2>
        <p className="mb-4 leading-relaxed">
          A inversa aparece quando precisamos desfazer uma transformação ou
          isolar variáveis. Em sistemas lineares, se <Formula>A × x = b</Formula>,
          então podemos escrever <Formula>x = A⁻¹ × b</Formula>, desde que a
          inversa exista.
        </p>
        <TipBox>
          Na prática, a inversa é útil em sistemas lineares, computação gráfica,
          análise de dados, engenharia e modelos que usam transformações
          matriciais.
        </TipBox>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        secondaryTo="/tutorial/determinante-de-matrizes"
        secondaryLabel="Ver determinantes"
      >
        Escolha a opção “Inversa de A”, preencha uma matriz quadrada e confira
          o resultado. Se a matriz não tiver inversa, a calculadora avisa o
          motivo.
      </TutorialCTA>
    </div>
  );
}

export default InverseMatrixTutorial;
