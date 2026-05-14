import MatrixDisplay from "../common/MatrixDisplay";

const SymbolicMatrix = ({ label, matrix, className = "" }) => (
  <div
    className={
      [
        "text-center font-semibold text-lg p-4 bg-slate-50 border border-slate-200 rounded-lg",
        className,
      ]
        .filter(Boolean)
        .join(" ")
    }
  >
    {label && (
      <div className="mb-3 text-base text-slate-700 dark:text-slate-200">
        {label}
      </div>
    )}
    <div className="inline-block">
      <MatrixDisplay matrix={matrix} />
    </div>
  </div>
);

export default SymbolicMatrix;
