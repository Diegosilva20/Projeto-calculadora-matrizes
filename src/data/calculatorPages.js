export const calculatorPages = [
  {
    path: "/calculadora/determinante",
    operation: "determinanteA",
    tutorialSlug: "determinante-de-matrizes",
    relatedTutorialSlugs: [
      "determinante-2x2",
      "determinante-3x3-regra-de-sarrus",
    ],
    example: {
      sizeA: { rows: 3, cols: 3 },
      matrixA: [
        ["2", "1", "3"],
        ["0", "-1", "4"],
        ["5", "2", "0"],
      ],
    },
    copy: {
      "pt-BR": {
        metaTitle: "Calculadora de Determinante Online | Matriz Calculator",
        metaDescription:
          "Calcule determinantes de matrizes quadradas online com resultado exato, frações quando necessário e passo a passo.",
        heroTitle: "Calculadora de Determinante",
        heroDescription:
          "Encontre o determinante de uma matriz quadrada e acompanhe o desenvolvimento do cálculo em cada etapa.",
        linkLabel: "Determinante",
      },
      en: {
        metaTitle: "Determinant Calculator Online | Matriz Calculator",
        metaDescription:
          "Calculate determinants of square matrices online with exact results, fractions when needed and step-by-step output.",
        heroTitle: "Determinant Calculator",
        heroDescription:
          "Find the determinant of a square matrix and follow the calculation through each step.",
        linkLabel: "Determinant",
      },
      es: {
        metaTitle: "Calculadora de Determinante Online | Matriz Calculator",
        metaDescription:
          "Calcula determinantes de matrices cuadradas online con resultado exacto, fracciones cuando sea necesario y paso a paso.",
        heroTitle: "Calculadora de Determinante",
        heroDescription:
          "Encuentra el determinante de una matriz cuadrada y sigue el desarrollo del cálculo en cada etapa.",
        linkLabel: "Determinante",
      },
    },
  },
  {
    path: "/calculadora/matriz-inversa",
    operation: "inversa",
    tutorialSlug: "matriz-inversa",
    example: {
      sizeA: { rows: 2, cols: 2 },
      matrixA: [
        ["4", "7"],
        ["2", "6"],
      ],
    },
    copy: {
      "pt-BR": {
        metaTitle: "Calculadora de Matriz Inversa Online | Matriz Calculator",
        metaDescription:
          "Calcule matriz inversa online com frações exatas, verificação de determinante e explicação passo a passo.",
        heroTitle: "Calculadora de Matriz Inversa",
        heroDescription:
          "Verifique se a matriz tem inversa e acompanhe o cálculo completo com resultado organizado.",
        linkLabel: "Matriz inversa",
      },
      en: {
        metaTitle: "Inverse Matrix Calculator Online | Matriz Calculator",
        metaDescription:
          "Calculate inverse matrices online with exact fractions, determinant validation and step-by-step explanations.",
        heroTitle: "Inverse Matrix Calculator",
        heroDescription:
          "Check whether the matrix has an inverse and follow the complete calculation with a clear result.",
        linkLabel: "Inverse matrix",
      },
      es: {
        metaTitle: "Calculadora de Matriz Inversa Online | Matriz Calculator",
        metaDescription:
          "Calcula la matriz inversa online con fracciones exactas, verificación de determinante y explicación paso a paso.",
        heroTitle: "Calculadora de Matriz Inversa",
        heroDescription:
          "Verifica si la matriz tiene inversa y sigue el cálculo completo con resultado organizado.",
        linkLabel: "Matriz inversa",
      },
    },
  },
  {
    path: "/calculadora/escalonamento-gauss",
    operation: "gauss",
    tutorialSlug: "escalonamento-gauss",
    relatedTutorialSlugs: ["posto-de-matriz"],
    example: {
      sizeA: { rows: 3, cols: 3 },
      matrixA: [
        ["2", "1", "-1"],
        ["-3", "-1", "2"],
        ["-2", "1", "2"],
      ],
    },
    copy: {
      "pt-BR": {
        metaTitle:
          "Calculadora de Escalonamento de Matrizes | Matriz Calculator",
        metaDescription:
          "Escalone matrizes pelo método de Gauss online, com pivôs, operações de linha e passo a passo.",
        heroTitle: "Calculadora de Escalonamento de Matrizes",
        heroDescription:
          "Aplique eliminação de Gauss, crie zeros abaixo dos pivôs e acompanhe cada operação de linha.",
        linkLabel: "Escalonamento por Gauss",
      },
      en: {
        metaTitle: "Row Echelon Matrix Calculator | Matriz Calculator",
        metaDescription:
          "Put matrices into row echelon form with Gaussian elimination, pivots, row operations and step-by-step output.",
        heroTitle: "Row Echelon Matrix Calculator",
        heroDescription:
          "Apply Gaussian elimination, create zeros below pivots and follow each row operation.",
        linkLabel: "Gaussian elimination",
      },
      es: {
        metaTitle:
          "Calculadora de Escalonamiento de Matrices | Matriz Calculator",
        metaDescription:
          "Escalona matrices por el método de Gauss online, con pivotes, operaciones de fila y paso a paso.",
        heroTitle: "Calculadora de Escalonamiento de Matrices",
        heroDescription:
          "Aplica eliminación de Gauss, crea ceros debajo de los pivotes y sigue cada operación de fila.",
        linkLabel: "Escalonamiento por Gauss",
      },
    },
  },
  {
    path: "/calculadora/multiplicacao-de-matrizes",
    operation: "multiplicacao",
    tutorialSlug: "multiplicacao-de-matrizes",
    example: {
      sizeA: { rows: 2, cols: 3 },
      sizeB: { rows: 3, cols: 2 },
      matrixA: [
        ["1", "2", "3"],
        ["4", "5", "6"],
      ],
      matrixB: [
        ["7", "8"],
        ["9", "10"],
        ["11", "12"],
      ],
    },
    copy: {
      "pt-BR": {
        metaTitle:
          "Calculadora de Multiplicação de Matrizes | Matriz Calculator",
        metaDescription:
          "Multiplique matrizes online usando a regra linha por coluna, com resultado e desenvolvimento passo a passo.",
        heroTitle: "Calculadora de Multiplicação de Matrizes",
        heroDescription:
          "Multiplique A x B com validação de dimensões e veja cada produto linha por coluna no passo a passo.",
        linkLabel: "Multiplicação de matrizes",
      },
      en: {
        metaTitle:
          "Matrix Multiplication Calculator Online | Matriz Calculator",
        metaDescription:
          "Multiply matrices online using the row-by-column rule, with result and step-by-step development.",
        heroTitle: "Matrix Multiplication Calculator",
        heroDescription:
          "Multiply A x B with dimension validation and follow each row-by-column product.",
        linkLabel: "Matrix multiplication",
      },
      es: {
        metaTitle:
          "Calculadora de Multiplicación de Matrices | Matriz Calculator",
        metaDescription:
          "Multiplica matrices online usando la regla fila por columna, con resultado y desarrollo paso a paso.",
        heroTitle: "Calculadora de Multiplicación de Matrices",
        heroDescription:
          "Multiplica A x B con validación de dimensiones y sigue cada producto fila por columna.",
        linkLabel: "Multiplicación de matrices",
      },
    },
  },
  {
    path: "/calculadora/sistemas-lineares",
    operation: "gauss",
    tutorialSlug: "sistemas-lineares",
    relatedTutorialSlugs: ["regra-de-cramer"],
    example: {
      sizeA: { rows: 3, cols: 4 },
      matrixA: [
        ["2", "1", "-1", "8"],
        ["-3", "-1", "2", "-11"],
        ["-2", "1", "2", "-3"],
      ],
    },
    copy: {
      "pt-BR": {
        metaTitle:
          "Calculadora de Sistemas Lineares com Matrizes | Matriz Calculator",
        metaDescription:
          "Resolva sistemas lineares montando a matriz aumentada e usando escalonamento de Gauss com passo a passo.",
        heroTitle: "Calculadora de Sistemas Lineares",
        heroDescription:
          "Monte a matriz aumentada do sistema e use o escalonamento de Gauss para acompanhar as etapas da resolução.",
        linkLabel: "Sistemas lineares",
      },
      en: {
        metaTitle:
          "Linear Systems Matrix Calculator | Matriz Calculator",
        metaDescription:
          "Solve linear systems by entering the augmented matrix and using Gaussian elimination with step-by-step output.",
        heroTitle: "Linear Systems Calculator",
        heroDescription:
          "Enter the augmented matrix of the system and use Gaussian elimination to follow the solution steps.",
        linkLabel: "Linear systems",
      },
      es: {
        metaTitle:
          "Calculadora de Sistemas Lineales con Matrices | Matriz Calculator",
        metaDescription:
          "Resuelve sistemas lineales montando la matriz aumentada y usando eliminación de Gauss paso a paso.",
        heroTitle: "Calculadora de Sistemas Lineales",
        heroDescription:
          "Monta la matriz aumentada del sistema y usa eliminación de Gauss para seguir las etapas de resolución.",
        linkLabel: "Sistemas lineales",
      },
    },
  },
];

export const calculatorPagesByPath = Object.fromEntries(
  calculatorPages.map((page) => [page.path, page]),
);

export const getCalculatorPageCopy = (page, language = "pt-BR") =>
  page?.copy?.[language] || page?.copy?.["pt-BR"] || null;

export const getCalculatorPageByOperation = (operation) =>
  calculatorPages.find((page) => page.operation === operation);

export const getCalculatorPageByTutorialSlug = (slug) =>
  calculatorPages.find(
    (page) =>
      page.tutorialSlug === slug || page.relatedTutorialSlugs?.includes(slug),
  );
