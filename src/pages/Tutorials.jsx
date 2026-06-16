import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { tutoriais } from "../data/tutorialsData";

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
  <article className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 text-left transition-all hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500">
    <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-blue-600 dark:text-slate-100">
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
);

const Tutorials = () => {
  const categorizedSlugs = new Set(
    tutorialCategories.flatMap((category) => category.slugs),
  );
  const categories = tutorialCategories
    .map((category) => ({
      ...category,
      tutorials: category.slugs
        .map((slug) => tutoriais.find((tutorial) => tutorial.slug === slug))
        .filter(Boolean),
    }))
    .filter((category) => category.tutorials.length > 0);
  const remainingTutorials = tutoriais.filter(
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
        <link rel="canonical" href="https://www.matrizcalculator.com/tutorials" />
      </Helmet>

      <section className="p-4 sm:p-6 max-w-5xl mx-auto text-center min-h-[70vh]">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800 dark:text-slate-100">
            Catálogo de Tutoriais de Álgebra Linear
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto dark:text-slate-300">
            Escolha um tema e veja a explicação passo a passo, com exemplos
            antes de usar a calculadora.
          </p>
        </header>

        <div className="space-y-14">
          {allCategories.map((category) => (
            <section key={category.title} className="text-left">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                  {category.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed dark:text-slate-300">
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
