import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { tutoriais } from "../data/tutorialsData";

const seoDictionary = {
  "determinante-de-matrizes": {
    title: "Determinante de uma Matriz: Como Calcular Passo a Passo",
    description:
      "Aprenda a calcular determinantes de matrizes 2x2 e 3x3 de forma simples, usando a regra de Sarrus e nossa calculadora de matrizes online.",
  },
  "matriz-inversa": {
    title: "Matriz Inversa Calculadora | Passo a Passo Online",
    description:
      "Use nossa calculadora de matriz inversa. Entenda a teoria, veja como calcular a inversa de uma matriz facilmente com o passo a passo completo.",
  },
  "escalonamento-gauss-jordan": {
    title: "Determinante por Escalonamento e Método de Gauss-Jordan",
    description:
      "Domine o método de Eliminação de Gauss-Jordan. Aprenda como resolver determinante por escalonamento de forma rápida e precisa.",
  },
  "sistemas-lineares": {
    title: "Resolução de Sistemas Lineares com Matrizes Online",
    description:
      "Descubra como transformar e resolver Sistemas Lineares utilizando matrizes, regra de Cramer e escalonamento na nossa calculadora.",
  },
  "matriz-transposta": {
    title: "Matrizes Transpostas | Calculadora Online e Exemplos",
    description:
      "O que é uma Matriz Transposta? Veja como calcular matrizes transpostas trocando linhas por colunas e teste na nossa calculadora online.",
  },
  "multiplicacao-de-matrizes": {
    title: "Como Multiplicar Matrizes: Regras e Calculadora Online",
    description:
      "Aprenda como multiplicar matrizes passo a passo. Entenda a regra de linhas por colunas e as condições necessárias.",
  },
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
      </article>

      <section className="max-w-3xl mx-auto px-5 sm:px-8 mt-12 sm:mt-16">
        <div className="text-center bg-blue-600 p-8 sm:p-12 rounded-3xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Pronto para colocar em prática?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
            Use a nossa ferramenta para resolver as suas matrizes em segundos,
            com o passo a passo completo.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-extrabold text-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-md"
          >
            Testar a Calculadora Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TutorialPage;
