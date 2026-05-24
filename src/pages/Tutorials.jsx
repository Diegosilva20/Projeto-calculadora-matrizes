import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TutorialsUnavailable from "../components/tutorial/TutorialsUnavailable";
import { getTutoriais } from "../data/tutorialsData";
import { useI18n } from "../i18n/LanguageContext";

const recommendedSequence = [
  { order: 1, slug: "o-que-e-uma-matriz" },
  { order: 2, slug: "soma-de-matrizes" },
  { order: 3, slug: "subtracao-de-matrizes" },
  { order: 4, slug: "multiplicacao-por-escalar" },
  { order: 5, slug: "multiplicacao-de-matrizes" },
  { order: 6, slug: "determinante-2x2" },
  { order: 7, slug: "determinante-de-matrizes" },
  { order: 8, slug: "matriz-identidade" },
  { order: 9, slug: "matriz-inversa" },
  { order: 10, slug: "escalonamento-gauss" },
  { order: 11, slug: "sistemas-lineares" },
  { order: 12, slug: "regra-de-cramer" },
];

const tutorialCategories = [
  {
    index: 0,
    slugs: [
      "soma-de-matrizes",
      "subtracao-de-matrizes",
      "multiplicacao-por-escalar",
      "matriz-transposta",
    ],
  },
  {
    index: 1,
    slugs: [
      "multiplicacao-de-matrizes",
      "determinante-2x2",
      "determinante-de-matrizes",
      "determinante-3x3-regra-de-sarrus",
      "matriz-inversa",
    ],
  },
  {
    index: 2,
    slugs: [
      "escalonamento-gauss",
      "sistemas-lineares",
      "regra-de-cramer",
      "posto-de-matriz",
    ],
  },
];

const TutorialCard = ({ tutorial, t }) => (
  <article className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 text-left transition-all hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500">
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
      {t("common.readTutorial", { title: tutorial.title })} <span>→</span>
    </Link>
  </article>
);

const SequenceCard = ({ tutorial, sequenceNumber, t }) => (
  <article className="group flex flex-col rounded-xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-left transition-all hover:border-blue-500 hover:shadow-xl dark:border-blue-900 dark:from-slate-900 dark:to-blue-950/50 dark:hover:border-blue-500">
    <div className="mb-3 flex items-center gap-3">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
        {sequenceNumber}
      </div>
      <h3 className="flex-grow text-lg font-bold text-gray-800 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
        {tutorial.title}
      </h3>
    </div>
    <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-600 dark:text-slate-300">
      {tutorial.description}
    </p>
    <Link
      to={`/tutorial/${tutorial.slug}`}
      className="inline-flex flex-wrap items-center gap-x-1 text-sm font-bold text-blue-600 transition-transform group-hover:translate-x-2 dark:text-blue-400"
    >
      {t("common.startTutorial", { title: tutorial.title })} <span>→</span>
    </Link>
  </article>
);

const Tutorials = () => {
  const { language, t } = useI18n();
  const tutoriais = useMemo(() => getTutoriais(language), [language]);
  const categoryCopy = t("tutorials.categories");
  const showTutorials = language === "pt-BR";

  const allCategories = useMemo(() => {
    const recommendedCategory = {
      title: t("tutorials.page.recommendedTitle"),
      description: t("tutorials.page.recommendedDescription"),
      isSequence: true,
      tutorials: recommendedSequence
        .map((item) => tutoriais.find((tutorial) => tutorial.slug === item.slug))
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
        title: categoryCopy[category.index].title,
        description: categoryCopy[category.index].description,
        tutorials: category.slugs
          .map((slug) => tutoriais.find((tutorial) => tutorial.slug === slug))
          .filter(Boolean),
      }))
      .filter((category) => category.tutorials.length > 0);
    const remainingTutorials = tutoriais.filter(
      (tutorial) => !categorizedSlugs.has(tutorial.slug),
    );

    return remainingTutorials.length > 0
      ? [
          recommendedCategory,
          ...categories,
          {
            title: t("tutorials.page.otherTitle"),
            description: t("tutorials.page.otherDescription"),
            tutorials: remainingTutorials,
          },
        ]
      : [recommendedCategory, ...categories];
  }, [categoryCopy, t, tutoriais]);

  return (
    <>
      <Helmet>
        <title>{t("tutorials.page.metaTitle")}</title>
        <meta name="description" content={t("tutorials.page.metaDescription")} />
        <link rel="canonical" href="https://www.matrizcalculator.com/tutorials" />
      </Helmet>

      {!showTutorials ? (
        <TutorialsUnavailable />
      ) : (
        <section className="mx-auto min-h-[70vh] max-w-5xl p-4 text-center sm:p-6">
          <header className="mb-12">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-800 dark:text-slate-100 sm:text-4xl">
              {t("tutorials.page.title")}
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-slate-300 sm:text-base">
              {t("tutorials.page.description")}
            </p>
          </header>

          <div className="space-y-14">
            {allCategories.map((category) => (
              <section key={category.title} className="text-left">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
                    {category.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-slate-300 sm:text-base">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {category.tutorials.map((tutorial) =>
                    category.isSequence ? (
                      <SequenceCard
                        key={tutorial.id}
                        tutorial={tutorial}
                        sequenceNumber={tutorial.sequenceNumber}
                        t={t}
                      />
                    ) : (
                      <TutorialCard key={tutorial.id} tutorial={tutorial} t={t} />
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Tutorials;
