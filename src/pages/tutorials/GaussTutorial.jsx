import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function GaussEscalonamentoTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        A eliminação gaussiana (ou escalonamento) transforma uma matriz em uma forma triangular superior por meio de operações elementares nas linhas. É o método mais eficiente e geral para resolver sistemas lineares e determinar o posto de uma matriz.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Como funciona a eliminação de Gauss
        </h2>
        <p className="mb-4 leading-relaxed">
          O algoritmo escolhe um elemento não nulo (o pivô) em cada coluna e aplica combinações lineares entre linhas para anular todos os elementos posicionados abaixo desse pivô.
        </p>
        <TipBox>
          Pivô é o primeiro termo não nulo de uma linha usado como referência para zerar as entradas da mesma coluna nas linhas inferiores.
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Operações elementares de linha
        </h2>
        <p className="mb-4 leading-relaxed">
          As seguintes transformações preservam o conjunto-solução de um sistema linear:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Permutação de linhas (<Formula>L_i \leftrightarrow L_j</Formula>):</strong> troca de posição entre duas linhas (necessária quando o pivô atual for zero).
          </li>
          <li>
            <strong>Multiplicação por escalar não nulo (<Formula>L_i \leftarrow k \cdot L_i</Formula>):</strong> escala todos os termos da linha por uma constante <Formula>k \neq 0</Formula>.
          </li>
          <li>
            <strong>Substituição linear (<Formula>L_i \leftarrow L_i + k \cdot L_j</Formula>):</strong> soma a uma linha o múltiplo de outra linha.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Passo a passo do escalonamento
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Identifique o primeiro pivô não nulo na primeira coluna. Se for zero, permute com uma linha inferior.</li>
          <li>Use operações do tipo <Formula>L_i \leftarrow L_i - m \cdot L_1</Formula> para zerar todos os elementos abaixo do pivô.</li>
          <li>Avance para a próxima linha e coluna, repetindo o procedimento para os pivôs subsequentes.</li>
          <li>Finalizado o formato triangular superior, aplique a substituição retroativa (de baixo para cima) para encontrar as variáveis.</li>
        </ol>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo resolvido: sistema 3x3
        </h2>
        <p className="mb-4 leading-relaxed">
          Considere o sistema linear de três equações e três incógnitas:
        </p>
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded mb-5 font-mono leading-8">
          2x + 3y - z = 5
          <br />
          4x + 4y - 3z = 3
          <br />
          -2x + 3y + 2z = 7
        </div>

        <p className="mb-3 leading-relaxed">Matriz aumentada associada <Formula>[A | b]</Formula>:</p>
        <MatrixDisplay
          matrix={[
            [2, 3, -1, 5],
            [4, 4, -3, 3],
            [-2, 3, 2, 7],
          ]}
        />
        <UseExampleButton
          operation="gauss"
          matrixA={[
            [2, 3, -1, 5],
            [4, 4, -3, 3],
            [-2, 3, 2, 7],
          ]}
        />

        <div className="mt-6 space-y-5">
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              1. Eliminação na coluna 1 (Pivô = 2 na linha 1)
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              L2 ← L2 - 2L1
              <br />
              L3 ← L3 + L1
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Resultado parcial
            </h3>
            <MatrixDisplay
              matrix={[
                [2, 3, -1, 5],
                [0, -2, -1, -7],
                [0, 6, 1, 12],
              ]}
            />
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              2. Eliminação na coluna 2 (Pivô = -2 na linha 2)
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              L3 ← L3 + 3L2
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Matriz na forma escalonada
            </h3>
            <MatrixDisplay
              matrix={[
                [2, 3, -1, 5],
                [0, -2, -1, -7],
                [0, 0, -2, -9],
              ]}
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Substituição retroativa
        </h2>
        <p className="mb-4 leading-relaxed">
          Com o sistema triangularizado, calculam-se as incógnitas de baixo para cima:
        </p>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>
            Linha 3: <Formula>-2z = -9 \implies z = 9/2 = 4.5</Formula>.
          </li>
          <li>
            Linha 2: <Formula>-2y - z = -7 \implies -2y - 4.5 = -7 \implies y = 5/4 = 1.25</Formula>.
          </li>
          <li>
            Linha 1: <Formula>2x + 3(1.25) - 4.5 = 5 \implies 2x = 5.75 \implies x = 23/8 = 2.875</Formula>.
          </li>
        </ol>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Cuidados frequentes</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Operar sobre a linha completa:</strong> a transformação deve ser calculada em todas as entradas da linha, incluindo o termo independente da matriz aumentada.
          </li>
          <li>
            <strong>Pivô nulo:</strong> se a entrada do pivô for zero, permute a linha com qualquer linha abaixo que possua valor diferente de zero naquela coluna.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Aplicações práticas
        </h2>
        <p className="mb-4 leading-relaxed">
          A eliminação gaussiana é o núcleo de resolvedores numéricos em engenharia estrutural (método dos elementos finitos), análise de circuitos elétricos por nós e malhas e cálculo de posto de matrizes.
        </p>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/sistemas-lineares"
        secondaryLabel="Ver sistemas lineares"
      >
        Selecione a operação “Eliminação de Gauss”, informe os coeficientes e acompanhe as operações elementares geradas linha por linha.
      </TutorialCTA>
    </div>
  );
}

export default GaussEscalonamentoTutorial;
