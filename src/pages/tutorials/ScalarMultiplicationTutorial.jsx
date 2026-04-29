import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function ScalarMultiplicationTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        Multiplicar uma matriz por escalar significa multiplicar todos os seus
        elementos por um mesmo número. Esse número é chamado de escalar porque
        ele aumenta, diminui ou muda o sinal da matriz inteira de uma vez.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: Aplicar o Mesmo Fator em Tudo
        </h2>
        <p className="mb-4 leading-relaxed">
          Imagine uma tabela de preços. Se todos os valores precisam triplicar,
          não calculamos uma regra diferente para cada célula: multiplicamos
          todos os números pelo mesmo fator. Na matriz, acontece a mesma coisa.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> o escalar multiplica cada elemento da
          matriz, mantendo o mesmo número de linhas e colunas.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Regra Principal</h2>
        <p className="mb-4 leading-relaxed">
          Se <Formula>k</Formula> é um número e <Formula>A</Formula> é uma
          matriz, então <Formula>kA</Formula> é a matriz formada multiplicando
          cada elemento de A por <Formula>k</Formula>.
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <Formula>C(i, j) = k x A(i, j)</Formula>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Multiplicar por Escalar Passo a Passo
        </h2>
        <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
          <li>Identifique o escalar, ou seja, o número que multiplica a matriz.</li>
          <li>Pegue o primeiro elemento da matriz.</li>
          <li>Multiplique esse elemento pelo escalar.</li>
          <li>Escreva o resultado na mesma posição.</li>
          <li>Repita até multiplicar todos os elementos.</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplo Resolvido: 3 Vezes uma Matriz 2x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Vamos calcular <Formula>3A</Formula>. O escalar é 3, então todos os
          elementos da matriz A serão multiplicados por 3.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-2">Matriz A</p>
            <MatrixDisplay
              matrix={[
                [2, -1],
                [0, 4],
              ]}
            />
          </div>
          <div>
            <p className="font-semibold mb-2">Resultado 3A</p>
            <MatrixDisplay
              matrix={[
                [6, -3],
                [0, 12],
              ]}
            />
          </div>
        </div>

        <UseExampleButton
          operation="escalar"
          scalar={3}
          matrixA={[
            [2, -1],
            [0, 4],
          ]}
        />

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">Primeira linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              3 x 2 = 6 e 3 x (-1) = -3
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-2">Segunda linha</h3>
            <p className="font-mono text-sm sm:text-base break-words">
              3 x 0 = 0 e 3 x 4 = 12
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Erros Comuns</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Multiplicar só uma linha:</strong> o escalar deve multiplicar
            todos os elementos da matriz.
          </li>
          <li>
            <strong>Mudar o tamanho da matriz:</strong> multiplicar por escalar
            não altera linhas nem colunas.
          </li>
          <li>
            <strong>Errar sinais:</strong> um escalar negativo troca o sinal de
            todos os elementos não nulos.
          </li>
          <li>
            <strong>Confundir com determinante:</strong> multiplicar uma matriz
            por escalar não é a mesma coisa que calcular seu determinante.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Onde a Multiplicação por Escalar Aparece?
        </h2>
        <p className="mb-4 leading-relaxed">
          Essa operação aparece quando todos os valores de uma matriz precisam
          ser redimensionados pelo mesmo fator. Ela é comum em gráficos,
          transformações geométricas, ajustes de tabelas, física e modelos que
          usam matrizes para representar quantidades.
        </p>
        <TipBox>
          Se o escalar é maior que 1, os valores aumentam. Se está entre 0 e 1,
          os valores diminuem. Se é negativo, os sinais mudam.
        </TipBox>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        secondaryTo="/tutorial/soma-de-matrizes"
        secondaryLabel="Ver soma de matrizes"
      >
        Escolha “Multiplicação por Escalar”, digite o número multiplicador e
        veja cada elemento sendo recalculado no passo a passo.
      </TutorialCTA>
    </div>
  );
}

export default ScalarMultiplicationTutorial;
