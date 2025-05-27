// src/components/ui/ResultDisplay.jsx
const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2 text-sm sm:text-base">Resultado</h3>
      <div
        className="grid gap-1 mx-auto max-w-[90vw] justify-center"
        style={{
          gridTemplateColumns: `repeat(${result[0].length}, minmax(0, 60px))`,
        }}
      >
        {result.map((row, i) =>
          row.map((val, j) => (
            <div
              key={`result-${i}-${j}`}
              className="bg-gray-200 p-2 rounded text-center text-sm"
            >
              {Number(val).toFixed(2)}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResultDisplay;