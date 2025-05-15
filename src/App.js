import React, { useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import * as math from "mathjs";

// Componentes de páginas estáticas
function PoliticaPrivacidade() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Política de Privacidade - Matrizes+</title>
        <meta
          name="description"
          content="Saiba como o Matrizes+ coleta, usa e protege suas informações."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://projeto-calculadora-matrizes.vercel.app/politica" />
        <meta property="og:title" content="Política de Privacidade - Matrizes+" />
        <meta
          property="og:description"
          content="Leia a política de privacidade do Matrizes+ para entender como protegemos seus dados."
        />
        <meta property="og:url" content="https://projeto-calculadora-matrizes.vercel.app/politica" />
        <meta property="og:image" content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Privacidade - Matrizes+" />
        <meta
          name="twitter:description"
          content="Leia a política de privacidade do Matrizes+ para entender como protegemos seus dados."
        />
        <meta name="twitter:image" content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
      <p className="mb-2">
        Esta Política de Privacidade descreve como as informações são coletadas,
        usadas e protegidas no site "Matrizes+".
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        <li>
          <strong>Coleta de Informações:</strong> coletamos dados não pessoais
          (tipo de navegador, dispositivo, páginas visitadas). Nenhum dado
          pessoal é coletado sem consentimento.
        </li>
        <li>
          <strong>Uso das Informações:</strong> as informações são utilizadas
          para melhorar o site e exibir anúncios personalizados via Google
          AdSense.
        </li>
        <li>
          <strong>Compartilhamento:</strong> não compartilhamos dados com
          terceiros, exceto se exigido por lei.
        </li>
        <li>
          <strong>Segurança:</strong> protegemos as informações com medidas
          técnicas adequadas.
        </li>
        <li>
          <strong>Alterações:</strong> esta política pode ser atualizada
          periodicamente.
        </li>
      </ul>
      <p className="mt-4 text-sm">
        Dúvidas? Entre em contato através da aba{" "}
        <Link to="/contato" className="text-blue-600 hover:underline">
          Contato
        </Link>.
      </p>
    </main>
  );
}

function TermosUso() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Termos de Uso - Matrizes+</title>
        <meta
          name="description"
          content="Conheça os termos de uso do Matrizes+, site educacional gratuito."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://projeto-calculadora-matrizes.vercel.app/termos" />
        <meta property="og:title" content="Termos de Uso - Matrizes+" />
        <meta
          property="og:description"
          content="Leia os termos de uso do Matrizes+, site gratuito para aprendizado de matrizes."
        />
        <meta property="og:url" content="https://projeto-calculadora-matrizes.vercel.app/termos" />
        <meta property="og:image" content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Termos de Uso - Matrizes+" />
        <meta
          name="twitter:description"
          content="Leia os termos de uso do Matrizes+, site gratuito para aprendizado de matrizes."
        />
        <meta name="twitter:image" content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        <li>
          <strong>Uso Permitido:</strong> este site é gratuito e para fins
          educacionais.
        </li>
        <li>
          <strong>Conteúdo:</strong> fornecido "como está". Não garantimos
          precisão absoluta.
        </li>
        <li>
          <strong>Propriedade Intelectual:</strong> o conteúdo pertence ao site
          Matrizes+. Cópias não autorizadas são proibidas.
        </li>
        <li>
          <strong>Limitação de Responsabilidade:</strong> não nos
          responsabilizamos por perdas decorrentes do uso do site.
        </li>
        <li>
          <strong>Anúncios:</strong> anúncios são gerenciados pelo Google. Não
          nos responsabilizamos pelo conteúdo dos mesmos.
        </li>
        <li>
          <strong>Alterações:</strong> estes termos podem ser modificados sem
          aviso prévio.
        </li>
      </ul>
      <p className="mt-4 text-sm">
        Veja também nossa{" "}
        <Link to="/politica" className="text-blue-600 hover:underline">
          Política de Privacidade
        </Link>.
      </p>
    </main>
  );
}

function Contato() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Contato - Matrizes+</title>
        <meta
          name="description"
          content="Entre em contato com o Matrizes+ para dúvidas ou suporte."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://projeto-calculadora-matrizes.vercel.app/contato" />
        <meta property="og:title" content="Contato - Matrizes+" />
        <meta
          property="og:description"
          content="Entre em contato com o Matrizes+ para dúvidas, sugestões ou suporte."
        />
        <meta property="og:url" content="https://projeto-calculadora-matrizes.vercel.app/contato" />
        <meta property="og:image" content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contato - Matrizes+" />
        <meta
          name="twitter:description"
          content="Entre em contato com o Matrizes+ para dúvidas, sugestões ou suporte."
        />
        <meta name="twitter:image" content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <p className="text-sm">
        Se você tiver dúvidas, sugestões ou precisar de suporte, entre em
        contato:
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        <li>
          <strong>📧 E-mail:</strong> suporte@matrizesmais.com
        </li>
      </ul>
    </main>
  );
}

// Componente para página de tutorial individual
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
            Para matrizes maiores bingo (ex.: 3x3), o cálculo envolve somas e
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
          <link rel="canonical" href="https://projeto-calculadora-matrizes.vercel.app/" />
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
      <div className="my-8">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </main>
  );
}

// Componente Home (com tutoriais como caixas)
function Home() {
  const createEmptyMatrix = (n) =>
    Array.from({ length: n }, () => Array(n).fill(""));

  const [size, setSize] = useState(2);
  const [matrixA, setMatrixA] = useState(createEmptyMatrix(size));
  const [matrixB, setMatrixB] = useState(createEmptyMatrix(size));
  const [scalar, setScalar] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("soma");
  const [error, setError] = useState("");
  const [steps, setSteps] = useState([]);

  // Lista de tutoriais (mesma usada em TutorialPage)
  const tutoriais = [
    {
      id: 1,
      title: "O que é um Determinante?",
      description:
        "Aprenda o que é um determinante e como calculá-lo em matrizes 2x2.",
    },
    {
      id: 2,
      title: "Como Encontrar a Inversa de uma Matriz",
      description:
        "Descubra os passos para calcular a inversa de uma matriz 2x2.",
    },
    {
      id: 3,
      title: "Eliminação de Gauss Explicada",
      description:
        "Entenda como usar a eliminação de Gauss para resolver sistemas lineares.",
    },
  ];

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
    setMatrixA(createEmptyMatrix(newSize));
    setMatrixB(createEmptyMatrix(newSize));
    setScalar("");
    setResult(null);
    setError("");
    setSteps([]);
  };

  const handleInputChange = (matrixSetter, matrix, row, col, value) => {
    const updated = matrix.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? value : c))
    );
    matrixSetter(updated);
  };

  const validateMatrix = (matrix) => {
    return matrix.every((row) =>
      row.every((val) => {
        if (val === "") return true;
        const num = parseFloat(val);
        return !isNaN(num) && isFinite(num);
      })
    );
  };

  const isRowEchelonForm = (matrix) => {
    let lastPivotCol = -1;
    for (let i = 0; i < matrix.length; i++) {
      let pivotCol = -1;
      for (let j = 0; j < matrix[i].length; j++) {
        if (Math.abs(matrix[i][j]) > 1e-10) {
          pivotCol = j;
          break;
        }
      }
      if (pivotCol === -1) continue;
      if (pivotCol <= lastPivotCol) return false;
      for (let k = i + 1; k < matrix.length; k++) {
        if (Math.abs(matrix[k][pivotCol]) > 1e-10) return false;
      }
      lastPivotCol = pivotCol;
    }
    return true;
  };

  const toArray = (result) => {
    if (math.isMatrix(result)) {
      return result.toArray();
    }
    if (Array.isArray(result)) {
      return result;
    }
    throw new Error("Resultado não é uma matriz válida");
  };

  const calculate = () => {
    setError("");
    setSteps([]);

    if (!validateMatrix(matrixA) || !validateMatrix(matrixB)) {
      setError("Por favor, insira apenas números válidos nas matrizes.");
      return;
    }

    const parsedA = matrixA.map((row) =>
      row.map((val) => (val === "" ? 0 : parseFloat(val)))
    );
    const parsedB = matrixB.map((row) =>
      row.map((val) => (val === "" ? 0 : parseFloat(val)))
    );

    try {
      const matrixA = math.matrix(parsedA);
      const matrixB = math.matrix(parsedB);

      if (operation === "soma") {
        const summed = math.add(matrixA, matrixB);
        setResult(toArray(summed));
      } else if (operation === "subtracao") {
        const subtracted = math.subtract(matrixA, matrixB);
        setResult(toArray(subtracted));
      } else if (operation === "multiplicacao") {
        const multiplied = math.multiply(matrixA, matrixB);
        setResult(toArray(multiplied));
      } else if (operation === "determinanteA") {
        const det = math.det(matrixA);
        setResult([[det]]);
      } else if (operation === "inversa") {
        const det = math.det(matrixA);
        if (Math.abs(det) < 1e-10) {
          setError("A matriz não é invertível (determinante igual a zero).");
          setResult(null);
          return;
        }
        const inverse = math.inv(matrixA);
        setResult(
          toArray(inverse).map((row) =>
            row.map((val) => Number(val.toFixed(2)))
          )
        );
      } else if (operation === "transposicao") {
        const transposed = math.transpose(matrixA);
        setResult(toArray(transposed));
      } else if (operation === "escalar") {
        const scalarValue = parseFloat(scalar);
        if (isNaN(scalarValue) || !isFinite(scalarValue)) {
          setError("Por favor, insira um número válido para o escalar.");
          return;
        }
        const scaled = math.multiply(matrixA, scalarValue);
        setResult(toArray(scaled));
      } else if (operation === "gauss") {
        let m = math.matrix(parsedA);
        let steps = [];
        let n = size;

        if (isRowEchelonForm(parsedA)) {
          steps.push({
            description: "A matriz já está na forma escalonada por linhas.",
            matrix: parsedA.map((row) =>
              row.map((val) => Number(val.toFixed(2)))
            ),
          });
          setResult(
            parsedA.map((row) => row.map((val) => Number(val.toFixed(2))))
          );
          setSteps(steps);
          return;
        }

        steps.push({
          description: "Matriz inicial",
          matrix: m
            .toArray()
            .map((row) => row.map((val) => Number(val.toFixed(2)))),
        });

        for (let i = 0; i < n; i++) {
          let pivot = m.get([i, i]);
          if (Math.abs(pivot) < 1e-10) {
            setError(
              "Matriz não pode ser reduzida (pivô zero ou muito pequeno)."
            );
            return;
          }
          if (Math.abs(pivot - 1) > 1e-10) {
            steps.push({
              description: `Tornar o pivô [${i + 1},${
                i + 1
              }] igual a 1: Dividir a Linha ${i + 1} por ${pivot.toFixed(
                2
              )} (pivô).`,
              matrix: null,
            });
            for (let j = i; j < n; j++) {
              m.set([i, j], m.get([i, j]) / pivot);
            }
            steps.push({
              description: "Nova matriz",
              matrix: m
                .toArray()
                .map((row) => row.map((val) => Number(val.toFixed(2)))),
            });
          }
          for (let k = i + 1; k < n; k++) {
            let factor = m.get([k, i]);
            if (Math.abs(factor) < 1e-10) continue;
            steps.push({
              description: `Zerar o elemento [${k + 1},${
                i + 1
              }]: Subtrair ${factor.toFixed(2)} × Linha ${i + 1} da Linha ${
                k + 1
              }.`,
              matrix: null,
            });
            for (let j = i; j < n; j++) {
              m.set([k, j], m.get([k, j]) - factor * m.get([i, j]));
            }
            steps.push({
              description: "Nova matriz",
              matrix: m
                .toArray()
                .map((row) => row.map((val) => Number(val.toFixed(2)))),
            });
          }
        }
        const resultArray = m
          .toArray()
          .map((row) => row.map((val) => Number(val.toFixed(2))));
        setResult(resultArray);
        setSteps(steps);
      }
    } catch (e) {
      setError(
        `Erro: ${e.message || "Verifique as entradas e tente novamente."}`
      );
    }
  };

  const renderMatrixInput = (matrix, setMatrix, label) => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-sm sm:text-base">{label}</h3>
      <div
        className="grid gap-1 justify-center"
        style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 60px))` }}
      >
        {matrix.map((row, i) =>
          row.map((val, j) => (
            <input
              key={`${label}-${i}-${j}`}
              type="text"
              value={val}
              onChange={(e) =>
                handleInputChange(setMatrix, matrix, i, j, e.target.value)
              }
              className="border p-2 rounded w-full text-center text-sm"
              aria-label={`Elemento da ${label} na linha ${i + 1}, coluna ${
                j + 1
              }`}
              placeholder="0"
            />
          ))
        )}
      </div>
    </div>
  );

  const renderScalarInput = () => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-sm sm:text-base">Escalar</h3>
      <div
        className="grid gap-1 justify-center"
        style={{ gridTemplateColumns: "minmax(0, 60px)" }}
      >
        <input
          type="text"
          value={scalar}
          onChange={(e) => setScalar(e.target.value)}
          className="border p-2 rounded w-full text-center text-sm"
          aria-label="Valor do escalar"
          placeholder="0"
        />
      </div>
    </div>
  );

  const renderMatrixStep = (matrix) => (
    <div
      className="grid gap-1 mx-auto max-w-[90vw] justify-center"
      style={{
        gridTemplateColumns: `repeat(${matrix[0].length}, minmax(0, 60px))`,
      }}
    >
      {matrix.map((row, i) =>
        row.map((val, j) => (
          <div
            key={`step-matrix-${i}-${j}`}
            className="bg-gray-200 p-2 rounded text-center text-sm"
          >
            {Number(val).toFixed(2)}
          </div>
        ))
      )}
    </div>
  );

  const renderResult = () => {
    if (!result) return null;

    return (
      <div className="mt-6">
        <h3 className="font-semibold mb-2 text-sm sm:text-base">Resultado</h3>
        <div
          className="grid gap-1 mx-auto max-w-[90vw] justify-center"
          style={{
            gridTemplateColumns: `repeat(${result[0].length}, minmax(0, 60px))`,
          }}
        >
          {result.map((row, i) =>
            row.map((val, j) => (
              <div
                key={`result-${i}-${j}`}
                className="bg-gray-200 p-2 rounded text-center text-sm"
              >
                {Number(val).toFixed(2)}
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  const renderTutorials = () => (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Tutoriais de Matrizes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutoriais.map((tutorial) => (
          <div
            key={tutorial.id}
            className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
            <p className="text-gray-600 mb-4">{tutorial.description}</p>
            <Link
              to={`/tutorial/${tutorial.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm inline-block"
              aria-label={`Saiba mais sobre ${tutorial.title}`}
            >
              Saiba Mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 text-center max-w-4xl mx-auto">
      <Helmet>
        <title>Calculadora de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content="Use nossa calculadora de matrizes para soma, subtração, multiplicação, determinante, inversa e mais. Explore tutoriais de álgebra linear."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://projeto-calculadora-matrizes.vercel.app/" />
        <meta property="og:title" content="Calculadora de Matrizes - Matrizes+" />
        <meta
          property="og:description"
          content="Use nossa calculadora de matrizes para soma, subtração, multiplicação, determinante, inversa e mais. Explore tutoriais de álgebra linear."
        />
        <meta property="og:url" content="https://projeto-calculadora-matrizes.vercel.app/" />
        <meta
          property="og:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Calculadora de Matrizes - Matrizes+"
        />
        <meta
          name="twitter:description"
          content="Use nossa calculadora de matrizes para soma, subtração, multiplicação, determinante, inversa e mais. Explore tutoriais de álgebra linear."
        />
        <meta
          name="twitter:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
      </Helmet>

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        Calculadora de Matrizes
      </h1>
      <p className="mb-4 text-sm sm:text-base">
        Realize operações com matrizes como soma, subtração, multiplicação,
        determinante, inversa, transposição, multiplicação por escalar e
        eliminação de Gauss.
      </p>

      <div className="mb-4">
        <label className="font-semibold mr-2 text-sm sm:text-base">
          Tamanho da matriz:
        </label>
        <select
          className="border px-2 py-1 rounded text-sm"
          value={size}
          onChange={handleSizeChange}
          aria-label="Tamanho da matriz"
        >
          <option value={2}>2x2</option>
          <option value={3}>3x3</option>
          <option value={4}>4x4</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="font-semibold mr-2 text-sm sm:text-base">
          Escolha a operação:
        </label>
        <select
          className="border px-2 py-1 rounded text-sm"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          aria-label="Escolha a operação"
        >
          <option value="soma">Soma (A + B)</option>
          <option value="subtracao">Subtração (A - B)</option>
          <option value="multiplicacao">Multiplicação (A × B)</option>
          <option value="determinanteA">Determinante de A</option>
          <option value="inversa">Inversa de A</option>
          <option value="transposicao">Transposição de A</option>
          <option value="escalar">Multiplicação por Escalar</option>
          <option value="gauss">Eliminação de Gauss</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 mb-6">
        {renderMatrixInput(matrixA, setMatrixA, "Matriz A")}
        {operation === "escalar" && renderScalarInput()}
        {operation !== "determinanteA" &&
          operation !== "inversa" &&
          operation !== "transposicao" &&
          operation !== "escalar" &&
          operation !== "gauss" &&
          renderMatrixInput(matrixB, setMatrixB, "Matriz B")}
      </div>

      <button
        onClick={calculate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        aria-label="Calcular"
      >
        Calcular
      </button>

      {error && (
        <p className="text-red-500 mt-4 font-semibold text-sm">{error}</p>
      )}

      {renderResult()}

      {steps.length > 0 && (
        <div className="mt-4 text-left max-w-md mx-auto">
          <h3 className="font-semibold mb-2 text-sm sm:text-base">
            Passos do Cálculo
          </h3>
          <ol className="list-decimal pl-5 text-sm sm:text-base">
            {steps.map((step, i) => (
              <li key={i} className="mb-4">
                <strong>{step.description}</strong>
                {step.matrix && renderMatrixStep(step.matrix)}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Seção de tutoriais */}
      {renderTutorials()}

      <div className="my-8">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>

      <footer className="mt-12 border-t pt-6">
        <p className="text-sm">
          © 2025 Matrizes+. Todos os direitos reservados.
        </p>
        <div className="space-x-4 mt-2">
          <Link to="/politica" className="text-blue-600 hover:underline">
            Política de Privacidade
          </Link>
          <Link to="/termos" className="text-blue-600 hover:underline">
            Termos de Uso
          </Link>
          <Link to="/contato" className="text-blue-600 hover:underline">
            Contato
          </Link>
        </div>
      </footer>
    </div>
  );
}

// Componente App
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <header>
          <nav className="bg-white shadow p-4 flex justify-between">
            <h1 className="font-bold text-lg">Matrizes+</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">
                Início
              </Link>
            </div>
          </nav>
        </header>

        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorial/:id" element={<TutorialPage />} />
            <Route path="/politica" element={<PoliticaPrivacidade />} />
            <Route path="/termos" element={<TermosUso />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;