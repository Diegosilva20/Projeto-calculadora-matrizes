// src/data/tutorialsData.js

import { tutorialsInfo } from './tutorialsInfo'; // Importa os dados puros

// Importa os componentes React
import DeterminantTutorial from '../pages/tutorials/DeterminantTutorial';
import InverseTutorial from '../pages/tutorials/InverseTutorial';
import GaussTutorial from '../pages/tutorials/GaussTutorial';
import TransposeTutorial from '../pages/tutorials/TransposeTutorial';
import MultiplicationTutorial from '../pages/tutorials/MultiplicationTutorial';
import LinearSystemsTutorial from '../pages/tutorials/LinearSystemsTutorial';
import AdditionTutorial from '../pages/tutorials/AdditionTutorial';
import SubtractionTutorial from '../pages/tutorials/SubtractionTutorial';
import ScalarMultiplicationTutorial from '../pages/tutorials/ScalarMultiplicationTutorial';
import SarrusTutorial from '../pages/tutorials/SarrusTutorial';

// Mapeia o ID para o componente correspondente
const componentMap = {
  1: <DeterminantTutorial />,
  2: <InverseTutorial />,
  3: <GaussTutorial />,
  4: <TransposeTutorial />,
  5: <MultiplicationTutorial />,
  6: <LinearSystemsTutorial />,
  7: <AdditionTutorial />,
  8: <SubtractionTutorial />,
  9: <ScalarMultiplicationTutorial />,
  10: <SarrusTutorial />,
};

// Adiciona a propriedade 'component' a cada tutorial
export const tutoriais = tutorialsInfo.map(tutorial => ({
  ...tutorial,
  component: componentMap[tutorial.id],
}));
