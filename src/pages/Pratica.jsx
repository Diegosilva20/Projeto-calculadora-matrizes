import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import MatrixDisplay from "../components/common/MatrixDisplay";
import { createEmptyMatrix } from "../utils/matrixCalculations";

const generateRandomMatrix = (rows, cols, min = -9, max = 9) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () =>
      Math.floor(Math.random() * (max - min + 1) + min).toString()
    )
  );
};

const calculateSum = (matrixA, matrixB) => {
  return matrixA.map((row, i) =>
    row.map((valA, j) => {
      const a = parseFloat(valA);
      const b = parseFloat(matrixB[i][j]);
      return (a + b).toString();
    })
  );
};

const Pratica = () => {
  const [size, setSize] = useState({ rows: 2, cols: 2 });
  const [matrixA, setMatrixA] = useState([]);
  const [matrixB, setMatrixB] = useState([]);
  const [correctResult, setCorrectResult] = useState([]);
  const [userResult, setUserResult] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const generateChallenge = useCallback(() => {
    const newA = generateRandomMatrix(size.rows, size.cols);
    const newB = generateRandomMatrix(size.rows, size.cols);
    setMatrixA(newA);
    setMatrixB(newB);
    setCorrectResult(calculateSum(newA, newB));
    setUserResult(createEmptyMatrix(size.rows, size.cols));
    setIsCompleted(false);
  }, [size]);

  useEffect(() => {
    generateChallenge();
  }, [generateChallenge]);

  const handleInputChange = (r, c, value) => {
    // Permite digitação de números, negativos e decimais
    const numericRegex = /^-?[0-9]*\.?[0-9]*(\/[0-9]*)?$/;
    if (!numericRegex.test(value) && value !== "") return;

    const newUserResult = userResult.map((row, i) =>
      i === r ? row.map((val, j) => (j === c ? value : val)) : row
    );
    setUserResult(newUserResult);

    // Checa se completou
    let completed = true;
    for (let i = 0; i < size.rows; i++) {
      for (let j = 0; j < size.cols; j++) {
        if (newUserResult[i][j] !== correctResult[i][j]) {
          completed = false;
          break;
        }
      }
    }
    setIsCompleted(completed);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 text-center">
      <Helmet>
        <title>Modo Treino: Prática Interativa | Matriz Calculator</title>
        <meta
          name="description"
          content="Treine seus conhecimentos em álgebra linear resolvendo operações com matrizes na prática."
        />
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-slate-900 dark:text-slate-100">
          Modo Treino 🧠
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Resolva a soma das matrizes abaixo. As células ficarão verdes quando você acertar o valor correto!
        </p>
      </header>

      <div className="mb-8 flex justify-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold dark:text-slate-200">Tamanho:</label>
          <select
            value={size.rows}
            onChange={(e) => setSize({ rows: parseInt(e.target.value), cols: parseInt(e.target.value) })}
            className="rounded border border-slate-200 shadow-sm p-1 text-sm outline-none focus:ring-2 focus:ring-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            <option value={2}>2x2</option>
            <option value={3}>3x3</option>
            <option value={4}>4x4</option>
          </select>
        </div>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800 dark:bg-slate-900 transition-colors">
        
        {/* Desafio (A + B) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 overflow-x-auto pb-4">
          <div className="flex flex-col items-center">
            <span className="mb-2 font-semibold text-slate-500 dark:text-slate-400">Matriz A</span>
            <MatrixDisplay matrix={matrixA} />
          </div>
          
          <div className="text-3xl font-bold text-slate-400 dark:text-slate-500 shrink-0">
            +
          </div>
          
          <div className="flex flex-col items-center">
            <span className="mb-2 font-semibold text-slate-500 dark:text-slate-400">Matriz B</span>
            <MatrixDisplay matrix={matrixB} />
          </div>
        </div>

        {/* Input do Aluno */}
        <div className="flex flex-col items-center">
          <span className="mb-4 font-bold text-lg text-slate-800 dark:text-slate-200">
            Sua Resposta:
          </span>
          <div
            className="grid gap-2 justify-center w-max mx-auto"
            style={{ gridTemplateColumns: `repeat(${size.cols}, minmax(50px, 70px))` }}
          >
            {userResult.map((row, i) =>
              row.map((val, j) => {
                const isFilled = val !== "";
                const isCorrect = isFilled && val === correctResult[i][j];
                const isWrong = isFilled && val !== correctResult[i][j];

                let cellClass = "w-full font-mono rounded-xl border-2 p-3 text-center text-lg outline-none transition-all focus:ring-2 focus:ring-accent ";
                
                if (isCorrect) {
                  cellClass += "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/30 dark:border-green-600 dark:text-green-300";
                } else if (isWrong) {
                  cellClass += "border-red-400 bg-red-50 text-red-700 dark:bg-red-900/30 dark:border-red-600 dark:text-red-300";
                } else {
                  cellClass += "border-slate-200 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700";
                }

                return (
                  <input
                    key={`user-${i}-${j}`}
                    type="text"
                    inputMode="text"
                    value={val}
                    onChange={(e) => handleInputChange(i, j, e.target.value)}
                    placeholder="?"
                    className={cellClass}
                  />
                );
              })
            )}
          </div>
        </div>

        {/* Feedback / Sucesso */}
        {isCompleted && (
          <div className="mt-8 animate-fade-in-up">
            <div className="inline-flex flex-col items-center bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6">
              <span className="text-4xl mb-2">🎉</span>
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">
                Parabéns! Resposta perfeita!
              </h3>
              <button
                onClick={generateChallenge}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-transform hover:scale-105"
              >
                Gerar Novo Desafio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pratica;
