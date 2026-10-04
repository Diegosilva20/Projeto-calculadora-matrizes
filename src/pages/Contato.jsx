import { Helmet } from "react-helmet-async";
import { FaBug, FaEnvelope, FaLightbulb, FaQuestionCircle } from "react-icons/fa";

const contactTopics = [
  {
    icon: <FaBug className="h-8 w-8" aria-hidden="true" />,
    title: "Relatar um erro",
    description:
      "Se encontrar um resultado divergente ou falha na interface, nos avise para corrigirmos.",
  },
  {
    icon: <FaLightbulb className="h-8 w-8" aria-hidden="true" />,
    title: "Enviar sugestão",
    description:
      "Sugira novas operações matemáticas, melhorias de visualização ou novos temas de tutoriais.",
  },
  {
    icon: <FaQuestionCircle className="h-8 w-8" aria-hidden="true" />,
    title: "Dúvidas gerais",
    description:
      "Envie suas dúvidas sobre o funcionamento da ferramenta ou feedback sobre a plataforma.",
  },
];

function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato - CalculaMatriz</title>
        <meta
          name="description"
          content="Entre em contato com o CalculaMatriz para enviar sugestões, reportar erros de cálculo ou tirar dúvidas."
        />
        <link rel="canonical" href="https://calculamatriz.vercel.app/contato" />
        <meta property="og:title" content="Contato - CalculaMatriz" />
        <meta property="og:description" content="Entre em contato com o CalculaMatriz para enviar sugestões, reportar erros de cálculo ou tirar dúvidas." />
        <meta property="og:url" content="https://calculamatriz.vercel.app/contato" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://calculamatriz.vercel.app/logo1920.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://calculamatriz.vercel.app/logo1920.png" />
      </Helmet>

      <section className="p-4 sm:p-6 max-w-5xl mx-auto text-center min-h-[70vh]">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white dark:text-slate-100">
            Fale conosco
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto dark:text-slate-300">
            Use este canal para enviar sugestões, tirar dúvidas ou relatar qualquer inconsistência em cálculos ou tutoriais.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactTopics.map((topic) => (
            <article
              key={topic.title}
              className="group flex flex-col items-center rounded-2xl border border-slate-200 shadow-sm dark:border-slate-700/50 border border-slate-200 shadow-sm dark:border-slate-700/20 bg-white p-6 text-center transition-all hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 sm:last:col-span-2 sm:last:max-w-md sm:last:justify-self-center lg:last:col-span-1 lg:last:max-w-none"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 shadow-sm dark:border-slate-700/50 bg-blue-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white dark:bg-blue-950/70 dark:text-blue-300">
                {topic.icon}
              </div>
              <h2 className="text-lg font-bold mb-2 text-gray-900 transition-colors group-hover:text-accent dark:text-slate-100 dark:group-hover:text-blue-400">
                {topic.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300/70 text-sm flex-grow leading-relaxed dark:text-slate-300">
                {topic.description}
              </p>
            </article>
          ))}
        </div>

        <section className="rounded-3xl bg-accent p-8 text-center shadow-lg dark:bg-accent-hover sm:p-12">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-accent dark:bg-slate-100">
            <FaEnvelope className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Envie sua mensagem por e-mail
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-sm sm:text-lg leading-relaxed">
            Escreva diretamente para o nosso e-mail. Respondemos assim que possível.
          </p>
          <a
            href="mailto:suporte@calculamatriz.vercel.app"
            className="inline-flex max-w-full justify-center break-all rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-accent  transition-all hover:-translate-y-1 hover:bg-blue-50 dark:bg-slate-100 sm:px-8 sm:text-lg"
          >
            suporte@calculamatriz.vercel.app
          </a>
        </section>
      </section>
    </>
  );
}

export default Contato;
