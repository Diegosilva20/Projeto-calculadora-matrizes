import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function PoliticaPrivacidade() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Política de Privacidade - Matrizes+</title>
        <meta name="description" content="Saiba como o Matrizes+ coleta, usa e protege suas informações." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://matrizcalculator.com/politica" />
        <meta property="og:title" content="Política de Privacidade - Matrizes+" />
        <meta property="og:description" content="Leia a política de privacidade do Matrizes+ para entender como protegemos seus dados." />
        <meta property="og:url" content="https://matrizcalculator.com/politica" />
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-2 text-gray-800">
        Política de Privacidade
      </h1>
      <p className="text-sm text-gray-500 mb-6">Última atualização: 12 de Setembro de 2025</p>

      <div className="space-y-6 text-gray-700">
        <p>
          A sua privacidade é importante para nós. É política do Matrizes+ respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Coleta de Informações</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. Uso e Retenção de Dados</h2>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados. Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. Cookies e Publicidade (Google AdSense)</h2>
          <p>
            O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você. Para mais informações, consulte as FAQs oficiais sobre privacidade do Google AdSense.
          </p>
           <p>
            Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site são projetados para garantir que você receba os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Links Externos</h2>
          <p>
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Compromisso do Usuário</h2>
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através da nossa{" "}
            <Link to="/contato" className="text-blue-600 hover:underline">página de Contato</Link>.
          </p>
        </section>
      </div>

       <p className="mt-8 text-sm">
        Ao utilizar nosso site, você concorda com nossa Política de Privacidade. Leia também nossos{" "}
        <Link to="/termos" className="text-blue-600 hover:underline">
          Termos de Uso
        </Link>
        .
      </p>
    </main>
  );
}

export default PoliticaPrivacidade;