# Graph Report - Projeto-calculadora-matrizes  (2026-08-29)

## Corpus Check
- 77 files · ~56,248 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 448 nodes · 732 edges · 39 communities (32 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c3de5afb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.jsx
- tutorialsData.jsx
- matrixCalculations.js
- seoRoutes.js
- dependencies
- package.json
- plugin.json
- devDependencies
- Home.jsx
- marketplace.json
- require_match
- vercel.json
- What You Must Do When Invoked
- Humanizer
- Filler and hedging
- graphify reference: extra exports and benchmark
- Humanizer: remove AI writing patterns
- Language and grammar patterns
- Frontend Design
- Guide for agents
- Style patterns
- Content patterns
- Matriz Calculator
- graphify reference: query, path, explain
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- Chatbot patterns
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- Check for false positives
- rules/graphify.md
- extraction-spec.md
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `MatrixDisplay` - 20 edges
2. `calculate()` - 20 edges
3. `formatValue()` - 17 edges
4. `Formula()` - 16 edges
5. `TipBox()` - 16 edges
6. `TutorialCTA()` - 16 edges
7. `UseExampleButton()` - 14 edges
8. `Filler and hedging` - 14 edges
9. `formatMatrix()` - 13 edges
10. `Humanizer: remove AI writing patterns` - 13 edges

## Surprising Connections (you probably didn't know these)
- `Home()` --calls--> `useMatrixCalculator()`  [EXTRACTED]
  src/pages/Home.jsx → src/hooks/useMatrixCalculator.js
- `calculateGaussianElimination()` --calls--> `formatMatrix()`  [EXTRACTED]
  src/algorithms/gaussianElimination.js → src/utils/matrixUtils.js
- `calculateGaussianElimination()` --calls--> `formatValue()`  [EXTRACTED]
  src/algorithms/gaussianElimination.js → src/utils/matrixUtils.js
- `calculate()` --calls--> `calculateGaussianElimination()`  [EXTRACTED]
  src/utils/matrixCalculations.js → src/algorithms/gaussianElimination.js
- `useMatrixCalculator()` --calls--> `calculate()`  [EXTRACTED]
  src/hooks/useMatrixCalculator.js → src/utils/matrixCalculations.js

## Import Cycles
- None detected.

## Communities (39 total, 7 thin omitted)

### Community 0 - "App.jsx"
Cohesion: 0.06
Nodes (37): App(), AppRoutes(), AppShell(), Contato, getInitialTheme(), lazyPages, NotFound, PoliticaPrivacidade (+29 more)

### Community 1 - "tutorialsData.jsx"
Cohesion: 0.17
Nodes (27): createCellSet(), MatrixDisplay, toCellKey(), Formula(), SymbolicMatrix(), TipBox(), TutorialCTA(), matrixSize() (+19 more)

### Community 2 - "matrixCalculations.js"
Cohesion: 0.14
Nodes (37): calculateGaussianElimination(), loadSavedState(), useMatrixCalculator(), allCellCoordinates(), buildCramerSteps(), buildDeterminantSteps(), buildElementWiseSteps(), buildInverseSteps() (+29 more)

### Community 3 - "seoRoutes.js"
Cohesion: 0.09
Nodes (19): distDir, failures, mandatoryRoutes, routeExpectations, routesToCheck, tutorialExpectations, tutorialPaths, applyHead() (+11 more)

### Community 4 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, mathjs, react, react-cookie-consent, react-dom, react-helmet-async, react-icons, react-router-dom (+9 more)

### Community 5 - "package.json"
Cohesion: 0.07
Nodes (28): browserslist, development, production, eslintConfig, extends, name, overrides, vite-plugin-pwa (+20 more)

### Community 6 - "plugin.json"
Cohesion: 0.10
Nodes (19): author, name, url, description, homepage, keywords, license, name (+11 more)

### Community 7 - "devDependencies"
Cohesion: 0.09
Nodes (23): autoprefixer, devDependencies, autoprefixer, postcss, tailwindcss, @testing-library/dom, @testing-library/jest-dom, @testing-library/react (+15 more)

### Community 8 - "Home.jsx"
Cohesion: 0.21
Nodes (9): MatrixInput(), formatNumber(), ResultDisplay(), featuredTutorials, featuredTutorialSlugs, Home(), operationLabels, operationsWithMatrixB (+1 more)

### Community 9 - "marketplace.json"
Cohesion: 0.25
Nodes (7): description, name, owner, name, url, plugins, $schema

### Community 15 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 16 - "Humanizer"
Cohesion: 0.12
Nodes (15): Chatbot patterns, Content patterns, Filler and hedging, Full example, How it works, Humanizer, Installation, Language and grammar patterns (+7 more)

### Community 17 - "Filler and hedging"
Cohesion: 0.14
Nodes (14): 23. Filler phrases, 24. Too many qualifiers, 25. Generic positive endings, 26. Too many hyphenated word pairs, 27. Pretending to reveal a deeper truth, 28. Announcing the next point, 29. A heading repeated in the first sentence, 30. Writing about the previous version (+6 more)

### Community 18 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 19 - "Humanizer: remove AI writing patterns"
Cohesion: 0.25
Nodes (7): Add personality only when it fits, How to return the result, Humanizer: remove AI writing patterns, Match the writer's voice, Rewrite process, Source, What to do

### Community 20 - "Language and grammar patterns"
Cohesion: 0.25
Nodes (8): 10. Forced groups of three, 11. Changing names and repeating sentence openings, 12. False from X to Y ranges, 13. Passive voice and missing subjects, 7. Overused AI words, 8. Avoiding is and are, 9. Not X but Y and clipped negative endings, Language and grammar patterns

### Community 21 - "Frontend Design"
Cohesion: 0.29
Nodes (6): Design principles, Frontend Design, Ground it in the subject, More on writing in design, Process: brainstorm, explore, plan, critique, build, critique again, Restraint and self-critique

### Community 22 - "Guide for agents"
Cohesion: 0.29
Nodes (6): Editing the skill, Guide for agents, Key files, Rules for changes, What this repo contains, Writing style

### Community 23 - "Style patterns"
Cohesion: 0.29
Nodes (7): 14. Em and en dashes, 15. Too much bold text, 16. Lists with bold mini-headings, 17. Title case in headings, 18. Emojis, 19. Curly quotation marks, Style patterns

### Community 24 - "Content patterns"
Cohesion: 0.29
Nodes (7): 1. Inflated claims about importance and legacy, 2. Name-dropping to prove importance, 3. Shallow analysis with -ing phrases, 4. Sales language, 5. Vague sources, 6. Formulaic challenges and outlook sections, Content patterns

### Community 25 - "Matriz Calculator"
Cohesion: 0.29
Nodes (6): Como Executar Localmente, Estrutura de destaque, Licença, Matriz Calculator, Principais Funcionalidades, Tecnologias e Arquitetura

### Community 26 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 27 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 28 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 29 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 30 - "Chatbot patterns"
Cohesion: 0.50
Nodes (4): 20. Chatbot text left in the answer, 21. Knowledge-limit disclaimers and guesses, 22. Overly agreeable tone, Chatbot patterns

### Community 33 - "Check for false positives"
Cohesion: 0.67
Nodes (3): Check for false positives, Human details to keep, What not to flag

## Knowledge Gaps
- **205 isolated node(s):** `$schema`, `name`, `name`, `url`, `description` (+200 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `tutorialsInfo` connect `tutorialsData.jsx` to `Home.jsx`, `App.jsx`, `seoRoutes.js`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Why does `MatrixDisplay` connect `tutorialsData.jsx` to `Home.jsx`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `$schema`, `name`, `name` to the rest of the system?**
  _205 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0593990216631726 - nodes in this community are weakly interconnected._
- **Should `matrixCalculations.js` be split into smaller, more focused modules?**
  _Cohesion score 0.14396456256921372 - nodes in this community are weakly interconnected._
- **Should `seoRoutes.js` be split into smaller, more focused modules?**
  _Cohesion score 0.08866995073891626 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._