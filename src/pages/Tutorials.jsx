import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { tutorialsInfo } from "../data/tutorialsInfo";

const tutorialCategories = [
  {
    title: "Operações básicas",
    description:
      "Conceitos iniciais para entender como matrizes mudam elemento por elemento.",
    slugs: [
      "soma-de-matrizes",
      "subtracao-de-matrizes",
      "multiplicacao-por-escalar",
      "matriz-transposta",
    ],
  },
  {
    title: "Operações intermediárias",
    description:
      "Guias para cálculos mais frequentes em exercícios de álgebra linear.",
    slugs: [
      "multiplicacao-de-matrizes",
      "determinante-2x2",
      "determinante-de-matrizes",
      "determinante-3x3-regra-de-sarrus",
      "matriz-inversa",
    ],
  },
  {
    title: "Sistemas e métodos",
    description:
      "Métodos para escalonar matrizes e interpretar sistemas lineares.",
    slugs: ["escalonamento-gauss", "sistemas-lineares", "regra-de-cramer", "posto-de-matriz"],
  },
];

const TutorialCard = ({ tutorial }) => (
  <article className="group flex flex-col rounded-2xl border border-slate-200 shadow-sm dark:border-slate-700/50 border border-slate-200 shadow-sm dark:border-slate-700/20 bg-white p-6 text-left transition-all hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500">
    <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-accent dark:text-slate-100">
      {tutorial.title}
    </h3>
    <p className="text-slate-600 dark:text-slate-300/70 text-sm mb-6 flex-grow leading-relaxed dark:text-slate-300">
      {tutorial.description}
    </p>
    <Link
      to={`/tutorial/${tutorial.slug}`}
      className="inline-flex flex-wrap items-center gap-x-1 text-sm font-bold text-accent transition-transform group-hover:translate-x-2 dark:text-blue-400"
    >
      Ler tutorial: {tutorial.title} <span>→</span>
    </Link>
  </article>
);

const Tutorials = () => {
  const categorizedSlugs = new Set(
    tutorialCategories.flatMap((category) => category.slugs),
  );
  const categories = tutorialCategories
    .map((category) => ({
      ...category,
      tutorials: category.slugs
        .map((slug) => tutorialsInfo.find((tutorial) => tutorial.slug === slug))
        .filter(Boolean),
    }))
    .filter((category) => category.tutorials.length > 0);
  const remainingTutorials = tutorialsInfo.filter(
    (tutorial) => !categorizedSlugs.has(tutorial.slug),
  );
  const allCategories =
    remainingTutorials.length > 0
      ? [
          ...categories,
          {
            title: "Outros tutoriais",
            description: "Conteúdos complementares do catálogo.",
            tutorials: remainingTutorials,
          },
        ]
      : categories;

  return (
    <>
      <Helmet>
        <title>Tutoriais de Matrizes com Exemplos Resolvidos | Matriz Calculator</title>
        <meta name="description" content="Aprenda matrizes com tutoriais passo a passo, exemplos resolvidos, fórmulas e links para calculadora de determinante, inversa, multiplicação e Gauss." />
        <link rel="canonical" href="https://calculamatriz.vercel.app/tutorials" />
        <meta property="og:title" content="Tutoriais de Matrizes com Exemplos Resolvidos | Matriz Calculator" />
        <meta property="og:description" content="Aprenda matrizes com tutoriais passo a passo, exemplos resolvidos, fórmulas e links para calculadora de determinante, inversa, multiplicação e Gauss." />
        <meta property="og:url" content="https://calculamatriz.vercel.app/tutorials" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://calculamatriz.vercel.app/logo1920.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://calculamatriz.vercel.app/logo1920.png" />
      </Helmet>

      <section className="p-4 sm:p-6 max-w-5xl mx-auto text-center min-h-[70vh]">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white dark:text-slate-100">
            Catálogo de Tutoriais de Álgebra Linear
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto dark:text-slate-300">
            Escolha um tema e veja a explicação passo a passo, com exemplos
            antes de usar a calculadora.
          </p>
        </header>

        <div className="space-y-14">
          {allCategories.map((category) => (
            <section key={category.title} className="text-left">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white dark:text-slate-100">
                  {category.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed dark:text-slate-300">
                  {category.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.tutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tutorials;
