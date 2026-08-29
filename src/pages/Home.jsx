import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MatrixDisplay from "../components/common/MatrixDisplay";
import MatrixInput from "../components/common/MatrixInput";
import ResultDisplay from "../components/ui/ResultDisplay";
import { tutorialsInfo } from "../data/tutorialsInfo";
import { useMatrixCalculator } from "../hooks/useMatrixCalculator";

const siteBaseUrl = "https://projeto-calculadora-matrizes.vercel.app";

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
  traco: "soma-de-matrizes", // Link to soma tutorial for now instead of 'what is a matrix'
  potencia: "multiplicacao-de-matrizes",
  posto: "posto-de-matriz",
  cramer: "regra-de-cramer",
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
  traco: "traço de matriz",
  potencia: "potenciação de matrizes",
  posto: "posto de matriz",
  cramer: "Regra de Cramer",
};

const operationsWithMatrixB = ["soma", "subtracao", "multiplicacao", "cramer"];

const featuredTutorialSlugs = [
  "multiplicacao-de-matrizes",
  "determinante-de-matrizes",
  "determinante-2x2",
  "matriz-inversa",
  "escalonamento-gauss",
  "regra-de-cramer",
  "posto-de-matriz",
  "sistemas-lineares",
  "soma-de-matrizes",
];

const featuredTutorials = featuredTutorialSlugs
  .map((slug) => tutorialsInfo.find((tutorial) => tutorial.slug === slug))
  .filter(Boolean);

const Home = () => {
  const canonicalUrl = `${siteBaseUrl}/`;
  const pageMetaTitle = "Calculadora de Matrizes Online Grátis | Passo a Passo";
  const pageMetaDescription =
    "Use a calculadora de matrizes gratuita para resolver determinante, inversa, multiplicação, transposta, traço, potência, posto, Cramer e Gauss com frações exatas e passo a passo.";
  const pageHeroTitle = "Calculadora de Matrizes Online Gratuita";
  const pageHeroDescription =
    "Resolva soma, multiplicação, determinante, inversa, transposta, traço, potenciação, posto e Regra de Cramer com resultados passo a passo, frações exatas e tutoriais explicados.";

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
  const activeTutorialSlug = operationToSlug[operation];
  const activeTutorialLabel = operationLabels[operation];

  const handleOperationChange = (event) => {
    const nextOp = event.target.value;
    setOperation(nextOp);

    if (nextOp === "cramer") {
      let nextRows = sizeA.rows;
      if (nextRows !== 2 && nextRows !== 3) {
        nextRows = 2;
        handleSizeChange("A", { rows: 2, cols: 2 });
      } else if (sizeA.rows !== sizeA.cols) {
        handleSizeChange("A", { rows: nextRows, cols: nextRows });
      }
      handleSizeChange("B", { rows: nextRows, cols: 1 });
    } else if (nextOp === "potencia" && scalar === "") {
      setScalar("2");
    }
  };

  const handleCalculateClick = async () => {
    setIsCalculating(true);

    try {
      await handleCalculate();
    } finally {
      setIsCalculating(false);
    }
  };

  const faqItems = [
    {
      question: "Como ver o escalonamento e posto de uma matriz?",
      answer:
        "Selecione a operação Eliminação de Gauss ou Posto de A, insira os valores da matriz e a calculadora exibirá todas as operações elementares e a contagem de linhas independentes passo a passo.",
    },
    {
      question: "Como resolver sistemas lineares pela Regra de Cramer?",
      answer:
        "Selecione Regra de Cramer, insira a matriz de coeficientes e os termos constantes. A calculadora calcula os determinantes D, Dx, Dy (e Dz) e exibe as soluções x, y, z detalhadas.",
    },
    {
      question: "Como calcular matriz inversa online?",
      answer:
        "Selecione a operação Inversa de A, preencha uma matriz quadrada e clique em calcular. A ferramenta valida se a matriz é invertível e mostra o resultado com frações exatas.",
    },
  ];

  // Dados Estruturados (JSON-LD) para otimizar o rankeamento no Google
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: pageHeroTitle,
      description: pageMetaDescription,
      url: canonicalUrl,
      applicationCategory: "EducationalApplication",
      operatingSystem: "All",
      inLanguage: "pt-BR",
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
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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
        <title>{pageMetaTitle}</title>
        <meta name="description" content={pageMetaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageMetaTitle} />
        <meta property="og:description" content={pageMetaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://projeto-calculadora-matrizes.vercel.app/logo512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://projeto-calculadora-matrizes.vercel.app/logo512.png" />
        <meta name="twitter:title" content={pageMetaTitle} />
        <meta name="twitter:description" content={pageMetaDescription} />
        {structuredData.map((sd, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(sd)}
          </script>
        ))}
      </Helmet>

      <section className="p-4 sm:p-6 max-w-5xl mx-auto text-center">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-gray-800 dark:text-slate-100">
            {pageHeroTitle}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto dark:text-slate-300">
            {pageHeroDescription}
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
              onChange={handleOperationChange}
            >
              <option value="soma">Soma (A + B)</option>
              <option value="subtracao">Subtração (A - B)</option>
              <option value="multiplicacao">Multiplicação (A × B)</option>
              <option value="determinanteA">Determinante de A</option>
              <option value="inversa">Inversa de A</option>
              <option value="transposicao">Transposição de A</option>
              <option value="traco">Traço de A (tr(A))</option>
              <option value="potencia">Potenciação de A (Aⁿ)</option>
              <option value="posto">Posto de A (Rank)</option>
              <option value="gauss">Eliminação de Gauss (Escalonamento)</option>
              <option value="cramer">Regra de Cramer (Sistemas Lineares)</option>
              <option value="escalar">Multiplicação por Escalar</option>
            </select>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 mb-8">
            <div className="w-full max-w-xs">
              {renderSizeInput(
                operation === "cramer" ? "Tamanho do Sistema" : "Tamanho da Matriz A",
                sizeA,
                (e) => handleSizeChange("A", e),
              )}
              <MatrixInput
                matrix={matrixA}
                setMatrix={setMatrixA}
                label={operation === "cramer" ? "Matriz dos Coeficientes (A)" : "Matriz A"}
                rows={sizeA.rows}
                cols={sizeA.cols}
              />
            </div>

            {(operation === "escalar" || operation === "potencia") && (
              <div className="flex flex-col items-center justify-center pt-8">
                <span className="font-bold mb-2 dark:text-slate-200">
                  {operation === "escalar" ? "Escalar" : "Expoente (n)"}
                </span>
                <input
                  type="text"
                  value={scalar}
                  onChange={(e) => setScalar(e.target.value)}
                  className="w-24 rounded-lg border-2 border-gray-200 p-2 text-center outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  placeholder={operation === "escalar" ? "k" : "n (ex: 2)"}
                />
              </div>
            )}

            {operationsWithMatrixB.includes(operation) && (
              <div className="w-full max-w-xs">
                {renderSizeInput(
                  operation === "cramer" ? "Termos Independentes (B)" : "Tamanho da Matriz B",
                  sizeB,
                  (e) => handleSizeChange("B", e),
                )}
                <MatrixInput
                  matrix={matrixB}
                  setMatrix={setMatrixB}
                  label={operation === "cramer" ? "Termos Constantes (B)" : "Matriz B"}
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
          {activeTutorialSlug && (
            <div className="mt-5 flex justify-center">
              <div className="max-w-full rounded-lg border border-yellow-100 bg-yellow-50 p-3 dark:border-amber-800 dark:bg-amber-950/40">
                <p className="text-sm text-yellow-800 dark:text-amber-100">
                  💡 Dúvida no cálculo?{" "}
                  <Link
                    to={`/tutorial/${activeTutorialSlug}`}
                    className="font-bold underline hover:text-yellow-900 dark:hover:text-amber-50"
                  >
                    Ver tutorial de {activeTutorialLabel}
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
