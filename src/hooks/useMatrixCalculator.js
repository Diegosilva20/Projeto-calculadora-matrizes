import { useState, useEffect } from "react";
import { createEmptyMatrix, calculate } from "../utils/matrixCalculations";

// 1. Função inteligente que puxa os dados guardados ANTES de desenhar o ecrã
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
  // 2. Os estados agora nascem com a memória do LocalStorage (ou com o padrão se for a primeira visita)
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

  // Resultados e erros não são guardados, pois queremos a ecrã limpo ao voltar
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [steps, setSteps] = useState([]);

  // 3. O "Olheiro": Sempre que o utilizador digitar algo novo, gravamos em milissegundos
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
  };

  const handleCalculate = () => {
    let newError = "";
    const isSquareA = sizeA.rows === sizeA.cols;

    if (operation === "multiplicacao" && sizeA.cols !== sizeB.rows) {
      newError =
        "Erro: O número de colunas da Matriz A deve ser igual ao número de linhas da Matriz B para multiplicação.";
    } else if (operation === "inversa" && !isSquareA) {
      newError =
        "Erro: A inversa só pode ser calculada para matrizes quadradas.";
    } else if (operation === "determinanteA" && !isSquareA) {
      newError =
        "Erro: O determinante só pode ser calculado para matrizes quadradas.";
    }

    if (newError) {
      setError(newError);
      setResult(null);
      setSteps([]);
      return;
    }

    calculate(
      matrixA,
      matrixB,
      scalar,
      operation,
      { rows: sizeA.rows, cols: sizeA.cols },
      setResult,
      setError,
      setSteps,
    );
  };

  const handleClear = () => {
      setMatrixA(createEmptyMatrix(sizeA.rows, sizeA.cols));
      setMatrixB(createEmptyMatrix(sizeB.rows, sizeB.cols));
      setScalar("");
      setResult(null);
      setError("");
      setSteps([]);
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
