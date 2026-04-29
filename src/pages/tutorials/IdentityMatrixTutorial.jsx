import MatrixDisplay from "../../components/common/MatrixDisplay";
import Formula from "../../components/tutorial/Formula";
import TipBox from "../../components/tutorial/TipBox";
import TutorialCTA from "../../components/tutorial/TutorialCTA";

function IdentityMatrixTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <p className="mb-6 text-lg leading-relaxed">
        A matriz identidade é a matriz "do um" da multiplicação. Assim como
        multiplicar um número por 1 não o altera (5 × 1 = 5), multiplicar uma
        matriz pela identidade não a altera. É um conceito simples, mas crucial
        para entender inversas, escalonamento e sistemas lineares.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Intuição: O "Um" das Matrizes
        </h2>
        <p className="mb-4 leading-relaxed">
          Em números normais:
        </p>
        <p className="font-mono text-center p-3 bg-gray-50 rounded mb-4">
          5 × 1 = 5
        </p>
        <p className="mb-4 leading-relaxed">
          Com matrizes:
        </p>
        <p className="font-mono text-center p-3 bg-gray-50 rounded">
          A × I = A
        </p>
        <p className="mt-4 leading-relaxed">
          O número 1 é a identidade para a multiplicação porque a multiplicar
          por 1 não muda nada. A matriz identidade <Formula>I</Formula> faz
          exactamente a mesma coisa para as matrizes.
        </p>
        <TipBox>
          <strong>Resumo rápido:</strong> a matriz identidade é aquela com 1s
          na diagonal principal e 0s no resto. Multiplicar por ela não muda a
          matriz.
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Qual é a Forma da Matriz Identidade?
        </h2>
        <p className="mb-4 leading-relaxed">
          A matriz identidade sempre tem:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed mb-4">
          <li>
            <strong>1s na diagonal principal:</strong> posições (1,1), (2,2), (3,3), ...
          </li>
          <li>
            <strong>0s em todo o resto:</strong> todas as outras posições.
          </li>
          <li>
            <strong>Sempre quadrada:</strong> 2×2, 3×3, 4×4, etc.
          </li>
        </ul>

        <p className="mb-4 leading-relaxed">
          Notação: Escrevemos <Formula>I</Formula> para a identidade ou{" "}
          <Formula>I_n</Formula> para deixar claro que é n×n.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">
          Exemplos: Matriz Identidade 2×2 e 3×3
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-3">Identidade 2×2 (I₂)</p>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded">
              <MatrixDisplay
                matrix={[
                  [1, 0],
                  [0, 1],
                ]}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              1 na diagonal (1,1) e (2,2).
              <br />
              0 fora dela.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-3">Identidade 3×3 (I₃)</p>
            <div className="bg-green-50 border border-green-200 p-4 rounded">
              <MatrixDisplay
                matrix={[
                  [1, 0, 0],
                  [0, 1, 0],
                  [0, 0, 1],
                ]}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              1 na diagonal (1,1), (2,2) e (3,3).
              <br />
              0 fora dela.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          A Propriedade Central: A × I = A
        </h2>
        <p className="mb-4 leading-relaxed">
          Se você multiplicar qualquer matriz A pela identidade I (do tamanho
          correto), você obtém A de novo.
        </p>

        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg mb-5">
          <Formula>A × I = A</Formula>
          <br />
          <Formula>I × A = A</Formula>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Exemplo: 2×2</h3>
            <p className="text-sm mb-3">
              Multiplicar uma matriz A pela matriz identidade 2×2:
            </p>
            <div className="grid md:grid-cols-3 gap-3 items-center">
              <div>
                <p className="text-xs font-semibold mb-1">Matriz A</p>
                <MatrixDisplay
                  matrix={[
                    [3, 7],
                    [2, 5],
                  ]}
                />
              </div>
              <div className="text-center font-bold">×</div>
              <div>
                <p className="text-xs font-semibold mb-1">Identidade I</p>
                <MatrixDisplay
                  matrix={[
                    [1, 0],
                    [0, 1],
                  ]}
                />
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="font-bold">=</p>
              <p className="mt-2 text-xs font-semibold mb-1">Resultado</p>
              <MatrixDisplay
                matrix={[
                  [3, 7],
                  [2, 5],
                ]}
              />
            </div>
            <p className="text-xs text-gray-600 mt-3">
              A matriz A volta igual. A identidade não muda nada!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Conexão com Matriz Inversa
        </h2>
        <p className="mb-4 leading-relaxed">
          A matriz identidade aparece quando você calcula a inversa. A inversa
          de A é uma matriz <Formula>A⁻¹</Formula> tal que:
        </p>

        <div className="text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg mb-4">
          <Formula>A × A⁻¹ = I</Formula>
          <br />
          <Formula>A⁻¹ × A = I</Formula>
        </div>

        <p className="mb-2 leading-relaxed">
          Ou seja: quando você multiplica uma matriz pela sua inversa, você
          obtém a identidade.
        </p>

        <TipBox>
          Isso é como números normais: 5 × (1/5) = 1. Com matrizes:
          A × A⁻¹ = I (identidade é o "um").
        </TipBox>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Conexão com Eliminação de Gauss
        </h2>
        <p className="mb-4 leading-relaxed">
          Quando você está calculando a inversa ou resolvendo um sistema por
          Eliminação de Gauss, o objetivo é transformar a matriz em identidade
          (ou em forma escalonada).
        </p>

        <div className="border border-blue-200 bg-blue-50 p-4 rounded mb-4">
          <p className="font-semibold mb-2">Exemplo: Processo de Gauss</p>
          <p className="text-sm mb-3">
            Começamos com a matriz [A | I] e aplicamos operações de linha até
            transformar o lado esquerdo em identidade:
          </p>
          <p className="font-mono text-sm text-center">
            [A | I] → ... → [I | A⁻¹]
          </p>
        </div>

        <p className="text-sm text-gray-600">
          Quando o lado esquerdo vira a identidade, o lado direito se torna a
          inversa de A. Por isso a identidade é tão importante.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Propriedades Importantes da Identidade
        </h2>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>A identidade é única para cada tamanho:</strong> existe uma
            e única identidade 2×2, uma e única 3×3, etc.
          </li>
          <li>
            <strong>A identidade é quadrada:</strong> tem sempre o mesmo número
            de linhas e colunas.
          </li>
          <li>
            <strong>A matriz identidade é simétrica:</strong>{" "}
            <Formula>I^T = I</Formula> (a transposta é igual a ela mesma).
          </li>
          <li>
            <strong>O determinante da identidade é 1:</strong>{" "}
            <Formula>det(I) = 1</Formula>.
          </li>
          <li>
            <strong>A identidade é sua própria inversa:</strong>{" "}
            <Formula>I⁻¹ = I</Formula>.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">
          Por Que Isso Importa?
        </h2>
        <p className="mb-4 leading-relaxed">
          A matriz identidade é importante porque:
        </p>
        <ul className="list-disc pl-5 space-y-3 leading-relaxed">
          <li>
            <strong>Define o conceito de inversa:</strong> você só tem inversa
            se conseguir chegar à identidade.
          </li>
          <li>
            <strong>Simplifica cálculos:</strong> quando você vê uma identidade
            em uma multiplicação, sabe que pode "cancelar".
          </li>
          <li>
            <strong>Resolve sistemas:</strong> o objetivo do Gauss é chegar a
            uma forma parecida com a identidade.
          </li>
          <li>
            <strong>Referência de comparação:</strong> propriedades especiais
            (simetria, determinante = 1) fazem a identidade importante.
          </li>
        </ul>
      </div>

      <TutorialCTA
        title="Próximos Passos"
        secondaryTo="/tutorial/matriz-inversa"
        secondaryLabel="Ver Matriz Inversa"
      >
        Agora que você entende a matriz identidade, pode aprender como calcular
        a inversa de uma matriz. A identidade aparece em quase todos os cálculos!
      </TutorialCTA>
    </div>
  );
}

export default IdentityMatrixTutorial;
