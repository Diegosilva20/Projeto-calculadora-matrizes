import { useState, useEffect, useCallback } from "react";
import { createEmptyMatrix, resizeMatrix, calculate } from "../utils/matrixCalculations";

const STORAGE_KEY = "matrixState_v1";

// 1. Função inteligente que puxa os dados guardados ANTES de desenhar o ecrã
const loadSavedState = (key, defaultValue) => {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    if (key === 'operation' && urlParams.has('op')) return urlParams.get('op');
    if (key === 'scalar' && urlParams.has('s')) return urlParams.get('s');
    
    if (key === 'matrixA' && urlParams.has('A')) {
      const parsed = JSON.parse(decodeURIComponent(urlParams.get('A')));
      if (Array.isArray(parsed)) return parsed;
    }
    if (key === 'matrixB' && urlParams.has('B')) {
      const parsed = JSON.parse(decodeURIComponent(urlParams.get('B')));
      if (Array.isArray(parsed)) return parsed;
    }
    if (key === 'sizeA' && urlParams.has('A')) {
      const parsed = JSON.parse(decodeURIComponent(urlParams.get('A')));
      if (Array.isArray(parsed) && Array.isArray(parsed[0])) {
         return { rows: parsed.length, cols: parsed[0].length };
      }
    }
    if (key === 'sizeB' && urlParams.has('B')) {
      const parsed = JSON.parse(decodeURIComponent(urlParams.get('B')));
      if (Array.isArray(parsed) && Array.isArray(parsed[0])) {
         return { rows: parsed.length, cols: parsed[0].length };
      }
    }
  } catch (e) {
    console.warn("Invalid URL params for matrices", e);
  }

  if (!window.localStorage) return defaultValue;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
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

  // 3. O "Olheiro": Sempre que o utilizador digitar algo novo, gravamos com debounce
  useEffect(() => {
    const id = setTimeout(() => {
      const stateToSave = { sizeA, sizeB, matrixA, matrixB, scalar, operation };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }, 300);
    return () => clearTimeout(id);
  }, [sizeA, sizeB, matrixA, matrixB, scalar, operation]);

  const handleSizeChange = useCallback((matrixId, eOrSize) => {
    const isEvent = eOrSize && eOrSize.target !== undefined;
    const currentSize = matrixId === "A" ? sizeA : sizeB;
    
    let newSize;
    if (isEvent) {
      const { name, value } = eOrSize.target;
      newSize = { ...currentSize, [name]: parseInt(value) || 1 };
    } else {
      newSize = eOrSize;
    }

    if (matrixId === "A") {
      setSizeA(newSize);
      setMatrixA((prev) => resizeMatrix(prev, newSize.rows, newSize.cols));
    } else {
      setSizeB(newSize);
      setMatrixB((prev) => resizeMatrix(prev, newSize.rows, newSize.cols));
    }

    setResult(null);
    setError("");
    setSteps([]);
  }, [sizeA, sizeB]);

  const handleCalculate = useCallback(async () => {
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
    } else if (operation === "traco" && !isSquareA) {
      newError =
        "Erro: O traço só pode ser calculado para matrizes quadradas.";
    } else if (operation === "potencia") {
      if (!isSquareA) {
        newError = "Erro: A potenciação só pode ser calculada para matrizes quadradas.";
      } else if (scalar === "" || !Number.isInteger(Number(scalar)) || Number(scalar) < 0) {
        newError = "Erro: Insira um número inteiro não negativo (0, 1, 2, ...) para o expoente.";
      }
    } else if (operation === "cramer") {
      if (!isSquareA || (sizeA.rows !== 2 && sizeA.rows !== 3)) {
        newError = "Erro: A Regra de Cramer está disponível para sistemas 2x2 e 3x3.";
      } else if (sizeB.rows !== sizeA.rows || sizeB.cols !== 1) {
        newError = "Erro: O vetor de termos constantes (Matriz B) deve ser um vetor coluna (nx1) com o mesmo número de linhas da Matriz A.";
      }
    } else if (operation === "escalar" && (scalar === "" || isNaN(parseFloat(scalar)))) {
      newError = "Erro: Insira um número válido para o escalar.";
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
    );
  }, [sizeA, sizeB, matrixA, matrixB, scalar, operation]);

  const handleClear = useCallback(() => {
      setMatrixA(createEmptyMatrix(sizeA.rows, sizeA.cols));
      setMatrixB(createEmptyMatrix(sizeB.rows, sizeB.cols));
      setScalar("");
      setResult(null);
      setError("");
      setSteps([]);
    }, [sizeA, sizeB]);

  const handleUseResultAsA = useCallback(() => {
    if (result) {
      const r = result.length;
      const c = result[0].length;
      setSizeA({ rows: r, cols: c });
      setMatrixA(result);
      setResult(null);
      setSteps([]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [result]);

  const handleSwapMatrices = useCallback(() => {
    const tempSizeA = sizeA;
    const tempMatrixA = matrixA;
    
    setSizeA(sizeB);
    setMatrixA(matrixB);
    
    setSizeB(tempSizeA);
    setMatrixB(tempMatrixA);
    
    setResult(null);
    setSteps([]);
    setError("");
  }, [sizeA, sizeB, matrixA, matrixB]);

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
    handleUseResultAsA,
    handleSwapMatrices,
  };
};
