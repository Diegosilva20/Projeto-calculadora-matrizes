// src/utils/matrixCalculations.js
import { calculateGaussianElimination } from "../algorithms/gaussianElimination";

let matrix;
let add;
let subtract;
let multiply;
let divide;
let det;
let inv;
let transpose;
let fraction;
let number;
let mathModulePromise;

const loadMath = async () => {
  if (!mathModulePromise) {
    mathModulePromise = import("mathjs").then((math) => {
      ({ matrix, add, subtract, multiply, divide, det, inv, transpose, fraction, number } = math);
      return math;
    });
  }

  return mathModulePromise;
};

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

const isZero = (value) => Math.abs(number(value)) < 1e-10;

const isOne = (value) => Math.abs(number(value) - 1) < 1e-10;

const formatWorkingMatrix = (mat) =>
  mat.map((row) => row.map((cell) => formatValue(cell)));

const createIdentityMatrix = (size) =>
  Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => fraction(i === j ? 1 : 0)),
  );

const formatAugmentedMatrix = (mat, leftSize) =>
  mat.map((row) => [
    ...row.slice(0, leftSize).map((cell) => formatValue(cell)),
    "|",
    ...row.slice(leftSize).map((cell) => formatValue(cell)),
  ]);

const allCellCoordinates = (rows, cols) =>
  Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => [row, col]),
  ).flat();

const diagonalCells = (size) =>
  Array.from({ length: size }, (_, index) => [index, index]);

const secondaryDiagonalCells = (size) =>
  Array.from({ length: size }, (_, index) => [index, size - 1 - index]);

const buildSarrusDisplayMatrix = (formattedMatrix) =>
  formattedMatrix.map((row) => [...row, row[0], row[1]]);

const sarrusMainDiagonalCells = [
  [0, 0],
  [1, 1],
  [2, 2],
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 2],
  [1, 3],
  [2, 4],
];

const sarrusSecondaryDiagonalCells = [
  [2, 0],
  [1, 1],
  [0, 2],
  [2, 1],
  [1, 2],
  [0, 3],
  [2, 2],
  [1, 3],
  [0, 4],
];

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
        highlight: {
          resultCells: [[i, j]],
        },
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
        highlight: {
          resultCells: [[j, i]],
        },
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
        highlight: {
          resultCells: [[i, j]],
        },
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
        highlight: {
          resultCells: [[i, j]],
        },
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
        highlight: {
          resultCells: [[0, 0]],
        },
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
        highlight: {
          cells: diagonalCells(2),
          secondaryCells: secondaryDiagonalCells(2),
        },
      },
      {
        title: "Diagonal principal",
        description: `${a[0][0]} x ${a[1][1]} = ${mainDiagonal}.`,
        matrix: a,
        highlight: {
          cells: diagonalCells(2),
        },
      },
      {
        title: "Diagonal secundária",
        description: `${a[0][1]} x ${a[1][0]} = ${secondaryDiagonal}.`,
        matrix: a,
        highlight: {
          secondaryCells: secondaryDiagonalCells(2),
        },
      },
      {
        title: "Resultado",
        description: `det(A) = ${mainDiagonal} - (${secondaryDiagonal}) = ${value}.`,
        matrix: [[value]],
        highlight: {
          resultCells: [[0, 0]],
        },
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
    const sarrusMatrix = buildSarrusDisplayMatrix(a);

    return [
      {
        title: "Regra de Sarrus",
        description: "Para matriz 3x3, somamos as diagonais que descem e subtraímos as diagonais que sobem.",
        matrix: sarrusMatrix,
      },
      {
        title: "Diagonais principais",
        description: `${downProducts.join(" + ")} = ${downSum}.`,
        matrix: sarrusMatrix,
        highlight: {
          cells: sarrusMainDiagonalCells,
        },
      },
      {
        title: "Diagonais secundárias",
        description: `${upProducts.join(" + ")} = ${upSum}.`,
        matrix: sarrusMatrix,
        highlight: {
          secondaryCells: sarrusSecondaryDiagonalCells,
        },
      },
      {
        title: "Resultado",
        description: `det(A) = ${downSum} - (${upSum}) = ${value}.`,
        matrix: [[value]],
        highlight: {
          resultCells: [[0, 0]],
        },
      },
    ];
  }

  const working = parsedA.map((row) => [...row]);
  const steps = [
    {
      title: "Matriz inicial",
      description: `Para calcular det(A) em uma matriz ${n}x${n}, transformamos A em matriz triangular superior. Operações do tipo Lk -> Lk - m x Li não mudam o determinante.`,
      matrix: formatWorkingMatrix(working),
      highlight: {
        pivotCells: [[0, 0]],
      },
    },
  ];
  let sign = 1;

  for (let pivotIndex = 0; pivotIndex < n - 1; pivotIndex++) {
    let pivotRow = pivotIndex;

    while (pivotRow < n && isZero(working[pivotRow][pivotIndex])) {
      pivotRow += 1;
    }

    if (pivotRow === n) {
      steps.push({
        title: "Coluna sem pivô",
        description: `Não há pivô não nulo na coluna ${pivotIndex + 1}. A matriz fica com uma diagonal nula, então det(A) = 0.`,
        matrix: formatWorkingMatrix(working),
        highlight: {
          cols: [pivotIndex],
        },
      });
      break;
    }

    if (pivotRow !== pivotIndex) {
      [working[pivotIndex], working[pivotRow]] = [
        working[pivotRow],
        working[pivotIndex],
      ];
      sign *= -1;

      steps.push({
        title: "Troca de linhas",
        description: `Trocamos L${pivotIndex + 1} com L${pivotRow + 1}. Cada troca de linhas muda o sinal do determinante.`,
        matrix: formatWorkingMatrix(working),
        highlight: {
          rows: [pivotIndex, pivotRow],
          pivotCells: [[pivotIndex, pivotIndex]],
        },
      });
    }

    const pivot = working[pivotIndex][pivotIndex];

    for (let row = pivotIndex + 1; row < n; row++) {
      const factor = divide(working[row][pivotIndex], pivot);

      if (isZero(factor)) continue;

      for (let col = pivotIndex; col < n; col++) {
        const updatedValue = subtract(
          working[row][col],
          multiply(factor, working[pivotIndex][col]),
        );
        working[row][col] = isZero(updatedValue) ? fraction(0) : updatedValue;
      }

      steps.push({
        title: `Zerar A${row + 1}${pivotIndex + 1}`,
        description: `Usamos L${row + 1} -> L${row + 1} - (${formatValue(factor)}) x L${pivotIndex + 1}. Essa operação cria zero abaixo do pivô e mantém o determinante.`,
        matrix: formatWorkingMatrix(working),
        highlight: {
          rows: [row],
          pivotCells: [[pivotIndex, pivotIndex]],
          resultCells: [[row, pivotIndex]],
        },
      });
    }
  }

  const diagonalValues = working.map((row, i) => row[i]);
  const diagonalProduct = diagonalValues.reduce(
    (acc, item) => multiply(acc, item),
    fraction(sign),
  );
  const diagonalText = diagonalValues.map((item) => formatValue(item)).join(" x ");
  const signText = sign === -1 ? "-1 x " : "";

  steps.push({
    title: "Multiplicar a diagonal",
    description: `Como a matriz está triangular, det(A) = ${signText}${diagonalText} = ${formatValue(diagonalProduct)}. Resultado final: det(A) = ${value}.`,
    matrix: formatWorkingMatrix(working),
    highlight: {
      cells: diagonalCells(n),
    },
  });

  return steps;
};

const buildInverseSteps = (parsedA, formattedResult) => {
  const n = parsedA.length;
  const determinant = formatValue(det(matrix(parsedA)));
  const a = parsedA.map((row) => row.map((cell) => formatValue(cell)));

  if (n !== 2) {
    const identity = createIdentityMatrix(n);
    const augmented = parsedA.map((row, i) => [
      ...row,
      ...identity[i],
    ]);
    const steps = [
      {
        title: "Verificar determinante",
        description: `A matriz é quadrada e det(A) = ${determinant}. Como o determinante é diferente de zero, a inversa existe.`,
        matrix: a,
        highlight: {
          cells: diagonalCells(n),
        },
      },
      {
        title: "Montar [A | I]",
        description: "Colocamos a matriz A à esquerda e a matriz identidade à direita. O objetivo é transformar o lado esquerdo em identidade.",
        matrix: formatAugmentedMatrix(augmented, n),
        highlight: {
          resultCells: allCellCoordinates(n, n).map(([row, col]) => [
            row,
            col + n + 1,
          ]),
        },
      },
    ];

    for (let pivotIndex = 0; pivotIndex < n; pivotIndex++) {
      let pivotRow = pivotIndex;

      while (pivotRow < n && isZero(augmented[pivotRow][pivotIndex])) {
        pivotRow += 1;
      }

      if (pivotRow === n) {
        steps.push({
          title: "Pivô não encontrado",
          description: "Não foi possível encontrar um pivô não nulo nesta coluna. Confira se a matriz é invertível.",
          matrix: formatAugmentedMatrix(augmented, n),
          highlight: {
            cols: [pivotIndex],
          },
        });
        return steps;
      }

      if (pivotRow !== pivotIndex) {
        [augmented[pivotIndex], augmented[pivotRow]] = [
          augmented[pivotRow],
          augmented[pivotIndex],
        ];

        steps.push({
          title: "Troca de linhas",
          description: `Trocamos L${pivotIndex + 1} com L${pivotRow + 1} para colocar um pivô não nulo na posição (${pivotIndex + 1}, ${pivotIndex + 1}).`,
          matrix: formatAugmentedMatrix(augmented, n),
          highlight: {
            rows: [pivotIndex, pivotRow],
            pivotCells: [[pivotIndex, pivotIndex]],
          },
        });
      }

      const pivot = augmented[pivotIndex][pivotIndex];

      if (!isOne(pivot)) {
        for (let col = 0; col < 2 * n; col++) {
          augmented[pivotIndex][col] = divide(augmented[pivotIndex][col], pivot);
        }

        steps.push({
          title: `Normalizar pivô ${pivotIndex + 1}`,
          description: `Dividimos L${pivotIndex + 1} por ${formatValue(pivot)} para transformar o pivô em 1.`,
          matrix: formatAugmentedMatrix(augmented, n),
          highlight: {
            rows: [pivotIndex],
            pivotCells: [[pivotIndex, pivotIndex]],
          },
        });
      }

      for (let row = 0; row < n; row++) {
        if (row === pivotIndex) continue;

        const factor = augmented[row][pivotIndex];

        if (isZero(factor)) continue;

        for (let col = 0; col < 2 * n; col++) {
          const updatedValue = subtract(
            augmented[row][col],
            multiply(factor, augmented[pivotIndex][col]),
          );
          augmented[row][col] = isZero(updatedValue) ? fraction(0) : updatedValue;
        }

        steps.push({
          title: `Zerar coluna ${pivotIndex + 1}`,
          description: `Usamos L${row + 1} -> L${row + 1} - (${formatValue(factor)}) x L${pivotIndex + 1} para criar zero fora do pivô.`,
          matrix: formatAugmentedMatrix(augmented, n),
          highlight: {
            rows: [row],
            pivotCells: [[pivotIndex, pivotIndex]],
            resultCells: [[row, pivotIndex]],
          },
        });
      }
    }

    steps.push({
      title: "Ler a inversa",
      description: "Quando o lado esquerdo vira identidade, o lado direito é a matriz inversa A⁻¹.",
      matrix: formattedResult,
      highlight: {
        resultCells: allCellCoordinates(n, n),
      },
    });

    return steps;
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
      highlight: {
        cells: diagonalCells(2),
        secondaryCells: secondaryDiagonalCells(2),
      },
    },
    {
      title: "Trocar e inverter sinais",
      description: "Trocamos os elementos da diagonal principal e invertemos o sinal dos outros dois elementos.",
      matrix: adjusted,
      highlight: {
        resultCells: allCellCoordinates(2, 2),
      },
    },
    {
      title: "Multiplicar por 1/det(A)",
      description: `Agora multiplicamos todos os elementos por 1/${determinant}.`,
    },
    {
      title: "Resultado",
      description: "Esta é a matriz inversa A⁻¹.",
      matrix: formattedResult,
      highlight: {
        resultCells: allCellCoordinates(2, 2),
      },
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

export const calculate = async (matrixA, matrixB, scalar, operation, size, setResult, setError, setSteps) => {
  setError("");
  setSteps([]);

  if (!validateMatrix(matrixA) || (matrixB && !validateMatrix(matrixB))) {
    setError("Por favor, insira apenas números válidos nas matrizes.");
    return;
  }

  try {
    const math = await loadMath();
    const parsedA = parseMatrix(matrixA);
    const parsedB = matrixB ? parseMatrix(matrixB) : null;
    const rowsA = size.rows;
    const matrixAObj = matrix(parsedA);
    const matrixBObj = parsedB ? matrix(parsedB) : null;

    if (operation === "gauss") {
      const { result: gaussResult, steps: gaussSteps } = calculateGaussianElimination(parsedA, rowsA, math);
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
