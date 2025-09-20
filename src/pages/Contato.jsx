import { Helmet } from "react-helmet";

// Ícones SVG simples para ilustrar as seções
const BugIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-3-5v5m-3-8v8M3 8l4 4 4-4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
  </svg>
);

const IdeaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const QuestionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

function Contato() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Contato - Matrizes+</title>
        <meta name="description" content="Entre em contato com a equipe Matrizes+ para enviar sugestões, reportar erros ou tirar dúvidas." />
        {/* O restante das suas meta tags está ótimo */}
        <link rel="canonical" href="https://www.matrizcalculator.com/contato" />
      </Helmet>
      
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Fale Conosco
        </h1>
        <p className="text-lg text-gray-600">
          Sua opinião é fundamental para o crescimento do Matrizes+!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
        {/* Card 1: Reportar Erros */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="flex justify-center">
            <BugIcon />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Encontrou um Erro?</h3>
          <p className="text-gray-600 text-sm">
            Seja um erro de cálculo ou um bug no site, seu feedback nos ajuda a manter a plataforma precisa e confiável.
          </p>
        </div>

        {/* Card 2: Sugestões */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="flex justify-center">
            <IdeaIcon />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Tem uma Sugestão?</h3>
          <p className="text-gray-600 text-sm">
            Gostaria de uma nova funcionalidade na calculadora ou um novo tópico de tutorial? Adoramos ouvir novas ideias!
          </p>
        </div>
        
        {/* Card 3: Dúvidas */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="flex justify-center">
            <QuestionIcon />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Outras Dúvidas</h3>
          <p className="text-gray-600 text-sm">
            Para qualquer outra questão, parcerias ou feedback geral, sinta-se à vontade para nos enviar uma mensagem.
          </p>
        </div>
      </div>

      <div className="text-center bg-blue-50 p-8 rounded-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-3 text-gray-900">
          Nosso Canal de Comunicação
        </h2>
        <p className="mb-6 text-gray-700 max-w-xl mx-auto">
          Para todas as comunicações, por favor, envie sua mensagem para o e-mail abaixo. Faremos o nosso melhor para responder o mais rápido possível.
        </p>
        <a
          href="mailto:suporte@matrizcalculator.com"
          className="inline-block bg-blue-600 text-white px-4 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium shadow"
        >
          suporte@matrizcalculator.com
        </a>
      </div>
    </main>
  );
}

export default Contato;