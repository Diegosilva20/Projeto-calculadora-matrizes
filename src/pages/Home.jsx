import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MatrixInput from "../components/common/MatrixInput";
import ResultDisplay from "../components/ui/ResultDisplay";
import { createEmptyMatrix, calculate } from "../utils/matrixCalculations";
import Header from "../components/common/Header"; // Confirme se o caminho está correto

const Home = () => {
  const [sizeA, setSizeA] = useState({ rows: 2, cols: 2 });
  const [sizeB, setSizeB] = useState({ rows: 2, cols: 2 });
  const [matrixA, setMatrixA] = useState(createEmptyMatrix(sizeA.rows, sizeA.cols));
  const [matrixB, setMatrixB] = useState(createEmptyMatrix(sizeB.rows, sizeB.cols));
  const [scalar, setScalar] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("soma");
  const [error, setError] = useState("");
  const [steps, setSteps] = useState([]);

  const tutoriais = [
    { id: 5, title: "Multiplicações de Matrizes", description: "Aprenda passo a passo como fazer a Multiplicação de Matrizes" },
    { id: 1, title: "O que é um Determinante?", description: "Aprenda o que é um determinante e como calculá-lo em matrizes 2x2." },
    { id: 2, title: "Como Encontrar a Inversa de uma Matriz", description: "Descubra os passos para calcular a inversa de uma matriz 2x2." },
    { id: 3, title: "Eliminação de Gauss Explicada", description: "Entenda como usar a eliminação de Gauss para resolver sistemas lineares." },
    { id: 4, title: "O que é Transposição de Matrizes?", description: "Aprenda como transpor uma matriz com exemplos práticos." },
  ];

  const handleSizeChangeA = (e) => {
    const { name, value } = e.target;
    const newSize = { ...sizeA, [name]: parseInt(value) };
    setSizeA(newSize);
    setMatrixA(createEmptyMatrix(newSize.rows, newSize.cols));
    setResult(null);
    setError("");
    setSteps([]);
  };

  const handleSizeChangeB = (e) => {
    const { name, value } = e.target;
    const newSize = { ...sizeB, [name]: parseInt(value) };
    setSizeB(newSize);
    setMatrixB(createEmptyMatrix(newSize.rows, newSize.cols));
    setResult(null);
    setError("");
    setSteps([]);
  };

  const renderSizeInput = (label, state, setState, idPrefix) => (
    <div className="mb-2 text-center">
      <label className="font-semibold mr-2 text-sm sm:text-base">{label}:</label>
      <div className="inline-flex gap-2">
        <select
          name="rows"
          value={state.rows}
          onChange={setState}
          className="border px-2 py-1 rounded text-sm"
          aria-label={`${label} linhas`}
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <select
          name="cols"
          value={state.cols}
          onChange={setState}
          className="border px-2 py-1 rounded text-sm"
          aria-label={`${label} colunas`}
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderScalarInput = () => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-sm sm:text-base">Escalar</h3>
      <div className="grid gap-1 justify-center" style={{ gridTemplateColumns: "minmax(0, 60px)" }}>
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
      style={{ gridTemplateColumns: `repeat(${matrix[0].length}, minmax(0, 60px))` }}
    >
      {matrix.map((row, i) =>
        row.map((val, j) => (
          <div key={`step-matrix-${i}-${j}`} className="bg-gray-200 p-2 rounded text-center text-sm">
            {Number(val).toFixed(2)}
          </div>
        ))
      )}
    </div>
  );

  const renderTutorials = () => (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Tutoriais de Matrizes para Iniciantes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutoriais.map((tutorial) => (
          <div key={tutorial.id} className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
            <p className="text-gray-600 mb-4">{tutorial.description}</p>
            <Link
              to={`/tutorial/${tutorial.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm inline-block"
              aria-label={`Saiba mais sobre ${tutorial.title}`}
            >
              Ler mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWhyUseSection = () => (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 text-center">Por que Usar a Calculadora de Matrizes do Matrizes+?</h2>
      <p className="text-gray-700 mb-4">
        Nossa calculadora de matrizes online é a ferramenta perfeita para estudantes, professores e profissionais que precisam realizar operações matemáticas complexas de forma rápida e confiável. Com o Matrizes+, você pode calcular a soma, subtração, multiplicação, determinante, inversa, transposição e até a eliminação de Gauss em poucos cliques.
      </p>
      <p className="text-gray-700 mb-4">
        Além disso, oferecemos tutoriais detalhados para iniciantes e avançados, cobrindo tópicos como o cálculo de determinantes, a inversa de matrizes e a eliminação de Gauss. Seja para estudar álgebra linear ou resolver problemas práticos, nossa calculadora é intuitiva, gratuita e acessível em qualquer dispositivo. Experimente agora e simplifique seus cálculos!
      </p>
      <p className="text-gray-700 mb-4">
        <Link to="/tutorial/1" className="text-blue-600 hover:underline">Aprenda a calcular determinantes</Link> ou explore outras operações como <Link to="/tutorial/2" className="text-blue-600 hover:underline">inversas</Link> e <Link to="/tutorial/3" className="text-blue-600 hover:underline">eliminação de Gauss</Link>!
      </p>
    </div>
  );

  const handleCalculate = () => {
    let newError = "";
    const isSquareA = sizeA.rows === sizeA.cols;

    if (operation === "multiplicacao" && sizeA.cols !== sizeB.rows) {
      newError = "Erro: O número de colunas da Matriz A deve ser igual ao número de linhas da Matriz B para multiplicação.";
    } else if (operation === "inversa" && !isSquareA) {
      newError = "Erro: A inversa só pode ser calculada para matrizes quadradas e não-singulares.";
    } else if (operation === "determinanteA" && !isSquareA) {
      newError = "Erro: O determinante só pode ser calculado para matrizes quadradas.";
    } else if (operation === "gauss" && !isSquareA) {
      if (!window.confirm("Aviso: A eliminação de Gauss é tipicamente aplicada a matrizes quadradas. Deseja prosseguir mesmo assim?")) {
        return;
      }
    }

    if (newError) {
      setError(newError);
      setResult(null);
      setSteps([]);
      return;
    }

    calculate(matrixA, matrixB, scalar, operation, { rows: sizeA.rows, cols: sizeA.cols }, setResult, setError, setSteps);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-32 p-4 sm:p-6 text-center max-w-4xl mx-auto">
        <Helmet>
          <title>Calculadora de Matrizes Grátis Online - Matrizes+</title>
          <meta
            name="description"
            content="Use a calculadora de matrizes grátis do Matrizes+ para soma, subtração, determinante e mais. Tutoriais de álgebra linear para iniciantes e avançados."
          />
          <meta
            name="keywords"
            content="calculadora de matrizes, álgebra linear, determinante, inversa, transposição, multiplicação por escalar, eliminação de Gauss, tutoriais de matemática, "
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://projeto-calculadora-matrizes.vercel.app/" />
          <meta property="og:title" content="Calculadora de Matrizes Grátis Online - Matrizes+" />
          <meta
            property="og:description"
            content="Use nossa calculadora de matrizes grátis online para soma, subtração, multiplicação, determinante, inversa, transposição, escalar e eliminação de Gauss. Explore tutoriais de álgebra linear!"
          />
          <meta property="og:url" content="https://projeto-calculadora-matrizes.vercel.app/" />
          <meta
            property="og:image"
            content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Calculadora de Matrizes Grátis Online - Matrizes+" />
          <meta
            name="twitter:description"
            content="Use nossa calculadora de matrizes grátis online para soma, subtração, multiplicação, determinante, inversa, transposição, escalar e eliminação de Gauss. Explore tutoriais de álgebra linear!"
          />
          <meta
            name="twitter:image"
            content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Matrizes+ Calculadora de Matrizes",
              "url": "https://projeto-calculadora-matrizes.vercel.app/",
              "description": "Uma calculadora online gratuita para realizar operações com matrizes, incluindo soma, subtração, multiplicação, determinante, inversa, transposição, multiplicação por escalar e eliminação de Gauss.",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://projeto-calculadora-matrizes.vercel.app/calculadora{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            })}
          </script>
        </Helmet>

        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Calculadora de Matrizes Grátis Online - Matrizes+</h1>
        <p className="mb-4 text-sm sm:text-base">Realize operações com matrizes como soma, subtração, multiplicação, determinante, inversa, transposição, multiplicação por escalar e eliminação de Gauss.</p>

        <div className="mb-6">
          <label className="font-semibold mr-2 text-sm sm:text-base">Escolha a operação:</label>
          <select className="border px-2 py-1 rounded text-sm" value={operation} onChange={(e) => setOperation(e.target.value)} aria-label="Escolha a operação">
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
          <div>
            {renderSizeInput("Tamanho da Matriz A", sizeA, handleSizeChangeA, "sizeA")}
            <MatrixInput matrix={matrixA} setMatrix={setMatrixA} label="Matriz A" rows={sizeA.rows} cols={sizeA.cols} />
          </div>
          {operation === "escalar" && renderScalarInput()}
          {operation !== "determinanteA" && operation !== "inversa" && operation !== "transposicao" && operation !== "escalar" && operation !== "gauss" && (
            <div>
              {renderSizeInput("Tamanho da Matriz B", sizeB, handleSizeChangeB, "sizeB")}
              <MatrixInput matrix={matrixB} setMatrix={setMatrixB} label="Matriz B" rows={sizeB.rows} cols={sizeB.cols} />
            </div>
          )}
        </div>

        <button onClick={handleCalculate} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm" aria-label="Calcular">
          Calcular
        </button>

        {error && <p className="text-red-500 mt-4 font-semibold text-sm">{error}</p>}

        <ResultDisplay result={result} />

        {steps.length > 0 && (
          <div className="mt-4 text-left max-w-md mx-auto">
            <h2 className="font-semibold mb-2 text-sm sm:text-base">Passos do Cálculo</h2>
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

        {renderWhyUseSection()}
        {renderTutorials()}

        <div className="my-8 ad-container">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6065257343138670"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>
    </div>
  );
};

export default Home;