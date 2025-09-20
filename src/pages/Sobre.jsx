import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Ícones SVG simples para não precisar de bibliotecas externas
const CalculatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);


function Sobre() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Sobre o Matrizes+: Calculadora e Tutoriais de Álgebra Linear</title>
        <meta
          name="description"
          content="Conheça a missão do Matrizes+: simplificar a Álgebra Linear com uma calculadora de matrizes poderosa e tutoriais didáticos para todos."
        />
        {/* O restante das suas meta tags está ótimo! */}
        <link rel="canonical" href="https://www.matrizcalculator.com/sobre" />
      </Helmet>
      
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Nossa Missão: Descomplicar a Álgebra Linear
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Acreditamos que a matemática pode ser acessível. Por isso, criamos uma plataforma que une ferramentas práticas e aprendizado teórico de forma simples e gratuita.
        </p>
      </div>

      <div className="space-y-12 text-gray-700 text-base leading-relaxed">
        
        {/* Seção principal com os dois pilares do site */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Nossos Pilares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pilar 1: Calculadora */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center flex flex-col">
              <div className="mx-auto">
                <CalculatorIcon />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Uma Calculadora Direto ao Ponto</h3>
              <p className="flex-grow">
                Precisa de um resultado rápido e confiável? Nossa calculadora foi projetada para ser intuitiva, permitindo que você realize desde somas simples até inversões complexas sem complicações.
              </p>
              <Link to="/" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-6 self-center">
                Usar a Calculadora
              </Link>
            </div>

            {/* Pilar 2: Tutoriais */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center flex flex-col">
              <div className="mx-auto">
                <BookIcon />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Tutoriais Para Descomplicar</h3>
              <p className="flex-grow">
                Entenda a teoria por trás dos números. Nossos guias passo a passo foram criados para esclarecer conceitos, desde o básico da transposição até a aplicação em sistemas lineares.
              </p>
              <Link to="/tutorials" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-6 self-center">
                Ver Tutoriais
              </Link>
            </div>

          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Próximos Passos & Contato</h2>
          <p className="max-w-3xl mx-auto">
            Estamos sempre trabalhando para adicionar novas funcionalidades e aprofundar nosso conteúdo. A sua opinião é muito importante para nós! Se tiver qualquer sugestão, dúvida ou encontrar algum erro, por favor,{" "}
            <Link to="/contato" className="text-blue-600 font-semibold hover:underline">
              entre em contato
            </Link>.
          </p>
        </section>
        
      </div>
    </main>
  );
}

export default Sobre;