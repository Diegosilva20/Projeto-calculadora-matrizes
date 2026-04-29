# Matriz Calculator

Uma aplicação web de alta performance focada na resolução e explicação passo a passo de operações de álgebra linear e matrizes. Construída com foco em arquitetura limpa, UX educacional e SEO técnico.

**Live Demo:** [matrizcalculator.com](https://www.matrizcalculator.com/)

---

## Principais Funcionalidades

* **Motor matemático de precisão:** operações estruturadas para lidar com frações exatas, evitando problemas clássicos de ponto flutuante do JavaScript, com apoio do `mathjs`.
* **Resolução passo a passo:** algoritmo customizado de Eliminação de Gauss que documenta transformações de linha, como `L2 -> L2 - (3) x L1`, em uma interface didática.
* **Persistência de dados:** Custom Hook com sincronização em `localStorage`, para manter os dados da matriz ao atualizar a página ou navegar para os tutoriais.
* **Tutoriais interligados:** dicionário de SEO contextual que renderiza artigos dinamicamente e os conecta às operações do motor matemático.
* **SEO estruturado:** uso de `react-helmet`, JSON-LD Schema, sitemap e pré-renderização estática com `react-snap`.

---

## Tecnologias e Arquitetura

* **Core:** React.js, Vite
* **Estilização:** Tailwind CSS
* **Roteamento:** React Router DOM
* **Matemática:** Math.js
* **SEO e SSR estático:** React Helmet, React Snap

### Estrutura de destaque

A lógica de negócio fica separada da interface. O estado é gerido pelo Custom Hook `useMatrixCalculator.js`, e algoritmos específicos, como a Eliminação de Gauss, ficam em módulos próprios, como `src/algorithms/gaussianElimination.js`.

---

## Como Executar Localmente

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

6. Para simular a pré-renderização estática:

```bash
npm run seo
```

---

## Licença

Este projeto é de uso educacional. Os direitos de conteúdo e marca estão reservados ao domínio matrizcalculator.com.
