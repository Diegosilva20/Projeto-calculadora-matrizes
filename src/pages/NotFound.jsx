import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/LanguageContext";

function NotFound() {
  const { t } = useI18n();

  return (
    <section className="mx-auto min-h-[60vh] max-w-3xl px-6 py-24 text-center">
      <Helmet>
        <title>{t("pages.notFound.metaTitle")}</title>
        <meta name="description" content={t("pages.notFound.metaDescription")} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-slate-100">
        {t("pages.notFound.title")}
      </h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-slate-300">
        {t("pages.notFound.description")}
      </p>
      <Link
        to="/"
        className="inline-block rounded-full bg-blue-600 px-8 py-3 font-bold text-white transition-colors hover:bg-blue-700"
      >
        {t("common.backToCalculator")}
      </Link>
    </section>
  );
}

export default NotFound;
