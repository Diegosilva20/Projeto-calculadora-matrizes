// src/utils/matrixUtils.js
// Shared pure utility functions — imported by both matrixCalculations.js and gaussianElimination.js.
// This file must NOT import from either of those files to prevent circular dependencies.

/**
 * Converts any mathjs fraction, plain number, or fraction-string to a JS number.
 * Works synchronously without depending on a loaded mathjs instance.
 */
export const toNumber = (val) => {
  if (val === "" || val === null || val === undefined) return 0;
  if (typeof val === "number") return val;
  if (typeof val === "object" && val !== null) {
    if (typeof val.valueOf === "function") {
      const v = val.valueOf();
      if (typeof v === "number") return v;
    }
    if (typeof val.n === "number" && typeof val.d === "number") {
      return val.d !== 0 ? val.n / val.d : 0;
    }
  }
  if (typeof val === "string") {
    const trimmed = val.trim();
    if (trimmed.includes("/")) {
      const parts = trimmed.split("/");
      const num = parseFloat(parts[0]);
      const den = parseFloat(parts[1]);
      if (!isNaN(num) && !isNaN(den) && den !== 0) {
        return num / den;
      }
    }
    const parsed = parseFloat(trimmed);
    return isNaN(parsed) ? 0 : parsed;
  }
  const parsed = parseFloat(val);
  return isNaN(parsed) ? 0 : parsed;
};

/**
 * Formats a single value to a rounded JS number (2 decimal places).
 */
export const formatValue = (val) => {
  const num = toNumber(val);
  return Number(num.toFixed(2));
};

/**
 * Converts a mathjs matrix object or plain 2-D array to a plain 2-D JS array.
 */
export const toArray = (result) => {
  if (result && typeof result.toArray === "function") return result.toArray();
  if (Array.isArray(result)) return result;
  throw new Error("O resultado não é uma matriz válida");
};

/**
 * Formats every element of a matrix (mathjs Matrix or plain 2-D array) to rounded JS numbers.
 */
export const formatMatrix = (mat) => {
  const arr = toArray(mat);
  return arr.map((row) => row.map((val) => formatValue(val)));
};

/**
 * Checks whether `mat` (2-D array of numbers or mathjs fractions) is in row echelon form.
 */
export const isRowEchelonForm = (mat) => {
  let lastPivotCol = -1;
  for (let i = 0; i < mat.length; i++) {
    let pivotCol = -1;
    for (let j = 0; j < mat[i].length; j++) {
      if (Math.abs(toNumber(mat[i][j])) > 1e-10) {
        pivotCol = j;
        break;
      }
    }
    if (pivotCol === -1) continue;
    if (pivotCol <= lastPivotCol) return false;
    for (let k = i + 1; k < mat.length; k++) {
      if (Math.abs(toNumber(mat[k][pivotCol])) > 1e-10) return false;
    }
    lastPivotCol = pivotCol;
  }
  return true;
};
