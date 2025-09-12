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
        Termos e Condições de Uso
      </h1>
      <p className="text-sm text-gray-500 mb-6">Última atualização: 04 de julho de 2025</p>

      <div className="space-y-6 text-gray-700">
        <p>
          Bem-vindo à MatrizCalculator! Estes termos e condições descrevem as
          regras para usar nosso site, localizado em{" "}
          <Link className="text-blue-600 hover:underline" to="/">
            www.matrizcalculator.com
          </Link>
          . Ao acessar este site, presumimos que você aceita estes termos em sua
          totalidade.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Definição do Serviço</h2>
          <p>
            A MatrizCalculator ("nós", "nosso") oferece uma plataforma online
            gratuita com ferramentas de cálculo, tutoriais interativos e
            exemplos práticos destinados a auxiliar estudantes e entusiastas no
            aprendizado e na resolução de operações com matrizes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente neste site – incluindo o design, layout,
            código-fonte, textos, tutoriais, imagens e a marca "MatrizCalculator"
            – é de nossa propriedade intelectual e protegido por leis de
            direitos autorais. A reprodução, distribuição ou uso comercial de
            qualquer material sem nossa permissão expressa por escrito é
            estritamente proibida.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. Precisão e Isenção de Garantias</h2>
          <p>
            Nosso compromisso é manter a mais alta precisão em todas as
            calculadoras e tutoriais. Contudo, o conteúdo da MatrizCalculator é
            disponibilizado para fins educacionais e de referência. Por essa
            natureza, não fornecemos garantias, expressas ou implícitas,
            quanto à absoluta exatidão ou completude das informações. O
            usuário deve utilizar a plataforma como uma ferramenta de apoio,
            ciente de que a validação dos resultados em fontes acadêmicas é
            recomendada.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Limitação de Responsabilidade</h2>
          <p>
            Em nenhuma circunstância a MatrizCalculator ou seus
            desenvolvedores serão responsabilizados por quaisquer perdas ou
            danos, diretos ou indiretos, decorrentes do uso ou da incapacidade
            de usar este site, incluindo, mas não se limitando a, erros em
            cálculos, perda de dados ou prejuízos acadêmicos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. Anúncios de Terceiros</h2>
          <p>
            Para manter a gratuidade do serviço, exibimos anúncios gerenciados
            por redes de publicidade de terceiros, como o Google AdSense. Não
            temos controle sobre o conteúdo desses anúncios e não endossamos os
            produtos ou serviços anunciados. Sua interação com qualquer anúncio
            é de sua inteira responsabilidade e regida pelos termos do
-            anunciante.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. Links para Outros Sites</h2>
          <p>
            Nosso site pode conter links para outros sites que não são operados
            por nós. Se você clicar em um link de terceiro, será direcionado
            para o site desse terceiro. Aconselhamos vivamente que reveja os
            Termos de Uso de todos os sites que visitar. Não temos controle e
            não assumimos qualquer responsabilidade pelo conteúdo ou práticas
            de quaisquer sites ou serviços de terceiros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">7. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer
            momento. As alterações entrarão em vigor imediatamente após sua
            publicação nesta página. Recomendamos que os usuários a revisitem
            periodicamente para se manterem informados.
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