# #EuNãoEsqueci

Site de campanha, 100% baseado em dados e fontes públicas, que reúne a trajetória política, o patrimônio, o histórico legislativo, o caso Banco Master e o plano de governo de Flávio Bolsonaro, com comparação ao plano de governo de Lula. A tese que o site defende é política (“quem não apoia corrupção não vota no Flávio”); **os fatos que a sustentam não são opinião: cada um tem fonte e um selo que diz exatamente o que ele é.**

Estética inspirada no cartaz “EU NÃO SOU COVEIRO, TÁ CERTO? #eunãoesqueci”: halftone vermelho, tipografia pesada em caixa alta e azul-marinho.

> Site estático (Vite + JavaScript + [three.js](https://threejs.org/)). Sem back-end, sem banco de dados, sem cookies próprios.

---

## Autoria

Site criado por **[@verronebrunaa](https://github.com/verronebrunaa)**. Código em [github.com/verronebrunaa/eunaoesqueci](https://github.com/verronebrunaa/eunaoesqueci).

---

## Seções do site

| Âncora | O que mostra |
|---|---|
| `#linha` | Linha do tempo de 2003 a 2026, com selo em cada marco (fato documentado, alegação do MP, em apuração, anulado pela Justiça) e links dentro das frases |
| `#patrimonio` | Gráfico de barras 2D do patrimônio declarado ao TSE; clicar numa barra abre os bens daquele ano ao lado |
| `#governo` | O governo Bolsonaro (2019–2022): Covid, CPI, vacinas |
| `#master` | Caso Master: capa, linha do tempo da investigação e mosaico cronológico de áudios e mensagens |
| `#historico` | Histórico legislativo no Senado (projetos apresentados, aprovados, votações) |
| `#comparativo` | Plano do Flávio × plano do Lula, tema a tema, com a página do PDF de cada trecho |
| `#voto` | Fechamento e botão de compartilhar |

O fundo animado (halftone) é um shader em three.js que reage ao mouse e ao scroll.

---

## Como rodar

Requisitos: Node.js 18+.

```bash
npm install
npm run dev        # servidor local em http://localhost:5173
npm run build      # gera a pasta dist/ (site estático)
npm run preview    # serve o dist/ para conferir o build
```

O servidor usa a porta `5173`. Para outra porta, defina `PORT` (ex.: `PORT=5180 npm run dev`).

---

## Estrutura

```
index.html          Estrutura das seções (texto fixo)
src/
  data.js           TODOS os dados factuais, com fonte (veja abaixo)
  main.js           Desenha linha do tempo, comparativo, áudios; fundo three.js
  chart.js          Gráfico de barras do patrimônio (2D, botões acessíveis)
  style.css         Estilo e regras de cor
public/img/
  capa-master-intercept.jpg   Capa do caso Master (crédito: Intercept Brasil)
```

### `src/data.js` — a regra de ouro

Tudo que é fato mora aqui, e **nada entra sem fonte**. Os principais blocos:

- `timeline` — marcos da linha do tempo. Campos: `data`, `titulo`, `texto`, `status`, `fonte` (e `fonte2` se houver segunda fonte).
- `midias` — áudios e mensagens do caso Master, **em ordem cronológica** (a posição no mosaico depende da ordem; veja “Mosaico”).
- `comparativo` — um objeto por tema, com o trecho de cada plano e a **página do PDF**. `null` significa “não consta no plano” (conferido por busca no texto inteiro do PDF). A linha “Maioridade penal” tem ainda o bloco `dados` com números oficiais.
- `patrimonio` e `detalhes` — valores declarados ao TSE e os bens de cada ano que as fontes detalham.
- `PLANOS` e `semMencaoFlavio` — links dos PDFs e termos que não aparecem no plano do Flávio.

**Selos de status** (`status` na linha do tempo):

| Valor | Selo | Quando usar |
|---|---|---|
| `documentado` | Fato documentado | Está em documento, decisão ou registro oficial |
| `alegacao` | Alegação do MP | Afirmação do Ministério Público, não confirmada em julgamento |
| `apuracao` | Em apuração | Investigação em andamento |
| `anulado` | Anulado pela Justiça | Provas ou decisões anuladas; **não é absolvição nem condenação** |

**Links dentro do texto:** na linha do tempo, `{1:Nome do veículo}` vira um link para `fonte`, e `{2:Nome}` para `fonte2`. O veículo deve aparecer naturalmente na frase (“Segundo a {1:CartaCapital}, …”).

---

## Regras editoriais (leia antes de editar)

1. **Nada sem fonte.** Cada fato linka a publicação original. Preferir grande imprensa, documentos oficiais e decisões judiciais.
2. **Dizer o que cada coisa é.** Investigação, denúncia e alegação **não são condenação**. Use “o MP afirma”, “segundo a PF”, “em apuração”. Nunca “ele lavou dinheiro” como fato.
3. **Anulação não é absolvição.** O caso das rachadinhas foi anulado por forma (foro e provas) e arquivado em 2022, sem julgamento de mérito. O site diz isso.
4. **Mostrar a versão da outra parte.** Onde existe, a defesa de Flávio aparece (ex.: “financiamento privado, sem contrapartida”).
5. **Divergência entre fontes aparece como divergência** (ex.: venda × devolução da franquia Kopenhagen; US$ 10,6 mi × US$ 24 mi no caso Master). Não somar nem escolher em silêncio.
6. **Resultados que o plano de governo atribui a si mesmo** (ex.: “15 milhões de cirurgias”) são afirmações do próprio documento, e a página avisa isso.
7. **Dados que cortam para os dois lados entram com ponto de comparação** (ex.: população prisional no governo atual **e** no anterior).
8. **Áudios e vídeos: só link ou player oficial da publicação original.** Nenhum arquivo é hospedado, e nada de origem desconhecida entra. Em set/2026, o TSE mandou remover um vídeo feito com IA ligando Flávio a Vorcaro; material falso derruba a credibilidade da campanha e pode gerar responsabilização.

---

## Design

- **Cores** (`:root` em `style.css`): vermelho `#e8323c`, rosa `#f3a5a5`, papel `#f6e9e6`, azul-marinho `#0e2a4a`.
- **Fontes:** Archivo e Archivo Black (Google Fonts).
- **Regra do contorno no vermelho:** texto vermelho **com contorno azul** só quando fica direto sobre o fundo three.js (título do topo, destaques de título de seção, datas fora dos cards). **Sem contorno** quando o fundo é liso (cards, painéis, seção azul). A introdução da linha do tempo está sobre painel liso.
- **Cards em fileiras de três** (uma coluna abaixo de 900 px). Os áudios do Master usam um **mosaico**: a posição de cada card vem das classes `b1`…`b7` no CSS, que seguem a ordem de `midias`. **Se entrar um card novo em `midias`, ajuste as posições em `style.css`** (bloco “Mosaico dos áudios e mensagens”).
- Acessibilidade: barras do gráfico são botões (teclado), links com texto descritivo, `prefers-reduced-motion` respeitado.

---

## Fontes de dados

**Documentos primários usados**
- Plano de governo de Flávio Bolsonaro (PDF, 76 p.) e programa de governo de Lula (PDF, 84 p.), ambos registrados no TSE. Os trechos do comparativo citam a página.
- 20º Anuário Brasileiro de Segurança Pública (2026), do Fórum Brasileiro de Segurança Pública, com dados do Sisdepen/Ministério da Justiça e do Sinase (Tabelas 71, 75 e 88).
- Registro do Senado Federal do PL 3.190/2023.

**Imprensa citada** (lista completa nos links de `data.js`): CNN Brasil, Poder360, Metrópoles, Exame, Conjur, CartaCapital, Brasil de Fato, Intercept Brasil, UOL, Gazeta do Povo, Correio da Manhã, Terra, entre outros.

**Dados do TSE:** o DivulgaCandContas bloqueia consulta automática. Os valores de patrimônio vêm de reportagens que citam o TSE, e a página linka o [DivulgaCandContas](https://divulgacandcontas.tse.jus.br/) para conferência manual.

---

## Créditos e direitos de uso

- **Capa do Caso Master:** montagem do **Intercept Brasil**, publicada com a reportagem “ÁUDIO: Flávio Bolsonaro negociou com Daniel Vorcaro R$ 134 milhões para bancar filme sobre Jair”. Usada com crédito e link para a reportagem. **A licença de uso não foi confirmada** (veja pendências).
- **Vídeo:** player oficial do YouTube (modo `youtube-nocookie`) de vídeo do **UOL**. O vídeo não foi baixado nem copiado. A edição e o conteúdo são do UOL.
- Os áudios são linkados à publicação original (Intercept Brasil), sem hospedagem própria.

---

## Pendências antes de publicar

- [ ] **Responsável pela propaganda.** O rodapé hoje diz apenas “Conteúdo de propaganda eleitoral. Informações com fonte pública; investigação não é condenação.” A legislação eleitoral exige identificar quem responde pela propaganda; incluir nome/CNPJ da campanha ou pessoa responsável. Confirmar as regras com a assessoria jurídica da campanha.
- [ ] **Licença da capa.** Confirmar se o Intercept autoriza o reuso da montagem; se não, pedir autorização por e-mail ou trocar por arte própria. Se houver crédito individual do artista no artigo original, incluir na legenda.
- [ ] **Fontes alinhadas politicamente.** Alguns itens se apoiam em veículos de campo político (Fundação Perseu Abramo, Revista Fórum, Brasil de Fato). Trocar por grande imprensa ou documento oficial onde for possível.
- [ ] **Item da PF sobre o financiamento da casa no BRB** (`01/10/2026` na linha do tempo) vem de uma única reportagem (Revista Fórum). Confirmar em outra fonte.
- [ ] **Decisão do STF (30/11/2021)** foi lida pelo Conjur; a página oficial do STF estava inacessível. Conferir o teor no portal do STF.
- [ ] **Páginas do comparativo** “11, 48” (reforma tributária, plano do Lula) e “44–46” (moradia) são aproximadas; conferir no PDF.
- [ ] **Bens de 2006, 2010, 2014 e 2016** não estão detalhados: as fontes só trazem o total. Preencher a partir das fichas do DivulgaCandContas (`detalhes` em `data.js`).
- [ ] **Faltas em votações do Senado** (cerca de 52% em jan–jul/2026) ficaram **de fora**: o dado vem de um site partidário citando outro veículo. Só publicar se confirmado no painel de votações do Senado.
- [ ] **Gasto total do mandato:** não foi encontrado um total confiável; só o gasto com Correios em 2025 (R$ 161.288,81). O total pode ser levantado em Senado Transparência (gastos de cota por ano).
- [ ] Conferir **rodando no navegador normal** o player do UOL e os links externos.

---

## Deploy

O `npm run build` gera `dist/`, um site estático que pode ser hospedado em qualquer lugar (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3 etc.). A pasta `dist/` está no `.gitignore`.

---

## Aviso

O conteúdo é propaganda eleitoral a favor de uma candidatura. Os fatos e números vêm de fontes públicas, citadas em cada item, e foram checados no momento da pesquisa (outubro de 2026). Investigações e denúncias não são condenações, e o site afirma apenas o que as fontes sustentam. Se uma fonte for corrigida ou uma decisão mudar, atualize `src/data.js`.
