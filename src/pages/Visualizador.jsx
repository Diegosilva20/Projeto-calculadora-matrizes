import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Visualizador = () => {
  const canonicalUrl = "https://calculamatriz.vercel.app/visualizador";
  const pageTitle = "Visualizador Geométrico de Matrizes 2D | CalculaMatriz";
  const pageDescription =
    "Veja como matrizes 2x2 transformam o espaço bidimensional. Visualize rotações, cisalhamentos, reflexões, vetores da base e determinante como área em tempo real.";

  const [matrix, setMatrix] = useState({ a: 1, b: 0, c: 0, d: 1 });
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

  const presets = [
    { name: "Identidade", m: { a: 1, b: 0, c: 0, d: 1 } },
    { name: "Cisalhamento (Shear X)", m: { a: 1, b: 1, c: 0, d: 1 } },
    { name: "Rotação 90º", m: { a: 0, b: -1, c: 1, d: 0 } },
    { name: "Reflexão no eixo Y", m: { a: -1, b: 0, c: 0, d: 1 } },
    { name: "Achatamento Y", m: { a: 1, b: 0, c: 0, d: 0.2 } },
    { name: "Inversão Total", m: { a: -1, b: 0, c: 0, d: -1 } },
  ];

  const gridSize = 10;
  const tickSpacing = 1;
  const gridLines = [];

  for (let i = -gridSize; i <= gridSize; i += tickSpacing) {
    gridLines.push(
      <line key={`v${i}`} x1={i} y1={-gridSize} x2={i} y2={gridSize} />
    );
    gridLines.push(
      <line key={`h${i}`} x1={-gridSize} y1={i} x2={gridSize} y2={i} />
    );
  }

  const cssMatrix = `matrix(${matrix.a}, ${matrix.c}, ${matrix.b}, ${matrix.d}, 0, 0)`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Visualizador Geométrico de Matrizes 2D — CalculaMatriz",
    description: pageDescription,
    url: canonicalUrl,
    applicationCategory: "EducationalApplication",
    operatingSystem: "All",
    inLanguage: "pt-BR",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 text-center">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://calculamatriz.vercel.app/logo1920.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://calculamatriz.vercel.app/logo1920.png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
              <div className="absolute left-0 top-2 bottom-2 w-3 border-l-4 border-t-4 border-b-4 border-slate-400 dark:border-slate-600 rounded-l-md"></div>
              <div className="absolute right-0 top-2 bottom-2 w-3 border-r-4 border-t-4 border-b-4 border-slate-400 dark:border-slate-600 rounded-r-md"></div>

              <input
                type="number"
                step="0.1"
                aria-label="Elemento a11"
                value={inputs.a}
                onChange={(e) => handleInputChange("a", e.target.value)}
                className="w-16 h-12 text-center text-lg font-mono font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded outline-none focus:ring-2 focus:ring-accent text-emerald-600 dark:text-emerald-400 z-10"
              />
              <input
                type="number"
                step="0.1"
                aria-label="Elemento a12"
                value={inputs.b}
                onChange={(e) => handleInputChange("b", e.target.value)}
                className="w-16 h-12 text-center text-lg font-mono font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded outline-none focus:ring-2 focus:ring-accent text-rose-600 dark:text-rose-400 z-10"
              />
              <input
                type="number"
                step="0.1"
                aria-label="Elemento a21"
                value={inputs.c}
                onChange={(e) => handleInputChange("c", e.target.value)}
                className="w-16 h-12 text-center text-lg font-mono font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded outline-none focus:ring-2 focus:ring-accent text-emerald-600 dark:text-emerald-400 z-10"
              />
              <input
                type="number"
                step="0.1"
                aria-label="Elemento a22"
                value={inputs.d}
                onChange={(e) => handleInputChange("d", e.target.value)}
                className="w-16 h-12 text-center text-lg font-mono font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded outline-none focus:ring-2 focus:ring-accent text-rose-600 dark:text-rose-400 z-10"
              />
            </div>
          </div>

          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
            Presets Rápidos
          </h3>
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
            viewBox="-5 -5 10 10"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="scale(1, -1)">
              <g stroke="currentColor" strokeWidth="0.02" className="text-slate-300 dark:text-slate-700">
                {gridLines}
              </g>

              <line x1="-10" y1="0" x2="10" y2="0" stroke="currentColor" strokeWidth="0.05" className="text-slate-400 dark:text-slate-600" />
              <line x1="0" y1="-10" x2="0" y2="10" stroke="currentColor" strokeWidth="0.05" className="text-slate-400 dark:text-slate-600" />

              <g
                style={{
                  transform: cssMatrix,
                  transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
              >
                <g stroke="currentColor" strokeWidth="0.04" className="text-accent/30 dark:text-accent/40">
                  {gridLines}
                </g>

                <line x1="0" y1="0" x2="1" y2="0" stroke="#10b981" strokeWidth="0.1" strokeLinecap="round" />
                <polygon points="1,0 0.8,0.1 0.8,-0.1" fill="#10b981" />

                <line x1="0" y1="0" x2="0" y2="1" stroke="#f43f5e" strokeWidth="0.1" strokeLinecap="round" />
                <polygon points="0,1 -0.1,0.8 0.1,0.8" fill="#f43f5e" />

                <rect x="0" y="0" width="1" height="1" fill="#3b82f6" fillOpacity="0.15" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      <section className="mt-12 text-left bg-white p-6 rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
          Interpretação Geométrica das Transformações Lineares 2D
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Toda matriz quadrada 2×2 representa uma transformação linear no plano cartesiano. A primeira coluna define para onde vai o vetor unitário <strong className="text-emerald-600 dark:text-emerald-400">î = (1, 0)</strong>, enquanto a segunda coluna define a nova posição do vetor <strong className="text-rose-600 dark:text-rose-400">ĵ = (0, 1)</strong>. O valor absoluto do determinante corresponde ao fator de escala da área do quadrado unitário azul após a transformação.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link to="/tutorial/determinante-2x2" className="text-accent hover:underline dark:text-blue-400">
            Tutorial de Determinante 2x2 →
          </Link>
          <Link to="/tutorial/multiplicacao-de-matrizes" className="text-accent hover:underline dark:text-blue-400">
            Tutorial de Multiplicação de Matrizes →
          </Link>
          <Link to="/" className="text-slate-600 hover:underline dark:text-slate-400">
            Abrir Calculadora de Matrizes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Visualizador;
