import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MatrixDisplay from "../components/common/MatrixDisplay";
import MatrixInput from "../components/common/MatrixInput";
import ResultDisplay from "../components/ui/ResultDisplay";
import { tutoriais } from "../data/tutorialsData";
import { useMatrixCalculator } from "../hooks/useMatrixCalculator";

// Mapeamento para SEO Contextual e Linkagem Interna
const operationToSlug = {
  soma: "soma-de-matrizes",
  subtracao: "subtracao-de-matrizes",
  inversa: "matriz-inversa",
  gauss: "escalonamento-gauss",
  determinanteA: "determinante-de-matrizes",
  multiplicacao: "multiplicacao-de-matrizes",
  transposicao: "matriz-transposta",
  escalar: "multiplicacao-por-escalar",
};

const operationLabels = {
  soma: "soma de matrizes",
  subtracao: "subtração de matrizes",
  inversa: "matriz inversa",
  gauss: "escalonamento de matrizes por Gauss",
  determinanteA: "determinante de matrizes",
  multiplicacao: "multiplicação de matrizes",
  transposicao: "matriz transposta",
  escalar: "multiplicação por escalar",
};

const operationsWithMatrixB = ["soma", "subtracao", "multiplicacao"];

const featuredTutorialSlugs = [
  "multiplicacao-de-matrizes",
  "determinante-de-matrizes",
  "determinante-2x2",
  "matriz-inversa",
  "escalonamento-gauss",
  "sistemas-lineares",
  "soma-de-matrizes",
];

const featuredTutorials = featuredTutorialSlugs
  .map((slug) => tutoriais.find((tutorial) => tutorial.slug === slug))
  .filter(Boolean);

const Home = () => {
  const {
    sizeA,
    sizeB,
    matrixA,
    setMatrixA,
    matrixB,
    setMatrixB,
    scalar,
    setScalar,
    result,
    operation,
    setOperation,
    error,
    steps,
    handleSizeChange,
    handleCalculate,
    handleClear,
  } = useMatrixCalculator();

  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculateClick = async () => {
    setIsCalculating(true);

    try {
      await handleCalculate();
    } finally {
      setIsCalculating(false);
    }
  };

  // Dados Estruturados (JSON-LD) para otimizar o rankeamento no Google
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Calculadora de Matrizes Online",
      url: "https://www.matrizcalculator.com/",
      applicationCategory: "EducationalApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
      },
      featureList:
        "Calculadora de matrizes gratuita, resultados passo a passo, frações exatas, exemplos resolvidos, tutoriais explicados, determinante, matriz inversa, multiplicação de matrizes, escalonamento de matrizes e sistemas lineares",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Como ver o escalonamento de uma matriz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Selecione a operação Eliminação de Gauss, insira os valores da matriz e a calculadora exibirá as etapas do escalonamento até chegar à forma escalonada.",
          },
        },
        {
          "@type": "Question",
          name: "Como calcular matriz inversa online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Selecione a operação Inversa de A, preencha uma matriz quadrada e clique em calcular. A ferramenta valida se a matriz é invertível e mostra o resultado.",
          },
        },
      ],
    },
  ];

  const renderSizeInput = (label, state, onChangeHandler) => (
    <div className="mb-2 text-center">
      <span className="font-semibold mr-2 text-sm sm:text-base dark:text-slate-200">
        {label}:
      </span>
      <div className="inline-flex gap-2">
        <select
          name="rows"
          value={state.rows}
          onChange={onChangeHandler}
          aria-label={`${label} - linhas`}
          className="rounded border border-gray-200 px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <span className="self-center text-gray-400 dark:text-slate-500">×</span>
        <select
          name="cols"
          value={state.cols}
          onChange={onChangeHandler}
          aria-label={`${label} - colunas`}
          className="rounded border border-gray-200 px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <Helmet>
        {/* Título focado nos termos de maior busca do Search Console */}
        <title>
          Calculadora de Matrizes Online Grátis | Passo a Passo
        </title>
        <meta
          name="description"
          content="Use a calculadora de matrizes gratuita para resolver determinante, inversa, multiplicação, transposta e Gauss com frações exatas, passo a passo e tutoriais."
        />
        <link rel="canonical" href="https://www.matrizcalculator.com/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="p-4 sm:p-6 max-w-5xl mx-auto text-center">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-gray-800 dark:text-slate-100">
            Calculadora de Matrizes Online Gratuita
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto dark:text-slate-300">
            Resolva soma, multiplicação, determinante, inversa, transposta e
            escalonamento de matrizes com resultados passo a passo, frações
            exatas, exemplos resolvidos e tutoriais explicados.
          </p>
        </header>

        <div className="mb-12 rounded-xl border border-gray-100 bg-white p-4 shadow-lg transition-colors dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="mb-6">
            <label
              htmlFor="operation-select"
              className="block font-bold mb-2 text-gray-700 dark:text-slate-200"
            >
              O que você deseja calcular?
            </label>
            <select
              id="operation-select"
              className="w-full max-w-md rounded-lg border-2 border-blue-100 bg-blue-50 p-3 text-center outline-none transition-colors focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="soma">Soma (A + B)</option>
              <option value="subtracao">Subtração (A - B)</option>
              <option value="multiplicacao">Multiplicação (A × B)</option>
              <option value="determinanteA">Determinante de A</option>
              <option value="inversa">Inversa de A</option>
              <option value="transposicao">Transposição de A</option>
              <option value="escalar">Multiplicação por Escalar</option>
              <option value="gauss">Eliminação de Gauss (Escalonamento)</option>
            </select>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 mb-8">
            <div className="w-full max-w-xs">
              {renderSizeInput("Tamanho da Matriz A", sizeA, (e) =>
                handleSizeChange("A", e),
              )}
              <MatrixInput
                matrix={matrixA}
                setMatrix={setMatrixA}
                label="Matriz A"
                rows={sizeA.rows}
                cols={sizeA.cols}
              />
            </div>

            {operation === "escalar" && (
              <div className="flex flex-col items-center justify-center pt-8">
                <span className="font-bold mb-2 dark:text-slate-200">Escalar</span>
                <input
                  type="text"
                  value={scalar}
                  onChange={(e) => setScalar(e.target.value)}
                  className="w-20 rounded-lg border-2 border-gray-200 p-2 text-center outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  placeholder="k"
                />
              </div>
            )}

            {operationsWithMatrixB.includes(operation) && (
              <div className="w-full max-w-xs">
                {renderSizeInput("Tamanho da Matriz B", sizeB, (e) =>
                  handleSizeChange("B", e),
                )}
                <MatrixInput
                  matrix={matrixB}
                  setMatrix={setMatrixB}
                  label="Matriz B"
                  rows={sizeB.rows}
                  cols={sizeB.cols}
                />
              </div>
            )}
          </div>

          <div className="mt-2 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <button
              onClick={handleCalculateClick}
              disabled={isCalculating}
              aria-busy={isCalculating}
              className="w-full rounded-full bg-blue-600 px-12 py-3 font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700 disabled:cursor-wait disabled:opacity-80 disabled:hover:scale-100 dark:bg-blue-500 dark:hover:bg-blue-400 sm:w-auto"
            >
              {isCalculating ? "Calculando..." : "Calcular Agora"}
            </button>

            <button
              onClick={handleClear}
              className="w-full rounded-full border border-gray-300 bg-gray-100 px-8 py-3 font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:w-auto"
            >
              Limpar Dados
            </button>
          </div>

          {/* SEO e UX: Link dinâmico para tutorial contextual */}
          {operationToSlug[operation] && (
            <div className="mt-5 flex justify-center">
              <div className="max-w-full rounded-lg border border-yellow-100 bg-yellow-50 p-3 dark:border-amber-800 dark:bg-amber-950/40">
                <p className="text-sm text-yellow-800 dark:text-amber-100">
                  💡 Dúvida no cálculo?{" "}
                  <Link
                    to={`/tutorial/${operationToSlug[operation]}`}
                    className="font-bold underline hover:text-yellow-900 dark:hover:text-amber-50"
                  >
                    Ver tutorial de {operationLabels[operation]}
                  </Link>
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-4 rounded-lg border border-red-100 bg-red-50 p-3 font-medium text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
              {error}
            </div>
          )}
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <ResultDisplay result={result} />

          {steps.length > 0 && (
            <div className="mt-16 bg-white p-5 sm:p-8 lg:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-5xl mx-auto text-left dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
              <h2 className="text-2xl font-bold mb-12 text-center text-gray-800 tracking-tight dark:text-slate-100">
                Resolução Passo a Passo
              </h2>

              <div className="space-y-10">
                {steps.map((step, i) => {
                  const hasMatrix = Boolean(step.matrix);

                  return (
                    <div
                      key={i}
                      className={[
                        "flex flex-col gap-6 items-start",
                        hasMatrix ? "lg:flex-row lg:gap-10" : "",
                      ].join(" ")}
                    >
                      {/* Indicador do Passo & Descrição */}
                      <div
                        className={
                          hasMatrix
                            ? "w-full lg:w-5/12 lg:flex-shrink-0"
                            : "w-full"
                        }
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gray-900 text-white text-xs font-bold font-mono dark:bg-blue-500">
                            {i + 1}
                          </span>
                          <h3 className="min-w-0 text-sm font-bold text-gray-900 uppercase tracking-wider break-words dark:text-slate-100">
                            {step.title}
                          </h3>
                        </div>
                        <p className="sm:ml-10 text-gray-500 font-mono text-sm bg-gray-50 px-3 py-2 rounded border border-gray-200 whitespace-pre-wrap break-words dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                          {step.description}
                        </p>
                      </div>

                      {hasMatrix && (
                        <div className="w-full lg:w-7/12 flex justify-center lg:justify-start pb-4">
                        <MatrixDisplay
                          matrix={step.matrix}
                          emptyPlaceholder="·"
                          highlight={step.highlight}
                        />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Seção de Tutoriais Recomendados */}
        <div className="mt-20 border-t border-gray-200 pt-12 dark:border-slate-800">
          <div className="mx-auto mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Tutoriais recomendados
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-800 dark:text-slate-100">
              Comece pelos guias mais importantes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed dark:text-slate-300">
              Reforce o estudo com exemplos resolvidos e tutoriais explicados
              sobre os cálculos mais usados em matrizes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial) => (
              <article
                key={tutorial.id}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 text-left transition-all hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500"
              >
                <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                  {tutorial.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed dark:text-slate-300">
                  {tutorial.description}
                </p>
                <Link
                  to={`/tutorial/${tutorial.slug}`}
                  className="inline-flex flex-wrap items-center gap-x-1 text-sm font-bold text-blue-600 transition-transform group-hover:translate-x-2 dark:text-blue-400"
                >
                  Ler tutorial: {tutorial.title} <span>→</span>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/tutorials"
              className="inline-flex w-full justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50 dark:border-blue-900 dark:bg-slate-900 dark:text-blue-300 dark:hover:bg-slate-800 sm:w-auto"
            >
              Ver todos os tutoriais
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
