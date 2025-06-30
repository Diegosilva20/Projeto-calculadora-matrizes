import React, { useMemo, useState } from "react";

const MatrixDisplay = React.memo(({ matrix }) => {
  // Estado para controlar o número de linhas visíveis
  const [visibleRows, setVisibleRows] = useState(5); // Limite inicial de 5 linhas
  const columnCount = matrix[0]?.length || 0; // Segurança contra matriz vazia

  // Calcula o layout da grade com base no número de colunas
  const gridStyle = useMemo(() => ({
    gridTemplateColumns: `repeat(${columnCount}, minmax(0, ${window.innerWidth < 768 ? "50px" : "70px"}))`, // Ajuste para mobile
  }), [columnCount]);

  // Renderiza as células da matriz com limite de linhas
  const renderCells = useMemo(() => {
    const visibleMatrix = matrix.slice(0, visibleRows);
    return visibleMatrix.flatMap((row, i) =>
      row.map((val, j) => (
        <React.Fragment key={`matrix-${i}-${j}`}>
          <div
            className="bg-white border border-gray-300 p-2 rounded text-center font-mono text-sm sm:text-base hover:bg-gray-50 transition-colors"
            aria-label={`Valor da matriz na linha ${i + 1}, coluna ${j + 1}: ${val}`}
          >
            {val}
          </div>
        </React.Fragment>
      ))
    );
  }, [matrix, visibleRows]);

  // Botão para carregar mais linhas
  const loadMore = () => setVisibleRows((prev) => Math.min(prev + 5, matrix.length));

  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-sm my-2">
      <div className="grid gap-1 sm:gap-2" style={gridStyle}>
        {renderCells}
      </div>
      {visibleRows < matrix.length && (
        <button
          onClick={loadMore}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          aria-label="Carregar mais linhas da matriz"
        >
          Carregar Mais
        </button>
      )}
    </div>
  );
});

MatrixDisplay.displayName = "MatrixDisplay";

export default MatrixDisplay;