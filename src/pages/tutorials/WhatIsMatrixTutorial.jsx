import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";

function WhatIsMatrixTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        Uma matriz é uma forma de organizar números em linhas e colunas. Pense
        nela como uma tabela. Matrizes aparecem em todo lugar: em planilhas de
        notas, tabelas de dados, imagens digitais, gráficos 3D de videogames e
        até em inteligência artificial.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Ideia: Uma Tabela de Números
        </h2>
        <p className="mb-4 leading-relaxed">
          Matriz é só um jeito matemático de dizer "tabela com números
          organizados". Cada posição na tabela contém um número, e sabemos exatamente
          qual é sua localização dizendo qual linha e qual coluna.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> uma matriz é um retângulo de números
          organizados em linhas (na horizontal) e colunas (na vertical).
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Partes de uma Matriz: Linhas e Colunas
        </h2>
        <p className="mb-4 leading-relaxed">
          Toda matriz tem:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed mb-4">
          <li>
            <strong>Linhas:</strong> os números organizados na horizontal (começam no topo).
          </li>
          <li>
            <strong>Colunas:</strong> os números organizados na vertical (começam na esquerda).
          </li>
        </ul>
        <p className="mb-3 leading-relaxed">
          Se uma matriz tem <strong>2 linhas</strong> e <strong>3 colunas</strong>,
          dizemos que ela é uma matriz <strong>2×3</strong> (lê-se "2 por 3").
        </p>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
          <p className="text-sm text-gray-600 mb-3">
            <strong>Exemplo visual:</strong> Esta matriz é 2×2 (2 linhas, 2 colunas)
          </p>
          <MatrixDisplay
            matrix={[
              [3, 5],
              [1, 4],
            ]}
          />
        </div>

        <div className="space-y-3 mb-4">
          <div className="border border-blue-200 bg-blue-50 p-3 rounded">
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

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Como Nomear um Número na Matriz
        </h2>
        <p className="mb-4 leading-relaxed">
          Para indicar exatamente qual número queremos, usamos a notação:
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg mb-4">
          <Formula>A(i, j)</Formula> ou <Formula>a_(ij)</Formula>
        </div>
        <p className="mb-4 leading-relaxed">
          Onde <Formula>i</Formula> é o número da linha e <Formula>j</Formula> é
          o número da coluna.
        </p>

        <div className="space-y-3">
          <div className="border border-gray-200 bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-2">Exemplo:</p>
            <p className="text-sm mb-2">
              Na matriz abaixo:
            </p>
            <MatrixDisplay
              matrix={[
                [2, 7],
                [9, 5],
              ]}
            />
            <p className="text-sm font-mono mt-3">
              A(1,1) = 2 (primeira linha, primeira coluna)
              <br />
              A(1,2) = 7 (primeira linha, segunda coluna)
              <br />
              A(2,1) = 9 (segunda linha, primeira coluna)
              <br />
              A(2,2) = 5 (segunda linha, segunda coluna)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Exemplo Real: Uma Matriz no Dia a Dia
        </h2>
        <p className="mb-4 leading-relaxed">
          Imagine uma tabela com as notas de 3 alunos em 2 disciplinas:
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
          Se guardamos apenas os números, teremos uma matriz 3×2:
        </p>

        <MatrixDisplay
          matrix={[
            [8, 7],
            [9, 9],
            [6, 8],
          ]}
        />

        <p className="mt-4 text-sm text-gray-600">
          Essa matriz tem 3 linhas (uma para cada aluno) e 2 colunas (uma para
          cada disciplina).
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Tamanho de uma Matriz (Dimensão)
        </h2>
        <p className="mb-4 leading-relaxed">
          Quando descrevemos o tamanho de uma matriz, sempre dizemos
          <strong> linhas × colunas</strong>.
        </p>

        <div className="space-y-3 mb-4">
          <div className="border border-gray-200 bg-gray-50 p-3 rounded">
            <p className="text-sm font-mono">
              Matriz 2×3: 2 linhas e 3 colunas (tem 6 números no total)
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 p-3 rounded">
            <p className="text-sm font-mono">
              Matriz 4×1: 4 linhas e 1 coluna (é uma coluna vertical)
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 p-3 rounded">
            <p className="text-sm font-mono">
              Matriz 1×5: 1 linha e 5 colunas (é uma linha horizontal)
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 p-3 rounded">
            <p className="text-sm font-mono">
              Matriz 3×3: 3 linhas e 3 colunas (quadrada)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Por Que Matrizes São Importantes?
        </h2>
        <p className="mb-4 leading-relaxed">
          Matrizes não são apenas um jeito estranho de escrever números. Elas
          são uma ferramenta poderosa usada para:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Resolver sistemas de equações:</strong> quando você tem
            várias equações com várias incógnitas, as matrizes ajudam a organizar
            e calcular de forma eficiente.
          </li>
          <li>
            <strong>Transformações geométricas:</strong> girar, ampliar ou mover
            objetos em 3D (videogames, CAD, gráficos).
          </li>
          <li>
            <strong>Análise de dados:</strong> processar informações de tabelas
            grandes (negócios, ciência de dados, inteligência artificial).
          </li>
          <li>
            <strong>Processamento de imagens:</strong> cada pixel tem cores (RGB)
            que podem ser organizadas em matrizes.
          </li>
          <li>
            <strong>Engenharia:</strong> cálculos estruturais, eletricidade,
            física.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Próximo Passo: Operações com Matrizes
        </h2>
        <p className="mb-4 leading-relaxed">
          Agora que você entende o que é uma matriz, chegou a hora de descobrir
          o que podemos fazer com elas. A operação mais simples é a soma.
        </p>
        <TipBox>
          Quando souber somar matrizes, você vai aprender subtração, multiplicação
          e muitas outras operações que abrem portas para resolver problemas reais.
        </TipBox>
      </div>

      <TutorialCTA
        title="Pratique com a Calculadora"
        secondaryTo="/tutorial/soma-de-matrizes"
        secondaryLabel="Próximo: Soma de Matrizes"
      >
        Agora que você entende o que é uma matriz, pratique preenchendo a
        calculadora com seus próprios números. Veja como a ferramenta organiza e
        trabalha com matrizes.
      </TutorialCTA>
    </div>
  );
}

export default WhatIsMatrixTutorial;
