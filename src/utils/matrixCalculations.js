// src/utils/matrixCalculations.js
import { calculateGaussianElimination } from "../algorithms/gaussianElimination";
import { defaultLanguage, translate } from "../i18n";

const defaultT = (key, params) => translate(defaultLanguage, key, params);

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

export const formatValue = (val) => Number(number(val).toFixed(2));

export const toArray = (result, t = defaultT) => {
  if (result && typeof result.toArray === "function") return result.toArray();
  if (Array.isArray(result)) return result;
  throw new Error(t("calculation.errors.invalidResult"));
};

export const formatMatrix = (mat) => {
  const arr = toArray(mat);
  return arr.map((row) => row.map((val) => formatValue(val)));
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

const buildMultiplicationSteps = (parsedA, parsedB, formattedResult, t) => {
  const rowsA = parsedA.length;
  const colsA = parsedA[0]?.length || 0;
  const rowsB = parsedB.length;
  const colsB = parsedB[0]?.length || 0;
  const partialResult = Array.from({ length: rowsA }, () =>
    Array(colsB).fill(""),
  );

  const steps = [
    {
      title: t("calculation.steps.dimensionCheckTitle"),
      description: t("calculation.steps.dimensionCheckDescription", {
        rowsA,
        colsA,
        rowsB,
        colsB,
      }),
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
        title: t("calculation.steps.elementTitle", { row: i + 1, col: j + 1 }),
        description: t("calculation.steps.multiplicationElementDescription", {
          row: i + 1,
          col: j + 1,
          terms: terms.join(" + "),
          products: products.join(" + "),
          result: formattedResult[i][j],
        }),
        matrix: cloneMatrix(partialResult),
        highlight: {
          resultCells: [[i, j]],
        },
      });
    }
  }

  return steps;
};

const buildTransposeSteps = (parsedA, formattedResult, t) => {
  const rowsA = parsedA.length;
  const colsA = parsedA[0]?.length || 0;
  const partialResult = Array.from({ length: colsA }, () =>
    Array(rowsA).fill(""),
  );

  const steps = [
    {
      title: t("calculation.steps.transposeDimensionTitle"),
      description: t("calculation.steps.transposeDimensionDescription", {
        rowsA,
        colsA,
      }),
      matrix: formatMatrix(parsedA),
    },
  ];

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsA; j++) {
      partialResult[j][i] = formattedResult[j][i];
      steps.push({
        title: t("calculation.steps.transposeElementTitle", {
          row: i + 1,
          col: j + 1,
        }),
        description: t("calculation.steps.transposeElementDescription", {
          value: formatValue(parsedA[i][j]),
          row: i + 1,
          col: j + 1,
          targetRow: j + 1,
          targetCol: i + 1,
        }),
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
  t,
) => {
  const rows = parsedA.length;
  const cols = parsedA[0]?.length || 0;
  const partialResult = Array.from({ length: rows }, () => Array(cols).fill(""));

  const steps = [
    {
      title: t("calculation.steps.elementWiseTitle"),
      description: t("calculation.steps.elementWiseDescription", {
        operationName,
      }),
    },
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const aValue = formatValue(parsedA[i][j]);
      const bValue = formatValue(parsedB[i][j]);
      partialResult[i][j] = formattedResult[i][j];

      steps.push({
        title: t("calculation.steps.elementTitle", { row: i + 1, col: j + 1 }),
        description: t("calculation.steps.elementWiseElementDescription", {
          row: i + 1,
          col: j + 1,
          aValue,
          bValue,
          symbol,
          result: formattedResult[i][j],
        }),
        matrix: cloneMatrix(partialResult),
        highlight: {
          resultCells: [[i, j]],
        },
      });
    }
  }

  return steps;
};

const buildScalarSteps = (parsedA, scalar, formattedResult, t) => {
  const rows = parsedA.length;
  const cols = parsedA[0]?.length || 0;
  const scalarValue = Number(parseFloat(scalar).toFixed(2));
  const partialResult = Array.from({ length: rows }, () => Array(cols).fill(""));

  const steps = [
    {
      title: t("calculation.steps.scalarTitle"),
      description: t("calculation.steps.scalarDescription", {
        scalar: scalarValue,
      }),
    },
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const aValue = formatValue(parsedA[i][j]);
      partialResult[i][j] = formattedResult[i][j];

      steps.push({
        title: t("calculation.steps.elementTitle", { row: i + 1, col: j + 1 }),
        description: t("calculation.steps.scalarElementDescription", {
          row: i + 1,
          col: j + 1,
          scalar: scalarValue,
          value: aValue,
          result: formattedResult[i][j],
        }),
        matrix: cloneMatrix(partialResult),
        highlight: {
          resultCells: [[i, j]],
        },
      });
    }
  }

  return steps;
};

const buildDeterminantSteps = (parsedA, formattedResult, t) => {
  const n = parsedA.length;
  const value = formattedResult[0][0];
  const a = parsedA.map((row) => row.map((cell) => formatValue(cell)));

  if (n === 1) {
    return [
      {
        title: t("calculation.steps.matrix1x1Title"),
        description: t("calculation.steps.matrix1x1Description", { value }),
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
        title: t("calculation.steps.formula2x2Title"),
        description: t("calculation.steps.formula2x2Description"),
        matrix: a,
        highlight: {
          cells: diagonalCells(2),
          secondaryCells: secondaryDiagonalCells(2),
        },
      },
      {
        title: t("calculation.steps.mainDiagonalTitle"),
        description: `${a[0][0]} x ${a[1][1]} = ${mainDiagonal}.`,
        matrix: a,
        highlight: {
          cells: diagonalCells(2),
        },
      },
      {
        title: t("calculation.steps.secondaryDiagonalTitle"),
        description: `${a[0][1]} x ${a[1][0]} = ${secondaryDiagonal}.`,
        matrix: a,
        highlight: {
          secondaryCells: secondaryDiagonalCells(2),
        },
      },
      {
        title: t("calculation.steps.determinantResultTitle"),
        description: t("calculation.steps.determinantResultDescription", {
          mainDiagonal,
          secondaryDiagonal,
          value,
        }),
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
        title: t("calculation.steps.sarrusTitle"),
        description: t("calculation.steps.sarrusDescription"),
        matrix: sarrusMatrix,
      },
      {
        title: t("calculation.steps.mainDiagonalsTitle"),
        description: `${downProducts.join(" + ")} = ${downSum}.`,
        matrix: sarrusMatrix,
        highlight: {
          cells: sarrusMainDiagonalCells,
        },
      },
      {
        title: t("calculation.steps.secondaryDiagonalsTitle"),
        description: `${upProducts.join(" + ")} = ${upSum}.`,
        matrix: sarrusMatrix,
        highlight: {
          secondaryCells: sarrusSecondaryDiagonalCells,
        },
      },
      {
        title: t("calculation.steps.determinantResultTitle"),
        description: t("calculation.steps.determinantResultDescription", {
          mainDiagonal: downSum,
          secondaryDiagonal: upSum,
          value,
        }),
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
      title: t("calculation.steps.determinantInitialTitle"),
      description: t("calculation.steps.determinantInitialDescription", {
        size: n,
      }),
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
        title: t("calculation.steps.noPivotColumnTitle"),
        description: t("calculation.steps.noPivotColumnDescription", {
          col: pivotIndex + 1,
        }),
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
        title: t("calculation.steps.swapRowsTitle"),
        description: t("calculation.steps.determinantSwapRowsDescription", {
          rowA: pivotIndex + 1,
          rowB: pivotRow + 1,
        }),
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
        title: t("calculation.steps.zeroCellTitle", {
          row: row + 1,
          col: pivotIndex + 1,
        }),
        description: t("calculation.steps.zeroCellDescription", {
          row: row + 1,
          factor: formatValue(factor),
          pivotRow: pivotIndex + 1,
        }),
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
    title: t("calculation.steps.multiplyDiagonalTitle"),
    description: t("calculation.steps.multiplyDiagonalDescription", {
      sign: signText,
      diagonal: diagonalText,
      product: formatValue(diagonalProduct),
      value,
    }),
    matrix: formatWorkingMatrix(working),
    highlight: {
      cells: diagonalCells(n),
    },
  });

  return steps;
};

const buildInverseSteps = (parsedA, formattedResult, t) => {
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
        title: t("calculation.steps.verifyDeterminantTitle"),
        description: t("calculation.steps.inverseVerifyDescription", {
          determinant,
        }),
        matrix: a,
        highlight: {
          cells: diagonalCells(n),
        },
      },
      {
        title: t("calculation.steps.augmentedTitle"),
        description: t("calculation.steps.augmentedDescription"),
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
          title: t("calculation.steps.pivotNotFoundTitle"),
          description: t("calculation.steps.pivotNotFoundDescription"),
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
          title: t("calculation.steps.swapRowsTitle"),
          description: t("calculation.steps.inverseSwapRowsDescription", {
            rowA: pivotIndex + 1,
            rowB: pivotRow + 1,
            positionRow: pivotIndex + 1,
            positionCol: pivotIndex + 1,
          }),
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
          title: t("calculation.steps.normalizePivotTitle", {
            pivot: pivotIndex + 1,
          }),
          description: t("calculation.steps.normalizePivotDescription", {
            row: pivotIndex + 1,
            value: formatValue(pivot),
          }),
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
          title: t("calculation.steps.zeroColumnTitle", {
            col: pivotIndex + 1,
          }),
          description: t("calculation.steps.zeroColumnDescription", {
            row: row + 1,
            factor: formatValue(factor),
            pivotRow: pivotIndex + 1,
          }),
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
      title: t("calculation.steps.readInverseTitle"),
      description: t("calculation.steps.readInverseDescription"),
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
      title: t("calculation.steps.verifyDeterminantTitle"),
      description: t("calculation.steps.inverse2x2VerifyDescription", {
        a: a[0][0],
        b: a[0][1],
        c: a[1][0],
        d: a[1][1],
        determinant,
      }),
      matrix: a,
      highlight: {
        cells: diagonalCells(2),
        secondaryCells: secondaryDiagonalCells(2),
      },
    },
    {
      title: t("calculation.steps.swapAndSignsTitle"),
      description: t("calculation.steps.swapAndSignsDescription"),
      matrix: adjusted,
      highlight: {
        resultCells: allCellCoordinates(2, 2),
      },
    },
    {
      title: t("calculation.steps.multiplyByDetTitle"),
      description: t("calculation.steps.multiplyByDetDescription", {
        determinant,
      }),
    },
    {
      title: t("calculation.steps.determinantResultTitle"),
      description: t("calculation.steps.inverseResultDescription"),
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
  soma: (a, b, _, t) => {
    if (a.size()[0] !== b.size()[0] || a.size()[1] !== b.size()[1])
      throw new Error(t("calculation.errors.sameSizeAdd"));
    return add(a, b);
  },
  subtracao: (a, b, _, t) => {
    if (a.size()[0] !== b.size()[0] || a.size()[1] !== b.size()[1])
      throw new Error(t("calculation.errors.sameSizeSubtract"));
    return subtract(a, b);
  },
  multiplicacao: (a, b, _, t) => {
    if (a.size()[1] !== b.size()[0])
      throw new Error(t("calculation.errors.multiplicationDimensions"));
    return multiply(a, b);
  },
  determinanteA: (a, _b, _scalar, t) => {
    if (a.size()[0] !== a.size()[1])
      throw new Error(t("calculation.errors.squareDeterminantShort"));
    return [[det(a)]];
  },
  inversa: (a, _b, _scalar, t) => {
    if (a.size()[0] !== a.size()[1])
      throw new Error(t("calculation.errors.squareInverseShort"));
    if (Math.abs(number(det(a))) < 1e-10)
      throw new Error(t("calculation.errors.singular"));
    return inv(a);
  },
  transposicao: (a) => transpose(a),
  escalar: (a, _, scalar, t) => {
    const scalarValue = parseFloat(scalar);
    if (isNaN(scalarValue) || !isFinite(scalarValue))
      throw new Error(t("calculation.errors.scalarInvalid"));
    return multiply(a, fraction(scalarValue));
  },
};

export const calculate = async (
  matrixA,
  matrixB,
  scalar,
  operation,
  size,
  setResult,
  setError,
  setSteps,
  t = defaultT,
) => {
  setError("");
  setSteps([]);

  if (!validateMatrix(matrixA) || (matrixB && !validateMatrix(matrixB))) {
    setError(t("calculation.errors.invalidMatrix"));
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
      const { result: gaussResult, steps: gaussSteps } = calculateGaussianElimination(parsedA, rowsA, math, t);
      setResult(gaussResult);
      setSteps(gaussSteps);
      return;
    }

    if (operation === "multiplicacao") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar, t);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildMultiplicationSteps(parsedA, parsedB, formattedResult, t));
      return;
    }

    if (operation === "soma") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar, t);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(
        buildElementWiseSteps(
          parsedA,
          parsedB,
          formattedResult,
          t("calculation.operationNames.addition"),
          "+",
          t,
        ),
      );
      return;
    }

    if (operation === "subtracao") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar, t);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(
        buildElementWiseSteps(
          parsedA,
          parsedB,
          formattedResult,
          t("calculation.operationNames.subtraction"),
          "-",
          t,
        ),
      );
      return;
    }

    if (operation === "escalar") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar, t);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildScalarSteps(parsedA, scalar, formattedResult, t));
      return;
    }

    if (operation === "determinanteA") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar, t);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildDeterminantSteps(parsedA, formattedResult, t));
      return;
    }

    if (operation === "inversa") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar, t);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildInverseSteps(parsedA, formattedResult, t));
      return;
    }

    if (operation === "transposicao") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar, t);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildTransposeSteps(parsedA, formattedResult, t));
      return;
    }

    if (operationsMap[operation]) {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar, t);
      setResult(formatMatrix(rawResult));
    } else {
      setError(t("calculation.errors.unknownOperation"));
    }
  } catch (e) {
    setError(
      t("calculation.errors.generic", {
        message: e.message || t("calculation.errors.fallback"),
      }),
    );
  }
};
