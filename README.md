# CalculaMatriz

Aplicação web para cálculo e aprendizado de operações com matrizes em álgebra linear, com resolução passo a passo em frações exatas.

**Acesse online:** [calculamatriz.vercel.app](https://calculamatriz.vercel.app/)

---

## Funcionalidades

* **Cálculo exato com frações:** preserva números fracionários nas operações para evitar distorções de ponto flutuante.
* **Passo a passo detalhado:** detalha etapas de escalonamento (Gauss), determinante, inversa e sistemas lineares com indicação das operações de linha.
* **Tutoriais integrados:** guias conceituais com exemplos resolvidos e botões para carregar os dados diretamente na calculadora.
* **Exportação e compartilhamento:** permite exportar a resolução em PDF ou compartilhar via link direto.
* **Persistência local:** mantém os valores das matrizes preenchidas no navegador via `localStorage`.

---

## Estrutura do projeto

* **Interface:** React 18, Tailwind CSS, KaTeX para renderização de fórmulas matemáticas.
* **Cálculo:** Math.js e algoritmos próprios em `src/algorithms/` e `src/utils/`.
* **Roteamento e SEO:** React Router DOM, React Helmet Async, geração de sitemap e pré-renderização estática via Vite.

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

6. Para validar a pré-renderização estática:

```bash
npm run validate:prerender
```

---

## Licença

Este projeto é de uso educacional. Os direitos de conteúdo e marca estão reservados ao domínio calculamatriz.vercel.app.
