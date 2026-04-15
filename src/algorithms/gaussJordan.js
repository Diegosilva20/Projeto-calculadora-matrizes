import { matrix, number, divide, multiply, subtract } from "mathjs";
import { formatMatrix, formatValue, isRowEchelonForm } from "../utils/matrixCalculations";

export const calculateGaussJordan = (parsedA, rowsA) => {
  let m = matrix(parsedA);
  let steps = [];
  let n = rowsA;

  // Usa as funções auxiliares que agora são exportadas do arquivo principal
  if (isRowEchelonForm(parsedA)) {
    steps.push({
      description: "A matriz já está na forma escalonada por linhas.",
      mat: formatMatrix(parsedA),
    });
    return { result: formatMatrix(parsedA), steps };
  }

  steps.push({
    description: "Matriz inicial",
    mat: formatMatrix(m),
  });

  for (let i = 0; i < n; i++) {
    let pivot = m.get([i, i]);
    let pivotNum = number(pivot);

    if (Math.abs(pivotNum) < 1e-10) {
      // Em vez de mexer na interface (setError), o algoritmo atira um erro matemático. O try/catch vai apanhá-lo.
      throw new Error("A matriz não pode ser reduzida (pivô zero ou muito pequeno).");
    }

    if (Math.abs(pivotNum - 1) > 1e-10) {
      steps.push({
        description: `Tornar o pivô [${i + 1},${i + 1}] igual a 1: Dividir a Linha ${i + 1} por ${formatValue(pivot)}.`,
        mat: null,
      });
      for (let j = i; j < n; j++) {
        m.set([i, j], divide(m.get([i, j]), pivot));
      }
      steps.push({
        description: "Nova matriz",
        mat: formatMatrix(m),
      });
    }

    for (let k = i + 1; k < n; k++) {
      let factor = m.get([k, i]);
      let factorNum = number(factor);
      
      if (Math.abs(factorNum) < 1e-10) continue;

      steps.push({
        description: `Zerar o elemento [${k + 1},${i + 1}]: Subtrair ${formatValue(factor)} × Linha ${i + 1} da Linha ${k + 1}.`,
        mat: null,
      });

      for (let j = i; j < n; j++) {
        let sub = multiply(factor, m.get([i, j]));
        m.set([k, j], subtract(m.get([k, j]), sub));
      }
      steps.push({
        description: "Nova matriz",
        mat: formatMatrix(m),
      });
    }
  }

  return { result: formatMatrix(m), steps };
};