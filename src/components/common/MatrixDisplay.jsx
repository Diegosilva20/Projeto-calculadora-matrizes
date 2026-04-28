import React, { useMemo, useState } from "react";

const MatrixDisplay = React.memo(({ matrix, emptyPlaceholder = "" }) => {
  const [visibleRows, setVisibleRows] = useState(5);
  const columnCount = matrix[0]?.length || 0;

  const renderCells = useMemo(() => {
    return matrix.slice(0, visibleRows).flatMap((row, i) =>
      row.map((val, j) => (
        <div
          key={`matrix-${i}-${j}`}
          className={[
            "flex h-9 min-w-10 items-center justify-center rounded-md px-2",
            "text-center font-mono text-sm leading-none sm:text-base",
            val === "" ? "text-slate-300" : "text-slate-900",
          ].join(" ")}
        >
          {val === "" ? emptyPlaceholder : val}
        </div>
      )),
    );
  }, [emptyPlaceholder, matrix, visibleRows]);

  return (
    <div className="my-3 w-full overflow-x-auto py-1">
      <div className="mx-auto flex w-max min-w-max items-stretch px-1">
        <div className="w-3 rounded-l-lg border-y-2 border-l-2 border-slate-700" />
        <div
          className="grid gap-x-2 gap-y-1 px-3 py-2"
          style={{
            gridTemplateColumns: `repeat(${columnCount}, minmax(2.25rem, max-content))`,
          }}
        >
          {renderCells}
        </div>
        <div className="w-3 rounded-r-lg border-y-2 border-r-2 border-slate-700" />
      </div>

      {visibleRows < matrix.length && (
        <button
          onClick={() =>
            setVisibleRows((prev) => Math.min(prev + 5, matrix.length))
          }
          className="mt-3 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
        >
          Carregar Mais
        </button>
      )}
    </div>
  );
});

export default MatrixDisplay;
