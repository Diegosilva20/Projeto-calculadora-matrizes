import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaBookOpen, FaCalculator, FaComments } from "react-icons/fa";
import { useI18n } from "../i18n/LanguageContext";

const pillarIcons = [
  <FaCalculator className="h-9 w-9" aria-hidden="true" />,
  <FaBookOpen className="h-9 w-9" aria-hidden="true" />,
];

function Sobre() {
  const { t } = useI18n();
  const pillars = t("pages.about.pillars");

  return (
    <>
      <Helmet>
        <title>{t("pages.about.metaTitle")}</title>
        <meta name="description" content={t("pages.about.metaDescription")} />
        <link rel="canonical" href="https://www.matrizcalculator.com/sobre" />
      </Helmet>

      <section className="mx-auto min-h-[70vh] max-w-5xl p-4 text-center sm:p-6">
        <header className="mb-12">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-800 dark:text-slate-100 sm:text-4xl">
            {t("pages.about.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-slate-300 sm:text-base">
            {t("pages.about.description")}
          </p>
        </header>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 sm:p-8"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/70 dark:text-blue-300">
                {pillarIcons[index]}
              </div>
              <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                {pillar.title}
              </h2>
              <p className="mb-8 flex-grow text-sm leading-relaxed text-gray-500 dark:text-slate-300 sm:text-base">
                {pillar.description}
              </p>
              <Link
                to={pillar.to}
                className="inline-flex justify-center rounded-full bg-blue-600 px-6 py-3 font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700"
              >
                {pillar.action}
              </Link>
            </article>
          ))}
        </div>

        <section className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-colors dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-8">
          <div className="flex flex-col items-center gap-5">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/70 dark:text-blue-300">
              <FaComments className="h-8 w-8" aria-hidden="true" />
            </div>
            <div className="max-w-2xl">
              <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-slate-100">
                {t("pages.about.nextTitle")}
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-300 sm:text-base">
                {t("pages.about.nextTextBefore")}{" "}
                <Link
                  to="/contato"
                  className="font-bold text-blue-600 hover:underline dark:text-blue-400"
                >
                  {t("pages.about.nextLink")}
                </Link>
                {t("pages.about.nextTextAfter")}
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Sobre;
