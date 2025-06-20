import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { tutorials } from "../data/tutorialsData";

function Tutorials() {
  return (
    <main className="mt-32 p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Tutoriais de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content="Escolha entre tutoriais detalhados sobre multiplicação, determinante, inversa, eliminação de Gauss e transposição de matrizes."
        />
        <meta name="keywords" content="tutoriais matrizes, álgebra linear, calculadora de matrizes" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://projeto-calculadora-matrizes.vercel.app/tutorials" />
        <meta property="og:title" content="Tutoriais de Matrizes - Matrizes+" />
        <meta
          property="og:description"
          content="Escolha entre tutoriais detalhados sobre multiplicação, determinante, inversa, eliminação de Gauss e transposição de matrizes."
        />
        <meta property="og:url" content="https://projeto-calculadora-matrizes.vercel.app/tutorials" />
        <meta
          property="og:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tutoriais de Matrizes - Matrizes+" />
        <meta
          name="twitter:description"
          content="Escolha entre tutoriais detalhados sobre multiplicação, determinante, inversa, eliminação de Gauss e transposição de matrizes."
        />
        <meta
          name="twitter:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Tutoriais de Matrizes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">{tutorial.title}</h3>
            <p className="text-gray-600 mb-4 text-sm line-clamp-3">{tutorial.description}</p>
            <Link
              to={`/tutorial/${tutorial.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm inline-block"
              aria-label={`Saiba mais sobre ${tutorial.title}`}
            >
              Ler mais
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Tutorials;