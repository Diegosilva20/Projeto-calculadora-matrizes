import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { tutoriais } from "../data/tutorialsData"; // Importa os dados originais dos seus tutoriais

// O Dicionário de SEO construído com os dados reais do seu Search Console
const seoDictionary = {
  "determinante-de-matrizes": {
    title: "Determinante de uma Matriz: Como Calcular Passo a Passo",
    description: "Aprenda a calcular determinantes de matrizes 2x2 e 3x3 de forma simples, usando a regra de Sarrus e nossa calculadora de matrizes online."
  },
  "matriz-inversa": {
    title: "Matriz Inversa Calculadora | Passo a Passo Online",
    description: "Use nossa calculadora de matriz inversa. Entenda a teoria, veja como calcular a inversa de uma matriz facilmente com o passo a passo completo."
  },
  "escalonamento-gauss-jordan": {
    title: "Determinante por Escalonamento e Método de Gauss-Jordan",
    description: "Domine o método de Eliminação de Gauss-Jordan. Aprenda como resolver determinante por escalonamento de forma rápida e precisa."
  },
  "sistemas-lineares": {
    title: "Resolução de Sistemas Lineares com Matrizes Online",
    description: "Descubra como transformar e resolver Sistemas Lineares utilizando matrizes, regra de Cramer e escalonamento na nossa matriz calculator."
  },
  "matriz-transposta": {
    title: "Matrizes Transpostas | Calculadora Online e Exemplos",
    description: "O que é uma Matriz Transposta? Veja como calcular matrizes transpostas trocando linhas por colunas e teste na nossa calculadora online."
  },
  "multiplicacao-de-matrizes": {
    title: "Como Multiplicar Matrizes: Regras e Calculadora Online",
    description: "Aprenda como multiplicar matrizes passo a passo. Entenda o multiplicador de matrizes, a regra de linhas por colunas e as condições necessárias."
  }
};

const TutorialPage = () => {
  const { slug } = useParams();

  // 1. Busca as informações de SEO pelo slug. Se inventarem uma URL que não existe, usa um padrão.
  const seo = seoDictionary[slug] || {
    title: "Tutorial de Operações com Matrizes | Matriz Calculator",
    description: "Aprenda passo a passo como realizar cálculos complexos com matrizes de forma simples e rápida."
  };

  // 2. Busca o conteúdo visual do tutorial dentro do seu arquivo tutorialsData.js
  const tutorial = tutoriais.find((t) => t.slug === slug);

  // Tratamento de erro: Se o tutorial não for encontrado
  if (!tutorial) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center min-h-[50vh]">
        <Helmet>
          <title>Página não encontrada | Matriz Calculator</title>
        </Helmet>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tutorial não encontrado</h1>
        <p className="text-gray-600 mb-6">O conteúdo que você está procurando não existe ou foi movido.</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Voltar para a Calculadora
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        {/* Injeção de SEO agressiva para dominar a pesquisa do Google */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`https://www.matrizcalculator.com/tutorial/${slug}`} />
        
        {/* Open Graph para pré-visualização bonita no WhatsApp e LinkedIn */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.matrizcalculator.com/tutorial/${slug}`} />
      </Helmet>

      <section className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-800 hover:underline mb-6 inline-flex items-center text-sm font-semibold transition-colors"
        >
          &larr; Voltar para a Calculadora
        </Link>
        
        <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-200">
          <header className="mb-8 border-b border-gray-100 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 leading-tight">
              {tutorial.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {tutorial.description}
            </p>
          </header>
          
          {/* Renderiza o conteúdo (texto, imagens, fórmulas) que vem do seu arquivo de dados */}
          <div className="prose prose-blue max-w-none text-gray-800 leading-loose">
            {tutorial.content}
          </div>
        </article>

        {/* Call to Action para forçar o usuário a testar o que acabou de aprender */}
        <div className="mt-12 text-center bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pronto para colocar em prática?</h2>
          <p className="text-gray-600 mb-6">Use nossa ferramenta para resolver suas matrizes em segundos, com o passo a passo completo.</p>
          <Link to="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md">
            Testar a Calculadora Agora
          </Link>
        </div>
      </section>
    </>
  );
};

export default TutorialPage;