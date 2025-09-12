import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function TermosUso() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Termos de Uso - Matrizes+</title>
        <meta
          name="description"
          content="Conheça os termos e condições de uso do Matrizes+, seu site para cálculos e aprendizado de álgebra linear."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://matrizcalculator.com/termos"
        />
        <meta property="og:title" content="Termos de Uso - Matrizes+" />
        <meta
          property="og:description"
          content="Leia os termos de uso do Matrizes+, site gratuito para aprendizado de matrizes."
        />
        <meta
          property="og:url"
          content="https://matrizcalculator.com/termos"
        />
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-2 text-gray-800">
        Termos e Condições de Uso
      </h1>
      <p className="text-sm text-gray-500 mb-6">Última atualização: 12 de Setembro de 2025</p>

      <div className="space-y-6 text-gray-700">
        <p>
          Ao acessar ao site Matrizes+, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Uso de Licença</h2>
          <p>
            É concedida permissão para usar as ferramentas e materiais no site Matrizes+, apenas para fins pessoais, educacionais e não comerciais. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: modificar ou copiar os materiais; usar os materiais para qualquer finalidade comercial ou para exibição pública; tentar descompilar ou fazer engenharia reversa de qualquer software contido no site; remover quaisquer direitos autorais ou outras notações de propriedade dos materiais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. Isenção de Responsabilidade</h2>
          <p>
            Os materiais no site da Matrizes+ são fornecidos 'como estão'. O Matrizes+ não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de adequação a um fim específico ou não violação de propriedade intelectual.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. Limitações</h2>
          <p>
            Em nenhum caso o Matrizes+ ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em nosso site.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Links</h2>
          <p>
            O Matrizes+ não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por parte do Matrizes+. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Modificações</h2>
          <p>
            O Matrizes+ pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>
        </section>
      </div>

      <p className="mt-8 text-sm">
        Para entender como coletamos e usamos seus dados, veja também nossa{" "}
        <Link to="/politica" className="text-blue-600 hover:underline">
          Política de Privacidade
        </Link>
        .
      </p>
    </main>
  );
}

export default TermosUso;