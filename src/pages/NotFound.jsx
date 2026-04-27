import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-6 text-center min-h-[60vh]">
      <Helmet>
        <title>Página não encontrada | Matriz Calculator</title>
        <meta
          name="description"
          content="A página solicitada não foi encontrada. Volte para a calculadora de matrizes ou explore os tutoriais de álgebra linear."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Página não encontrada
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        O conteúdo que você procura não existe ou foi movido.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
      >
        Voltar para a Calculadora
      </Link>
    </section>
  );
}

export default NotFound;
