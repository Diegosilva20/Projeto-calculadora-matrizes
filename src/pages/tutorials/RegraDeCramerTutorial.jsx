import MatrixDisplay from "../../components/common/MatrixDisplay";
import SymbolicMatrix from "../../components/tutorial/SymbolicMatrix";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";

function RegraDeCramerTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Regra de Cramer: Como Resolver Sistemas Lineares com Determinantes
        </h2>
        <p className="leading-relaxed mb-4">
          A Regra de Cramer é um jeito direto de resolver sistemas lineares usando o
          determinante da matriz dos coeficientes. Ela funciona bem em sistemas 2x2
          e 3x3 quando a matriz dos coeficientes é quadrada e tem determinante diferente de zero.
        </p>
        <p className="leading-relaxed">
          Neste tutorial você verá quando usar a regra, como montar os determinantes D, Dx e Dy
          e um exemplo 2x2 resolvido passo a passo. Também explicamos quando ela é a melhor opção e quando é melhor usar escalonamento.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-4">O que é a Regra de Cramer?</h2>
        <p className="leading-relaxed mb-4">
          A Regra de Cramer resolve um sistema linear quadrado usando determinantes. Em vez de eliminar variáveis, ela substitui cada coluna da matriz de coeficientes pela coluna de resultados para calcular o valor de cada variável.
        </p>
        <p className="leading-relaxed">
          A ideia central é: se a matriz dos coeficientes tem determinante D ≠ 0, então existe uma solução única, e cada variável é dada por um determinante dividido por D.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quando a Regra de Cramer pode ser usada?</h2>
        <ul className="list-disc pl-6 space-y-3 leading-relaxed text-gray-700">
          <li>O sistema deve ser quadrado: o número de equações deve ser igual ao número de incógnitas.</li>
          <li>A matriz dos coeficientes deve ter determinante diferente de zero.</li>
          <li>Ela serve para sistemas 2x2 e 3x3 de forma prática. Para sistemas maiores, o cálculo dos determinantes fica pesado.</li>
        </ul>
        <TipBox>
          A Regra de Cramer não funciona se o determinante da matriz dos coeficientes for zero. Nesse caso, o sistema pode ter infinitas soluções ou nenhuma solução.
        </TipBox>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Fórmula da Regra de Cramer para sistemas 2x2</h2>
        <p className="leading-relaxed mb-4">
          Para um sistema 2x2:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="font-medium text-slate-700 mb-2">Sistema original</p>
            <p className="font-mono text-sm leading-relaxed text-slate-900">
              2x + 3y = 7<br />
              -x + 4y = 1
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="font-medium text-slate-700 mb-2">Matriz de coeficientes</p>
            <SymbolicMatrix label="A =" matrix={[["2", "3"], ["-1", "4"]]} />
          </div>
        </div>
        <p className="leading-relaxed mb-4">
          A fórmula da Regra de Cramer diz que cada variável é um determinante dividido por D, onde D é o determinante da matriz de coeficientes.
        </p>
        <div className="space-y-3">
          <p className="font-semibold">Para x e y:</p>
          <p className="leading-relaxed">
            <Formula>x = Dx / D</Formula><br />
            <Formula>y = Dy / D</Formula>
          </p>
          <p className="leading-relaxed">
            Aqui, D é o determinante de A, Dx é o determinante de A com a coluna de x substituída pelos resultados, e Dy é o determinante de A com a coluna de y substituída pelos resultados.
          </p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Exemplo resolvido passo a passo</h2>
        <p className="leading-relaxed mb-4">
          Vamos resolver o sistema 2x2 abaixo usando a Regra de Cramer.
        </p>
        <div className="mb-6">
          <p className="font-medium text-slate-700 mb-3">Sistema:</p>
          <p className="font-mono text-sm leading-relaxed text-slate-900">
            2x + 3y = 7<br />
            -x + 4y = 1
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 mb-8">
          <SymbolicMatrix label="A =" matrix={[["2", "3"], ["-1", "4"]]} />
          <SymbolicMatrix label="Dx =" matrix={[["7", "3"], ["1", "4"]]} />
          <SymbolicMatrix label="Dy =" matrix={[["2", "7"], ["-1", "1"]]} />
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 mb-6">
          <h3 className="font-semibold mb-3">Passo 1: calcular D</h3>
          <p className="leading-relaxed mb-3">
            O determinante D da matriz A é:
          </p>
          <p className="font-mono text-sm leading-relaxed text-slate-900">
            D = det(A) = (2 × 4) - (3 × -1) = 8 - (-3) = 11
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 mb-6">
          <h3 className="font-semibold mb-3">Passo 2: calcular Dx</h3>
          <p className="leading-relaxed mb-3">
            Substituímos a coluna de x pela coluna de resultados [7, 1]:
          </p>
          <p className="font-mono text-sm leading-relaxed text-slate-900">
            Dx = det([[7, 3], [1, 4]]) = (7 × 4) - (3 × 1) = 28 - 3 = 25
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 mb-6">
          <h3 className="font-semibold mb-3">Passo 3: calcular Dy</h3>
          <p className="leading-relaxed mb-3">
            Substituímos a coluna de y pela coluna de resultados [7, 1]:
          </p>
          <p className="font-mono text-sm leading-relaxed text-slate-900">
            Dy = det([[2, 7], [-1, 1]]) = (2 × 1) - (7 × -1) = 2 - (-7) = 9
          </p>
        </div>

        <div className="rounded-lg border border-green-200 bg-green-50 p-4 mb-6">
          <h3 className="font-semibold mb-3">Passo 4: encontrar x e y</h3>
          <p className="leading-relaxed mb-3">
            Agora que temos D, Dx e Dy, usamos as fórmulas:
          </p>
          <p className="font-mono text-sm leading-relaxed text-slate-900">
            x = Dx / D = 25 / 11<br />
            y = Dy / D = 9 / 11
          </p>
          <p className="mt-3 leading-relaxed">
            O sistema tem solução única porque D ≠ 0. A resposta é:
            <strong> x = 25/11</strong> e <strong> y = 9/11</strong>.
          </p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Como funciona em sistemas 3x3</h2>
        <p className="leading-relaxed mb-4">
          A lógica da Regra de Cramer em 3x3 é a mesma do 2x2. A diferença é que agora existem três determinantes substituídos: Dx, Dy e Dz.
        </p>
        <p className="leading-relaxed mb-4">
          Para um sistema 3x3, D é o determinante da matriz dos coeficientes. Dx substitui a coluna de x por b, Dy substitui a coluna de y por b e Dz substitui a coluna de z por b.
        </p>
        <p className="leading-relaxed">
          Se D ≠ 0, cada variável é dada por:
        </p>
        <p className="font-mono text-sm leading-relaxed text-slate-900">
          x = Dx / D<br />
          y = Dy / D<br />
          z = Dz / D
        </p>
        <p className="mt-4 leading-relaxed">
          O cálculo exige três determinantes de matriz 3x3, por isso a regra fica mais trabalhosa. Para entender o determinante 3x3, veja o tutorial de <a href="/tutorial/determinante-3x3-regra-de-sarrus" className="text-blue-600 hover:underline">Regra de Sarrus</a>.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quando não usar a Regra de Cramer?</h2>
        <p className="leading-relaxed mb-4">
          Não use a Regra de Cramer quando o sistema não for quadrado ou quando o determinante da matriz de coeficientes for zero. Nesse caso, a regra não entrega uma solução única.
        </p>
        <ul className="list-disc pl-6 space-y-3 leading-relaxed text-gray-700">
          <li>Sistemas 2x3 ou 3x4 não são quadrados, então não é possível aplicar a regra diretamente.</li>
          <li>Sistemas com D = 0 exigem outro método, como escalonamento, análise de consistência ou dependência linear.</li>
          <li>Para sistemas maiores que 3x3, o cálculo manual de determinantes fica lento e propenso a erro.</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Regra de Cramer ou escalonamento: qual usar?</h2>
        <p className="leading-relaxed mb-4">
          A Regra de Cramer é ótima para entender a relação entre determinantes e sistemas lineares. Ela é ideal para sistemas 2x2 e 3x3 com solução única.
        </p>
        <p className="leading-relaxed mb-4">
          O escalonamento por Gauss é melhor quando o sistema é maior, quando o coeficiente principal é zero ou quando você quer detectar múltiplas soluções ou nenhuma solução.
        </p>
        <p className="leading-relaxed">
          Em resumo:
        </p>
        <ul className="list-disc pl-6 space-y-3 leading-relaxed text-gray-700">
          <li>Use Regra de Cramer para sistemas 2x2 e 3x3 com D ≠ 0.</li>
          <li>Use escalonamento quando o sistema for maior ou você precisar encontrar uma solução mesmo se D = 0.</li>
          <li>Se quiser verificar a solução e a consistência do sistema, o escalonamento é mais robusto.</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Erros comuns</h2>
        <ul className="list-disc pl-6 space-y-3 leading-relaxed text-gray-700">
          <li>Confundir a matriz de coeficientes com a matriz aumentada. A matriz A só contém coeficientes, enquanto b contém os resultados.</li>
          <li>Esquecer de trocar apenas a coluna da variável correta ao calcular Dx ou Dy.</li>
          <li>Não verificar se D é diferente de zero antes de aplicar a regra.</li>
          <li>Usar a regra em sistemas não quadrados ou em sistemas 3x3 sem entender como montar Dx, Dy e Dz.</li>
        </ul>
      </section>

      <TutorialCTA title="Pronto para praticar com a calculadora?" primaryTo="/" primaryLabel="Abrir calculadora">
        Use a calculadora para testar sistemas, ver determinantes e comparar a Regra de Cramer com o escalonamento passo a passo.
      </TutorialCTA>
    </div>
  );
}

export default RegraDeCramerTutorial;
