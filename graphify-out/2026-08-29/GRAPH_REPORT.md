# Graph Report - Projeto-calculadora-matrizes  (2026-08-29)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 291 nodes · 554 edges · 17 communities (15 shown, 2 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c3de5afb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.jsx
- tutorialsData.jsx
- dependencies
- matrixCalculations.js
- seoRoutes.js
- package.json
- plugin.json
- Home.jsx
- devDependencies
- marketplace.json
- require_match
- vercel.json

## God Nodes (most connected - your core abstractions)
1. `MatrixDisplay` - 20 edges
2. `Formula()` - 16 edges
3. `TipBox()` - 16 edges
4. `TutorialCTA()` - 16 edges
5. `UseExampleButton()` - 14 edges
6. `calculate()` - 14 edges
7. `formatValue()` - 12 edges
8. `buildInverseSteps()` - 10 edges
9. `buildDeterminantSteps()` - 8 edges
10. `formatMatrix()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `useMatrixCalculator()` --calls--> `calculate()`  [EXTRACTED]
  src/hooks/useMatrixCalculator.js → src/utils/matrixCalculations.js
- `calculateGaussianElimination()` --calls--> `formatMatrix()`  [EXTRACTED]
  src/algorithms/gaussianElimination.js → src/utils/matrixCalculations.js
- `calculateGaussianElimination()` --calls--> `formatValue()`  [EXTRACTED]
  src/algorithms/gaussianElimination.js → src/utils/matrixCalculations.js
- `calculateGaussianElimination()` --calls--> `isRowEchelonForm()`  [EXTRACTED]
  src/algorithms/gaussianElimination.js → src/utils/matrixCalculations.js
- `calculate()` --calls--> `calculateGaussianElimination()`  [EXTRACTED]
  src/utils/matrixCalculations.js → src/algorithms/gaussianElimination.js

## Import Cycles
- None detected.

## Communities (17 total, 2 thin omitted)

### Community 0 - "App.jsx"
Cohesion: 0.06
Nodes (37): App(), AppRoutes(), AppShell(), Contato, getInitialTheme(), lazyPages, NotFound, PoliticaPrivacidade (+29 more)

### Community 1 - "tutorialsData.jsx"
Cohesion: 0.17
Nodes (27): createCellSet(), MatrixDisplay, toCellKey(), Formula(), SymbolicMatrix(), TipBox(), TutorialCTA(), matrixSize() (+19 more)

### Community 2 - "dependencies"
Cohesion: 0.07
Nodes (30): mkdirp, dependencies, mathjs, mkdirp, react, react-cookie-consent, react-dom, react-helmet-async (+22 more)

### Community 3 - "matrixCalculations.js"
Cohesion: 0.17
Nodes (28): calculateGaussianElimination(), allCellCoordinates(), buildDeterminantSteps(), buildElementWiseSteps(), buildInverseSteps(), buildMultiplicationSteps(), buildSarrusDisplayMatrix(), buildScalarSteps() (+20 more)

### Community 4 - "seoRoutes.js"
Cohesion: 0.09
Nodes (19): distDir, failures, mandatoryRoutes, routeExpectations, routesToCheck, tutorialExpectations, tutorialPaths, applyHead() (+11 more)

### Community 5 - "package.json"
Cohesion: 0.07
Nodes (27): browserslist, development, production, eslintConfig, extends, name, overrides, vite-plugin-pwa (+19 more)

### Community 6 - "plugin.json"
Cohesion: 0.10
Nodes (19): author, name, url, description, homepage, keywords, license, name (+11 more)

### Community 7 - "Home.jsx"
Cohesion: 0.18
Nodes (12): MatrixInput(), formatNumber(), ResultDisplay(), loadSavedState(), useMatrixCalculator(), featuredTutorials, featuredTutorialSlugs, Home() (+4 more)

### Community 8 - "devDependencies"
Cohesion: 0.13
Nodes (15): autoprefixer, devDependencies, autoprefixer, postcss, sitemap, tailwindcss, vite, vite-plugin-pwa (+7 more)

### Community 9 - "marketplace.json"
Cohesion: 0.25
Nodes (7): description, name, owner, name, url, plugins, $schema

## Knowledge Gaps
- **93 isolated node(s):** `lazyPages`, `navItems`, `root`, `contactTopics`, `pillars` (+88 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `tutorialsInfo` connect `tutorialsData.jsx` to `seoRoutes.js`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Why does `calculate()` connect `matrixCalculations.js` to `Home.jsx`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `lazyPages`, `navItems`, `root` to the rest of the system?**
  _93 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06009783368273934 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `seoRoutes.js` be split into smaller, more focused modules?**
  _Cohesion score 0.08866995073891626 - nodes in this community are weakly interconnected._