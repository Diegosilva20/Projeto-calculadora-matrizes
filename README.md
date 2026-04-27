# 🧮 Matriz Calculator

Uma aplicação web de alta performance focada na resolução e explicação passo a passo de operações complexas de álgebra linear e matrizes. Construída com foco em **Clean Architecture**, **UX Acadêmica** e **SEO Técnico Avançado**.

🌍 **Live Demo:** [matrizcalculator.com](https://www.matrizcalculator.com/)

---

## ✨ Principais Funcionalidades

* **Motor Matemático de Precisão:** Operações estruturadas para lidar com frações exatas, evitando problemas clássicos de ponto flutuante do JavaScript (powered by `mathjs`).
* **Resolução Passo a Passo:** Algoritmo customizado de Eliminação de Gauss-Jordan que documenta cada transformação de linha (ex: `L2 → L2 - (3) × L1`) em uma interface minimalista.
* **Persistência de Dados (Memória):** Implementação de Custom Hooks com sincronização em `LocalStorage`. O usuário não perde os dados da matriz ao atualizar a página ou navegar para os tutoriais.
* **Tutoriais Interligados:** Dicionário de SEO contextual que renderiza artigos dinamicamente e os conecta diretamente com as operações do motor matemático.
* **Arquitetura Otimizada para SEO:** Utilização de `react-helmet` para meta tags dinâmicas, injeção de JSON-LD Schema e `react-snap` para pré-renderização estática das rotas, garantindo indexação perfeita no Google.

---

## 🛠️ Tecnologias e Arquitetura

* **Core:** React.js, Vite
* **Estilização:** Tailwind CSS (Mobile-first e layout responsivo)
* **Roteamento:** React Router DOM
* **Matemática:** Math.js
* **SEO & SSR Estático:** React Helmet, React Snap

### Estrutura de Destaque (Clean Code)
A lógica de negócio foi rigorosamente separada da interface. O estado é gerido globalmente por um Custom Hook (`useMatrixCalculator.js`), e algoritmos pesados, como o de Gauss-Jordan, possuem seus próprios módulos (`src/algorithms/gaussJordan.js`), seguindo o princípio de *Separation of Concerns*.

---

## 🚀 Como Executar Localmente

1. Clone este repositório:
```bash
git clone https://github.com/diegosilva20/projeto-calculadora-matrizes.git
```

2. Entre no diretório do projeto:
```bash
cd projeto-calculadora-matrizes
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Também é possível iniciar o servidor com:
```bash
npm start
```

5. Gere o build de produção:
```bash
npm run build
```

6. Para simular a pré-renderização estática (SEO):
```bash
npm run seo
```

---

## 📄 Licença
Este projeto é de uso educacional. Os direitos de conteúdo e marca estão reservados ao domínio matrizcalculator.com.
