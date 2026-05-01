import { Link } from "react-router-dom";

const TutorialCTA = ({ title, children, primaryTo = "/", primaryLabel = "Abrir calculadora", secondaryTo, secondaryLabel }) => (
  <div className="tutorial-cta rounded-lg bg-blue-600 p-6 text-white shadow-md dark:bg-blue-700">
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <p className="mb-5 text-blue-50 leading-relaxed">{children}</p>
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
      <Link
        to={primaryTo}
        className="tutorial-cta-primary inline-flex w-full justify-center rounded-full bg-white px-6 py-3 font-bold text-blue-700 transition-colors hover:bg-blue-50 dark:bg-slate-100 dark:text-blue-700 sm:w-auto"
      >
        {primaryLabel}
      </Link>
      {secondaryTo && secondaryLabel && (
        <Link
          to={secondaryTo}
          className="inline-flex w-full justify-center rounded-full border border-blue-200 px-6 py-3 font-bold text-white hover:bg-blue-500 transition-colors sm:w-auto"
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  </div>
);

export default TutorialCTA;
