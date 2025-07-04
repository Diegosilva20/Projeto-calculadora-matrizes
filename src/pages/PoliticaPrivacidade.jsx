import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function PoliticaPrivacidade() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Política de Privacidade - Matrizes+</title>
        <meta name="description" content="Saiba como o Matrizes+ coleta, usa e protege suas informações." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.matrizcalculator.com/politica" />
        <meta property="og:title" content="Política de Privacidade - Matrizes+" />
        <meta property="og:description" content="Leia a política de privacidade do Matrizes+ para entender como protegemos seus dados." />
        <meta property="og:url" content="https://www.matrizcalculator.com/politica" />
        <meta property="og:image" content="https://www.matrizcalculator.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Privacidade - Matrizes+" />
        <meta name="twitter:description" content="Leia a política de privacidade do Matrizes+ para entender como protegemos seus dados." />
        <meta name="twitter:image" content="https://www.matrizcalculator.com/og-image.jpg" />
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-2 text-gray-800">
        Política de Privacidade
      </h1>
      <p className="text-sm text-gray-500 mb-6">Última atualização: 4 de julho de 2025</p>

      <div className="space-y-6 text-gray-700">
        <p>
          A privacidade dos visitantes da MatrizCalculator ("nós", "nosso") é uma de nossas principais prioridades. Este documento de Política de Privacidade descreve os tipos de informações que são coletadas e registradas automaticamente quando você utiliza nosso site и como usamos essas informações.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Dados de Log e Navegação</h2>
          <p>
            Seguimos um procedimento padrão de uso de arquivos de log. Esses arquivos registram os visitantes quando eles acessam sites. As informações coletadas pelos arquivos de log incluem endereços de protocolo da Internet (IP), tipo de navegador, provedor de serviços de Internet (ISP), data e hora, páginas de referência/saída e, possivelmente, o número de cliques. Estes dados não estão vinculados a nenhuma informação que seja pessoalmente identificável e são usados para analisar tendências, administrar o site e coletar informações demográficas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. Cookies e Publicidade (Google AdSense)</h2>
          <p>
            A MatrizCalculator utiliza "cookies" para otimizar a experiência do usuário, armazenando informações como as preferências dos visitantes.
          </p>
          <p>
            Nosso principal parceiro de publicidade, o Google, utiliza uma tecnologia chamada de cookie DART para veicular anúncios aos visitantes do nosso site com base em suas visitas a este e a outros sites na Internet. Por ser um fornecedor terceiro, o Google tem suas próprias políticas de privacidade para o tratamento de dados dos usuários.
          </p>
          <p>
            Os usuários podem optar por não receber anúncios personalizados visitando diretamente a página de <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configurações de Anúncios do Google</a>. Para mais informações, recomendamos a leitura da <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">política de publicidade do Google</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. Direitos dos Titulares de Dados (LGPD)</h2>
          <p>
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD), garantimos aos usuários o controle sobre seus dados processados através de cookies. Você tem o direito de gerenciar seu consentimento de cookies a qualquer momento através das configurações do seu navegador ou das ferramentas de consentimento de cookies disponibilizadas em nosso site.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Privacidade Infantil</h2>
          <p>
            A MatrizCalculator não se destina a menores de 13 anos e não coleta intencionalmente nenhuma informação de identificação pessoal de crianças.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Apenas Política de Privacidade Online</h2>
          <p>
            Esta política de privacidade aplica-se apenas às nossas atividades online e é válida para os visitantes do nosso site no que diz respeito às informações que eles compartilharam e/ou que são coletadas na MatrizCalculator. Esta política não se aplica a nenhuma informação coletada offline ou por outros canais que não este site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. Contato</h2>
          <p>
            Caso tenha dúvidas relativas a esta política de privacidade, por favor, entre em contato através da nossa{" "}
            <Link to="/contato" className="text-blue-600 hover:underline">página de Contato</Link>.
          </p>
        </section>
      </div>

       <p className="mt-8 text-sm">
        Ao utilizar nosso site, você concorda com nossa Política de Privacidade e aceita seus Termos. Leia também nossos{" "}
        <Link to="/termos" className="text-blue-600 hover:underline">
          Termos de Uso
        </Link>
        .
      </p>
    </main>
  );
}

export default PoliticaPrivacidade;