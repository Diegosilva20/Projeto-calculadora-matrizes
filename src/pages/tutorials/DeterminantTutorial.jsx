import { Link } from "react-router-dom";
import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";
import UseExampleButton from "../../components/tutorial/UseExampleButton";

function DeterminantTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <p className="mb-6 text-lg leading-relaxed">
        O determinante é um valor escalar associado a uma matriz quadrada. Ele informa se a matriz possui inversa, indica se um sistema linear possui solução única e quantifica o fator de escala de áreas e volumes em transformações geométricas.
      </p>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Significado do determinante
        </h2>
        <p className="mb-4 leading-relaxed">
          O determinante reflete a dependência linear entre as linhas ou colunas de uma matriz. Quando o valor é diferente de zero, as linhas são linearmente independentes e a matriz pode ser invertida. Quando é zero, a matriz é singular.
        </p>
        <TipBox>
          Se <Formula>det(A) ≠ 0</Formula>, a matriz admite inversa. Se <Formula>det(A) = 0</Formula>, a matriz não possui inversa.
        </TipBox>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Condição obrigatória: matriz quadrada
        </h2>
        <p className="mb-4 leading-relaxed">
          O determinante é definido exclusivamente para matrizes com número igual de linhas e colunas (2×2, 3×3, 4×4, ..., n×n).
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <h3 className="font-semibold text-green-900 mb-2">Matrizes quadradas (válidas)</h3>
            <p className="text-sm">2×2, 3×3, 4×4, 5×5...</p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <h3 className="font-semibold text-red-900 mb-2">Matrizes retangulares (inválidas)</h3>
            <p className="text-sm">2×3, 3×2, 4×1, 1×5...</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Determinante 2x2
        </h2>
        <p className="mb-4 leading-relaxed">
          Para matrizes de ordem 2, subtrai-se o produto da diagonal secundária do produto da diagonal principal:
        </p>
        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg mb-5">
          <Formula>det(A) = (a × d) - (b × c)</Formula>
        </div>
        <MatrixDisplay
          matrix={[
            [6, -3],
            [4, 2],
          ]}
        />
        <div className="mt-5 rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
          <p className="font-mono text-sm sm:text-base break-words">
            det(A) = (6 × 2) - (-3 × 4) = 12 - (-12) = 12 + 12 = 24
          </p>
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Para mais detalhes e exercícios específicos desse caso, veja o tutorial de{" "}
          <Link
            to="/tutorial/determinante-2x2"
            className="font-bold text-accent underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            determinante 2x2
          </Link>
          .
        </p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-4">
          Determinante 3x3 (Regra de Sarrus)
        </h2>
        <p className="mb-4 leading-relaxed">
          Em matrizes 3×3, a Regra de Sarrus soma os produtos das três diagonais principais e subtrai os produtos das três diagonais secundárias:
        </p>
        <MatrixDisplay
          matrix={[
            [1, 0, 2],
            [3, 1, 4],
            [2, 1, 0],
          ]}
        />
        <UseExampleButton
          operation="determinanteA"
          matrixA={[
            [1, 0, 2],
            [3, 1, 4],
            [2, 1, 0],
          ]}
        />

        <div className="mt-6 space-y-5">
          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 1: Somar as diagonais principais
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (1 × 1 × 0) + (0 × 4 × 2) + (2 × 3 × 1) = 0 + 0 + 6 = 6
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 2: Somar as diagonais secundárias
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              (2 × 1 × 2) + (1 × 4 × 1) + (0 × 3 × 0) = 4 + 4 + 0 = 8
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 bg-slate-50 dark:bg-slate-900 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Passo 3: Subtrair os dois totais
            </h3>
            <p className="font-mono text-sm sm:text-base break-words">
              det(A) = 6 - 8 = -2
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Cálculo para matrizes 4x4 e maiores
        </h2>
        <p className="mb-4 leading-relaxed">
          A regra de Sarrus não é válida para matrizes de ordem 4 ou superior. Para ordens maiores, utilizam-se dois métodos principais:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Teorema de Laplace (expansão por cofatores):</strong> decompõe o determinante em determinantes menores ao longo de uma linha ou coluna.
          </li>
          <li>
            <strong>Triangularização por eliminação de Gauss:</strong> transforma a matriz em triangular superior. O determinante é o produto dos elementos da diagonal principal (invertendo o sinal a cada troca de linhas).
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">Cuidados frequentes</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Não aplicar em matrizes retangulares:</strong> matrizes como 2×3 ou 3×4 não admitem cálculo de determinante.
          </li>
          <li>
            <strong>Regra de Sarrus apenas em 3x3:</strong> nunca utilize o esquema de Sarrus em matrizes 4×4.
          </li>
          <li>
            <strong>Troca de linhas:</strong> cada permutação de linhas durante a eliminação gaussiana multiplica o determinante por <Formula>-1</Formula>.
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg mb-8 border border-slate-200 shadow-sm dark:border-slate-700/20">
        <h2 className="text-2xl font-semibold mb-3">
          Aplicações práticas
        </h2>
        <p className="mb-4 leading-relaxed">
          Os determinantes são utilizados no teste de invertibilidade de matrizes, cálculo de autovalores via polinômio característico <Formula>det(A - λI) = 0</Formula>, produto vetorial e cálculo do Jacobiano em integrais múltiplas.
        </p>
      </div>

      <TutorialCTA
        title="Pratique na calculadora"
        secondaryTo="/tutorial/matriz-inversa"
        secondaryLabel="Ver matriz inversa"
      >
        Escolha a operação “Determinante de A” na calculadora e veja a resolução passo a passo para matrizes 2×2, 3×3 e 4×4.
      </TutorialCTA>
    </div>
  );
}

export default DeterminantTutorial;
