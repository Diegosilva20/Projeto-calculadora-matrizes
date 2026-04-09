// src/utils/matrixCalculations.js
import { matrix, add, subtract, multiply, det, inv, transpose, fraction, number, divide } from "mathjs";

export const createEmptyMatrix = (rows, cols) =>
  Array.from({ length: rows }, () => Array(cols).fill(""));

export const validateMatrix = (mat) =>
  mat.every((row) =>
    row.every((val) => val === "" || (!isNaN(parseFloat(val)) && isFinite(parseFloat(val))))
  );

// Converter todas as entradas para Frações Exatas para evitar falhas do JavaScript
const parseMatrix = (mat) =>
  mat.map((row) => row.map((val) => (val === "" ? fraction(0) : fraction(val))));

// Helper para converter Frações de volta para decimais limpos apenas na renderização
const formatValue = (val) => Number(number(val).toFixed(2));

export const toArray = (result) => {
  if (result && typeof result.toArray === 'function') return result.toArray();
  if (Array.isArray(result)) return result;
  throw new Error("O resultado não é uma matriz válida");
};

// Formata a matriz inteira de frações para números puros para a UI
const formatMatrix = (mat) => {
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

// Dicionário de Estratégias operando puramente com Frações
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
      let m = matrix(parsedA);
      let steps = [];
      let n = rowsA;

      if (isRowEchelonForm(parsedA)) {
        steps.push({
          description: "A matriz já está na forma escalonada por linhas.",
          mat: formatMatrix(parsedA),
        });
        setResult(formatMatrix(parsedA));
        setSteps(steps);
        return;
      }

      steps.push({
        description: "Matriz inicial",
        mat: formatMatrix(m),
      });

      for (let i = 0; i < n; i++) {
        let pivot = m.get([i, i]);
        let pivotNum = number(pivot);

        if (Math.abs(pivotNum) < 1e-10) {
          setError("A matriz não pode ser reduzida (pivô zero ou muito pequeno).");
          return;
        }

        if (Math.abs(pivotNum - 1) > 1e-10) {
          steps.push({
            description: `Tornar o pivô [${i + 1},${i + 1}] igual a 1: Dividir a Linha ${i + 1} por ${formatValue(pivot)}.`,
            mat: null,
          });
          for (let j = i; j < n; j++) {
            // Usa as funções protegidas do mathjs para calcular frações
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
      
      setResult(formatMatrix(m));
      setSteps(steps);
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