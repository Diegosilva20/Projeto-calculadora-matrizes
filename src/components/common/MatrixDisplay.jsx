import React from "react";

const MatrixDisplay = ({ matrix }) => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-sm my-2">
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${matrix[0].length}, minmax(0, 70px))`,
        }}
      >
        {matrix.map((row, i) =>
          row.map((val, j) => (
            <div
              key={`matrix-${i}-${j}`}
              className="bg-white border border-gray-300 p-3 rounded text-center font-mono text-base hover:bg-gray-50 transition-colors"
            >
              {val}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MatrixDisplay;