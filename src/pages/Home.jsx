import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MatrixInput from "../components/common/MatrixInput";
import ResultDisplay from "../components/ui/ResultDisplay";
import { createEmptyMatrix, calculate } from "../utils/matrixCalculations";
import Header from "../components/common/Header";

// 1. DADOS ESTÁTICOS FORA DO COMPONENTE: O array é criado apenas uma vez.
const tutoriais = [
  { id: 5, title: "Como Multiplicar Matrizes", description: "Aprenda o método linha-por-coluna com um guia passo a passo." },
  { id: 1, title: "Determinante de Matrizes", description: "Descubra o que é e para que serve o determinante de uma matriz." },
  { id: 2, title: "Como Calcular a Inversa", description: "Domine o método de Gauss-Jordan para encontrar a matriz inversa." },
  { id: 3, title: "Escalonamento (Método de Gauss)", description: "Simplifique sistemas de equações transformando a matriz em escada." },
  { id: 4, title: "Matriz Transposta", description: "Entenda a operação de virar as linhas de uma matriz por colunas." },
];

// 2. LÓGICA DE EXIBIÇÃO SIMPLIFICADA: Lista de operações que usam a Matriz B.
const operationsWithMatrixB = ["soma", "subtracao", "multiplicacao"];

const Home = () => {
  const [sizeA, setSizeA] = useState({ rows: 2, cols: 2 });
  const [sizeB, setSizeB] = useState({ rows: 2, cols: 2 });
  const [matrixA, setMatrixA] = useState(createEmptyMatrix(sizeA.rows, sizeA.cols));
  const [matrixB, setMatrixB] = useState(createEmptyMatrix(sizeB.rows, sizeB.cols));
  const [scalar, setScalar] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("soma");
  const [error, setError] = useState("");
  const [steps, setSteps] = useState([]);

  // 3. HANDLER UNIFICADO: Uma função para lidar com ambas as matrizes.
  const handleSizeChange = (matrixId, e) => {
    const { name, value } = e.target;
    const currentSize = matrixId === 'A' ? sizeA : sizeB;
    const newSize = { ...currentSize, [name]: parseInt(value) || 1 }; // Garante que o valor seja no mínimo 1
    
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

  const renderSizeInput = (label, state, onChangeHandler) => (
    <div className="mb-2 text-center">
      <label className="font-semibold mr-2 text-sm sm:text-base">{label}:</label>
      <div className="inline-flex gap-2">
        <select
          name="rows"
          value={state.rows}
          onChange={onChangeHandler}
          className="border px-2 py-1 rounded text-sm"
          aria-label={`${label} linhas`}
        >
          {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
        <select
          name="cols"
          value={state.cols}
          onChange={onChangeHandler}
          className="border px-2 py-1 rounded text-sm"
          aria-label={`${label} colunas`}
        >
          {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
    </div>
  );

  const renderScalarInput = () => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-sm sm:text-base">Escalar</h3>
      <div className="grid gap-1 justify-center" style={{ gridTemplateColumns: "minmax(0, 60px)" }}>
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

  const renderMatrixStep = (matrix) => (
    <div
      className="grid gap-1 mx-auto max-w-[90vw] justify-center"
      style={{ gridTemplateColumns: `repeat(${matrix[0].length}, minmax(0, 60px))` }}
    >
      {matrix.map((row, i) =>
        row.map((val, j) => (
          <div key={`step-matrix-${i}-${j}`} className="bg-gray-200 p-2 rounded text-center text-sm">
            {Number(val).toFixed(2)}
          </div>
        ))
      )}
    </div>
  );

  const renderTutorials = () => (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Aprenda o Essencial 🧠</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutoriais.map((tutorial) => (
          <div key={tutorial.id} className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
            <p className="text-gray-600 mb-4">{tutorial.description}</p>
            <Link
              to={`/tutorial/${tutorial.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm inline-block"
              aria-label={`Saiba mais sobre ${tutorial.title}`}
            >
              Ler Tutorial
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

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

    calculate(matrixA, matrixB, scalar, operation, { rows: sizeA.rows, cols: sizeA.cols }, setResult, setError, setSteps);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Calculadora de Matrizes - Matrizes+</title>
        <meta name="description" content="Calcule soma, multiplicação, determinante, inversa e mais com nossa calculadora online gratuita." />
        {/* ... restante do seu Helmet ... */}
      </Helmet>
      
      <Header />
      
      <main className="p-4 sm:p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Calculadora de Matrizes</h1>
        <p className="mb-4 text-sm sm:text-base">Realize operações como soma, multiplicação, determinante, inversa, transposição e mais.</p>

        <div className="mb-4">
          <label className="font-semibold mr-2 text-sm sm:text-base">Escolha a operação:</label>
          <select className="border px-2 py-1 rounded text-sm" value={operation} onChange={(e) => setOperation(e.target.value)} aria-label="Escolha a operação">
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

        <div className="flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-6 mb-4">
          <div>
            {renderSizeInput("Tamanho da Matriz A", sizeA, (e) => handleSizeChange('A', e))}
            <MatrixInput matrix={matrixA} setMatrix={setMatrixA} label="Matriz A" rows={sizeA.rows} cols={sizeA.cols} />
          </div>

          {operation === "escalar" && renderScalarInput()}
          
          {operationsWithMatrixB.includes(operation) && (
            <div>
              {renderSizeInput("Tamanho da Matriz B", sizeB, (e) => handleSizeChange('B', e))}
              <MatrixInput matrix={matrixB} setMatrix={setMatrixB} label="Matriz B" rows={sizeB.rows} cols={sizeB.cols} />
            </div>
          )}
        </div>

        <button onClick={handleCalculate} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm mb-4" aria-label="Calcular">
          Calcular
        </button>

        {error && <p className="text-red-500 mt-2 font-semibold text-sm">{error}</p>}

        <ResultDisplay result={result} />

        {steps.length > 0 && (
          <div className="mt-2 text-left max-w-md mx-auto">
            <h2 className="font-semibold mb-2 text-sm sm:text-base text-center">Passos do Cálculo</h2>
            <ol className="list-decimal pl-5 text-sm sm:text-base">
              {steps.map((step, i) => (
                <li key={i} className="mb-2">
                  <strong>{step.description}</strong>
                  {step.matrix && renderMatrixStep(step.matrix)}
                </li>
              ))}
            </ol>
          </div>
        )}

        {renderTutorials()}
        
      </main>
    </div>
  );
};

export default Home;