import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { tutorials } from "../data/tutorialsData";
import DeterminantTutorial from "./tutorials/DeterminantTutorial";
import InverseTutorial from "./tutorials/InverseTutorial";
import GaussTutorial from "./tutorials/GaussTutorial";
import TransposeTutorial from "./tutorials/TransposeTutorial";
import MultiplicationTutorial from "./tutorials/MultiplicationTutorial";

function TutorialPage() {
  const { id } = useParams();
  const tutorial = tutorials.find((t) => t.id === parseInt(id));

  if (!tutorial) {
    return (
      <main className="mt-32 p-6 max-w-4xl mx-auto">
        <Helmet>
          <title>Tutorial Não Encontrado - Matrizes+</title>
          <meta
            name="description"
            content="O tutorial solicitado não foi encontrado no Matrizes+. Volte para a página inicial e explore nossos tutoriais de álgebra linear."
          />
          <meta
            name="keywords"
            content="tutorial não encontrado, matrizes, álgebra linear"
          />
          <meta name="robots" content="noindex" />
          <link
            rel="canonical"
            href="https://projeto-calculadora-matrizes.vercel.app/"
          />
        </Helmet>
        <h1 className="text-3xl font-bold mb-4">Tutorial Não Encontrado</h1>
        <p>Desculpe, o tutorial solicitado não existe.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Voltar para a página inicial
        </Link>
      </main>
    );
  }

  const TutorialComponent = {
    DeterminantTutorial,
    InverseTutorial,
    GaussTutorial,
    TransposeTutorial,
    MultiplicationTutorial,
  }[tutorial.component];

  return (
    <main className="mt-32 p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>{tutorial.title} | Tutoriais de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content={`${tutorial.description} Acesse exemplos práticos e use nossa calculadora online para matrizes!`}
        />
        <meta
          name="keywords"
          content={[
            "matrizes",
            "álgebra linear",
            "calculadora de matrizes",
            tutorial.id === 1
              ? "determinante"
              : tutorial.id === 2
              ? "inversa"
              : tutorial.id === 3
              ? "eliminação de gauss"
              : tutorial.id === 4
              ? "transposição"
              : "multiplicação",
            tutorial.title.toLowerCase().replace("?", ""),
          ].join(", ")}
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://projeto-calculadora-matrizes.vercel.app/tutorial/${id}`}
        />
        <meta
          property="og:title"
          content={`${tutorial.title} | Tutoriais de Matrizes - Matrizes+`}
        />
        <meta
          property="og:description"
          content={`${tutorial.description} Acesse exemplos práticos e use nossa calculadora online para matrizes!`}
        />
        <meta
          property="og:url"
          content={`https://projeto-calculadora-matrizes.vercel.app/tutorial/${id}`}
        />
        <meta
          property="og:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${tutorial.title} | Tutoriais de Matrizes - Matrizes+`}
        />
        <meta
          name="twitter:description"
          content={`${tutorial.description} Acesse exemplos práticos e use nossa calculadora online para matrizes!`}
        />
        <meta
          name="twitter:image"
          content="https://projeto-calculadora-matrizes.vercel.app/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: tutorial.title,
            description: tutorial.description,
            step: [
              { "@type": "HowToStep", text: "Leia o tutorial passo a passo." },
              {
                "@type": "HowToStep",
                text: "Siga os exemplos práticos fornecidos.",
              },
              {
                "@type": "HowToStep",
                text: "Use nossa calculadora para praticar os cálculos.",
              },
            ],
            supply: { "@type": "HowToSupply", name: "Calculadora de Matrizes" },
            estimatedCost: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "USD",
            },
          })}
        </script>
      </Helmet>

      <TutorialComponent />
      <Link to="/" className="text-blue-600 hover:underline mt-6 inline-block">
        Voltar para a página inicial
      </Link>
    </main>
  );
}

export default TutorialPage;