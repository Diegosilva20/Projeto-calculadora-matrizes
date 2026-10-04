import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";

function WhatIsMatrixTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        Uma matriz é uma tabela de números dispostos em linhas e colunas. Ela serve para representar dados numéricos estruturados, resolver sistemas de equações e aplicar transformações no espaço.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          O que é uma matriz
        </h2>
        <p className="mb-4 leading-relaxed">
          Cada valor armazenado na matriz é chamado de elemento. Para localizar qualquer elemento com exatidão, basta indicar o número da linha e o número da coluna em que ele está posicionado.
        </p>
        <TipBox>
          Linhas são lidas na horizontal (da esquerda para a direita) e colunas na vertical (de cima para baixo).
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Linhas, colunas e ordem
        </h2>
        <p className="mb-4 leading-relaxed">
          A ordem ou dimensão de uma matriz indica quantas linhas e quantas colunas ela tem. Uma matriz com 2 linhas e 3 colunas é dita de ordem 2×3 (lê-se "dois por três").
        </p>

        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 mb-4">
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
            <strong>Exemplo:</strong> Matriz 2×2 (2 linhas e 2 colunas)
          </p>
          <MatrixDisplay
            matrix={[
              [3, 5],
              [1, 4],
            ]}
          />
        </div>

        <div className="space-y-3 mb-4">
          <div className="border border-accent/30 bg-blue-50 p-3 rounded">
            <p className="text-sm font-semibold text-blue-900">
              Primeira linha: [3, 5]
            </p>
          </div>
          <div className="border border-green-200 bg-green-50 p-3 rounded">
            <p className="text-sm font-semibold text-green-900">
              Primeira coluna: [3, 1]
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Notação e índices
        </h2>
        <p className="mb-4 leading-relaxed">
          Para referenciar um elemento específico, usamos a notação genérica:
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg mb-4">
          <Formula>A(i, j)</Formula> ou <Formula>a_(ij)</Formula>
        </div>
        <p className="mb-4 leading-relaxed">
          Onde <Formula>i</Formula> representa a linha e <Formula>j</Formula> representa a coluna.
        </p>

        <div className="space-y-3">
          <div className="border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4 rounded">
            <p className="font-semibold mb-2">Exemplo de índices:</p>
            <MatrixDisplay
              matrix={[
                [2, 7],
                [9, 5],
              ]}
            />
            <p className="text-sm font-mono mt-3">
              A(1,1) = 2 (linha 1, coluna 1)
              <br />
              A(1,2) = 7 (linha 1, coluna 2)
              <br />
              A(2,1) = 9 (linha 2, coluna 1)
              <br />
              A(2,2) = 5 (linha 2, coluna 2)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Exemplo prático: tabela de notas
        </h2>
        <p className="mb-4 leading-relaxed">
          Considere as notas de 3 estudantes em 2 matérias:
        </p>

        <table className="w-full mb-4 text-center border-collapse">
          <thead>
            <tr className="bg-blue-50">
              <th className="border border-gray-300 p-2">Aluno</th>
              <th className="border border-gray-300 p-2">Matemática</th>
              <th className="border border-gray-300 p-2">Português</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">João</td>
              <td className="border border-gray-300 p-2">8</td>
              <td className="border border-gray-300 p-2">7</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">Maria</td>
              <td className="border border-gray-300 p-2">9</td>
              <td className="border border-gray-300 p-2">9</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">Pedro</td>
              <td className="border border-gray-300 p-2">6</td>
              <td className="border border-gray-300 p-2">8</td>
            </tr>
          </tbody>
        </table>

        <p className="mb-4 leading-relaxed">
          Ao extrair apenas os dados numéricos, obtemos uma matriz 3×2:
        </p>

        <MatrixDisplay
          matrix={[
            [8, 7],
            [9, 9],
            [6, 8],
          ]}
        />

        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          A matriz tem 3 linhas (uma por estudante) e 2 colunas (uma por matéria).
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Dimensão e tipos de matrizes
        </h2>
        <p className="mb-4 leading-relaxed">
          A ordem é sempre indicada no formato <strong>linhas × colunas</strong>:
        </p>

        <div className="space-y-3 mb-4">
          <div className="border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-3 rounded">
            <p className="text-sm font-mono">
              Matriz 2×3: 2 linhas e 3 colunas (6 elementos no total)
            </p>
          </div>
          <div className="border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-3 rounded">
            <p className="text-sm font-mono">
              Matriz 4×1: 4 linhas e 1 coluna (matriz coluna)
            </p>
          </div>
          <div className="border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-3 rounded">
            <p className="text-sm font-mono">
              Matriz 1×5: 1 linha e 5 colunas (matriz linha)
            </p>
          </div>
          <div className="border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-3 rounded">
            <p className="text-sm font-mono">
              Matriz 3×3: 3 linhas e 3 colunas (matriz quadrada)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Aplicações práticas
        </h2>
        <p className="mb-4 leading-relaxed">
          As matrizes são utilizadas em diversas áreas da ciência e da tecnologia:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Sistemas lineares:</strong> organização e resolução de equações simultâneas em engenharia e economia.
          </li>
          <li>
            <strong>Computação gráfica:</strong> rotação, translação e escala de objetos em modelos 2D e 3D.
          </li>
          <li>
            <strong>Processamento de imagens:</strong> manipulação de pixels e canais de cor em formato de grade matricial.
          </li>
          <li>
            <strong>Ciência de dados e machine learning:</strong> operações com tensores e vetores de características.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Próximos passos
        </h2>
        <p className="mb-4 leading-relaxed">
          Com a estrutura básica compreendida, o passo seguinte é aprender as operações aritméticas elementares, começando pela soma de matrizes de mesma ordem.
        </p>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/soma-de-matrizes"
        secondaryLabel="Próximo: Soma de Matrizes"
      >
        Configure as dimensões, insira os valores desejados e veja como a calculadora organiza os dados e executa cada operação passo a passo.
      </TutorialCTA>
    </div>
  );
}

export default WhatIsMatrixTutorial;
