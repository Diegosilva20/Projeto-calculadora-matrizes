import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function SarrusTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        A Regra de Sarrus é um método prático para calcular determinantes de
        matrizes 3x3. Ela organiza o cálculo em diagonais: somamos os produtos
        das diagonais que descem e subtraímos os produtos das diagonais que
        sobem.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: Diagonais que Descendem e Sobem
        </h2>
        <p className="mb-4 leading-relaxed">
          Em uma matriz 3x3, cada diagonal escolhida pega três números. A Regra
          de Sarrus separa essas diagonais em dois grupos: as que descem da
          esquerda para a direita e as que sobem da esquerda para a direita.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> multiplique os três números de cada
          diagonal, some os três produtos principais e depois subtraia os três
          produtos secundários.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Quando Posso Usar a Regra de Sarrus?
        </h2>
        <p className="mb-4 leading-relaxed">
          A Regra de Sarrus só vale para matriz <strong>3x3</strong>. Ela não
          serve para matrizes 2x2, 4x4 ou maiores. Para outros tamanhos, usamos
          outros métodos, como fórmula 2x2, cofatores ou eliminação.
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <Formula>A é 3x3</Formula> → pode usar Sarrus
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Calcular Determinante 3x3 Passo a Passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Confira se a matriz tem 3 linhas e 3 colunas.</li>
          <li>Multiplique os elementos das três diagonais principais.</li>
          <li>Some os três produtos das diagonais principais.</li>
          <li>Multiplique os elementos das três diagonais secundárias.</li>
          <li>Some os três produtos das diagonais secundárias.</li>
          <li>Subtraia: soma principal menos soma secundária.</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Resolvido pela Regra de Sarrus
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos calcular o determinante da matriz A abaixo usando Sarrus.
        </p>

        <MatrixDisplay
          matrix={[
            [1, 2, 3],
            [0, 4, 5],
            [1, 0, 6],
          ]}
        />

        <UseExampleButton
          operation="determinanteA"
          matrixA={[
            [1, 2, 3],
            [0, 4, 5],
            [1, 0, 6],
          ]}
        />

        <div className="mt-6 space-y-5">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Diagonais principais
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (1 x 4 x 6) + (2 x 5 x 1) + (3 x 0 x 0)
            </p>
            <p className="mt-2 font-mono text-sm sm:text-base break-words">
              24 + 10 + 0 = 34
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Diagonais secundárias
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (3 x 4 x 1) + (1 x 5 x 0) + (2 x 0 x 6)
            </p>
            <p className="mt-2 font-mono text-sm sm:text-base break-words">
              12 + 0 + 0 = 12
            </p>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <h3 className="text-lg font-semibold mb-2">Resultado</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              det(A) = 34 - 12 = 22
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Erros Comuns</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Usar Sarrus em matriz que não é 3x3:</strong> a regra é
            específica para determinantes de ordem 3.
          </li>
          <li>
            <strong>Esquecer a subtração:</strong> depois de somar as diagonais
            secundárias, esse valor deve ser subtraído.
          </li>
          <li>
            <strong>Trocar diagonais principais e secundárias:</strong> isso
            pode inverter o sinal do resultado.
          </li>
          <li>
            <strong>Perder sinais negativos:</strong> se algum elemento da
            diagonal for negativo, o produto inteiro pode mudar de sinal.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Por Que Sarrus é Útil?
        </h2>
        <p className="mb-4 leading-relaxed">
          A Regra de Sarrus é útil porque transforma o determinante 3x3 em uma
          sequência visual de multiplicações. Para estudantes iniciantes, ela é
          uma forma rápida de treinar sinais, diagonais e organização do cálculo.
        </p>
        <TipBox>
          Se o exercício pede determinante 3x3, Sarrus costuma ser o caminho
          mais direto. Se a matriz for maior, use outro método.
        </TipBox>
      </div>

      <TutorialCTA
        title="Confira na Calculadora"
        secondaryTo="/tutorial/determinante-de-matrizes"
        secondaryLabel="Ver determinantes"
      >
        Escolha “Determinante de A”, use uma matriz 3x3 e compare o resultado
        com as diagonais principais e secundárias do exemplo.
      </TutorialCTA>
    </div>
  );
}

export default SarrusTutorial;
