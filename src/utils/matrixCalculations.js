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

const cloneMatrix = (mat) => mat.map((row) => [...row]);

const buildMultiplicationSteps = (parsedA, parsedB, formattedResult) => {
  const rowsA = parsedA.length;
  const colsA = parsedA[0]?.length || 0;
  const rowsB = parsedB.length;
  const colsB = parsedB[0]?.length || 0;
  const partialResult = Array.from({ length: rowsA }, () =>
    Array(colsB).fill(""),
  );

  const steps = [
    {
      title: "Verificação das dimensões",
      description: `A tem ${rowsA}x${colsA} e B tem ${rowsB}x${colsB}. Como ${colsA} = ${rowsB}, a multiplicação existe e o resultado terá ${rowsA}x${colsB}.`,
    },
  ];

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      const terms = [];
      const products = [];

      for (let k = 0; k < colsA; k++) {
        const aValue = formatValue(parsedA[i][k]);
        const bValue = formatValue(parsedB[k][j]);
        const productValue = formatValue(multiply(parsedA[i][k], parsedB[k][j]));

        terms.push(`(${aValue} x ${bValue})`);
        products.push(productValue);
      }

      partialResult[i][j] = formattedResult[i][j];

      steps.push({
        title: `Elemento C${i + 1}${j + 1}`,
        description: `Linha ${i + 1} de A x coluna ${j + 1} de B: ${terms.join(" + ")} = ${products.join(" + ")} = ${formattedResult[i][j]}.`,
        matrix: cloneMatrix(partialResult),
      });
    }
  }

  return steps;
};

const buildTransposeSteps = (parsedA, formattedResult) => {
  const rowsA = parsedA.length;
  const colsA = parsedA[0]?.length || 0;
  const partialResult = Array.from({ length: colsA }, () =>
    Array(rowsA).fill(""),
  );

  const steps = [
    {
      title: "Troca de dimensões",
      description: `A matriz original tem ${rowsA}x${colsA}. A transposta terá ${colsA}x${rowsA}, porque linhas viram colunas.`,
      matrix: formatMatrix(parsedA),
    },
  ];

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsA; j++) {
      partialResult[j][i] = formattedResult[j][i];
      steps.push({
        title: `Elemento A${i + 1}${j + 1}`,
        description: `O valor ${formatValue(parsedA[i][j])}, que estava na posição (${i + 1}, ${j + 1}), vai para a posição (${j + 1}, ${i + 1}) na transposta.`,
        matrix: cloneMatrix(partialResult),
      });
    }
  }

  return steps;
};

const buildElementWiseSteps = (
  parsedA,
  parsedB,
  formattedResult,
  operationName,
  symbol,
) => {
  const rows = parsedA.length;
  const cols = parsedA[0]?.length || 0;
  const partialResult = Array.from({ length: rows }, () => Array(cols).fill(""));

  const steps = [
    {
      title: "Cálculo elemento a elemento",
      description: `Na ${operationName}, cada posição da resposta usa os valores da mesma posição em A e B.`,
    },
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const aValue = formatValue(parsedA[i][j]);
      const bValue = formatValue(parsedB[i][j]);
      partialResult[i][j] = formattedResult[i][j];

      steps.push({
        title: `Elemento C${i + 1}${j + 1}`,
        description: `Posição (${i + 1}, ${j + 1}): ${aValue} ${symbol} ${bValue} = ${formattedResult[i][j]}.`,
        matrix: cloneMatrix(partialResult),
      });
    }
  }

  return steps;
};

const buildScalarSteps = (parsedA, scalar, formattedResult) => {
  const rows = parsedA.length;
  const cols = parsedA[0]?.length || 0;
  const scalarValue = Number(parseFloat(scalar).toFixed(2));
  const partialResult = Array.from({ length: rows }, () => Array(cols).fill(""));

  const steps = [
    {
      title: "Multiplicação por escalar",
      description: `Cada elemento da matriz A será multiplicado pelo escalar ${scalarValue}.`,
    },
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const aValue = formatValue(parsedA[i][j]);
      partialResult[i][j] = formattedResult[i][j];

      steps.push({
        title: `Elemento C${i + 1}${j + 1}`,
        description: `Posição (${i + 1}, ${j + 1}): ${scalarValue} x ${aValue} = ${formattedResult[i][j]}.`,
        matrix: cloneMatrix(partialResult),
      });
    }
  }

  return steps;
};

const buildDeterminantSteps = (parsedA, formattedResult) => {
  const n = parsedA.length;
  const value = formattedResult[0][0];
  const a = parsedA.map((row) => row.map((cell) => formatValue(cell)));

  if (n === 1) {
    return [
      {
        title: "Matriz 1x1",
        description: `O determinante de uma matriz 1x1 é o próprio elemento: det(A) = ${value}.`,
        matrix: [[value]],
      },
    ];
  }

  if (n === 2) {
    const mainDiagonal = formatValue(multiply(parsedA[0][0], parsedA[1][1]));
    const secondaryDiagonal = formatValue(multiply(parsedA[0][1], parsedA[1][0]));

    return [
      {
        title: "Fórmula 2x2",
        description: "Para uma matriz 2x2, usamos det(A) = (a x d) - (b x c).",
        matrix: a,
      },
      {
        title: "Diagonal principal",
        description: `${a[0][0]} x ${a[1][1]} = ${mainDiagonal}.`,
      },
      {
        title: "Diagonal secundária",
        description: `${a[0][1]} x ${a[1][0]} = ${secondaryDiagonal}.`,
      },
      {
        title: "Resultado",
        description: `det(A) = ${mainDiagonal} - (${secondaryDiagonal}) = ${value}.`,
        matrix: [[value]],
      },
    ];
  }

  if (n === 3) {
    const downProducts = [
      multiply(multiply(parsedA[0][0], parsedA[1][1]), parsedA[2][2]),
      multiply(multiply(parsedA[0][1], parsedA[1][2]), parsedA[2][0]),
      multiply(multiply(parsedA[0][2], parsedA[1][0]), parsedA[2][1]),
    ].map(formatValue);
    const upProducts = [
      multiply(multiply(parsedA[0][2], parsedA[1][1]), parsedA[2][0]),
      multiply(multiply(parsedA[0][0], parsedA[1][2]), parsedA[2][1]),
      multiply(multiply(parsedA[0][1], parsedA[1][0]), parsedA[2][2]),
    ].map(formatValue);
    const downSum = downProducts.reduce((sum, item) => sum + item, 0);
    const upSum = upProducts.reduce((sum, item) => sum + item, 0);

    return [
      {
        title: "Regra de Sarrus",
        description: "Para matriz 3x3, somamos as diagonais que descem e subtraímos as diagonais que sobem.",
        matrix: a,
      },
      {
        title: "Diagonais principais",
        description: `${downProducts.join(" + ")} = ${downSum}.`,
      },
      {
        title: "Diagonais secundárias",
        description: `${upProducts.join(" + ")} = ${upSum}.`,
      },
      {
        title: "Resultado",
        description: `det(A) = ${downSum} - (${upSum}) = ${value}.`,
        matrix: [[value]],
      },
    ];
  }

  return [
    {
      title: "Matriz quadrada",
      description: `A matriz tem tamanho ${n}x${n}. Para matrizes maiores, o determinante é calculado por um algoritmo numérico equivalente aos métodos de eliminação.`,
      matrix: a,
    },
    {
      title: "Resultado",
      description: `det(A) = ${value}.`,
      matrix: [[value]],
    },
  ];
};

const buildInverseSteps = (parsedA, formattedResult) => {
  const n = parsedA.length;
  const determinant = formatValue(det(matrix(parsedA)));
  const a = parsedA.map((row) => row.map((cell) => formatValue(cell)));

  if (n !== 2) {
    return [
      {
        title: "Verificação",
        description: `A matriz é quadrada e det(A) = ${determinant}. Como o determinante é diferente de zero, a inversa existe.`,
        matrix: a,
      },
      {
        title: "Resultado",
        description: "Para matrizes maiores que 2x2, a inversa é calculada por operações de linha a partir da matriz aumentada [A | I].",
        matrix: formattedResult,
      },
    ];
  }

  const adjusted = [
    [a[1][1], -a[0][1]],
    [-a[1][0], a[0][0]],
  ];

  return [
    {
      title: "Verificar determinante",
      description: `det(A) = (${a[0][0]} x ${a[1][1]}) - (${a[0][1]} x ${a[1][0]}) = ${determinant}. Como é diferente de zero, a inversa existe.`,
      matrix: a,
    },
    {
      title: "Trocar e inverter sinais",
      description: "Trocamos os elementos da diagonal principal e invertemos o sinal dos outros dois elementos.",
      matrix: adjusted,
    },
    {
      title: "Multiplicar por 1/det(A)",
      description: `Agora multiplicamos todos os elementos por 1/${determinant}.`,
    },
    {
      title: "Resultado",
      description: "Esta é a matriz inversa A⁻¹.",
      matrix: formattedResult,
    },
  ];
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

    if (operation === "multiplicacao") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildMultiplicationSteps(parsedA, parsedB, formattedResult));
      return;
    }

    if (operation === "soma") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(
        buildElementWiseSteps(
          parsedA,
          parsedB,
          formattedResult,
          "soma de matrizes",
          "+",
        ),
      );
      return;
    }

    if (operation === "subtracao") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(
        buildElementWiseSteps(
          parsedA,
          parsedB,
          formattedResult,
          "subtração de matrizes",
          "-",
        ),
      );
      return;
    }

    if (operation === "escalar") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildScalarSteps(parsedA, scalar, formattedResult));
      return;
    }

    if (operation === "determinanteA") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildDeterminantSteps(parsedA, formattedResult));
      return;
    }

    if (operation === "inversa") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildInverseSteps(parsedA, formattedResult));
      return;
    }

    if (operation === "transposicao") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildTransposeSteps(parsedA, formattedResult));
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
