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
  cofatores: (a) => {
    if (a.size()[0] !== a.size()[1])
      throw new Error("A matriz de cofatores só pode ser calculada para matrizes quadradas.");
    const n = a.size()[0];
    let res = [];
    for(let i=0; i<n; i++){
      let row = [];
      for(let j=0; j<n; j++){
        let minor = [];
        for(let x=0; x<n; x++){
          if(x===i) continue;
          let minorRow = [];
          for(let y=0; y<n; y++){
            if(y===j) continue;
            minorRow.push(a.get([x,y]));
          }
          minor.push(minorRow);
        }
        let mDet = minor.length > 0 ? det(matrix(minor)) : a.get([0,0]);
        let sign = ((i+1)+(j+1)) % 2 === 0 ? 1 : -1;
        row.push(multiply(sign, mDet));
      }
      res.push(row);
    }
    return matrix(res);
  },
  adjunta: (a) => {
    if (a.size()[0] !== a.size()[1])
      throw new Error("A matriz adjunta só pode ser calculada para matrizes quadradas.");
    const n = a.size()[0];
    let res = [];
    for(let i=0; i<n; i++){
      let row = [];
      for(let j=0; j<n; j++){
        let minor = [];
        for(let x=0; x<n; x++){
          if(x===i) continue;
          let minorRow = [];
          for(let y=0; y<n; y++){
            if(y===j) continue;
            minorRow.push(a.get([x,y]));
          }
          minor.push(minorRow);
        }
        let mDet = minor.length > 0 ? det(matrix(minor)) : a.get([0,0]);
        let sign = ((i+1)+(j+1)) % 2 === 0 ? 1 : -1;
        row.push(multiply(sign, mDet));
      }
      res.push(row);
    }
    return transpose(matrix(res));
  },
  autovalores: (a) => {
    if (a.size()[0] !== a.size()[1])
      throw new Error("Autovalores só podem ser calculados para matrizes quadradas.");
    const { eigs } = require("mathjs");
    return eigs(a);
  },
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
      let res = [];
      for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) row.push(i === j ? 1 : 0);
        res.push(row);
      }
      return matrix(res);
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





import { buildMultiplicationSteps, buildSarrusDisplayMatrix, createIdentityMatrix, buildTransposeSteps, buildElementWiseSteps, buildScalarSteps, buildDeterminantSteps, buildInverseSteps, buildTraceSteps, buildPowerSteps, buildRankSteps, buildCramerSteps, buildCofactorSteps, buildAdjointSteps } from './stepBuilders';

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

    if (operation === "sistemaGauss") {
      if (!parsedB || rowsA !== parsedB.length) {
        throw new Error("Para resolver o sistema, forneça a Matriz B com o mesmo número de linhas da Matriz A.");
      }
      
      const augmentedMatrix = parsedA.map((row, idx) => [...row, ...parsedB[idx]]);
      const colsA = parsedA[0].length;
      
      const { result: gaussResult, steps: gaussSteps } = calculateGaussianElimination(augmentedMatrix, rowsA, math);
      
      const newSteps = gaussSteps.map((step, idx) => {
        if (idx === 0) {
          return {
            ...step,
            title: "Matriz Aumentada [A | B]",
            description: "Juntamos a matriz de coeficientes (A) com a matriz de constantes (B) para realizar o escalonamento simultâneo.",
          };
        }
        return step;
      });
      
      setResult(gaussResult);
      setSteps(newSteps);
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
      setSteps(buildRankSteps(parsedA, gaussSteps, gaussResult, rank, rowsA, colsA, math));
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

    if (operation === "cofatores") {
      const rawResult = operationsMap[operation](matrixAObj);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildCofactorSteps(parsedA, formattedResult, math));
      return;
    }

    if (operation === "adjunta") {
      const rawResult = operationsMap[operation](matrixAObj);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildAdjointSteps(parsedA, formattedResult, math));
      return;
    }

    if (operation === "autovalores") {
      const eigsObj = math.eigs(matrixAObj);
      
      // Monta matriz de resultados:
      // A primeira linha são os Autovalores
      // As linhas seguintes são as coordenadas dos Autovetores
      let resMatrix = [];
      const values = eigsObj.values.toArray ? eigsObj.values.toArray() : eigsObj.values;
      
      // Primeira linha: Lambda (Autovalores)
      resMatrix.push(values.map(v => v));
      
      // Autovetores (V) formam as colunas
      const n = values.length;
      for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
          const vec = eigsObj.eigenvectors[j].vector.toArray ? eigsObj.eigenvectors[j].vector.toArray() : eigsObj.eigenvectors[j].vector;
          row.push(vec[i]);
        }
        resMatrix.push(row);
      }
      
      const formattedResult = formatMatrix(matrix(resMatrix));
      setResult(formattedResult);
      
      const polyTerms = values.map(v => {
        if (v.im === undefined || Math.abs(v.im) < 1e-10) {
          const val = v.re !== undefined ? v.re : v;
          if (Math.abs(val) < 1e-10) return "\\lambda";
          const sign = val >= 0 ? "-" : "+";
          return `(\\lambda ${sign} ${formatValue(Math.abs(val))})`;
        } else {
          return `(\\lambda - (${formatValue(v.re)} ${v.im >= 0 ? '+' : '-'} ${formatValue(Math.abs(v.im))}i))`;
        }
      }).join("");

      const polyString = `P(\\lambda) = \\det(A - \\lambda I) = ${polyTerms}`;

      setSteps([
        {
          title: "1. Polinômio Característico",
          description: "Para encontrar os autovalores, determinamos as raízes do polinômio característico, obtido pela equação det(A - λI) = 0.",
          mathFormula: polyString,
          matrix: []
        },
        {
          title: "2. Autovalores e Autovetores",
          description: "Com as raízes (autovalores) encontradas, resolvemos (A - λI)v = 0 para encontrar os autovetores associados (v).\n\nNa matriz final apresentada abaixo:\n• A primeira linha contém os Autovalores (λ).\n• As linhas seguintes formam os Autovetores associados a cada λ (colunas correspondentes).",
          mathFormula: "\\det(A - \\lambda I) = 0 \\quad \\Rightarrow \\quad (A - \\lambda I)v = 0",
          matrix: formattedResult
        }
      ]);
      return;
    }

    if (operation === "lu") {
      const { lup } = math;
      if (rowsA !== colsA) {
        setError("Erro: A decomposição LU só pode ser calculada para matrizes quadradas.");
        
        return;
      }

      const { L, U, p } = lup(matrixAObj);
      
      const P_matrix = [];
      for (let i = 0; i < rowsA; i++) {
        let row = new Array(rowsA).fill(0);
        row[p[i]] = 1;
        P_matrix.push(row);
      }
      
      const L_format = formatMatrix(L);
      const U_format = formatMatrix(U);
      const P_format = formatMatrix(matrix(P_matrix));

      // We will set the final result as L, U concatenated? 
      // It's better to just set L as result, but since we can only show one matrix in ResultDisplay,
      // we'll just set it to L for now and show L, U, P in steps.
      setResult(L_format);
      
      setSteps([
        {
          title: "Matriz de Permutação (P)",
          description: "A decomposição LU com pivoteamento parcial gera uma matriz P tal que P * A = L * U.\nSe não houve troca de linhas, P será a matriz identidade.",
          mathFormula: "P \\cdot A = L \\cdot U",
          matrix: P_format
        },
        {
          title: "Matriz Triangular Inferior (L)",
          description: "A matriz L (Lower) armazena os multiplicadores usados no escalonamento, com 1's na diagonal principal.",
          mathFormula: "L",
          matrix: L_format
        },
        {
          title: "Matriz Triangular Superior (U)",
          description: "A matriz U (Upper) é o resultado do escalonamento (eliminação de Gauss) aplicado em A.",
          mathFormula: "U",
          matrix: U_format
        }
      ]);
      return;
    }

    if (operation === "traco") {
      const rawResult = operationsMap.traco(matrixAObj);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildTraceSteps(parsedA, formattedResult, math));
      return;
    }

    if (operation === "potencia") {
      const rawResult = operationsMap.potencia(matrixAObj, null, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildPowerSteps(parsedA, scalar, formattedResult, math));
      return;
    }

    if (operation === "multiplicacao") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildMultiplicationSteps(parsedA, parsedB, formattedResult, math));
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
          math
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
          math
        ),
      );
      return;
    }

    if (operation === "escalar") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildScalarSteps(parsedA, scalar, formattedResult, math));
      return;
    }

    if (operation === "determinanteA") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildDeterminantSteps(parsedA, formattedResult, math));
      return;
    }

    if (operation === "inversa") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildInverseSteps(parsedA, formattedResult, math));
      return;
    }

    if (operation === "transposicao") {
      const rawResult = operationsMap[operation](matrixAObj, matrixBObj, scalar);
      const formattedResult = formatMatrix(rawResult);
      setResult(formattedResult);
      setSteps(buildTransposeSteps(parsedA, formattedResult, math));
      return;
    }

    throw new Error("Operação desconhecida.");
  } catch (e) {
    setError(`Erro: ${e.message || "Verifique os valores de entrada e tente novamente."}`);
  }
};

