import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { tutoriais } from "../data/tutorialsData";
import FAQSection from "../components/tutorial/FAQSection";

const seoDictionary = {
  "determinante-de-matrizes": {
    title: "Determinante de Matrizes: Fórmula, Exemplo e Calculadora",
    description:
      "Aprenda a calcular determinante de matriz 2x2, 3x3 e maiores com fórmula, exemplo resolvido e calculadora de matrizes passo a passo.",
  },
  "determinante-3x3-regra-de-sarrus": {
    title: "Determinante 3x3 pela Regra de Sarrus: Exemplo Resolvido",
    description:
      "Veja a fórmula da Regra de Sarrus, monte as diagonais da matriz 3x3 e acompanhe um exemplo resolvido passo a passo.",
  },
  "matriz-inversa": {
    title: "Matriz Inversa: Fórmula, Exemplo Resolvido e Calculadora",
    description:
      "Entenda quando a matriz inversa existe, veja a fórmula 2x2 e use a calculadora com passo a passo e frações exatas.",
  },
  "escalonamento-gauss": {
    title: "Escalonamento de Matrizes por Gauss Passo a Passo",
    description:
      "Aprenda eliminação de Gauss com pivôs, operações de linha, exemplo resolvido e calculadora de matriz escalonada passo a passo.",
  },
  "sistemas-lineares": {
    title: "Sistemas Lineares com Matrizes: Exemplo Resolvido",
    description:
      "Aprenda a montar matriz aumentada, usar escalonamento de Gauss e resolver sistemas lineares com exemplo passo a passo.",
  },
  "matriz-transposta": {
    title: "Matriz Transposta: Fórmula, Exemplo e Calculadora",
    description:
      "Aprenda a fórmula da matriz transposta, troque linhas por colunas e confira um exemplo resolvido na calculadora.",
  },
  "multiplicacao-de-matrizes": {
    title: "Multiplicação de Matrizes Passo a Passo | Calculadora",
    description:
      "Entenda a regra linha por coluna, veja exemplo resolvido de multiplicação de matrizes e confira cada etapa na calculadora.",
  },
  "soma-de-matrizes": {
    title: "Soma de Matrizes: Regra, Exemplo Resolvido e Calculadora",
    description:
      "Aprenda a somar matrizes de mesmo tamanho, use a regra posição por posição e pratique com cálculo passo a passo.",
  },
  "subtracao-de-matrizes": {
    title: "Subtração de Matrizes: Regra e Exemplo Resolvido",
    description:
      "Veja como subtrair matrizes de mesmo tamanho, cuide dos sinais e acompanhe um exemplo resolvido passo a passo.",
  },
  "multiplicacao-por-escalar": {
    title: "Multiplicação de Matriz por Escalar: Fórmula e Exemplo",
    description:
      "Entenda a fórmula da multiplicação por escalar, calcule cada elemento da matriz e veja um exemplo resolvido.",
  },
  "o-que-e-uma-matriz": {
    title: "O que é uma Matriz? Definição, Linhas e Colunas",
    description:
      "Entenda o que é uma matriz, veja linhas, colunas, ordem, notação e exemplos antes de usar a calculadora de matrizes.",
  },
  "matriz-identidade": {
    title: "Matriz Identidade: Definição, Fórmula e Exemplo",
    description:
      "Veja a fórmula da matriz identidade, exemplos 2x2 e 3x3 e por que ela é importante para inversa, Gauss e sistemas lineares.",
  },
};

const faqDictionary = {
  "determinante-de-matrizes": [
    {
      question: "Quando posso calcular o determinante de uma matriz?",
      answer:
        "O determinante só existe para matrizes quadradas, ou seja, matrizes com o mesmo número de linhas e colunas.",
    },
    {
      question: "O que significa determinante igual a zero?",
      answer:
        "Quando o determinante é zero, a matriz não tem inversa e, em sistemas lineares, isso indica que pode não haver solução única.",
    },
    {
      question: "Posso usar a regra de Sarrus em qualquer matriz?",
      answer:
        "Não. A regra de Sarrus é usada apenas para matrizes 3x3. Para matrizes maiores, use cofatores ou eliminação gaussiana.",
    },
  ],
  "matriz-inversa": [
    {
      question: "Quando uma matriz tem inversa?",
      answer:
        "Uma matriz tem inversa quando é quadrada e seu determinante é diferente de zero.",
    },
    {
      question: "Toda matriz quadrada tem inversa?",
      answer:
        "Não. Se o determinante da matriz for zero, ela é chamada de singular e não possui inversa.",
    },
    {
      question: "A fórmula da inversa 2x2 serve para matrizes 3x3?",
      answer:
        "Não. A fórmula rápida vale apenas para matrizes 2x2. Para matrizes maiores, usamos operações de linha ou outros métodos algébricos.",
    },
  ],
  "escalonamento-gauss": [
    {
      question: "O que é escalonamento de matrizes?",
      answer:
        "Escalonar uma matriz é usar operações de linha para criar zeros abaixo dos pivôs, deixando a matriz em forma de escada.",
    },
    {
      question: "A calculadora faz Gauss ou Gauss-Jordan?",
      answer:
        "A calculadora aplica Eliminação de Gauss, chegando à forma escalonada. Ela não mostra a forma reduzida completa de Gauss-Jordan.",
    },
    {
      question: "Para que serve a substituição reversa?",
      answer:
        "Depois do escalonamento, a substituição reversa permite resolver o sistema de baixo para cima e encontrar as variáveis.",
    },
  ],
  "sistemas-lineares": [
    {
      question: "Como transformar um sistema linear em matriz?",
      answer:
        "Coloque os coeficientes das variáveis em colunas, mantendo sempre a mesma ordem, e coloque os resultados na última coluna da matriz aumentada.",
    },
    {
      question: "O que é uma matriz aumentada?",
      answer:
        "É a matriz que junta os coeficientes do sistema e a coluna dos resultados, geralmente escrita como [A | b].",
    },
    {
      question: "Todo sistema linear tem uma única solução?",
      answer:
        "Não. Um sistema pode ter uma solução, infinitas soluções ou nenhuma solução, dependendo da relação entre suas equações.",
    },
  ],
  "matriz-transposta": [
    {
      question: "O que é matriz transposta?",
      answer:
        "A matriz transposta é obtida trocando as linhas por colunas. O elemento que estava na posição (i, j) passa para a posição (j, i).",
    },
    {
      question: "O tamanho da matriz muda ao transpor?",
      answer:
        "Sim. Uma matriz m x n vira uma matriz n x m. Por exemplo, uma matriz 2x3 vira 3x2.",
    },
    {
      question: "Transposta é a mesma coisa que inversa?",
      answer:
        "Não. A transposta apenas troca linhas e colunas. A inversa é outra matriz que, multiplicada pela original, gera a matriz identidade.",
    },
  ],
  "multiplicacao-de-matrizes": [
    {
      question: "Quando duas matrizes podem ser multiplicadas?",
      answer:
        "A multiplicação A x B existe quando o número de colunas da matriz A é igual ao número de linhas da matriz B.",
    },
    {
      question: "Como calcular cada elemento da matriz resultado?",
      answer:
        "Cada elemento é calculado pegando uma linha da primeira matriz e uma coluna da segunda, multiplicando os valores correspondentes e somando os produtos.",
    },
    {
      question: "A ordem da multiplicação de matrizes importa?",
      answer:
        "Sim. Em geral, A x B não é igual a B x A. A ordem das matrizes muda o cálculo e pode até tornar a multiplicação impossível.",
    },
  ],
  "determinante-3x3-regra-de-sarrus": [
    {
      question: "O que é a Regra de Sarrus?",
      answer:
        "É um método visual para calcular determinantes de matrizes 3x3 usando produtos de diagonais principais e secundárias.",
    },
    {
      question: "A Regra de Sarrus serve para matriz 4x4?",
      answer:
        "Não. A Regra de Sarrus vale apenas para matrizes 3x3. Para 4x4 ou maiores, use cofatores ou eliminação.",
    },
    {
      question: "Como calcular o resultado final em Sarrus?",
      answer:
        "Some os produtos das diagonais principais e subtraia a soma dos produtos das diagonais secundárias.",
    },
  ],
  "soma-de-matrizes": [
    {
      question: "Quando posso somar duas matrizes?",
      answer:
        "Você pode somar duas matrizes quando elas têm exatamente o mesmo número de linhas e colunas.",
    },
    {
      question: "Como calcular cada elemento da soma?",
      answer:
        "Some os elementos que estão na mesma posição: o elemento (i, j) de A com o elemento (i, j) de B.",
    },
    {
      question: "A ordem da soma de matrizes importa?",
      answer:
        "Não. Quando a soma existe, A + B e B + A dão o mesmo resultado.",
    },
  ],
  "subtracao-de-matrizes": [
    {
      question: "Quando posso subtrair duas matrizes?",
      answer:
        "A subtração só existe quando as duas matrizes têm o mesmo tamanho.",
    },
    {
      question: "A ordem da subtração de matrizes importa?",
      answer:
        "Sim. Em geral, A - B é diferente de B - A, porque os sinais mudam.",
    },
    {
      question: "Como lidar com números negativos na subtração?",
      answer:
        "Mantenha a regra posição por posição e cuide dos sinais. Por exemplo, subtrair um número negativo equivale a somar.",
    },
  ],
  "multiplicacao-por-escalar": [
    {
      question: "O que é escalar em matrizes?",
      answer:
        "Escalar é um número comum que multiplica todos os elementos da matriz.",
    },
    {
      question: "Multiplicar por escalar muda o tamanho da matriz?",
      answer:
        "Não. A matriz resultado mantém o mesmo número de linhas e colunas da matriz original.",
    },
    {
      question: "O que acontece se o escalar for negativo?",
      answer:
        "Todos os elementos são multiplicados pelo número negativo, então os sinais dos elementos não nulos mudam.",
    },
  ],
  "o-que-e-uma-matriz": [
    {
      question: "O que é uma matriz?",
      answer:
        "Uma matriz é uma tabela com números organizados em linhas e colunas. É uma forma prática de guardar e trabalhar com dados estruturados.",
    },
    {
      question: "Como identifico o tamanho de uma matriz?",
      answer:
        "O tamanho é sempre descrito como linhas × colunas. Por exemplo, uma matriz 2x3 tem 2 linhas e 3 colunas.",
    },
    {
      question: "Qual é a notação de um elemento de matriz?",
      answer:
        "Usamos A(i, j) ou a_ij, onde i é o número da linha e j é o número da coluna. Por exemplo, A(2,3) é o elemento na linha 2, coluna 3.",
    },
    {
      question: "Por que matrizes são importantes?",
      answer:
        "Matrizes aparecem em resolver sistemas de equações, transformações geométricas, processamento de dados, imagens e muitas áreas da engenharia e ciência.",
    },
  ],
  "matriz-identidade": [
    {
      question: "O que é a matriz identidade?",
      answer:
        "É a matriz 'um' da multiplicação. Quando você multiplica qualquer matriz A pela identidade, obtém A novamente: A × I = A.",
    },
    {
      question: "Como é a forma da matriz identidade?",
      answer:
        "Tem 1 na diagonal principal e 0 em todas as outras posições. É sempre quadrada (2x2, 3x3, 4x4, etc.).",
    },
    {
      question: "Por que a matriz identidade é importante?",
      answer:
        "Porque define o conceito de inversa (A × A⁻¹ = I) e é fundamental em Gauss, escalonamento e resolução de sistemas lineares.",
    },
    {
      question: "Cada tamanho tem uma matriz identidade diferente?",
      answer:
        "Sim, existe uma identidade 2x2, uma 3x3, uma 4x4, e assim por diante. Mas todas seguem o mesmo padrão: 1 na diagonal, 0 no resto.",
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
          "@id": `https://www.matrizcalculator.com/tutorial/${canonicalSlug}`,
        },
      }
    : null;
  const faqItems = faqDictionary[canonicalSlug];
  const faqStructuredData = faqItems
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
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
        <p className="text-lg text-gray-600 mb-8 dark:text-slate-300">
          O conteúdo que procura não existe ou foi movido.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
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
          href={`https://www.matrizcalculator.com/tutorial/${canonicalSlug}`}
        />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.matrizcalculator.com/tutorial/${canonicalSlug}`}
        />
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
      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-8 sm:py-16 sm:bg-white sm:shadow-sm sm:border sm:border-slate-200 sm:rounded-2xl sm:mt-8 dark:text-slate-200 sm:dark:border-slate-800 sm:dark:bg-slate-900 sm:dark:shadow-none">
        {/* Breadcrumbs de Navegação (Padrão de Documentação) */}
        <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500 font-medium dark:text-slate-400">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400">
                Calculadora de matrizes
              </Link>
            </li>
            <li>
              <span className="text-slate-300 select-none dark:text-slate-600">/</span>
            </li>
            <li>
              <Link
                to="/tutorials"
                className="hover:text-blue-600 transition-colors dark:hover:text-blue-400"
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
