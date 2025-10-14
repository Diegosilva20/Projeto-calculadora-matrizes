import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { tutoriais } from '../data/tutorialsData'; // Importe a lista de tutoriais

const TutorialPage = () => {
  // 1. Pega o 'slug' da URL (ex: "matriz-transposta")
  const { slug } = useParams();

  // 2. Encontra o tutorial correspondente no array procurando pelo slug
  const tutorial = tutoriais.find(t => t.slug === slug);

  // Se nenhum tutorial for encontrado, mostra a mensagem de erro
  if (!tutorial) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Tutorial Não Encontrado</h1>
        <p>O tutorial que você está procurando não existe.</p>
        <Link to="/tutorials" className="text-blue-600 hover:underline mt-4 inline-block">
          Voltar para a lista de tutoriais
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{`${tutorial.title} | Tutoriais MatrizCalculadora`}</title>
        <meta name="description" content={tutorial.description} />
        {/* 3. Atualiza o link canônico para usar o slug */}
        <link rel="canonical" href={`https://www.matrizcalculator.com/tutorial/${tutorial.slug}`} />
      </Helmet>
      
      {/* 4. Renderiza o componente diretamente do objeto encontrado */}
      {tutorial.component}
    </div>
  );
};

export default TutorialPage;