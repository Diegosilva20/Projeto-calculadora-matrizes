import MatrixDisplay from "../../components/common/MatrixDisplay";
import SymbolicMatrix from "../../components/tutorial/SymbolicMatrix";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";

function RegraDeCramerTutorial() {
  return (
    <div className="px-3 sm:px-6 py-6 max-w-4xl mx-auto text-slate-900 dark:text-white">
      <section className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Regra de Cramer
        </h2>
        <p className="leading-relaxed mb-4">
          A Regra de Cramer é um método analítico explícito para resolver sistemas lineares quadrados utilizando determinantes. Cada incógnita é calculada diretamente pela razão entre o determinante da matriz com a coluna da variável substituída pelos termos independentes e o determinante principal.
        </p>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Condições de aplicabilidade</h2>
        <ul className="list-disc pl-6 space-y-3 leading-relaxed text-slate-700 dark:text-slate-300">
          <li><strong>Sistema quadrado:</strong> o número de equações deve ser rigorosamente igual ao número de incógnitas (<Formula>n \times n</Formula>).</li>
          <li><strong>Determinante principal não nulo:</strong> o determinante da matriz de coeficientes deve ser estritamente diferente de zero (<Formula>D = \det(A) \neq 0</Formula>).</li>
          <li><strong>Escopo prático:</strong> recomendada para ordens 2×2 e 3×3. Para sistemas de ordem 4 ou superior, a eliminação gaussiana é computacionalmente superior devido à complexidade fatorial do cálculo de determinantes.</li>
        </ul>
        <TipBox>
          Caso <Formula>D = 0</Formula>, a Regra de Cramer não pode ser utilizada (o sistema será indeterminado ou impossível).
        </TipBox>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Fórmulas em sistemas 2x2</h2>
        <p className="leading-relaxed mb-4">
          Dado o sistema de equações:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          <div className="rounded-lg border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-800 p-4">
            <p className="font-medium text-slate-700 dark:text-slate-300 mb-2">Sistema linear</p>
            <p className="font-mono text-sm leading-relaxed text-slate-900 dark:text-white">
              2x + 3y = 7<br />
              -x + 4y = 1
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-800 p-4">
            <p className="font-medium text-slate-700 dark:text-slate-300 mb-2">Matriz de coeficientes A</p>
            <SymbolicMatrix label="A =" matrix={[["2", "3"], ["-1", "4"]]} />
          </div>
        </div>
        <p className="leading-relaxed mb-4">
          As variáveis são obtidas pelas relações:
        </p>
        <div className="space-y-3">
          <p className="leading-relaxed">
            <Formula>x = \frac{D_x}{D}</Formula> e <Formula>y = \frac{D_y}{D}</Formula>
          </p>
          <p className="leading-relaxed text-sm text-slate-600 dark:text-slate-300">
            Onde <Formula>D</Formula> é o determinante de <Formula>A</Formula>, <Formula>D_x</Formula> é obtido substituindo a 1ª coluna pelos termos independentes e <Formula>D_y</Formula> substituindo a 2ª coluna.
          </p>
        </div>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Exemplo resolvido passo a passo</h2>
        <p className="leading-relaxed mb-4">
          Resolvendo o sistema dado pelas matrizes associadas:
        </p>

        <div className="grid gap-4 lg:grid-cols-3 mb-8">
          <SymbolicMatrix label="A =" matrix={[["2", "3"], ["-1", "4"]]} />
          <SymbolicMatrix label="Dx =" matrix={[["7", "3"], ["1", "4"]]} />
          <SymbolicMatrix label="Dy =" matrix={[["2", "7"], ["-1", "1"]]} />
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-800 p-4 mb-6">
          <h3 className="font-semibold mb-3">1. Cálculo de D</h3>
          <p className="font-mono text-sm leading-relaxed text-slate-900 dark:text-white">
            D = (2 × 4) - (3 × -1) = 8 - (-3) = 11
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-800 p-4 mb-6">
          <h3 className="font-semibold mb-3">2. Cálculo de Dx</h3>
          <p className="font-mono text-sm leading-relaxed text-slate-900 dark:text-white">
            Dx = (7 × 4) - (3 × 1) = 28 - 3 = 25
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-800 p-4 mb-6">
          <h3 className="font-semibold mb-3">3. Cálculo de Dy</h3>
          <p className="font-mono text-sm leading-relaxed text-slate-900 dark:text-white">
            Dy = (2 × 1) - (7 × -1) = 2 - (-7) = 9
          </p>
        </div>

        <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/40 dark:border-green-800 p-4 mb-6">
          <h3 className="font-semibold mb-3">4. Solução do sistema</h3>
          <p className="font-mono text-sm leading-relaxed text-slate-900 dark:text-white">
            x = Dx / D = 25 / 11<br />
            y = Dy / D = 9 / 11
          </p>
          <p className="mt-3 leading-relaxed">
            Conjunto solução: <Formula>S = \{ (25/11, 9/11) \}</Formula>.
          </p>
        </div>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Comparativo: Regra de Cramer vs Escalonamento</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-left">
                <th className="py-2 px-3">Critério</th>
                <th className="py-2 px-3">Regra de Cramer</th>
                <th className="py-2 px-3">Eliminação Gaussiana</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="py-2 px-3 font-medium">Formato do sistema</td>
                <td className="py-2 px-3">Apenas quadrados (<Formula>n \times n</Formula>)</td>
                <td className="py-2 px-3">Qualquer formato (<Formula>m \times n</Formula>)</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium">Condição</td>
                <td className="py-2 px-3">Exige <Formula>\det(A) \neq 0</Formula></td>
                <td className="py-2 px-3">Funciona para qualquer matriz</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium">Eficiência numérica</td>
                <td className="py-2 px-3">Inviável para <Formula>n \ge 4</Formula></td>
                <td className="py-2 px-3">Ótima (<Formula>O(n^3)</Formula>)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200 shadow-sm dark:border-slate-700/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cuidados frequentes</h2>
        <ul className="list-disc pl-6 space-y-3 leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            <strong>Substituição isolada de colunas:</strong> substitua apenas a coluna da incógnita em cálculo, preservando as demais colunas intactas.
          </li>
          <li>
            <strong>Divisão por zero:</strong> nunca aplique as frações de Cramer se <Formula>D = 0</Formula>.
          </li>
        </ul>
      </section>

      <TutorialCTA title="Pratique na calculadora" primaryTo="/" primaryLabel="Abrir calculadora">
        Calcule os determinantes parciais e valide a solução de sistemas lineares 2×2 e 3×3 na calculadora.
      </TutorialCTA>
    </div>
  );
}

export default RegraDeCramerTutorial;
