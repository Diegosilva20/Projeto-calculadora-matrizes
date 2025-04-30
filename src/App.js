// Um site básico em React + Tailwind com espaço para AdSense e páginas básicas
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
  const [size, setSize] = useState(2);
  const createEmptyMatrix = (n) => Array.from({ length: n }, () => Array(n).fill(""));

  const [matrixA, setMatrixA] = useState(createEmptyMatrix(size));
  const [matrixB, setMatrixB] = useState(createEmptyMatrix(size));
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("soma");
  const [error, setError] = useState("");

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
    setMatrixA(createEmptyMatrix(newSize));
    setMatrixB(createEmptyMatrix(newSize));
    setResult(null);
    setError("");
  };

  const handleInputChange = (matrixSetter, matrix, row, col, value) => {
    const updated = matrix.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? value : c))
    );
    matrixSetter(updated);
  };

  const calculateDeterminant = (m) => {
    const n = m.length;
    if (n === 2) {
      return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    } else if (n === 3) {
      const [a, b, c] = m[0];
      const [d, e, f] = m[1];
      const [g, h, i] = m[2];
      return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
    } else if (n === 4) {
      const det = (m, r0, r1, r2, r3) =>
        m[r0][0] * (m[r1][1] * (m[r2][2] * m[r3][3] - m[r2][3] * m[r3][2]) -
                    m[r1][2] * (m[r2][1] * m[r3][3] - m[r2][3] * m[r3][1]) +
                    m[r1][3] * (m[r2][1] * m[r3][2] - m[r2][2] * m[r3][1])) -
        m[r0][1] * (m[r1][0] * (m[r2][2] * m[r3][3] - m[r2][3] * m[r3][2]) -
                    m[r1][2] * (m[r2][0] * m[r3][3] - m[r2][3] * m[r3][0]) +
                    m[r1][3] * (m[r2][0] * m[r3][2] - m[r2][2] * m[r3][0])) +
        m[r0][2] * (m[r1][0] * (m[r2][1] * m[r3][3] - m[r2][3] * m[r3][1]) -
                    m[r1][1] * (m[r2][0] * m[r3][3] - m[r2][3] * m[r3][0]) +
                    m[r1][3] * (m[r2][0] * m[r3][1] - m[r2][1] * m[r3][0])) -
        m[r0][3] * (m[r1][0] * (m[r2][1] * m[r3][2] - m[r2][2] * m[r3][1]) -
                    m[r1][1] * (m[r2][0] * m[r3][2] - m[r2][2] * m[r3][0]) +
                    m[r1][2] * (m[r2][0] * m[r3][1] - m[r2][1] * m[r3][0]));
      return det(m, 0, 1, 2, 3);
    }
    return null;
  };

  const invertMatrix = (m) => {
    const n = m.length;
    const det = calculateDeterminant(m);
    if (det === 0) return null;
    if (n === 2) {
      const [[a, b], [c, d]] = m;
      return [
        [d / det, -b / det],
        [-c / det, a / det],
      ];
    }
    // Usar biblioteca para inversão de 3x3 e 4x4, mas aqui faremos uma versão simplificada usando matemática pura
    const I = m.map((row, i) => row.map((_, j) => (i === j ? 1 : 0)));
    let A = m.map((row) => [...row]);
    let inv = I.map((row) => [...row]);

    for (let i = 0; i < n; i++) {
      let diag = A[i][i];
      if (diag === 0) return null;
      for (let j = 0; j < n; j++) {
        A[i][j] /= diag;
        inv[i][j] /= diag;
      }
      for (let k = 0; k < n; k++) {
        if (k !== i) {
          const factor = A[k][i];
          for (let j = 0; j < n; j++) {
            A[k][j] -= factor * A[i][j];
            inv[k][j] -= factor * inv[i][j];
          }
        }
      }
    }
    return inv;
  };

  const calculate = () => {
    setError("");
    const parsedA = matrixA.map(row => row.map(val => parseFloat(val || 0)));
    const parsedB = matrixB.map(row => row.map(val => parseFloat(val || 0)));

    if (operation === "soma") {
      const summed = parsedA.map((row, i) =>
        row.map((val, j) => val + parsedB[i][j])
      );
      setResult(summed);
    } else if (operation === "subtracao") {
      const subtracted = parsedA.map((row, i) =>
        row.map((val, j) => val - parsedB[i][j])
      );
      setResult(subtracted);
    } else if (operation === "determinanteA") {
      const det = calculateDeterminant(parsedA);
      setResult([[det.toFixed(2)]]);
    } else if (operation === "multiplicacao") {
      const resultMatrix = Array(size).fill(null).map(() => Array(size).fill(0));
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          for (let k = 0; k < size; k++) {
            resultMatrix[i][j] += parsedA[i][k] * parsedB[k][j];
          }
        }
      }
      setResult(resultMatrix);
    } else if (operation === "inversa") {
      const inverse = invertMatrix(parsedA);
      if (!inverse) {
        setError("A matriz não é invertível (determinante igual a zero).");
        setResult(null);
      } else {
        setResult(inverse.map(row => row.map(val => Number(val.toFixed(2)))));
      }
    }
  };

  const renderMatrixInput = (matrix, setMatrix, label) => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Matriz {label}</h3>
      <div
        className="grid gap-2 justify-center"
        style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
      >
        {matrix.map((row, i) =>
          row.map((val, j) => (
            <input
              key={`${label}-${i}-${j}`}
              type="number"
              value={val}
              onChange={(e) => handleInputChange(setMatrix, matrix, i, j, e.target.value)}
              className="border p-2 rounded w-16 sm:w-14 md:w-16 text-center"
            />
          ))
        )}
      </div>
    </div>
  );

  return (
    <div className="p-6 text-center">
      <Helmet>
        <title>Calculadora de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content="Realize operações com matrizes como soma, subtração, multiplicação e cálculo do determinante."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Calculadora de Matrizes</h1>
      <p className="mb-4">Realize operações como soma, subtração, multiplicação, determinante e inversa.</p>

      <div className="mb-4">
        <label className="font-semibold mr-2">Tamanho da matriz:</label>
        <select
          className="border px-2 py-1 rounded"
          value={size}
          onChange={handleSizeChange}
        >
          <option value={2}>2x2</option>
          <option value={3}>3x3</option>
          <option value={4}>4x4</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="font-semibold mr-2">Escolha a operação:</label>
        <select
          className="border px-2 py-1 rounded"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="soma">Soma (A + B)</option>
          <option value="subtracao">Subtração (A - B)</option>
          <option value="multiplicacao">Multiplicação (A × B)</option>
          <option value="determinanteA">Determinante de A</option>
          <option value="inversa">Inversa de A</option>
        </select>
      </div>

      <div className="flex justify-center gap-10 mb-6 flex-wrap">
        {renderMatrixInput(matrixA, setMatrixA, "A")}
        {operation !== "determinanteA" && operation !== "inversa" && renderMatrixInput(matrixB, setMatrixB, "B")}
      </div>

      <button
        onClick={calculate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calcular
      </button>

      {error && <p className="text-red-500 mt-4 font-semibold">{error}</p>}

      {result && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Resultado</h3>
          <div
            className="grid gap-2 mx-auto max-w-[90vw] justify-center"
            style={{ gridTemplateColumns: `repeat(${result[0].length}, minmax(0, 1fr))` }}
          >
            {result.map((row, i) =>
              row.map((val, j) => (
                <div
                  key={`result-${i}-${j}`}
                  className="bg-gray-200 p-2 rounded text-center w-16 sm:w-14 md:w-16"
                >
                  {val}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Espaço para o AdSense */}
      <div className="my-8">
        <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
    </div>
  );
}

function PoliticaPrivacidade() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Política de Privacidade</h2>
      <p>Este site utiliza cookies e serviços de terceiros como o Google AdSense.</p>
    </div>
  );
}

function TermosUso() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Termos de Uso</h2>
      <p>O uso deste site implica na aceitação dos termos descritos aqui.</p>
    </div>
  );
}

function Contato() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Contato</h2>
      <p>Você pode nos contatar pelo e-mail: contato@seudominio.com.br</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <nav className="bg-white shadow p-4 flex justify-between">
          <h1 className="font-bold">Matrizes+</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Início</Link>
            <Link to="/politica" className="hover:underline">Privacidade</Link>
            <Link to="/termos" className="hover:underline">Termos</Link>
            <Link to="/contato" className="hover:underline">Contato</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica" element={<PoliticaPrivacidade />} />
          <Route path="/termos" element={<TermosUso />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}
