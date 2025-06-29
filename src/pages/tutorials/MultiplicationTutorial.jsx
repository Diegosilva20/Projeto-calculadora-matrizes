import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MatrixDisplay from "../../components/common/MatrixDisplay";

function MultiplicationTutorial() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Multiplicação de Matrizes: Guia Completo para Iniciantes | Tutoriais de Matrizes - Matrizes+</title>
        <meta
          name="description"
          content="Aprenda a multiplicação de matrizes com este guia completo para iniciantes, incluindo teoria, exemplos práticos, história, aplicações avançadas e complexidade computacional. Use nossa calculadora online!"
        />
        <meta
          name="keywords"
          content="multiplicação de matrizes, álgebra linear, guia para iniciantes, calculadora de matrizes, teoria, exemplos práticos, história, aplicações avançadas, complexidade computacional"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.matrizcalculator.com/tutorial/5"
        />
        <meta
          property="og:title"
          content="Multiplicação de Matrizes: Guia Completo para Iniciantes | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          property="og:description"
          content="Aprenda a multiplicação de matrizes com este guia completo para iniciantes, incluindo teoria, exemplos práticos, história, aplicações avançadas e complexidade computacional. Use nossa calculadora online!"
        />
        <meta
          property="og:url"
          content="https://www.matrizcalculator.com/tutorial/5"
        />
        <meta
          property="og:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Multiplicação de Matrizes: Guia Completo para Iniciantes | Tutoriais de Matrizes - Matrizes+"
        />
        <meta
          name="twitter:description"
          content="Aprenda a multiplicação de matrizes com este guia completo para iniciantes, incluindo teoria, exemplos práticos, história, aplicações avançadas e complexidade computacional. Use nossa calculadora online!"
        />
        <meta
          name="twitter:image"
          content="https://www.matrizcalculator.com/og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Multiplicação de Matrizes: Guia Completo para Iniciantes",
            description: "Aprenda a multiplicação de matrizes com este guia completo para iniciantes, incluindo teoria, exemplos práticos, história, aplicações avançadas e complexidade computacional.",
            step: [
              { "@type": "HowToStep", text: "Verifique a compatibilidade das dimensões." },
              { "@type": "HowToStep", text: "Calcule cada elemento usando o produto escalar." },
              { "@type": "HowToStep", text: "Pratique com os exemplos e exercícios resolvidos." },
            ],
            supply: { "@type": "HowToSupply", name: "Calculadora de Matrizes" },
            estimatedCost: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "USD",
            },
          })}
        </script>
      </Helmet>
      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link to="/tutorials" className="text-blue-600 hover:underline">Tutoriais</Link>
          </li>
          <li className="mx-2">/</li>
          <li><span className="text-gray-500">Multiplicação de Matrizes</span></li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Multiplicação de Matrizes: Guia Completo para Iniciantes
      </h1>
      <p className="mb-6 text-gray-700">
        A multiplicação de matrizes é uma das operações fundamentais da álgebra linear, essencial para resolver sistemas de equações, transformações geométricas e análise de dados. Este guia explica de forma clara e prática como realizar essa operação, com exemplos detalhados para facilitar o aprendizado.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          1. O que é Multiplicação de Matrizes?
        </h2>
        <p className="text-gray-700">
          A multiplicação de matrizes é uma operação matemática que combina duas matrizes para produzir uma terceira matriz. Diferentemente da multiplicação comum de números, a multiplicação de matrizes segue regras específicas e não é comutativa (A × B ≠ B × A).
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          2. Condição Fundamental para Multiplicação
        </h2>
        <p className="text-gray-700 mb-2">
          Para que duas matrizes possam ser multiplicadas, é necessário que <strong>o número de colunas da primeira matriz seja igual ao número de linhas da segunda matriz</strong>.
        </p>
        <p className="text-gray-700 mb-2">
          Se temos:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Matriz A com dimensão m × n (m linhas, n colunas)</li>
          <li>Matriz B com dimensão n × p (n linhas, p colunas)</li>
        </ul>
        <p className="text-gray-700 mb-2">
          O produto A × B resultará em uma matriz C com dimensão m × p.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Exemplo de compatibilidade:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>A (2×3) × B (3×4) = C (2×4) ✓ Possível</li>
          <li>A (2×3) × B (2×4) = Impossível ✗</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          3. Como Calcular a Multiplicação de Matrizes
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Tutorial Passo a Passo Completo
        </h3>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          PASSO 1: Verificar Compatibilidade das Dimensões
        </h4>
        <p className="text-gray-700 mb-2">
          <strong>Regra fundamental:</strong> O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz.
        </p>
        <p className="text-gray-700 mb-2">
          Matriz A: m × n (m linhas, n colunas)
        </p>
        <p className="text-gray-700 mb-2">
          Matriz B: n × p (n linhas, p colunas)
        </p>
        <p className="text-gray-700 mb-2">
          Resultado C: m × p
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Exemplo visual:</strong>
        </p>
        <p className="text-gray-700 mb-2">
          A (2×3) × B (3×2) = C (2×2) ✓ COMPATÍVEL
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Casos incompatíveis:</strong>
        </p>
        <p className="text-gray-700 mb-2">
          A (2×3) × B (4×2) = IMPOSSÍVEL ✗
        </p>

        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          PASSO 2: Determinar as Dimensões da Matriz Resultante
        </h4>
        <p className="text-gray-700 mb-2">
          A matriz resultado terá:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Linhas:</strong> Mesmo número de linhas da primeira matriz (A)</li>
          <li><strong>Colunas:</strong> Mesmo número de colunas da segunda matriz (B)</li>
        </ul>
        <p className="text-gray-700 mb-2">
          A (2×3) × B (3×4) = C (2×4)
        </p>

        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          PASSO 3: Preparar o Cálculo
        </h4>
        <p className="text-gray-700 mb-2">
          Organize as matrizes de forma visual:
        </p>
        <p className="text-gray-700 mb-2">
          B = [B₁₁ B₁₂ B₁₃]
        </p>
        <p className="text-gray-700 mb-2">
          [B₂₁ B₂₂ B₂₃]
        </p>
        <p className="text-gray-700 mb-2">
          [B₃₁ B₃₂ B₃₃]
        </p>
        <p className="text-gray-700 mb-2">
          A = [A₁₁ A₁₂ A₁₃] → [? ? ?]
        </p>
        <p className="text-gray-700 mb-2">
          [A₂₁ A₂₂ A₂₃] → [? ? ?]
        </p>

        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          PASSO 4: Calcular Cada Elemento da Matriz Resultado
        </h4>
        <p className="text-gray-700 mb-2">
          <strong>Fórmula para elemento c<sub>ij</sub>:</strong>
        </p>
        <p className="text-gray-700 mb-2">
          c<sub>ij</sub> = Σ(a<sub>ik</sub> × b<sub>kj</sub>) para k = 1 até n
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Método prático:</strong>
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-2">
          <li>Pegue a linha i da matriz A</li>
          <li>Pegue a coluna j da matriz B</li>
          <li>Multiplique elementos correspondentes</li>
          <li>Sume todos os produtos</li>
        </ol>

        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          PASSO 5: Aplicação Prática Detalhada
        </h4>
        <p className="text-gray-700 mb-2">
          Vamos calcular: A × B onde
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [2, 1, 3],
            [4, 0, 2],
          ]}
        />
        <p className="text-gray-700 mb-2">B =</p>
        <MatrixDisplay
          matrix={[
            [1, 4],
            [2, 1],
            [3, 5],
          ]}
        />
        <p className="text-gray-700 mb-2">
          <strong>Verificação:</strong> A(2×3) × B(3×2) = C(2×2) ✓
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Elemento C₁₁ (linha 1 de A × coluna 1 de B):</strong>
        </p>
        <p className="text-gray-700 mb-2">
          Linha 1 de A: [2, 1, 3]
        </p>
        <p className="text-gray-700 mb-2">
          Coluna 1 de B: [1, 2, 3]
        </p>
        <p className="text-gray-700 mb-2">
          C₁₁ = (2×1) + (1×2) + (3×3) = 2 + 2 + 9 = 13
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Elemento C₁₂ (linha 1 de A × coluna 2 de B):</strong>
        </p>
        <p className="text-gray-700 mb-2">
          Linha 1 de A: [2, 1, 3]
        </p>
        <p className="text-gray-700 mb-2">
          Coluna 2 de B: [4, 1, 5]
        </p>
        <p className="text-gray-700 mb-2">
          C₁₂ = (2×4) + (1×1) + (3×5) = 8 + 1 + 15 = 24
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Elemento C₂₁ (linha 2 de A × coluna 1 de B):</strong>
        </p>
        <p className="text-gray-700 mb-2">
          Linha 2 de A: [4, 0, 2]
        </p>
        <p className="text-gray-700 mb-2">
          Coluna 1 de B: [1, 2, 3]
        </p>
        <p className="text-gray-700 mb-2">
          C₂₁ = (4×1) + (0×2) + (2×3) = 4 + 0 + 6 = 10
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Elemento C₂₂ (linha 2 de A × coluna 2 de B):</strong>
        </p>
        <p className="text-gray-700 mb-2">
          Linha 2 de A: [4, 0, 2]
        </p>
        <p className="text-gray-700 mb-2">
          Coluna 2 de B: [4, 1, 5]
        </p>
        <p className="text-gray-700 mb-2">
          C₂₂ = (4×4) + (0×1) + (2×5) = 16 + 0 + 10 = 26
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Resultado final:</strong>
        </p>
        <MatrixDisplay
          matrix={[
            [13, 24],
            [10, 26],
          ]}
        />

        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          PASSO 6: Verificação do Resultado
        </h4>
        <ol className="list-decimal pl-6 text-gray-700">
          <li>Conferir dimensões: C deve ser 2×2 ✓</li>
          <li>Recalcular um elemento: Escolha C₁₁ e refaça o cálculo</li>
          <li>Usar propriedades: Se conhecer alguma propriedade específica</li>
        </ol>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Tutorial com Exemplo 3×3
        </h3>
        <p className="text-gray-700 mb-2">
          Agora um exemplo mais complexo:
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [1, 2, 1],
            [0, 1, 2],
            [2, 1, 0],
          ]}
        />
        <p className="text-gray-700 mb-2">B =</p>
        <MatrixDisplay
          matrix={[
            [2, 1, 0],
            [1, 0, 1],
            [0, 2, 1],
          ]}
        />
        <p className="text-gray-700 mb-2">
          <strong>PASSO 1:</strong> Verificar compatibilidade
        </p>
        <p className="text-gray-700 mb-2">
          - A(3×3) × B(3×3) = C(3×3) ✓
        </p>
        <p className="text-gray-700 mb-2">
          <strong>PASSO 2:</strong> Calcular primeira linha completa
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>C₁₁:</strong>
            Linha 1: [1, 2, 1] × Coluna 1: [2, 1, 0] = 1×2 + 2×1 + 1×0 = 4
          </li>
          <li>
            <strong>C₁₂:</strong>
            Linha 1: [1, 2, 1] × Coluna 2: [1, 0, 2] = 1×1 + 2×0 + 1×2 = 3
          </li>
          <li>
            <strong>C₁₃:</strong>
            Linha 1: [1, 2, 1] × Coluna 3: [0, 1, 1] = 1×0 + 2×1 + 1×1 = 3
          </li>
        </ul>
        <p className="text-gray-700 mb-2">
          <strong>PASSO 3:</strong> Calcular segunda linha
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>C₂₁:</strong>
            Linha 2: [0, 1, 2] × Coluna 1: [2, 1, 0] = 0×2 + 1×1 + 2×0 = 1
          </li>
          <li>
            <strong>C₂₂:</strong>
            Linha 2: [0, 1, 2] × Coluna 2: [1, 0, 2] = 0×1 + 1×0 + 2×2 = 4
          </li>
          <li>
            <strong>C₂₃:</strong>
            Linha 2: [0, 1, 2] × Coluna 3: [0, 1, 1] = 0×0 + 1×1 + 2×1 = 3
          </li>
        </ul>
        <p className="text-gray-700 mb-2">
          <strong>PASSO 4:</strong> Calcular terceira linha
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>C₃₁:</strong>
            Linha 3: [2, 1, 0] × Coluna 1: [2, 1, 0] = 2×2 + 1×1 + 0×0 = 5
          </li>
          <li>
            <strong>C₃₂:</strong>
            Linha 3: [2, 1, 0] × Coluna 2: [1, 0, 2] = 2×1 + 1×0 + 0×2 = 2
          </li>
          <li>
            <strong>C₃₃:</strong>
            Linha 3: [2, 1, 0] × Coluna 3: [0, 1, 1] = 2×0 + 1×1 + 0×1 = 1
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          <strong>Resultado final:</strong>
        </p>
        <MatrixDisplay
          matrix={[
            [4, 3, 3],
            [1, 4, 3],
            [5, 2, 1],
          ]}
        />

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Método de Organização Visual
        </h3>
        <p className="text-gray-700 mb-2">
          Uma técnica útil é criar uma tabela de trabalho:
        </p>
        <p className="text-gray-700 mb-2">
          | B₁₁ B₁₂ B₁₃
        </p>
        <p className="text-gray-700 mb-2">
          |-------------
        </p>
        <p className="text-gray-700 mb-2">
          A₁₁ A₁₂ A₁₃ | ? ? ?
        </p>
        <p className="text-gray-700 mb-2">
          A₂₁ A₂₂ A₂₃ | ? ? ?
        </p>
        <p className="text-gray-700 mb-2">
          A₃₁ A₃₂ A₃₃ | ? ? ?
        </p>
        <p className="text-gray-700 mb-2">
          Preencha cada célula calculando linha × coluna correspondente.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          4. Propriedades Importantes
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>1. Não Comutatividade:</strong> A × B ≠ B × A (geralmente)</li>
          <li><strong>2. Associatividade:</strong> (A × B) × C = A × (B × C)</li>
          <li><strong>3. Distributividade:</strong> A × (B + C) = A × B + A × C</li>
          <li><strong>4. Elemento Neutro:</strong> A × I = I × A = A (onde I é a matriz identidade)</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          5. História e Desenvolvimento da Multiplicação de Matrizes
        </h2>
        <p className="text-gray-700">
          A multiplicação de matrizes foi desenvolvida no século XIX por matemáticos como Arthur Cayley (1821-1895), que formalizou a teoria das matrizes em 1858. Inicialmente, as matrizes eram vistas apenas como arranjos de coeficientes para sistemas de equações lineares. Cayley reconheceu que essas estruturas poderiam ser tratadas como objetos matemáticos independentes, com suas próprias operações.
        </p>
        <p className="text-gray-700 mt-2">
          O desenvolvimento desta operação revolucionou campos como:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Física Quântica:</strong> Estados quânticos representados por vetores e transformações por matrizes</li>
          <li><strong>Engenharia:</strong> Análise de circuitos elétricos e sistemas de controle</li>
          <li><strong>Estatística:</strong> Análise multivariada e modelos de regressão</li>
          <li><strong>Computação:</strong> Base para algoritmos de aprendizado de máquina</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          6. Fundamentos Teóricos Avançados
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Produto Interno e Normas
        </h3>
        <p className="text-gray-700 mb-2">
          {'A multiplicação de matrizes está intimamente relacionada ao conceito de produto interno. Quando calculamos cᵢⱼ = Σ(aᵢₖ × bₖⱼ), estamos realizando o produto interno entre a i-ésima linha de A e a j-ésima coluna de B.'}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Exemplo de interpretação geométrica:</strong>
        </p>
        <p className="text-gray-700 mb-2">
          Se u = [3, 4] e v = [1, 2], então:
        </p>
        <p className="text-gray-700 mb-2">
          u · v = 3×1 + 4×2 = 11
        </p>
        <p className="text-gray-700 mb-2">
          Isso representa a projeção de u sobre v, multiplicada pelo comprimento de v.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Rank e Dimensionalidade
        </h3>
        <p className="text-gray-700 mb-2">
          O posto (rank) de uma matriz A é o número máximo de linhas (ou colunas) linearmente independentes. Na multiplicação A × B:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>rank(A × B) ≤ min(rank(A), rank(B))</li>
          <li>Se A é m×n e B é n×p, e rank(A) = n, então rank(A × B) = rank(B)</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          7. Tipos Especiais de Matrizes na Multiplicação
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Matrizes Ortogonais
        </h3>
        <p className="text-gray-700 mb-2">
          Uma matriz Q é ortogonal se Q^T × Q = I (onde Q^T é a transposta de Q). Propriedades importantes:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Preservam distâncias e ângulos</li>
          <li>Representam rotações e reflexões</li>
          <li>|det(Q)| = 1</li>
        </ul>
        <p className="text-gray-700 mb-2">
          <strong>Exemplo de matriz de rotação 2D:</strong>
        </p>
        <p className="text-gray-700 mb-2">
          Para θ = 45°:
        </p>
        <MatrixDisplay
          matrix={[
            [Math.sqrt(2) / 2, -Math.sqrt(2) / 2],
            [Math.sqrt(2) / 2, Math.sqrt(2) / 2],
          ]}
        />

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Matrizes Triangulares
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Superior:</strong> Elementos abaixo da diagonal são zero
        </p>
        <MatrixDisplay
          matrix={[
            ["a", "b", "c"],
            [0, "d", "e"],
            [0, 0, "f"],
          ]}
        />
        <p className="text-gray-700 mb-2">
          <strong>Inferior:</strong> Elementos acima da diagonal são zero
        </p>
        <MatrixDisplay
          matrix={[
            ["a", 0, 0],
            ["b", "c", 0],
            ["d", "e", "f"],
          ]}
        />
        <p className="text-gray-700 mb-2">
          <strong>Propriedade útil:</strong> O produto de matrizes triangulares superiores é triangular superior.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Matrizes Simétricas e Antissimétricas
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Simétrica:</strong> A = A^T
        </p>
        <MatrixDisplay
          matrix={[
            [1, 2, 3],
            [2, 4, 5],
            [3, 5, 6],
          ]}
        />
        <p className="text-gray-700 mb-2">
          <strong>Antissimétrica:</strong> A = -A^T
        </p>
        <MatrixDisplay
          matrix={[
            [0, 1, -2],
            [-1, 0, 3],
            [2, -3, 0],
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          8. Algoritmos de Multiplicação
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Algoritmo Clássico (O(n³))
        </h3>
        <p className="text-gray-700 mb-2">
          para i de 1 até m:
        </p>
        <p className="text-gray-700 mb-2">
          para j de 1 até p:
        </p>
        <p className="text-gray-700 mb-2">
          C[i,j] = 0
        </p>
        <p className="text-gray-700 mb-2">
          para k de 1 até n:
        </p>
        <p className="text-gray-700 mb-2">
          C[i,j] = C[i,j] + A[i,k] × B[k,j]
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Algoritmo de Strassen (O(n^2.807))
        </h3>
        <p className="text-gray-700 mb-2">
          Divide matrizes em blocos 2×2 e usa 7 multiplicações ao invés de 8:
        </p>
        <p className="text-gray-700 mb-2">
          Para matrizes 2×2:
        </p>
        <p className="text-gray-700 mb-2">
          [a b] × [e f] = [ae+bg af+bh]
        </p>
        <p className="text-gray-700 mb-2">
          [c d]   [g h]   [ce+dg cf+dh]
        </p>
        <p className="text-gray-700 mb-2">
          Strassen calcula:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>M₁ = (a+d)(e+h)</li>
          <li>M₂ = (c+d)e</li>
          <li>M₃ = a(f-h)</li>
          <li>M₄ = d(g-e)</li>
          <li>M₅ = (a+b)h</li>
          <li>M₆ = (c-a)(e+f)</li>
          <li>M₇ = (b-d)(g+h)</li>
        </ul>
        <p className="text-gray-700 mb-2">
          Resultado:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>C₁₁ = M₁ + M₄ - M₅ + M₇</li>
          <li>C₁₂ = M₃ + M₅</li>
          <li>C₂₁ = M₂ + M₄</li>
          <li>C₂₂ = M₁ - M₂ + M₃ + M₆</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          9. Casos Especiais de Multiplicação
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Multiplicação por Matriz Identidade
        </h3>
        <p className="text-gray-700 mb-2">
          A matriz identidade I é uma matriz quadrada com 1s na diagonal principal e 0s nos demais elementos:
        </p>
        <p className="text-gray-700 mb-2">I₂ =</p>
        <MatrixDisplay
          matrix={[
            [1, 0],
            [0, 1],
          ]}
        />
        <p className="text-gray-700 mb-2">I₃ =</p>
        <MatrixDisplay
          matrix={[
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ]}
        />
        <p className="text-gray-700 mb-2">
          <strong>Propriedade fundamental:</strong> A × I = I × A = A
        </p>
        <p className="text-gray-700 mb-2">Exemplo:</p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [2, 3],
            [1, 4],
          ]}
        />
        <p className="text-gray-700 mb-2">I =</p>
        <MatrixDisplay
          matrix={[
            [1, 0],
            [0, 1],
          ]}
        />
        <p className="text-gray-700 mt-2">
          Resultado: A × I = A
        </p>
        <MatrixDisplay
          matrix={[
            [2, 3],
            [1, 4],
          ]}
        />

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Multiplicação por Matriz Escalar
        </h3>
        <p className="text-gray-700 mb-2">
          Quando multiplicamos uma matriz por um escalar (número), multiplicamos cada elemento:
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [2, 1],
            [4, 0],
          ]}
        />
        <p className="text-gray-700 mb-2">3 × A =</p>
        <MatrixDisplay
          matrix={[
            [6, 3],
            [12, 0],
          ]}
        />

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Multiplicação de Matriz por Vetor
        </h3>
        <p className="text-gray-700 mb-2">
          Um caso especial importante é multiplicar uma matriz por um vetor (matriz coluna):
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [2, 1, 3],
            [4, 0, 2],
          ]}
        />
        <p className="text-gray-700 mb-2">V =</p>
        <MatrixDisplay
          matrix={[
            [1],
            [2],
            [1],
          ]}
        />
        <p className="text-gray-700 mt-2">
          Resultado: A × V = [2×1 + 1×2 + 3×1, 4×1 + 0×2 + 2×1] = [7, 6]
        </p>
        <MatrixDisplay
          matrix={[
            [7],
            [6],
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          10. Métodos de Cálculo Eficientes
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Método por Blocos
        </h3>
        <p className="text-gray-700 mb-2">
          Para matrizes grandes, podemos dividir em blocos menores:
        </p>
        <p className="text-gray-700 mb-2">
          [A₁₁ A₁₂] × [B₁₁ B₁₂] = [A₁₁B₁₁+A₁₂B₂₁ A₁₁B₁₂+A₁₂B₂₂]
        </p>
        <p className="text-gray-700 mb-2">
          [A₂₁ A₂₂]   [B₂₁ B₂₂]   [A₂₁B₁₁+A₂₂B₂₁ A₂₁B₁₂+A₂₂B₂₂]
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Algoritmo de Strassen
        </h3>
        <p className="text-gray-700">
          Para matrizes muito grandes, existe o algoritmo de Strassen que reduz a complexidade computacional, embora seja mais complexo de implementar manualmente.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          11. Aplicações Práticas Detalhadas
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          1. Sistemas de Equações Lineares
        </h3>
        <p className="text-gray-700 mb-2">
          Considere o sistema:
        </p>
        <p className="text-gray-700 mb-2">
          2x + 3y = 7
        </p>
        <p className="text-gray-700 mb-2">
          x + 4y = 10
        </p>
        <p className="text-gray-700 mb-2">
          Pode ser representado como A × X = B:
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [2, 3],
            [1, 4],
          ]}
        />
        <p className="text-gray-700 mb-2">X =</p>
        <MatrixDisplay
          matrix={[
            ["x"],
            ["y"],
          ]}
        />
        <p className="text-gray-700 mb-2">B =</p>
        <MatrixDisplay
          matrix={[
            [7],
            [10],
          ]}
        />

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          2. Transformações Geométricas
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Rotação de um ponto (x,y) por ângulo θ:</strong>
        </p>
        <p className="text-gray-700 mb-2">
          [cos θ -sen θ] × [x] = [x']
        </p>
        <p className="text-gray-700 mb-2">
          [sen θ  cos θ]   [y]   [y']
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Exemplo - Rotação de 90° (cos 90° = 0, sen 90° = 1):</strong>
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [0, -1],
            [1, 0],
          ]}
        />
        <p className="text-gray-700 mb-2">V =</p>
        <MatrixDisplay
          matrix={[
            [3],
            [2],
          ]}
        />
        <p className="text-gray-700 mt-2">
          Resultado: A × V = [-2, 3]
        </p>
        <MatrixDisplay
          matrix={[
            [-2],
            [3],
          ]}
        />

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          3. Análise Econômica - Modelo de Leontief
        </h3>
        <p className="text-gray-700 mb-2">
          Em economia, matrizes representam fluxos entre setores:
        </p>
        <p className="text-gray-700 mb-2">
          Produção = (I - A)⁻¹ × Demanda Final
        </p>
        <p className="text-gray-700 mb-2">
          Onde A é a matriz de coeficientes técnicos.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          4. Redes Neurais Artificiais
        </h3>
        <p className="text-gray-700 mb-2">
          Em inteligência artificial, cada camada de uma rede neural é uma multiplicação de matrizes:
        </p>
        <p className="text-gray-700 mb-2">
          Saída = Ativação(Pesos × Entrada + Bias)
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          12. Aplicações Avançadas em Diferentes Áreas
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Computação Gráfica e Jogos
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Matriz de Transformação Homogênea 4×4:</strong>
        </p>
        <MatrixDisplay
          matrix={[
            ["Sx", 0, 0, "Tx"],
            [0, "Sy", 0, "Ty"],
            [0, 0, "Sz", "Tz"],
            [0, 0, 0, 1],
          ]}
        />
        <p className="text-gray-700 mb-2">
          Onde S = escala, T = translação.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Pipeline de Renderização:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Model Matrix:</strong> Posiciona objeto no mundo</li>
          <li><strong>View Matrix:</strong> Posiciona câmera</li>
          <li><strong>Projection Matrix:</strong> Projeta para tela 2D</li>
        </ul>
        <p className="text-gray-700 mb-2">
          Resultado: Final = Projection × View × Model × Vertex
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Análise de Dados e Machine Learning
        </h3>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Regressão Linear Múltipla
        </h4>
        <p className="text-gray-700 mb-2">
          Y = X × β + ε
        </p>
        <p className="text-gray-700 mb-2">
          Solução: β = (XᵀX)⁻¹XᵀY
        </p>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Redes Neurais - Forward Propagation
        </h4>
        <p className="text-gray-700 mb-2">
          Camada 1: a₁ = σ(W₁ × x + b₁)
        </p>
        <p className="text-gray-700 mb-2">
          Camada 2: a₂ = σ(W₂ × a₁ + b₂)
        </p>
        <p className="text-gray-700 mb-2">
          Saída: y = σ(W₃ × a₂ + b₃)
        </p>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Análise de Componentes Principais (PCA)
        </h4>
        <p className="text-gray-700 mb-2">
          Y = X × W (W contém os componentes principais)
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Processamento de Sinais
        </h3>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Transformada Discreta de Fourier (DFT)
        </h4>
        <p className="text-gray-700 mb-2">
          F = W × f (W[k,n] = e^(-2πikn/N))
        </p>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Filtros Digitais
        </h4>
        <p className="text-gray-700 mb-2">
          y[n] = Σ h[k] × x[n-k] = H × X
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Economia e Finanças
        </h3>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Modelo Input-Output de Leontief
        </h4>
        <p className="text-gray-700 mb-2">
          X = (I - A)⁻¹ × D
        </p>
        <p className="text-gray-700 mb-2">
          Exemplo simplificado (2 setores):
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [0.2, 0.3],
            [0.4, 0.1],
          ]}
        />
        <p className="text-gray-700 mb-2">
          Se D = [100, 200], então:
        </p>
        <p className="text-gray-700 mb-2">
          X = [257.6, 291.0]
        </p>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Análise de Portfólio (Teoria de Markowitz)
        </h4>
        <p className="text-gray-700 mb-2">
          Risco = wᵀ × Σ × w
        </p>
        <p className="text-gray-700 mb-2">
          Retorno = μᵀ × w
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Física e Engenharia
        </h3>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Mecânica Quântica
        </h4>
        <p className="text-gray-700 mb-2">
          |ψ⟩ = Σ cᵢ|i⟩
        </p>
        <p className="text-gray-700 mb-2">
          Probabilidade = |⟨φ|ψ⟩|² = |φᵀ × ψ|²
        </p>
        <p className="text-gray-700 mb-2">
          Exemplo - Spin de elétron:
        </p>
        <p className="text-gray-700 mb-2">σₓ =</p>
        <MatrixDisplay
          matrix={[
            [0, 1],
            [1, 0],
          ]}
        />
        <p className="text-gray-700 mb-2">
          σₓ|↑⟩ = |↓⟩
        </p>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Análise de Circuitos
        </h4>
        <p className="text-gray-700 mb-2">
          A × V = I
        </p>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Método dos Elementos Finitos
        </h4>
        <p className="text-gray-700 mb-2">
          K × u = f
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Bioinformática e Genética
        </h3>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Alinhamento de Sequências
        </h4>
        <p className="text-gray-700 mb-2">
          <code className="bg-gray-100 p-1 rounded text-sm">
            {'Score[i,j] = max{Score[i-1,j-1] + match(i,j), Score[i-1,j] + gap_penalty, Score[i,j-1] + gap_penalty}'}
          </code>
        </p>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Análise de Expressão Gênica
        </h4>
        <p className="text-gray-700 mb-2">
          X[genes × amostras] × W[amostras × condições] = Y[genes × condições]
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          13. Otimização e Performance
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Técnicas de Otimização
        </h3>
        <ol className="list-decimal pl-6 text-gray-700">
          <li><strong>Loop Unrolling:</strong> Reduz overhead de loops</li>
          <li><strong>Cache Blocking:</strong> Otimiza acesso à memória</li>
          <li><strong>Paralelização:</strong> Distribui cálculos entre múltiplos processadores</li>
          <li><strong>SIMD:</strong> Single Instruction, Multiple Data</li>
        </ol>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Implementações Eficientes
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>BLAS (Basic Linear Algebra Subprograms):</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Level 1: Operações vetor-vetor (O(n))</li>
          <li>Level 2: Operações matriz-vetor (O(n²))</li>
          <li>Level 3: Operações matriz-matriz (O(n³))</li>
        </ul>
        <p className="text-gray-700 mb-2">
          <strong>Bibliotecas otimizadas:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Intel MKL</li>
          <li>OpenBLAS</li>
          <li>ATLAS</li>
          <li>cuBLAS (GPU)</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          14. Interpretação Geométrica
        </h2>
        <p className="text-gray-700">
          A multiplicação de matrizes pode ser vista como uma composição de transformações lineares. Cada matriz representa uma transformação no espaço:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Escala:</strong> Aumenta ou diminui dimensões</li>
          <li><strong>Rotação:</strong> Gira objetos ao redor da origem</li>
          <li><strong>Reflexão:</strong> Espelha objetos</li>
          <li><strong>Cisalhamento:</strong> Deforma objetos mantendo área</li>
        </ul>
        <p className="text-gray-700 mt-2">
          <strong>Exemplo de composição:</strong> Se T₁ é uma rotação e T₂ é uma escala, então T₂ × T₁ aplica primeiro a rotação, depois a escala.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          15. Erros Comuns e Como Evitá-los
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          1. Confundir Ordem de Multiplicação
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Erro:</strong> Assumir que A × B = B × A
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Correção:</strong> Sempre respeitar a ordem, pois multiplicação matricial não é comutativa
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          2. Dimensões Incompatíveis
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Erro:</strong> Tentar multiplicar matriz 2×3 por matriz 2×4
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Correção:</strong> Verificar que colunas da primeira = linhas da segunda
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          3. Erro de Cálculo nos Produtos Escalares
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Erro:</strong> Misturar elementos de diferentes linhas/colunas
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Correção:</strong> Usar método sistemático: sempre linha × coluna
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          4. Confundir com Multiplicação Element-wise
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Erro:</strong> Multiplicar elemento por elemento (como no produto de Hadamard)
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Correção:</strong> Lembrar que multiplicação matricial usa produtos escalares
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          16. Ferramentas e Recursos para Prática
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Calculadoras Online
        </h3>
        <p className="text-gray-700 mb-2">
          Para verificar seus cálculos, existem calculadoras matriciais online, mas é importante praticar manualmente primeiro para desenvolver intuição.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Software Matemático
        </h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>MATLAB:</strong> Especializado em operações matriciais</li>
          <li><strong>Python (NumPy):</strong> Biblioteca poderosa para álgebra linear</li>
          <li><strong>Wolfram Alpha:</strong> Para verificação rápida de cálculos</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Exercícios Progressivos
        </h3>
        <ol className="list-decimal pl-6 text-gray-700">
          <li><strong>Iniciante:</strong> Matrizes 2×2</li>
          <li><strong>Intermediário:</strong> Matrizes 3×3 e multiplicação por vetores</li>
          <li><strong>Avançado:</strong> Matrizes não-quadradas e aplicações práticas</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          17. Dicas para Evitar Erros
        </h2>
        <ol className="list-decimal pl-6 text-gray-700">
          <li>Sempre verifique a compatibilidade das dimensões antes de multiplicar</li>
          <li>Organize os cálculos em etapas, calculando elemento por elemento</li>
          <li>Use a regra mnemônica: "linha × coluna" para lembrar qual direção seguir</li>
          <li>Confira suas contas refazendo pelo menos um elemento de cada linha</li>
          <li>Pratique com exemplos simples antes de partir para matrizes maiores</li>
          <li>Desenhe diagramas para visualizar qual linha multiplica qual coluna</li>
          <li>Use cores diferentes para destacar linhas e colunas durante os cálculos</li>
          <li>Estabeleça um padrão de cálculo (sempre da esquerda para direita, linha por linha)</li>
        </ol>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          18. Complexidade Computacional
        </h2>
        <p className="text-gray-700">
          A multiplicação tradicional de duas matrizes n×n tem complexidade O(n³), significando que o tempo de cálculo cresce cubicamente com o tamanho da matriz. Para matrizes grandes, isso se torna computacionalmente caro:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Matriz 10×10: ~1.000 operações</li>
          <li>Matriz 100×100: ~1.000.000 operações</li>
          <li>Matriz 1000×1000: ~1.000.000.000 operações</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Por isso, algoritmos otimizados como Strassen (O(n^2.807)) são importantes em aplicações práticas.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          19. Exercícios Resolvidos Adicionais
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Exercício 1: Potência de Matriz
        </h3>
        <p className="text-gray-700 mb-2">
          Calcule A²:
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [1, 2],
            [3, 1],
          ]}
        />
        <p className="text-gray-700 mb-2">
          A² = A × A = [1 2] × [1 2] = [1+6 2+2] = [7 4]
        </p>
        <p className="text-gray-700 mb-2">
          [3 1]   [3 1]   [3+3 6+1]   [6 7]
        </p>
        <p className="text-gray-700 mt-2">
          Resultado:
        </p>
        <MatrixDisplay
          matrix={[
            [7, 4],
            [6, 7],
          ]}
        />

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Exercício 2: Produto de Três Matrizes
        </h3>
        <p className="text-gray-700 mb-2">
          Calcule A × B × C:
        </p>
        <p className="text-gray-700 mb-2">A =</p>
        <MatrixDisplay
          matrix={[
            [2, 1],
            [0, 3],
          ]}
        />
        <p className="text-gray-700 mb-2">B =</p>
        <MatrixDisplay
          matrix={[
            [1, 0],
            [2, 1],
          ]}
        />
        <p className="text-gray-700 mb-2">C =</p>
        <MatrixDisplay
          matrix={[
            [3],
            [1],
          ]}
        />
        <p className="text-gray-700 mb-2">
          Primeiro: A × B = [2 1] × [1 0] = [4 1]
        </p>
        <p className="text-gray-700 mb-2">
          [0 3]   [2 1]   [6 3]
        </p>
        <p className="text-gray-700 mb-2">
          Depois: (A×B) × C = [4 1] × [3] = [13]
        </p>
        <p className="text-gray-700 mb-2">
          [6 3]   [1]   [21]
        </p>
        <p className="text-gray-700 mt-2">
          Resultado:
        </p>
        <MatrixDisplay
          matrix={[
            [13],
            [21],
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          20. Estratégias de Estudo e Domínio
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Progressão Recomendada de Aprendizagem
        </h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Nível 1 - Fundamentos (1-2 semanas):</strong>
            <ul className="list-none pl-5">
              <li>Multiplicação de matrizes 2×2</li>
              <li>Verificação de compatibilidade de dimensões</li>
              <li>Cálculo manual elemento por elemento</li>
              <li>Propriedades básicas (não-comutatividade)</li>
            </ul>
          </li>
          <li>
            <strong>Nível 2 - Consolidação (2-3 semanas):</strong>
            <ul className="list-none pl-5">
              <li>Matrizes 3×3 e maiores</li>
              <li>Multiplicação por vetores</li>
              <li>Casos especiais (identidade, zero)</li>
              <li>Interpretação geométrica básica</li>
            </ul>
          </li>
          <li>
            <strong>Nível 3 - Aplicações (3-4 semanas):</strong>
            <ul className="list-none pl-5">
              <li>Sistemas de equações lineares</li>
              <li>Transformações geométricas</li>
              <li>Problemas práticos em diferentes áreas</li>
              <li>Uso de software matemático</li>
            </ul>
          </li>
          <li>
            <strong>Nível 4 - Avançado (4+ semanas):</strong>
            <ul className="list-none pl-5">
              <li>Algoritmos eficientes</li>
              <li>Aplicações em machine learning</li>
              <li>Análise de complexidade</li>
              <li>Projetos práticos</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Métodos de Verificação
        </h3>
        <ol className="list-decimal pl-6 text-gray-700">
          <li>Verificação Dimensional: Sempre conferir se as dimensões batem</li>
          <li>Casos Limite: Testar com matriz identidade e matriz zero</li>
          <li>Cálculo Reverso: Usar propriedades conhecidas para verificar</li>
          <li>Software: Confirmar com calculadoras matriciais</li>
          <li>Interpretação Física: O resultado faz sentido no contexto?</li>
        </ol>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Exercícios Práticos Progressivos
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Exercício 1 - Básico:</strong>
        </p>
        <p className="text-gray-700 mb-2">
          A = [1 2]
        </p>
        <p className="text-gray-700 mb-2">
          [3 4] B = [5 6]
        </p>
        <p className="text-gray-700 mb-2">
          [7 8]
        </p>
        <p className="text-gray-700 mb-2">
          Calcule A × B e B × A. Compare os resultados.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Exercício 2 - Intermediário:</strong>
        </p>
        <p className="text-gray-700 mb-2">
          Encontre X tal que:
        </p>
        <p className="text-gray-700 mb-2">A = [2 1] × X = [1 0]</p>
        <p className="text-gray-700 mb-2">[3 2]     [0 1]</p>
        <p className="text-gray-700 mb-2">
          <strong>Exercício 3 - Aplicação:</strong>
        </p>
        <p className="text-gray-700 mb-2">
          Uma empresa produz dois produtos usando três recursos. A matriz de coeficientes técnicos é:
        </p>
        <MatrixDisplay
          matrix={[
            [0.2, 0.3],
            [0.1, 0.4],
            [0.3, 0.2],
          ]}
        />
        <p className="text-gray-700 mb-2">
          Se a demanda é [100, 150] unidades, calcule os recursos necessários.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Exercício 4 - Transformações:</strong>
        </p>
        <p className="text-gray-700 mb-2">
          Aplique uma rotação de 30° seguida de uma escala de fator 2 ao ponto (1, 0).
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Recursos Complementares de Estudo
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Livros Recomendados:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>"Linear Algebra and Its Applications" - Gilbert Strang</li>
          <li>"Introduction to Linear Algebra" - Gilbert Strang</li>
          <li>"Linear Algebra Done Right" - Sheldon Axler</li>
        </ul>
        <p className="text-gray-700 mb-2">
          <strong>Canais YouTube Educacionais:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>3Blue1Brown (Essence of Linear Algebra)</li>
          <li>Khan Academy (Linear Algebra)</li>
          <li>MIT OpenCourseWare</li>
        </ul>
        <p className="text-gray-700 mb-2">
          <strong>Software Gratuito:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Octave:</strong> Alternativa livre ao MATLAB</li>
          <li><strong>Python + NumPy:</strong> Biblioteca poderosa e gratuita</li>
          <li><strong>R:</strong> Excelente para estatística e análise de dados</li>
          <li><strong>GeoGebra:</strong> Visualização geométrica</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Conexões com Outros Tópicos
        </h3>
        <p className="text-gray-700 mb-2">
          A multiplicação de matrizes é fundamental para:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Cálculo Avançado:</strong> Jacobiano, Hessiano, equações diferenciais</li>
          <li><strong>Álgebra Linear Avançada:</strong> Decomposições, autovalores, formas quadráticas</li>
          <li><strong>Estatística e Probabilidade:</strong> Análise multivariada, cadeias de Markov</li>
          <li><strong>Análise Numérica:</strong> Métodos iterativos, interpolação</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-gray-700">
          Importância no Mundo Atual
        </h3>
        <p className="text-gray-700">
          Com o crescimento da ciência de dados e inteligência artificial, a multiplicação de matrizes tornou-se ainda mais relevante:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Big Data:</strong> Processamento de grandes conjuntos de dados</li>
          <li><strong>Machine Learning:</strong> Base para algoritmos de aprendizado</li>
          <li><strong>Deep Learning:</strong> Redes neurais são essencialmente multiplicações matriciais</li>
          <li><strong>Computação Científica:</strong> Simulações numéricas complexas</li>
          <li><strong>Criptografia:</strong> Sistemas de segurança baseados em álgebra linear</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          21. Conclusão
        </h2>
        <p className="text-gray-700">
          A multiplicação de matrizes pode parecer complexa inicialmente, mas com prática e compreensão das regras fundamentais, torna-se uma ferramenta poderosa para resolver problemas matemáticos e aplicações do mundo real. Lembre-se sempre de verificar a compatibilidade das dimensões e seguir metodicamente o processo de cálculo elemento por elemento.
        </p>
        <p className="mt-4 text-gray-700">
          Com o domínio desta operação, você estará preparado para avançar em tópicos mais complexos da álgebra linear, como determinantes, sistemas lineares e transformações matriciais. Continue aprendendo com nosso tutorial sobre{" "}
          <Link to="/tutorial/4" className="text-blue-600 hover:underline">
            Transposição de Matrizes
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default MultiplicationTutorial;