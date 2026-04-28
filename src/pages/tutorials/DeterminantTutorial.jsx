import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function DeterminantTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        O determinante é um número calculado a partir de uma matriz quadrada.
        Ele ajuda a responder perguntas importantes, como: essa matriz tem
        inversa? Um sistema linear tem solução única? Uma transformação altera
        área ou volume?
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: Um Número Que Resume a Matriz
        </h2>
        <p className="mb-4 leading-relaxed">
          Pense no determinante como um sinal de comportamento da matriz. Quando
          ele é diferente de zero, a matriz preserva informação suficiente para
          ser invertida. Quando ele é zero, algo “colapsa”: linhas ou colunas
          ficam dependentes, e a matriz perde inversibilidade.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> se <Formula>det(A) ≠ 0</Formula>, a
          matriz quadrada tem inversa. Se <Formula>det(A) = 0</Formula>, ela não
          tem inversa.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Antes de Calcular: A Matriz Precisa Ser Quadrada
        </h2>
        <p className="mb-4 leading-relaxed">
          Determinante só existe para matrizes quadradas, ou seja, matrizes com
          o mesmo número de linhas e colunas.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <h3 className="font-semibold text-green-900 mb-2">Pode calcular</h3>
            <p>2x2, 3x3, 4x4...</p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <h3 className="font-semibold text-red-900 mb-2">Não pode calcular</h3>
            <p>2x3, 3x2, 4x1...</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Calcular Determinante 2x2 Passo a Passo
        </h2>
        <p className="mb-4 leading-relaxed">
          Para uma matriz 2x2, a regra é: multiplique a diagonal principal,
          multiplique a diagonal secundária e subtraia.
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg mb-5">
          <Formula>det(A) = (a × d) - (b × c)</Formula>
        </div>
        <MatrixDisplay
          matrix={[
            [6, -3],
            [4, 2],
          ]}
        />
        <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="font-mono text-sm sm:text-base break-words">
            det(A) = (6 × 2) - (-3 × 4) = 12 - (-12) = 24
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Resolvido: Determinante 3x3 pela Regra de Sarrus
        </h2>
        <p className="mb-4 leading-relaxed">
          Para matrizes 3x3, um método comum é a Regra de Sarrus. Ela funciona
          somando os produtos das diagonais que descem e subtraindo os produtos
          das diagonais que sobem.
        </p>
        <MatrixDisplay
          matrix={[
            [1, 0, 2],
            [3, 1, 4],
            [2, 1, 0],
          ]}
        />
        <UseExampleButton
          operation="determinanteA"
          matrixA={[
            [1, 0, 2],
            [3, 1, 4],
            [2, 1, 0],
          ]}
        />

        <div className="mt-6 space-y-5">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 1: somar as diagonais principais
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (1 × 1 × 0) + (0 × 4 × 2) + (2 × 3 × 1) = 0 + 0 + 6 = 6
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 2: somar as diagonais secundárias
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (2 × 1 × 2) + (1 × 4 × 1) + (0 × 3 × 0) = 4 + 4 + 0 = 8
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 3: subtrair os resultados
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              det(A) = 6 - 8 = -2
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Métodos Para Matrizes Maiores
        </h2>
        <p className="mb-4 leading-relaxed">
          Para matrizes 4x4 ou maiores, Sarrus não deve ser usado. Os métodos
          mais comuns são expansão por cofatores e eliminação gaussiana.
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Expansão por cofatores:</strong> útil quando há muitos zeros
            em uma linha ou coluna.
          </li>
          <li>
            <strong>Eliminação gaussiana:</strong> transforma a matriz em
            triangular; depois, o determinante é o produto da diagonal principal,
            ajustando o sinal se houver troca de linhas.
          </li>
        </ul>
        <TipBox>
          Para iniciantes, domine primeiro 2x2 e 3x3. Depois avance para
          cofatores e eliminação com mais segurança.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Erros Comuns</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Calcular determinante de matriz não quadrada:</strong> não
            existe determinante para 2x3, 3x2 e formatos parecidos.
          </li>
          <li>
            <strong>Errar sinal negativo:</strong> em 2x2, subtrair um número
            negativo vira soma.
          </li>
          <li>
            <strong>Usar Sarrus fora de 3x3:</strong> a regra de Sarrus é para
            matrizes 3x3.
          </li>
          <li>
            <strong>Esquecer troca de linhas:</strong> cada troca de duas linhas
            muda o sinal do determinante.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Onde o Determinante Aparece?
        </h2>
        <p className="mb-4 leading-relaxed">
          O determinante aparece em matriz inversa, sistemas lineares, geometria,
          transformações, cálculo de áreas e volumes, autovalores e vários
          métodos numéricos.
        </p>
        <TipBox>
          Em muitos exercícios, calcular o determinante é o primeiro passo para
          descobrir se o problema terá solução única.
        </TipBox>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        secondaryTo="/tutorial/matriz-inversa"
        secondaryLabel="Ver matriz inversa"
      >
        Escolha “Determinante de A”, preencha uma matriz quadrada e confira o
          resultado. Use o tutorial para entender o que o número encontrado diz
          sobre a matriz.
      </TutorialCTA>
    </div>
  );
}

export default DeterminantTutorial;
