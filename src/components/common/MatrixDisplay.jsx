import React, { useCallback, useMemo, useState } from "react";

const toCellKey = (row, col) => `${row}:${col}`;

const createCellSet = (cells = []) =>
  new Set(cells.map(([row, col]) => toCellKey(row, col)));

const MatrixDisplay = React.memo(({ matrix, emptyPlaceholder = "", highlight = {} }) => {
  const [visibleRows, setVisibleRows] = useState(5);
  const columnCount = matrix[0]?.length || 0;

  const highlightSets = useMemo(
    () => ({
      cells: createCellSet(highlight.cells),
      resultCells: createCellSet(highlight.resultCells),
      pivotCells: createCellSet(highlight.pivotCells),
      secondaryCells: createCellSet(highlight.secondaryCells),
      rows: new Set(highlight.rows || []),
      cols: new Set(highlight.cols || []),
    }),
    [highlight],
  );

  const getCellClasses = useCallback((row, col, value) => {
    if (value === "|") {
      return "min-w-3 px-0 text-slate-400 dark:text-slate-500";
    }

    const key = toCellKey(row, col);

    if (highlightSets.pivotCells.has(key)) {
      return "bg-rose-100 text-rose-900 ring-2 ring-rose-400 dark:bg-rose-950 dark:text-rose-100 dark:ring-rose-500";
    }

    if (highlightSets.resultCells.has(key)) {
      return "bg-blue-100 text-blue-900 ring-2 ring-blue-400 dark:bg-blue-950 dark:text-blue-100 dark:ring-blue-500";
    }

    if (highlightSets.cells.has(key)) {
      return "bg-amber-100 text-amber-950 ring-2 ring-amber-400 dark:bg-amber-950 dark:text-amber-100 dark:ring-amber-500";
    }

    if (highlightSets.secondaryCells.has(key)) {
      return "bg-orange-100 text-orange-950 ring-2 ring-orange-400 dark:bg-orange-950 dark:text-orange-100 dark:ring-orange-500";
    }

    if (highlightSets.rows.has(row)) {
      return "bg-sky-50 text-sky-900 dark:bg-sky-950 dark:text-sky-100";
    }

    if (highlightSets.cols.has(col)) {
      return "bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100";
    }

    return value === ""
      ? "text-slate-300 dark:text-slate-600"
      : "text-slate-900 dark:text-slate-100";
  }, [highlightSets]);

  const renderCells = useMemo(() => {
    return matrix.slice(0, visibleRows).flatMap((row, i) =>
      row.map((val, j) => (
        <div
          key={`matrix-${i}-${j}`}
          className={[
            "flex h-9 min-w-10 items-center justify-center rounded-md px-2",
            "text-center font-mono text-sm leading-none transition-colors sm:text-base",
            getCellClasses(i, j, val),
          ].join(" ")}
        >
          {val === "" ? emptyPlaceholder : val}
        </div>
      )),
    );
  }, [emptyPlaceholder, getCellClasses, matrix, visibleRows]);

  return (
    <div className="my-3 w-full overflow-x-auto py-1">
      <div className="mx-auto flex w-max min-w-max items-stretch px-1">
        <div className="w-3 rounded-l-lg border-y-2 border-l-2 border-slate-700 dark:border-slate-300" />
        <div
          className="grid gap-x-2 gap-y-1 px-3 py-2"
          style={{
            gridTemplateColumns: `repeat(${columnCount}, minmax(2.25rem, max-content))`,
          }}
        >
          {renderCells}
        </div>
        <div className="w-3 rounded-r-lg border-y-2 border-r-2 border-slate-700 dark:border-slate-300" />
      </div>

      {visibleRows < matrix.length && (
        <button
          onClick={() =>
            setVisibleRows((prev) => Math.min(prev + 5, matrix.length))
          }
          className="mt-3 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 sm:w-auto"
        >
          Carregar Mais
        </button>
      )}
    </div>
  );
});

export default MatrixDisplay;
