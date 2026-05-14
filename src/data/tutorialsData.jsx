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
import WhatIsMatrixTutorial from '../pages/tutorials/WhatIsMatrixTutorial';
import IdentityMatrixTutorial from '../pages/tutorials/IdentityMatrixTutorial';
import Determinant2x2Tutorial from '../pages/tutorials/Determinant2x2Tutorial';
import RegraDeCramerTutorial from '../pages/tutorials/RegraDeCramerTutorial';
import PostoDeMatrizTutorial from '../pages/tutorials/PostoDeMatrizTutorial';

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
  11: <WhatIsMatrixTutorial />,
  12: <IdentityMatrixTutorial />,
  13: <Determinant2x2Tutorial />,
  14: <RegraDeCramerTutorial />,
  15: <PostoDeMatrizTutorial />,
};

// Adiciona a propriedade 'component' a cada tutorial
export const tutoriais = tutorialsInfo.map(tutorial => ({
  ...tutorial,
  component: componentMap[tutorial.id],
}));
