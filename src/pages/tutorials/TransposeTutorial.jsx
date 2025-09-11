import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

// Componente para formatação de LaTeX para clareza e consistência
const Latex = ({ children }) => <span className="font-serif italic">{children}</span>;

function MatrixTransposeTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <Helmet>
        <title>Matriz Transposta: O Guia Rápido Para Inverter Linhas e Colunas | Matrizes+</title>
        <meta
          name="description"
          content="Aprenda de forma rápida e visual o que é a matriz transposta. Veja como inverter linhas por colunas, suas propriedades e onde ela é aplicada."
        />
        <meta
          name="keywords"
          content="matriz transposta, transpor matriz, o que é matriz transposta, propriedades da transposta, álgebra linear"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.matrizcalculator.com/tutorial/4" />
        {/* ... restante das suas meta tags ... */}
      </Helmet>

      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link to="/tutorials" className="text-blue-600 hover:underline">Tutoriais</Link></li>
          <li className="mx-2">/</li>
          <li className="text-gray-500">Matriz Transposta</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Matriz Transposta: Invertendo Linhas e Colunas
      </h1>
      <p className="mb-6">
        A transposição é uma das operações mais simples e visuais da álgebra linear. A ideia é simplesmente "virar" a matriz, transformando cada linha em uma coluna.
      </p>

      {/* 1. O que é e Como Fazer? */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">O que é e Como Fazer? (A Regra do Espelho)</h2>
        <p className="mb-4">
          A transposta de uma matriz A, indicada por <Latex>Aᵀ</Latex>, é criada trocando suas linhas por suas colunas. A primeira linha vira a primeira coluna, a segunda linha vira a segunda coluna, e assim por diante.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center text-center">
          <div>
            <h3 className="font-semibold mb-2">Matriz Original (A) - 2x3</h3>
            <MatrixDisplay matrix={[[1, 2, 3], [4, 5, 6]]} />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Matriz Transposta (Aᵀ) - 3x2</h3>
            <MatrixDisplay matrix={[[1, 4], [2, 5], [3, 6]]} />
          </div>
        </div>
        
        <p className="mt-6 text-sm text-center bg-gray-50 p-3 rounded">
          <strong>Definição Formal:</strong> Se a matriz original A tem dimensão <Latex>m x n</Latex>, sua transposta <Latex>Aᵀ</Latex> terá dimensão <Latex>n x m</Latex>. O elemento da posição <Latex>(i, j)</Latex> em A vai para a posição <Latex>(j, i)</Latex> em <Latex>Aᵀ</Latex>.
        </p>
      </div>
      
      {/* 2. Propriedades Essenciais */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Propriedades Essenciais</h2>
        <p className="mb-4">A transposição segue algumas regras úteis que simplificam muitos cálculos:</p>
        <ul className="list-disc pl-5 space-y-3">
            <li><strong>Dupla Transposição:</strong> Transpor duas vezes retorna à matriz original. <br/><Latex>(Aᵀ)ᵀ = A</Latex></li>
            <li><strong>Soma:</strong> A transposta da soma é a soma das transpostas. <br/><Latex>(A + B)ᵀ = Aᵀ + Bᵀ</Latex></li>
            <li><strong>Multiplicação de Matrizes:</strong> A transposta do produto inverte a ordem da multiplicação. <strong>(Essa é a mais importante!)</strong><br/><Latex>(A · B)ᵀ = Bᵀ · Aᵀ</Latex></li>
            <li><strong>Determinante:</strong> A transposição não altera o determinante de uma matriz quadrada. <br/><Latex>det(Aᵀ) = det(A)</Latex></li>
        </ul>
      </div>

      {/* 3. Onde a Transposta é Usada? */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Onde a Transposta é Usada?</h2>
        <p className="mb-4">Embora pareça uma operação simples, a transposição é fundamental em várias áreas:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>
                <strong>Estatística e Machine Learning:</strong> Essencial para calcular a matriz de covariância e para equações de regressão linear, como <Latex>β = (XᵀX)⁻¹XᵀY</Latex>.
            </li>
             <li>
                <strong>Computação Gráfica:</strong> Usada para calcular a inversa de matrizes de rotação (que são ortogonais), simplificando a tarefa de "desfazer" uma rotação.
            </li>
            <li>
                <strong>Álgebra Linear:</strong> Ajuda a definir conceitos como matrizes simétricas (<Latex>A = Aᵀ</Latex>) e a calcular o produto escalar entre vetores.
            </li>
        </ul>
      </div>

      {/* 4. Conclusão */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Conclusão</h2>
        <p>A transposição é uma ferramenta elegante e poderosa. Sua simplicidade esconde uma grande utilidade, permitindo a manipulação de dados e a simplificação de fórmulas complexas em diversas áreas da ciência e tecnologia. Entendê-la bem é um passo crucial para aprofundar seus conhecimentos em Álgebra Linear.</p>
        <p className="mt-4">
          O próximo passo natural é entender como a transposta interage com a {" "}
          <Link to="/tutorial/5" className="text-blue-600 hover:underline">
            Multiplicação de Matrizes
          </Link>.
        </p>
      </div>
    </div>
  );
}

export default MatrixTransposeTutorial;