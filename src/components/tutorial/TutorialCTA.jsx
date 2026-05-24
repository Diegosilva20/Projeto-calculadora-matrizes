import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/LanguageContext";

const TutorialCTA = ({
  title,
  children,
  primaryTo = "/",
  primaryLabel,
  secondaryTo,
  secondaryLabel,
}) => {
  const { t } = useI18n();

  return (
    <div className="tutorial-cta rounded-lg bg-blue-600 p-6 text-white shadow-md dark:bg-blue-700">
      <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
      <p className="mb-5 leading-relaxed text-blue-50">{children}</p>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to={primaryTo}
          className="tutorial-cta-primary inline-flex w-full justify-center rounded-full bg-white px-6 py-3 font-bold text-blue-700 transition-colors hover:bg-blue-50 dark:bg-slate-100 dark:text-blue-700 sm:w-auto"
        >
          {primaryLabel || t("common.backToCalculator")}
        </Link>
        {secondaryTo && secondaryLabel && (
          <Link
            to={secondaryTo}
            className="inline-flex w-full justify-center rounded-full border border-blue-200 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-500 sm:w-auto"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

export default TutorialCTA;
