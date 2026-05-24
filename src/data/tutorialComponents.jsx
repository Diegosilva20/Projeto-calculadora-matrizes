import DeterminantTutorial from "../pages/tutorials/DeterminantTutorial";
import InverseTutorial from "../pages/tutorials/InverseTutorial";
import GaussTutorial from "../pages/tutorials/GaussTutorial";
import TransposeTutorial from "../pages/tutorials/TransposeTutorial";
import MultiplicationTutorial from "../pages/tutorials/MultiplicationTutorial";
import LinearSystemsTutorial from "../pages/tutorials/LinearSystemsTutorial";
import AdditionTutorial from "../pages/tutorials/AdditionTutorial";
import SubtractionTutorial from "../pages/tutorials/SubtractionTutorial";
import ScalarMultiplicationTutorial from "../pages/tutorials/ScalarMultiplicationTutorial";
import SarrusTutorial from "../pages/tutorials/SarrusTutorial";
import WhatIsMatrixTutorial from "../pages/tutorials/WhatIsMatrixTutorial";
import IdentityMatrixTutorial from "../pages/tutorials/IdentityMatrixTutorial";
import Determinant2x2Tutorial from "../pages/tutorials/Determinant2x2Tutorial";
import RegraDeCramerTutorial from "../pages/tutorials/RegraDeCramerTutorial";
import PostoDeMatrizTutorial from "../pages/tutorials/PostoDeMatrizTutorial";

const componentMap = {
  "determinante-de-matrizes": DeterminantTutorial,
  "matriz-inversa": InverseTutorial,
  "escalonamento-gauss": GaussTutorial,
  "matriz-transposta": TransposeTutorial,
  "multiplicacao-de-matrizes": MultiplicationTutorial,
  "sistemas-lineares": LinearSystemsTutorial,
  "soma-de-matrizes": AdditionTutorial,
  "subtracao-de-matrizes": SubtractionTutorial,
  "multiplicacao-por-escalar": ScalarMultiplicationTutorial,
  "determinante-3x3-regra-de-sarrus": SarrusTutorial,
  "o-que-e-uma-matriz": WhatIsMatrixTutorial,
  "matriz-identidade": IdentityMatrixTutorial,
  "determinante-2x2": Determinant2x2Tutorial,
  "regra-de-cramer": RegraDeCramerTutorial,
  "posto-de-matriz": PostoDeMatrizTutorial,
};

export const getTutorialComponent = (slug) => componentMap[slug] || null;
