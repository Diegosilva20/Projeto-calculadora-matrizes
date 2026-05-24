import { useI18n } from "../../i18n/LanguageContext";

const localeByLanguage = {
  "pt-BR": "pt-BR",
  en: "en-US",
  es: "es-ES",
};

const formatNumber = (value, language) => {
  const number = Number(value);

  if (isNaN(number)) {
    return "N/A";
  }

  if (Math.abs(number) >= 100000) {
    return number.toExponential(2);
  }

  return new Intl.NumberFormat(localeByLanguage[language] || "pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

const ResultDisplay = ({ result }) => {
  const { language, t } = useI18n();

  if (!result) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="mb-2 text-sm font-semibold dark:text-slate-200 sm:text-base">
        {t("calculator.result")}
      </h2>
      <div
        className="mx-auto grid max-w-[90vw] justify-center gap-1"
        style={{
          gridTemplateColumns: `repeat(${result[0].length}, minmax(0, 80px))`,
        }}
      >
        {result.map((row, i) =>
          row.map((val, j) => (
            <div
              key={`result-${i}-${j}`}
              className="rounded bg-gray-200 p-2 text-center text-sm text-gray-900 dark:bg-slate-800 dark:text-slate-100"
            >
              {formatNumber(val, language)}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default ResultDisplay;
