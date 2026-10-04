import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Visualizador = () => {
  // Matriz 2x2 de transformação. Padrão é a matriz Identidade.
  // [[a, b],
  //  [c, d]]
  const [matrix, setMatrix] = useState({ a: 1, b: 0, c: 0, d: 1 });

  // Input state (string para permitir digitar menos/sinais antes do número)
  const [inputs, setInputs] = useState({ a: "1", b: "0", c: "0", d: "1" });

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    const parsed = parseFloat(value);
    if (!isNaN(parsed)) {
      setMatrix((prev) => ({ ...prev, [field]: parsed }));
    }
  };

  const applyPreset = (preset) => {
    setMatrix(preset);
    setInputs({
      a: preset.a.toString(),
      b: preset.b.toString(),
      c: preset.c.toString(),
      d: preset.d.toString(),
    });
  };

  // Presets
  const presets = [
    { name: "Identidade", m: { a: 1, b: 0, c: 0, d: 1 } },
    { name: "Cisalhamento (Shear X)", m: { a: 1, b: 1, c: 0, d: 1 } },
    { name: "Rotação 90º", m: { a: 0, b: -1, c: 1, d: 0 } },
    { name: "Reflexão no eixo Y", m: { a: -1, b: 0, c: 0, d: 1 } },
    { name: "Achatamento Y", m: { a: 1, b: 0, c: 0, d: 0.2 } },
    { name: "Inversão Total", m: { a: -1, b: 0, c: 0, d: -1 } },
  ];

  // Grid SVG parameters
  const gridSize = 10;
  const tickSpacing = 1;
  const gridLines = [];

  // Linhas verticais e horizontais para o grid original e transformado
  for (let i = -gridSize; i <= gridSize; i += tickSpacing) {
    // Linha Vertical (constante X = i, variando Y de -size a +size)
    gridLines.push(
      <line key={`v${i}`} x1={i} y1={-gridSize} x2={i} y2={gridSize} />
    );
    // Linha Horizontal (constante Y = i, variando X de -size a +size)
    gridLines.push(
      <line key={`h${i}`} x1={-gridSize} y1={i} x2={gridSize} y2={i} />
    );
  }

  // matrix(a, c, b, d, tx, ty) do CSS corresponde a:
  // [ a  b  tx ]
  // [ c  d  ty ]
  // [ 0  0   1 ]
  // A nossa matriz matemática:
  // [ a  b ]
  // [ c  d ]
  // Assim o SVG transform fica matrix(a, c, b, d, 0, 0)
  const cssMatrix = `matrix(${matrix.a}, ${matrix.c}, ${matrix.b}, ${matrix.d}, 0, 0)`;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 text-center">
      <Helmet>
        <title>Visualizador Geométrico 2D | Matriz Calculator</title>
        <meta
          name="description"
          content="Veja como matrizes transformam o espaço bidimensional. Visualize rotações, cisalhamentos e espelhamentos em tempo real."
        />
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-slate-900 dark:text-slate-100">
          Visualizador Geométrico 📐
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Mude os valores da matriz abaixo para ver como ela transforma o plano bidimensional. Os vetores <strong className="text-emerald-500">i (verde)</strong> e <strong className="text-rose-500">j (vermelho)</strong> definem as colunas da matriz!
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
        
        {/* Controles da Matriz */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-bold mb-4 dark:text-slate-100">Matriz de Transformação</h2>
          
          <div className="flex justify-center mb-6">
            <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 relative">
              {/* Brackets decorativos */}
              <div className="absolute left-0 top-2 bottom-2 w-3 border-l-4 border-t-4 border-b-4 border-slate-400 dark:border-slate-600 rounded-l-md"></div>
              <div className="absolute right-0 top-2 bottom-2 w-3 border-r-4 border-t-4 border-b-4 border-slate-400 dark:border-slate-600 rounded-r-md"></div>

              <input
                type="number" step="0.1"
                value={inputs.a}
                onChange={(e) => handleInputChange('a', e.target.value)}
                className="w-16 h-12 text-center text-lg font-mono font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded outline-none focus:ring-2 focus:ring-accent text-emerald-600 dark:text-emerald-400 z-10"
              />
              <input
                type="number" step="0.1"
                value={inputs.b}
                onChange={(e) => handleInputChange('b', e.target.value)}
                className="w-16 h-12 text-center text-lg font-mono font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded outline-none focus:ring-2 focus:ring-accent text-rose-600 dark:text-rose-400 z-10"
              />
              <input
                type="number" step="0.1"
                value={inputs.c}
                onChange={(e) => handleInputChange('c', e.target.value)}
                className="w-16 h-12 text-center text-lg font-mono font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded outline-none focus:ring-2 focus:ring-accent text-emerald-600 dark:text-emerald-400 z-10"
              />
              <input
                type="number" step="0.1"
                value={inputs.d}
                onChange={(e) => handleInputChange('d', e.target.value)}
                className="w-16 h-12 text-center text-lg font-mono font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded outline-none focus:ring-2 focus:ring-accent text-rose-600 dark:text-rose-400 z-10"
              />
            </div>
          </div>

          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Presets Rápidos</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {presets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => applyPreset(preset.m)}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-accent hover:text-white dark:hover:bg-accent transition-colors"
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* Viewport SVG */}
        <div className="w-full lg:w-2/3 aspect-square max-w-[600px] bg-slate-50 dark:bg-slate-950 rounded-2xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden relative shadow-inner">
          <svg
            viewBox="-5 -5 10 10" // Mostra um grid 10x10 (-5 a +5)
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* O SVG tem o eixo Y invertido (cresce para baixo). Nós invertemos com scale(1, -1) para ficar igual à matemática. */}
            <g transform="scale(1, -1)">
              
              {/* Grid Base Original (Cinza clarinho, fixo) */}
              <g stroke="currentColor" strokeWidth="0.02" className="text-slate-300 dark:text-slate-700">
                {gridLines}
              </g>
              
              {/* Eixos X e Y fixos */}
              <line x1="-10" y1="0" x2="10" y2="0" stroke="currentColor" strokeWidth="0.05" className="text-slate-400 dark:text-slate-600" />
              <line x1="0" y1="-10" x2="0" y2="10" stroke="currentColor" strokeWidth="0.05" className="text-slate-400 dark:text-slate-600" />

              {/* Grid Transformado (Onde a mágica acontece!) */}
              <g
                style={{
                  transform: cssMatrix,
                  transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"
                }}
              >
                {/* Linhas do Grid Distorcido */}
                <g stroke="currentColor" strokeWidth="0.04" className="text-accent/30 dark:text-accent/40">
                  {gridLines}
                </g>

                {/* Vetor i (verde) - Originalmente (1, 0) */}
                <line x1="0" y1="0" x2="1" y2="0" stroke="#10b981" strokeWidth="0.1" strokeLinecap="round" />
                <polygon points="1,0 0.8,0.1 0.8,-0.1" fill="#10b981" />

                {/* Vetor j (vermelho) - Originalmente (0, 1) */}
                <line x1="0" y1="0" x2="0" y2="1" stroke="#f43f5e" strokeWidth="0.1" strokeLinecap="round" />
                <polygon points="0,1 -0.1,0.8 0.1,0.8" fill="#f43f5e" />
                
                {/* Quadrado Base Mágico para ver a área (Opcional, preenchimento sutil) */}
                <rect x="0" y="0" width="1" height="1" fill="#3b82f6" fillOpacity="0.15" />
              </g>
            </g>
          </svg>
        </div>

      </div>
    </div>
  );
};

export default Visualizador;
