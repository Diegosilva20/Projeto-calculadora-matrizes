import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Importe a lista de tutoriais do seu novo arquivo de dados
import { tutoriais } from '../data/tutorialsData';

const Tutorials = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Tutoriais de Álgebra Linear | Matrizes+</title>
        <meta
          name="description"
          content="Aprenda tudo sobre matrizes, desde o básico até tópicos avançados como determinantes, inversas e sistemas lineares com nossos guias passo a passo."
        />
        <link rel="canonical" href="https://www.matrizcalculator.com/tutorials" />
      </Helmet>

      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <span className="text-gray-500">Tutoriais</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-6 text-gray-900">Tutoriais de Matrizes</h1>
      <p className="mb-8 text-gray-700">
        Explore nossos guias completos para dominar a Álgebra Linear. A lista está organizada em uma ordem de aprendizado recomendada, do mais simples ao mais complexo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* O código agora lê a lista ordenada do arquivo de dados */}
        {tutoriais.map((tutorial) => (
          <div key={tutorial.id} className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{tutorial.description}</p>
            <Link
              to={`/tutorial/${tutorial.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm inline-block mt-auto self-start"
              aria-label={`Saiba mais sobre ${tutorial.title}`}
            >
              Ler Tutorial
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;