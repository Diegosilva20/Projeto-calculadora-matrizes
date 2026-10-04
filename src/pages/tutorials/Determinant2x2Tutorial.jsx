import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import SymbolicMatrix from "../../components/tutorial/SymbolicMatrix";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function Determinant2x2Tutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        O cálculo do determinante em matrizes 2×2 é a base para o estudo de invertibilidade, solução de sistemas lineares pela Regra de Cramer e transformações de área no plano cartesiano.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Como calcular o determinante 2x2
        </h2>
        <p className="mb-4 leading-relaxed">
          O determinante de uma matriz de ordem 2 é obtido pela diferença entre o produto dos elementos da diagonal principal e o produto dos elementos da diagonal secundária.
        </p>
        <TipBox>
          Fórmula mnemônica: (diagonal principal) − (diagonal secundária).
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Fórmula algébrica
        </h2>
        <p className="mb-4 leading-relaxed">
          Dada a matriz genérica <Formula>A</Formula>:
        </p>
        <SymbolicMatrix
          label="A ="
          matrix={[["a", "b"], ["c", "d"]]}
          className="mb-4"
        />
        <p className="mb-4 leading-relaxed">
          O determinante é expresso por:
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg overflow-x-auto">
          <Formula>det(A) = (a × d) - (b × c)</Formula>
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          O termo <Formula>a × d</Formula> corresponde à diagonal principal (descendente da esquerda para a direita) e <Formula>b × c</Formula> à diagonal secundária (descendente da direita para a esquerda).
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo resolvido passo a passo
        </h2>
        <p className="mb-4 leading-relaxed">
          Calcule o determinante da matriz:
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
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 1: Identificar os coeficientes
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              a = 4, b = 7, c = 2, d = 6
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 2: Multiplicar as diagonais
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              Diagonal principal: 4 × 6 = 24
              <br />
              Diagonal secundária: 7 × 2 = 14
            </p>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 3: Subtrair os produtos
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              det(A) = 24 - 14 = 10
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Atenção com termos negativos
        </h2>
        <p className="mb-4 leading-relaxed">
          Ao multiplicar elementos com sinais negativos, conserve os parênteses para evitar erros de sinal na subtração final:
        </p>

        <MatrixDisplay
          matrix={[
            [3, -5],
            [2, 4],
          ]}
        />

        <div className="mt-5 rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
          <p className="font-mono text-sm sm:text-base break-words">
            det(A) = (3 × 4) - (-5 × 2)
            <br />
            det(A) = 12 - (-10)
            <br />
            det(A) = 12 + 10 = 22
          </p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Interpretação do resultado
        </h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>det(A) ≠ 0:</strong> a matriz é não singular (invertível) e o sistema associado tem solução única.
          </li>
          <li>
            <strong>det(A) = 0:</strong> a matriz é singular (não admite inversa) e as linhas/colunas são linearmente dependentes.
          </li>
          <li>
            <strong>Significado geométrico:</strong> o valor absoluto <Formula>|det(A)|</Formula> representa a área do paralelogramo gerado pelos vetores coluna da matriz no plano 2D.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Cuidados frequentes
        </h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Ordem da subtração:</strong> a fórmula exige subtrair a diagonal secundária da principal. Inverter essa ordem troca o sinal do determinante.
          </li>
          <li>
            <strong>Restrição de ordem:</strong> a fórmula direta <Formula>ad - bc</Formula> só se aplica a matrizes 2×2. Matrizes 3×3 exigem Sarrus ou Laplace.
          </li>
        </ul>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/determinante-de-matrizes"
        secondaryLabel="Ver determinantes gerais"
      >
        Insira matrizes 2×2 personalizadas na calculadora para validar seu cálculo passo a passo.
      </TutorialCTA>
    </div>
  );
}

export default Determinant2x2Tutorial;
