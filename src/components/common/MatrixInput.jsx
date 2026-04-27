import React from "react";

const MatrixInput = ({ matrix, setMatrix, label, rows, cols }) => {
  const handleInputChange = (row, col, value) => {
    // Permite números, negativos, decimais ou campo vazio
    const numericRegex = /^-?[0-9]*\.?[0-9]*$/;

    if (numericRegex.test(value)) {
      const updated = matrix.map((r, i) =>
        i === row ? r.map((c, j) => (j === col ? value : c)) : r
      );
      setMatrix(updated);
    }
  };

  // SUPERPODER 1: Colagem Inteligente (Excel, Google Sheets, Blocos de notas)
  const handlePaste = (e, startRow, startCol) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text");

    // Separa as linhas da área de transferência (enter)
    const pastedRows = pasteData.split(/\r?\n/);
    
    // Fazemos uma cópia profunda da matriz atual
    let updatedMatrix = matrix.map(row => [...row]); 

    for (let i = 0; i < pastedRows.length; i++) {
      const targetRow = startRow + i;
      if (targetRow >= rows) break; // Ignora se passar do limite de linhas da matriz

      // Separa os valores da linha por "Tab" (Excel), vírgula ou ponto-e-vírgula
      const pastedCols = pastedRows[i].split(/[\t,;]/).filter(val => val.trim() !== "");

      for (let j = 0; j < pastedCols.length; j++) {
        const targetCol = startCol + j;
        if (targetCol >= cols) break; // Ignora se passar do limite de colunas

        const val = pastedCols[j].trim().replace(",", "."); // Aceita vírgula brasileira como decimal
        const numericRegex = /^-?[0-9]*\.?[0-9]*$/;

        if (numericRegex.test(val) || val === "") {
          updatedMatrix[targetRow][targetCol] = val;
        }
      }
    }
    setMatrix(updatedMatrix);
  };

  // SUPERPODER 2: Navegação com as Setinhas do Teclado
  const handleKeyDown = (e, row, col) => {
    let nextRow = row;
    let nextCol = col;

    switch (e.key) {
      case "ArrowUp":
        nextRow = Math.max(0, row - 1);
        break;
      case "ArrowDown":
        nextRow = Math.min(rows - 1, row + 1);
        break;
      case "ArrowLeft":
        // Só muda de célula se o cursor estiver no início do texto
        if (e.target.selectionStart === 0) {
          nextCol = Math.max(0, col - 1);
        } else {
          return;
        }
        break;
      case "ArrowRight":
        // Só muda de célula se o cursor estiver no final do texto
        if (e.target.selectionEnd === e.target.value.length) {
          nextCol = Math.min(cols - 1, col + 1);
        } else {
          return;
        }
        break;
      default:
        return; // Ignora outras teclas
    }

    // Se a posição mudou, movemos o foco do navegador
    if (nextRow !== row || nextCol !== col) {
      e.preventDefault();
      const nextInput = document.getElementById(`input-${label}-${nextRow}-${nextCol}`);
      if (nextInput) {
        nextInput.focus();
        // Seleciona o texto inteiro da nova célula para sobrescrever fácil
        nextInput.select(); 
      }
    }
  };

  return (
    <fieldset className="mb-4">
      <legend className="font-semibold mb-2 text-sm sm:text-base">
        {label}
      </legend>
      <div
        className="grid gap-1 justify-center"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 60px))` }}
      >
        {matrix.map((row, i) =>
          row.map((val, j) => (
            <input
              key={`${label}-${i}-${j}`}
              id={`input-${label}-${i}-${j}`} 
              type="text"
              inputMode="decimal"
              pattern="-?[0-9]*\.?[0-9]*"
              value={val}
              onChange={(e) => handleInputChange(i, j, e.target.value)}
              onPaste={(e) => handlePaste(e, i, j)}
              onKeyDown={(e) => handleKeyDown(e, i, j)}
              className="border p-2 rounded w-full text-center text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
              aria-label={`Elemento da ${label} na linha ${i + 1}, coluna ${j + 1}`}
              placeholder="0"
            />
          ))
        )}
      </div>
    </fieldset>
  );
};

export default MatrixInput;
