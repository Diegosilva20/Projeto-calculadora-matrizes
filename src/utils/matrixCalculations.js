// src/utils/matrixCalculations.js
import * as math from "mathjs";

export const createEmptyMatrix = (rows, cols) =>
  Array.from({ length: rows }, () => Array(cols).fill(""));

export const validateMatrix = (matrix) =>
  matrix.every((row) =>
    row.every((val) => {
      if (val === "") return true;
      const num = parseFloat(val);
      return !isNaN(num) && isFinite(num);
    })
  );

export const isRowEchelonForm = (matrix) => {
  let lastPivotCol = -1;
  for (let i = 0; i < matrix.length; i++) {
    let pivotCol = -1;
    for (let j = 0; j < matrix[i].length; j++) {
      if (Math.abs(matrix[i][j]) > 1e-10) {
        pivotCol = j;
        break;
      }
    }
    if (pivotCol === -1) continue;
    if (pivotCol <= lastPivotCol) return false;
    for (let k = i + 1; k < matrix.length; k++) {
      if (Math.abs(matrix[k][pivotCol]) > 1e-10) return false;
    }
    lastPivotCol = pivotCol;
  }
  return true;
};

export const toArray = (result) => {
  if (math.isMatrix(result)) return result.toArray();
  if (Array.isArray(result)) return result;
  throw new Error("Resultado não é uma matriz válida");
};

export const calculate = (matrixA, matrixB, scalar, operation, size, setResult, setError, setSteps) => {
  setError("");
  setSteps([]);

  if (!validateMatrix(matrixA) || !validateMatrix(matrixB)) {
    setError("Por favor, insira apenas números válidos nas matrizes.");
    return;
  }

  const parsedA = matrixA.map((row) => row.map((val) => (val === "" ? 0 : parseFloat(val))));
  const parsedB = matrixB.map((row) => row.map((val) => (val === "" ? 0 : parseFloat(val))));
  const rowsA = size.rows;
  const colsA = matrixA[0].length;

  try {
    const matrixAObj = math.matrix(parsedA);
    const matrixBObj = math.matrix(parsedB);

    if (operation === "soma") {
      if (rowsA !== matrixB.length || colsA !== matrixB[0].length) {
        setError("Erro: As matrizes devem ter o mesmo tamanho para soma.");
        return;
      }
      const summed = math.add(matrixAObj, matrixBObj);
      setResult(toArray(summed));
    } else if (operation === "subtracao") {
      if (rowsA !== matrixB.length || colsA !== matrixB[0].length) {
        setError("Erro: As matrizes devem ter o mesmo tamanho para subtração.");
        return;
      }
      const subtracted = math.subtract(matrixAObj, matrixBObj);
      setResult(toArray(subtracted));
    } else if (operation === "multiplicacao") {
      if (colsA !== matrixB.length) {
        setError("Erro: O número de colunas da Matriz A deve ser igual ao número de linhas da Matriz B para multiplicação.");
        return;
      }
      const multiplied = math.multiply(matrixAObj, matrixBObj);
      setResult(toArray(multiplied));
    } else if (operation === "determinanteA") {
      if (rowsA !== colsA) {
        setError("Erro: O determinante só pode ser calculado para matrizes quadradas.");
        return;
      }
      const det = math.det(matrixAObj);
      setResult([[det]]);
    } else if (operation === "inversa") {
      if (rowsA !== colsA) {
        setError("Erro: A inversa só pode ser calculada para matrizes quadradas.");
        return;
      }
      const det = math.det(matrixAObj);
      if (Math.abs(det) < 1e-10) {
        setError("A matriz não é invertível (determinante igual a zero).");
        setResult(null);
        return;
      }
      const inverse = math.inv(matrixAObj);
      setResult(toArray(inverse).map((row) => row.map((val) => Number(val.toFixed(2)))));
    } else if (operation === "transposicao") {
      const transposed = math.transpose(matrixAObj);
      setResult(toArray(transposed));
    } else if (operation === "escalar") {
      const scalarValue = parseFloat(scalar);
      if (isNaN(scalarValue) || !isFinite(scalarValue)) {
        setError("Por favor, insira um número válido para o escalar.");
        return;
      }
      const scaled = math.multiply(matrixAObj, scalarValue);
      setResult(toArray(scaled));
    } else if (operation === "gauss") {
      let m = math.matrix(parsedA);
      let steps = [];
      let n = rowsA;

      if (isRowEchelonForm(parsedA)) {
        steps.push({
          description: "A matriz já está na forma escalonada por linhas.",
          matrix: parsedA.map((row) => row.map((val) => Number(val.toFixed(2)))),
        });
        setResult(parsedA.map((row) => row.map((val) => Number(val.toFixed(2)))));
        setSteps(steps);
        return;
      }

      steps.push({
        description: "Matriz inicial",
        matrix: m.toArray().map((row) => row.map((val) => Number(val.toFixed(2)))),
      });

      for (let i = 0; i < n; i++) {
        let pivot = m.get([i, i]);
        if (Math.abs(pivot) < 1e-10) {
          setError("Matriz não pode ser reduzida (pivô zero ou muito pequeno).");
          return;
        }
        if (Math.abs(pivot - 1) > 1e-10) {
          steps.push({
            description: `Tornar o pivô [${i + 1},${i + 1}] igual a 1: Dividir a Linha ${i + 1} por ${pivot.toFixed(2)} (pivô).`,
            matrix: null,
          });
          for (let j = i; j < n; j++) {
            m.set([i, j], m.get([i, j]) / pivot);
          }
          steps.push({
            description: "Nova matriz",
            matrix: m.toArray().map((row) => row.map((val) => Number(val.toFixed(2)))),
          });
        }
        for (let k = i + 1; k < n; k++) {
          let factor = m.get([k, i]);
          if (Math.abs(factor) < 1e-10) continue;
          steps.push({
            description: `Zerar o elemento [${k + 1},${i + 1}]: Subtrair ${factor.toFixed(2)} × Linha ${i + 1} da Linha ${k + 1}.`,
            matrix: null,
          });
          for (let j = i; j < n; j++) {
            m.set([k, j], m.get([k, j]) - factor * m.get([i, j]));
          }
          steps.push({
            description: "Nova matriz",
            matrix: m.toArray().map((row) => row.map((val) => Number(val.toFixed(2)))),
          });
        }
      }
      const resultArray = m.toArray().map((row) => row.map((val) => Number(val.toFixed(2))));
      setResult(resultArray);
      setSteps(steps);
    }
  } catch (e) {
    setError(`Erro: ${e.message || "Verifique as entradas e tente novamente."}`);
  }
};