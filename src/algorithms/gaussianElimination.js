import { formatMatrix, formatValue, isRowEchelonForm } from "../utils/matrixCalculations";

export const calculateGaussianElimination = (parsedA, rowsA, math) => {
  const { matrix, number, divide, multiply, subtract } = math;
  const m = matrix(parsedA);
  const steps = [];
  const rowCount = rowsA;
  const colCount = parsedA[0]?.length || 0;
  const pivotLimit = Math.min(rowCount, colCount);

  if (isRowEchelonForm(parsedA)) {
    steps.push({
      title: "Matriz Original",
      description: "A matriz já se encontra na forma escalonada.",
      matrix: formatMatrix(parsedA),
      highlight: {
        cells: [[0, 0]],
      },
    });
    return { result: formatMatrix(parsedA), steps };
  }

  steps.push({
    title: "Matriz Inicial",
    description: "Configuração original da matriz.",
    matrix: formatMatrix(m),
    highlight: {
      pivotCells: [[0, 0]],
    },
  });

  for (let i = 0; i < pivotLimit; i++) {
    let pivotRow = i;
    let pivot = m.get([pivotRow, i]);
    let pivotNum = number(pivot);

    if (Math.abs(pivotNum) < 1e-10) {
      for (let candidate = i + 1; candidate < rowCount; candidate++) {
        const candidatePivot = m.get([candidate, i]);
        if (Math.abs(number(candidatePivot)) > 1e-10) {
          pivotRow = candidate;
          pivot = candidatePivot;
          pivotNum = number(candidatePivot);
          break;
        }
      }
    }

    if (Math.abs(pivotNum) < 1e-10) {
      continue;
    }

    if (pivotRow !== i) {
      for (let j = 0; j < colCount; j++) {
        const current = m.get([i, j]);
        m.set([i, j], m.get([pivotRow, j]));
        m.set([pivotRow, j], current);
      }

      steps.push({
        title: "Troca de Linhas",
        description: `L${i + 1} ↔ L${pivotRow + 1} para evitar pivô zero.`,
        matrix: formatMatrix(m),
        highlight: {
          rows: [i, pivotRow],
          pivotCells: [[i, i]],
        },
      });

      pivot = m.get([i, i]);
      pivotNum = number(pivot);
    }

    if (Math.abs(pivotNum - 1) > 1e-10) {
      const factorStr = formatValue(pivot);
      for (let j = 0; j < colCount; j++) {
        m.set([i, j], divide(m.get([i, j]), pivot));
      }
      steps.push({
        title: `Pivô (Linha ${i + 1})`,
        description: `L${i + 1} → L${i + 1} ÷ (${factorStr})`,
        matrix: formatMatrix(m),
        highlight: {
          rows: [i],
          pivotCells: [[i, i]],
        },
      });
    }

    for (let k = i + 1; k < rowCount; k++) {
      const factor = m.get([k, i]);
      const factorNum = number(factor);

      if (Math.abs(factorNum) < 1e-10) continue;

      const factorStr = formatValue(factor);
      for (let j = 0; j < colCount; j++) {
        const sub = multiply(factor, m.get([i, j]));
        m.set([k, j], subtract(m.get([k, j]), sub));
      }

      steps.push({
        title: `Eliminação (Linha ${k + 1})`,
        description: `L${k + 1} → L${k + 1} - (${factorStr}) x L${i + 1}`,
        matrix: formatMatrix(m),
        highlight: {
          rows: [k],
          pivotCells: [[i, i]],
          resultCells: [[k, i]],
        },
      });
    }
  }

  return { result: formatMatrix(m), steps };
};
