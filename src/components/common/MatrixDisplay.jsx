// src/components/common/MatrixDisplay.jsx
import React from "react";

const MatrixDisplay = ({ matrix }) => {
  return (
    <div className="matrix-display">
      <div
        className="grid gap-1 mx-auto max-w-[90vw] justify-center"
        style={{
          gridTemplateColumns: `repeat(${matrix[0].length}, minmax(0, 60px))`,
        }}
      >
        {matrix.map((row, i) =>
          row.map((val, j) => (
            <div
              key={`matrix-${i}-${j}`}
              className="bg-gray-200 p-2 rounded text-center text-sm"
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