import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function TermosUso() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Termos de Uso - Matrizes+</title>
        <meta
          name="description"
          content="Conheça os termos de uso do Matrizes+, site educacional gratuito."
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
        <meta
          property="og:image"
          content="https://matrizcalculator.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Termos de Uso - Matrizes+" />
        <meta
          name="twitter:description"
          content="Leia os termos de uso do Matrizes+, site gratuito para aprendizado de matrizes."
        />
        <meta
          name="twitter:image"
          content="https://matrizcalculator.com/og-image.jpg"
        />
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-2 text-gray-800">
        Termos de Uso
      </h1>
      <p className="text-sm text-gray-500 mb-6">Última atualização: 11 de setembro de 2025</p>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Termos</h2>
          <p>
            Ao acessar o site <Link to="/" className="text-blue-600 hover:underline">Matrizes+</Link>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. Uso de Licença</h2>
          <p className="mb-2">
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Matrizes+, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>modificar ou copiar os materiais;</li>
            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Matrizes+;</li>
            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
          </ul>
          <p className="mt-2">
            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Matrizes+ a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. Isenção de Responsabilidade</h2>
          <p className="mb-2">
            Os materiais no site da Matrizes+ são fornecidos 'como estão'. Matrizes+ não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>
          <p>
            Além disso, o Matrizes+ não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Limitações</h2>
          <p>
            Em nenhum caso o Matrizes+ ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Matrizes+, mesmo que Matrizes+ ou um representante autorizado da Matrizes+ tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Precisão dos Materiais</h2>
          <p>
            Os materiais exibidos no site da Matrizes+ podem incluir erros técnicos, tipográficos ou fotográficos. Matrizes+ não garante que qualquer material em seu site seja preciso, completo ou atual. Matrizes+ pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Matrizes+ não se compromete a atualizar os materiais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. Links</h2>
          <p>
            O Matrizes+ não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Matrizes+ do site. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">7. Modificações</h2>
          <p>
            O Matrizes+ pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">8. Lei Aplicável</h2>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
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