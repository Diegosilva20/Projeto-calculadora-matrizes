import { Link } from "react-router-dom";
import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";

function PostoDeMatrizTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 dark:text-slate-100">
      <div className="mb-8">
        <p className="mb-6 text-lg leading-relaxed">
          O posto de uma matriz é uma medida do quanto suas linhas ou colunas são
          independentes. Um jeito prático de calcular o posto é usar o
          <strong> escalonamento</strong>, transformar a matriz em forma de escada
          e contar as linhas que não são zero.
        </p>
        <TipBox>
          <strong>Definição essencial:</strong> o posto de uma matriz é o número de
          linhas não nulas na matriz escalonada.
        </TipBox>
      </div>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:bg-slate-900 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-3">O que é uma linha não nula?</h2>
        <p className="mb-4 leading-relaxed">
          Uma linha não nula é uma linha que tem pelo menos um elemento diferente de
          zero. Se toda a linha for zero, ela é uma linha nula e não conta para o
          posto.
        </p>
        <p className="mb-4 leading-relaxed">
          Por exemplo, a linha <Formula>[0, 0, 0]</Formula> é nula, enquanto <Formula>[1, 2, 3]</Formula> e <Formula>[0, 5, 0]</Formula> são linhas não nulas.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:bg-slate-900 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-3">Exemplo resolvido: matriz 3x3</h2>
        <p className="mb-4 leading-relaxed">
          Vamos calcular o posto da matriz <Formula>A</Formula> usando escalonamento.
        </p>
        <div className="mb-6">
          <MatrixDisplay
            matrix={[[1, 2, 3], [2, 4, 6], [1, 1, 1]]}
          />
        </div>
        <p className="mb-4 leading-relaxed">
          Essa matriz tem a segunda linha como combinação da primeira: <Formula>2 × [1, 2, 3] = [2, 4, 6]</Formula>.
          Por isso, as linhas não são todas independentes.
        </p>
        <p className="mb-4 leading-relaxed">
          Agora vamos usar operações de linha para escalonar a matriz.</p>

        <div className="rounded-lg border border-gray-200 bg-slate-50 p-4 mb-6 dark:bg-slate-950 dark:border-slate-700">
          <h3 className="text-xl font-semibold mb-3">Passo 1: eliminar abaixo do primeiro pivô</h3>
          <p className="mb-3 leading-relaxed">
            Usamos o primeiro elemento da primeira linha como pivô. A seguir, zeramos os elementos abaixo dele.
          </p>
          <p className="font-mono text-sm sm:text-base break-words">
            L2 ← L2 - 2 × L1<br />
            L3 ← L3 - 1 × L1
          </p>
        </div>

        <div className="mb-6">
          <MatrixDisplay
            matrix={[[1, 2, 3], [0, 0, 0], [0, -1, -2]]}
          />
        </div>

        <p className="mb-4 leading-relaxed">
          Nesse ponto, a segunda linha virou <Formula>[0, 0, 0]</Formula>. A terceira linha ainda tem um elemento não nulo, então ela continua sendo uma linha importante para o posto.
        </p>

        <div className="rounded-lg border border-gray-200 bg-slate-50 p-4 mb-6 dark:bg-slate-950 dark:border-slate-700">
          <h3 className="text-xl font-semibold mb-3">Passo 2: organizar a forma escalonada</h3>
          <p className="mb-3 leading-relaxed">
            Para ficar mais claro, trocamos a segunda e a terceira linha. Assim, a linha nula fica por baixo.
          </p>
          <p className="font-mono text-sm sm:text-base break-words">
            L2 ↔ L3
          </p>
        </div>

        <div className="mb-6">
          <MatrixDisplay
            matrix={[[1, 2, 3], [0, -1, -2], [0, 0, 0]]}
          />
        </div>

        <p className="mb-4 leading-relaxed">
          Agora a matriz está em forma escalonada. Ela tem duas linhas não nulas e uma linha zerada.</p>
        <TipBox>
          O posto é o número de linhas não nulas na matriz escalonada. Aqui, o posto de <Formula>A</Formula> é <Formula>2</Formula>.
        </TipBox>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:bg-slate-900 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-3">Por que o escalonamento mostra o posto?</h2>
        <p className="mb-4 leading-relaxed">
          O escalonamento usa operações de linha que não mudam a dependência entre as linhas. Ele apenas rearranja a matriz para que as linhas independentes fiquem na parte de cima e as linhas dependentes ou nulas fiquem por baixo.
        </p>
        <p className="mb-4 leading-relaxed">
          Por isso, depois de escalonar, contar as linhas não nulas é a forma mais direta de encontrar o posto. Esse resultado é o mesmo mesmo que mudarmos a ordem das linhas.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:bg-slate-900 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-3">Posto de matriz quadrada e matriz retangular</h2>
        <p className="mb-4 leading-relaxed">
          O posto existe para qualquer matriz, quadrada ou retangular. Em uma matriz quadrada <Formula>n × n</Formula>, o posto máximo é <Formula>n</Formula>. Em uma matriz retangular, o posto máximo é o menor entre o número de linhas e colunas.
        </p>
        <p className="mb-4 leading-relaxed">
          Por exemplo, em uma matriz <Formula>3 × 5</Formula>, o posto não pode ser maior que <Formula>3</Formula>, porque só existem 3 linhas independentes possíveis.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:bg-slate-900 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-3">Posto e sistemas lineares</h2>
        <p className="mb-4 leading-relaxed">
          O posto de uma matriz de coeficientes decide quantas equações independentes o sistema realmente tem. Se o posto for menor que o número de incógnitas, o sistema pode ter infinitas soluções ou nenhuma solução exclusiva.
        </p>
        <p className="mb-4 leading-relaxed">
          Se o posto da matriz aumentada for igual ao posto da matriz de coeficientes, o sistema é consistente. Para entender melhor isso, veja o tutorial de <Link to="/tutorial/sistemas-lineares" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">sistemas lineares</Link>.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:bg-slate-900 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-3">Posto, determinante e inversa</h2>
        <p className="mb-4 leading-relaxed">
          Em uma matriz quadrada <Formula>n × n</Formula>:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            Se o posto for <Formula>n</Formula>, a matriz tem todas as linhas independentes e pode ser invertida.
          </li>
          <li>
            Se o posto for menor que <Formula>n</Formula>, o determinante é zero e a matriz não tem inversa.
          </li>
        </ul>
        <p className="mt-4 leading-relaxed">
          Para ler mais sobre isso, veja <Link to="/tutorial/determinante-de-matrizes" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">determinante de matrizes</Link> e <Link to="/tutorial/matriz-inversa" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">matriz inversa</Link>.</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200 dark:bg-slate-900 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-3">Erros comuns ao calcular o posto</h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>Contar linhas nulas como se fossem não nulas.</li>
          <li>Não usar o escalonamento completo até a forma escalonada.</li>
          <li>Achar que o posto é sempre o número de colunas.</li>
          <li>Esquecer que linhas múltiplas entre si não aumentam o posto.</li>
        </ul>
      </section>

      <TutorialCTA
        title="Pratique o cálculo do posto com a calculadora"
        primaryTo="/"
        primaryLabel="Abrir calculadora de matrizes"
        secondaryTo="/tutorial/escalonamento-gauss"
        secondaryLabel="Ver escalonamento de Gauss"
      >
        Use o mesmo exemplo no modo de escalonamento e observe como a matriz fica em forma de escada. Depois, conte as linhas não nulas para encontrar o posto.
      </TutorialCTA>
    </div>
  );
}

export default PostoDeMatrizTutorial;
