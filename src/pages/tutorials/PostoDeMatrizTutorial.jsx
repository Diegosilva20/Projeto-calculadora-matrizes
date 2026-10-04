import { Link } from "react-router-dom";
import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";

function PostoDeMatrizTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white dark:text-slate-100">
      <div className="mb-8">
        <p className="mb-6 text-lg leading-relaxed">
          O posto (ou rank) de uma matriz quantifica o número máximo de linhas ou colunas linearmente independentes. O método computacional padrão para determiná-lo consiste em escalonar a matriz até a forma escalonada e contar as linhas não nulas.
        </p>
        <TipBox>
          Definição: o posto de uma matriz equivale exatamente ao número de linhas não inteiramente nulas após o escalonamento gaussiano completo.
        </TipBox>
      </div>

      <section className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20 dark:bg-slate-900 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-3">Linha não nula vs linha nula</h2>
        <p className="mb-4 leading-relaxed">
          Uma linha é classificada como não nula se contiver ao menos uma entrada diferente de zero. Linhas compostas exclusivamente por zeros (<Formula>[0, 0, \dots, 0]</Formula>) são nulas e não contribuem para o posto.
        </p>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20 dark:bg-slate-900 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-3">Exemplo resolvido: matriz 3x3</h2>
        <p className="mb-4 leading-relaxed">
          Determine o posto da matriz <Formula>A</Formula>:
        </p>
        <div className="mb-6">
          <MatrixDisplay
            matrix={[[1, 2, 3], [2, 4, 6], [1, 1, 1]]}
          />
        </div>
        <p className="mb-4 leading-relaxed">
          Note que a linha 2 é o dobro exato da linha 1 (<Formula>L_2 = 2 L_1</Formula>), evidenciando dependência linear prévia.
        </p>

        <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 p-4 mb-6 dark:bg-slate-950 dark:border-slate-700">
          <h3 className="text-xl font-semibold mb-3">1. Eliminação na primeira coluna</h3>
          <p className="font-mono text-sm sm:text-base break-words">
            L2 ← L2 - 2 × L1<br />
            L3 ← L3 - 1 × L1
          </p>
        </div>

        <div className="mb-6">
          <MatrixDisplay
            matrix={[[1, 2, 3], [0, 0, 0], [0, -1, -2]]}
          />
        </div>

        <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 p-4 mb-6 dark:bg-slate-950 dark:border-slate-700">
          <h3 className="text-xl font-semibold mb-3">2. Permutação de linhas (L2 ↔ L3)</h3>
          <p className="mb-3 leading-relaxed">
            Movemos a linha nula para a base da matriz:
          </p>
          <p className="font-mono text-sm sm:text-base break-words">
            L2 ↔ L3
          </p>
        </div>

        <div className="mb-6">
          <MatrixDisplay
            matrix={[[1, 2, 3], [0, -1, -2], [0, 0, 0]]}
          />
        </div>

        <TipBox>
          A matriz escalonada apresenta 2 linhas não nulas e 1 linha nula. Portanto, <Formula>\text{posto}(A) = 2</Formula>.
        </TipBox>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20 dark:bg-slate-900 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-3">Propriedades e limites dimensionais</h2>
        <p className="mb-4 leading-relaxed">
          Para qualquer matriz de dimensão <Formula>m \times n</Formula>:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            O posto nunca pode exceder o menor valor entre linhas e colunas: <Formula>\text{posto}(A) \le \min(m, n)</Formula>.
          </li>
          <li>
            <strong>Posto completo (matriz quadrada):</strong> se uma matriz <Formula>n \times n</Formula> tem <Formula>\text{posto}(A) = n</Formula>, ela é não singular, admite inversa e <Formula>\det(A) \neq 0</Formula>.
          </li>
          <li>
            <strong>Posto deficiente:</strong> se <Formula>\text{posto}(A) &lt; n</Formula>, a matriz quadrada é singular (<Formula>\det(A) = 0</Formula>) e não admite inversa.
          </li>
          <li>
            O posto por linhas é estritamente idêntico ao posto por colunas: <Formula>\text{posto}(A) = \text{posto}(A^T)</Formula>.
          </li>
        </ul>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20 dark:bg-slate-900 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-3">Relação com o Teorema de Rouché-Capelli</h2>
        <p className="mb-4 leading-relaxed">
          Na análise de sistemas lineares <Formula>Ax = b</Formula>:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>Se <Formula>\text{posto}(A) = \text{posto}(A|b) = n</Formula>: solução única (SPD).</li>
          <li>Se <Formula>\text{posto}(A) = \text{posto}(A|b) &lt; n</Formula>: infinitas soluções com <Formula>n - \text{posto}(A)</Formula> variáveis livres (SPI).</li>
          <li>Se <Formula>\text{posto}(A) &lt; \text{posto}(A|b)</Formula>: sistema inconsistente / impossível (SI).</li>
        </ul>
      </section>

      <TutorialCTA
        title="Pratique na calculadora"
        primaryTo="/"
        primaryLabel="Abrir calculadora de matrizes"
        secondaryTo="/tutorial/escalonamento-gauss"
        secondaryLabel="Ver escalonamento de Gauss"
      >
        Insira matrizes quadradas ou retangulares na calculadora para acompanhar o escalonamento e a contagem de pivôs que definem o posto.
      </TutorialCTA>
    </div>
  );
}

export default PostoDeMatrizTutorial;
