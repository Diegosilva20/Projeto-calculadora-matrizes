import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { tutoriais } from "../data/tutorialsData";
import FAQSection from "../components/tutorial/FAQSection";

const seoDictionary = {
  "determinante-de-matrizes": {
    title: "Determinante de uma Matriz: Como Calcular Passo a Passo",
    description:
      "Aprenda a calcular determinantes de matrizes 2x2 e 3x3 de forma simples, usando a regra de Sarrus e nossa calculadora de matrizes online.",
  },
  "matriz-inversa": {
    title: "Matriz Inversa: Fórmula, Exemplo e Calculadora Online",
    description:
      "Entenda o que é matriz inversa, veja a fórmula para matrizes 2x2, aprenda como o escalonamento ajuda em matrizes maiores e teste na calculadora online.",
  },
  "escalonamento-gauss-jordan": {
    title: "Escalonamento de Matrizes: Eliminação de Gauss Passo a Passo",
    description:
      "Aprenda o método de eliminação de Gauss, veja como transformar uma matriz em forma escalonada e resolva sistemas lineares.",
  },
  "sistemas-lineares": {
    title: "Resolução de Sistemas Lineares com Matrizes Online",
    description:
      "Descubra como transformar e resolver Sistemas Lineares utilizando matrizes, regra de Cramer e escalonamento na nossa calculadora.",
  },
  "matriz-transposta": {
    title: "Matriz Transposta: Como Calcular Passo a Passo",
    description:
      "Aprenda o que é matriz transposta, veja como trocar linhas por colunas, entenda erros comuns e teste na calculadora online.",
  },
  "multiplicacao-de-matrizes": {
    title: "Como Multiplicar Matrizes Passo a Passo | Calculadora Online",
    description:
      "Aprenda como multiplicar matrizes passo a passo, entenda a regra linha por coluna, veja erros comuns e teste na calculadora online.",
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
  "escalonamento-gauss-jordan": [
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
};

const TutorialPage = () => {
  const { slug } = useParams();

  const seo = seoDictionary[slug] || {
    title: "Tutorial de Operações com Matrizes | Matriz Calculator",
    description:
      "Aprenda passo a passo como realizar cálculos complexos com matrizes de forma simples e rápida.",
  };

  const tutorial = tutoriais.find((t) => t.slug === slug);
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
          "@id": `https://www.matrizcalculator.com/tutorial/${slug}`,
        },
      }
    : null;
  const faqItems = faqDictionary[slug];
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
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Tutorial não encontrado
        </h1>
        <p className="text-lg text-gray-600 mb-8">
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
    <div className="bg-white sm:bg-slate-50 min-h-screen pb-12">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link
          rel="canonical"
          href={`https://www.matrizcalculator.com/tutorial/${slug}`}
        />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.matrizcalculator.com/tutorial/${slug}`}
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
      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-8 sm:py-16 sm:bg-white sm:shadow-sm sm:border sm:border-slate-200 sm:rounded-2xl sm:mt-8">
        {/* Breadcrumbs de Navegação (Padrão de Documentação) */}
        <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Calculadora
              </Link>
            </li>
            <li>
              <span className="text-slate-300 select-none">/</span>
            </li>
            <li>
              <Link
                to="/tutorials"
                className="hover:text-blue-600 transition-colors"
              >
                Tutoriais
              </Link>
            </li>
            <li>
              <span className="text-slate-300 select-none">/</span>
            </li>
            <li
              className="text-slate-800 truncate max-w-[150px] sm:max-w-md"
              aria-current="page"
            >
              {tutorial.title}
            </li>
          </ol>
        </nav>

        <header className="mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6">
            {tutorial.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
            {tutorial.description}
          </p>
        </header>

        <div className="prose prose-lg prose-slate max-w-none text-slate-800">
          {tutorial.component}
        </div>
        <FAQSection items={faqItems} />
      </article>
    </div>
  );
};

export default TutorialPage;
