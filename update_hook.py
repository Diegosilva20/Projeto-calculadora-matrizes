import os

path = 'src/hooks/useMatrixCalculator.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

new_load_func = '''const loadSavedState = (key, defaultValue) => {
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
};'''

old_load_func = '''const loadSavedState = (key, defaultValue) => {
  if (typeof window === "undefined" || !window.localStorage) {
    return defaultValue;
  }

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
};'''

if old_load_func in content:
    content = content.replace(old_load_func, new_load_func)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('useMatrixCalculator.js updated!')
else:
    print('Failed to find old_load_func block')

