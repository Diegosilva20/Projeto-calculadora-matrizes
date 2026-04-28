import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaBookOpen, FaCalculator, FaComments } from "react-icons/fa";

const pillars = [
  {
    icon: <FaCalculator className="h-9 w-9" aria-hidden="true" />,
    title: "Uma Calculadora Direto ao Ponto",
    description:
      "Resolva desde somas simples até inversões complexas em uma interface prática, responsiva e pensada para estudar sem atrito.",
    action: "Usar a Calculadora",
    to: "/",
  },
  {
    icon: <FaBookOpen className="h-9 w-9" aria-hidden="true" />,
    title: "Tutoriais Para Descomplicar",
    description:
      "Aprenda a teoria por trás dos cálculos com guias passo a passo, exemplos claros e conexão direta com as operações da calculadora.",
    action: "Ver Tutoriais",
    to: "/tutorials",
  },
];

function Sobre() {
  return (
    <>
      <Helmet>
        <title>Sobre o Matrizes+: Calculadora e Tutoriais de Álgebra Linear</title>
        <meta
          name="description"
          content="Conheça a missão do Matrizes+: simplificar a Álgebra Linear com uma calculadora de matrizes poderosa e tutoriais didáticos para todos."
        />
        <link rel="canonical" href="https://www.matrizcalculator.com/sobre" />
      </Helmet>

      <section className="p-4 sm:p-6 max-w-5xl mx-auto text-center min-h-[70vh]">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800">
            Nossa Missão: Descomplicar a Álgebra Linear
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Acreditamos que a matemática pode ser acessível. Por isso, criamos
            uma plataforma que une ferramentas práticas e aprendizado teórico de
            forma simples e gratuita.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-blue-400 transition-all hover:shadow-xl flex flex-col items-center text-center"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {pillar.icon}
              </div>
              <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {pillar.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-8 flex-grow leading-relaxed">
                {pillar.description}
              </p>
              <Link
                to={pillar.to}
                className="inline-flex justify-center bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
              >
                {pillar.action}
              </Link>
            </article>
          ))}
        </div>

        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 text-center">
          <div className="flex flex-col items-center gap-5">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FaComments className="h-8 w-8" aria-hidden="true" />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">
                Próximos Passos & Contato
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Estamos sempre trabalhando para adicionar novas funcionalidades
                e aprofundar nosso conteúdo. Se tiver sugestões, dúvidas ou
                encontrar algum erro,{" "}
                <Link
                  to="/contato"
                  className="text-blue-600 font-bold hover:underline"
                >
                  entre em contato
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Sobre;
