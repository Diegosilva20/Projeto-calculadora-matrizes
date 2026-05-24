import { useCallback, useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/LanguageContext";
import { createEmptyMatrix, calculate } from "../utils/matrixCalculations";

const loadSavedState = (key, defaultValue) => {
  if (typeof window === "undefined" || !window.localStorage) {
    return defaultValue;
  }

  try {
    const saved = window.localStorage.getItem("matrixState_v1");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed[key] !== undefined) return parsed[key];
    }
  } catch (e) {
    console.error("Erro ao ler do localStorage", e);
  }
  return defaultValue;
};

export const useMatrixCalculator = () => {
  const { language, t } = useI18n();
  const [sizeA, setSizeA] = useState(() =>
    loadSavedState("sizeA", { rows: 2, cols: 2 }),
  );
  const [sizeB, setSizeB] = useState(() =>
    loadSavedState("sizeB", { rows: 2, cols: 2 }),
  );
  const [matrixA, setMatrixA] = useState(() =>
    loadSavedState("matrixA", createEmptyMatrix(2, 2)),
  );
  const [matrixB, setMatrixB] = useState(() =>
    loadSavedState("matrixB", createEmptyMatrix(2, 2)),
  );
  const [scalar, setScalar] = useState(() => loadSavedState("scalar", ""));
  const [operation, setOperation] = useState(() =>
    loadSavedState("operation", "soma"),
  );

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [steps, setSteps] = useState([]);
  const [hasCalculated, setHasCalculated] = useState(false);
  const previousLanguageRef = useRef(language);

  useEffect(() => {
    const stateToSave = { sizeA, sizeB, matrixA, matrixB, scalar, operation };
    window.localStorage.setItem("matrixState_v1", JSON.stringify(stateToSave));
  }, [sizeA, sizeB, matrixA, matrixB, scalar, operation]);

  const handleSizeChange = (matrixId, e) => {
    const { name, value } = e.target;
    const currentSize = matrixId === "A" ? sizeA : sizeB;
    const newSize = { ...currentSize, [name]: parseInt(value) || 1 };

    if (matrixId === "A") {
      setSizeA(newSize);
      setMatrixA(createEmptyMatrix(newSize.rows, newSize.cols));
    } else {
      setSizeB(newSize);
      setMatrixB(createEmptyMatrix(newSize.rows, newSize.cols));
    }

    setResult(null);
    setError("");
    setSteps([]);
    setHasCalculated(false);
  };

  const runCalculation = useCallback(async () => {
    let newError = "";
    const isSquareA = sizeA.rows === sizeA.cols;

    if (operation === "multiplicacao" && sizeA.cols !== sizeB.rows) {
      newError = t("calculation.errors.multiplicationDimensionsDetailed");
    } else if (operation === "inversa" && !isSquareA) {
      newError = t("calculation.errors.squareInverse");
    } else if (operation === "determinanteA" && !isSquareA) {
      newError = t("calculation.errors.squareDeterminant");
    }

    if (newError) {
      setError(newError);
      setResult(null);
      setSteps([]);
      return;
    }

    await calculate(
      matrixA,
      matrixB,
      scalar,
      operation,
      { rows: sizeA.rows, cols: sizeA.cols },
      setResult,
      setError,
      setSteps,
      t,
    );
  }, [matrixA, matrixB, operation, scalar, sizeA, sizeB, t]);

  useEffect(() => {
    if (previousLanguageRef.current === language) return;
    previousLanguageRef.current = language;

    if (hasCalculated) {
      runCalculation();
    }
  }, [hasCalculated, language, runCalculation]);

  const handleCalculate = async () => {
    setHasCalculated(true);
    await runCalculation();
  };

  const handleClear = () => {
    setMatrixA(createEmptyMatrix(sizeA.rows, sizeA.cols));
    setMatrixB(createEmptyMatrix(sizeB.rows, sizeB.cols));
    setScalar("");
    setResult(null);
    setError("");
    setSteps([]);
    setHasCalculated(false);
  };

  return {
    sizeA,
    sizeB,
    matrixA,
    setMatrixA,
    matrixB,
    setMatrixB,
    scalar,
    setScalar,
    result,
    operation,
    setOperation,
    error,
    steps,
    handleSizeChange,
    handleCalculate,
    handleClear,
  };
};
