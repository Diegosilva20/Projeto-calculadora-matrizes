import DeterminantTutorial from '../pages/tutorials/DeterminantTutorial';
import InverseTutorial from '../pages/tutorials/InverseTutorial';
import GaussTutorial from '../pages/tutorials/GaussTutorial';
import TransposeTutorial from '../pages/tutorials/TransposeTutorial';
import MultiplicationTutorial from '../pages/tutorials/MultiplicationTutorial';
import LinearSystemsTutorial from '../pages/tutorials/LinearSystemsTutorial';

export const tutoriais = [
    {
    id: 1,
    slug: 'determinante-de-matrizes',
    title: "Cálculo de Determinantes",
    description: "Descubra o que é, para que serve e aprenda a calcular o determinante de uma matriz.",
    component: <DeterminantTutorial />
  },
  {
    id: 2,
    slug: 'matriz-inversa',
    title: "Matriz Inversa",
    description: "Aprenda o que é uma matriz inversa e como calcular passo a passo pelos métodos 2x2 e Gauss-Jordan.",
    component: <InverseTutorial />
  },
  {
    id: 3,
    slug: 'escalonamento-gauss-jordan',
    title: 'Escalonamento (Gauss-Jordan)',
    description: "Domine o método de escalonamento de matrizes para resolver sistemas lineares.",
    component: <GaussTutorial />
  },
  {
    id: 4,
    slug: 'matriz-transposta',
    title: "Matriz Transposta",
    description: "Entenda o que é a matriz transposta, como calculá-la e suas principais propriedades.",
    component: <TransposeTutorial />
  },
  {
    id: 5,
    slug: 'multiplicacao-de-matrizes',
    title: "Como Multiplicar Matrizes",
    description: "Aprenda como multiplicar matrizes passo a passo. Veja exemplos práticos e aplicações.",
    component: <MultiplicationTutorial />
  },
  {
    id: 6, 
    slug: 'sistemas-lineares',
    title: 'Sistemas Lineares',
    description: "Veja como matrizes podem ser usadas para representar e resolver sistemas de equações lineares.",
    component: <LinearSystemsTutorial />
  },
]; 