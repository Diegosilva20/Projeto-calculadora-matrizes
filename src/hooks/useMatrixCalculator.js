import { useState } from "react";
import { createEmptyMatrix, calculate } from "../utils/matrixCalculations";

export const useMatrixCalculator = () => {
  // 1. Memória de Estado (Tudo o que o utilizador digita)
  const [sizeA, setSizeA] = useState({ rows: 2, cols: 2 });
  const [sizeB, setSizeB] = useState({ rows: 2, cols: 2 });
  const [matrixA, setMatrixA] = useState(createEmptyMatrix(2, 2));
  const [matrixB, setMatrixB] = useState(createEmptyMatrix(2, 2));
  const [scalar, setScalar] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("soma");
  const [error, setError] = useState("");
  const [steps, setSteps] = useState([]);

  // 2. Lógica para mudar o tamanho das matrizes e limpar os erros antigos
  const handleSizeChange = (matrixId, e) => {
    const { name, value } = e.target;
    const currentSize = matrixId === 'A' ? sizeA : sizeB;
    const newSize = { ...currentSize, [name]: parseInt(value) || 1 };
    
    if (matrixId === 'A') {
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

  // 3. Validações de Matemática de Prevenção (Antes de calcular)
  const handleCalculate = () => {
    let newError = "";
    const isSquareA = sizeA.rows === sizeA.cols;

    if (operation === "multiplicacao" && sizeA.cols !== sizeB.rows) {
      newError = "Erro: O número de colunas da Matriz A deve ser igual ao número de linhas da Matriz B para multiplicação.";
    } else if (operation === "inversa" && !isSquareA) {
      newError = "Erro: A inversa só pode ser calculada para matrizes quadradas.";
    } else if (operation === "determinanteA" && !isSquareA) {
      newError = "Erro: O determinante só pode ser calculado para matrizes quadradas.";
    } else if (operation === "gauss" && !isSquareA) {
      if (!window.confirm("Aviso: A eliminação de Gauss é tipicamente aplicada a matrizes quadradas. Deseja prosseguir mesmo assim?")) {
        return;
      }
    }

    if (newError) {
      setError(newError);
      setResult(null);
      setSteps([]);
      return;
    }

    // Chama o motor matemático cego que refatoramos antes
    calculate(matrixA, matrixB, scalar, operation, { rows: sizeA.rows, cols: sizeA.cols }, setResult, setError, setSteps);
  };

  // 4. Exporta as variáveis e funções para a Home poder usá-las
  return {
    sizeA, sizeB,
    matrixA, setMatrixA,
    matrixB, setMatrixB,
    scalar, setScalar,
    result,
    operation, setOperation,
    error,
    steps,
    handleSizeChange,
    handleCalculate
  };
};