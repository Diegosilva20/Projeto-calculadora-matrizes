import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MatrixInput from "../components/common/MatrixInput";
import ResultDisplay from "../components/ui/ResultDisplay";
import { tutoriais } from '../data/tutorialsData';
import { useMatrixCalculator } from "../hooks/useMatrixCalculator";

// Mapeamento para SEO Contextual e Linkagem Interna
const operationToSlug = {
  "inversa": "matriz-inversa",
  "gauss": "escalonamento-gauss-jordan",
  "determinanteA": "determinante-de-matrizes",
  "multiplicacao": "multiplicacao-de-matrizes",
  "transposicao": "matriz-transposta",
  "sistemas": "sistemas-lineares"
};

const operationsWithMatrixB = ["soma", "subtracao", "multiplicacao"];

const Home = () => {
  const {
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
  } = useMatrixCalculator();

  // Dados Estruturados (JSON-LD) para otimizar o rankeamento no Google
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Calculadora de Matrizes Online",
      "url": "https://www.matrizcalculator.com/",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL"
      },
      "featureList": "Matriz Inversa, Determinante por Escalonamento, Multiplicação de Matrizes, Gauss-Jordan, Sistemas Lineares"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Como calcular determinante por escalonamento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Selecione a operação Eliminação de Gauss, insira os valores da sua matriz e nossa calculadora exibirá o passo a passo do escalonamento até chegar ao resultado."
        }
      }, {
        "@type": "Question",
        "name": "A matriz inversa calculadora mostra o passo a passo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, ao calcular a inversa de uma matriz 2x2, 3x3 ou 4x4, a ferramenta processa os cálculos usando frações exatas para garantir precisão total."
        }
      }]
    }
  ];

  const renderSizeInput = (label, state, onChangeHandler) => (
    <div className="mb-2 text-center">
      <label className="font-semibold mr-2 text-sm sm:text-base">{label}:</label>
      <div className="inline-flex gap-2">
        <select
          name="rows"
          value={state.rows}
          onChange={onChangeHandler}
          className="border px-2 py-1 rounded text-sm outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
        <span className="self-center text-gray-400">×</span>
        <select
          name="cols"
          value={state.cols}
          onChange={onChangeHandler}
          className="border px-2 py-1 rounded text-sm outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        {/* Título focado nos termos de maior busca do Search Console */}
        <title>Calculadora de Matrizes Online | Inversa, Determinante e Gauss</title>
        <meta name="description" content="Resolva matrizes passo a passo. Use nossa Matriz Calculator para calcular determinante por escalonamento, matriz inversa, multiplicação e sistemas lineares." />
        <link rel="canonical" href="https://www.matrizcalculator.com/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <section className="p-4 sm:p-6 max-w-5xl mx-auto text-center">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-gray-800">Calculadora de Matrizes</h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            A ferramenta definitiva para resolver álgebra linear. Calcule derteminantes, inversas e realize escalonamento Gauss-Jordan com precisão absoluta.
          </p>
        </header>

        <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg border border-gray-100 mb-12">
          <div className="mb-6">
            <label className="block font-bold mb-2 text-gray-700">O que você deseja calcular?</label>
            <select 
              className="border-2 border-blue-100 p-3 rounded-lg w-full max-w-md text-center bg-blue-50 focus:border-blue-500 outline-none transition-colors"
              value={operation} 
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="soma">Soma (A + B)</option>
              <option value="subtracao">Subtração (A - B)</option>
              <option value="multiplicacao">Multiplicação (A × B)</option>
              <option value="determinanteA">Determinante de A</option>
              <option value="inversa">Inversa de A</option>
              <option value="transposicao">Transposição de A</option>
              <option value="escalar">Multiplicação por Escalar</option>
              <option value="gauss">Eliminação de Gauss (Escalonamento)</option>
            </select>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 mb-8">
            <div className="w-full max-w-xs">
              {renderSizeInput("Tamanho da Matriz A", sizeA, (e) => handleSizeChange('A', e))}
              <MatrixInput matrix={matrixA} setMatrix={setMatrixA} label="Matriz A" rows={sizeA.rows} cols={sizeA.cols} />
            </div>

            {operation === "escalar" && (
              <div className="flex flex-col items-center justify-center pt-8">
                <span className="font-bold mb-2">Escalar</span>
                <input
                  type="text"
                  value={scalar}
                  onChange={(e) => setScalar(e.target.value)}
                  className="border-2 p-2 rounded-lg w-20 text-center focus:border-blue-500 outline-none"
                  placeholder="k"
                />
              </div>
            )}
            
            {operationsWithMatrixB.includes(operation) && (
              <div className="w-full max-w-xs">
                {renderSizeInput("Tamanho da Matriz B", sizeB, (e) => handleSizeChange('B', e))}
                <MatrixInput matrix={matrixB} setMatrix={setMatrixB} label="Matriz B" rows={sizeB.rows} cols={sizeB.cols} />
              </div>
            )}
          </div>

          <button 
            onClick={handleCalculate} 
            className="bg-blue-600 text-white px-12 py-3 rounded-full font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
          >
            Calcular Agora
          </button>

          {/* SEO e UX: Link dinâmico para tutorial contextual */}
          {operationToSlug[operation] && (
            <div className="mt-6 p-3 bg-yellow-50 rounded-lg inline-block border border-yellow-100">
              <p className="text-sm text-yellow-800">
                💡 Dúvida no cálculo? <Link to={`/tutorial/${operationToSlug[operation]}`} className="font-bold underline hover:text-yellow-900">Ver passo a passo de {operation}</Link>
              </p>
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg font-medium border border-red-100">
              {error}
            </div>
          )}
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <ResultDisplay result={result} />

          {steps.length > 0 && (
            <div className="mt-8 text-left bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-bold mb-4 text-center text-gray-700 underline decoration-blue-300">Resolução Passo a Passo</h2>
              <ol className="space-y-6">
                {steps.map((step, i) => (
                  <li key={i} className="border-l-4 border-blue-400 pl-4 py-1">
                    <p className="font-semibold text-gray-800 mb-2">{step.description}</p>
                    {step.matrix && (
                       <div className="grid gap-1 justify-start overflow-x-auto pb-2" style={{ gridTemplateColumns: `repeat(${step.matrix[0].length}, 50px)` }}>
                         {step.matrix.map((row) => row.map((val, idx) => (
                           <div key={idx} className="bg-white border p-1 rounded text-center text-xs font-mono">{val}</div>
                         )))}
                       </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Seção de Tutoriais (Grid de SEO) */}
        <div className="mt-20 border-t pt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">Aprenda com nossos Guias de Álgebra Linear</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutoriais.map((tutorial) => (
              <article key={tutorial.id} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-all hover:shadow-xl flex flex-col text-left">
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{tutorial.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{tutorial.description}</p>
                <Link
                  to={`/tutorial/${tutorial.slug}`}
                  className="text-blue-600 font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Ler Tutorial Completo <span className="ml-1">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;