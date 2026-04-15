// src/utils/matrixCalculations.js
import { matrix, add, subtract, multiply, det, inv, transpose, fraction, number } from "mathjs";
import { calculateGaussJordan } from "../algorithms/gaussJordan";

export const createEmptyMatrix = (rows, cols) =>
  Array.from({ length: rows }, () => Array(cols).fill(""));

export const validateMatrix = (mat) =>
  mat.every((row) =>
    row.every((val) => val === "" || (!isNaN(parseFloat(val)) && isFinite(parseFloat(val))))
  );

const parseMatrix = (mat) =>
  mat.map((row) => row.map((val) => (val === "" ? fraction(0) : fraction(val))));

// Exportadas para uso em algoritmos externos
export const formatValue = (val) => Number(number(val).toFixed(2));

export const toArray = (result) => {
  if (result && typeof result.toArray === 'function') return result.toArray();
  if (Array.isArray(result)) return result;
  throw new Error("O resultado não é uma matriz válida");
};

export const formatMatrix = (mat) => {
  const arr = toArray(mat);
  return arr.map(row => row.map(val => formatValue(val)));
};

export const isRowEchelonForm = (mat) => {
  let lastPivotCol = -1;
  for (let i = 0; i < mat.length; i++) {
    let pivotCol = -1;
    for (let j = 0; j < mat[i].length; j++) {
      if (Math.abs(number(mat[i][j])) > 1e-10) {
        pivotCol = j;
        break;
      }
    }
    if (pivotCol === -1) continue;
    if (pivotCol <= lastPivotCol) return false;
    for (let k = i + 1; k < mat.length; k++) {
      if (Math.abs(number(mat[k][pivotCol])) > 1e-10) return false;
    }
    lastPivotCol = pivotCol;
  }
  return true;
};

const operationsMap = {
  soma: (a, b) => {
    if (a.size()[0] !== b.size()[0] || a.size()[1] !== b.size()[1])
      throw new Error("As matrizes devem ter o mesmo tamanho para a soma.");
    return add(a, b);
  },
  subtracao: (a, b) => {
    if (a.size()[0] !== b.size()[0] || a.size()[1] !== b.size()[1])
      throw new Error("As matrizes devem ter o mesmo tamanho para a subtração.");
    return subtract(a, b);
  },
  multiplicacao: (a, b) => {
    if (a.size()[1] !== b.size()[0])
      throw new Error("O número de colunas da Matriz A deve ser igual ao número de linhas da Matriz B.");
    return multiply(a, b);
  },
  determinanteA: (a) => {
    if (a.size()[0] !== a.size()[1])
      throw new Error("O determinante só pode ser calculado para matrizes quadradas.");
    return [[det(a)]];
  },
  inversa: (a) => {
    if (a.size()[0] !== a.size()[1])
      throw new Error("A inversa só pode ser calculada para matrizes quadradas.");
    if (Math.abs(number(det(a))) < 1e-10)
      throw new Error("A matriz não é invertível (determinante igual a zero).");
    return inv(a);
  },
  transposicao: (a) => transpose(a),
  escalar: (a, _, scalar) => {
    const scalarValue = parseFloat(scalar);
    if (isNaN(scalarValue) || !isFinite(scalarValue))
      throw new Error("Insira um número válido para o escalar.");
    return multiply(a, fraction(scalarValue));
  },
};

export const calculate = (matrixA, matrixB, scalar, operation, size, setResult, setError, setSteps) => {
  setError("");
  setSteps([]);

  if (!validateMatrix(matrixA) || (matrixB && !validateMatrix(matrixB))) {
    setError("Por favor, insira apenas números válidos nas matrizes.");
    return;
  }

  const parsedA = parseMatrix(matrixA);
  const parsedB = matrixB ? parseMatrix(matrixB) : null;
  const rowsA = size.rows;

  try {
    const matrixAObj = matrix(parsedA);
    const matrixBObj = parsedB ? matrix(parsedB) : null;

    if (operation === "gauss") {
      const { result: gaussResult, steps: gaussSteps } = calculateGaussJordan(parsedA, rowsA);
      setResult(gaussResult);
      setSteps(gaussSteps);
      return;
    }

    if (operationsMap[operation]) {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      setResult(formatMatrix(rawResult));
    } else {
      setError("Operação desconhecida.");
    }
  } catch (e) {
    setError(`Erro: ${e.message || "Verifique os valores de entrada e tente novamente."}`);
  }
};