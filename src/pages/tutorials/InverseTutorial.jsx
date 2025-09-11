import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

// Componente para formatação de LaTeX para clareza e consistência
const Latex = ({ children }) => <span className="font-serif italic">{children}</span>;

function InverseMatrixTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <Helmet>
        <title>Como Calcular a Inversa de uma Matriz: Guia Completo | Matrizes+</title>
        <meta
          name="description"
          content="Aprenda passo a passo como encontrar a inversa de uma matriz 2x2 e 3x3 com o método de Gauss-Jordan. Tutorial completo com fórmulas e exemplos práticos."
        />
        <meta
          name="keywords"
          content="matriz inversa, como calcular matriz inversa, inversa de uma matriz, método de gauss-jordan, matriz 2x2, matriz 3x3, álgebra linear"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.matrizcalculator.com/tutorial/2" />
        {/* ... restante das suas meta tags ... */}
      </Helmet>

      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link to="/tutorials" className="text-blue-600 hover:underline">Tutoriais</Link></li>
          <li className="mx-2">/</li>
          <li className="text-gray-500">Inversa de uma Matriz</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Como Calcular a Inversa de uma Matriz
      </h1>
      
      {/* 1. O que é e Quando Existe? */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">O que é uma Matriz Inversa?</h2>
        <p className="mb-4">
          Na álgebra, o inverso de um número '5' é '1/5', pois <Latex>5 × (1/5) = 1</Latex>. A <strong>matriz inversa</strong> é o conceito análogo para matrizes. A inversa da matriz A, denotada como <Latex>A⁻¹</Latex>, é a matriz que, quando multiplicada por A, resulta na <strong>matriz identidade</strong> (I).
        </p>
        <p className="text-center font-mono text-lg p-3 bg-gray-100 rounded">
          <Latex>A · A⁻¹ = A⁻¹ · A = I</Latex>
        </p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Quando ela existe?</h3>
        <p>Para uma matriz possuir inversa, duas condições são obrigatórias:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>A matriz deve ser <strong>quadrada</strong> (ex: 2x2, 3x3, etc.).</li>
          <li>Seu <strong>determinante</strong> deve ser <strong>diferente de zero</strong> (<Latex>det(A) ≠ 0</Latex>). Se o determinante for zero, a matriz é chamada de "singular" e não tem inversa.</li>
        </ul>
      </div>

      {/* 2. Métodos de Cálculo: Passo a Passo */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Métodos de Cálculo: Passo a Passo</h2>

        {/* Método 1: Matriz 2x2 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 1: A Fórmula Rápida para Matrizes 2x2</h3>
          <p className="mb-3">Para uma matriz 2x2, existe uma fórmula direta e eficiente:</p>
          <p className="text-center font-mono text-lg p-3 bg-gray-100 rounded">
            <Latex>A⁻¹ = (1/det(A)) · [[d, -b], [-c, a]]</Latex>
          </p>
          <p className="mt-4 mb-2"><strong>Exemplo:</strong> Encontre a inversa da Matriz A.</p>
          <MatrixDisplay matrix={[[2, 5], [1, 3]]} />
          <ol className="list-decimal list-inside space-y-2 mt-3">
            <li><strong>Calcular o determinante:</strong> <Latex>det(A) = (2·3) - (5·1) = 1</Latex>. Como é diferente de 0, a inversa existe.</li>
            <li><strong>Aplicar a fórmula:</strong> Troque 'a' e 'd' de lugar, inverta o sinal de 'b' e 'c'.</li>
            <p><Latex>A⁻¹ = (1/1) · [[3, -5], [-1, 2]]</Latex></p>
            <li><strong>Resultado Final:</strong></li>
            <MatrixDisplay matrix={[[3, -5], [-1, 2]]} />
          </ol>
        </div>

        {/* Método 2: Gauss-Jordan */}
        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 2: Gauss-Jordan (O Método Universal)</h3>
          <p className="mb-3">Este método funciona para qualquer matriz quadrada e é a base para os cálculos computacionais. O processo consiste em:</p>
          <ol className="list-decimal list-inside space-y-1 mb-4">
              <li>Criar uma matriz aumentada no formato <Latex>[A | I]</Latex>.</li>
              <li>Usar as operações elementares de linha (escalonamento) para transformar a parte <Latex>A</Latex> na matriz identidade <Latex>I</Latex>.</li>
              <li>A matriz que surgir no lado direito será a inversa <Latex>A⁻¹</Latex>. O formato final será <Latex>[I | A⁻¹]</Latex>.</li>
          </ol>
          <p className="mb-2"><strong>Exemplo:</strong> Encontre a inversa da Matriz A.</p>
          <MatrixDisplay matrix={[[1, 1, 0], [1, 0, 1], [0, 1, 1]]} />
          
          <p className="mt-3"><strong>1. Monte a matriz <Latex>[A | I]</Latex>:</strong></p>
          <MatrixDisplay matrix={[[1, 1, 0, 1, 0, 0], [1, 0, 1, 0, 1, 0], [0, 1, 1, 0, 0, 1]]} />
          
          <p className="mt-3"><strong>2. Aplique o escalonamento até obter <Latex>[I | A⁻¹]</Latex>:</strong></p>
          <p className="text-sm text-gray-600"><Latex>L₂ ← L₂ - L₁</Latex></p>
          <MatrixDisplay matrix={[[1, 1, 0, 1, 0, 0], [0, -1, 1, -1, 1, 0], [0, 1, 1, 0, 0, 1]]} />
          <p className="text-sm text-gray-600 mt-2"><Latex>L₃ ← L₃ + L₂</Latex></p>
          <MatrixDisplay matrix={[[1, 1, 0, 1, 0, 0], [0, -1, 1, -1, 1, 0], [0, 0, 2, -1, 1, 1]]} />
          <p className="text-sm text-gray-600 mt-2"><Latex>L₂ ← -1 · L₂</Latex> e <Latex>L₃ ← (1/2) · L₃</Latex></p>
          <MatrixDisplay matrix={[[1, 1, 0, 1, 0, 0], [0, 1, -1, 1, -1, 0], [0, 0, 1, -0.5, 0.5, 0.5]]} />
          <p className="text-sm text-gray-600 mt-2"><Latex>L₂ ← L₂ + L₃</Latex> e <Latex>L₁ ← L₁ - L₂</Latex> (agora zerando acima da diagonal)</p>
          <MatrixDisplay matrix={[[1, 0, 0, 0.5, 0.5, -0.5], [0, 1, 0, 0.5, -0.5, 0.5], [0, 0, 1, -0.5, 0.5, 0.5]]} />

          <p className="mt-4"><strong>3. A matriz à direita é a inversa:</strong></p>
          <MatrixDisplay matrix={[[0.5, 0.5, -0.5], [0.5, -0.5, 0.5], [-0.5, 0.5, 0.5]]} />
        </div>
      </div>
      
      {/* 3. Propriedades e Aplicações */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Propriedades e Aplicações</h2>
          <div className="grid md:grid-cols-2 gap-6">
              <div>
                  <h3 className="text-xl font-semibold mb-2">Propriedades Importantes</h3>
                  <ul className="list-disc pl-5 space-y-2">
                      <li><Latex>(A⁻¹)⁻¹ = A</Latex></li>
                      <li><Latex>(A·B)⁻¹ = B⁻¹·A⁻¹</Latex> (a ordem é invertida)</li>
                      <li><Latex>(Aᵀ)⁻¹ = (A⁻¹)ᵀ</Latex></li>
                  </ul>
              </div>
              <div>
                  <h3 className="text-xl font-semibold mb-2">Aplicações Práticas</h3>
                  <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Resolver sistemas lineares:</strong> Se <Latex>A·X = B</Latex>, então <Latex>X = A⁻¹·B</Latex>.</li>
                      <li><strong>Computação Gráfica:</strong> Para reverter transformações (rotação, escala).</li>
                      <li><strong>Criptografia:</strong> Para decodificar mensagens baseadas em matrizes.</li>
                  </ul>
              </div>
          </div>
      </div>

      {/* 4. Conclusão */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Conclusão</h2>
        <p>A matriz inversa é uma ferramenta essencial que "desfaz" a operação de uma matriz. Embora existam fórmulas para casos simples como 2x2, o método de Gauss-Jordan é a abordagem universal que reforça a importância do escalonamento na Álgebra Linear.</p>
        <p className="mt-4">
          Agora que você sabe encontrar a inversa, veja como aplicá-la na resolução de sistemas em nosso tutorial sobre o {" "}
          <Link to="/tutorial/3" className="text-blue-600 hover:underline">
            Método de Gauss
          </Link>.
        </p>
      </div>
    </div>
  );
}

export default InverseMatrixTutorial;