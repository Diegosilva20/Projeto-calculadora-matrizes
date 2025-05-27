const MatrixInput = ({ matrix, setMatrix, label, size }) => {
  const handleInputChange = (row, col, value) => {
    const updated = matrix.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? value : c))
    );
    setMatrix(updated);
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-sm sm:text-base">{label}</h3>
      <div
        className="grid gap-1 justify-center"
        style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 60px))` }}
      >
        {matrix.map((row, i) =>
          row.map((val, j) => (
            <input
              key={`${label}-${i}-${j}`}
              type="text"
              value={val}
              onChange={(e) => handleInputChange(i, j, e.target.value)}
              className="border p-2 rounded w-full text-center text-sm"
              aria-label={`Elemento da ${label} na linha ${i + 1}, coluna ${
                j + 1
              }`}
              placeholder="0"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MatrixInput;