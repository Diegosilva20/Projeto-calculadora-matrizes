import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import * as math from 'mathjs';

// Componentes de páginas estáticas
function PoliticaPrivacidade() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
      <p>Conteúdo da política de privacidade...</p>
    </div>
  );
}

function TermosUso() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>
      <p>Conteúdo dos termos de uso...</p>
    </div>
  );
}

function Contato() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <p>Formulário ou informações de contato...</p>
    </div>
  );
}

// Componente Home
function Home() {
  const createEmptyMatrix = (n) => Array.from({ length: n }, () => Array(n).fill(''));

  const [size, setSize] = useState(2);
  const [matrixA, setMatrixA] = useState(createEmptyMatrix(size));
  const [matrixB, setMatrixB] = useState(createEmptyMatrix(size));
  const [scalar, setScalar] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('soma');
  const [error, setError] = useState('');
  const [steps, setSteps] = useState([]);

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
    setMatrixA(createEmptyMatrix(newSize));
    setMatrixB(createEmptyMatrix(newSize));
    setScalar('');
    setResult(null);
    setError('');
    setSteps([]);
  };

  const handleInputChange = (matrixSetter, matrix, row, col, value) => {
    const updated = matrix.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? value : c))
    );
    matrixSetter(updated);
  };

  const validateMatrix = (matrix) => {
    return matrix.every(row =>
      row.every(val => {
        if (val === '') return true;
        const num = parseFloat(val);
        return !isNaN(num) && isFinite(num);
      })
    );
  };

  const formatMatrix = (matrix) => {
    return `[${matrix.map(row => `[${row.map(val => Number(val).toFixed(2)).join(', ')}]`).join(', ')}]`;
  };

  const toArray = (result) => {
    if (math.isMatrix(result)) {
      return result.toArray();
    }
    if (Array.isArray(result)) {
      return result;
    }
    throw new Error('Resultado não é uma matriz válida');
  };

  const calculate = () => {
    setError('');
    setSteps([]);

    if (!validateMatrix(matrixA) || !validateMatrix(matrixB)) {
      setError('Por favor, insira apenas números válidos nas matrizes.');
      return;
    }

    const parsedA = matrixA.map(row => row.map(val => (val === '' ? 0 : parseFloat(val))));
    const parsedB = matrixB.map(row => row.map(val => (val === '' ? 0 : parseFloat(val))));

    try {
      const matrixA = math.matrix(parsedA);
      const matrixB = math.matrix(parsedB);

      if (operation === 'soma') {
        const summed = math.add(matrixA, matrixB);
        setResult(toArray(summed));
      } else if (operation === 'subtracao') {
        const subtracted = math.subtract(matrixA, matrixB);
        setResult(toArray(subtracted));
      } else if (operation === 'multiplicacao') {
        const multiplied = math.multiply(matrixA, matrixB);
        setResult(toArray(multiplied));
      } else if (operation === 'determinanteA') {
        const det = math.det(matrixA);
        setResult([[det]]);
      } else if (operation === 'inversa') {
        const inverse = math.inv(matrixA);
        setResult(toArray(inverse).map(row => row.map(val => Number(val.toFixed(2)))));
      } else if (operation === 'transposicao') {
        const transposed = math.transpose(matrixA);
        setResult(toArray(transposed));
      } else if (operation === 'escalar') {
        const scalarValue = parseFloat(scalar);
        if (isNaN(scalarValue) || !isFinite(scalarValue)) {
          setError('Por favor, insira um número válido para o escalar.');
          return;
        }
        const scaled = math.multiply(matrixA, scalarValue);
        setResult(toArray(scaled));
      } else if (operation === 'gauss') {
        let m = math.matrix(parsedA);
        let steps = [];
        let n = size;
        steps.push(`<strong>Matriz inicial</strong>: ${formatMatrix(m.toArray())}`);
        for (let i = 0; i < n; i++) {
          let pivot = m.get([i, i]);
          if (Math.abs(pivot) < 1e-10) {
            setError('Matriz não pode ser reduzida (pivô zero ou muito pequeno).');
            return;
          }
          steps.push(
            `<strong>Tornar o pivô [${i + 1},${i + 1}] igual a 1</strong>: ` +
            `Dividir a Linha ${i + 1} por ${pivot.toFixed(2)} (pivô).`
          );
          for (let j = i; j < n; j++) {
            m.set([i, j], m.get([i, j]) / pivot);
          }
          steps.push(`Nova matriz: ${formatMatrix(m.toArray())}`);
          for (let k = i + 1; k < n; k++) {
            let factor = m.get([k, i]);
            if (Math.abs(factor) < 1e-10) continue;
            steps.push(
              `<strong>Zerar o elemento [${k + 1},${i + 1}]</strong>: ` +
              `Subtrair ${factor.toFixed(2)} × Linha ${i + 1} da Linha ${k + 1}.`
            );
            for (let j = i; j < n; j++) {
              m.set([k, j], m.get([k, j]) - factor * m.get([i, j]));
            }
            steps.push(`Nova matriz: ${formatMatrix(m.toArray())}`);
          }
        }
        const resultArray = m.toArray().map(row => row.map(val => Number(val.toFixed(2))));
        setResult(resultArray);
        setSteps(steps);
      }
    } catch (e) {
      setError(`Erro: ${e.message || 'Verifique as entradas e tente novamente.'}`);
    }
  };

  const renderMatrixInput = (matrix, setMatrix, label) => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-sm sm:text-base">{label}</h3>
      <div
        className="grid gap-1 justify-center"
        style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 60px))` }}
      >
        {matrix.map((row, i) =>
          row.map((val, j) => (
            <input
              key={`${label}-${i}-${j}`}
              type="text"
              value={val}
              onChange={(e) => handleInputChange(setMatrix, matrix, i, j, e.target.value)}
              className="border p-2 rounded w-full text-center text-sm"
              aria-label={`Elemento da ${label} na linha ${i + 1}, coluna ${j + 1}`}
              placeholder="0"
            />
          ))
        )}
      </div>
    </div>
  );

  const renderScalarInput = () => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-sm sm:text-base">Escalar</h3>
      <div className="grid gap-1 justify-center" style={{ gridTemplateColumns: 'minmax(0, 60px)' }}>
        <input
          type="text"
          value={scalar}
          onChange={(e) => setScalar(e.target.value)}
          className="border p-2 rounded w-full text-center text-sm"
          aria-label="Valor do escalar"
          placeholder="0"
        />
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 text-center max-w-4xl mx-auto">
      <Helmet>
        <title>Calculadora de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content="Realize operações com matrizes como soma, subtração, multiplicação, determinante, inversa, transposição e mais."
        />
      </Helmet>

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Calculadora de Matrizes</h1>
      <p className="mb-4 text-sm sm:text-base">
        Realize operações com matrizes como soma, subtração, multiplicação, determinante, inversa, transposição e mais.
      </p>

      <div className="mb-4">
        <label className="font-semibold mr-2 text-sm sm:text-base">Tamanho da matriz:</label>
        <select
          className="border px-2 py-1 rounded text-sm"
          value={size}
          onChange={handleSizeChange}
          aria-label="Tamanho da matriz"
        >
          <option value={2}>2x2</option>
          <option value={3}>3x3</option>
          <option value={4}>4x4</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="font-semibold mr-2 text-sm sm:text-base">Escolha a operação:</label>
        <select
          className="border px-2 py-1 rounded text-sm"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          aria-label="Escolha a operação"
        >
          <option value="soma">Soma (A + B)</option>
          <option value="subtracao">Subtração (A - B)</option>
          <option value="multiplicacao">Multiplicação (A × B)</option>
          <option value="determinanteA">Determinante de A</option>
          <option value="inversa">Inversa de A</option>
          <option value="transposicao">Transposição de A</option>
          <option value="escalar">Multiplicação por Escalar</option>
          <option value="gauss">Eliminação de Gauss</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 mb-6">
        {renderMatrixInput(matrixA, setMatrixA, 'Matriz A')}
        {operation === 'escalar' && renderScalarInput()}
        {operation !== 'determinanteA' &&
         operation !== 'inversa' &&
         operation !== 'transposicao' &&
         operation !== 'escalar' &&
         operation !== 'gauss' &&
         renderMatrixInput(matrixB, setMatrixB, 'Matriz B')}
      </div>

      <button
        onClick={calculate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        aria-label="Calcular"
      >
        Calcular
      </button>

      {error && <p className="text-red-500 mt-4 font-semibold text-sm">{error}</p>}

      {result && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2 text-sm sm:text-base">Resultado</h3>
          <div
            className="grid gap-1 mx-auto max-w-[90vw] justify-center"
            style={{ gridTemplateColumns: `repeat(${result[0].length}, minmax(0, 60px))` }}
          >
            {result.map((row, i) =>
              row.map((val, j) => (
                <div
                  key={`result-${i}-${j}`}
                  className="bg-gray-200 p-2 rounded text-center text-sm"
                >
                  {Number(val).toFixed(2)}
                </div>
              ))
            )}
          </div>
          {steps.length > 0 && (
            <div className="mt-4 text-left max-w-md mx-auto">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Passos do Cálculo</h3>
              <ol className="list-decimal pl-5 text-sm sm:text-base">
                {steps.map((step, i) => (
                  <li key={i} className="mb-2" dangerouslySetInnerHTML={{ __html: step }} />
                ))}
              </ol>
            </div>
          )}
        </div>
      )}

      <div className="my-8">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>
  );
}

// Componente App
function App() {
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

export default App;