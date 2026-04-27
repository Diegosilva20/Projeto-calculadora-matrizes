import { Helmet } from "react-helmet";
import { FaBug, FaEnvelope, FaLightbulb, FaQuestionCircle } from "react-icons/fa";

const contactTopics = [
  {
    icon: <FaBug className="h-8 w-8" aria-hidden="true" />,
    title: "Encontrou um Erro?",
    description:
      "Seja um erro de cálculo ou um bug no site, seu feedback ajuda a manter a plataforma precisa e confiável.",
  },
  {
    icon: <FaLightbulb className="h-8 w-8" aria-hidden="true" />,
    title: "Tem uma Sugestão?",
    description:
      "Gostaria de uma nova funcionalidade na calculadora ou um novo tópico de tutorial? Adoramos ouvir boas ideias.",
  },
  {
    icon: <FaQuestionCircle className="h-8 w-8" aria-hidden="true" />,
    title: "Outras Dúvidas",
    description:
      "Para parcerias, feedback geral ou qualquer outra questão, envie uma mensagem pelo nosso canal de contato.",
  },
];

function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato - Matrizes+</title>
        <meta
          name="description"
          content="Entre em contato com a equipe Matrizes+ para enviar sugestões, reportar erros ou tirar dúvidas."
        />
        <link rel="canonical" href="https://www.matrizcalculator.com/contato" />
      </Helmet>

      <section className="p-4 sm:p-6 max-w-5xl mx-auto text-center min-h-[70vh]">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800">
            Fale Conosco
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Sua opinião é fundamental para o crescimento do Matrizes+. Use este
            canal para enviar sugestões, dúvidas ou relatos de erro.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactTopics.map((topic) => (
            <article
              key={topic.title}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-all hover:shadow-xl flex flex-col text-left"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {topic.icon}
              </div>
              <h2 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                {topic.title}
              </h2>
              <p className="text-gray-500 text-sm flex-grow leading-relaxed">
                {topic.description}
              </p>
            </article>
          ))}
        </div>

        <section className="bg-blue-600 p-8 sm:p-12 rounded-3xl shadow-lg text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600">
            <FaEnvelope className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Nosso Canal de Comunicação
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-sm sm:text-lg leading-relaxed">
            Para todas as comunicações, envie sua mensagem para o e-mail abaixo.
            Faremos o possível para responder o mais rápido possível.
          </p>
          <a
            href="mailto:suporte@matrizcalculator.com"
            className="inline-flex max-w-full justify-center bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-extrabold text-sm sm:text-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-md break-all"
          >
            suporte@matrizcalculator.com
          </a>
        </section>
      </section>
    </>
  );
}

export default Contato;
