import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Importe a lista de tutoriais do seu novo arquivo de dados
import { tutoriais } from '../data/tutorialsData'; 

// Importe o novo componente do tutorial que você criou
import DeterminantTutorial from './tutorials/DeterminantTutorial';
import InverseTutorial from './tutorials/InverseTutorial';
import GaussTutorial from './tutorials/GaussTutorial';
import TransposeTutorial from './tutorials/TransposeTutorial';
import MultiplicationTutorial from './tutorials/MultiplicationTutorial';
import LinearSystemsTutorial from './tutorials/LinearSystemsTutorial'; // <-- 1. IMPORTE O NOVO TUTORIAL

const TutorialPage = () => {
  const { id } = useParams();
  const tutorialId = parseInt(id, 10);
  
  // Encontra o tutorial atual para usar o título e a descrição
  const tutorial = tutoriais.find(t => t.id === tutorialId);

  // Mapeia o ID para o componente do tutorial correspondente
  const tutorialComponents = {
    1: <DeterminantTutorial />,
    2: <InverseTutorial />,
    3: <GaussTutorial />,
    4: <TransposeTutorial />,
    5: <MultiplicationTutorial />,
    6: <LinearSystemsTutorial />, // <-- 2. ADICIONE O NOVO TUTORIAL AQUI
  };

  const currentTutorialComponent = tutorialComponents[tutorialId];

  if (!tutorial || !currentTutorialComponent) {
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
        <title>{`${tutorial.title} | Tutoriais Matrizes+`}</title>
        <meta name="description" content={tutorial.description} />
        <link rel="canonical" href={`https://www.matrizcalculator.com/tutorial/${tutorial.id}`} />
      </Helmet>
      {currentTutorialComponent}
    </div>
  );
};

export default TutorialPage;