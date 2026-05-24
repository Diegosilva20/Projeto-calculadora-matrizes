import { Helmet } from "react-helmet";
import { FaBug, FaEnvelope, FaLightbulb, FaQuestionCircle } from "react-icons/fa";
import { useI18n } from "../i18n/LanguageContext";

const topicIcons = [
  <FaBug className="h-8 w-8" aria-hidden="true" />,
  <FaLightbulb className="h-8 w-8" aria-hidden="true" />,
  <FaQuestionCircle className="h-8 w-8" aria-hidden="true" />,
];

function Contato() {
  const { t } = useI18n();
  const contactTopics = t("pages.contact.topics");

  return (
    <>
      <Helmet>
        <title>{t("pages.contact.metaTitle")}</title>
        <meta name="description" content={t("pages.contact.metaDescription")} />
        <link rel="canonical" href="https://www.matrizcalculator.com/contato" />
      </Helmet>

      <section className="mx-auto min-h-[70vh] max-w-5xl p-4 text-center sm:p-6">
        <header className="mb-12">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-800 dark:text-slate-100 sm:text-4xl">
            {t("pages.contact.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-slate-300 sm:text-base">
            {t("pages.contact.description")}
          </p>
        </header>

        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactTopics.map((topic, index) => (
            <article
              key={topic.title}
              className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 sm:last:col-span-2 sm:last:max-w-md sm:last:justify-self-center lg:last:col-span-1 lg:last:max-w-none"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/70 dark:text-blue-300">
                {topicIcons[index]}
              </div>
              <h2 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                {topic.title}
              </h2>
              <p className="flex-grow text-sm leading-relaxed text-gray-500 dark:text-slate-300">
                {topic.description}
              </p>
            </article>
          ))}
        </div>

        <section className="rounded-3xl bg-blue-600 p-8 text-center shadow-lg dark:bg-blue-700 sm:p-12">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 dark:bg-slate-100">
            <FaEnvelope className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            {t("pages.contact.channelTitle")}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-lg">
            {t("pages.contact.channelDescription")}
          </p>
          <a
            href="mailto:suporte@matrizcalculator.com"
            className="inline-flex max-w-full justify-center break-all rounded-full bg-white px-6 py-3 text-sm font-extrabold text-blue-600 shadow-md transition-all hover:-translate-y-1 hover:bg-blue-50 dark:bg-slate-100 sm:px-8 sm:text-lg"
          >
            suporte@matrizcalculator.com
          </a>
        </section>
      </section>
    </>
  );
}

export default Contato;
