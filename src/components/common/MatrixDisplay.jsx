import React, { useMemo } from "react";

const MatrixDisplay = React.memo(({ matrix }) => {
  // Extrair o número de colunas como uma variável separada
  const columnCount = matrix[0].length;

  // Calcula o layout da grade apenas quando columnCount mudar
  const gridStyle = useMemo(() => ({
    gridTemplateColumns: `repeat(${columnCount}, minmax(0, 70px))`,
  }), [columnCount]);

  // Renderiza as células da matriz apenas quando matrix mudar
  const renderCells = useMemo(() => {
    return matrix.flatMap((row, i) =>
      row.map((val, j) => (
        <div
          key={`matrix-${i}-${j}`}
          className="bg-white border border-gray-300 p-3 rounded text-center font-mono text-base hover:bg-gray-50 transition-colors"
        >
          {val}
        </div>
      ))
    );
  }, [matrix]);

  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-sm my-2">
      <div className="grid gap-2" style={gridStyle}>
        {renderCells}
      </div>
    </div>
  );
});

MatrixDisplay.displayName = "MatrixDisplay";

export default MatrixDisplay;