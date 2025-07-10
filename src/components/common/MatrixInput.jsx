const MatrixInput = ({ matrix, setMatrix, label, rows, cols }) => {
  const handleInputChange = (row, col, value) => {
    // Regex que permite números (incluindo decimais e negativos).
    // Permite também um campo vazio para que o usuário possa apagar o valor.
    const numericRegex = /^-?[0-9]*\.?[0-9]*$/;

    if (numericRegex.test(value)) {
      const updated = matrix.map((r, i) =>
        i === row ? r.map((c, j) => (j === col ? value : c)) : r
      );
      setMatrix(updated);
    }
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-sm sm:text-base">{label}</h3>
      <div
        className="grid gap-1 justify-center"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 60px))` }}
      >
        {matrix.map((row, i) =>
          row.map((val, j) => (
            <input
              key={`${label}-${i}-${j}`}
              type="tel"
              inputMode="numeric"
              // O pattern ajuda na validação nativa do navegador
              pattern="-?[0-9]*\.?[0-9]*"
              value={val}
              onChange={(e) => handleInputChange(i, j, e.target.value)}
              className="border p-2 rounded w-full text-center text-sm"
              aria-label={`Elemento da ${label} na linha ${i + 1}, coluna ${j + 1}`}
              placeholder="0"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MatrixInput;