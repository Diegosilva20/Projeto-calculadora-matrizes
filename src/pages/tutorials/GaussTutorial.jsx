import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

// Componente para formatação de LaTeX para clareza e consistência
const Latex = ({ children }) => <span className="font-serif italic">{children}</span>;

function GaussEscalonamentoTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <Helmet>
        <title>
          Escalonamento de Matrizes: O Guia do Método de Gauss | Matrizes+
        </title>
        <meta
          name="description"
          content="Domine o escalonamento de matrizes com o Método de Gauss. Tutorial passo a passo para resolver sistemas lineares, com exemplos práticos e claros."
        />
        <meta
          name="keywords"
          content="escalonamento de matrizes, método de gauss, eliminação gaussiana, resolver sistemas lineares, matriz escalonada, álgebra linear, tutorial de matrizes"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.matrizcalculator.com/tutorial/3" />
        {/* ... restante das suas ótimas meta tags (OG, Twitter) atualizadas se desejar ... */}
      </Helmet>

      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link to="/tutorials" className="text-blue-600 hover:underline">Tutoriais</Link></li>
          <li className="mx-2">/</li>
          <li className="text-gray-500">Escalonamento de Matrizes</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Escalonamento de Matrizes: O Guia do Método de Gauss
      </h1>
      
      {/* 1. O que é o Escalonamento de Gauss? */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">O que é Escalonar uma Matriz?</h2>
        <p className="mb-4">
          O <strong>escalonamento</strong>, conhecido formalmente como <strong>Eliminação de Gauss</strong>, é um método poderoso para simplificar e resolver sistemas de equações lineares.
        </p>
        <p>
          O objetivo é transformar a matriz que representa o sistema em uma <strong>"forma de escada"</strong> (matriz escalonada), onde os elementos abaixo da diagonal principal são todos zeros. Isso torna a solução do sistema trivial através de substituição.
        </p>
      </div>

      {/* 2. A Receita do Método: Passos e Ferramentas */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">A Receita do Método: Passos e Ferramentas</h2>
        
        <h3 className="text-xl font-semibold mb-2">Ingrediente Principal: A Matriz Aumentada</h3>
        <p className="mb-4">Primeiro, convertemos o sistema de equações em uma única matriz, chamada <strong>matriz aumentada</strong>, que une os coeficientes das variáveis e os resultados.</p>
        
        <h3 className="text-xl font-semibold mb-2">As Ferramentas: Operações Elementares</h3>
        <p className="mb-2">Para escalonar, podemos usar três operações que não alteram a solução do sistema:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Trocar:</strong> Permutar a posição de duas linhas (<Latex>Lᵢ ↔ Lⱼ</Latex>).</li>
          <li><strong>Multiplicar:</strong> Multiplicar uma linha inteira por um número diferente de zero (<Latex>Lᵢ ← k·Lᵢ</Latex>).</li>
          <li><strong>Somar:</strong> Somar a uma linha um múltiplo de outra linha (<Latex>Lᵢ ← Lᵢ + k·Lⱼ</Latex>). Esta é a operação principal do escalonamento.</li>
        </ul>
      </div>

      {/* 3. Exemplo Prático: Resolvendo um Sistema 3x3 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Exemplo Prático: Resolvendo um Sistema 3x3</h2>
        <p className="mb-2">Vamos resolver o sistema:</p>
        <div className="p-3 bg-gray-100 rounded mb-4 font-mono">
          2x + 3y - z = 5<br />
          4x + 4y - 3z = 3<br />
          -2x + 3y + 2z = 7
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">Etapa 1: Criar a Matriz Aumentada</h3>
        <MatrixDisplay matrix={[[2, 3, -1, 5], [4, 4, -3, 3], [-2, 3, 2, 7]]} />

        <h3 className="text-xl font-semibold mt-4 mb-2">Etapa 2: Escalonar a Matriz</h3>
        <p className="mb-2"><strong>Objetivo:</strong> Usar o pivô da primeira linha (<Latex>a₁₁=2</Latex>) para zerar os elementos abaixo dele.</p>
        <ul className="list-disc pl-5 mb-3">
          <li>Para zerar o '4' da Linha 2: <Latex>L₂ ← L₂ - 2·L₁</Latex></li>
          <li>Para zerar o '-2' da Linha 3: <Latex>L₃ ← L₃ + L₁</Latex></li>
        </ul>
        <p className="mb-2">A matriz se torna:</p>
        <MatrixDisplay matrix={[[2, 3, -1, 5], [0, -2, -1, -7], [0, 6, 1, 12]]} />

        <p className="mt-4 mb-2"><strong>Próximo Objetivo:</strong> Usar o pivô da segunda linha (<Latex>a₂₂=-2</Latex>) para zerar o elemento abaixo dele.</p>
        <ul className="list-disc pl-5 mb-3">
          <li>Para zerar o '6' da Linha 3: <Latex>L₃ ← L₃ + 3·L₂</Latex></li>
        </ul>
        <p className="mb-2"><strong>Matriz Escalonada Final:</strong></p>
        <MatrixDisplay matrix={[[2, 3, -1, 5], [0, -2, -1, -7], [0, 0, -2, -9]]} />

        <h3 className="text-xl font-semibold mt-4 mb-2">Etapa 3: Substituição Reversa</h3>
        <p className="mb-2">Agora, reescrevemos a matriz como equações e resolvemos de baixo para cima.</p>
        <ol className="list-decimal list-inside space-y-2">
            <li><strong>Da Linha 3:</strong> <Latex>-2z = -9 ⇒ z = 9/2</Latex></li>
            <li><strong>Da Linha 2:</strong> <Latex>-2y - z = -7 ⇒ -2y - (9/2) = -7 ⇒ y = 5/4</Latex></li>
            <li><strong>Da Linha 1:</strong> <Latex>2x + 3y - z = 5 ⇒ 2x + 3(5/4) - (9/2) = 5 ⇒ x = 23/8</Latex></li>
        </ol>
      </div>

      {/* 4. Interpretando os Resultados */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Interpretando a Matriz Escalonada</h2>
        <p className="mb-3">Ao final do escalonamento, a forma da matriz revela o tipo de solução:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Sistema Possível e Determinado (SPD):</strong> Uma única solução. A matriz escalonada não possui linhas zeradas contraditórias (ex: <Latex>0 = 5</Latex>).</li>
          <li><strong>Sistema Possível e Indeterminado (SPI):</strong> Infinitas soluções. Surge uma linha de zeros, resultando em uma identidade verdadeira como <Latex>0 = 0</Latex>.</li>
          <li><strong>Sistema Impossível (SI):</strong> Nenhuma solução. Surge uma linha com uma contradição, como <Latex>0 = k</Latex> (onde k ≠ 0).</li>
        </ul>
      </div>

      {/* 5. Conclusão */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Conclusão</h2>
        <p>O Método de Gauss é uma técnica sistemática e fundamental na Álgebra Linear. Ele não apenas resolve sistemas, mas também nos ajuda a entender a natureza de suas soluções. Por ser um algoritmo, é a base para muitos softwares de cálculo numérico.</p>
        <p className="mt-4">
          O próximo passo é entender como o escalonamento pode ser usado para calcular{" "}
          <Link to="/tutorial/5" className="text-blue-600 hover:underline">
            determinantes
          </Link> de matrizes grandes de forma eficiente.
        </p>
      </div>
    </div>
  );
}

export default GaussEscalonamentoTutorial;