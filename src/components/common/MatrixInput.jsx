import React from "react";

const MatrixInput = ({ matrix, setMatrix, label, rows, cols }) => {
  const handleInputChange = (row, col, value) => {
    // Permite números, negativos, decimais, frações (ex: 1/2, -3/4) ou campo vazio
    const numericRegex = /^-?[0-9]*\.?[0-9]*(\/[0-9]*)?$/;

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
        const numericRegex = /^-?[0-9]*\.?[0-9]*(\/[0-9]*)?$/;

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

  const handleFillZeros = () => {
    const updated = matrix.map(r => r.map(() => "0"));
    setMatrix(updated);
  };

  const handleFillIdentity = () => {
    const updated = matrix.map((r, i) => r.map((_, j) => (i === j ? "1" : "0")));
    setMatrix(updated);
  };

  const handleFillRandom = () => {
    const updated = matrix.map(r => r.map(() => Math.floor(Math.random() * 19 - 9).toString())); // -9 to 9
    setMatrix(updated);
  };

  const isSquare = rows === cols;

  return (
    <fieldset className="mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
        <legend className="font-serif font-bold tracking-tight text-sm sm:text-base dark:text-slate-200">
          {label}
        </legend>
        
        <div className="flex gap-1.5 flex-wrap">
          {isSquare && (
            <button type="button" onClick={handleFillIdentity} className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
              Identidade
            </button>
          )}
          <button type="button" onClick={handleFillZeros} className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
            Zerar
          </button>
          <button type="button" onClick={handleFillRandom} className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
            Aleatória
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto pb-2 px-1">
        <div
          className="grid gap-1 justify-center w-max mx-auto min-w-full"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(45px, 60px))` }}
        >
          {matrix.map((row, i) =>
            row.map((val, j) => (
              <input
                key={`${label}-${i}-${j}`}
                id={`input-${label}-${i}-${j}`} 
                type="text"
                inputMode="text"
                pattern="-?[0-9]*\.?[0-9]*(\/[0-9]*)?"
                value={val}
                onChange={(e) => handleInputChange(i, j, e.target.value)}
                onPaste={(e) => handlePaste(e, i, j)}
                onKeyDown={(e) => handleKeyDown(e, i, j)}
                className="w-full font-mono rounded-xl border border-slate-200 shadow-sm dark:border-slate-700 p-2 text-center text-sm sm:text-base outline-none transition-colors focus:ring-2 focus:ring-accent dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500"
                aria-label={`Elemento da ${label} na linha ${i + 1}, coluna ${j + 1}`}
                placeholder="0"
              />
            ))
          )}
        </div>
      </div>
    </fieldset>
  );
};

export default MatrixInput;
