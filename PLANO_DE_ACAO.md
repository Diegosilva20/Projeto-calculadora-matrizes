# Plano de Ação Estratégico: Matriz Calculator

Este documento centraliza as tarefas para transformar o site de uma ferramenta commodity (que as IAs já resolvem) para uma **plataforma educacional imersiva**, focada em experiência do usuário (UX), retenção, tráfego orgânico (SEO) e futura monetização.

## Módulo 1: O Modo "Treino" (Gamificação)
**Objetivo:** Aumentar o tempo de tela (Dwell Time) fazendo o aluno testar seus conhecimentos ao invés de apenas copiar a resposta.
- [x] Criar o componente base `Pratica.jsx` na pasta `src/pages/`.
- [x] Adicionar a rota `/pratica` (ou `/treino`) no `App.jsx` e no Header.
- [x] Implementar a geração de matrizes aleatórias para o desafio (ex: Soma 2x2 ou 3x3).
- [x] Criar a interface onde o aluno preenche os campos em branco (Input de Resposta).
- [x] Lógica de validação visual em tempo real (célula fica verde ao acertar, vermelha se errada).
- [ ] Suportar outras operações além da soma (Subtração, Multiplicação por Escalar e Matrizes).
- [ ] Adicionar sistema de "Streak" (sequência de acertos) e nível de dificuldade.

## Módulo 2: O Visualizador Geométrico (O Efeito "Desmos")
**Objetivo:** Criar um diferencial absoluto contra o ChatGPT (que é puramente textual). Mostrar na prática como matrizes transformam o espaço bidimensional e tridimensional.
- [x] Escolher uma biblioteca gráfica (ex: `p5.js`, `three.js` ou gráficos SVG nativos / `chart.js`).
- [x] Criar uma nova rota `/visualizador` (ou integrar diretamente na Home).
- [x] Desenhar um "Grid" bidimensional básico com vetores (ex: um vetor `(1,0)` e `(0,1)`).
- [x] Criar um input onde, ao alterar a matriz, o grid e os vetores se distorcem/rotacionam em tempo real.
- [x] Adicionar presets interativos (ex: botão "Aplicar Cisalhamento", "Rotacionar 90º", "Refletir no eixo Y").

## Módulo 3: Ferramentas para Professores
**Objetivo:** Atrair professores do ensino médio e superior que buscam facilitar a rotina, trazendo um público fiel (recorrente).
- [ ] Criar gerador de matrizes com foco em "números bonitos" (onde matrizes invertíveis resultem em respostas inteiras, sem frações difíceis).
- [ ] Desenvolver "Gerador de Listas de Exercícios em PDF".
- [ ] Opção de imprimir a folha de questões para os alunos e uma folha de gabarito (passo a passo) para o professor.

## Módulo 4: Calculadoras de Nicho (Estratégia de Long-Tail SEO)
**Objetivo:** Ranqueamento no Google para termos ultra-específicos e de menor concorrência onde as IAs costumam falhar.
- [ ] Calculadora de Matriz de Confusão (Machine Learning / Ciência de Dados).
- [ ] Calculadora de Criptografia de Hill (Segurança da Informação).
- [ ] Calculadora de Cadeias de Markov / Matriz de Transição (Probabilidade / Estatística).
- [ ] Calculadora de Matrizes de Rotação 3D (Computação Gráfica / Games).
- [ ] Calculadora de Matriz de Rigidez (Engenharia Civil).

## Módulo 5: SEO Estrutural e Monetização
**Objetivo:** Escalar acessos, construir autoridade perante o Google e ativar anúncios.
- [ ] Programmatic SEO: Gerar páginas dedicadas a sistemas populares ou dúvidas frequentes (Ex: "Como escalonar matriz 4x4", "O que fazer quando o determinante dá zero?").
- [ ] Organizar o conteúdo existente em "Silos / Hubs" (ex: Ensino Médio, Computação, Engenharia).
- [ ] Escolher e registrar um domínio forte (ex: `.app`, `.com.br`).
- [ ] Monitorar tempo de tela e volume de busca com Google Search Console / Analytics.
- [ ] Aplicar para o Google AdSense assim que atingir tráfego orgânico consistente.

---
*Dica: Para marcar as tarefas como concluídas, troque `[ ]` por `[x]`.*
