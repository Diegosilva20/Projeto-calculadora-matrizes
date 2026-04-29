import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { tutoriais } from "../data/tutorialsData";

// Sequência recomendada para iniciantes
const recommendedSequence = [
  {
    order: 1,
    slug: "o-que-e-uma-matriz",
  },
  {
    order: 2,
    slug: "soma-de-matrizes",
  },
  {
    order: 3,
    slug: "subtracao-de-matrizes",
  },
  {
    order: 4,
    slug: "multiplicacao-por-escalar",
  },
  {
    order: 5,
    slug: "multiplicacao-de-matrizes",
  },
  {
    order: 6,
    slug: "determinante-de-matrizes",
  },
  {
    order: 7,
    slug: "matriz-identidade",
  },
  {
    order: 8,
    slug: "matriz-inversa",
  },
  {
    order: 9,
    slug: "escalonamento-gauss",
  },
  {
    order: 10,
    slug: "sistemas-lineares",
  },
];

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
      "determinante-de-matrizes",
      "determinante-3x3-regra-de-sarrus",
      "matriz-inversa",
    ],
  },
  {
    title: "Sistemas e métodos",
    description:
      "Métodos para escalonar matrizes e interpretar sistemas lineares.",
    slugs: ["escalonamento-gauss", "sistemas-lineares"],
  },
];

const TutorialCard = ({ tutorial }) => (
  <article className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-all hover:shadow-xl flex flex-col text-left">
    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
      {tutorial.title}
    </h3>
    <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
      {tutorial.description}
    </p>
    <Link
      to={`/tutorial/${tutorial.slug}`}
      className="text-blue-600 font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform"
    >
      Ler Tutorial Completo <span className="ml-1">→</span>
    </Link>
  </article>
);

const SequenceCard = ({ tutorial, sequenceNumber }) => (
  <article className="group bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6 hover:border-blue-500 transition-all hover:shadow-xl flex flex-col text-left">
    <div className="flex items-center gap-3 mb-3">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
        {sequenceNumber}
      </div>
      <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors flex-grow">
        {tutorial.title}
      </h3>
    </div>
    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
      {tutorial.description}
    </p>
    <Link
      to={`/tutorial/${tutorial.slug}`}
      className="text-blue-600 font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform"
    >
      Começar <span className="ml-1">→</span>
    </Link>
  </article>
);

const Tutorials = () => {
  // Constrói category para sequência recomendada
  const recommendedCategory = {
    title: "🚀 Comece por Aqui: Sequência Recomendada",
    description:
      "Siga esta ordem para aprender álgebra linear do zero até conceitos avançados. Cada tutorial prepara você para o próximo.",
    tutorials: recommendedSequence
      .map((item) => tutoriais.find((t) => t.slug === item.slug))
      .filter(Boolean)
      .map((tutorial, index) => ({
        ...tutorial,
        sequenceNumber: index + 1,
      })),
  };

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
          recommendedCategory,
          ...categories,
          {
            title: "Outros tutoriais",
            description: "Conteúdos complementares do catálogo.",
            tutorials: remainingTutorials,
          },
        ]
      : [recommendedCategory, ...categories];

  return (
    <>
      <Helmet>
        <title>Tutoriais de Álgebra Linear e Matrizes | Matriz Calculator</title>
        <meta name="description" content="Aprenda passo a passo como calcular soma, subtração, multiplicação por escalar, determinantes, matriz inversa, transposta, multiplicação e escalonamento pelo método de Gauss." />
        <link rel="canonical" href="https://www.matrizcalculator.com/tutorials" />
      </Helmet>

      <section className="p-4 sm:p-6 max-w-5xl mx-auto text-center min-h-[70vh]">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800">
            Catálogo de Tutoriais de Álgebra Linear
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore todos os guias disponíveis, organizados por nível de
            dificuldade e tipo de operação.
          </p>
        </header>

        <div className="space-y-14">
          {allCategories.map((category) => (
            <section key={category.title} className="text-left">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {category.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.tutorials.map((tutorial) =>
                  category.title.includes("Comece por Aqui") ? (
                    <SequenceCard
                      key={tutorial.id}
                      tutorial={tutorial}
                      sequenceNumber={tutorial.sequenceNumber}
                    />
                  ) : (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                  )
                )}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tutorials;
