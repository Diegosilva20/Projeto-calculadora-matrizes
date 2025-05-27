import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function PoliticaPrivacidade() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Política de Privacidade - Matrizes+</title>
        <meta name="description" content="Saiba como o Matrizes+ coleta, usa e protege suas informações." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://projeto-calculadora-matrizes.vercel.app/politica" />
        <meta property="og:title" content="Política de Privacidade - Matrizes+" />
        <meta property="og:description" content="Leia a política de privacidade do Matrizes+ para entender como protegemos seus dados." />
        <meta property="og:url" content="https://projeto-calculadora-matrizes.vercel.app/politica" />
        <meta property="og:image" content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Privacidade - Matrizes+" />
        <meta name="twitter:description" content="Leia a política de privacidade do Matrizes+ para entender como protegemos seus dados." />
        <meta name="twitter:image" content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
      <p className="mb-2">Esta Política de Privacidade descreve como as informações são coletadas, usadas e protegidas no site "Matrizes+."</p>
      <ul className="list-disc pl-5 space-y-2 text-sm">
        <li><strong>Coleta de Informações:</strong> coletamos dados não pessoais (tipo de navegador, dispositivo, páginas visitadas). Nenhum dado pessoal é coletado sem consentimento.</li>
        <li><strong>Cookies de Terceiros:</strong> Usamos o Google AdSense para exibir anúncios. O Google pode definir cookies como IDE e DSID para personalizar anúncios. Saiba mais na <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline">Política de Privacidade do Google</a>.</li>
        <li><strong>Compartilhamento:</strong> não compartilhamos dados com terceiros, exceto se exigido por lei.</li>
        <li><strong>Segurança:</strong> protegemos as informações com medidas técnicas adequadas.</li>
        <li><strong>Alterações:</strong> esta política pode ser atualizada periodicamente.</li>
      </ul>
      <p className="mt-4 text-sm">Dúvidas? Entre em contato através da aba <Link to="/contato" className="text-blue-600 hover:underline">Contato</Link>.</p>
    </main>
  );
}

export default PoliticaPrivacidade; 