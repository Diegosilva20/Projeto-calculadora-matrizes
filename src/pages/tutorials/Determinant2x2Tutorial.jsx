import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function Determinant2x2Tutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        O determinante 2x2 é um dos cálculos mais importantes para começar em
        matrizes. Ele aparece em exercícios de matriz inversa, sistemas lineares
        e em muitos testes para saber se uma matriz pode ser invertida.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Ideia: Multiplicar Cruzado
        </h2>
        <p className="mb-4 leading-relaxed">
          Em uma matriz 2x2, existem duas diagonais. A diagonal principal desce
          da esquerda para a direita. A diagonal secundária desce da direita
          para a esquerda. Para calcular o determinante, multiplicamos cada
          diagonal e fazemos a diferença entre esses dois produtos.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> multiplique a diagonal principal,
          multiplique a diagonal secundária e subtraia: principal menos
          secundária.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Fórmula do Determinante 2x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Para uma matriz 2x2:
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg mb-4">
          <Formula>A = [[a, b], [c, d]]</Formula>
        </div>
        <p className="mb-4 leading-relaxed">
          o determinante é:
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <Formula>det(A) = (a × d) - (b × c)</Formula>
        </div>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          O produto <Formula>a × d</Formula> vem da diagonal principal. O produto{" "}
          <Formula>b × c</Formula> vem da diagonal secundária.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Resolvido Passo a Passo
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos calcular o determinante da matriz:
        </p>

        <MatrixDisplay
          matrix={[
            [4, 7],
            [2, 6],
          ]}
        />

        <UseExampleButton
          operation="determinanteA"
          matrixA={[
            [4, 7],
            [2, 6],
          ]}
        />

        <div className="mt-6 space-y-5">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 1: identificar os valores
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              a = 4, b = 7, c = 2, d = 6
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 2: multiplicar as diagonais
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              diagonal principal: 4 × 6 = 24
              <br />
              diagonal secundária: 7 × 2 = 14
            </p>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 3: subtrair
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              det(A) = 24 - 14 = 10
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Cuidado com Sinais Negativos
        </h2>
        <p className="mb-4 leading-relaxed">
          O erro mais comum em determinante 2x2 acontece quando aparece número
          negativo. Lembre que a fórmula continua a mesma: primeiro calcule os
          produtos, depois faça a subtração.
        </p>

        <MatrixDisplay
          matrix={[
            [3, -5],
            [2, 4],
          ]}
        />

        <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="font-mono text-sm sm:text-base break-words">
            det(A) = (3 × 4) - (-5 × 2)
            <br />
            det(A) = 12 - (-10)
            <br />
            det(A) = 22
          </p>
        </div>

        <TipBox>
          Quando você subtrai um número negativo, vira soma. Por isso{" "}
          <Formula>12 - (-10)</Formula> dá <Formula>22</Formula>.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Para Que Serve o Determinante 2x2?
        </h2>
        <p className="mb-4 leading-relaxed">
          O resultado do determinante não é só uma conta isolada. Ele ajuda a
          responder perguntas importantes:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Se det(A) é diferente de zero:</strong> a matriz 2x2 tem
            inversa.
          </li>
          <li>
            <strong>Se det(A) é igual a zero:</strong> a matriz não tem inversa.
          </li>
          <li>
            <strong>Em sistemas lineares:</strong> determinante diferente de
            zero indica solução única para sistemas 2x2.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Erros Comuns
        </h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Somar as diagonais em vez de subtrair:</strong> a regra é
            principal menos secundária.
          </li>
          <li>
            <strong>Trocar a ordem da subtração:</strong> fazer secundária menos
            principal troca o sinal do resultado.
          </li>
          <li>
            <strong>Perder sinais negativos:</strong> calcule cada produto com
            calma antes de subtrair.
          </li>
          <li>
            <strong>Usar a fórmula em matriz que não é 2x2:</strong> essa regra
            rápida é específica para matrizes de ordem 2.
          </li>
        </ul>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        secondaryTo="/tutorial/determinante-de-matrizes"
        secondaryLabel="Ver determinantes"
      >
        Escolha “Determinante de A”, preencha uma matriz 2x2 e compare o
        resultado da calculadora com a fórmula principal menos secundária.
      </TutorialCTA>
    </div>
  );
}

export default Determinant2x2Tutorial;
