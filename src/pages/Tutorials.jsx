import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { tutoriais } from "../data/tutorialsData";

const Tutorials = () => {
  return (
    <>
      <Helmet>
        <title>Tutoriais de Álgebra Linear e Matrizes | Matriz Calculator</title>
        <meta name="description" content="Aprenda passo a passo como calcular determinantes, matriz inversa, transposta, multiplicação e escalonamento de Gauss-Jordan." />
        <link rel="canonical" href="https://www.matrizcalculator.com/tutorials" />
      </Helmet>

      <section className="p-4 sm:p-6 max-w-5xl mx-auto text-center min-h-[70vh]">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800">
            Guias e Tutoriais de Álgebra Linear
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore nossos guias detalhados e aprenda a teoria por trás dos cálculos de matrizes, com exemplos práticos e passo a passo.
          </p>
        </header>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutoriais.map((tutorial) => (
            <article
              key={tutorial.id}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-all hover:shadow-xl flex flex-col text-left"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {tutorial.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                {tutorial.description}
              </p>
              <Link
                to={`/tutorial/${tutorial.slug}`}
                className="text-blue-600 font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform"
              >
                Ler Tutorial Completo <span className="ml-1">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tutorials;