import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function TutorialPage() {
  const { id } = useParams();

  const tutoriais = [
    {
      id: 1,
      title: "O que é um Determinante?",
      description:
        "Aprenda o que é um determinante e como calculá-lo em matrizes 2x2.",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">O que é um Determinante?</h2>
          <p className="mb-4">
            O determinante é um valor escalar associado a uma matriz quadrada
            que revela propriedades importantes, como a existência de uma
            inversa ou a solução de sistemas lineares. Ele é amplamente
            utilizado em álgebra linear e tem aplicações em física, engenharia e
            computação.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Como Calcular (Matriz 2x2)
          </h3>
          <p className="mb-4">
            Para uma matriz 2x2 da forma:
            <pre className="bg-gray-100 p-2 rounded my-2">[[a, b], [c, d]]</pre>
            O determinante é calculado pela fórmula:{" "}
            <code>det(A) = ad - bc</code>.
          </p>
          <h3 className="text-xl font-semibold mb-2">Exemplo 1</h3>
          <p className="mb-4">
            Considere a matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">[[1, 2], [3, 4]]</pre>
            O determinante é:{" "}
            <code>det(A) = (1 * 4) - (2 * 3) = 4 - 6 = -2</code>.
          </p>
          <h3 className="text-xl font-semibold mb-2">Exemplo 2</h3>
          <p className="mb-4">
            Para a matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">[[5, 3], [2, 1]]</pre>
            O determinante é:{" "}
            <code>det(A) = (5 * 1) - (3 * 2) = 5 - 6 = -1</code>.
          </p>
          <h3 className="text-xl font-semibold mb-2">Aplicações</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Verificar se uma matriz é invertível (det ≠ 0).</li>
            <li>Resolver sistemas lineares usando a regra de Cramer.</li>
            <li>Calcular áreas de paralelogramos em geometria.</li>
          </ul>
          <p className="mb-4">
            Para matrizes maiores (ex.: 3x3), o cálculo envolve somas e
            diferenças de produtos, geralmente usando o método de cofatores.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Como Encontrar a Inversa de uma Matriz",
      description:
        "Descubra os passos para calcular a inversa de uma matriz 2x2.",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Como Encontrar a Inversa de uma Matriz
          </h2>
          <p className="mb-4">
            A inversa de uma matriz A é uma matriz A⁻¹ que, quando multiplicada
            por A, resulta na matriz identidade (I). Ou seja, A * A⁻¹ = I. A
            inversa só existe se o determinante de A for diferente de zero.
          </p>
          <h3 className="text-xl font-semibold mb-2">Passos para Matriz 2x2</h3>
          <ol className="list-decimal pl-5 mb-4">
            <li>Calcule o determinante da matriz.</li>
            <li>
              Se det ≠ 0, troque os elementos da diagonal principal (a e d) e
              inverta o sinal dos elementos fora da diagonal (b e c).
            </li>
            <li>Multiplique a matriz resultante por 1/determinante.</li>
          </ol>
          <h3 className="text-xl font-semibold mb-2">Fórmula</h3>
          <p className="mb-4">
            Para uma matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">[[a, b], [c, d]]</pre>
            A inversa é:
            <pre className="bg-gray-100 p-2 rounded my-2">
              (1 / (ad - bc)) * [[d, -b], [-c, a]]
            </pre>
          </p>
          <h3 className="text-xl font-semibold mb-2">Exemplo 1</h3>
          <p className="mb-4">
            Para a matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">[[1, 2], [3, 4]]</pre>
            1. Determinante: <code>(1 * 4) - (2 * 3) = 4 - 6 = -2</code>. 2.
            Matriz adjunta: <code>[[4, -2], [-3, 1]]</code>. 3. Inversa:{" "}
            <code>(1 / -2) * [[4, -2], [-3, 1]] = [[-2, 1], [1.5, -0.5]]</code>.
          </p>
          <h3 className="text-xl font-semibold mb-2">Exemplo 2</h3>
          <p className="mb-4">
            Para a matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">[[4, 7], [2, 6]]</pre>
            1. Determinante: <code>(4 * 6) - (7 * 2) = 24 - 14 = 10</code>. 2.
            Matriz adjunta: <code>[[6, -7], [-2, 4]]</code>. 3. Inversa:{" "}
            <code>
              (1 / 10) * [[6, -7], [-2, 4]] = [[0.6, -0.7], [-0.2, 0.4]]
            </code>
            .
          </p>
          <h3 className="text-xl font-semibold mb-2">Cuidados</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Se o determinante for zero, a matriz não tem inversa.</li>
            <li>
              Para matrizes maiores, use métodos como eliminação de Gauss ou
              cofatores.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "Eliminação de Gauss Explicada",
      description:
        "Entenda como usar a eliminação de Gauss para resolver sistemas lineares.",
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Eliminação de Gauss Explicada
          </h2>
          <p className="mb-4">
            A eliminação de Gauss é um método para transformar uma matriz em sua
            forma escalonada por linhas, facilitando a resolução de sistemas
            lineares ou a análise de propriedades da matriz.
          </p>
          <h3 className="text-xl font-semibold mb-2">Passos do Método</h3>
          <ol className="list-decimal pl-5 mb-4">
            <li>
              Escolha um pivô (o primeiro elemento não nulo de uma coluna).
            </li>
            <li>
              Use operações de linha para zerar os elementos abaixo do pivô,
              subtraindo múltiplos da linha do pivô.
            </li>
            <li>
              Repita o processo para as próximas colunas até obter a forma
              escalonada.
            </li>
          </ol>
          <h3 className="text-xl font-semibold mb-2">Exemplo 1</h3>
          <p className="mb-4">
            Para a matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">[[1, 2], [3, 4]]</pre>
            Passo 1: Subtrair 3 * linha 1 da linha 2 para zerar o elemento
            [2,1]:
            <pre className="bg-gray-100 p-2 rounded my-2">
              [[1, 2], [0, -2]]
            </pre>
            A matriz está na forma escalonada.
          </p>
          <h3 className="text-xl font-semibold mb-2">Exemplo 2</h3>
          <p className="mb-4">
            Para a matriz:
            <pre className="bg-gray-100 p-2 rounded my-2">[[2, 1], [4, 3]]</pre>
            Passo 1: Dividir a linha 1 por 2 para tornar o pivô igual a 1:
            <pre className="bg-gray-100 p-2 rounded my-2">
              [[1, 0.5], [4, 3]]
            </pre>
            Passo 2: Subtrair 4 * linha 1 da linha 2:
            <pre className="bg-gray-100 p-2 rounded my-2">
              [[1, 0.5], [0, 1]]
            </pre>
            A matriz está na forma escalonada.
          </p>
          <h3 className="text-xl font-semibold mb-2">Aplicações</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Resolver sistemas lineares de equações.</li>
            <li>Encontrar a inversa de uma matriz.</li>
            <li>Analisar a independência linear de vetores.</li>
          </ul>
          <p className="mb-4">
            Para sistemas maiores, a eliminação de Gauss pode ser combinada com
            a eliminação de Gauss-Jordan para obter a forma reduzida.
          </p>
        </div>
      ),
    },
  ];

  const tutorial = tutoriais.find((t) => t.id === parseInt(id));

  if (!tutorial) {
    return (
      <main className="p-6 max-w-4xl mx-auto">
        <Helmet>
          <title>Tutorial Não Encontrado - Matrizes+</title>
          <meta
            name="description"
            content="O tutorial solicitado não foi encontrado no Matrizes+."
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
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>{tutorial.title} - Matrizes+</title>
        <meta name="description" content={tutorial.description} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://projeto-calculadora-matrizes.vercel.app/tutorial/${id}`}
        />
        <meta property="og:title" content={`${tutorial.title} - Matrizes+`} />
        <meta property="og:description" content={tutorial.description} />
        <meta
          property="og:url"
          content={`https://projeto-calculadora-matrizes.vercel.app/tutorial/${id}`}
        />
        <meta
          property="og:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${tutorial.title} - Matrizes+`} />
        <meta name="twitter:description" content={tutorial.description} />
        <meta
          name="twitter:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
      </Helmet>
      <article>{tutorial.content}</article>
      <Link to="/" className="text-blue-600 hover:underline mt-6 inline-block">
        Voltar para a página inicial
      </Link>
      {/* Bloco de anúncios automáticos */}
      <div className="my-8 ad-container">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6065257343138670"
          data-ad-slot="1234567890" // Substitua pelo seu data-ad-slot
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </main>
  );
}

export default TutorialPage;