import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function LinearSystemsTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        Resolver um sistema linear significa encontrar valores que deixam todas
        as equações verdadeiras ao mesmo tempo. Com matrizes, esse processo fica
        mais organizado: você transforma as equações em uma tabela de números e
        resolve seguindo uma sequência de passos.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: Equações Viram uma Tabela
        </h2>
        <p className="mb-4 leading-relaxed">
          Em um sistema, cada equação tem coeficientes, variáveis e resultado. A
          matriz serve para guardar apenas os números importantes, sem repetir
          toda a escrita com <Formula>x</Formula>, <Formula>y</Formula> e sinais
          de igualdade a cada linha.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> a matriz de coeficientes guarda os
          números que multiplicam as variáveis. A matriz aumentada também guarda
          os resultados das equações na última coluna.
        </TipBox>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          Na calculadora, sistemas lineares continuam como um uso educacional do
          escalonamento: monte a matriz aumentada e escolha “Eliminação de
          Gauss”. Assim a ferramenta mostra as operações de linha sem criar uma
          operação separada para sistemas.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Montar a Matriz Aumentada
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos começar com um sistema simples:
        </p>
        <div className="p-4 bg-gray-100 rounded mb-5 font-mono text-center leading-8">
          2x + y = 5
          <br />
          3x - 2y = 4
        </div>
        <p className="mb-4 leading-relaxed">
          Como a ordem das variáveis é <Formula>x</Formula> e depois{" "}
          <Formula>y</Formula>, colocamos os coeficientes nessa mesma ordem. A
          última coluna recebe os resultados.
        </p>
        <MatrixDisplay
          matrix={[
            [2, 1, 5],
            [3, -2, 4],
          ]}
        />
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          Essa matriz representa <Formula>[A | b]</Formula>: a parte da esquerda
          contém os coeficientes e a última coluna contém os resultados.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Resolver Sistemas Lineares Passo a Passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Escreva todas as equações com as variáveis na mesma ordem.</li>
          <li>Monte a matriz aumentada com coeficientes e resultados.</li>
          <li>Escolha o primeiro pivô, normalmente o primeiro número da primeira linha.</li>
          <li>Use operações de linha para criar zeros abaixo do pivô.</li>
          <li>Repita o processo até a matriz ficar em forma de escada.</li>
          <li>Volte de baixo para cima para encontrar as variáveis.</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Resolvido: Sistema 2x2 por Escalonamento
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos resolver o sistema anterior. A matriz aumentada inicial é:
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
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 1: zerar o número abaixo do pivô
            </h3>
            <p className="mb-3 leading-relaxed">
              O pivô é o <Formula>2</Formula> da primeira linha. Queremos zerar
              o <Formula>3</Formula> que está abaixo dele. Uma forma direta é:
            </p>
            <p className="font-mono text-sm sm:text-base break-words">
              L2 ← L2 - (3/2)L1
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 2: escrever a nova matriz
            </h3>
            <MatrixDisplay
              matrix={[
                [2, 1, 5],
                [0, -3.5, -3.5],
              ]}
            />
            <p className="mt-3 leading-relaxed">
              Agora a segunda linha ficou mais simples: ela só tem{" "}
              <Formula>y</Formula>.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 3: resolver de baixo para cima
            </h3>
            <p className="font-mono text-sm sm:text-base break-words mb-2">
              -3,5y = -3,5 → y = 1
            </p>
            <p className="font-mono text-sm sm:text-base break-words">
              2x + 1 = 5 → 2x = 4 → x = 2
            </p>
          </div>
        </div>

        <p className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
          <strong>Resultado:</strong> <Formula>x = 2</Formula> e{" "}
          <Formula>y = 1</Formula>.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Saber o Tipo de Solução?
        </h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Uma solução:</strong> ao final, cada variável fica bem
            determinada.
          </li>
          <li>
            <strong>Infinitas soluções:</strong> aparece uma linha verdadeira,
            como <Formula>0 = 0</Formula>, e sobra pelo menos uma variável livre.
          </li>
          <li>
            <strong>Nenhuma solução:</strong> aparece uma contradição, como{" "}
            <Formula>0 = 5</Formula>.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Erros Comuns</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Mudar a ordem das variáveis:</strong> se a primeira coluna é
            de <Formula>x</Formula>, mantenha isso em todas as linhas.
          </li>
          <li>
            <strong>Esquecer coeficiente 1:</strong> em <Formula>x + y = 5</Formula>,
            o coeficiente de <Formula>x</Formula> é 1, não vazio.
          </li>
          <li>
            <strong>Perder sinais negativos:</strong> um sinal trocado muda toda
            a resposta.
          </li>
          <li>
            <strong>Não mexer na coluna dos resultados:</strong> toda operação
            feita na linha também vale para o último número da linha.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Onde Sistemas Lineares Aparecem?
        </h2>
        <p className="mb-4 leading-relaxed">
          Sistemas lineares aparecem quando várias condições precisam ser
          satisfeitas ao mesmo tempo: preços de produtos, mistura de substâncias,
          equilíbrio de forças, circuitos elétricos, economia, computação gráfica
          e ajuste de dados.
        </p>
        <TipBox>
          Se um problema tem várias incógnitas e várias informações conectadas,
          há uma boa chance de ele virar um sistema linear.
        </TipBox>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        secondaryTo="/tutorial/escalonamento-gauss"
        secondaryLabel="Ver escalonamento"
      >
        Monte a matriz aumentada do seu sistema, escolha “Eliminação de Gauss”
        e veja a matriz mudando passo a passo. Depois compare o resultado com a
        substituição de baixo para cima.
      </TutorialCTA>
    </div>
  );
}

export default LinearSystemsTutorial;
