import React, { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const formatOutput = (value) => {
  if (typeof value === "string" && value.includes("/")) {
    return value;
  }
  const number = Number(value);
  if (isNaN(number)) return String(value);
  if (Math.abs(number) >= 100000) {
    return number.toExponential(2);
  }
  if (Number.isInteger(number)) return number.toString();
  return parseFloat(number.toFixed(4)).toString();
};

const ResultDisplay = ({ result, onUseAsMatrixA }) => {
  const [copied, setCopied] = useState(false);

  if (!result || result.length === 0) {
    return null;
  }

  const handleCopy = () => {
    const textToCopy = result.map(row => row.map(formatOutput).join("\t")).join("\n");
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const cols = result[0].length;

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="flex w-full max-w-2xl items-center justify-between mb-4">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Resultado Final</h2>
        
        <div className="flex gap-2">
          {onUseAsMatrixA && (
            <button
              onClick={onUseAsMatrixA}
              className="flex items-center gap-2 rounded-lg bg-blueprint-100 dark:bg-blueprint-900 px-3 py-1.5 text-sm font-semibold text-accent dark:text-blue-400 transition-colors hover:bg-blueprint-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-accent"
              title="Preencher a Matriz A lá em cima com este resultado"
            >
              ⮐ Usar como Matriz A
            </button>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Copiar matriz resultante"
          >
            {copied ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
            {copied ? "Copiado!" : "Copiar"}
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-4 px-2">
        <div className="mx-auto flex w-max min-w-max items-stretch">
          <div
            className="grid gap-x-2 gap-y-2 px-4 py-3 matrix-bracket bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm"
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(3rem, max-content))`,
            }}
          >
            {result.map((row, i) =>
              row.map((val, j) => (
                <div
                  key={`result-${i}-${j}`}
                  className="flex h-10 min-w-12 items-center justify-center rounded-md bg-slate-50 dark:bg-slate-950 px-3 font-mono text-sm font-semibold text-slate-900 dark:text-slate-100 shadow-sm border border-slate-200/50 dark:border-slate-800 transition-colors hover:border-accent dark:hover:border-accent"
                >
                  {formatOutput(val)}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
