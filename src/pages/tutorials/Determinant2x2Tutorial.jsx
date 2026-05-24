import { Link } from "react-router-dom";
import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import SymbolicMatrix from "../../components/tutorial/SymbolicMatrix";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

const tutorialLinkClass =
  "font-bold text-blue-600 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300";

function Determinant2x2Tutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 dark:text-slate-200">
      <p className="mb-6 text-lg leading-relaxed">
        O determinante 2x2 é o cálculo mais rápido para medir o comportamento
        de uma matriz quadrada de ordem 2. Aqui você vai aprender a fórmula,
        entender as diagonais e resolver um exemplo completo antes de testar na
        calculadora.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold mb-3">
          Fórmula do Determinante 2x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Para a matriz 2 por 2 abaixo, chamamos cada posição de{" "}
          <Formula>a</Formula>, <Formula>b</Formula>, <Formula>c</Formula> e{" "}
          <Formula>d</Formula>:
        </p>
        <SymbolicMatrix
          label="A ="
          matrix={[["a", "b"], ["c", "d"]]}
          className="mb-4"
        />
        <p className="mb-4 leading-relaxed">o determinante é:</p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg dark:border-slate-700 dark:bg-slate-950">
          <Formula>det(A) = (a × d) - (b × c)</Formula>
        </div>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed dark:text-slate-300">
          O produto <Formula>a × d</Formula> vem da diagonal principal. O produto{" "}
          <Formula>b × c</Formula> vem da diagonal secundária.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: Principal Menos Secundária
        </h2>
        <p className="mb-4 leading-relaxed">
          Imagine duas multiplicações cruzadas. A diagonal principal desce da
          esquerda para a direita: <Formula>a × d</Formula>. A diagonal
          secundária desce da direita para a esquerda: <Formula>b × c</Formula>.
          O determinante compara esses dois produtos.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> multiplique a diagonal principal,
          multiplique a diagonal secundária e subtraia:{" "}
          <Formula>principal - secundária</Formula>.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:border-slate-800 dark:bg-slate-900">
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
          highlight={{
            cells: [
              [0, 0],
              [1, 1],
            ],
            secondaryCells: [
              [0, 1],
              [1, 0],
            ],
          }}
        />

        <UseExampleButton
          operation="determinanteA"
          matrixA={[
            [4, 7],
            [2, 6],
          ]}
        />

        <div className="mt-6 space-y-5">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-950">
            <h3 className="text-lg font-semibold mb-2">
              Passo 1: identificar a, b, c e d
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              a = 4, b = 7, c = 2, d = 6
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-950">
            <h3 className="text-lg font-semibold mb-2">
              Passo 2: substituir na fórmula
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              det(A) = (4 × 6) - (7 × 2)
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-950">
            <h3 className="text-lg font-semibold mb-2">
              Passo 3: calcular as diagonais
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              diagonal principal: 4 × 6 = 24
              <br />
              diagonal secundária: 7 × 2 = 14
            </p>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
            <h3 className="text-lg font-semibold mb-2">
              Passo 4: subtrair e concluir
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              det(A) = 24 - 14 = 10
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold mb-3">
          Cuidado com Números Negativos
        </h2>
        <p className="mb-4 leading-relaxed">
          A fórmula do determinante 2x2 não muda quando aparecem sinais
          negativos. Primeiro calcule cada produto; só depois faça a subtração.
        </p>

        <MatrixDisplay
          matrix={[
            [3, -5],
            [2, 4],
          ]}
        />

        <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-950">
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

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold mb-3">
          Para Que Serve o Determinante 2x2?
        </h2>
        <p className="mb-4 leading-relaxed">
          O determinante 2x2 aparece sempre que uma matriz pequena precisa dizer
          se há solução única, inversa ou alguma transformação geométrica sem
          colapso.
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            Em{" "}
            <Link to="/tutorial/matriz-inversa" className={tutorialLinkClass}>
              matriz inversa
            </Link>
            , <Formula>det(A) ≠ 0</Formula> é a condição para a inversa existir.
          </li>
          <li>
            Em{" "}
            <Link to="/tutorial/sistemas-lineares" className={tutorialLinkClass}>
              sistemas lineares
            </Link>
            , determinante diferente de zero indica solução única em sistemas
            2x2.
          </li>
          <li>
            Na{" "}
            <Link to="/tutorial/regra-de-cramer" className={tutorialLinkClass}>
              Regra de Cramer
            </Link>
            , ele é usado para calcular <Formula>x</Formula> e{" "}
            <Formula>y</Formula> por quocientes de determinantes.
          </li>
          <li>
            Em geometria, o valor absoluto do determinante 2x2 mede a área
            escalada por uma transformação no plano.
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed dark:text-slate-300">
          Para uma visão mais ampla, veja também{" "}
          <Link
            to="/tutorial/determinante-de-matrizes"
            className={tutorialLinkClass}
          >
            determinante de matrizes
          </Link>{" "}
          e{" "}
          <Link
            to="/tutorial/determinante-3x3-regra-de-sarrus"
            className={tutorialLinkClass}
          >
            determinante 3x3 pela Regra de Sarrus
          </Link>
          .
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold mb-3">
          Erros Comuns no Determinante 2x2
        </h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Inverter a ordem da subtração:</strong> fazer{" "}
            <Formula>bc - ad</Formula> troca o sinal do resultado.
          </li>
          <li>
            <strong>Esquecer o sinal negativo:</strong> a fórmula é uma
            diferença, não uma soma das diagonais.
          </li>
          <li>
            <strong>Confundir as diagonais:</strong> a principal é{" "}
            <Formula>a × d</Formula>; a secundária é <Formula>b × c</Formula>.
          </li>
          <li>
            <strong>Tentar usar Sarrus sem necessidade:</strong> a Regra de
            Sarrus é feita para matriz 3x3; em 2x2, a fórmula{" "}
            <Formula>ad - bc</Formula> é direta.
          </li>
          <li>
            <strong>Errar multiplicações com negativos:</strong> resolva cada
            produto antes de subtrair.
          </li>
        </ul>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        primaryLabel="Testar determinante 2x2"
        secondaryTo="/tutorial/regra-de-cramer"
        secondaryLabel="Avançar para Cramer"
      >
        Escolha "Determinante de A", preencha uma matriz 2x2 e compare o
        resultado da calculadora com a fórmula <Formula>ad - bc</Formula>.
      </TutorialCTA>
    </div>
  );
}

export default Determinant2x2Tutorial;
