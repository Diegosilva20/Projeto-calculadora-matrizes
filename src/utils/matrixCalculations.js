// src/utils/matrixCalculations.js
import { calculateGaussianElimination } from "../algorithms/gaussianElimination";
import {
  toNumber,
  formatValue,
  toArray,
  formatMatrix,
  isRowEchelonForm,
} from "./matrixUtils";

// Re-export so external callers (tests, components) that import from here still work.
export { toNumber, formatValue, toArray, formatMatrix, isRowEchelonForm };

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

export const resizeMatrix = (mat, newRows, newCols) =>
  Array.from({ length: newRows }, (_, i) =>
    Array.from({ length: newCols }, (_, j) =>
      mat && mat[i] && mat[i][j] !== undefined ? mat[i][j] : ""
    )
  );

export const validateMatrix = (mat) =>
  mat.every((row) =>
    row.every((val) => {
      if (val === "" || val === null || val === undefined) return true;
      const str = String(val).trim();
      if (/^-?\d+(\.\d+)?(\/-?\d+(\.\d+)?)?$/.test(str)) {
        if (str.includes("/")) {
          const parts = str.split("/");
          return parseFloat(parts[1]) !== 0;
        }
        return true;
      }
      return !isNaN(parseFloat(str)) && isFinite(parseFloat(str));
    })
  );

const parseMatrix = (mat) =>
  mat.map((row) =>
    row.map((val) => {
      if (val === "" || val === null || val === undefined) return fraction(0);
      const str = String(val).trim();
      try {
        return fraction(str);
      } catch {
        const num = parseFloat(str);
        return isNaN(num) ? fraction(0) : fraction(num);
      }
    })
  );


const cloneMatrix = (mat) => mat.map((row) => [...row]);

const isZero = (value) => Math.abs(toNumber(value)) < 1e-10;

const isOne = (value) => Math.abs(toNumber(value) - 1) < 1e-10;

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
    const downRaw = [
      multiply(multiply(parsedA[0][0], parsedA[1][1]), parsedA[2][2]),
      multiply(multiply(parsedA[0][1], parsedA[1][2]), parsedA[2][0]),
      multiply(multiply(parsedA[0][2], parsedA[1][0]), parsedA[2][1]),
    ];
    const upRaw = [
      multiply(multiply(parsedA[0][2], parsedA[1][1]), parsedA[2][0]),
      multiply(multiply(parsedA[0][0], parsedA[1][2]), parsedA[2][1]),
      multiply(multiply(parsedA[0][1], parsedA[1][0]), parsedA[2][2]),
    ];
    const downProducts = downRaw.map(formatValue);
    const upProducts = upRaw.map(formatValue);
    const downSum = formatValue(downRaw.reduce((sum, item) => add(sum, item), fraction(0)));
    const upSum = formatValue(upRaw.reduce((sum, item) => add(sum, item), fraction(0)));
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

const buildTraceSteps = (parsedA, formattedResult) => {
  const n = parsedA.length;
  const traceValue = formattedResult[0][0];
  const diagonalValues = [];
  const diagonalCellsList = [];

  for (let i = 0; i < n; i++) {
    diagonalValues.push(formatValue(parsedA[i][i]));
    diagonalCellsList.push([i, i]);
  }

  return [
    {
      title: "Verificação de Matriz Quadrada",
      description: `A matriz tem dimensão ${n}x${n}. Por ser quadrada, a diagonal principal é bem definida.`,
      matrix: formatMatrix(parsedA),
      highlight: {
        cells: diagonalCellsList,
      },
    },
    {
      title: "Elementos da Diagonal Principal",
      description: `Os elementos da diagonal principal são: ${diagonalValues.map((v, i) => `A${i + 1}${i + 1} = ${v}`).join(", ")}.`,
      matrix: formatMatrix(parsedA),
      highlight: {
        cells: diagonalCellsList,
      },
    },
    {
      title: "Soma do Traço",
      description: `tr(A) = ${diagonalValues.join(" + ")} = ${traceValue}.`,
      matrix: [[traceValue]],
      highlight: {
        resultCells: [[0, 0]],
      },
    },
  ];
};

const buildPowerSteps = (parsedA, exponent, formattedResult) => {
  const n = parsedA.length;
  const expNum = parseInt(exponent);

  if (expNum === 0) {
    return [
      {
        title: "Expoente Zero (A⁰ = I)",
        description: `Qualquer matriz quadrada não nula elevada a 0 resulta na matriz identidade de mesma ordem (${n}x${n}).`,
        matrix: formattedResult,
        highlight: {
          cells: diagonalCells(n),
        },
      },
    ];
  }

  if (expNum === 1) {
    return [
      {
        title: "Expoente Um (A¹ = A)",
        description: "Qualquer matriz elevada a 1 é igual a ela mesma.",
        matrix: formattedResult,
        highlight: {
          resultCells: allCellCoordinates(n, n),
        },
      },
    ];
  }

  const steps = [
    {
      title: "Definição de Potência",
      description: `Calcularemos A^${expNum} através de multiplicações sucessivas de A por ela mesma.`,
      matrix: formatMatrix(parsedA),
    },
  ];

  let currentMat = matrix(parsedA);
  const baseMat = matrix(parsedA);

  for (let p = 2; p <= expNum; p++) {
    currentMat = multiply(currentMat, baseMat);
    const partialFormatted = formatMatrix(currentMat);
    steps.push({
      title: `Multiplicação: A^${p} = A^${p - 1} × A`,
      description: `Resultado parcial da potência A^${p}:`,
      matrix: partialFormatted,
      highlight: {
        resultCells: allCellCoordinates(n, n),
      },
    });
  }

  return steps;
};

const buildRankSteps = (parsedA, gaussSteps, echelonMatrix, rankValue, rowsA, colsA) => {
  const steps = [
    {
      title: "Dimensões e Posto Máximo",
      description: `A matriz tem dimensão ${rowsA}x${colsA}. O posto máximo possível é min(${rowsA}, ${colsA}) = ${Math.min(rowsA, colsA)}.`,
      matrix: formatMatrix(parsedA),
    },
  ];

  gaussSteps.forEach((st) => {
    steps.push(st);
  });

  const nonZeroRows = [];
  const pivotCells = [];
  for (let i = 0; i < echelonMatrix.length; i++) {
    for (let j = 0; j < echelonMatrix[i].length; j++) {
      if (Math.abs(toNumber(echelonMatrix[i][j])) > 1e-10) {
        nonZeroRows.push(i);
        pivotCells.push([i, j]);
        break;
      }
    }
  }

  steps.push({
    title: "Contagem de Linhas Não Nulas",
    description: `Na matriz escalonada, encontramos ${nonZeroRows.length} linha(s) não nula(s) com pivôs linearmente independentes. Portanto, posto(A) = ${rankValue}.`,
    matrix: echelonMatrix,
    highlight: {
      rows: nonZeroRows,
      pivotCells: pivotCells,
    },
  });

  return steps;
};

const buildCramerSteps = (parsedA, parsedB, math) => {
  const { matrix, det, divide } = math;
  const n = parsedA.length;
  const matrixAObj = matrix(parsedA);
  const detA = det(matrixAObj);
  const detANum = toNumber(detA);
  const formattedDetA = formatValue(detA);

  if (Math.abs(detANum) < 1e-10) {
    throw new Error(
      "O determinante da matriz de coeficientes é zero (D = 0). O sistema não possui solução única e a Regra de Cramer não pode ser aplicada."
    );
  }

  const varNames = n === 2 ? ["x", "y"] : ["x", "y", "z"];
  const bVector = parsedB.map((row) => row[0]);

  const steps = [
    {
      title: "Sistema Linear e Matriz de Coeficientes",
      description: `Sistema ${n}x${n} com matriz de coeficientes A e vetor de termos constantes B = [${bVector.map(formatValue).join(", ")}]ᵀ.`,
      matrix: formatMatrix(parsedA),
    },
    {
      title: "Determinante Principal (D)",
      description: `Calculamos o determinante da matriz de coeficientes: D = det(A) = ${formattedDetA}. Como D ≠ 0, o sistema tem solução única.`,
      matrix: formatMatrix(parsedA),
      highlight: {
        cells: diagonalCells(n),
      },
    },
  ];

  const solutions = [];
  const formattedSolutionMatrix = [];

  for (let i = 0; i < n; i++) {
    const varName = varNames[i];
    const aSub = parsedA.map((row, rIdx) =>
      row.map((val, cIdx) => (cIdx === i ? bVector[rIdx] : val))
    );
    const subMatrixObj = matrix(aSub);
    const detSub = det(subMatrixObj);
    const formattedDetSub = formatValue(detSub);
    const varValue = divide(detSub, detA);
    const formattedVarValue = formatValue(varValue);

    solutions.push({ name: varName, value: formattedVarValue, raw: varValue });
    formattedSolutionMatrix.push([formattedVarValue]);

    steps.push({
      title: `Determinante D${varName} e Incógnita ${varName}`,
      description: `Substituímos a coluna ${i + 1} (${varName}) pelo vetor de resultados B.\nD${varName} = det(A_${varName}) = ${formattedDetSub}.\n${varName} = D${varName} / D = ${formattedDetSub} / ${formattedDetA} = ${formattedVarValue}.`,
      matrix: formatMatrix(aSub),
      highlight: {
        cols: [i],
        resultCells: Array.from({ length: n }, (_, r) => [r, i]),
      },
    });
  }

  const solutionSummary = solutions
    .map((s) => `${s.name} = ${s.value}`)
    .join(", ");

  steps.push({
    title: "Conjunto Solução",
    description: `Solução única do sistema linear: (${solutionSummary}). S = {(${solutions.map((s) => s.value).join(", ")})}.`,
    matrix: formattedSolutionMatrix,
    highlight: {
      resultCells: Array.from({ length: n }, (_, r) => [r, 0]),
    },
  });

  return { formattedSolutionMatrix, steps };
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
  traco: (a) => {
    if (a.size()[0] !== a.size()[1])
      throw new Error("O traço só pode ser calculado para matrizes quadradas.");
    const n = a.size()[0];
    let sum = fraction(0);
    for (let i = 0; i < n; i++) {
      sum = add(sum, a.get([i, i]));
    }
    return [[sum]];
  },
  potencia: (a, _, exponent) => {
    if (a.size()[0] !== a.size()[1])
      throw new Error("A potenciação só pode ser calculada para matrizes quadradas.");
    const expNum = Number(exponent);
    if (!Number.isInteger(expNum) || expNum < 0)
      throw new Error("Insira um número inteiro não negativo (0, 1, 2, ...) para o expoente.");
    if (expNum > 10)
      throw new Error("O expoente máximo suportado para cálculo passo a passo é 10.");

    const n = a.size()[0];
    if (expNum === 0) {
      return matrix(createIdentityMatrix(n));
    }
    if (expNum === 1) {
      return a;
    }
    let res = a;
    for (let i = 2; i <= expNum; i++) {
      res = multiply(res, a);
    }
    return res;
  },
};

export const calculate = async (matrixA, matrixB, scalar, operation, size, setResult, setError, setSteps) => {
  setError("");
  setSteps([]);

  if (!matrixA || matrixA.length === 0 || matrixA[0].length === 0) {
    setError("A matriz não pode ser vazia.");
    return;
  }

  if (!validateMatrix(matrixA) || (matrixB && !validateMatrix(matrixB))) {
    setError("Por favor, insira apenas números válidos nas matrizes.");
    return;
  }

  try {
    const math = await loadMath();
    const parsedA = parseMatrix(matrixA);
    const parsedB = matrixB ? parseMatrix(matrixB) : null;
    const rowsA = size.rows;
    const colsA = size.cols || parsedA[0]?.length || 0;
    const matrixAObj = matrix(parsedA);
    const matrixBObj = parsedB ? matrix(parsedB) : null;

    if (operation === "gauss") {
      const { result: gaussResult, steps: gaussSteps } = calculateGaussianElimination(parsedA, rowsA, math);
      setResult(gaussResult);
      setSteps(gaussSteps);
      return;
    }

    if (operation === "posto") {
      const { result: gaussResult, steps: gaussSteps } = calculateGaussianElimination(parsedA, rowsA, math);
      let rank = 0;
      for (let i = 0; i < gaussResult.length; i++) {
        if (gaussResult[i].some((cell) => Math.abs(toNumber(cell)) > 1e-10)) {
          rank++;
        }
      }
      setResult([[rank]]);
      setSteps(buildRankSteps(parsedA, gaussSteps, gaussResult, rank, rowsA, colsA));
      return;
    }

    if (operation === "cramer") {
      if (rowsA !== colsA || (rowsA !== 2 && rowsA !== 3)) {
        throw new Error("A Regra de Cramer está disponível para sistemas 2x2 e 3x3 (matrizes quadradas de coeficientes).");
      }
      if (!parsedB || parsedB.length !== rowsA || (parsedB[0] && parsedB[0].length < 1)) {
        throw new Error("A Matriz B deve conter o vetor coluna dos termos independentes com o mesmo número de linhas.");
      }
      const { formattedSolutionMatrix, steps: cramerSteps } = buildCramerSteps(parsedA, parsedB, math);
      setResult(formattedSolutionMatrix);
      setSteps(cramerSteps);
      return;
    }

    if (operation === "traco") {
      const rawResult = operationsMap.traco(matrixAObj);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildTraceSteps(parsedA, formattedResult));
      return;
    }

    if (operation === "potencia") {
      const rawResult = operationsMap.potencia(matrixAObj, null, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildPowerSteps(parsedA, scalar, formattedResult));
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

    throw new Error("Operação desconhecida.");
  } catch (e) {
    setError(`Erro: ${e.message || "Verifique os valores de entrada e tente novamente."}`);
  }
};

