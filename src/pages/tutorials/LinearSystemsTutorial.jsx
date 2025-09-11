import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

// Componente para formatação de LaTeX para clareza e consistência
const Latex = ({ children }) => <span className="font-serif italic">{children}</span>;

function LinearSystemsTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <Helmet>
        <title>Sistemas de Equações Lineares com Matrizes: O Guia Completo | Matrizes+</title>
        <meta
          name="description"
          content="Aprenda a resolver sistemas de equações lineares usando matrizes. Domine os métodos da matriz inversa (x=A⁻¹b) e Escalonamento de Gauss."
        />
        <meta
          name="keywords"
          content="sistemas de equações lineares, resolução de sistemas, método de gauss, matriz inversa, ax=b, álgebra linear, spd, spi, si"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.matrizcalculator.com/tutorial/6" /> {/* SUGESTÃO de ID 6 */}
        {/* ... restante das suas meta tags ... */}
      </Helmet>

      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li className="mx-2">/</li>
          <li><Link to="/tutorials" className="text-blue-600 hover:underline">Tutoriais</Link></li>
          <li className="mx-2">/</li>
          <li className="text-gray-500">Sistemas de Equações Lineares</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Resolvendo Sistemas de Equações Lineares com Matrizes
      </h1>
      <p className="mb-6">
        Você já aprendeu sobre as operações fundamentais com matrizes. Agora, vamos usar todo esse conhecimento para resolver um dos problemas mais clássicos da matemática e da ciência: os sistemas de equações lineares.
      </p>

      {/* 1. Representação Matricial */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Transformando Equações em Matrizes (Forma Ax = b)</h2>
        <p className="mb-4">
          Qualquer sistema de equações lineares pode ser reescrito de forma compacta e elegante usando matrizes. Considere o sistema:
        </p>
        <div className="p-3 bg-gray-100 rounded mb-4 font-mono text-center">
          2x + y = 5 <br />
          3x - 2y = 4
        </div>
        <p>Ele pode ser representado pela equação matricial <Latex>A · x = b</Latex>, onde:</p>
        <div className="grid md:grid-cols-3 gap-4 items-center text-center mt-4">
            <div>
                <h3 className="font-semibold mb-1">A: Matriz de Coeficientes</h3>
                <MatrixDisplay matrix={[[2, 1], [3, -2]]} />
            </div>
            <div>
                <h3 className="font-semibold mb-1">x: Vetor de Variáveis</h3>
                <MatrixDisplay matrix={[['x'], ['y']]} />
            </div>
            <div>
                <h3 className="font-semibold mb-1">b: Vetor de Constantes</h3>
                <MatrixDisplay matrix={[[5], [4]]} />
            </div>
        </div>
      </div>
      
      {/* 2. Classificação de Sistemas */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Os Três Tipos de Solução</h2>
        <p className="mb-4">
          Um sistema linear pode ter uma, infinitas ou nenhuma solução. O {" "}
          <Link to="/tutorial/1" className="text-blue-600 hover:underline">determinante</Link> da matriz de coeficientes (A) nos dá uma grande pista:
        </p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Sistema Possível e Determinado (SPD):</strong> Possui uma única solução. Geralmente ocorre quando <Latex>det(A) ≠ 0</Latex>.</li>
            <li><strong>Sistema Possível e Indeterminado (SPI):</strong> Possui infinitas soluções. Ocorre quando <Latex>det(A) = 0</Latex> e, durante o escalonamento, encontramos uma linha do tipo <Latex>0 = 0</Latex>.</li>
            <li><strong>Sistema Impossível (SI):</strong> Não possui solução. Ocorre quando, durante o escalonamento, encontramos uma contradição, como <Latex>0 = 5</Latex>.</li>
        </ul>
      </div>

      {/* 3. Métodos de Solução */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Como Resolver: Dois Métodos Poderosos</h2>
        <p className="mb-4">Vamos resolver o sistema anterior usando dois métodos diferentes.</p>

        {/* Método 1: Matriz Inversa */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 1: Usando a Matriz Inversa (x = A⁻¹b)</h3>
          <p className="mb-3">Este método é muito elegante e funciona se a matriz A for quadrada e seu determinante for diferente de zero.</p>
          <ol className="list-decimal list-inside space-y-2">
              <li><strong>Verificar o Determinante de A:</strong> <br/>
                <Latex>det(A) = (2)(-2) - (1)(3) = -4 - 3 = -7</Latex>. Como é diferente de 0, podemos prosseguir.
              </li>
              <li><strong>Calcular a <Link to="/tutorial/2" className="text-blue-600 hover:underline">Matriz Inversa</Link> (A⁻¹):</strong><br/>
                Para uma matriz 2x2, usamos a fórmula rápida: <br/>
                <Latex>A⁻¹ = (1/det(A)) · [[d, -b], [-c, a]] = (-1/7) · [[-2, -1], [-3, 2]]</Latex> <br/>
                <div className="my-2"><MatrixDisplay matrix={[['2/7', '1/7'], ['3/7', '-2/7']]} /></div>
              </li>
              <li><strong>Multiplicar A⁻¹ por b para achar x:</strong><br/>
                <Latex>x = A⁻¹ · b</Latex> <br/>
                <div className="flex items-center justify-center gap-4 my-2">
                    <MatrixDisplay matrix={[['2/7', '1/7'], ['3/7', '-2/7']]} /> <span>×</span> <MatrixDisplay matrix={[[5], [4]]} />
                </div>
                <Latex>x = [(2/7)·5 + (1/7)·4] = [14/7] = [2]</Latex><br/>
                <Latex>y = [(3/7)·5 + (-2/7)·4] = [7/7] = [1]</Latex>
              </li>
          </ol>
          <p className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-center"><strong>Solução:</strong> <Latex>x = 2</Latex> e <Latex>y = 1</Latex>.</p>
        </div>

        {/* Método 2: Escalonamento de Gauss */}
        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-3">Método 2: Escalonamento de Gauss (O Método Universal)</h3>
          <p className="mb-3">Este método funciona sempre e é o mais recomendado para sistemas maiores. Ele utiliza o processo de <Link to="/tutorial/3" className="text-blue-600 hover:underline">escalonamento</Link>.</p>
          <ol className="list-decimal list-inside space-y-2">
              <li><strong>Montar a Matriz Aumentada [A | b]:</strong>
                <div className="my-2"><MatrixDisplay matrix={[[2, 1, 5], [3, -2, 4]]} /></div>
              </li>
              <li><strong>Zerar o elemento abaixo do primeiro pivô:</strong><br/>
                A operação é <Latex>L₂ ← L₂ - (3/2)·L₁</Latex>.
                <div className="my-2"><MatrixDisplay matrix={[[2, 1, 5], [0, '-3.5', '-3.5']]} /></div>
              </li>
              <li><strong>Resolver por substituição reversa:</strong><br/>
                A segunda linha nos diz: <Latex>-3.5y = -3.5 ⇒ y = 1</Latex>. <br/>
                Substituindo y=1 na primeira linha: <Latex>2x + 1(1) = 5 ⇒ 2x = 4 ⇒ x = 2</Latex>.
              </li>
          </ol>
          <p className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-center"><strong>Solução:</strong> <Latex>x = 2</Latex> e <Latex>y = 1</Latex> (o mesmo resultado, como esperado!).</p>
        </div>
      </div>
      
      {/* 4. Conclusão */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-3">Conclusão: Qual Método Usar?</h2>
        <p className="mb-2"><strong>Use o método da Inversa</strong> quando a matriz de coeficientes for quadrada, pequena (2x2 ou 3x3) e você tiver certeza que ela é invertível. É um método rápido e elegante para esses casos.</p>
        <p><strong>Use o Escalonamento de Gauss</strong> para todas as outras situações. É um método robusto, universal, que funciona para qualquer tipo de sistema (quadrado ou não) e ainda te ajuda a identificar se o sistema tem infinitas ou nenhuma solução.</p>
        <p className="mt-4">
          Dominar a resolução de sistemas lineares é a chave para aplicar a Álgebra Linear em problemas do mundo real!
        </p>
      </div>
    </div>
  );
}

export default LinearSystemsTutorial;