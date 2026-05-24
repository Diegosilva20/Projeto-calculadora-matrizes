export const defaultLanguage = "pt-BR";

export const supportedLanguages = [
  { code: "pt-BR", label: "Português", shortLabel: "PT" },
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "es", label: "Español", shortLabel: "ES" },
];

export const translations = {
  "pt-BR": {
    language: {
      select: "Selecionar idioma",
    },
    nav: {
      tutorials: "Tutoriais",
      about: "Sobre",
      contact: "Contato",
    },
    header: {
      calculator: "Calculadora",
      homeAria: "Ir para a calculadora",
      mainNav: "Navegação principal",
      mobileNav: "Navegação mobile",
      openMenu: "Abrir menu de navegação",
      closeMenu: "Fechar menu de navegação",
      activateLight: "Ativar modo claro",
      activateDark: "Ativar modo escuro",
    },
    footer: {
      rights: "© 2026 MatrizCalculator. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso",
    },
    cookie: {
      accept: "Aceitar",
      decline: "Recusar",
      text: "Usamos cookies para melhorar sua experiência.",
      learnMore: "Saiba mais",
    },
    common: {
      readTutorial: "Ler tutorial: {{title}}",
      startTutorial: "Começar por {{title}}",
      backToCalculator: "Voltar para a Calculadora",
      matrixCalculator: "Calculadora de matrizes",
      matrixTutorials: "Tutoriais de matrizes",
    },
    home: {
      metaTitle: "Calculadora de Matrizes Online Grátis | Passo a Passo",
      metaDescription:
        "Use a calculadora de matrizes gratuita para resolver determinante, inversa, multiplicação, transposta e Gauss com frações exatas, passo a passo e tutoriais.",
      heroTitle: "Calculadora de Matrizes Online Gratuita",
      heroDescription:
        "Resolva soma, multiplicação, determinante, inversa, transposta e escalonamento de matrizes com resultados passo a passo, frações exatas, exemplos resolvidos e tutoriais explicados.",
      structuredFeatureList:
        "Calculadora de matrizes gratuita, resultados passo a passo, frações exatas, exemplos resolvidos, tutoriais explicados, determinante, matriz inversa, multiplicação de matrizes, escalonamento de matrizes e sistemas lineares",
      structuredGaussQuestion: "Como ver o escalonamento de uma matriz?",
      structuredGaussAnswer:
        "Selecione a operação Eliminação de Gauss, insira os valores da matriz e a calculadora exibirá as etapas do escalonamento até chegar à forma escalonada.",
      structuredInverseQuestion: "Como calcular matriz inversa online?",
      structuredInverseAnswer:
        "Selecione a operação Inversa de A, preencha uma matriz quadrada e clique em calcular. A ferramenta valida se a matriz é invertível e mostra o resultado.",
      operationPrompt: "O que você deseja calcular?",
      sizeA: "Tamanho da Matriz A",
      sizeB: "Tamanho da Matriz B",
      rowsAria: "{{label}} - linhas",
      colsAria: "{{label}} - colunas",
      scalar: "Escalar",
      calculating: "Calculando...",
      calculateNow: "Calcular Agora",
      clearData: "Limpar Dados",
      tutorialHint: "Dúvida no cálculo?",
      tutorialHintLink: "Ver tutorial de {{operation}}",
      stepByStepTitle: "Resolução Passo a Passo",
      recommendedEyebrow: "Tutoriais recomendados",
      recommendedTitle: "Comece pelos guias mais importantes",
      recommendedDescription:
        "Reforce o estudo com exemplos resolvidos e tutoriais explicados sobre os cálculos mais usados em matrizes.",
      allTutorials: "Ver todos os tutoriais",
    },
    calculator: {
      result: "Resultado",
      emptyPlaceholder: "·",
      matrixElementAria:
        "Elemento da {{label}} na linha {{row}}, coluna {{col}}",
      operations: {
        soma: "Soma (A + B)",
        subtracao: "Subtração (A - B)",
        multiplicacao: "Multiplicação (A x B)",
        determinanteA: "Determinante de A",
        inversa: "Inversa de A",
        transposicao: "Transposição de A",
        escalar: "Multiplicação por Escalar",
        gauss: "Eliminação de Gauss (Escalonamento)",
      },
      operationNames: {
        soma: "soma de matrizes",
        subtracao: "subtração de matrizes",
        inversa: "matriz inversa",
        gauss: "escalonamento de matrizes por Gauss",
        determinanteA: "determinante de matrizes",
        multiplicacao: "multiplicação de matrizes",
        transposicao: "matriz transposta",
        escalar: "multiplicação por escalar",
      },
      labels: {
        matrixA: "Matriz A",
        matrixB: "Matriz B",
      },
    },
    calculation: {
      errors: {
        invalidResult: "O resultado não é uma matriz válida",
        sameSizeAdd: "As matrizes devem ter o mesmo tamanho para a soma.",
        sameSizeSubtract:
          "As matrizes devem ter o mesmo tamanho para a subtração.",
        multiplicationDimensions:
          "O número de colunas da Matriz A deve ser igual ao número de linhas da Matriz B.",
        multiplicationDimensionsDetailed:
          "Erro: O número de colunas da Matriz A deve ser igual ao número de linhas da Matriz B para multiplicação.",
        squareInverse:
          "Erro: A inversa só pode ser calculada para matrizes quadradas.",
        squareDeterminant:
          "Erro: O determinante só pode ser calculado para matrizes quadradas.",
        squareInverseShort:
          "A inversa só pode ser calculada para matrizes quadradas.",
        squareDeterminantShort:
          "O determinante só pode ser calculado para matrizes quadradas.",
        singular: "A matriz não é invertível (determinante igual a zero).",
        scalarInvalid: "Insira um número válido para o escalar.",
        invalidMatrix:
          "Por favor, insira apenas números válidos nas matrizes.",
        unknownOperation: "Operação desconhecida.",
        generic:
          "Erro: {{message}}",
        fallback:
          "Verifique os valores de entrada e tente novamente.",
      },
      operationNames: {
        addition: "soma de matrizes",
        subtraction: "subtração de matrizes",
      },
      steps: {
        elementTitle: "Elemento C{{row}}{{col}}",
        dimensionCheckTitle: "Verificação das dimensões",
        dimensionCheckDescription:
          "A tem {{rowsA}}x{{colsA}} e B tem {{rowsB}}x{{colsB}}. Como {{colsA}} = {{rowsB}}, a multiplicação existe e o resultado terá {{rowsA}}x{{colsB}}.",
        multiplicationElementDescription:
          "Linha {{row}} de A x coluna {{col}} de B: {{terms}} = {{products}} = {{result}}.",
        transposeDimensionTitle: "Troca de dimensões",
        transposeDimensionDescription:
          "A matriz original tem {{rowsA}}x{{colsA}}. A transposta terá {{colsA}}x{{rowsA}}, porque linhas viram colunas.",
        transposeElementTitle: "Elemento A{{row}}{{col}}",
        transposeElementDescription:
          "O valor {{value}}, que estava na posição ({{row}}, {{col}}), vai para a posição ({{targetRow}}, {{targetCol}}) na transposta.",
        elementWiseTitle: "Cálculo elemento a elemento",
        elementWiseDescription:
          "Na {{operationName}}, cada posição da resposta usa os valores da mesma posição em A e B.",
        elementWiseElementDescription:
          "Posição ({{row}}, {{col}}): {{aValue}} {{symbol}} {{bValue}} = {{result}}.",
        scalarTitle: "Multiplicação por escalar",
        scalarDescription:
          "Cada elemento da matriz A será multiplicado pelo escalar {{scalar}}.",
        scalarElementDescription:
          "Posição ({{row}}, {{col}}): {{scalar}} x {{value}} = {{result}}.",
        matrix1x1Title: "Matriz 1x1",
        matrix1x1Description:
          "O determinante de uma matriz 1x1 é o próprio elemento: det(A) = {{value}}.",
        formula2x2Title: "Fórmula 2x2",
        formula2x2Description:
          "Para uma matriz 2x2, usamos det(A) = (a x d) - (b x c).",
        mainDiagonalTitle: "Diagonal principal",
        secondaryDiagonalTitle: "Diagonal secundária",
        determinantResultTitle: "Resultado",
        determinantResultDescription:
          "det(A) = {{mainDiagonal}} - ({{secondaryDiagonal}}) = {{value}}.",
        sarrusTitle: "Regra de Sarrus",
        sarrusDescription:
          "Para matriz 3x3, somamos as diagonais que descem e subtraímos as diagonais que sobem.",
        mainDiagonalsTitle: "Diagonais principais",
        secondaryDiagonalsTitle: "Diagonais secundárias",
        determinantInitialTitle: "Matriz inicial",
        determinantInitialDescription:
          "Para calcular det(A) em uma matriz {{size}}x{{size}}, transformamos A em matriz triangular superior. Operações do tipo Lk -> Lk - m x Li não mudam o determinante.",
        noPivotColumnTitle: "Coluna sem pivô",
        noPivotColumnDescription:
          "Não há pivô não nulo na coluna {{col}}. A matriz fica com uma diagonal nula, então det(A) = 0.",
        swapRowsTitle: "Troca de linhas",
        determinantSwapRowsDescription:
          "Trocamos L{{rowA}} com L{{rowB}}. Cada troca de linhas muda o sinal do determinante.",
        zeroCellTitle: "Zerar A{{row}}{{col}}",
        zeroCellDescription:
          "Usamos L{{row}} -> L{{row}} - ({{factor}}) x L{{pivotRow}}. Essa operação cria zero abaixo do pivô e mantém o determinante.",
        multiplyDiagonalTitle: "Multiplicar a diagonal",
        multiplyDiagonalDescription:
          "Como a matriz está triangular, det(A) = {{sign}}{{diagonal}} = {{product}}. Resultado final: det(A) = {{value}}.",
        verifyDeterminantTitle: "Verificar determinante",
        inverseVerifyDescription:
          "A matriz é quadrada e det(A) = {{determinant}}. Como o determinante é diferente de zero, a inversa existe.",
        augmentedTitle: "Montar [A | I]",
        augmentedDescription:
          "Colocamos a matriz A à esquerda e a matriz identidade à direita. O objetivo é transformar o lado esquerdo em identidade.",
        pivotNotFoundTitle: "Pivô não encontrado",
        pivotNotFoundDescription:
          "Não foi possível encontrar um pivô não nulo nesta coluna. Confira se a matriz é invertível.",
        inverseSwapRowsDescription:
          "Trocamos L{{rowA}} com L{{rowB}} para colocar um pivô não nulo na posição ({{positionRow}}, {{positionCol}}).",
        normalizePivotTitle: "Normalizar pivô {{pivot}}",
        normalizePivotDescription:
          "Dividimos L{{row}} por {{value}} para transformar o pivô em 1.",
        zeroColumnTitle: "Zerar coluna {{col}}",
        zeroColumnDescription:
          "Usamos L{{row}} -> L{{row}} - ({{factor}}) x L{{pivotRow}} para criar zero fora do pivô.",
        readInverseTitle: "Ler a inversa",
        readInverseDescription:
          "Quando o lado esquerdo vira identidade, o lado direito é a matriz inversa A^-1.",
        inverse2x2VerifyDescription:
          "det(A) = ({{a}} x {{d}}) - ({{b}} x {{c}}) = {{determinant}}. Como é diferente de zero, a inversa existe.",
        swapAndSignsTitle: "Trocar e inverter sinais",
        swapAndSignsDescription:
          "Trocamos os elementos da diagonal principal e invertemos o sinal dos outros dois elementos.",
        multiplyByDetTitle: "Multiplicar por 1/det(A)",
        multiplyByDetDescription:
          "Agora multiplicamos todos os elementos por 1/{{determinant}}.",
        inverseResultDescription: "Esta é a matriz inversa A^-1.",
        gaussianOriginalTitle: "Matriz Original",
        gaussianAlreadyEchelon:
          "A matriz já se encontra na forma escalonada.",
        gaussianInitialTitle: "Matriz Inicial",
        gaussianInitialDescription: "Configuração original da matriz.",
        gaussianSwapRowsTitle: "Troca de Linhas",
        gaussianSwapRowsDescription:
          "L{{rowA}} <-> L{{rowB}} para evitar pivô zero.",
        gaussianPivotTitle: "Pivô (Linha {{row}})",
        gaussianPivotDescription: "L{{row}} -> L{{row}} ÷ ({{factor}})",
        gaussianEliminationTitle: "Eliminação (Linha {{row}})",
        gaussianEliminationDescription:
          "L{{row}} -> L{{row}} - ({{factor}}) x L{{pivotRow}}",
      },
    },
    pages: {
      about: {
        metaTitle:
          "Sobre o Matrizes+: Calculadora e Tutoriais de Álgebra Linear",
        metaDescription:
          "Conheça a missão do Matrizes+: simplificar a Álgebra Linear com uma calculadora de matrizes poderosa e tutoriais didáticos para todos.",
        title: "Nossa Missão: Descomplicar a Álgebra Linear",
        description:
          "Acreditamos que a matemática pode ser acessível. Por isso, criamos uma plataforma que une ferramentas práticas e aprendizado teórico de forma simples e gratuita.",
        pillars: [
          {
            title: "Uma Calculadora Direto ao Ponto",
            description:
              "Resolva desde somas simples até inversões complexas em uma interface prática, responsiva e pensada para estudar sem atrito.",
            action: "Usar a Calculadora",
            to: "/",
          },
          {
            title: "Tutoriais Para Descomplicar",
            description:
              "Aprenda a teoria por trás dos cálculos com guias passo a passo, exemplos claros e conexão direta com as operações da calculadora.",
            action: "Ver Tutoriais",
            to: "/tutorials",
          },
        ],
        nextTitle: "Próximos Passos & Contato",
        nextTextBefore:
          "Estamos sempre trabalhando para adicionar novas funcionalidades e aprofundar nosso conteúdo. Se tiver sugestões, dúvidas ou encontrar algum erro,",
        nextLink: "entre em contato",
        nextTextAfter: ".",
      },
      contact: {
        metaTitle: "Contato - Matrizes+",
        metaDescription:
          "Entre em contato com a equipe Matrizes+ para enviar sugestões, reportar erros ou tirar dúvidas.",
        title: "Fale Conosco",
        description:
          "Sua opinião é fundamental para o crescimento do Matrizes+. Use este canal para enviar sugestões, dúvidas ou relatos de erro.",
        topics: [
          {
            title: "Encontrou um Erro?",
            description:
              "Seja um erro de cálculo ou um bug no site, seu feedback ajuda a manter a plataforma precisa e confiável.",
          },
          {
            title: "Tem uma Sugestão?",
            description:
              "Gostaria de uma nova funcionalidade na calculadora ou um novo tópico de tutorial? Adoramos ouvir boas ideias.",
          },
          {
            title: "Outras Dúvidas",
            description:
              "Para parcerias, feedback geral ou qualquer outra questão, envie uma mensagem pelo nosso canal de contato.",
          },
        ],
        channelTitle: "Nosso Canal de Comunicação",
        channelDescription:
          "Para todas as comunicações, envie sua mensagem para o e-mail abaixo. Faremos o possível para responder o mais rápido possível.",
      },
      notFound: {
        metaTitle: "Página não encontrada | Matriz Calculator",
        metaDescription:
          "A página solicitada não foi encontrada. Volte para a calculadora de matrizes ou explore os tutoriais de álgebra linear.",
        title: "Página não encontrada",
        description: "O conteúdo que você procura não existe ou foi movido.",
      },
      legal: {
        updatedAt: "Última atualização: 12 de Setembro de 2025",
        privacyTitle: "Política de Privacidade",
        privacyMetaDescription:
          "Saiba como o Matrizes+ coleta, usa e protege suas informações.",
        termsTitle: "Termos e Condições de Uso",
        termsMetaTitle: "Termos de Uso - Matrizes+",
        termsMetaDescription:
          "Conheça os termos e condições de uso do Matrizes+, seu site para cálculos e aprendizado de álgebra linear.",
      },
    },
    tutorials: {
      page: {
        metaTitle:
          "Tutoriais de Matrizes com Exemplos Resolvidos | Matriz Calculator",
        metaDescription:
          "Aprenda matrizes com tutoriais passo a passo, exemplos resolvidos, fórmulas e links para calculadora de determinante, inversa, multiplicação e Gauss.",
        title: "Catálogo de Tutoriais de Álgebra Linear",
        description:
          "Explore guias com fórmulas, exemplos resolvidos e links para a calculadora de matrizes passo a passo.",
        recommendedTitle: "🚀 Comece por Aqui: Sequência Recomendada",
        recommendedDescription:
          "Siga esta ordem para aprender álgebra linear do zero até conceitos avançados. Cada tutorial prepara você para o próximo.",
        otherTitle: "Outros tutoriais",
        otherDescription: "Conteúdos complementares do catálogo.",
      },
      unavailable: {
        title: "Tutoriais disponíveis em português",
        description:
          "Para manter a qualidade do conteúdo, os tutoriais completos ainda são exibidos apenas em português. A calculadora continua disponível no idioma escolhido.",
        switchLanguage: "Ver tutoriais em português",
        useCalculator: "Usar calculadora",
      },
      categories: [
        {
          title: "Operações básicas",
          description:
            "Conceitos iniciais para entender como matrizes mudam elemento por elemento.",
        },
        {
          title: "Operações intermediárias",
          description:
            "Guias para cálculos mais frequentes em exercícios de álgebra linear.",
        },
        {
          title: "Sistemas e métodos",
          description:
            "Métodos para escalonar matrizes e interpretar sistemas lineares.",
        },
      ],
      info: {
        "determinante-de-matrizes": {
          title: "Determinante de Matrizes: Fórmula e Passo a Passo",
          description:
            "Aprenda a calcular determinante de matriz 2x2, 3x3 e maiores com fórmula, exemplo resolvido e apoio da calculadora.",
        },
        "matriz-inversa": {
          title: "Matriz Inversa: Fórmula e Exemplo Resolvido",
          description:
            "Veja quando a matriz inversa existe, use a fórmula 2x2 e acompanhe o passo a passo com frações exatas na calculadora.",
        },
        "escalonamento-gauss": {
          title: "Escalonamento de Matrizes por Gauss Passo a Passo",
          description:
            "Entenda pivôs, operações de linha e zeros abaixo da diagonal com exemplo resolvido e calculadora de matriz escalonada.",
        },
        "matriz-transposta": {
          title: "Matriz Transposta: Fórmula e Exemplo Resolvido",
          description:
            "Aprenda a trocar linhas por colunas, veja a fórmula da transposta e confira o resultado passo a passo na calculadora.",
        },
        "multiplicacao-de-matrizes": {
          title: "Multiplicação de Matrizes Passo a Passo",
          description:
            "Entenda a regra linha por coluna, veja exemplo resolvido de multiplicação de matrizes e confira cada etapa na calculadora.",
        },
        "sistemas-lineares": {
          title: "Sistemas Lineares com Matrizes: Passo a Passo",
          description:
            "Aprenda a montar a matriz aumentada, usar escalonamento de Gauss e resolver sistemas lineares com exemplo resolvido.",
        },
        "soma-de-matrizes": {
          title: "Soma de Matrizes: Regra e Exemplo Resolvido",
          description:
            "Veja quando duas matrizes podem ser somadas, aplique a regra posição por posição e pratique com a calculadora passo a passo.",
        },
        "subtracao-de-matrizes": {
          title: "Subtração de Matrizes: Regra e Exemplo Resolvido",
          description:
            "Entenda como subtrair matrizes de mesmo tamanho, cuide dos sinais e acompanhe um exemplo resolvido passo a passo.",
        },
        "multiplicacao-por-escalar": {
          title: "Multiplicação de Matriz por Escalar Passo a Passo",
          description:
            "Veja a fórmula para multiplicar uma matriz por escalar e acompanhe o cálculo de cada elemento com exemplo resolvido.",
        },
        "determinante-3x3-regra-de-sarrus": {
          title: "Determinante 3x3 pela Regra de Sarrus",
          description:
            "Aprenda a fórmula da Regra de Sarrus, monte as diagonais da matriz 3x3 e veja um exemplo resolvido passo a passo.",
        },
        "o-que-e-uma-matriz": {
          title: "O que é uma Matriz? Definição e Exemplos",
          description:
            "Entenda linhas, colunas, ordem da matriz e notação com exemplos resolvidos antes de usar a calculadora de matrizes.",
        },
        "matriz-identidade": {
          title: "Matriz Identidade: Definição, Fórmula e Exemplo",
          description:
            "Veja como é a matriz identidade, por que A × I = A e como ela aparece em matriz inversa, Gauss e sistemas lineares.",
        },
        "determinante-2x2": {
          title: "Determinante 2x2: Fórmula e Exemplo Resolvido",
          description:
            "Aprenda a calcular determinante de matriz 2x2 com fórmula, diagonais, sinais negativos e exemplo resolvido passo a passo.",
        },
        "regra-de-cramer": {
          title: "Regra de Cramer: Como Resolver Sistemas Lineares com Determinantes",
          description:
            "Aprenda a usar a Regra de Cramer em sistemas 2x2 e 3x3, entendendo D, Dx, Dy e quando usar determinantes para resolver incógnitas.",
        },
        "posto-de-matriz": {
          title: "Posto de Matriz: Como Calcular pelo Escalonamento",
          description:
            "Aprenda a encontrar o posto de uma matriz com escalonamento, contando as linhas não nulas e entendendo a relação com determinante e matriz inversa.",
        },
      },
    },
    tutorialPage: {
      defaultTitle: "Tutorial de Operações com Matrizes | Matriz Calculator",
      defaultDescription:
        "Aprenda passo a passo como realizar cálculos complexos com matrizes de forma simples e rápida.",
      notFoundTitle: "Tutorial não encontrado",
      notFoundDescription: "O conteúdo que procura não existe ou foi movido.",
      notFoundMetaDescription:
        "O tutorial solicitado não foi encontrado. Volte para a calculadora de matrizes ou explore os guias disponíveis.",
      faqHeading: "Perguntas Frequentes",
      inLanguage: "pt-BR",
    },
  },
  en: {
    language: {
      select: "Select language",
    },
    nav: {
      tutorials: "Tutorials",
      about: "About",
      contact: "Contact",
    },
    header: {
      calculator: "Calculator",
      homeAria: "Go to the calculator",
      mainNav: "Main navigation",
      mobileNav: "Mobile navigation",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      activateLight: "Switch to light mode",
      activateDark: "Switch to dark mode",
    },
    footer: {
      rights: "© 2026 MatrizCalculator. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
    cookie: {
      accept: "Accept",
      decline: "Decline",
      text: "We use cookies to improve your experience.",
      learnMore: "Learn more",
    },
    common: {
      readTutorial: "Read tutorial: {{title}}",
      startTutorial: "Start with {{title}}",
      backToCalculator: "Back to the Calculator",
      matrixCalculator: "Matrix calculator",
      matrixTutorials: "Matrix tutorials",
    },
    home: {
      metaTitle: "Free Online Matrix Calculator | Step by Step",
      metaDescription:
        "Use the free matrix calculator to solve determinants, inverse matrices, multiplication, transposes and Gaussian elimination with exact fractions, steps and tutorials.",
      heroTitle: "Free Online Matrix Calculator",
      heroDescription:
        "Solve addition, multiplication, determinant, inverse, transpose and row echelon operations with step-by-step results, exact fractions, solved examples and tutorials.",
      structuredFeatureList:
        "Free matrix calculator, step-by-step results, exact fractions, solved examples, explained tutorials, determinant, inverse matrix, matrix multiplication, row echelon form and linear systems",
      structuredGaussQuestion: "How do I see the row echelon steps?",
      structuredGaussAnswer:
        "Select Gaussian Elimination, enter the matrix values and the calculator will show each row-reduction step until the echelon form is reached.",
      structuredInverseQuestion: "How do I calculate an inverse matrix online?",
      structuredInverseAnswer:
        "Select Inverse of A, fill in a square matrix and click calculate. The tool checks whether the matrix is invertible and shows the result.",
      operationPrompt: "What do you want to calculate?",
      sizeA: "Matrix A size",
      sizeB: "Matrix B size",
      rowsAria: "{{label}} - rows",
      colsAria: "{{label}} - columns",
      scalar: "Scalar",
      calculating: "Calculating...",
      calculateNow: "Calculate Now",
      clearData: "Clear Data",
      tutorialHint: "Need help with this calculation?",
      tutorialHintLink: "View tutorial for {{operation}}",
      stepByStepTitle: "Step-by-Step Solution",
      recommendedEyebrow: "Recommended tutorials",
      recommendedTitle: "Start with the most important guides",
      recommendedDescription:
        "Strengthen your study with solved examples and explained tutorials for the most common matrix calculations.",
      allTutorials: "View all tutorials",
    },
    calculator: {
      result: "Result",
      emptyPlaceholder: "·",
      matrixElementAria:
        "{{label}} element at row {{row}}, column {{col}}",
      operations: {
        soma: "Addition (A + B)",
        subtracao: "Subtraction (A - B)",
        multiplicacao: "Multiplication (A x B)",
        determinanteA: "Determinant of A",
        inversa: "Inverse of A",
        transposicao: "Transpose of A",
        escalar: "Scalar Multiplication",
        gauss: "Gaussian Elimination (Echelon Form)",
      },
      operationNames: {
        soma: "matrix addition",
        subtracao: "matrix subtraction",
        inversa: "inverse matrix",
        gauss: "Gaussian row reduction",
        determinanteA: "matrix determinant",
        multiplicacao: "matrix multiplication",
        transposicao: "transpose matrix",
        escalar: "scalar multiplication",
      },
      labels: {
        matrixA: "Matrix A",
        matrixB: "Matrix B",
      },
    },
    calculation: {
      errors: {
        invalidResult: "The result is not a valid matrix",
        sameSizeAdd: "The matrices must have the same size for addition.",
        sameSizeSubtract:
          "The matrices must have the same size for subtraction.",
        multiplicationDimensions:
          "The number of columns in Matrix A must equal the number of rows in Matrix B.",
        multiplicationDimensionsDetailed:
          "Error: the number of columns in Matrix A must equal the number of rows in Matrix B for multiplication.",
        squareInverse:
          "Error: the inverse can only be calculated for square matrices.",
        squareDeterminant:
          "Error: the determinant can only be calculated for square matrices.",
        squareInverseShort:
          "The inverse can only be calculated for square matrices.",
        squareDeterminantShort:
          "The determinant can only be calculated for square matrices.",
        singular: "The matrix is not invertible (determinant equal to zero).",
        scalarInvalid: "Enter a valid number for the scalar.",
        invalidMatrix: "Please enter only valid numbers in the matrices.",
        unknownOperation: "Unknown operation.",
        generic: "Error: {{message}}",
        fallback: "Check the input values and try again.",
      },
      operationNames: {
        addition: "matrix addition",
        subtraction: "matrix subtraction",
      },
      steps: {
        elementTitle: "Element C{{row}}{{col}}",
        dimensionCheckTitle: "Dimension check",
        dimensionCheckDescription:
          "A is {{rowsA}}x{{colsA}} and B is {{rowsB}}x{{colsB}}. Since {{colsA}} = {{rowsB}}, multiplication exists and the result will be {{rowsA}}x{{colsB}}.",
        multiplicationElementDescription:
          "Row {{row}} of A x column {{col}} of B: {{terms}} = {{products}} = {{result}}.",
        transposeDimensionTitle: "Dimension swap",
        transposeDimensionDescription:
          "The original matrix is {{rowsA}}x{{colsA}}. The transpose will be {{colsA}}x{{rowsA}}, because rows become columns.",
        transposeElementTitle: "Element A{{row}}{{col}}",
        transposeElementDescription:
          "The value {{value}}, originally at position ({{row}}, {{col}}), moves to position ({{targetRow}}, {{targetCol}}) in the transpose.",
        elementWiseTitle: "Element-by-element calculation",
        elementWiseDescription:
          "In {{operationName}}, each result position uses the values from the same position in A and B.",
        elementWiseElementDescription:
          "Position ({{row}}, {{col}}): {{aValue}} {{symbol}} {{bValue}} = {{result}}.",
        scalarTitle: "Scalar multiplication",
        scalarDescription:
          "Each element of matrix A will be multiplied by the scalar {{scalar}}.",
        scalarElementDescription:
          "Position ({{row}}, {{col}}): {{scalar}} x {{value}} = {{result}}.",
        matrix1x1Title: "1x1 matrix",
        matrix1x1Description:
          "The determinant of a 1x1 matrix is the element itself: det(A) = {{value}}.",
        formula2x2Title: "2x2 formula",
        formula2x2Description:
          "For a 2x2 matrix, use det(A) = (a x d) - (b x c).",
        mainDiagonalTitle: "Main diagonal",
        secondaryDiagonalTitle: "Secondary diagonal",
        determinantResultTitle: "Result",
        determinantResultDescription:
          "det(A) = {{mainDiagonal}} - ({{secondaryDiagonal}}) = {{value}}.",
        sarrusTitle: "Sarrus' rule",
        sarrusDescription:
          "For a 3x3 matrix, add the downward diagonals and subtract the upward diagonals.",
        mainDiagonalsTitle: "Main diagonals",
        secondaryDiagonalsTitle: "Secondary diagonals",
        determinantInitialTitle: "Initial matrix",
        determinantInitialDescription:
          "To calculate det(A) for a {{size}}x{{size}} matrix, transform A into an upper triangular matrix. Operations like Lk -> Lk - m x Li do not change the determinant.",
        noPivotColumnTitle: "Column without pivot",
        noPivotColumnDescription:
          "There is no nonzero pivot in column {{col}}. The matrix gets a zero on the diagonal, so det(A) = 0.",
        swapRowsTitle: "Row swap",
        determinantSwapRowsDescription:
          "Swap L{{rowA}} with L{{rowB}}. Each row swap changes the determinant sign.",
        zeroCellTitle: "Zero A{{row}}{{col}}",
        zeroCellDescription:
          "Use L{{row}} -> L{{row}} - ({{factor}}) x L{{pivotRow}}. This operation creates a zero below the pivot and preserves the determinant.",
        multiplyDiagonalTitle: "Multiply the diagonal",
        multiplyDiagonalDescription:
          "Since the matrix is triangular, det(A) = {{sign}}{{diagonal}} = {{product}}. Final result: det(A) = {{value}}.",
        verifyDeterminantTitle: "Check determinant",
        inverseVerifyDescription:
          "The matrix is square and det(A) = {{determinant}}. Since the determinant is nonzero, the inverse exists.",
        augmentedTitle: "Build [A | I]",
        augmentedDescription:
          "Place matrix A on the left and the identity matrix on the right. The goal is to turn the left side into the identity matrix.",
        pivotNotFoundTitle: "Pivot not found",
        pivotNotFoundDescription:
          "Could not find a nonzero pivot in this column. Check whether the matrix is invertible.",
        inverseSwapRowsDescription:
          "Swap L{{rowA}} with L{{rowB}} to place a nonzero pivot at position ({{positionRow}}, {{positionCol}}).",
        normalizePivotTitle: "Normalize pivot {{pivot}}",
        normalizePivotDescription:
          "Divide L{{row}} by {{value}} to turn the pivot into 1.",
        zeroColumnTitle: "Zero column {{col}}",
        zeroColumnDescription:
          "Use L{{row}} -> L{{row}} - ({{factor}}) x L{{pivotRow}} to create zero outside the pivot.",
        readInverseTitle: "Read the inverse",
        readInverseDescription:
          "When the left side becomes the identity, the right side is the inverse matrix A^-1.",
        inverse2x2VerifyDescription:
          "det(A) = ({{a}} x {{d}}) - ({{b}} x {{c}}) = {{determinant}}. Since it is nonzero, the inverse exists.",
        swapAndSignsTitle: "Swap and change signs",
        swapAndSignsDescription:
          "Swap the main diagonal elements and change the signs of the other two elements.",
        multiplyByDetTitle: "Multiply by 1/det(A)",
        multiplyByDetDescription:
          "Now multiply every element by 1/{{determinant}}.",
        inverseResultDescription: "This is the inverse matrix A^-1.",
        gaussianOriginalTitle: "Original Matrix",
        gaussianAlreadyEchelon:
          "The matrix is already in row echelon form.",
        gaussianInitialTitle: "Initial Matrix",
        gaussianInitialDescription: "Original matrix setup.",
        gaussianSwapRowsTitle: "Row Swap",
        gaussianSwapRowsDescription:
          "L{{rowA}} <-> L{{rowB}} to avoid a zero pivot.",
        gaussianPivotTitle: "Pivot (Row {{row}})",
        gaussianPivotDescription: "L{{row}} -> L{{row}} ÷ ({{factor}})",
        gaussianEliminationTitle: "Elimination (Row {{row}})",
        gaussianEliminationDescription:
          "L{{row}} -> L{{row}} - ({{factor}}) x L{{pivotRow}}",
      },
    },
    pages: {
      about: {
        metaTitle:
          "About Matrizes+: Matrix Calculator and Linear Algebra Tutorials",
        metaDescription:
          "Learn the mission behind Matrizes+: making linear algebra simpler with a powerful matrix calculator and clear tutorials.",
        title: "Our Mission: Make Linear Algebra Simpler",
        description:
          "We believe mathematics can be accessible. That is why we created a platform that combines practical tools and theoretical learning in a simple, free experience.",
        pillars: [
          {
            title: "A Straight-to-the-Point Calculator",
            description:
              "Solve anything from simple additions to complex inverses in a practical, responsive interface designed for frictionless study.",
            action: "Use the Calculator",
            to: "/",
          },
          {
            title: "Tutorials That Make It Clear",
            description:
              "Learn the theory behind the calculations with step-by-step guides, clear examples and direct links to calculator operations.",
            action: "View Tutorials",
            to: "/tutorials",
          },
        ],
        nextTitle: "Next Steps & Contact",
        nextTextBefore:
          "We are always working on new features and deeper content. If you have suggestions, questions or find an error,",
        nextLink: "contact us",
        nextTextAfter: ".",
      },
      contact: {
        metaTitle: "Contact - Matrizes+",
        metaDescription:
          "Contact the Matrizes+ team to send suggestions, report errors or ask questions.",
        title: "Contact Us",
        description:
          "Your feedback is essential to the growth of Matrizes+. Use this channel to send suggestions, questions or error reports.",
        topics: [
          {
            title: "Found an Error?",
            description:
              "Whether it is a calculation issue or a site bug, your feedback helps keep the platform accurate and reliable.",
          },
          {
            title: "Have a Suggestion?",
            description:
              "Would you like a new calculator feature or a new tutorial topic? We love hearing good ideas.",
          },
          {
            title: "Other Questions",
            description:
              "For partnerships, general feedback or anything else, send a message through our contact channel.",
          },
        ],
        channelTitle: "Our Communication Channel",
        channelDescription:
          "For all communications, send your message to the email below. We will do our best to reply as quickly as possible.",
      },
      notFound: {
        metaTitle: "Page not found | Matriz Calculator",
        metaDescription:
          "The requested page was not found. Return to the matrix calculator or explore the linear algebra tutorials.",
        title: "Page not found",
        description: "The content you are looking for does not exist or was moved.",
      },
      legal: {
        updatedAt: "Last updated: September 12, 2025",
        privacyTitle: "Privacy Policy",
        privacyMetaDescription:
          "Learn how Matrizes+ collects, uses and protects your information.",
        termsTitle: "Terms and Conditions of Use",
        termsMetaTitle: "Terms of Use - Matrizes+",
        termsMetaDescription:
          "Read the terms and conditions for using Matrizes+, your site for linear algebra calculations and learning.",
      },
    },
    tutorials: {
      page: {
        metaTitle:
          "Matrix Tutorials with Solved Examples | Matriz Calculator",
        metaDescription:
          "Learn matrices with step-by-step tutorials, solved examples, formulas and links to determinant, inverse, multiplication and Gauss calculators.",
        title: "Linear Algebra Tutorial Catalog",
        description:
          "Explore guides with formulas, solved examples and links to the step-by-step matrix calculator.",
        recommendedTitle: "🚀 Start Here: Recommended Sequence",
        recommendedDescription:
          "Follow this order to learn linear algebra from the basics to advanced ideas. Each tutorial prepares you for the next one.",
        otherTitle: "Other tutorials",
        otherDescription: "Complementary content from the catalog.",
      },
      unavailable: {
        title: "Tutorials are currently available in Portuguese",
        description:
          "To keep the learning material accurate and polished, full tutorials are shown in Portuguese for now. The calculator remains available in your selected language.",
        switchLanguage: "View tutorials in Portuguese",
        useCalculator: "Use calculator",
      },
      categories: [
        {
          title: "Basic operations",
          description:
            "Initial concepts for understanding how matrices change element by element.",
        },
        {
          title: "Intermediate operations",
          description:
            "Guides for the calculations most common in linear algebra exercises.",
        },
        {
          title: "Systems and methods",
          description:
            "Methods for reducing matrices and interpreting linear systems.",
        },
      ],
      info: {
        "determinante-de-matrizes": {
          title: "Matrix Determinants: Formula and Step by Step",
          description:
            "Learn how to calculate 2x2, 3x3 and larger determinants with formulas, solved examples and calculator support.",
        },
        "matriz-inversa": {
          title: "Inverse Matrix: Formula and Solved Example",
          description:
            "See when an inverse matrix exists, use the 2x2 formula and follow exact-fraction steps in the calculator.",
        },
        "escalonamento-gauss": {
          title: "Gaussian Elimination Step by Step",
          description:
            "Understand pivots, row operations and zeros below the diagonal with a solved example and echelon-form calculator.",
        },
        "matriz-transposta": {
          title: "Transpose Matrix: Formula and Solved Example",
          description:
            "Learn how rows become columns, see the transpose formula and check the step-by-step result in the calculator.",
        },
        "multiplicacao-de-matrizes": {
          title: "Matrix Multiplication Step by Step",
          description:
            "Understand the row-by-column rule, see a solved matrix multiplication example and follow each calculator step.",
        },
        "sistemas-lineares": {
          title: "Linear Systems with Matrices: Step by Step",
          description:
            "Learn how to build an augmented matrix, use Gaussian elimination and solve linear systems with a worked example.",
        },
        "soma-de-matrizes": {
          title: "Matrix Addition: Rule and Solved Example",
          description:
            "See when two matrices can be added, apply the position-by-position rule and practice with step-by-step calculation.",
        },
        "subtracao-de-matrizes": {
          title: "Matrix Subtraction: Rule and Solved Example",
          description:
            "Learn how to subtract same-size matrices, handle signs and follow a solved example step by step.",
        },
        "multiplicacao-por-escalar": {
          title: "Scalar Multiplication of a Matrix Step by Step",
          description:
            "See the formula for multiplying a matrix by a scalar and follow the calculation of each element with a solved example.",
        },
        "determinante-3x3-regra-de-sarrus": {
          title: "3x3 Determinant with Sarrus' Rule",
          description:
            "Learn Sarrus' Rule, build the diagonals of a 3x3 matrix and see a solved example step by step.",
        },
        "o-que-e-uma-matriz": {
          title: "What Is a Matrix? Definition and Examples",
          description:
            "Understand rows, columns, matrix order and notation with examples before using the matrix calculator.",
        },
        "matriz-identidade": {
          title: "Identity Matrix: Definition, Formula and Example",
          description:
            "See what the identity matrix looks like, why A x I = A and how it appears in inverses, Gauss and linear systems.",
        },
        "determinante-2x2": {
          title: "2x2 Determinant: Formula and Solved Example",
          description:
            "Learn how to calculate a 2x2 determinant with formula, diagonals, negative signs and a step-by-step example.",
        },
        "regra-de-cramer": {
          title: "Cramer's Rule: Solving Linear Systems with Determinants",
          description:
            "Learn how to use Cramer's Rule in 2x2 and 3x3 systems, understand D, Dx, Dy and when determinants can solve unknowns.",
        },
        "posto-de-matriz": {
          title: "Matrix Rank: How to Calculate It with Row Reduction",
          description:
            "Learn how to find the rank of a matrix with row reduction, count nonzero rows and understand its relationship with determinants and inverse matrices.",
        },
      },
    },
    tutorialPage: {
      defaultTitle: "Matrix Operations Tutorial | Matriz Calculator",
      defaultDescription:
        "Learn step by step how to perform matrix calculations in a simple and fast way.",
      notFoundTitle: "Tutorial not found",
      notFoundDescription: "The content you are looking for does not exist or was moved.",
      notFoundMetaDescription:
        "The requested tutorial was not found. Return to the matrix calculator or explore the available guides.",
      faqHeading: "Frequently Asked Questions",
      inLanguage: "en",
    },
  },
  es: {
    language: {
      select: "Seleccionar idioma",
    },
    nav: {
      tutorials: "Tutoriales",
      about: "Acerca de",
      contact: "Contacto",
    },
    header: {
      calculator: "Calculadora",
      homeAria: "Ir a la calculadora",
      mainNav: "Navegación principal",
      mobileNav: "Navegación móvil",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      activateLight: "Activar modo claro",
      activateDark: "Activar modo oscuro",
    },
    footer: {
      rights: "© 2026 MatrizCalculator. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Uso",
    },
    cookie: {
      accept: "Aceptar",
      decline: "Rechazar",
      text: "Usamos cookies para mejorar tu experiencia.",
      learnMore: "Saber más",
    },
    common: {
      readTutorial: "Leer tutorial: {{title}}",
      startTutorial: "Empezar por {{title}}",
      backToCalculator: "Volver a la Calculadora",
      matrixCalculator: "Calculadora de matrices",
      matrixTutorials: "Tutoriales de matrices",
    },
    home: {
      metaTitle: "Calculadora de Matrices Online Gratis | Paso a Paso",
      metaDescription:
        "Usa la calculadora de matrices gratuita para resolver determinantes, inversas, multiplicación, transpuesta y Gauss con fracciones exactas, pasos y tutoriales.",
      heroTitle: "Calculadora de Matrices Online Gratuita",
      heroDescription:
        "Resuelve suma, multiplicación, determinante, inversa, transpuesta y escalonamiento de matrices con resultados paso a paso, fracciones exactas, ejemplos resueltos y tutoriales.",
      structuredFeatureList:
        "Calculadora de matrices gratuita, resultados paso a paso, fracciones exactas, ejemplos resueltos, tutoriales explicados, determinante, matriz inversa, multiplicación de matrices, escalonamiento y sistemas lineales",
      structuredGaussQuestion: "¿Cómo ver el escalonamiento de una matriz?",
      structuredGaussAnswer:
        "Selecciona Eliminación de Gauss, ingresa los valores de la matriz y la calculadora mostrará cada etapa hasta llegar a la forma escalonada.",
      structuredInverseQuestion: "¿Cómo calcular una matriz inversa online?",
      structuredInverseAnswer:
        "Selecciona Inversa de A, completa una matriz cuadrada y haz clic en calcular. La herramienta valida si la matriz es invertible y muestra el resultado.",
      operationPrompt: "¿Qué deseas calcular?",
      sizeA: "Tamaño de la Matriz A",
      sizeB: "Tamaño de la Matriz B",
      rowsAria: "{{label}} - filas",
      colsAria: "{{label}} - columnas",
      scalar: "Escalar",
      calculating: "Calculando...",
      calculateNow: "Calcular Ahora",
      clearData: "Limpiar Datos",
      tutorialHint: "¿Duda con el cálculo?",
      tutorialHintLink: "Ver tutorial de {{operation}}",
      stepByStepTitle: "Resolución Paso a Paso",
      recommendedEyebrow: "Tutoriales recomendados",
      recommendedTitle: "Empieza por las guías más importantes",
      recommendedDescription:
        "Refuerza el estudio con ejemplos resueltos y tutoriales explicados sobre los cálculos de matrices más usados.",
      allTutorials: "Ver todos los tutoriales",
    },
    calculator: {
      result: "Resultado",
      emptyPlaceholder: "·",
      matrixElementAria:
        "Elemento de {{label}} en la fila {{row}}, columna {{col}}",
      operations: {
        soma: "Suma (A + B)",
        subtracao: "Resta (A - B)",
        multiplicacao: "Multiplicación (A x B)",
        determinanteA: "Determinante de A",
        inversa: "Inversa de A",
        transposicao: "Transpuesta de A",
        escalar: "Multiplicación por Escalar",
        gauss: "Eliminación de Gauss (Escalonamiento)",
      },
      operationNames: {
        soma: "suma de matrices",
        subtracao: "resta de matrices",
        inversa: "matriz inversa",
        gauss: "escalonamiento por Gauss",
        determinanteA: "determinante de matrices",
        multiplicacao: "multiplicación de matrices",
        transposicao: "matriz transpuesta",
        escalar: "multiplicación por escalar",
      },
      labels: {
        matrixA: "Matriz A",
        matrixB: "Matriz B",
      },
    },
    calculation: {
      errors: {
        invalidResult: "El resultado no es una matriz válida",
        sameSizeAdd: "Las matrices deben tener el mismo tamaño para la suma.",
        sameSizeSubtract:
          "Las matrices deben tener el mismo tamaño para la resta.",
        multiplicationDimensions:
          "El número de columnas de la Matriz A debe ser igual al número de filas de la Matriz B.",
        multiplicationDimensionsDetailed:
          "Error: el número de columnas de la Matriz A debe ser igual al número de filas de la Matriz B para la multiplicación.",
        squareInverse:
          "Error: la inversa solo se puede calcular para matrices cuadradas.",
        squareDeterminant:
          "Error: el determinante solo se puede calcular para matrices cuadradas.",
        squareInverseShort:
          "La inversa solo se puede calcular para matrices cuadradas.",
        squareDeterminantShort:
          "El determinante solo se puede calcular para matrices cuadradas.",
        singular: "La matriz no es invertible (determinante igual a cero).",
        scalarInvalid: "Ingresa un número válido para el escalar.",
        invalidMatrix: "Ingresa solo números válidos en las matrices.",
        unknownOperation: "Operación desconocida.",
        generic: "Error: {{message}}",
        fallback: "Verifica los valores de entrada e inténtalo de nuevo.",
      },
      operationNames: {
        addition: "suma de matrices",
        subtraction: "resta de matrices",
      },
      steps: {
        elementTitle: "Elemento C{{row}}{{col}}",
        dimensionCheckTitle: "Verificación de dimensiones",
        dimensionCheckDescription:
          "A tiene {{rowsA}}x{{colsA}} y B tiene {{rowsB}}x{{colsB}}. Como {{colsA}} = {{rowsB}}, la multiplicación existe y el resultado tendrá {{rowsA}}x{{colsB}}.",
        multiplicationElementDescription:
          "Fila {{row}} de A x columna {{col}} de B: {{terms}} = {{products}} = {{result}}.",
        transposeDimensionTitle: "Cambio de dimensiones",
        transposeDimensionDescription:
          "La matriz original tiene {{rowsA}}x{{colsA}}. La transpuesta tendrá {{colsA}}x{{rowsA}}, porque las filas se convierten en columnas.",
        transposeElementTitle: "Elemento A{{row}}{{col}}",
        transposeElementDescription:
          "El valor {{value}}, que estaba en la posición ({{row}}, {{col}}), pasa a la posición ({{targetRow}}, {{targetCol}}) en la transpuesta.",
        elementWiseTitle: "Cálculo elemento a elemento",
        elementWiseDescription:
          "En la {{operationName}}, cada posición de la respuesta usa los valores de la misma posición en A y B.",
        elementWiseElementDescription:
          "Posición ({{row}}, {{col}}): {{aValue}} {{symbol}} {{bValue}} = {{result}}.",
        scalarTitle: "Multiplicación por escalar",
        scalarDescription:
          "Cada elemento de la matriz A será multiplicado por el escalar {{scalar}}.",
        scalarElementDescription:
          "Posición ({{row}}, {{col}}): {{scalar}} x {{value}} = {{result}}.",
        matrix1x1Title: "Matriz 1x1",
        matrix1x1Description:
          "El determinante de una matriz 1x1 es el propio elemento: det(A) = {{value}}.",
        formula2x2Title: "Fórmula 2x2",
        formula2x2Description:
          "Para una matriz 2x2, usamos det(A) = (a x d) - (b x c).",
        mainDiagonalTitle: "Diagonal principal",
        secondaryDiagonalTitle: "Diagonal secundaria",
        determinantResultTitle: "Resultado",
        determinantResultDescription:
          "det(A) = {{mainDiagonal}} - ({{secondaryDiagonal}}) = {{value}}.",
        sarrusTitle: "Regla de Sarrus",
        sarrusDescription:
          "Para una matriz 3x3, sumamos las diagonales que bajan y restamos las diagonales que suben.",
        mainDiagonalsTitle: "Diagonales principales",
        secondaryDiagonalsTitle: "Diagonales secundarias",
        determinantInitialTitle: "Matriz inicial",
        determinantInitialDescription:
          "Para calcular det(A) en una matriz {{size}}x{{size}}, transformamos A en matriz triangular superior. Operaciones como Lk -> Lk - m x Li no cambian el determinante.",
        noPivotColumnTitle: "Columna sin pivote",
        noPivotColumnDescription:
          "No hay pivote no nulo en la columna {{col}}. La matriz queda con una diagonal nula, entonces det(A) = 0.",
        swapRowsTitle: "Intercambio de filas",
        determinantSwapRowsDescription:
          "Intercambiamos L{{rowA}} con L{{rowB}}. Cada intercambio de filas cambia el signo del determinante.",
        zeroCellTitle: "Anular A{{row}}{{col}}",
        zeroCellDescription:
          "Usamos L{{row}} -> L{{row}} - ({{factor}}) x L{{pivotRow}}. Esta operación crea cero debajo del pivote y conserva el determinante.",
        multiplyDiagonalTitle: "Multiplicar la diagonal",
        multiplyDiagonalDescription:
          "Como la matriz está triangular, det(A) = {{sign}}{{diagonal}} = {{product}}. Resultado final: det(A) = {{value}}.",
        verifyDeterminantTitle: "Verificar determinante",
        inverseVerifyDescription:
          "La matriz es cuadrada y det(A) = {{determinant}}. Como el determinante es distinto de cero, la inversa existe.",
        augmentedTitle: "Montar [A | I]",
        augmentedDescription:
          "Colocamos la matriz A a la izquierda y la matriz identidad a la derecha. El objetivo es transformar el lado izquierdo en identidad.",
        pivotNotFoundTitle: "Pivote no encontrado",
        pivotNotFoundDescription:
          "No fue posible encontrar un pivote no nulo en esta columna. Verifica si la matriz es invertible.",
        inverseSwapRowsDescription:
          "Intercambiamos L{{rowA}} con L{{rowB}} para colocar un pivote no nulo en la posición ({{positionRow}}, {{positionCol}}).",
        normalizePivotTitle: "Normalizar pivote {{pivot}}",
        normalizePivotDescription:
          "Dividimos L{{row}} por {{value}} para transformar el pivote en 1.",
        zeroColumnTitle: "Anular columna {{col}}",
        zeroColumnDescription:
          "Usamos L{{row}} -> L{{row}} - ({{factor}}) x L{{pivotRow}} para crear cero fuera del pivote.",
        readInverseTitle: "Leer la inversa",
        readInverseDescription:
          "Cuando el lado izquierdo se convierte en identidad, el lado derecho es la matriz inversa A^-1.",
        inverse2x2VerifyDescription:
          "det(A) = ({{a}} x {{d}}) - ({{b}} x {{c}}) = {{determinant}}. Como es distinto de cero, la inversa existe.",
        swapAndSignsTitle: "Intercambiar y cambiar signos",
        swapAndSignsDescription:
          "Intercambiamos los elementos de la diagonal principal y cambiamos el signo de los otros dos elementos.",
        multiplyByDetTitle: "Multiplicar por 1/det(A)",
        multiplyByDetDescription:
          "Ahora multiplicamos todos los elementos por 1/{{determinant}}.",
        inverseResultDescription: "Esta es la matriz inversa A^-1.",
        gaussianOriginalTitle: "Matriz Original",
        gaussianAlreadyEchelon:
          "La matriz ya se encuentra en forma escalonada.",
        gaussianInitialTitle: "Matriz Inicial",
        gaussianInitialDescription: "Configuración original de la matriz.",
        gaussianSwapRowsTitle: "Intercambio de Filas",
        gaussianSwapRowsDescription:
          "L{{rowA}} <-> L{{rowB}} para evitar pivote cero.",
        gaussianPivotTitle: "Pivote (Fila {{row}})",
        gaussianPivotDescription: "L{{row}} -> L{{row}} ÷ ({{factor}})",
        gaussianEliminationTitle: "Eliminación (Fila {{row}})",
        gaussianEliminationDescription:
          "L{{row}} -> L{{row}} - ({{factor}}) x L{{pivotRow}}",
      },
    },
    pages: {
      about: {
        metaTitle:
          "Acerca de Matrizes+: Calculadora y Tutoriales de Álgebra Lineal",
        metaDescription:
          "Conoce la misión de Matrizes+: simplificar el Álgebra Lineal con una calculadora de matrices potente y tutoriales claros.",
        title: "Nuestra Misión: Simplificar el Álgebra Lineal",
        description:
          "Creemos que la matemática puede ser accesible. Por eso creamos una plataforma que une herramientas prácticas y aprendizaje teórico de forma simple y gratuita.",
        pillars: [
          {
            title: "Una Calculadora Directa",
            description:
              "Resuelve desde sumas simples hasta inversas complejas en una interfaz práctica, responsiva y pensada para estudiar sin fricción.",
            action: "Usar la Calculadora",
            to: "/",
          },
          {
            title: "Tutoriales Para Aclarar",
            description:
              "Aprende la teoría detrás de los cálculos con guías paso a paso, ejemplos claros y conexión directa con las operaciones de la calculadora.",
            action: "Ver Tutoriales",
            to: "/tutorials",
          },
        ],
        nextTitle: "Próximos Pasos y Contacto",
        nextTextBefore:
          "Siempre estamos trabajando para añadir nuevas funciones y profundizar nuestro contenido. Si tienes sugerencias, dudas o encuentras un error,",
        nextLink: "contáctanos",
        nextTextAfter: ".",
      },
      contact: {
        metaTitle: "Contacto - Matrizes+",
        metaDescription:
          "Contacta al equipo de Matrizes+ para enviar sugerencias, reportar errores o resolver dudas.",
        title: "Contáctanos",
        description:
          "Tu opinión es fundamental para el crecimiento de Matrizes+. Usa este canal para enviar sugerencias, dudas o reportes de error.",
        topics: [
          {
            title: "¿Encontraste un Error?",
            description:
              "Ya sea un error de cálculo o un bug del sitio, tu feedback ayuda a mantener la plataforma precisa y confiable.",
          },
          {
            title: "¿Tienes una Sugerencia?",
            description:
              "¿Te gustaría una nueva función en la calculadora o un nuevo tema de tutorial? Nos encanta escuchar buenas ideas.",
          },
          {
            title: "Otras Dudas",
            description:
              "Para colaboraciones, feedback general o cualquier otra cuestión, envía un mensaje por nuestro canal de contacto.",
          },
        ],
        channelTitle: "Nuestro Canal de Comunicación",
        channelDescription:
          "Para todas las comunicaciones, envía tu mensaje al correo de abajo. Haremos lo posible por responder lo más rápido posible.",
      },
      notFound: {
        metaTitle: "Página no encontrada | Matriz Calculator",
        metaDescription:
          "La página solicitada no fue encontrada. Vuelve a la calculadora de matrices o explora los tutoriales de álgebra lineal.",
        title: "Página no encontrada",
        description: "El contenido que buscas no existe o fue movido.",
      },
      legal: {
        updatedAt: "Última actualización: 12 de septiembre de 2025",
        privacyTitle: "Política de Privacidad",
        privacyMetaDescription:
          "Conoce cómo Matrizes+ recopila, usa y protege tu información.",
        termsTitle: "Términos y Condiciones de Uso",
        termsMetaTitle: "Términos de Uso - Matrizes+",
        termsMetaDescription:
          "Conoce los términos y condiciones de uso de Matrizes+, tu sitio para cálculos y aprendizaje de álgebra lineal.",
      },
    },
    tutorials: {
      page: {
        metaTitle:
          "Tutoriales de Matrices con Ejemplos Resueltos | Matriz Calculator",
        metaDescription:
          "Aprende matrices con tutoriales paso a paso, ejemplos resueltos, fórmulas y enlaces a la calculadora de determinante, inversa, multiplicación y Gauss.",
        title: "Catálogo de Tutoriales de Álgebra Lineal",
        description:
          "Explora guías con fórmulas, ejemplos resueltos y enlaces a la calculadora de matrices paso a paso.",
        recommendedTitle: "🚀 Empieza Aquí: Secuencia Recomendada",
        recommendedDescription:
          "Sigue este orden para aprender álgebra lineal desde cero hasta conceptos avanzados. Cada tutorial te prepara para el siguiente.",
        otherTitle: "Otros tutoriales",
        otherDescription: "Contenidos complementarios del catálogo.",
      },
      unavailable: {
        title: "Los tutoriales están disponibles en portugués por ahora",
        description:
          "Para mantener el material preciso y bien revisado, los tutoriales completos se muestran en portugués por ahora. La calculadora sigue disponible en el idioma elegido.",
        switchLanguage: "Ver tutoriales en portugués",
        useCalculator: "Usar calculadora",
      },
      categories: [
        {
          title: "Operaciones básicas",
          description:
            "Conceptos iniciales para entender cómo las matrices cambian elemento por elemento.",
        },
        {
          title: "Operaciones intermedias",
          description:
            "Guías para los cálculos más frecuentes en ejercicios de álgebra lineal.",
        },
        {
          title: "Sistemas y métodos",
          description:
            "Métodos para escalonar matrices e interpretar sistemas lineales.",
        },
      ],
      info: {
        "determinante-de-matrizes": {
          title: "Determinante de Matrices: Fórmula y Paso a Paso",
          description:
            "Aprende a calcular determinantes 2x2, 3x3 y mayores con fórmula, ejemplo resuelto y apoyo de la calculadora.",
        },
        "matriz-inversa": {
          title: "Matriz Inversa: Fórmula y Ejemplo Resuelto",
          description:
            "Mira cuándo existe la matriz inversa, usa la fórmula 2x2 y sigue el paso a paso con fracciones exactas.",
        },
        "escalonamento-gauss": {
          title: "Escalonamiento por Gauss Paso a Paso",
          description:
            "Entiende pivotes, operaciones de fila y ceros debajo de la diagonal con ejemplo resuelto y calculadora.",
        },
        "matriz-transposta": {
          title: "Matriz Transpuesta: Fórmula y Ejemplo Resuelto",
          description:
            "Aprende a cambiar filas por columnas, mira la fórmula de la transpuesta y verifica el resultado paso a paso.",
        },
        "multiplicacao-de-matrizes": {
          title: "Multiplicación de Matrices Paso a Paso",
          description:
            "Entiende la regla fila por columna, mira un ejemplo resuelto y revisa cada etapa en la calculadora.",
        },
        "sistemas-lineares": {
          title: "Sistemas Lineales con Matrices: Paso a Paso",
          description:
            "Aprende a montar la matriz aumentada, usar escalonamiento de Gauss y resolver sistemas lineales con ejemplo.",
        },
        "soma-de-matrizes": {
          title: "Suma de Matrices: Regla y Ejemplo Resuelto",
          description:
            "Mira cuándo dos matrices pueden sumarse, aplica la regla posición por posición y practica paso a paso.",
        },
        "subtracao-de-matrizes": {
          title: "Resta de Matrices: Regla y Ejemplo Resuelto",
          description:
            "Entiende cómo restar matrices del mismo tamaño, cuidar los signos y seguir un ejemplo paso a paso.",
        },
        "multiplicacao-por-escalar": {
          title: "Multiplicación de Matriz por Escalar Paso a Paso",
          description:
            "Mira la fórmula para multiplicar una matriz por un escalar y sigue el cálculo de cada elemento.",
        },
        "determinante-3x3-regra-de-sarrus": {
          title: "Determinante 3x3 por la Regla de Sarrus",
          description:
            "Aprende la fórmula de Sarrus, monta las diagonales de la matriz 3x3 y mira un ejemplo resuelto.",
        },
        "o-que-e-uma-matriz": {
          title: "¿Qué es una Matriz? Definición y Ejemplos",
          description:
            "Entiende filas, columnas, orden de la matriz y notación con ejemplos antes de usar la calculadora.",
        },
        "matriz-identidade": {
          title: "Matriz Identidad: Definición, Fórmula y Ejemplo",
          description:
            "Mira cómo es la matriz identidad, por qué A x I = A y cómo aparece en inversa, Gauss y sistemas lineales.",
        },
        "determinante-2x2": {
          title: "Determinante 2x2: Fórmula y Ejemplo Resuelto",
          description:
            "Aprende a calcular el determinante 2x2 con fórmula, diagonales, signos negativos y ejemplo paso a paso.",
        },
        "regra-de-cramer": {
          title: "Regla de Cramer: Cómo Resolver Sistemas Lineales con Determinantes",
          description:
            "Aprende a usar la Regla de Cramer en sistemas 2x2 y 3x3, entendiendo D, Dx, Dy y cuándo usar determinantes para resolver incógnitas.",
        },
        "posto-de-matriz": {
          title: "Rango de una Matriz: Cómo Calcularlo con Escalonamiento",
          description:
            "Aprende a encontrar el rango de una matriz con escalonamiento, contando las filas no nulas y entendiendo su relación con determinante y matriz inversa.",
        },
      },
    },
    tutorialPage: {
      defaultTitle: "Tutorial de Operaciones con Matrices | Matriz Calculator",
      defaultDescription:
        "Aprende paso a paso cómo realizar cálculos con matrices de forma simple y rápida.",
      notFoundTitle: "Tutorial no encontrado",
      notFoundDescription: "El contenido que buscas no existe o fue movido.",
      notFoundMetaDescription:
        "El tutorial solicitado no fue encontrado. Vuelve a la calculadora de matrices o explora las guías disponibles.",
      faqHeading: "Preguntas Frecuentes",
      inLanguage: "es",
    },
  },
};
