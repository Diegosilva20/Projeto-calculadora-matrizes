import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function GaussEscalonamentoTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        Escalonar uma matriz é transformar seus números em uma “escada” usando
        operações de linha. Essa forma facilita resolver sistemas lineares,
        identificar o tipo de solução e simplificar cálculos com matrizes.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: Criar uma Escada de Zeros
        </h2>
        <p className="mb-4 leading-relaxed">
          A ideia do método de Gauss é escolher um número principal, chamado
          pivô, e usar esse número para zerar os elementos abaixo dele. Repetindo
          isso coluna por coluna, a matriz fica em forma de escada.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> pivô é o número usado como referência.
          Abaixo de cada pivô, queremos criar zeros.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          As Operações Que Podemos Fazer
        </h2>
        <p className="mb-4 leading-relaxed">
          No escalonamento, usamos operações que não mudam a solução do sistema:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Trocar duas linhas:</strong> útil quando o pivô é zero.
          </li>
          <li>
            <strong>Multiplicar uma linha por número diferente de zero:</strong>{" "}
            ajuda a simplificar pivôs.
          </li>
          <li>
            <strong>Somar a uma linha um múltiplo de outra:</strong> é a operação
            mais usada para criar zeros.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Escalonar uma Matriz Passo a Passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Escolha o primeiro pivô, geralmente o primeiro número não nulo da primeira coluna.</li>
          <li>Use esse pivô para zerar os números abaixo dele.</li>
          <li>Passe para a próxima linha e próxima coluna.</li>
          <li>Escolha o novo pivô.</li>
          <li>Repita até formar uma escada de zeros.</li>
          <li>Se estiver resolvendo um sistema, faça substituição reversa.</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Resolvido: Escalonamento de um Sistema 3x3
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos resolver o sistema:
        </p>
        <div className="p-4 bg-gray-100 rounded mb-5 font-mono leading-8">
          2x + 3y - z = 5
          <br />
          4x + 4y - 3z = 3
          <br />
          -2x + 3y + 2z = 7
        </div>

        <p className="mb-3 leading-relaxed">A matriz aumentada é:</p>
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
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 1: usar o primeiro pivô
            </h3>
            <p className="mb-3 leading-relaxed">
              O primeiro pivô é <Formula>2</Formula>. Vamos zerar o{" "}
              <Formula>4</Formula> da segunda linha e o <Formula>-2</Formula> da
              terceira linha.
            </p>
            <p className="font-mono text-sm sm:text-base break-words">
              L2 ← L2 - 2L1
              <br />
              L3 ← L3 + L1
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
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

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 2: usar o segundo pivô
            </h3>
            <p className="mb-3 leading-relaxed">
              Agora o pivô é <Formula>-2</Formula>. Vamos zerar o{" "}
              <Formula>6</Formula> que está abaixo dele.
            </p>
            <p className="font-mono text-sm sm:text-base break-words">
              L3 ← L3 + 3L2
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Matriz escalonada
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

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Substituição Reversa
        </h2>
        <p className="mb-4 leading-relaxed">
          Depois que a matriz está em forma de escada, resolvemos de baixo para
          cima:
        </p>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>
            Da terceira linha: <Formula>-2z = -9 → z = 9/2</Formula>.
          </li>
          <li>
            Da segunda linha:{" "}
            <Formula>-2y - z = -7 → -2y - 9/2 = -7 → y = 5/4</Formula>.
          </li>
          <li>
            Da primeira linha:{" "}
            <Formula>2x + 3y - z = 5 → x = 23/8</Formula>.
          </li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          O Que a Calculadora Faz?
        </h2>
        <p className="mb-4 leading-relaxed">
          A calculadora aplica a Eliminação de Gauss: ela zera os elementos
          abaixo dos pivôs até chegar à forma escalonada. Depois, em sistemas
          lineares, você pode usar substituição reversa para encontrar as
          variáveis.
        </p>
        <TipBox>
          Em outras palavras: aqui o foco é escalonamento por Eliminação de
          Gauss, não a forma reduzida completa.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Erros Comuns</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Esquecer de aplicar a operação na linha inteira:</strong> a
            operação vale para todos os elementos da linha.
          </li>
          <li>
            <strong>Não trocar linha quando o pivô é zero:</strong> se possível,
            traga uma linha com pivô não nulo para cima.
          </li>
          <li>
            <strong>Perder sinais negativos:</strong> esse é o erro mais comum
            em escalonamento.
          </li>
          <li>
            <strong>Parar antes da substituição reversa:</strong> a matriz
            escalonada ainda precisa ser interpretada para achar as variáveis.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Onde o Escalonamento Aparece?
        </h2>
        <p className="mb-4 leading-relaxed">
          O escalonamento aparece em sistemas lineares, cálculo de posto,
          análise de dependência entre linhas, determinantes e métodos numéricos.
          Ele é uma das técnicas mais importantes para trabalhar com matrizes.
        </p>
        <TipBox>
          Quando uma matriz parece grande demais para resolver “de cabeça”, o
          escalonamento transforma o problema em passos repetitivos.
        </TipBox>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        secondaryTo="/tutorial/sistemas-lineares"
        secondaryLabel="Ver sistemas lineares"
      >
        Escolha “Eliminação de Gauss”, preencha a matriz e acompanhe cada
          operação de linha. Use os passos exibidos para treinar a leitura de
          pivôs, zeros e substituição reversa.
      </TutorialCTA>
    </div>
  );
}

export default GaussEscalonamentoTutorial;
