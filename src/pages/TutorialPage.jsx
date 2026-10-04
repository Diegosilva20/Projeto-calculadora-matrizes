import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { tutoriais } from "../data/tutorialsData";
import FAQSection from "../components/tutorial/FAQSection";

const seoDictionary = {
  "determinante-de-matrizes": {
    title: "Determinante de Matrizes: Cálculo, Propriedades e Exemplos",
    description:
      "Aprenda a calcular determinantes para matrizes 2x2, 3x3 e ordens superiores, com fórmulas passo a passo e resolução detalhada na calculadora.",
  },
  "determinante-2x2": {
    title: "Determinante 2x2: Fórmula, Exemplos e Cálculo Direto",
    description:
      "Como calcular determinantes de matrizes 2x2 pela diferença entre produtos das diagonais, com exemplos resolvidos e atenção a sinais negativos.",
  },
  "determinante-3x3-regra-de-sarrus": {
    title: "Regra de Sarrus para Determinantes 3x3: Guia e Exemplos",
    description:
      "Veja a aplicação da Regra de Sarrus em matrizes 3x3 com a soma e subtração das diagonais ilustradas passo a passo.",
  },
  "matriz-inversa": {
    title: "Matriz Inversa: Fórmula 2x2, Gauss-Jordan e Exemplos",
    description:
      "Entenda as condições de invertibilidade, a fórmula analítica para matrizes 2x2 e o método de Gauss-Jordan para ordens maiores.",
  },
  "regra-de-cramer": {
    title: "Regra de Cramer para Sistemas Lineares: Teoria e Exemplos",
    description:
      "Aprenda a resolver sistemas lineares quadrados utilizando determinantes parciais (D, Dx, Dy e Dz) com exemplos detalhados.",
  },
  "posto-de-matriz": {
    title: "Posto de Matriz: Como Calcular pelo Escalonamento",
    description:
      "Como determinar o posto (rank) de uma matriz contando linhas não nulas após escalonamento e sua relação com a solução de sistemas lineares.",
  },
  "escalonamento-gauss": {
    title: "Eliminação de Gauss: Escalonamento de Matrizes Passo a Passo",
    description:
      "Aprenda a escalonar matrizes por operações elementares de linha e pivôs para resolver sistemas lineares e calcular o posto.",
  },
  "sistemas-lineares": {
    title: "Sistemas Lineares com Matrizes: Representação e Resolução",
    description:
      "Como montar a matriz aumentada de um sistema linear e encontrar a solução usando eliminação gaussiana e substituição retroativa.",
  },
  "matriz-transposta": {
    title: "Matriz Transposta: Definição, Propriedades e Exemplos",
    description:
      "Aprenda como transformar linhas em colunas, as mudanças de dimensão e as principais propriedades algébricas da matriz transposta.",
  },
  "multiplicacao-de-matrizes": {
    title: "Multiplicação de Matrizes: Regra Linha por Coluna e Exemplos",
    description:
      "Entenda a condição de compatibilidade dimensional e o método de cálculo linha por coluna na multiplicação matricial.",
  },
  "soma-de-matrizes": {
    title: "Adição de Matrizes: Regra, Propriedades e Exemplos",
    description:
      "Como somar matrizes elemento a elemento, requisitos de ordem idêntica e propriedades comutativa e associativa.",
  },
  "subtracao-de-matrizes": {
    title: "Subtração de Matrizes: Regra e Exemplos Resolvidos",
    description:
      "Como subtrair matrizes de mesma dimensão, distribuição de sinais negativos e cuidados com a não comutatividade.",
  },
  "multiplicacao-por-escalar": {
    title: "Multiplicação de Matriz por Escalar: Propriedades e Exemplos",
    description:
      "Como multiplicar todos os elementos de uma matriz por um número real e a interpretação geométrica do redimensionamento.",
  },
  "o-que-e-uma-matriz": {
    title: "O que é uma Matriz: Definição, Notação e Tipos",
    description:
      "Introdução completa à representação matricial, dimensões, índices de elementos e principais tipos de matrizes.",
  },
  "matriz-identidade": {
    title: "Matriz Identidade: Definição, Propriedades e Aplicações",
    description:
      "Conheça o elemento neutro da multiplicação matricial, sua estrutura com diagonal unitária e seu papel na definição da matriz inversa.",
  },
};

const faqDictionary = {
  "determinante-de-matrizes": [
    {
      question: "Quando é possível calcular o determinante de uma matriz?",
      answer:
        "O determinante é definido unicamente para matrizes quadradas (2x2, 3x3, 4x4, etc.), isto é, com igual número de linhas e colunas.",
    },
    {
      question: "O que indica um determinante igual a zero?",
      answer:
        "Um determinante nulo indica que a matriz é singular (não possui inversa) e que suas linhas ou colunas são linearmente dependentes.",
    },
    {
      question: "A Regra de Sarrus pode ser aplicada em qualquer matriz?",
      answer:
        "Não. A Regra de Sarrus é restrita a matrizes 3x3. Para ordens 4x4 ou superiores, utilizam-se o Teorema de Laplace ou a triangularização por eliminação de Gauss.",
    },
  ],
  "determinante-2x2": [
    {
      question: "Qual é a fórmula do determinante de uma matriz 2x2?",
      answer:
        "Para a matriz [[a, b], [c, d]], o determinante é dado por det(A) = (a × d) - (b × c).",
    },
    {
      question: "O determinante 2x2 pode ser negativo?",
      answer:
        "Sim. O determinante pode resultar em valores positivos, negativos ou zero, dependendo da magnitude dos produtos das diagonais.",
    },
    {
      question: "O que representa o determinante 2x2 igual a zero?",
      answer:
        "Indica que a matriz não admite matriz inversa e que, se associada a um sistema linear, este não terá solução única.",
    },
    {
      question: "A fórmula 2x2 pode ser expandida para matrizes 3x3?",
      answer:
        "Não. A fórmula simples (ad - bc) aplica-se somente à ordem 2. Matrizes 3x3 requerem a Regra de Sarrus ou Laplace.",
    },
  ],
  "matriz-inversa": [
    {
      question: "Quais são os requisitos para uma matriz ter inversa?",
      answer:
        "A matriz deve ser quadrada e seu determinante deve ser diferente de zero (det(A) ≠ 0).",
    },
    {
      question: "Toda matriz quadrada é invertível?",
      answer:
        "Não. Matrizes quadradas cujo determinante é igual a zero não possuem inversa e são chamadas de matrizes singulares.",
    },
    {
      question: "A fórmula direta da inversa 2x2 funciona para matrizes 3x3?",
      answer:
        "Não. Para ordens 3x3 ou maiores, calcula-se a inversa pelo método de eliminação de Gauss-Jordan ou pela matriz adjunta de cofatores.",
    },
  ],
  "escalonamento-gauss": [
    {
      question: "O que é o escalonamento de matrizes?",
      answer:
        "É a aplicação sequencial de operações elementares de linha para anular os termos situados abaixo dos pivôs, conduzindo a matriz a uma forma triangular superior.",
    },
    {
      question: "A calculadora utiliza Gauss ou Gauss-Jordan?",
      answer:
        "A calculadora executa a eliminação de Gauss clássica até a forma escalonada e apresenta a substituição retroativa para a resolução de incógnitas.",
    },
    {
      question: "Como funciona a substituição retroativa?",
      answer:
        "Com a matriz em formato triangular, determina-se a última incógnita diretamente e substitui-se o valor nas equações superiores até encontrar todas as variáveis.",
    },
  ],
  "sistemas-lineares": [
    {
      question: "Como se monta a matriz aumentada de um sistema linear?",
      answer:
        "Alinham-se os coeficientes numéricos de cada variável nas colunas correspondentes e posicionam-se os termos constantes na última coluna da matriz.",
    },
    {
      question: "O que é uma matriz aumentada?",
      answer:
        "É a representação em bloco [A | b] que combina a matriz dos coeficientes do sistema linear com o vetor dos termos independentes.",
    },
    {
      question: "Todo sistema linear admite uma solução única?",
      answer:
        "Não. Sistemas lineares podem apresentar solução única (SPD), infinitas soluções (SPI) ou nenhuma solução (SI).",
    },
  ],
  "regra-de-cramer": [
    {
      question: "Quando a Regra de Cramer é aplicável?",
      answer:
        "Em sistemas lineares com número igual de equações e incógnitas, desde que o determinante da matriz de coeficientes seja não nulo (D ≠ 0).",
    },
    {
      question: "O que representam D, Dx e Dy na Regra de Cramer?",
      answer:
        "D é o determinante da matriz original. Dx e Dy são os determinantes obtidos ao substituir as colunas das respectivas incógnitas pelos termos independentes do sistema.",
    },
    {
      question: "Por que não se costuma usar Cramer para sistemas 4x4 ou maiores?",
      answer:
        "O cálculo de múltiplos determinantes de alta ordem tem custo computacional elevado. A eliminação de Gauss é significativamente mais rápida.",
    },
    {
      question: "O que ocorre quando D = 0?",
      answer:
        "A Regra de Cramer torna-se inaplicável por exigir divisão por zero. O sistema será classificado como impossível ou indeterminado.",
    },
  ],
  "posto-de-matriz": [
    {
      question: "O que é o posto de uma matriz?",
      answer:
        "É o número máximo de linhas (ou colunas) linearmente independentes, mensurado pelo total de linhas não nulas na matriz escalonada.",
    },
    {
      question: "Como calcular o posto numericamente?",
      answer:
        "Aplica-se a eliminação de Gauss até a forma escalonada por linhas e conta-se a quantidade de linhas que possuem ao menos um termo não nulo.",
    },
    {
      question: "O posto por linhas é igual ao posto por colunas?",
      answer:
        "Sim. Para qualquer matriz real, o posto por linhas é estritamente idêntico ao posto por colunas.",
    },
    {
      question: "O posto se aplica a matrizes retangulares?",
      answer:
        "Sim. O posto é definido para matrizes de qualquer dimensão m x n e nunca pode ultrapassar o menor valor entre m e n.",
    },
  ],
  "matriz-transposta": [
    {
      question: "O que é a matriz transposta?",
      answer:
        "É a matriz obtida pela permuta ordenada entre linhas e colunas: a linha i da matriz original torna-se a coluna i da transposta.",
    },
    {
      question: "A dimensão se altera na transposição?",
      answer:
        "Sim para matrizes retangulares: uma matriz m x n gera uma transposta n x m. Matrizes quadradas preservam a mesma ordem.",
    },
    {
      question: "Transposta e inversa são a mesma operação?",
      answer:
        "Não. A transposta apenas reorganiza os eixos da matriz. A inversa desfaz a multiplicação matricial (A × A⁻¹ = I).",
    },
  ],
  "multiplicacao-de-matrizes": [
    {
      question: "Qual é a condição para multiplicar duas matrizes?",
      answer:
        "O número de colunas da primeira matriz deve ser estritamente igual ao número de linhas da segunda matriz.",
    },
    {
      question: "Como se calcula cada termo do produto matricial?",
      answer:
        "Cada entrada c_ij resulta da soma dos produtos entre os elementos da linha i da primeira matriz e os elementos da coluna j da segunda matriz.",
    },
    {
      question: "A multiplicação de matrizes é comutativa?",
      answer:
        "Não. Em termos gerais, A × B ≠ B × A. Alterar a ordem das matrizes modifica o resultado ou pode tornar o produto incompatível.",
    },
  ],
  "determinante-3x3-regra-de-sarrus": [
    {
      question: "O que é a Regra de Sarrus?",
      answer:
        "É um método mnemônico para matrizes 3x3 fundamentado na soma dos produtos das três diagonais principais subtraída da soma das três diagonais secundárias.",
    },
    {
      question: "A Regra de Sarrus pode ser aplicada em matrizes 4x4?",
      answer:
        "Não. A regra só é matematicamente válida para matrizes 3x3. Ordens maiores demandam expansão por Laplace ou escalonamento.",
    },
  ],
  "soma-de-matrizes": [
    {
      question: "Quando duas matrizes podem ser somadas?",
      answer:
        "Exclusivamente quando ambas possuem dimensões rigorosamente idênticas (mesmo número de linhas e colunas).",
    },
    {
      question: "Como se calcula a soma?",
      answer:
        "Somando-se os valores que ocupam a mesma posição nas duas matrizes: c_ij = a_ij + b_ij.",
    },
  ],
  "subtracao-de-matrizes": [
    {
      question: "A subtração de matrizes é comutativa?",
      answer:
        "Não. A - B é diferente de B - A, resultando em matrizes com todos os elementos de sinais opostos (A - B = -(B - A)).",
    },
    {
      question: "Qual é o requisito para subtrair matrizes?",
      answer:
        "As matrizes devem apresentar as mesmas dimensões exatas m x n.",
    },
  ],
  "multiplicacao-por-escalar": [
    {
      question: "O que é multiplicação por escalar?",
      answer:
        "É a operação em que cada entrada individual de uma matriz é multiplicada por uma constante numérica real k.",
    },
    {
      question: "A multiplicação por escalar altera a dimensão da matriz?",
      answer:
        "Não. A matriz resultante mantém as mesmas dimensões da matriz original.",
    },
  ],
  "o-que-e-uma-matriz": [
    {
      question: "O que é uma matriz na matemática?",
      answer:
        "Uma matriz é uma tabela bidimensional de números organizados em linhas horizontais e colunas verticais, com dimensão m x n.",
    },
    {
      question: "Como são indexados os elementos de uma matriz?",
      answer:
        "Por meio do par (i, j), onde i indica o número da linha e j indica o número da coluna que contêm o elemento.",
    },
  ],
  "matriz-identidade": [
    {
      question: "O que caracteriza a matriz identidade?",
      answer:
        "É uma matriz quadrada com valor 1 em todas as posições da diagonal principal e valor 0 em todas as demais entradas.",
    },
    {
      question: "Qual é a propriedade principal da matriz identidade?",
      answer:
        "Ela atua como elemento neutro na multiplicação matricial: para qualquer matriz compatível A, temos A × I = I × A = A.",
    },
  ],
};

const slugAliases = {
  "eliminacao-de-gauss": "escalonamento-gauss",
  "escalonamento-gauss-jordan": "escalonamento-gauss",
};

const TutorialPage = () => {
  const { slug } = useParams();
  const canonicalSlug = slugAliases[slug] || slug;

  const seo = seoDictionary[canonicalSlug] || {
    title: "Tutorial de Operações com Matrizes | Matriz Calculator",
    description:
      "Aprenda passo a passo como realizar cálculos complexos com matrizes de forma simples e rápida.",
  };

  const tutorial = tutoriais.find((t) => t.slug === canonicalSlug);
  const tutorialStructuredData = tutorial
    ? {
        "@context": "https://schema.org",
        "@type": "EducationalResource",
        headline: tutorial.title,
        description: tutorial.description,
        author: {
          "@type": "Organization",
          name: "Matriz Calculator",
        },
        inLanguage: "pt-BR",
        isAccessibleForFree: true,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://calculamatriz.vercel.app/tutorial/${canonicalSlug}`,
        },
      }
    : null;
  const faqItems = faqDictionary[canonicalSlug];
  const faqStructuredData = faqItems
    ? {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  if (!tutorial) {
    return (
      <div className="max-w-3xl mx-auto py-24 px-6 text-center min-h-[60vh]">
        <Helmet>
          <title>Página não encontrada | Matriz Calculator</title>
          <meta
            name="description"
            content="O tutorial solicitado não foi encontrado. Volte para a calculadora de matrizes ou explore os guias disponíveis."
          />
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 dark:text-slate-100">
          Tutorial não encontrado
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 dark:text-slate-300">
          O conteúdo que procura não existe ou foi movido.
        </p>
        <Link
          to="/"
          className="bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent-hover transition-colors"
        >
          Voltar para a Calculadora
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-12 transition-colors dark:bg-slate-950 sm:bg-slate-50 sm:dark:bg-slate-950">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link
          rel="canonical"
          href={`https://calculamatriz.vercel.app/tutorial/${canonicalSlug}`}
        />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://calculamatriz.vercel.app/tutorial/${canonicalSlug}`}
        />
        <meta property="og:image" content="https://calculamatriz.vercel.app/logo1920.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://calculamatriz.vercel.app/logo1920.png" />
        <script type="application/ld+json">
          {JSON.stringify(tutorialStructuredData)}
        </script>
        {faqStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(faqStructuredData)}
          </script>
        )}
      </Helmet>

      {/* Container mais estreito (max-w-3xl) e sem caixa no mobile (bg-white direto) */}
      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-8 sm:py-16 sm:bg-white sm: sm:border sm:border-slate-200 sm:rounded-2xl border border-slate-200 shadow-sm dark:border-slate-700/50 sm:mt-8 dark:text-slate-200 sm:dark:border-slate-800 sm:dark:bg-slate-900 sm:dark:shadow-none">
        {/* Breadcrumbs de Navegação (Padrão de Documentação) */}
        <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500 font-medium dark:text-slate-400">
            <li>
              <Link to="/" className="hover:text-accent transition-colors dark:hover:text-blue-400">
                Calculadora de matrizes
              </Link>
            </li>
            <li>
              <span className="text-slate-300 select-none dark:text-slate-600">/</span>
            </li>
            <li>
              <Link
                to="/tutorials"
                className="hover:text-accent transition-colors dark:hover:text-blue-400"
              >
                Tutoriais de matrizes
              </Link>
            </li>
            <li>
              <span className="text-slate-300 select-none dark:text-slate-600">/</span>
            </li>
            <li
              className="text-slate-800 truncate max-w-[150px] sm:max-w-md dark:text-slate-200"
              aria-current="page"
            >
              {tutorial.title}
            </li>
          </ol>
        </nav>

        <header className="mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6 dark:text-slate-100">
            {tutorial.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium dark:text-slate-300">
            {tutorial.description}
          </p>
        </header>

        <div className="tutorial-content prose prose-lg prose-slate max-w-none text-slate-800 dark:text-slate-200">
          {tutorial.component}
        </div>
        <FAQSection items={faqItems} />
      </article>
    </div>
  );
};

export default TutorialPage;
