import React, { useMemo, useState } from "react";

const MatrixDisplay = React.memo(({ matrix }) => {
  const [visibleRows, setVisibleRows] = useState(5);
  const columnCount = matrix[0]?.length || 0;

  // Renderização performática
  const renderCells = useMemo(() => {
    return matrix.slice(0, visibleRows).flatMap((row, i) =>
      row.map((val, j) => (
        <div
          key={`matrix-${i}-${j}`}
          className="bg-white border border-gray-300 p-2 rounded text-center font-mono text-sm sm:text-base hover:bg-gray-50 transition-colors"
        >
          {val}
        </div>
      ))
    );
  }, [matrix, visibleRows]);

  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-sm my-2 overflow-x-auto">
      {/* Usando variáveis puras do Tailwind e CSS para responsividade real */}
      <div 
        className="grid gap-1 sm:gap-2 min-w-max" 
        style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(50px, 1fr))` }}
      >
        {renderCells}
      </div>
      
      {visibleRows < matrix.length && (
        <button
          onClick={() => setVisibleRows((prev) => Math.min(prev + 5, matrix.length))}
          className="mt-4 px-4 py-2 w-full sm:w-auto bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Carregar Mais
        </button>
      )}
    </div>
  );
});

export default MatrixDisplay;