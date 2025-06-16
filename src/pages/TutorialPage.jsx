import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../components/common/MatrixDisplay";

function TutorialPage() {
  const { id } = useParams();

  const tutoriais = [
    {
      id: 1,
      title:
        "Determinante de Matrizes: Teoria, Passo a Passo, Propriedades e Exemplos",
      description:
        "Aprenda o que é o determinante de uma matriz, como calculá-lo em diferentes ordens, suas propriedades e aplicações práticas em álgebra linear.",
      content: (
        <div className="p-6 max-w-4xl mx-auto">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li>
                <Link to="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <span className="text-gray-500">Determinante de Matrizes</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Determinante de Matrizes: Teoria, Passo a Passo, Propriedades e
            Exemplos
          </h1>
          <p className="mb-6 text-gray-700">
            O determinante de uma matriz é um número associado a uma matriz
            quadrada (ou seja, que tem o mesmo número de linhas e colunas). Ele
            é amplamente utilizado na álgebra linear, especialmente em sistemas
            lineares, geometria, cálculo e transformações lineares. O
            determinante indica, por exemplo, se uma matriz é invertível, ou a
            área/volume transformado por uma matriz.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">O que é uma matriz quadrada?</span>
            </h2>
            <p className="text-gray-700">
              Uma matriz quadrada é uma matriz que possui o mesmo número de
              linhas e colunas, ou seja, de ordem <code>n × n</code>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">O que é o determinante?</span>
            </h2>
            <p className="text-gray-700 mb-2">
              O determinante é um número real (ou complexo) obtido a partir dos
              elementos de uma matriz quadrada. Ele é representado por:
            </p>
            <p className="text-gray-700">
              <code>det(A)</code> ou simplesmente <code>|A|</code>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">Determinante de ordem 1</span>
            </h2>
            <p className="text-gray-700 mb-2">
              Para uma matriz <code>1×1</code>, o determinante é o próprio
              número:
            </p>
            <p className="text-gray-700">
              A = [<code>a</code>] ⇒ det(A) = <code>a</code>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">Determinante de ordem 2</span>
            </h2>
            <p className="text-gray-700 mb-2">Para uma matriz:</p>
            <MatrixDisplay
              matrix={[
                [<code>a</code>, <code>b</code>],
                [<code>c</code>, <code>d</code>],
              ]}
            />
            <p className="text-gray-700 mt-2">
              O determinante é calculado assim:
            </p>
            <p className="text-gray-700">
              <code>det(A) = ad - bc</code>
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
              Exemplo 1: Determinante de ordem 2
            </h3>
            <p className="text-gray-700 mb-2">Matriz:</p>
            <MatrixDisplay
              matrix={[
                [4, 3],
                [2, 5],
              ]}
            />
            <p className="text-gray-700">
              Cálculo: <code>det(A) = (4 ⋅ 5) - (3 ⋅ 2) = 20 - 6 = 14</code>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">Determinante de ordem 3 (Regra de Sarrus)</span>
            </h2>
            <p className="text-gray-700 mb-2">Seja a matriz:</p>
            <MatrixDisplay
              matrix={[
                [<code>a</code>, <code>b</code>, <code>c</code>],
                [<code>d</code>, <code>e</code>, <code>f</code>],
                [<code>g</code>, <code>h</code>, <code>i</code>],
              ]}
            />
            <p className="text-gray-700 mt-2">
              A regra de Sarrus consiste em repetir as duas primeiras colunas ao
              lado da matriz e somar os produtos das diagonais principais e
              subtrair os das diagonais secundárias:
            </p>
            <p className="text-gray-700">
              <code>det(A) = aei + bfg + cdh - ceg - bdi - afh</code>
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
              Exemplo 2: Determinante de ordem 3
            </h3>
            <p className="text-gray-700 mb-2">Matriz:</p>
            <MatrixDisplay
              matrix={[
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
              ]}
            />
            <p className="text-gray-700 mb-2">
              Repetimos as duas primeiras colunas:
            </p>
            <MatrixDisplay
              matrix={[
                [1, 2, 3, 1, 2],
                [4, 5, 6, 4, 5],
                [7, 8, 9, 7, 8],
              ]}
            />
            <p className="text-gray-700 mt-2">
              Somas das diagonais principais:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>1 ⋅ 5 ⋅ 9 = 45</li>
              <li>2 ⋅ 6 ⋅ 7 = 84</li>
              <li>3 ⋅ 4 ⋅ 8 = 96</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Somas das diagonais secundárias:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>3 ⋅ 5 ⋅ 7 = 105</li>
              <li>2 ⋅ 4 ⋅ 9 = 72</li>
              <li>1 ⋅ 6 ⋅ 8 = 48</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Cálculo:{" "}
              <code>
                det(A) = (45 + 84 + 96) - (105 + 72 + 48) = 225 - 225 = 0
              </code>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">
                Como calcular determinantes de ordem maior que 3
              </span>
            </h2>
            <p className="text-gray-700 mb-2">
              Para matrizes maiores que <code>3×3</code>, usamos o método da
              expansão por cofatores (ou Laplace). Ele consiste em escolher uma
              linha ou coluna, multiplicar cada elemento por seu cofator e somar
              os resultados.
            </p>
            <p className="text-gray-700">
              Cofator <code>C_ij</code>: <code>C_ij = (-1)^(i+j) ⋅ M_ij</code>
            </p>
            <p className="text-gray-700">
              Onde <code>M_ij</code> é o menor complementar, ou seja, o
              determinante da matriz que resulta da remoção da linha i e da
              coluna j.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">
                Propriedades importantes do determinante
              </span>
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Uma linha (ou coluna) nula: o determinante é 0.</li>
              <li>
                Troca de linhas ou colunas: troca o sinal do determinante.
              </li>
              <li>
                Linha ou coluna multiplicada por escalar: o determinante é
                multiplicado por esse escalar.
              </li>
              <li>
                Linhas ou colunas iguais ou proporcionais: determinante = 0.
              </li>
              <li>
                Determinante do produto:{" "}
                <code>det(A ⋅ B) = det(A) ⋅ det(B)</code>
              </li>
              <li>
                Determinante da transposta: <code>det(A^T) = det(A)</code>
              </li>
              <li>
                Determinante da inversa: <code>det(A^-1) = 1 / det(A)</code> (se{" "}
                <code>det(A) ≠ 0</code>)
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">Aplicações do determinante</span>
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                Verificar se uma matriz é invertível (uma matriz só tem inversa
                se <code>det(A) ≠ 0</code>)
              </li>
              <li>Resolver sistemas lineares pelo método de Cramer</li>
              <li>Cálculo de área e volume em geometria analítica</li>
              <li>Mudança de base e transformações lineares</li>
              <li>Verificar independência linear de vetores</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">Conclusão</span>
            </h2>
            <p className="text-gray-700">
              O determinante de matrizes é uma ferramenta poderosa e versátil na
              matemática e nas ciências aplicadas. Ele fornece informações
              cruciais sobre a estrutura da matriz, como sua invertibilidade e
              suas propriedades geométricas. Embora seu cálculo se torne mais
              complexo à medida que a ordem da matriz aumenta, com o uso de
              métodos como a Regra de Sarrus e a expansão por cofatores, é
              possível resolver até mesmo determinantes grandes de forma
              sistemática.
            </p>
            <p className="mt-4 text-gray-700">
              Quer aprender mais? Confira nosso tutorial sobre{" "}
              <Link to="/tutorial/2" className="text-blue-600 hover:underline">
                Como Encontrar a Inversa de uma Matriz
              </Link>
              .
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title:
        "Inversa de uma Matriz: Conceito, Teoria, Passo a Passo e Exemplos",
      description:
        "Aprenda o conceito de inversa de uma matriz, os métodos para calculá-la e suas aplicações em álgebra linear.",
      content: (
        <div className="p-6 max-w-4xl mx-auto">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li>
                <Link to="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <span className="text-gray-500">Inversa de uma Matriz</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Inversa de uma Matriz: Conceito, Teoria, Passo a Passo e Exemplos
          </h1>
          <p className="mb-6 text-gray-700">
            A inversa de uma matriz é um conceito fundamental na Álgebra Linear,
            muito utilizado na resolução de sistemas lineares, na computação
            gráfica, no processamento de sinais, na estatística e na engenharia.
            Assim como o inverso de um número a é 1/a, o inverso de uma matriz
            A, quando existe, é uma matriz A⁻¹ tal que:
          </p>
          <p className="text-gray-700 mb-6">A ⋅ A⁻¹ = A⁻¹ ⋅ A = I</p>
          <p className="text-gray-700 mb-6">
            Onde I é a matriz identidade, análoga ao número 1 na multiplicação.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Condições para uma matriz ter inversa
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Ela deve ser quadrada (mesmo número de linhas e colunas).</li>
              <li>Seu determinante deve ser diferente de zero: det(A) ≠ 0</li>
              <li>
                Se o determinante for zero, dizemos que a matriz é singular e
                não possui inversa.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Como encontrar a inversa de uma matriz?
            </h2>
            <p className="text-gray-700 mb-2">
              Existem vários métodos. Vamos abordar os principais:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-4">
              <li>
                <strong>1. Matriz 2×2</strong>
                <p className="text-gray-700 mb-2">Seja:</p>
                <MatrixDisplay
                  matrix={[
                    [<code>a</code>, <code>b</code>],
                    [<code>c</code>, <code>d</code>],
                  ]}
                />
                <p className="text-gray-700 mt-2">A inversa é dada por:</p>
                <p className="text-gray-700">
                  A⁻¹ = (1 / (ad - bc)) ⋅
                  <MatrixDisplay
                    matrix={[
                      [<code>d</code>, <code>-b</code>],
                      [<code>-c</code>, <code>a</code>],
                    ]}
                  />
                </p>
                <p className="text-gray-700 mt-2">
                  Onde (ad - bc) é o determinante da matriz. Se ele for zero, a
                  inversa não existe.
                </p>
              </li>
              <li>
                <strong>
                  2. Matriz 3×3 ou maior: método da matriz adjunta
                </strong>
                <ol className="list-decimal pl-5 text-gray-700 mt-2">
                  <li>
                    Calcule o determinante det(A). Se for igual a zero, a matriz
                    não tem inversa.
                  </li>
                  <li>
                    Calcule a matriz dos cofatores de A. Para cada elemento
                    a_ij, calcule o cofator C_ij = (-1)^(i+j) ⋅ M_ij, onde M_ij
                    é o menor complementar (determinante da matriz que sobra ao
                    remover a linha i e a coluna j).
                  </li>
                  <li>Calcule a matriz adjunta: adj(A) = Cof(A)ᵀ</li>
                  <li>Use a fórmula da inversa: A⁻¹ = (1 / det(A)) ⋅ adj(A)</li>
                </ol>
              </li>
              <li>
                <strong>
                  3. Método de Gauss-Jordan (prático para qualquer ordem)
                </strong>
                <p className="text-gray-700 mb-2">
                  Monte uma matriz aumentada [A | I], onde I é a matriz
                  identidade de mesma ordem de A, e aplique operações
                  elementares até transformar A na identidade. Ao final, a parte
                  que era I se transforma em A⁻¹.
                </p>
              </li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Exemplo 1: Inversa de uma matriz 2×2
            </h2>
            <p className="text-gray-700 mb-2">Seja:</p>
            <p className="text-gray-700 mb-2">Matriz A:</p>
            <MatrixDisplay
              matrix={[
                [2, 5],
                [1, 3],
              ]}
            />
            <p className="text-gray-700 mb-2">
              Determinante: det(A) = 2 ⋅ 3 - 5 ⋅ 1 = 6 - 5 = 1
            </p>
            <p className="text-gray-700 mb-2">
              A⁻¹ = (1 / det(A)) ⋅
              <MatrixDisplay
                matrix={[
                  [3, -5],
                  [-1, 2],
                ]}
              />
            </p>
            <p className="text-gray-700 mb-2">Substituindo det(A) = 1:</p>
            <p className="text-gray-700">
              A⁻¹ = (1 / 1) ⋅
              <MatrixDisplay
                matrix={[
                  [3, -5],
                  [-1, 2],
                ]}
              />
              =
              <MatrixDisplay
                matrix={[
                  [3, -5],
                  [-1, 2],
                ]}
              />
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Exemplo 2: Inversa de matriz 3×3 (resumo por adjunta)
            </h2>
            <p className="text-gray-700 mb-2">Seja:</p>
            <p className="text-gray-700 mb-2">Matriz A:</p>
            <MatrixDisplay
              matrix={[
                [1, 0, 2],
                [-1, 3, 1],
                [2, -2, 1],
              ]}
            />
            <p className="text-gray-700 mb-2">
              Calcule det(A) = 1(3 ⋅ 1 - 1 ⋅ (-2)) - 0 + 2(-1 ⋅ 1 - 3 ⋅ 2) = 1(3
              + 2) + 2(-1 - 6) = 5 - 14 = -9
            </p>
            <p className="text-gray-700 mb-2">
              Calcule os cofatores de cada elemento (não mostrado aqui por
              espaço)
            </p>
            <p className="text-gray-700 mb-2">
              Monte a matriz adjunta (transposta dos cofatores)
            </p>
            <p className="text-gray-700 mb-2">
              Aplique: A⁻¹ = (1 / -9) ⋅ adj(A)
            </p>
            <p className="text-gray-700">
              O cálculo é mais longo, mas totalmente mecânico.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Propriedades da inversa de matrizes
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>(A⁻¹)⁻¹ = A</li>
              <li>(AB)⁻¹ = B⁻¹ ⋅ A⁻¹ (inverte a ordem!)</li>
              <li>(Aᵀ)⁻¹ = (A⁻¹)ᵀ</li>
              <li>Se det(A) ≠ 0, então A é invertível</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Aplicações da matriz inversa
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Resolução de sistemas lineares: AX = B ⇒ X = A⁻¹B</li>
              <li>
                Criptografia (criptografar/decodificar mensagens com
                multiplicação de matrizes)
              </li>
              <li>Transformações geométricas reversas</li>
              <li>Normalização de dados em IA e estatística</li>
              <li>Modelagem de equações diferenciais</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Conclusão
            </h2>
            <p className="text-gray-700">
              A inversa de uma matriz é uma das ferramentas mais poderosas da
              Álgebra Linear, permitindo resolver sistemas, inverter
              transformações e operar com precisão em diversas áreas
              científicas. Embora o cálculo possa parecer complexo em matrizes
              maiores, os métodos apresentados — como a adjunta e Gauss-Jordan —
              são sistemáticos e eficientes. Com prática, a obtenção da inversa
              se torna simples e natural.
            </p>
            <p className="mt-4 text-gray-700">
              Continue aprendendo com nosso tutorial sobre{" "}
              <Link to="/tutorial/3" className="text-blue-600 hover:underline">
                Método de Gauss-Jordan
              </Link>
              .
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Método de Gauss: Teoria, Passo a Passo e Exemplos Detalhados",
      description:
        "Aprenda o Método de Gauss para resolver sistemas lineares, com teoria, passos detalhados e exemplos práticos.",
      content: (
        <div className="p-6 max-w-4xl mx-auto">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li>
                <Link to="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <span className="text-gray-500">Método de Gauss</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Método de Gauss: Teoria, Passo a Passo e Exemplos Detalhados
          </h1>
          <p className="mb-6 text-gray-700">
            O Método de Gauss, ou eliminação de Gauss, é uma técnica algébrica
            usada para resolver sistemas lineares. Ele consiste em aplicar
            operações elementares nas equações do sistema (ou nas linhas de uma
            matriz) até obter uma forma mais simples, chamada de forma
            escalonada, que permite encontrar as variáveis por substituição
            retroativa.
          </p>
          <p className="mb-6 text-gray-700">
            Esse método é um dos mais importantes da Álgebra Linear, base de
            diversos algoritmos computacionais e de ferramentas utilizadas em
            engenharia, ciência de dados, estatística, física e economia.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Objetivo do Método de Gauss
            </h2>
            <p className="text-gray-700 mb-2">
              Transformar o sistema linear (ou matriz ampliada) em uma forma
              triangular superior ou escalonada, de modo que:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                Os coeficientes abaixo da diagonal principal sejam zerados.
              </li>
              <li>
                A última linha contenha apenas uma variável, a penúltima
                contenha duas, e assim por diante.
              </li>
            </ul>
            <p className="text-gray-700">
              Isso permite resolver o sistema com substituições retroativas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Forma matricial de um sistema linear
            </h2>
            <p className="text-gray-700 mb-2">Dado um sistema:</p>
            <p className="text-gray-700">
              a₁₁x + a₁₂y + a₁₃z = b₁
              <br />
              a₂₁x + a₂₂y + a₂₃z = b₂
              <br />
              a₃₁x + a₃₂y + a₃₃z = b₃
            </p>
            <p className="text-gray-700 mt-2">
              Pode-se representá-lo por uma matriz aumentada [A | b]:
            </p>
            <MatrixDisplay
              matrix={[
                [
                  <code>a₁₁</code>,
                  <code>a₁₂</code>,
                  <code>a₁₃</code>,
                  <code>b₁</code>,
                ],
                [
                  <code>a₂₁</code>,
                  <code>a₂₂</code>,
                  <code>a₂₃</code>,
                  <code>b₂</code>,
                ],
                [
                  <code>a₃₁</code>,
                  <code>a₃₂</code>,
                  <code>a₃₃</code>,
                  <code>b₃</code>,
                ],
              ]}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Operações elementares permitidas
            </h2>
            <p className="text-gray-700 mb-2">
              Durante o processo de eliminação, podemos usar três operações
              elementares com as linhas da matriz:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Trocar duas linhas entre si: Lᵢ ↔ Lⱼ</li>
              <li>
                Multiplicar uma linha por um escalar não-nulo: Lᵢ ← λ ⋅ Lᵢ
              </li>
              <li>
                Somar ou subtrair um múltiplo de uma linha em outra: Lᵢ ← Lᵢ + λ
                ⋅ Lⱼ
              </li>
            </ul>
            <p className="text-gray-700">
              Essas operações não alteram a solução do sistema.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Passo a passo do Método de Gauss
            </h2>
            <p className="text-gray-700 mb-2">
              Transformar a matriz aumentada em forma escalonada:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-4">
              <li>Escolha um pivô (elemento não-nulo) na coluna atual.</li>
              <li>
                Use-o para zerar os elementos abaixo dele na mesma coluna, com
                operações do tipo Lᵢ ← Lᵢ - m ⋅ Lₖ.
              </li>
              <li>
                Repetir o processo nas linhas seguintes, até que toda a parte
                inferior da matriz esteja zerada.
              </li>
              <li>
                Resolver o sistema por substituição retroativa, começando da
                última linha.
              </li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Exemplo completo
            </h2>
            <p className="text-gray-700 mb-2">Resolver o sistema:</p>
            <p className="text-gray-700">
              2x + 3y - z = 5
              <br />
              4x + 4y - 3z = 3
              <br />
              -2x + 3y + 2z = 7
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
              Passo 1: Montar a matriz aumentada
            </h3>
            <MatrixDisplay
              matrix={[
                [2, 3, -1, 5],
                [4, 4, -3, 3],
                [-2, 3, 2, 7],
              ]}
            />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
              Passo 2: Eliminar o x das linhas 2 e 3
            </h3>
            <p className="text-gray-700 mb-2">Pivô: 2 (posição (1,1))</p>
            <p className="text-gray-700 mb-2">L₂ ← L₂ - 2 ⋅ L₁:</p>
            <p className="text-gray-700">
              L₂ = [4, 4, -3 | 3] - 2 ⋅ [2, 3, -1 | 5] = [0, -2, -1 | -7]
            </p>
            <p className="text-gray-700 mb-2">L₃ ← L₃ + L₁:</p>
            <p className="text-gray-700">
              L₃ = [-2, 3, 2 | 7] + [2, 3, -1 | 5] = [0, 6, 1 | 12]
            </p>
            <MatrixDisplay
              matrix={[
                [2, 3, -1, 5],
                [0, -2, -1, -7],
                [0, 6, 1, 12],
              ]}
            />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
              Passo 3: Eliminar o y da linha 3 usando linha 2
            </h3>
            <p className="text-gray-700 mb-2">
              Pivô da coluna 2: -2 (posição (2,2))
            </p>
            <p className="text-gray-700 mb-2">L₃ ← L₃ - 3 ⋅ L₂:</p>
            <p className="text-gray-700">
              L₃ = [0, 6, 1 | 12] - 3 ⋅ [0, -2, -1 | -7] = [0, 0, 4 | 33]
            </p>
            <MatrixDisplay
              matrix={[
                [2, 3, -1, 5],
                [0, -2, -1, -7],
                [0, 0, 4, 33],
              ]}
            />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
              Passo 4: Substituição retroativa
            </h3>
            <p className="text-gray-700 mb-2">
              Última equação: 4z = 33 ⇒ z = 33/4
            </p>
            <p className="text-gray-700 mb-2">
              Segunda: -2y - z = -7 ⇒ -2y - 33/4 = -7 ⇒ y = 1/8
            </p>
            <p className="text-gray-700 mb-2">
              Primeira: 2x + 3y - z = 5 ⇒ 2x + 3 ⋅ 1/8 - 33/4 = 5
            </p>
            <p className="text-gray-700">
              2x + 3/8 - 33/4 = 5 ⇒ 2x = 5 - 3/8 + 33/4 ⇒ 2x = 103/8 ⇒ x =
              103/16
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Vantagens do Método de Gauss
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                Serve para qualquer sistema linear, mesmo com muitas variáveis.
              </li>
              <li>É sistemático e pode ser automatizado em algoritmos.</li>
              <li>
                Pode ser adaptado para verificar existência e unicidade de
                soluções.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Tipos de soluções possíveis
            </h2>
            <p className="text-gray-700 mb-2">
              Durante o processo, o sistema pode revelar diferentes situações:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Sistema possível e determinado (SPD): uma única solução.</li>
              <li>
                Sistema possível e indeterminado (SPI): infinitas soluções
                (aparece linha com zeros e igualdade verdadeira, como 0 = 0).
              </li>
              <li>
                Sistema impossível (SI): sem solução (aparece linha com zeros e
                igualdade falsa, como 0 = 5).
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Conclusão
            </h2>
            <p className="text-gray-700">
              O método de Gauss é uma ferramenta poderosa para resolver sistemas
              lineares de forma organizada e precisa. Ele baseia-se na
              eliminação progressiva de variáveis, transformando a matriz
              aumentada em uma forma escalonada, facilitando a resolução por
              substituição retroativa. É um dos pilares da Álgebra Linear,
              amplamente utilizado em aplicações computacionais, científicas e
              tecnológicas.
            </p>
            <p className="mt-4 text-gray-700">
              Continue aprendendo com nosso tutorial sobre{" "}
              <Link to="/tutorial/1" className="text-blue-600 hover:underline">
                Determinantes
              </Link>
              .
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "O que é Transposição de Matrizes?",
      description:
        "Aprenda o conceito de transposição de matrizes, com exemplos práticos e aplicações em Álgebra Linear.",
      content: (
        <div className="p-6 max-w-4xl mx-auto">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li>
                <Link to="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <span className="text-gray-500">Transposição de Matrizes</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            O que é Transposição de Matrizes?
          </h1>
          <p className="mb-6 text-gray-700">
            A transposição de matrizes é uma operação fundamental da Álgebra
            Linear que consiste em inverter as linhas e colunas de uma matriz. A
            matriz resultante é chamada de matriz transposta.
          </p>
          <p className="mb-6 text-gray-700">
            Essa operação é simples, mas essencial em diversos contextos
            matemáticos e computacionais, como em análise de dados,
            processamento de imagens, algoritmos de aprendizado de máquina,
            entre outros.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Definição Formal
            </h2>
            <p className="text-gray-700 mb-2">
              Dada uma matriz A de ordem m×n, sua transposta, denotada por Aᵀ
              (ou às vezes A′), é uma matriz de ordem n×m obtida trocando-se
              suas linhas por colunas.
            </p>
            <p className="text-gray-700 mb-2">Ou seja, se:</p>
            <MatrixDisplay
              matrix={[
                [
                  <code>a₁₁</code>,
                  <code>a₁₂</code>,
                  <code>...</code>,
                  <code>a₁ₙ</code>,
                ],
                [
                  <code>a₂₁</code>,
                  <code>a₂₂</code>,
                  <code>...</code>,
                  <code>a₂ₙ</code>,
                ],
                [
                  <code>⋮</code>,
                  <code>⋮</code>,
                  <code>⋱</code>,
                  <code>⋮</code>,
                ],
                [
                  <code>aₘ₁</code>,
                  <code>aₘ₂</code>,
                  <code>...</code>,
                  <code>aₘₙ</code>,
                ],
              ]}
            />
            <p className="text-gray-700 mt-2">Então sua transposta será:</p>
            <MatrixDisplay
              matrix={[
                [
                  <code>a₁₁</code>,
                  <code>a₂₁</code>,
                  <code>...</code>,
                  <code>aₘ₁</code>,
                ],
                [
                  <code>a₁₂</code>,
                  <code>a₂₂</code>,
                  <code>...</code>,
                  <code>aₘ₂</code>,
                ],
                [
                  <code>⋮</code>,
                  <code>⋮</code>,
                  <code>⋱</code>,
                  <code>⋮</code>,
                ],
                [
                  <code>a₁ₙ</code>,
                  <code>a₂ₙ</code>,
                  <code>...</code>,
                  <code>aₘₙ</code>,
                ],
              ]}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Como fazer a transposição de uma matriz
            </h2>
            <p className="text-gray-700 mb-2">Passo a passo:</p>
            <ol className="list-decimal pl-6 text-gray-700 mb-4">
              <li>
                Identifique a ordem da matriz original (linhas e colunas).
              </li>
              <li>
                Crie uma nova matriz onde:
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    As colunas da original se tornam linhas da transposta.
                  </li>
                  <li>
                    As linhas da original se tornam colunas da transposta.
                  </li>
                </ul>
              </li>
              <li>Copie os elementos da posição a_ij para a posição a_ji.</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Exemplo 1: Matriz 2×3
            </h2>
            <p className="text-gray-700 mb-2">Seja a matriz:</p>
            <p className="text-gray-700 mb-2">A =</p>
            <MatrixDisplay
              matrix={[
                [1, 4, 7],
                [2, 5, 8],
              ]}
            />
            <p className="text-gray-700 mt-2">Transpondo:</p>
            <p className="text-gray-700 mb-2">Aᵀ =</p>
            <MatrixDisplay
              matrix={[
                [1, 2],
                [4, 5],
                [7, 8],
              ]}
            />
            <p className="text-gray-700 mt-2">Observe que:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>A matriz original é de ordem 2×3.</li>
              <li>A transposta tem ordem 3×2.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Exemplo 2: Matriz quadrada 3×3
            </h2>
            <p className="text-gray-700 mb-2">Seja a matriz:</p>
            <p className="text-gray-700 mb-2">B =</p>
            <MatrixDisplay
              matrix={[
                [2, 0, -1],
                [5, 3, 4],
                [7, 1, 9],
              ]}
            />
            <p className="text-gray-700 mt-2">Transpondo:</p>
            <p className="text-gray-700 mb-2">Bᵀ =</p>
            <MatrixDisplay
              matrix={[
                [2, 5, 7],
                [0, 3, 1],
                [-1, 4, 9],
              ]}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Propriedades importantes da transposição
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Dupla transposição: (Aᵀ)ᵀ = A</li>
              <li>Transposta da soma: (A + B)ᵀ = Aᵀ + Bᵀ</li>
              <li>Transposta do produto escalar: (kA)ᵀ = kAᵀ (k ∈ R)</li>
              <li>
                Transposta do produto de matrizes: (AB)ᵀ = BᵀAᵀ (Atenção: a
                ordem das matrizes se inverte)
              </li>
              <li>
                Matriz simétrica: Uma matriz é simétrica se for quadrada e igual
                à sua transposta: A = Aᵀ
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Aplicações da transposição de matrizes
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                Computação gráfica: para rotação e transformação de imagens.
              </li>
              <li>
                Estatística: cálculo de covariâncias, correlações e manipulação
                de vetores coluna/linha.
              </li>
              <li>
                Machine learning: operações com vetores e matrizes de pesos em
                redes neurais.
              </li>
              <li>Resolução de sistemas lineares.</li>
              <li>Multiplicação de matrizes com formas compatíveis.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Conclusão
            </h2>
            <p className="text-gray-700">
              A transposição de matrizes é uma operação simples, porém essencial
              na Álgebra Linear. Ela transforma uma matriz m×n em uma n×m,
              invertendo linhas por colunas. Essa operação é base para o estudo
              de simetria, propriedades algébricas, otimizações computacionais e
              aplicações práticas em ciência e engenharia.
            </p>
            <p className="mt-4 text-gray-700">
              Continue aprendendo com nosso tutorial sobre{" "}
              <Link to="/tutorial/1" className="text-blue-600 hover:underline">
                Determinantes
              </Link>
              .
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title:
        "Multiplicação de Matrizes: Teoria, Regras, Passo a Passo e Exemplos",
      description:
        "Explore a teoria, regras e exemplos práticos da multiplicação de matrizes, uma operação essencial em álgebra linear com aplicações em diversas áreas.",
      content: (
        <div className="p-6 max-w-4xl mx-auto">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li>
                <Link to="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <span className="text-gray-500">Multiplicação de Matrizes</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Multiplicação de Matrizes: Teoria, Regras, Passo a Passo e Exemplos
          </h1>
          <p className="mb-6 text-gray-700">
            A multiplicação de matrizes é uma operação fundamental na Álgebra
            Linear, utilizada em diversas áreas como programação, inteligência
            artificial, gráficos computacionais, economia, física, engenharia e
            estatística. Diferente da multiplicação comum de números, a
            multiplicação de matrizes obedece regras específicas e exige que
            determinadas condições sejam atendidas.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              O que é uma matriz?
            </h2>
            <p className="text-gray-700">
              Uma matriz é uma tabela de números dispostos em linhas e colunas.
              É representada geralmente por letras maiúsculas, como A, B, C,
              etc. Cada elemento da matriz é identificado por dois índices: a
              posição da linha (i) e a posição da coluna (j), ou seja, a
              <sub>ij</sub>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Condição para multiplicação de matrizes
            </h2>
            <p className="text-gray-700 mb-2">
              Para que seja possível multiplicar duas matrizes A × B, o número
              de colunas da matriz A deve ser igual ao número de linhas da
              matriz B. Se A é de ordem m × n e B é de ordem n × p, então o
              produto A × B será uma matriz de ordem m × p.
            </p>
            <p className="text-gray-700">
              Exemplo de dimensão compatível:
              <br />A<sub>2×3</sub> × B<sub>3×4</sub> = C<sub>2×4</sub>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Como multiplicar duas matrizes (Passo a Passo)
            </h2>
            <ol className="list-decimal pl-6 text-gray-700 mb-4">
              <li>
                Verifique se as matrizes são multiplicáveis
                <p className="ml-5">
                  Compare as dimensões. A multiplicação só é possível se o
                  número de colunas da primeira for igual ao número de linhas da
                  segunda.
                </p>
              </li>
              <li>
                Determine a ordem da matriz resultante
                <p className="ml-5">
                  A matriz resultante terá o número de linhas da primeira matriz
                  e o número de colunas da segunda.
                </p>
              </li>
              <li>
                Calcule os elementos da matriz resultante
                <p className="ml-5">
                  O elemento c<sub>ij</sub> da matriz resultado é calculado
                  multiplicando os elementos da linha i da primeira matriz pelos
                  elementos da coluna j da segunda matriz e somando os
                  resultados: c<sub>ij</sub> = Σ<sub>k=1</sub>
                  <sup>n</sup> a<sub>ik</sub> ⋅ b<sub>kj</sub>.
                </p>
              </li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Exemplo 1: Multiplicação de matriz 2×3 com matriz 3×2
            </h2>
            <p className="text-gray-700 mb-2">Sejam:</p>
            <p className="text-gray-700 mb-2">Matriz A:</p>
            <MatrixDisplay
              matrix={[
                [1, 2, 3],
                [4, 5, 6],
              ]}
            />
            <p className="text-gray-700 mb-2">Matriz B:</p>
            <MatrixDisplay
              matrix={[
                [7, 8],
                [9, 10],
                [11, 12],
              ]}
            />
            <p className="text-gray-700 mb-2">
              Multiplicamos para obter a matriz C (resultado):
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Elemento c11 (1ª linha de A × 1ª coluna de B):</strong>
                <ul className="list-none pl-5">
                  <li>a11 * b11: 1 * 7 = 7</li>
                  <li>a12 * b21: 2 * 9 = 18</li>
                  <li>a13 * b31: 3 * 11 = 33</li>
                  <li>Soma: 7 + 18 + 33 = 58</li>
                </ul>
              </li>
              <li>
                <strong>Elemento c12 (1ª linha de A × 2ª coluna de B):</strong>
                <ul className="list-none pl-5">
                  <li>a11 * b12: 1 * 8 = 8</li>
                  <li>a12 * b22: 2 * 10 = 20</li>
                  <li>a13 * b32: 3 * 12 = 36</li>
                  <li>Soma: 8 + 20 + 36 = 64</li>
                </ul>
              </li>
              <li>
                <strong>Elemento c21 (2ª linha de A × 1ª coluna de B):</strong>
                <ul className="list-none pl-5">
                  <li>a21 * b11: 4 * 7 = 28</li>
                  <li>a22 * b21: 5 * 9 = 45</li>
                  <li>a23 * b31: 6 * 11 = 66</li>
                  <li>Soma: 28 + 45 + 66 = 139</li>
                </ul>
              </li>
              <li>
                <strong>Elemento c22 (2ª linha de A × 2ª coluna de B):</strong>
                <ul className="list-none pl-5">
                  <li>a21 * b12: 4 * 8 = 32</li>
                  <li>a22 * b22: 5 * 10 = 50</li>
                  <li>a23 * b32: 6 * 12 = 72</li>
                  <li>Soma: 32 + 50 + 72 = 154</li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-700 mt-2">Matriz C (resultado):</p>
            <MatrixDisplay
              matrix={[
                [58, 64],
                [139, 154],
              ]}
            />
            <Link to="/" className="text-blue-600 hover:underline mt-2 block">
              Teste na calculadora!
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Exemplo 2: Multiplicação de matriz quadrada 2×2
            </h2>
            <p className="text-gray-700 mb-2">Sejam:</p>
            <p className="text-gray-700 mb-2">Matriz A:</p>
            <MatrixDisplay
              matrix={[
                [2, 4],
                [3, 1],
              ]}
            />
            <p className="text-gray-700 mb-2">Matriz B:</p>
            <MatrixDisplay
              matrix={[
                [5, 0],
                [1, 2],
              ]}
            />
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-lg font-semibold mb-2">Multiplicamos:</h3>
              <p className="mb-2">C = A × B</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-mono">
                    (a11 * b11 + a12 * b21): (2 * 5 + 4 * 1) = 10 + 4 = 14
                  </p>
                  <p className="font-mono">
                    (a11 * b12 + a12 * b22): (2 * 0 + 4 * 2) = 0 + 8 = 8
                  </p>
                </div>
                <div>
                  <p className="font-mono">
                    (a21 * b11 + a22 * b21): (3 * 5 + 1 * 1) = 15 + 1 = 16
                  </p>
                  <p className="font-mono">
                    (a21 * b12 + a22 * b22): (3 * 0 + 1 * 2) = 0 + 2 = 2
                  </p>
                </div>
              </div>
              <p className="mt-2">Matriz C (resultado):</p>
              <MatrixDisplay
                matrix={[
                  [14, 8],
                  [16, 2],
                ]}
              />
            </div>
            <Link to="/" className="text-blue-600 hover:underline mt-2 block">
              Experimente na calculadora!
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Propriedades importantes da multiplicação de matrizes
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Não comutativa: A × B ≠ B × A, em geral.</li>
              <li>Associativa: A × (B × C) = (A × B) × C</li>
              <li>Distributiva: A × (B + C) = A × B + A × C</li>
              <li>
                Elemento neutro: A matriz identidade I funciona como o 1 na
                multiplicação: A × I = A
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Aplicações práticas da multiplicação de matrizes
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                Transformações geométricas em computação gráfica (escala,
                rotação, translação)
              </li>
              <li>Sistemas de equações lineares</li>
              <li>
                Redes neurais artificiais, onde os pesos são representados por
                matrizes
              </li>
              <li>Modelos econômicos e métodos numéricos</li>
              <li>Análise de dados e estatística</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Conclusão
            </h2>
            <p className="text-gray-700">
              A multiplicação de matrizes é uma operação essencial em matemática
              e suas aplicações práticas são vastas. Embora pareça complicada no
              início, ao entender a lógica por trás da operação (linha ×
              coluna), o processo se torna mais simples com a prática. O domínio
              dessa técnica é crucial para quem trabalha com dados, computação,
              engenharia ou qualquer ciência aplicada.
            </p>
            <p className="mt-4 text-gray-700">
              Continue aprendendo com nosso tutorial sobre{" "}
              <Link to="/tutorial/2" className="text-blue-600 hover:underline">
                Inversa de Matrizes
              </Link>
              .
            </p>
          </div>
        </div>
      ),
    },
  ];

  const tutorial = tutoriais.find((t) => t.id === parseInt(id));

  if (!tutorial) {
    return (
      <main className="mt-32 p-6 max-w-4xl mx-auto">
        <Helmet>
          <title>Tutorial Não Encontrado - Matrizes+</title>
          <meta
            name="description"
            content="O tutorial solicitado não foi encontrado no Matrizes+. Volte para a página inicial e explore nossos tutoriais de álgebra linear."
          />
          <meta
            name="keywords"
            content="tutorial não encontrado, matrizes, álgebra linear"
          />
          <meta name="robots" content="noindex" />
          <link
            rel="canonical"
            href="https://projeto-calculadora-matrizes.vercel.app/"
          />
        </Helmet>
        <h1 className="text-3xl font-bold mb-4">Tutorial Não Encontrado</h1>
        <p>Desculpe, o tutorial solicitado não existe.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Voltar para a página inicial
        </Link>
      </main>
    );
  }

  return (
    <main className="mt-32 p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>{tutorial.title} | Tutoriais de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content={`${tutorial.description} Acesse exemplos práticos e use nossa calculadora online para matrizes!`}
        />
        <meta
          name="keywords"
          content={[
            "matrizes",
            "álgebra linear",
            "calculadora de matrizes",
            tutorial.id === 1
              ? "determinante"
              : tutorial.id === 2
              ? "inversa"
              : "eliminação de gauss",
            tutorial.title.toLowerCase().replace("?", ""),
          ].join(", ")}
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://projeto-calculadora-matrizes.vercel.app/tutorial/${id}`}
        />
        <meta
          property="og:title"
          content={`${tutorial.title} | Tutoriais de Matrizes - Matrizes+`}
        />
        <meta
          property="og:description"
          content={`${tutorial.description} Acesse exemplos práticos e use nossa calculadora online para matrizes!`}
        />
        <meta
          property="og:url"
          content={`https://projeto-calculadora-matrizes.vercel.app/tutorial/${id}`}
        />
        <meta
          property="og:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${tutorial.title} | Tutoriais de Matrizes - Matrizes+`}
        />
        <meta
          name="twitter:description"
          content={`${tutorial.description} Acesse exemplos práticos e use nossa calculadora online para matrizes!`}
        />
        <meta
          name="twitter:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: tutorial.title,
            description: tutorial.description,
            step: [
              { "@type": "HowToStep", text: "Leia o tutorial passo a passo." },
              {
                "@type": "HowToStep",
                text: "Siga os exemplos práticos fornecidos.",
              },
              {
                "@type": "HowToStep",
                text: "Use nossa calculadora para praticar os cálculos.",
              },
            ],
            supply: { "@type": "HowToSupply", name: "Calculadora de Matrizes" },
            estimatedCost: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "USD",
            },
          })}
        </script>
      </Helmet>
      <article>{tutorial.content}</article>
      <Link to="/" className="text-blue-600 hover:underline mt-6 inline-block">
        Voltar para a página inicial
      </Link>
    </main>
  );
}

export default TutorialPage;