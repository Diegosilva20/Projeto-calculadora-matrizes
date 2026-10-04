import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function SarrusTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        A Regra de Sarrus é um método mnemônico e direto para calcular determinantes de matrizes de ordem 3 (3×3), estruturado na soma dos produtos das diagonais principais e subtração das secundárias.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Como funciona a Regra de Sarrus
        </h2>
        <p className="mb-4 leading-relaxed">
          Para calcular o determinante, repetem-se mentalmente (ou no papel) as duas primeiras colunas da matriz à sua direita. Multiplicam-se os termos das 3 diagonais descendentes e subtraem-se os produtos das 3 diagonais ascendentes.
        </p>
        <TipBox>
          Regra geral: (soma das 3 diagonais principais) − (soma das 3 diagonais secundárias).
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Escopo de aplicação
        </h2>
        <p className="mb-4 leading-relaxed">
          A Regra de Sarrus aplica-se <strong>exclusivamente a matrizes 3×3</strong>. Ela não é matematicamente válida para matrizes 4×4 ou de ordens superiores, onde se deve empregar o Teorema de Laplace ou escalonamento.
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg overflow-x-auto">
          <Formula>A \text{ de ordem } 3 \times 3</Formula> → aplicação válida
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Passo a passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Confirme que a matriz possui dimensão 3×3.</li>
          <li>Calcule o produto de cada uma das três diagonais principais (descendentes).</li>
          <li>Some os três produtos obtidos.</li>
          <li>Calcule o produto de cada uma das três diagonais secundárias (ascendentes).</li>
          <li>Some os três produtos secundários.</li>
          <li>Subtraia a soma secundária da soma principal.</li>
        </ol>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo resolvido
        </h2>
        <p className="mb-4 leading-relaxed">
          Calcule o determinante da matriz <Formula>A</Formula>:
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
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              1. Diagonais principais
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (1 × 4 × 6) + (2 × 5 × 1) + (3 × 0 × 0) = 24 + 10 + 0 = 34
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              2. Diagonais secundárias
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (3 × 4 × 1) + (1 × 5 × 0) + (2 × 0 × 6) = 12 + 0 + 0 = 12
            </p>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <h3 className="text-lg font-semibold mb-2">3. Resultado final</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              det(A) = 34 - 12 = 22
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Cuidados frequentes</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Não generalizar para 4x4:</strong> tentar aplicar o esquema de Sarrus em matrizes 4×4 ignora 16 dos 24 termos da definição formal do determinante, produzindo respostas incorretas.
          </li>
          <li>
            <strong>Jogo de sinais com zeros e números negativos:</strong> mantenha os parênteses de cada termo para não cometer erros em produtos com sinais trocados.
          </li>
        </ul>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/determinante-de-matrizes"
        secondaryLabel="Ver determinantes gerais"
      >
        Insira matrizes 3×3 na calculadora para conferir a separação das diagonais e o resultado do determinante no passo a passo.
      </TutorialCTA>
    </div>
  );
}

export default SarrusTutorial;
