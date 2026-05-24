import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/LanguageContext";

const TutorialsUnavailable = () => {
  const { setLanguage, t } = useI18n();

  return (
    <section className="mx-auto min-h-[60vh] max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
      <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-lg transition-colors dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {t("nav.tutorials")}
        </p>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-4xl">
          {t("tutorials.unavailable.title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          {t("tutorials.unavailable.description")}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setLanguage("pt-BR")}
            className="inline-flex w-full justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-blue-700 sm:w-auto"
          >
            {t("tutorials.unavailable.switchLanguage")}
          </button>
          <Link
            to="/"
            className="inline-flex w-full justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50 dark:border-blue-900 dark:bg-slate-900 dark:text-blue-300 dark:hover:bg-slate-800 sm:w-auto"
          >
            {t("tutorials.unavailable.useCalculator")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TutorialsUnavailable;
