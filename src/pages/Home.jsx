import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MatrixDisplay from "../components/common/MatrixDisplay";
import MatrixInput from "../components/common/MatrixInput";
import ResultDisplay from "../components/ui/ResultDisplay";
import {
  calculatorPagesByPath,
  getCalculatorPageByOperation,
  getCalculatorPageCopy,
} from "../data/calculatorPages";
import { getTutoriais } from "../data/tutorialsData";
import { useMatrixCalculator } from "../hooks/useMatrixCalculator";
import { useI18n } from "../i18n/LanguageContext";

const siteBaseUrl = "https://www.matrizcalculator.com";

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

const operationOptions = [
  "soma",
  "subtracao",
  "multiplicacao",
  "determinanteA",
  "inversa",
  "transposicao",
  "escalar",
  "gauss",
];

const operationsWithMatrixB = ["soma", "subtracao", "multiplicacao"];

const featuredTutorialSlugs = [
  "multiplicacao-de-matrizes",
  "determinante-de-matrizes",
  "determinante-2x2",
  "matriz-inversa",
  "escalonamento-gauss",
  "sistemas-lineares",
  "regra-de-cramer",
];

const Home = () => {
  const { language, t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const calculatorPage = calculatorPagesByPath[location.pathname] || null;
  const calculatorPageCopy = getCalculatorPageCopy(calculatorPage, language);
  const canonicalUrl = `${siteBaseUrl}${calculatorPage?.path || "/"}`;
  const pageMetaTitle = calculatorPageCopy?.metaTitle || t("home.metaTitle");
  const pageMetaDescription =
    calculatorPageCopy?.metaDescription || t("home.metaDescription");
  const pageHeroTitle = calculatorPageCopy?.heroTitle || t("home.heroTitle");
  const pageHeroDescription =
    calculatorPageCopy?.heroDescription || t("home.heroDescription");
  const showTutorialLinks = language === "pt-BR";
  const tutoriais = useMemo(
    () => (showTutorialLinks ? getTutoriais(language) : []),
    [language, showTutorialLinks],
  );
  const featuredTutorials = useMemo(
    () =>
      featuredTutorialSlugs
        .map((slug) => tutoriais.find((tutorial) => tutorial.slug === slug))
        .filter(Boolean),
    [tutoriais],
  );
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
    loadExample,
  } = useMatrixCalculator(calculatorPage?.operation, calculatorPage?.example);
  const activeTutorialSlug =
    calculatorPage?.tutorialSlug || operationToSlug[operation];
  const activeTutorialName =
    calculatorPageCopy?.linkLabel?.toLowerCase() ||
    t(`calculator.operationNames.${operation}`);

  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculateClick = async () => {
    setIsCalculating(true);

    try {
      await handleCalculate();
    } finally {
      setIsCalculating(false);
    }
  };

  const handleOperationChange = (event) => {
    const nextOperation = event.target.value;
    const nextCalculatorPage = getCalculatorPageByOperation(nextOperation);

    if (calculatorPage && nextCalculatorPage) {
      navigate(nextCalculatorPage.path);
      loadExample(nextCalculatorPage.example);
      return;
    }

    setOperation(nextOperation);
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: pageHeroTitle,
      description: pageMetaDescription,
      url: canonicalUrl,
      applicationCategory: "EducationalApplication",
      operatingSystem: "All",
      inLanguage: t("tutorialPage.inLanguage"),
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
      },
      featureList: t("home.structuredFeatureList"),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: t("home.structuredGaussQuestion"),
          acceptedAnswer: {
            "@type": "Answer",
            text: t("home.structuredGaussAnswer"),
          },
        },
        {
          "@type": "Question",
          name: t("home.structuredInverseQuestion"),
          acceptedAnswer: {
            "@type": "Answer",
            text: t("home.structuredInverseAnswer"),
          },
        },
      ],
    },
  ];

  const renderSizeInput = (label, state, onChangeHandler) => (
    <div className="mb-2 text-center">
      <span className="mr-2 text-sm font-semibold dark:text-slate-200 sm:text-base">
        {label}:
      </span>
      <div className="inline-flex gap-2">
        <select
          name="rows"
          value={state.rows}
          onChange={onChangeHandler}
          aria-label={t("home.rowsAria", { label })}
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
          aria-label={t("home.colsAria", { label })}
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
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="mx-auto max-w-5xl p-4 text-center sm:p-6">
        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-extrabold text-gray-800 dark:text-slate-100 sm:text-4xl">
            {pageHeroTitle}
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-slate-300 sm:text-base">
            {pageHeroDescription}
          </p>
        </header>

        <div className="mb-12 rounded-xl border border-gray-100 bg-white p-4 shadow-lg transition-colors dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="mb-6">
            <label
              htmlFor="operation-select"
              className="mb-2 block font-bold text-gray-700 dark:text-slate-200"
            >
              {t("home.operationPrompt")}
            </label>
            <select
              id="operation-select"
              className="w-full max-w-md rounded-lg border-2 border-blue-100 bg-blue-50 p-3 text-center outline-none transition-colors focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              value={operation}
              onChange={handleOperationChange}
            >
              {operationOptions.map((option) => (
                <option key={option} value={option}>
                  {t(`calculator.operations.${option}`)}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-8 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start">
            <div className="w-full max-w-xs">
              {renderSizeInput(t("home.sizeA"), sizeA, (e) =>
                handleSizeChange("A", e),
              )}
              <MatrixInput
                matrix={matrixA}
                setMatrix={setMatrixA}
                label={t("calculator.labels.matrixA")}
                rows={sizeA.rows}
                cols={sizeA.cols}
              />
            </div>

            {operation === "escalar" && (
              <div className="flex flex-col items-center justify-center pt-8">
                <span className="mb-2 font-bold dark:text-slate-200">
                  {t("home.scalar")}
                </span>
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
                {renderSizeInput(t("home.sizeB"), sizeB, (e) =>
                  handleSizeChange("B", e),
                )}
                <MatrixInput
                  matrix={matrixB}
                  setMatrix={setMatrixB}
                  label={t("calculator.labels.matrixB")}
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
              {isCalculating ? t("home.calculating") : t("home.calculateNow")}
            </button>

            <button
              onClick={handleClear}
              className="w-full rounded-full border border-gray-300 bg-gray-100 px-8 py-3 font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:w-auto"
            >
              {t("home.clearData")}
            </button>
          </div>

          {showTutorialLinks && activeTutorialSlug && (
            <div className="mt-5 flex justify-center">
              <div className="max-w-full rounded-lg border border-yellow-100 bg-yellow-50 p-3 dark:border-amber-800 dark:bg-amber-950/40">
                <p className="text-sm text-yellow-800 dark:text-amber-100">
                  {t("home.tutorialHint")}{" "}
                  <Link
                    to={`/tutorial/${activeTutorialSlug}`}
                    className="font-bold underline hover:text-yellow-900 dark:hover:text-amber-50"
                  >
                    {t("home.tutorialHintLink", {
                      operation: activeTutorialName,
                    })}
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

        <div className="mx-auto mb-16 max-w-5xl">
          <ResultDisplay result={result} />

          {steps.length > 0 && (
            <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-8 lg:p-10">
              <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-gray-800 dark:text-slate-100">
                {t("home.stepByStepTitle")}
              </h2>

              <div className="space-y-10">
                {steps.map((step, i) => {
                  const hasMatrix = Boolean(step.matrix);

                  return (
                    <div
                      key={i}
                      className={[
                        "flex flex-col items-start gap-6",
                        hasMatrix ? "lg:flex-row lg:gap-10" : "",
                      ].join(" ")}
                    >
                      <div
                        className={
                          hasMatrix
                            ? "w-full lg:w-5/12 lg:flex-shrink-0"
                            : "w-full"
                        }
                      >
                        <div className="mb-2 flex items-center gap-3">
                          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gray-900 font-mono text-xs font-bold text-white dark:bg-blue-500">
                            {i + 1}
                          </span>
                          <h3 className="min-w-0 break-words text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-slate-100">
                            {step.title}
                          </h3>
                        </div>
                        <p className="whitespace-pre-wrap break-words rounded border border-gray-200 bg-gray-50 px-3 py-2 font-mono text-sm text-gray-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 sm:ml-10">
                          {step.description}
                        </p>
                      </div>

                      {hasMatrix && (
                        <div className="flex w-full justify-center pb-4 lg:w-7/12 lg:justify-start">
                          <MatrixDisplay
                            matrix={step.matrix}
                            emptyPlaceholder={t("calculator.emptyPlaceholder")}
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

        {showTutorialLinks && (
        <div className="mt-20 border-t border-gray-200 pt-12 dark:border-slate-800">
          <div className="mx-auto mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {t("home.recommendedEyebrow")}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-800 dark:text-slate-100 sm:text-3xl">
              {t("home.recommendedTitle")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-slate-300 sm:text-base">
              {t("home.recommendedDescription")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTutorials.map((tutorial) => (
              <article
                key={tutorial.id}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 text-left transition-all hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500"
              >
                <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                  {tutorial.title}
                </h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-500 dark:text-slate-300">
                  {tutorial.description}
                </p>
                <Link
                  to={`/tutorial/${tutorial.slug}`}
                  className="inline-flex flex-wrap items-center gap-x-1 text-sm font-bold text-blue-600 transition-transform group-hover:translate-x-2 dark:text-blue-400"
                >
                  {t("common.readTutorial", { title: tutorial.title })}{" "}
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/tutorials"
              className="inline-flex w-full justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50 dark:border-blue-900 dark:bg-slate-900 dark:text-blue-300 dark:hover:bg-slate-800 sm:w-auto"
            >
              {t("home.allTutorials")}
            </Link>
          </div>
        </div>
        )}
      </section>
    </div>
  );
};

export default Home;
