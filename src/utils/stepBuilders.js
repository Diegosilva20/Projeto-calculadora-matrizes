import { formatValue, formatMatrix, toNumber } from './matrixUtils';


const cloneMatrix = (mat) => mat.map((row) => [...row]);

const isZero = (value) => Math.abs(toNumber(value)) < 1e-10;

const isOne = (value) => Math.abs(toNumber(value) - 1) < 1e-10;

const formatWorkingMatrix = (mat) =>
  mat.map((row) => row.map((cell) => formatValue(cell)));

export const createIdentityMatrix = (size, math) =>
  Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => math.fraction(i === j ? 1 : 0)),
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






















export const buildSarrusDisplayMatrix = (formattedMatrix) =>
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

export const buildMultiplicationSteps = (parsedA, parsedB, formattedResult, math) => {
  const { add, subtract, multiply, divide, det, matrix, fraction, number } = math;
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

export const buildTransposeSteps = (parsedA, formattedResult, math) => {
  const { add, subtract, multiply, divide, det, matrix, fraction, number } = math;
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

export const buildElementWiseSteps = (
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

export const buildScalarSteps = (parsedA, scalar, formattedResult, math) => {
  const { add, subtract, multiply, divide, det, matrix, fraction, number } = math;
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

export const buildDeterminantSteps = (parsedA, formattedResult, math) => {
  const { add, subtract, multiply, divide, det, matrix, fraction, number } = math;
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

export const buildInverseSteps = (parsedA, formattedResult, math) => {
  const { add, subtract, multiply, divide, det, matrix, fraction, number } = math;
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

export const buildTraceSteps = (parsedA, formattedResult, math) => {
  const { add, subtract, multiply, divide, det, matrix, fraction, number } = math;
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

export const buildPowerSteps = (parsedA, exponent, formattedResult, math) => {
  const { add, subtract, multiply, divide, det, matrix, fraction, number } = math;
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

export const buildRankSteps = (parsedA, gaussSteps, echelonMatrix, rankValue, rowsA, colsA, math) => {
  const { add, subtract, multiply, divide, det, matrix, fraction, number } = math;
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

export const buildCramerSteps = (parsedA, parsedB, math) => {
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

export const buildCofactorSteps = (parsedA, formattedResult, math) => {
  const { det, matrix, multiply } = math;
  const n = parsedA.length;
  const steps = [];
  
  // Step 1: Explain the formula
  steps.push({
    title: "1. Fórmula dos Cofatores",
    description: "Para encontrar a matriz de cofatores C, calculamos cada elemento C_ij. Onde M_ij é a matriz (Menor Complementar) obtida removendo a linha 'i' e a coluna 'j'.",
    mathFormula: "C_{ij} = (-1)^{i+j} \\cdot \\det(M_{ij})",
    matrix: formatMatrix(parsedA),
  });

  // Step 2: Calculate Minors and Signs (Show first element as example if n > 1)
  if (n > 1) {
    let minorExample = [];
    for(let x=1; x<n; x++) {
      let minorRow = [];
      for(let y=1; y<n; y++) {
        minorRow.push(parsedA[x][y]);
      }
      minorExample.push(minorRow);
    }
    
    steps.push({
      title: "2. Exemplo de Cálculo (C_11)",
      description: `Para o elemento na posição (1,1), removemos a linha 1 e a coluna 1.\nA matriz menor restante M_11 é mostrada abaixo.\nO cofator será (-1)^(1+1) × det(M_11).`,
      matrix: formatMatrix(minorExample),
      highlight: { cells: [[0,0]] },
    });
  }

  // Step 3: Final Cofactor Matrix
  steps.push({
    title: "3. Matriz de Cofatores Final",
    description: "Aplicando a regra do sinal (um padrão de tabuleiro de xadrez de + e -) sobre os determinantes das matrizes menores de todos os elementos, obtemos a Matriz de Cofatores:",
    matrix: formattedResult,
  });

  return steps;
};

export const buildAdjointSteps = (parsedA, formattedResult, math) => {
  // A adjunta é a transposta dos cofatores.
  // Reutilizamos os passos dos cofatores primeiro!
  
  // To get the cofactor matrix without re-implementing, we just use the transposed formattedResult!
  // Wait, formattedResult is ALREADY transposed (it's the adjoint). So Cofactor is transposed formattedResult.
  
  let cofactorFormatted = [];
  const n = formattedResult.length;
  for(let i=0; i<n; i++) {
    let row = [];
    for(let j=0; j<n; j++) {
      row.push(formattedResult[j][i]);
    }
    cofactorFormatted.push(row);
  }

  const steps = buildCofactorSteps(parsedA, cofactorFormatted, math);
  
  steps.push({
    title: "4. Transposição (Matriz Adjunta)",
    description: "A Matriz Adjunta é, por definição, a transposta da Matriz de Cofatores. Trocamos as linhas pelas colunas da matriz obtida no passo anterior.",
    matrix: formattedResult,
  });

  return steps;
};

