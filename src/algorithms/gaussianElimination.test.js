import { describe, it, expect } from "vitest";
import * as math from "mathjs";
import { calculateGaussianElimination } from "./gaussianElimination";
import { isRowEchelonForm } from "../utils/matrixUtils";

describe("calculateGaussianElimination", () => {
  it("processes matrix fully even if already in echelon form to normalize pivots", () => {
    const parsedA = [
      [math.fraction(1), math.fraction(2)],
      [math.fraction(0), math.fraction(1)],
    ];
    const { result, steps } = calculateGaussianElimination(parsedA, 2, math);

    expect(result).toEqual([[1, 2], [0, 1]]);
    expect(steps[0].title).toBe("Matriz Inicial");
  });

  it("scales and eliminates 2x2 matrix into echelon form", () => {
    const parsedA = [
      [math.fraction(2), math.fraction(4)],
      [math.fraction(3), math.fraction(8)],
    ];
    const { result, steps } = calculateGaussianElimination(parsedA, 2, math);

    // Row 1 / 2 -> [1, 2]
    // Row 2 - 3 * Row 1 -> [3, 8] - [3, 6] = [0, 2] -> / 2 -> [0, 1]
    expect(result).toEqual([[1, 2], [0, 1]]);
    expect(steps.length).toBeGreaterThan(1);
    expect(isRowEchelonForm(result)).toBe(true);
  });

  it("handles row swaps when pivot is zero", () => {
    const parsedA = [
      [math.fraction(0), math.fraction(3)],
      [math.fraction(2), math.fraction(4)],
    ];
    const { result, steps } = calculateGaussianElimination(parsedA, 2, math);

    expect(steps.some(s => s.title.includes("Troca de Linhas"))).toBe(true);
    expect(isRowEchelonForm(result)).toBe(true);
  });

  it("solves 3x4 augmented system matrix", () => {
    const parsedA = [
      [math.fraction(1), math.fraction(1), math.fraction(1), math.fraction(6)],
      [math.fraction(0), math.fraction(2), math.fraction(5), math.fraction(-4)],
      [math.fraction(2), math.fraction(5), math.fraction(-1), math.fraction(27)],
    ];
    const { result, steps } = calculateGaussianElimination(parsedA, 3, math);

    expect(isRowEchelonForm(result)).toBe(true);
    expect(steps.length).toBeGreaterThan(3);
  });
});
