import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function LinearSystemsTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        Um sistema de equações lineares pode ser representado e resolvido matricialmente. A representação por matriz aumentada sintetiza os coeficientes e os termos constantes, permitindo encontrar a solução do sistema de maneira algorítmica por eliminação gaussiana.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Representação matricial
        </h2>
        <p className="mb-4 leading-relaxed">
          Todo sistema linear pode ser escrito na forma compacta <Formula>A \cdot x = b</Formula>, onde <Formula>A</Formula> é a matriz dos coeficientes, <Formula>x</Formula> é o vetor coluna das incógnitas e <Formula>b</Formula> é o vetor dos termos independentes.
        </p>
        <TipBox>
          A matriz aumentada <Formula>[A | b]</Formula> junta a matriz de coeficientes e os termos independentes na última coluna, simplificando a aplicação de operações de linha.
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Montagem da matriz aumentada
        </h2>
        <p className="mb-4 leading-relaxed">
          Considere o sistema linear 2×2:
        </p>
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded mb-5 font-mono text-center leading-8">
          2x + y = 5
          <br />
          3x - 2y = 4
        </div>
        <p className="mb-4 leading-relaxed">
          Organizando as variáveis <Formula>x</Formula> na coluna 1, <Formula>y</Formula> na coluna 2 e as constantes na coluna 3, obtemos a matriz aumentada <Formula>[A | b]</Formula>:
        </p>
        <MatrixDisplay
          matrix={[
            [2, 1, 5],
            [3, -2, 4],
          ]}
        />
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Passo a passo da resolução
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Alinhe as equações garantindo a mesma ordem de incógnitas em todas as linhas.</li>
          <li>Construa a matriz aumentada <Formula>[A | b]</Formula>.</li>
          <li>Aplique a eliminação de Gauss para triangularizar o bloco de coeficientes.</li>
          <li>Utilize a substituição retroativa para determinar o valor numérico de cada variável.</li>
        </ol>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo resolvido: sistema 2x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos escalonar a matriz aumentada:
        </p>
        <MatrixDisplay
          matrix={[
            [2, 1, 5],
            [3, -2, 4],
          ]}
        />
        <UseExampleButton
          operation="gauss"
          matrixA={[
            [2, 1, 5],
            [3, -2, 4],
          ]}
        />

        <div className="mt-6 space-y-5">
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              1. Eliminação na coluna 1
            </h3>
            <p className="mb-3 leading-relaxed">
              Com o pivô 2 na linha 1, anulamos o elemento 3 da linha 2:
            </p>
            <p className="font-mono text-sm sm:text-base break-words">
              L2 ← L2 - (3/2)L1
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              2. Matriz escalonada
            </h3>
            <MatrixDisplay
              matrix={[
                [2, 1, 5],
                [0, -3.5, -3.5],
              ]}
            />
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              3. Substituição retroativa
            </h3>
            <p className="font-mono text-sm sm:text-base break-words mb-2">
              -3.5y = -3.5 \implies y = 1
            </p>
            <p className="font-mono text-sm sm:text-base break-words">
              2x + (1) = 5 \implies 2x = 4 \implies x = 2
            </p>
          </div>
        </div>

        <p className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center dark:bg-green-950/40 dark:border-green-800">
          <strong>Solução única:</strong> <Formula>x = 2</Formula> e <Formula>y = 1</Formula> (Conjunto solução <Formula>S = \{(2, 1)\}</Formula>).
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Classificação dos sistemas lineares
        </h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Sistema Possível e Determinado (SPD):</strong> possui uma única solução. O posto da matriz de coeficientes é igual ao posto da matriz aumentada e igual ao número de incógnitas (<Formula>posto(A) = posto(A|b) = n</Formula>).
          </li>
          <li>
            <strong>Sistema Possível e Indeterminado (SPI):</strong> possui infinitas soluções. Ocorre quando <Formula>posto(A) = posto(A|b) &lt; n</Formula>, gerando graus de liberdade (variáveis livres).
          </li>
          <li>
            <strong>Sistema Impossível (SI):</strong> não admite solução. Identificado quando surge uma linha do tipo <Formula>0 = k</Formula> (com <Formula>k \neq 0</Formula>), caracterizando <Formula>posto(A) &lt; posto(A|b)</Formula>.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Cuidados frequentes</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Alinhamento de variáveis:</strong> mantenha estritamente a mesma incógnita em cada coluna antes de preencher a matriz.
          </li>
          <li>
            <strong>Coeficiente implícito 1 ou zero:</strong> em termos como <Formula>x</Formula> o coeficiente é 1; caso a variável esteja ausente na equação, preencha com 0.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Aplicações práticas
        </h2>
        <p className="mb-4 leading-relaxed">
          Sistemas lineares modelam balanços de massa e energia em engenharia química, cálculo de correntes em malhas elétricas (Leis de Kirchhoff), equilíbrio econômico de insumo-produto (modelo de Leontief) e regressão linear multidimensional.
        </p>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/escalonamento-gauss"
        secondaryLabel="Ver escalonamento"
      >
        Preencha a matriz aumentada com as equações do seu problema e selecione “Eliminação de Gauss” para acompanhar a solução completa.
      </TutorialCTA>
    </div>
  );
}

export default LinearSystemsTutorial;
