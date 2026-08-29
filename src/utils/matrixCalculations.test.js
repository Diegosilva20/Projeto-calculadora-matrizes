import { describe, it, expect } from "vitest";
import {
  createEmptyMatrix,
  resizeMatrix,
  validateMatrix,
  formatValue,
  toArray,
  formatMatrix,
  isRowEchelonForm,
  calculate,
} from "./matrixCalculations";

describe("matrixCalculations utility helpers", () => {
  it("creates empty matrix of given dimensions", () => {
    const mat = createEmptyMatrix(2, 3);
    expect(mat).toEqual([
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("resizes matrix non-destructively", () => {
    const current = [
      ["1", "2"],
      ["3", "4"],
    ];
    const expanded = resizeMatrix(current, 3, 3);
    expect(expanded).toEqual([
      ["1", "2", ""],
      ["3", "4", ""],
      ["", "", ""],
    ]);

    const shrinked = resizeMatrix(current, 1, 1);
    expect(shrinked).toEqual([["1"]]);
  });

  it("validates matrix numbers and fractions correctly", () => {
    expect(validateMatrix([["1", "2"], ["3", "4"]])).toBe(true);
    expect(validateMatrix([["", "2"], ["-3.5", "0"]])).toBe(true);
    expect(validateMatrix([["1/3", "-5/2"], ["0", "3/4"]])).toBe(true);
    expect(validateMatrix([["abc", "2"], ["3", "4"]])).toBe(false);
    expect(validateMatrix([["1/0", "2"], ["3", "4"]])).toBe(false);
  });

  it("formats numbers and matrices", () => {
    expect(formatValue(2.3456)).toBe(2.35);
    expect(formatValue("1/3")).toBe(0.33);
    expect(formatValue(5)).toBe(5);
    expect(formatMatrix([[1.234, 2.678], [0, -4.556]])).toEqual([
      [1.23, 2.68],
      [0, -4.56],
    ]);
  });

  it("checks row echelon form", () => {
    expect(isRowEchelonForm([[1, 2], [0, 1]])).toBe(true);
    expect(isRowEchelonForm([[1, 2], [2, 1]])).toBe(false);
    expect(isRowEchelonForm([[1, 2, 3], [0, 0, 4], [0, 0, 0]])).toBe(true);
  });
});

describe("calculate operations", () => {
  const runCalculate = async (matrixA, matrixB, scalar, operation, size = { rows: matrixA.length, cols: matrixA[0].length }) => {
    let result = null;
    let error = "";
    let steps = [];

    await calculate(
      matrixA,
      matrixB,
      scalar,
      operation,
      size,
      (res) => { result = res; },
      (err) => { error = err; },
      (st) => { steps = st; }
    );

    return { result, error, steps };
  };

  it("performs matrix addition", async () => {
    const A = [["1", "2"], ["3", "4"]];
    const B = [["5", "6"], ["7", "8"]];
    const { result, error, steps } = await runCalculate(A, B, "", "soma");

    expect(error).toBe("");
    expect(result).toEqual([[6, 8], [10, 12]]);
    expect(steps.length).toBeGreaterThan(0);
  });

  it("performs matrix subtraction", async () => {
    const A = [["5", "8"], ["9", "2"]];
    const B = [["1", "3"], ["4", "5"]];
    const { result, error } = await runCalculate(A, B, "", "subtracao");

    expect(error).toBe("");
    expect(result).toEqual([[4, 5], [5, -3]]);
  });

  it("performs matrix multiplication (2x3 * 3x2)", async () => {
    const A = [["1", "2", "3"], ["4", "5", "6"]];
    const B = [["7", "8"], ["9", "1"], ["2", "3"]];
    const { result, error, steps } = await runCalculate(A, B, "", "multiplicacao", { rows: 2, cols: 3 });

    expect(error).toBe("");
    expect(result).toEqual([[31, 19], [85, 55]]);
    expect(steps.length).toBe(1 + 2 * 2); // dimension check + 4 cells
  });

  it("performs scalar multiplication", async () => {
    const A = [["2", "-3"], ["4", "0.5"]];
    const { result, error } = await runCalculate(A, null, "3", "escalar");

    expect(error).toBe("");
    expect(result).toEqual([[6, -9], [12, 1.5]]);
  });

  it("calculates 2x2 determinant", async () => {
    const A = [["3", "8"], ["4", "6"]];
    const { result, error, steps } = await runCalculate(A, null, "", "determinanteA");

    expect(error).toBe("");
    expect(result).toEqual([[-14]]); // 3*6 - 8*4 = 18 - 32 = -14
    expect(steps.length).toBe(4);
  });

  it("calculates 3x3 determinant with Sarrus rule", async () => {
    const A = [
      ["1", "2", "3"],
      ["0", "1", "4"],
      ["5", "6", "0"],
    ];
    // det = 1*(0-24) - 2*(0-20) + 3*(0-5) = -24 + 40 - 15 = 1
    const { result, error, steps } = await runCalculate(A, null, "", "determinanteA");

    expect(error).toBe("");
    expect(result).toEqual([[1]]);
    expect(steps.some(s => s.title.includes("Sarrus"))).toBe(true);
  });

  it("calculates 2x2 inverse", async () => {
    const A = [["4", "7"], ["2", "6"]];
    // det = 24 - 14 = 10
    // inv = [[6/10, -7/10], [-2/10, 4/10]] = [[0.6, -0.7], [-0.2, 0.4]]
    const { result, error } = await runCalculate(A, null, "", "inversa");

    expect(error).toBe("");
    expect(result).toEqual([[0.6, -0.7], [-0.2, 0.4]]);
  });

  it("returns error for non-invertible matrix", async () => {
    const A = [["2", "4"], ["1", "2"]]; // det = 0
    const { error } = await runCalculate(A, null, "", "inversa");

    expect(error).toContain("não é invertível");
  });

  it("calculates matrix transpose", async () => {
    const A = [["1", "2", "3"], ["4", "5", "6"]];
    const { result, error } = await runCalculate(A, null, "", "transposicao");

    expect(error).toBe("");
    expect(result).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });

  it("performs Gaussian elimination", async () => {
    const A = [
      ["2", "1", "-1", "8"],
      ["-3", "-1", "2", "-11"],
      ["-2", "1", "2", "-3"],
    ];
    const { result, error, steps } = await runCalculate(A, null, "", "gauss", { rows: 3, cols: 4 });

    expect(error).toBe("");
    expect(result).toBeDefined();
    expect(steps.length).toBeGreaterThan(0);
  });

  it("calculates matrix operations with fraction inputs", async () => {
    const A = [["1/2", "1/3"], ["-1/4", "3/4"]];
    const B = [["1/2", "2/3"], ["5/4", "1/4"]];
    const { result, error } = await runCalculate(A, B, "", "soma");

    expect(error).toBe("");
    expect(result).toEqual([[1, 1], [1, 1]]);
  });

  describe("Traço de Matriz (tr(A))", () => {
    it("calculates 2x2 and 3x3 trace correctly", async () => {
      const A2 = [["3", "5"], ["1", "7"]];
      const { result: res2, error: err2, steps: st2 } = await runCalculate(A2, null, "", "traco");
      expect(err2).toBe("");
      expect(res2).toEqual([[10]]);
      expect(st2.length).toBe(3);

      const A3 = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
      ];
      const { result: res3, error: err3 } = await runCalculate(A3, null, "", "traco");
      expect(err3).toBe("");
      expect(res3).toEqual([[15]]);
    });

    it("calculates trace with fractions and negative numbers", async () => {
      const A = [["1/2", "3"], ["4", "-1/2"]];
      const { result, error } = await runCalculate(A, null, "", "traco");
      expect(error).toBe("");
      expect(result).toEqual([[0]]);
    });

    it("rejects non-square matrices for trace", async () => {
      const A = [["1", "2", "3"], ["4", "5", "6"]];
      const { error } = await runCalculate(A, null, "", "traco", { rows: 2, cols: 3 });
      expect(error).toContain("quadradas");
    });
  });

  describe("Potenciação de Matrizes (Aⁿ)", () => {
    it("calculates A^0 as identity matrix", async () => {
      const A = [["2", "3"], ["4", "5"]];
      const { result, error, steps } = await runCalculate(A, null, "0", "potencia");
      expect(error).toBe("");
      expect(result).toEqual([[1, 0], [0, 1]]);
      expect(steps[0].title).toContain("Expoente Zero");
    });

    it("calculates A^1 as matrix A", async () => {
      const A = [["2", "3"], ["4", "5"]];
      const { result, error } = await runCalculate(A, null, "1", "potencia");
      expect(error).toBe("");
      expect(result).toEqual([[2, 3], [4, 5]]);
    });

    it("calculates A^2 and A^3 with exact arithmetic", async () => {
      const A = [["1", "2"], ["3", "4"]];
      // A^2 = [[1*1+2*3, 1*2+2*4], [3*1+4*3, 3*2+4*4]] = [[7, 10], [15, 22]]
      const { result: res2, error: err2, steps: st2 } = await runCalculate(A, null, "2", "potencia");
      expect(err2).toBe("");
      expect(res2).toEqual([[7, 10], [15, 22]]);
      expect(st2.length).toBeGreaterThanOrEqual(2);

      // A^3 = A^2 * A = [[7*1+10*3, 7*2+10*4], [15*1+22*3, 15*2+22*4]] = [[37, 54], [81, 118]]
      const { result: res3, error: err3 } = await runCalculate(A, null, "3", "potencia");
      expect(err3).toBe("");
      expect(res3).toEqual([[37, 54], [81, 118]]);
    });

    it("validates invalid exponent values", async () => {
      const A = [["1", "2"], ["3", "4"]];
      const { error: errNeg } = await runCalculate(A, null, "-1", "potencia");
      expect(errNeg).toContain("não negativo");

      const { error: errFloat } = await runCalculate(A, null, "1.5", "potencia");
      expect(errFloat).toContain("não negativo");
    });

    it("rejects non-square matrices for power", async () => {
      const A = [["1", "2", "3"], ["4", "5", "6"]];
      const { error } = await runCalculate(A, null, "2", "potencia", { rows: 2, cols: 3 });
      expect(error).toContain("quadradas");
    });
  });

  describe("Posto de Matriz (Rank)", () => {
    it("calculates rank for full rank square matrix", async () => {
      const A = [["1", "0"], ["0", "1"]];
      const { result, error, steps } = await runCalculate(A, null, "", "posto", { rows: 2, cols: 2 });
      expect(error).toBe("");
      expect(result).toEqual([[2]]);
      expect(steps.some(s => s.title.includes("Contagem de Linhas"))).toBe(true);
    });

    it("calculates rank for linearly dependent rows", async () => {
      const A = [
        ["1", "2", "3"],
        ["2", "4", "6"],
        ["1", "1", "1"],
      ];
      // Row 2 is 2*Row 1. Rank should be 2.
      const { result, error } = await runCalculate(A, null, "", "posto", { rows: 3, cols: 3 });
      expect(error).toBe("");
      expect(result).toEqual([[2]]);
    });

    it("calculates rank for zero matrix", async () => {
      const A = [["0", "0"], ["0", "0"]];
      const { result, error } = await runCalculate(A, null, "", "posto", { rows: 2, cols: 2 });
      expect(error).toBe("");
      expect(result).toEqual([[0]]);
    });

    it("calculates rank for rectangular matrix (3x4)", async () => {
      const A = [
        ["1", "0", "2", "1"],
        ["0", "1", "3", "2"],
        ["1", "1", "5", "3"],
      ];
      // Row 3 = Row 1 + Row 2. Rank should be 2.
      const { result, error } = await runCalculate(A, null, "", "posto", { rows: 3, cols: 4 });
      expect(error).toBe("");
      expect(result).toEqual([[2]]);
    });
  });

  describe("Regra de Cramer", () => {
    it("solves 2x2 linear system with unique solution", async () => {
      // 2x + 3y = 7
      // -1x + 4y = 1
      // D = 2*4 - 3*(-1) = 8 + 3 = 11
      // Dx = 7*4 - 3*1 = 28 - 3 = 25 -> x = 25/11 = 2.27
      // Dy = 2*1 - 7*(-1) = 2 + 7 = 9 -> y = 9/11 = 0.82
      const A = [["2", "3"], ["-1", "4"]];
      const B = [["7"], ["1"]];
      const { result, error, steps } = await runCalculate(A, B, "", "cramer", { rows: 2, cols: 2 });

      expect(error).toBe("");
      expect(result).toEqual([[2.27], [0.82]]);
      expect(steps.some(s => s.title.includes("Determinante Dx"))).toBe(true);
      expect(steps.some(s => s.title.includes("Conjunto Solução"))).toBe(true);
    });

    it("solves 3x3 linear system with unique integer solution", async () => {
      // x + y + z = 6
      // 0x + 2y + 5z = -4
      // 2x + 5y - z = 27
      // Sol: x = 5, y = 3, z = -2
      const A = [
        ["1", "1", "1"],
        ["0", "2", "5"],
        ["2", "5", "-1"],
      ];
      const B = [["6"], ["-4"], ["27"]];
      const { result, error } = await runCalculate(A, B, "", "cramer", { rows: 3, cols: 3 });

      expect(error).toBe("");
      expect(result).toEqual([[5], [3], [-2]]);
    });

    it("rejects system when determinant D = 0", async () => {
      // 2x + 4y = 8
      // 1x + 2y = 4 -> D = 0
      const A = [["2", "4"], ["1", "2"]];
      const B = [["8"], ["4"]];
      const { error } = await runCalculate(A, B, "", "cramer", { rows: 2, cols: 2 });

      expect(error).toContain("determinante da matriz de coeficientes é zero");
    });

    it("validates that system must be 2x2 or 3x3", async () => {
      const A = [
        ["1", "0", "0", "0"],
        ["0", "1", "0", "0"],
        ["0", "0", "1", "0"],
        ["0", "0", "0", "1"],
      ];
      const B = [["1"], ["2"], ["3"], ["4"]];
      const { error } = await runCalculate(A, B, "", "cramer", { rows: 4, cols: 4 });

      expect(error).toContain("2x2 e 3x3");
    });
  });

  describe("Cofatores e Adjunta", () => {
    it("calculates matrix of cofactors", async () => {
      const A = [["1", "2"], ["3", "4"]];
      const { result, error } = await runCalculate(A, null, "", "cofatores");
      expect(error).toBe("");
      expect(result).toEqual([[4, -3], [-2, 1]]);
    });

    it("calculates adjoint matrix", async () => {
      const A = [["1", "2"], ["3", "4"]];
      const { result, error } = await runCalculate(A, null, "", "adjunta");
      expect(error).toBe("");
      // Adjoint is transpose of cofactors: [[4, -2], [-3, 1]]
      expect(result).toEqual([[4, -2], [-3, 1]]);
    });
  });

  describe("Sistema Gauss", () => {
    it("solves 2x2 linear system", async () => {
      const A = [["2", "1"], ["1", "-1"]];
      const B = [["5"], ["1"]];
      const { result, error, steps } = await runCalculate(A, B, "", "sistemaGauss", { rows: 2, cols: 2 });
      expect(error).toBe("");
      // Reduced row echelon form of [A|B]
      // [2 1 | 5]  -> [1  0.5 | 2.5]
      // [1 -1 | 1] -> [1 -1   | 1  ] -> [0 -1.5 | -1.5] -> [0 1 | 1]
      // -> [1 0 | 2]
      expect(result).toEqual([[1, 0.5, 2.5], [0, 1, 1]]);
      expect(steps[0].title).toContain("Matriz Aumentada");
    });
  });

  describe("Autovalores e Autovetores", () => {
    it("calculates eigenvalues and eigenvectors for 2x2 identity matrix", async () => {
      const A = [["1", "0"], ["0", "1"]];
      const { result, error } = await runCalculate(A, null, "", "autovalores");
      expect(error).toBe("");
      // First row: eigenvalues. Identity has eigenvalues 1 and 1.
      // Next rows: eigenvectors.
      expect(result[0]).toEqual([1, 1]);
    });
  });

});
