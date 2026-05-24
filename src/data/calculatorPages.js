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
    content: {
      "pt-BR": {
        introTitle: "Como usar a calculadora de determinante",
        intro:
          "Esta página foi pensada para calcular determinantes de matrizes quadradas e mostrar o desenvolvimento com clareza. Ela ajuda a conferir exercícios, validar respostas e entender como o valor final muda conforme os elementos da matriz.",
        stepsTitle: "Passos recomendados",
        steps: [
          "Confirme se a matriz tem o mesmo número de linhas e colunas.",
          "Digite os valores da matriz A ou use o exemplo carregado.",
          "Clique em calcular para ver o determinante e o passo a passo.",
        ],
        exampleTitle: "Exemplo carregado",
        example:
          "A página começa com uma matriz 3 x 3, adequada para praticar determinante por eliminação ou expansão e comparar o resultado com o tutorial.",
        faqTitle: "Perguntas frequentes",
        faq: [
          {
            question: "A calculadora aceita matriz não quadrada?",
            answer:
              "Não. Determinante só existe para matrizes quadradas, como 2 x 2, 3 x 3 ou 4 x 4.",
          },
          {
            question: "O resultado pode aparecer com frações?",
            answer:
              "Sim. Quando necessário, o cálculo preserva valores exatos e depois apresenta o resultado de forma organizada.",
          },
        ],
      },
      en: {
        introTitle: "How to use the determinant calculator",
        intro:
          "This page is designed to calculate determinants of square matrices and show the work clearly. It helps you check exercises, validate answers and understand how the final value changes with the matrix entries.",
        stepsTitle: "Recommended steps",
        steps: [
          "Make sure the matrix has the same number of rows and columns.",
          "Enter the values in matrix A or start with the loaded example.",
          "Click calculate to see the determinant and the step-by-step work.",
        ],
        exampleTitle: "Loaded example",
        example:
          "The page starts with a 3 by 3 matrix, useful for practicing determinants by elimination or expansion and comparing the result with the tutorial.",
        faqTitle: "Frequently asked questions",
        faq: [
          {
            question: "Can the calculator handle a non-square matrix?",
            answer:
              "No. A determinant is defined only for square matrices, such as 2 by 2, 3 by 3 or 4 by 4.",
          },
          {
            question: "Can the result include fractions?",
            answer:
              "Yes. When needed, the calculation keeps exact values and then presents the result in an organized way.",
          },
        ],
      },
      es: {
        introTitle: "Cómo usar la calculadora de determinante",
        intro:
          "Esta página está pensada para calcular determinantes de matrices cuadradas y mostrar el desarrollo con claridad. Ayuda a comprobar ejercicios, validar respuestas y entender cómo cambia el valor final según los elementos de la matriz.",
        stepsTitle: "Pasos recomendados",
        steps: [
          "Confirma que la matriz tenga el mismo número de filas y columnas.",
          "Escribe los valores de la matriz A o usa el ejemplo cargado.",
          "Haz clic en calcular para ver el determinante y el paso a paso.",
        ],
        exampleTitle: "Ejemplo cargado",
        example:
          "La página empieza con una matriz 3 x 3, útil para practicar determinantes por eliminación o expansión y comparar el resultado con el tutorial.",
        faqTitle: "Preguntas frecuentes",
        faq: [
          {
            question: "¿La calculadora acepta matrices no cuadradas?",
            answer:
              "No. El determinante solo existe para matrices cuadradas, como 2 x 2, 3 x 3 o 4 x 4.",
          },
          {
            question: "¿El resultado puede aparecer con fracciones?",
            answer:
              "Sí. Cuando es necesario, el cálculo conserva valores exactos y luego presenta el resultado de forma organizada.",
          },
        ],
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
    content: {
      "pt-BR": {
        introTitle: "Como usar a calculadora de matriz inversa",
        intro:
          "Use esta página para verificar se uma matriz quadrada tem inversa e calcular o resultado com passo a passo. A calculadora é útil para álgebra linear, resolução de sistemas e conferência de exercícios.",
        stepsTitle: "Passos recomendados",
        steps: [
          "Digite uma matriz quadrada na matriz A.",
          "Confira se os valores estão corretos antes de calcular.",
          "Veja a inversa e acompanhe a validação pelo determinante.",
        ],
        exampleTitle: "Exemplo carregado",
        example:
          "O exemplo inicial usa uma matriz 2 x 2 com inversa existente, ideal para conferir rapidamente a regra da matriz adjunta e do determinante.",
        faqTitle: "Perguntas frequentes",
        faq: [
          {
            question: "Toda matriz quadrada tem inversa?",
            answer:
              "Não. Uma matriz só tem inversa quando seu determinante é diferente de zero.",
          },
          {
            question: "A calculadora mostra quando a matriz não é invertível?",
            answer:
              "Sim. Se a matriz for singular, a página informa que a inversa não pode ser calculada.",
          },
        ],
      },
      en: {
        introTitle: "How to use the inverse matrix calculator",
        intro:
          "Use this page to check whether a square matrix has an inverse and calculate the result step by step. It is useful for linear algebra, solving systems and checking exercises.",
        stepsTitle: "Recommended steps",
        steps: [
          "Enter a square matrix in matrix A.",
          "Check the entries before calculating.",
          "Review the inverse and follow the determinant validation.",
        ],
        exampleTitle: "Loaded example",
        example:
          "The initial example uses a 2 by 2 matrix with an existing inverse, ideal for quickly checking the adjugate and determinant rule.",
        faqTitle: "Frequently asked questions",
        faq: [
          {
            question: "Does every square matrix have an inverse?",
            answer:
              "No. A matrix has an inverse only when its determinant is different from zero.",
          },
          {
            question: "Does the calculator show when a matrix is not invertible?",
            answer:
              "Yes. If the matrix is singular, the page explains that the inverse cannot be calculated.",
          },
        ],
      },
      es: {
        introTitle: "Cómo usar la calculadora de matriz inversa",
        intro:
          "Usa esta página para verificar si una matriz cuadrada tiene inversa y calcular el resultado paso a paso. Es útil para álgebra lineal, resolución de sistemas y comprobación de ejercicios.",
        stepsTitle: "Pasos recomendados",
        steps: [
          "Escribe una matriz cuadrada en la matriz A.",
          "Revisa que los valores estén correctos antes de calcular.",
          "Consulta la inversa y sigue la validación mediante el determinante.",
        ],
        exampleTitle: "Ejemplo cargado",
        example:
          "El ejemplo inicial usa una matriz 2 x 2 con inversa existente, ideal para comprobar rápidamente la regla de la adjunta y el determinante.",
        faqTitle: "Preguntas frecuentes",
        faq: [
          {
            question: "¿Toda matriz cuadrada tiene inversa?",
            answer:
              "No. Una matriz tiene inversa solo cuando su determinante es distinto de cero.",
          },
          {
            question: "¿La calculadora indica si la matriz no es invertible?",
            answer:
              "Sí. Si la matriz es singular, la página informa que la inversa no se puede calcular.",
          },
        ],
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
    content: {
      "pt-BR": {
        introTitle: "Como usar a calculadora de escalonamento",
        intro:
          "Esta página aplica eliminação de Gauss para transformar a matriz em uma forma escalonada. Ela é indicada para estudar pivôs, operações elementares de linha e simplificação de matrizes.",
        stepsTitle: "Passos recomendados",
        steps: [
          "Digite a matriz que deseja escalonar.",
          "Mantenha as dimensões adequadas ao seu exercício.",
          "Calcule e acompanhe cada operação de linha usada para criar zeros abaixo dos pivôs.",
        ],
        exampleTitle: "Exemplo carregado",
        example:
          "O exemplo inicial usa uma matriz 3 x 3, boa para observar trocas, múltiplos de linhas e formação da matriz escalonada.",
        faqTitle: "Perguntas frequentes",
        faq: [
          {
            question: "O escalonamento muda a solução de um sistema?",
            answer:
              "Não quando são usadas operações elementares válidas de linha. Elas preservam o conjunto de soluções.",
          },
          {
            question: "A calculadora mostra as operações de linha?",
            answer:
              "Sim. O passo a passo registra as etapas usadas para chegar à forma escalonada.",
          },
        ],
      },
      en: {
        introTitle: "How to use the row echelon calculator",
        intro:
          "This page applies Gaussian elimination to transform a matrix into row echelon form. It is useful for studying pivots, elementary row operations and matrix simplification.",
        stepsTitle: "Recommended steps",
        steps: [
          "Enter the matrix you want to reduce.",
          "Keep the dimensions aligned with your exercise.",
          "Calculate and follow each row operation used to create zeros below the pivots.",
        ],
        exampleTitle: "Loaded example",
        example:
          "The initial example uses a 3 by 3 matrix, helpful for observing row swaps, row multiples and the echelon form.",
        faqTitle: "Frequently asked questions",
        faq: [
          {
            question: "Does row reduction change the solution of a system?",
            answer:
              "Not when valid elementary row operations are used. They preserve the solution set.",
          },
          {
            question: "Does the calculator show the row operations?",
            answer:
              "Yes. The step-by-step output records the operations used to reach echelon form.",
          },
        ],
      },
      es: {
        introTitle: "Cómo usar la calculadora de escalonamiento",
        intro:
          "Esta página aplica eliminación de Gauss para transformar la matriz en forma escalonada. Es útil para estudiar pivotes, operaciones elementales de fila y simplificación de matrices.",
        stepsTitle: "Pasos recomendados",
        steps: [
          "Escribe la matriz que quieres escalonar.",
          "Mantén las dimensiones adecuadas para tu ejercicio.",
          "Calcula y sigue cada operación de fila usada para crear ceros debajo de los pivotes.",
        ],
        exampleTitle: "Ejemplo cargado",
        example:
          "El ejemplo inicial usa una matriz 3 x 3, útil para observar intercambios, múltiplos de filas y formación de la matriz escalonada.",
        faqTitle: "Preguntas frecuentes",
        faq: [
          {
            question: "¿El escalonamiento cambia la solución de un sistema?",
            answer:
              "No cuando se usan operaciones elementales válidas de fila. Conservan el conjunto de soluciones.",
          },
          {
            question: "¿La calculadora muestra las operaciones de fila?",
            answer:
              "Sí. El paso a paso registra las etapas usadas para llegar a la forma escalonada.",
          },
        ],
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
    content: {
      "pt-BR": {
        introTitle: "Como usar a calculadora de multiplicação de matrizes",
        intro:
          "Esta página calcula o produto A x B usando a regra linha por coluna. Ela ajuda a verificar dimensões compatíveis, entender cada elemento do resultado e evitar erros comuns em exercícios.",
        stepsTitle: "Passos recomendados",
        steps: [
          "Informe a matriz A e a matriz B.",
          "Confira se o número de colunas de A é igual ao número de linhas de B.",
          "Calcule para ver cada soma de produtos que forma a matriz final.",
        ],
        exampleTitle: "Exemplo carregado",
        example:
          "O exemplo inicial multiplica uma matriz 2 x 3 por uma matriz 3 x 2, mostrando um caso clássico em que o resultado é uma matriz 2 x 2.",
        faqTitle: "Perguntas frequentes",
        faq: [
          {
            question: "Posso multiplicar matrizes de qualquer dimensão?",
            answer:
              "Não. Para A x B, o número de colunas de A precisa ser igual ao número de linhas de B.",
          },
          {
            question: "A ordem das matrizes importa?",
            answer:
              "Sim. Em geral, A x B é diferente de B x A, e às vezes uma das ordens nem é possível.",
          },
        ],
      },
      en: {
        introTitle: "How to use the matrix multiplication calculator",
        intro:
          "This page calculates A x B using the row-by-column rule. It helps you check compatible dimensions, understand each result entry and avoid common exercise mistakes.",
        stepsTitle: "Recommended steps",
        steps: [
          "Enter matrix A and matrix B.",
          "Check that the number of columns in A equals the number of rows in B.",
          "Calculate to see each sum of products that forms the final matrix.",
        ],
        exampleTitle: "Loaded example",
        example:
          "The initial example multiplies a 2 by 3 matrix by a 3 by 2 matrix, a classic case where the result is a 2 by 2 matrix.",
        faqTitle: "Frequently asked questions",
        faq: [
          {
            question: "Can I multiply matrices of any dimensions?",
            answer:
              "No. For A x B, the number of columns in A must equal the number of rows in B.",
          },
          {
            question: "Does the order of the matrices matter?",
            answer:
              "Yes. In general, A x B is different from B x A, and sometimes one order is not possible.",
          },
        ],
      },
      es: {
        introTitle: "Cómo usar la calculadora de multiplicación de matrices",
        intro:
          "Esta página calcula el producto A x B usando la regla fila por columna. Ayuda a verificar dimensiones compatibles, entender cada elemento del resultado y evitar errores comunes en ejercicios.",
        stepsTitle: "Pasos recomendados",
        steps: [
          "Ingresa la matriz A y la matriz B.",
          "Comprueba que el número de columnas de A sea igual al número de filas de B.",
          "Calcula para ver cada suma de productos que forma la matriz final.",
        ],
        exampleTitle: "Ejemplo cargado",
        example:
          "El ejemplo inicial multiplica una matriz 2 x 3 por una matriz 3 x 2, un caso clásico en el que el resultado es una matriz 2 x 2.",
        faqTitle: "Preguntas frecuentes",
        faq: [
          {
            question: "¿Puedo multiplicar matrices de cualquier dimensión?",
            answer:
              "No. Para A x B, el número de columnas de A debe ser igual al número de filas de B.",
          },
          {
            question: "¿Importa el orden de las matrices?",
            answer:
              "Sí. En general, A x B es diferente de B x A, y a veces uno de los órdenes ni siquiera es posible.",
          },
        ],
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
    content: {
      "pt-BR": {
        introTitle: "Como usar a calculadora de sistemas lineares",
        intro:
          "Esta página resolve sistemas lineares a partir da matriz aumentada. Ela organiza os coeficientes e os termos independentes para aplicar escalonamento de Gauss com acompanhamento das etapas.",
        stepsTitle: "Passos recomendados",
        steps: [
          "Monte a matriz aumentada com os coeficientes e a última coluna dos resultados.",
          "Use uma linha para cada equação do sistema.",
          "Calcule para acompanhar o escalonamento e interpretar a solução.",
        ],
        exampleTitle: "Exemplo carregado",
        example:
          "O exemplo inicial representa um sistema 3 x 3 em matriz aumentada 3 x 4, formato comum para resolver por eliminação de Gauss.",
        faqTitle: "Perguntas frequentes",
        faq: [
          {
            question: "Como coloco o termo independente do sistema?",
            answer:
              "Digite os termos independentes na última coluna da matriz aumentada.",
          },
          {
            question: "A calculadora serve para sistemas com três incógnitas?",
            answer:
              "Sim. O exemplo carregado já mostra um sistema com três equações e três incógnitas.",
          },
        ],
      },
      en: {
        introTitle: "How to use the linear systems calculator",
        intro:
          "This page solves linear systems from the augmented matrix. It organizes coefficients and constants so Gaussian elimination can be applied with step-by-step output.",
        stepsTitle: "Recommended steps",
        steps: [
          "Build the augmented matrix with coefficients and the constants in the last column.",
          "Use one row for each equation in the system.",
          "Calculate to follow the elimination process and interpret the solution.",
        ],
        exampleTitle: "Loaded example",
        example:
          "The initial example represents a 3 by 3 system as a 3 by 4 augmented matrix, a common format for Gaussian elimination.",
        faqTitle: "Frequently asked questions",
        faq: [
          {
            question: "Where do I enter the constant term of the system?",
            answer:
              "Enter the constants in the last column of the augmented matrix.",
          },
          {
            question: "Can the calculator handle systems with three unknowns?",
            answer:
              "Yes. The loaded example already shows a system with three equations and three unknowns.",
          },
        ],
      },
      es: {
        introTitle: "Cómo usar la calculadora de sistemas lineales",
        intro:
          "Esta página resuelve sistemas lineales a partir de la matriz aumentada. Organiza los coeficientes y los términos independientes para aplicar eliminación de Gauss con seguimiento de las etapas.",
        stepsTitle: "Pasos recomendados",
        steps: [
          "Construye la matriz aumentada con los coeficientes y la última columna de resultados.",
          "Usa una fila para cada ecuación del sistema.",
          "Calcula para seguir el escalonamiento e interpretar la solución.",
        ],
        exampleTitle: "Ejemplo cargado",
        example:
          "El ejemplo inicial representa un sistema 3 x 3 en una matriz aumentada 3 x 4, formato común para resolver por eliminación de Gauss.",
        faqTitle: "Preguntas frecuentes",
        faq: [
          {
            question: "¿Dónde escribo el término independiente del sistema?",
            answer:
              "Escribe los términos independientes en la última columna de la matriz aumentada.",
          },
          {
            question: "¿La calculadora sirve para sistemas con tres incógnitas?",
            answer:
              "Sí. El ejemplo cargado ya muestra un sistema con tres ecuaciones y tres incógnitas.",
          },
        ],
      },
    },
  },
];

export const calculatorPagesByPath = Object.fromEntries(
  calculatorPages.map((page) => [page.path, page]),
);

export const getCalculatorPageCopy = (page, language = "pt-BR") =>
  page?.copy?.[language] || page?.copy?.["pt-BR"] || null;

export const getCalculatorPageContent = (page, language = "pt-BR") =>
  page?.content?.[language] || page?.content?.["pt-BR"] || null;

export const getCalculatorPageByOperation = (operation) =>
  calculatorPages.find((page) => page.operation === operation);

export const getCalculatorPageByTutorialSlug = (slug) =>
  calculatorPages.find(
    (page) =>
      page.tutorialSlug === slug || page.relatedTutorialSlugs?.includes(slug),
  );
