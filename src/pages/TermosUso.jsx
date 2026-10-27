import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function TermosUso() {
  return (
    <div className="legal-page p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Termos de Uso - CalculaMatriz</title>
        <meta
          name="description"
          content="Conheça os termos e condições de uso do CalculaMatriz, sua plataforma gratuita para cálculos e aprendizado de álgebra linear."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://calculamatriz.vercel.app/termos-uso"
        />
        <meta property="og:title" content="Termos de Uso - CalculaMatriz" />
        <meta
          property="og:description"
          content="Leia os termos de uso do CalculaMatriz, site gratuito para aprendizado e cálculo de matrizes."
        />
        <meta
          property="og:url"
          content="https://calculamatriz.vercel.app/termos-uso"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://calculamatriz.vercel.app/logo1920.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://calculamatriz.vercel.app/logo1920.png" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
        Termos e Condições de Uso
      </h1>
      <p className="text-sm text-slate-600 dark:text-slate-300/70 mb-6">
        Última atualização: 27 de Outubro de 2026
      </p>

      <div className="space-y-6 text-gray-700 dark:text-slate-300">
        <p>
          Ao acessar o site CalculaMatriz, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
            1. Uso de Licença
          </h2>
          <p>
            É concedida permissão para usar as ferramentas e materiais no site CalculaMatriz para fins pessoais, educacionais e não comerciais. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: modificar ou copiar os materiais para redistribuição comercial; tentar descompilar ou fazer engenharia reversa de qualquer software contido no site; remover quaisquer direitos autorais ou outras notações de propriedade dos materiais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
            2. Isenção de Responsabilidade
          </h2>
          <p>
            Os materiais no site CalculaMatriz são fornecidos &apos;como estão&apos;. O CalculaMatriz não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de adequação a um fim específico ou não violação de propriedade intelectual.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
            3. Limitações
          </h2>
          <p>
            Em nenhum caso o CalculaMatriz ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em nosso site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
            4. Links
          </h2>
          <p>
            O CalculaMatriz não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por parte do CalculaMatriz. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
            5. Modificações
          </h2>
          <p>
            O CalculaMatriz pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>
        </section>
      </div>

      <p className="mt-8 text-sm">
        Para entender como coletamos e usamos seus dados, veja também nossa{" "}
        <Link to="/politica-privacidade" className="text-accent hover:underline">
          Política de Privacidade
        </Link>
        .
      </p>
    </div>
  );
}

export default TermosUso;
