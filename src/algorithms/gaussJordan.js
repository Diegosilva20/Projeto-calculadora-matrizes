import { matrix, number, divide, multiply, subtract } from "mathjs";
import { formatMatrix, formatValue, isRowEchelonForm } from "../utils/matrixCalculations";

export const calculateGaussJordan = (parsedA, rowsA) => {
  let m = matrix(parsedA);
  let steps = [];
  let n = rowsA;

  if (isRowEchelonForm(parsedA)) {
    steps.push({
      title: "Matriz Original",
      description: "A matriz já se encontra na forma escalonada.",
      matrix: formatMatrix(parsedA),
    });
    return { result: formatMatrix(parsedA), steps };
  }

  steps.push({
    title: "Matriz Inicial",
    description: "Configuração original da matriz.",
    matrix: formatMatrix(m),
  });

  for (let i = 0; i < n; i++) {
    let pivot = m.get([i, i]);
    let pivotNum = number(pivot);

    if (Math.abs(pivotNum) < 1e-10) {
      throw new Error("A matriz possui um pivô zero e necessita de troca de linhas.");
    }

    if (Math.abs(pivotNum - 1) > 1e-10) {
      let factorStr = formatValue(pivot);
      for (let j = i; j < n; j++) {
        m.set([i, j], divide(m.get([i, j]), pivot));
      }
      steps.push({
        title: `Pivô (Linha ${i + 1})`,
        description: `L${i + 1} → L${i + 1} ÷ (${factorStr})`,
        matrix: formatMatrix(m),
      });
    }

    for (let k = i + 1; k < n; k++) {
      let factor = m.get([k, i]);
      let factorNum = number(factor);
      
      if (Math.abs(factorNum) < 1e-10) continue;

      let factorStr = formatValue(factor);
      for (let j = i; j < n; j++) {
        let sub = multiply(factor, m.get([i, j]));
        m.set([k, j], subtract(m.get([k, j]), sub));
      }
      
      steps.push({
        title: `Eliminação (Linha ${k + 1})`,
        description: `L${k + 1} → L${k + 1} - (${factorStr}) × L${i + 1}`,
        matrix: formatMatrix(m),
      });
    }
  }

  return { result: formatMatrix(m), steps };
};