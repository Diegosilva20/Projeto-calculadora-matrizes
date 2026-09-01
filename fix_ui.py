import re

# 1. Update MatrixInput.jsx
filepath = r"C:\Users\depau\Projetos\Projeto-calculadora-matrizes\src\components\common\MatrixInput.jsx"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

old_header = """<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
        <legend className="font-serif font-bold tracking-tight text-sm sm:text-base dark:text-slate-200">
          {label}
        </legend>
        
        <div className="flex gap-1.5 flex-wrap">
          {isSquare && (
            <button type="button" onClick={handleFillIdentity} className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
              Identidade
            </button>
          )}
          <button type="button" onClick={handleFillZeros} className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
            Zerar
          </button>
          <button type="button" onClick={handleFillRandom} className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
            Aleatória
          </button>
        </div>
      </div>"""

new_header = """<div className="flex flex-col items-center justify-center mb-4 gap-3">
        <legend className="font-serif font-bold tracking-tight text-sm sm:text-base dark:text-slate-200 text-center">
          {label}
        </legend>
        
        <div className="inline-flex rounded-md shadow-sm border border-slate-200 dark:border-slate-700 divide-x divide-slate-200 dark:divide-slate-700 overflow-hidden">
          {isSquare && (
            <button type="button" onClick={handleFillIdentity} className="px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
              Identidade
            </button>
          )}
          <button type="button" onClick={handleFillZeros} className="px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
            Zerar
          </button>
          <button type="button" onClick={handleFillRandom} className="px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
            Aleatória
          </button>
        </div>
      </div>"""

content = content.replace(old_header, new_header)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)


# 2. Update Home.jsx (presets)
filepath_home = r"C:\Users\depau\Projetos\Projeto-calculadora-matrizes\src\pages\Home.jsx"
with open(filepath_home, "r", encoding="utf-8") as f:
    home_content = f.read()

old_presets = """<div className="flex justify-center gap-2 mt-2">
        {[2, 3, 4].map(n => (
          <button
            key={`preset-${n}`}
            type="button"
            onClick={() => onChangeHandler({ rows: n, cols: n })}
            className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
            title={`Redimensionar para ${n}x${n}`}
          >
            {n}x{n}
          </button>
        ))}
      </div>"""

new_presets = """<div className="flex justify-center mt-3">
        <div className="inline-flex rounded-md shadow-sm border border-slate-200 dark:border-slate-700 divide-x divide-slate-200 dark:divide-slate-700 overflow-hidden">
        {[2, 3, 4].map(n => (
          <button
            key={`preset-${n}`}
            type="button"
            onClick={() => onChangeHandler({ rows: n, cols: n })}
            className="px-3 py-1 text-[10px] sm:text-[11px] font-semibold bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
            title={`Redimensionar para ${n}x${n}`}
          >
            {n}x{n}
          </button>
        ))}
        </div>
      </div>"""

home_content = home_content.replace(old_presets, new_presets)

with open(filepath_home, "w", encoding="utf-8") as f:
    f.write(home_content)

print("Done")
