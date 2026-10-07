// Toda informação factual do site vive aqui, sempre com fonte.
// status: 'documentado' | 'alegacao' | 'apuracao' | 'anulado'
// Regra: nada entra sem `fonte`. Alegação do MP e investigação NÃO são condenação.

export const STATUS = {
  documentado: 'Fato documentado',
  alegacao: 'Alegação do MP',
  apuracao: 'Em apuração',
  anulado: 'Anulado pela Justiça',
}

// Links dentro do texto: {1:texto} aponta para `fonte`; {2:texto} aponta para `fonte2`.
export const timeline = [
  { data: '2003', titulo: 'Assume na Alerj', texto: 'Eleito deputado estadual no Rio aos 22 anos, o mais jovem da legislatura, segundo o {1:ND Mais}. Fica na Assembleia por quatro mandatos, até 2018.', status: 'documentado', fonte: 'https://ndmais.com.br/politica/flavio-bolsonaro-trajetoria/' },
  { data: '27/11/2012', titulo: 'Depósito em espécie de R$ 638,4 mil', texto: 'Segundo o MP-RJ, ele depositou o valor na conta de um corretor para comprar dois apartamentos em Copacabana. O MP afirma que ele declarou lucro de 292% na venda dois anos depois, enquanto o mercado valorizou 11%. {1:Leia a matéria do Brasil de Fato}.', status: 'alegacao', fonte: 'https://www.brasildefato.com.br/2019/12/20/flavio-bolsonaro-lavou-mais-de-rdollar-2-milhoes-em-imoveis-e-loja-de-chocolate/' },
  { data: 'Dez/2014–2015', titulo: 'Entra como sócio de uma franquia Kopenhagen', texto: 'Loja no Via Parque Shopping (Barra da Tijuca), da empresa Bolsotini Chocolates e Café. A {1:Exame} relata compra por cerca de R$ 1 milhão em 2015; na declaração de bens dele, a franquia consta por R$ 50 mil. O MP-RJ suspeita que R$ 500 mil foram ocultados na compra e que R$ 1,6 milhão passou pela conta da loja como se fossem vendas em espécie, em valores desproporcionais ao faturamento e em datas ligadas ao pagamento de salários arrecadados por Queiroz. Flávio nega e diz que tudo foi declarado.', status: 'alegacao', fonte: 'https://exame.com/brasil/mp-rj-investiga-lavagem-de-r21-milhoes-em-loja-de-flavio-bolsonaro/' },
  { data: 'Jul/2018', titulo: 'Coaf aponta movimentação atípica; MP-RJ abre investigação', texto: 'Segundo o {1:Extra Classe}, um relatório do Coaf identificou R$ 1,2 milhão em movimentações atípicas na conta de Fabrício Queiroz, ex-assessor de Flávio na Alerj.', status: 'documentado', fonte: 'https://www.extraclasse.org.br/justica/2020/11/mp-denuncia-flavio-bolsonaro-por-peculato-lavagem-de-dinheiro-e-organizacao-criminosa/' },
  { data: '2018', titulo: 'Eleito senador pelo Rio', texto: '4.380.418 votos (31,36% dos válidos), segundo o {1:ND Mais}. Mandato vai até janeiro de 2027.', status: 'documentado', fonte: 'https://ndmais.com.br/politica/flavio-bolsonaro-trajetoria/' },
  { data: 'Ago/2019', titulo: 'Recusa abrir os gastos da cota parlamentar', texto: 'Segundo o {1:Diário de Pernambuco}, ele e mais 11 senadores negaram pedidos via Lei de Acesso à Informação sobre gastos da cota, com base em parecer de 2016 do Senado.', status: 'documentado', fonte: 'https://www.diariodepernambuco.com.br/noticia/politica/2019/08/no-senado-flavio-bolsonaro-e-mais-11-impoem-sigilo-a-gastos.html' },
  { data: '20/12/2019', titulo: 'MP-RJ diz que ele lavou mais de R$ 2 milhões', texto: 'Segundo o MP, em matéria do {1:Brasil de Fato}: cerca de R$ 1,6 milhão depositado aos poucos na conta de uma loja de chocolates da qual é sócio, como se fossem compras em espécie, e R$ 638,4 mil em imóveis.', status: 'alegacao', fonte: 'https://www.brasildefato.com.br/2019/12/20/flavio-bolsonaro-lavou-mais-de-rdollar-2-milhoes-em-imoveis-e-loja-de-chocolate/' },
  { data: 'Nov/2020', titulo: 'MP-RJ denuncia por peculato, lavagem e organização criminosa', texto: 'A denúncia, noticiada pelo {1:Extra Classe}, atinge Flávio, Queiroz e outras 15 pessoas, no caso das “rachadinhas” no antigo gabinete na Alerj.', status: 'alegacao', fonte: 'https://www.extraclasse.org.br/justica/2020/11/mp-denuncia-flavio-bolsonaro-por-peculato-lavagem-de-dinheiro-e-organizacao-criminosa/' },
  { data: '01/02/2021', titulo: 'A loja Kopenhagen sai das mãos dele', texto: 'O grupo CRM, dono da marca, assume a operação, e a Bolsotini deixa de ser franqueada. O {1:Poder360} descreve como “entrega” da loja à franqueadora e não achou valor de venda; Flávio diz que a venda da franquia ajudou a pagar a entrada da casa do Lago Sul. As fontes divergem entre venda e devolução.', status: 'documentado', fonte: 'https://www.poder360.com.br/brasil/flavio-bolsonaro-entrega-loja-de-chocolates-investigada-pelo-mp/' },
  { data: '2021', titulo: 'Compra a casa de R$ 6,2 milhões no Lago Sul', texto: 'Segundo a {1:Metrópoles}, valor de R$ 6.226.043,80, com entrada de R$ 2,87 milhões e financiamento de R$ 3,1 milhões no BRB, em 30 anos. Ele diz ter pago a entrada com a venda de um apartamento na Barra e de uma franquia.', status: 'documentado', fonte: 'https://www.metropoles.com/brasil/mansao-de-r-62-milhoes-no-lago-sul-fez-patrimonio-de-flavio-disparar' },
  { data: 'Nov/2021', titulo: 'STJ e STF anulam provas e decisões do caso das rachadinhas', texto: 'No STJ, por 4 votos a 1, a 5ª Turma entendeu que o caso deveria correr na segunda instância, por causa do foro ({2:CNN Brasil}). Em 30/11, a 2ª Turma do STF anulou, por 3 votos a 1, quatro relatórios do Coaf, porque o MP-RJ os pediu sem autorização judicial ({1:Conjur}). As duas decisões tratam da forma como as provas foram obtidas, não de culpa ou inocência.', status: 'anulado', fonte: 'https://conjur.com.br/2021-nov-30/anulados-relatorios-coaf-flavio-bolsonaro-rachadinhas/', fonte2: 'https://www.cnnbrasil.com.br/politica/stj-anula-decisoes-contra-flavio-bolsonaro-no-caso-das-rachadinhas/' },
  { data: '2022', titulo: 'Denúncia das rachadinhas é arquivada', texto: 'Com as provas anuladas, o MP-RJ pediu a anulação da denúncia e o Órgão Especial do TJ-RJ acolheu. Não houve julgamento do mérito: Flávio não foi condenado nem declarado inocente pelas acusações. A {1:CartaCapital} registra que o caso terminou com perguntas sem resposta, como a origem dos valores em espécie.', status: 'anulado', fonte: 'https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/' },
  { data: '2024', titulo: 'Quita o financiamento da casa em ~3 anos', texto: 'Segundo o {1:Terra}, que reproduz a Revista Fórum, o contrato previa 30 anos. O BRB cobrou 3,71% ao ano (taxa de balcão indicada: 4,85%). Ele fez amortizações extraordinárias.', status: 'documentado', fonte: 'https://www.terra.com.br/noticias/brasil/politica/pf-investiga-emprestimo-de-r-31-milhoes-do-brb-a-flavio-bolsonaro-para-compra-de-mansao-diz-revista,b6dd5bc379d8314996ebdcb78567e0204w27bu4e.html' },
  { data: '26/03/2026', titulo: 'Sancionada a única lei ligada a ele no Senado', texto: 'Lei 15.364/2026 (microcrédito). Segundo o {1:registro do Senado Federal}, o projeto é de autoria do senador Esperidião Amin; Flávio é um dos signatários.', status: 'documentado', fonte: 'https://www25.senado.leg.br/web/atividade/materias/-/materia/158350' },
  { data: 'Mai/2026', titulo: 'TCU recebe pedido para apurar uso da cota', texto: 'Segundo o {1:Correio da Manhã}, o pedido trata de reembolso, pelo Senado, de viagem a São Paulo para encontro com Daniel Vorcaro sobre o filme Dark Horse.', status: 'apuracao', fonte: 'https://www.correiodamanha.com.br/colunistas/paulo-cappelli/2026/05/289481-flavio-bolsonaro-entra-na-mira-do-tcu-por-uso-de-cota-parlamentar-ex-deputado-do-pt-e-sorteado-relator.html' },
  { data: '22/07/2026', titulo: 'STF autoriza inquérito sobre Dark Horse e Vorcaro', texto: 'Segundo a {1:CNN Brasil}, André Mendonça autoriza a investigação por corrupção, lavagem e evasão de divisas, a pedido da PF e com parecer favorável da PGR.', status: 'apuracao', fonte: 'https://www.cnnbrasil.com.br/politica/corrupcao-lavagem-e-evasao-suspeitas-sobre-flavio-na-relacao-com-vorcaro/' },
  { data: '13/08/2026', titulo: 'Registra candidatura e declara R$ 8,186 milhões', texto: 'Declaração ao TSE, segundo o {1:Poder360}: bem principal é a casa do Lago Sul (R$ 6,2 mi). Lula declarou R$ 4,8 milhões.', status: 'documentado', fonte: 'https://www.poder360.com.br/poder-eleicoes-2026/flavio-declara-r-81-milhoes-em-patrimonio-quase-o-dobro-de-lula/' },
  { data: 'Set/2026', titulo: 'Documentos mostram negociação de US$ 24 milhões', texto: 'Documentos públicos, resumidos pela {1:Fundação Perseu Abramo}, mostram a contribuição de Vorcaro para o filme Dark Horse. Segundo a investigação, cerca de US$ 14 milhões teriam sido pagos. Flávio diz ser financiamento privado, sem contrapartida.', status: 'apuracao', fonte: 'https://fpabramo.org.br/caso-master-rastro-do-dinheiro-chega-ao-senador-flavio-bolsonaro-e-amplia-crise-em-ano-eleitoral/' },
  { data: '01/10/2026', titulo: 'PF analisa o financiamento da casa no BRB', texto: 'Segundo a {1:Revista Fórum}, a PF apura se houve tratamento diferenciado. É apuração noticiada, sem conclusão.', status: 'apuracao', fonte: 'https://revistaforum.com.br/politica/flavio-bolsonaro-brb-mansao-pf' },
]

// Áudios e mensagens do caso Master/Dark Horse. NÃO hospedamos arquivos: cada item linka a
// publicação original. Parafraseamos o conteúdo; não transcrevemos. Só entra material
// publicado por veículo identificado ou presente em documentos públicos da investigação.
export const midias = [
  { data: '20/08/2025', tipo: 'Mensagens', titulo: 'Primeiras mensagens registradas entre Flávio e Vorcaro', texto: 'Segundo os documentos da PF, é a data do primeiro contato direto registrado entre os dois. O encontro para tratar do financiamento do filme já havia sido articulado em dezembro de 2024, por intermediário, com o deputado federal Mário Frias como idealizador do projeto.', fonte: 'https://www.cnnbrasil.com.br/politica/pf-mostra-conversas-de-flavio-com-vorcaro-sobre-recursos-para-dark-horse/', rotulo: 'CNN Brasil' },
  { data: '08/09/2025', tipo: 'Áudio', destaque: true, titulo: 'Flávio cobra Vorcaro por atrasos nos pagamentos do filme', textos: ['Em áudio, Flávio fala em um dos momentos mais difíceis da produção, cobra posição de Vorcaro sobre os atrasos e alerta para o risco de “dar calote” na equipe internacional, citando o ator Jim Caviezel e o diretor Cyrus Nowrasteh.', 'O Intercept publicou o áudio em 13/05/2026. A CNN o localiza, com essa data, nos documentos da PF. O vídeo ao lado é do UOL, que credita o áudio ao Intercept Brasil; a edição e o conteúdo do vídeo são do UOL.'], video: { id: 'KIlv-hBkdJ8', titulo: 'UOL: Flávio Bolsonaro pede dinheiro a Daniel Vorcaro para filme de Jair; ouça áudio' }, links: [ { url: 'https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/', rotulo: 'Leia + no Intercept Brasil', principal: true }, { url: 'https://www.cnnbrasil.com.br/politica/pf-mostra-conversas-de-flavio-com-vorcaro-sobre-recursos-para-dark-horse/', rotulo: 'Documentos da PF (CNN Brasil)' }, { url: 'https://www.youtube.com/shorts/KIlv-hBkdJ8', rotulo: 'Vídeo no YouTube (UOL)' } ] },
  { data: '22/10/2025', tipo: 'Mensagens', titulo: 'Flávio pressiona por pagamentos pendentes e diz que a situação é urgente', texto: 'Conversa entre os dois nos documentos da investigação, segundo a CNN Brasil.', fonte: 'https://www.cnnbrasil.com.br/politica/pf-mostra-conversas-de-flavio-com-vorcaro-sobre-recursos-para-dark-horse/', rotulo: 'CNN Brasil' },
  { data: '07/11/2025', tipo: 'Vídeo', titulo: 'Flávio agradece a Vorcaro em vídeo', texto: 'Segundo a PF, citada pela CNN Brasil, ele credita a Vorcaro o sucesso do projeto.', fonte: 'https://www.cnnbrasil.com.br/politica/pf-mostra-conversas-de-flavio-com-vorcaro-sobre-recursos-para-dark-horse/', rotulo: 'CNN Brasil' },
  { data: '16/11/2025', tipo: 'Mensagem', titulo: 'Flávio escreve a Vorcaro que sempre estará com ele', texto: 'Mensagem de WhatsApp obtida pelo Intercept, enviada um dia antes da prisão de Vorcaro.', fonte: 'https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/', rotulo: 'Intercept Brasil' },
  { data: '17/11/2025', tipo: 'Fato', titulo: 'Vorcaro é preso na Operação Compliance Zero', texto: 'Segundo a CNN Brasil, ele foi preso quando tentava embarcar em um voo particular para Malta. A operação da PF é a que investiga o caso Banco Master.', fonte: 'https://www.cnnbrasil.com.br/politica/pf-mostra-conversas-de-flavio-com-vorcaro-sobre-recursos-para-dark-horse/', rotulo: 'CNN Brasil' },
  { data: '13/05/2026', tipo: 'Resposta', titulo: 'Primeiro negou, depois admitiu que pediu dinheiro', texto: 'Perguntado pessoalmente pelo Intercept, Flávio disse que a informação era mentira. Horas depois, confirmou que pediu dinheiro a Vorcaro, mas nega vantagem indevida e diz que foi patrocínio privado para um filme privado. O Intercept diz ter documentos de pelo menos US$ 10,6 milhões (cerca de R$ 61 milhões) pagos entre fev. e mai. de 2025, em seis operações; o total negociado seria de US$ 24 milhões.', fonte: 'https://www.gazetadopovo.com.br/republica/audio-de-flavio-pedindo-dinheiro-a-vorcaro-afeta-pre-campanha-veja-reacoes/', rotulo: 'Gazeta do Povo', apoio: { url: 'https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/', rotulo: 'Intercept Brasil' } },
]

// Comparativo: cada lado vem do PDF original do plano (registrado no TSE).
// `p` = página impressa no PDF. `null` = o tema não aparece no texto do plano
// (conferido por busca no texto extraído do PDF). Frases que começam com
// "O plano afirma" são resultados declarados pelo próprio plano, não dados verificados.
export const PLANOS = {
  flavio: { nome: 'Flávio Bolsonaro (PL)', pdf: 'https://static.poder360.com.br/uploads/2026/08/plano-flavio.pdf', titulo: 'Para o Brasil vencer o atraso (76 p.)' },
  lula: { nome: 'Lula (PT)', pdf: 'https://static.poder360.com.br/uploads/2026/08/Programa-Governo-LULA-2026.pdf', titulo: 'Programa de Governo 2027–2030 (84 p.)' },
}

export const comparativo = [
  { tema: 'Maioridade penal',
    f: { t: 'Apoiar a redução de 18 para 16 anos e punir também maiores de 14 por crimes graves (estupro, tráfico, tortura, assassinato).', p: '13' },
    l: null,
    dados: {
      titulo: 'Os números oficiais, até 2025 (último ano fechado)',
      itens: [
        { n: '+15,9%', rotulo: 'Mais gente presa', t: 'Em 2022, o Brasil tinha 832 mil pessoas presas. Em 2025, eram 965 mil: 132 mil a mais. Na gestão anterior o número também subiu, de 744 mil (2018) para 832 mil (2022), +11,8%. Hoje as prisões estão lotadas: faltam 281 mil vagas.' },
        { n: '12.203', rotulo: 'Adolescentes internados', t: 'Em 2018, eram 24,5 mil adolescentes cumprindo internação fechada. Em 2022, 12,5 mil. De lá para cá o número quase não mudou: 12,2 mil em 2025.' },
        { n: '−15%', rotulo: 'Menos mortes violentas', t: 'Em 2022, foram 47,9 mil mortes violentas intencionais (como homicídios e latrocínios). Em 2025, 40,8 mil, o menor número desde 2012. De 2018 a 2022 também tinha havido queda, de 57,6 mil para 47,9 mil.' },
      ],
      nota: 'Atenção: são as pessoas que estavam presas no fim de cada ano, e não o total de prisões feitas. Os números de 2026 ainda não fecharam. Eles mostram o que aconteceu, mas não provam o que causou cada mudança.',
      fonte: { url: 'https://forumseguranca.org.br/wp-content/uploads/2026/07/anuario-2026.pdf', rotulo: '20º Anuário Brasileiro de Segurança Pública (2026)', detalhe: 'Dados do Ministério da Justiça e do Sinase. Tabelas nas páginas 357, 362 e 396.' },
    } },
  { tema: 'Segurança pública',
    f: { t: 'Declarar PCC, CV e milícias “narcoterroristas”; 5 novos presídios de segurança máxima no modelo de El Salvador; 500 mil novas vagas no sistema prisional em 4 anos; mais de 1 milhão de câmeras e reconhecimento facial nacional; dobrar o investimento federal em segurança.', p: '13–15' },
    l: { t: 'PEC da Segurança Pública e criação do Ministério da Segurança Pública; manter a Lei Antifacção (sancionada em 2026); câmeras corporais e policiamento de proximidade; R$ 10 bilhões do FIIS para estados e municípios.', p: '27–30' } },
  { tema: 'Armas de fogo',
    f: null,
    l: { t: 'Manter a política de controle de armas e munições; o plano chama de acertada a revogação dos decretos do governo anterior que facilitavam o acesso.', p: '28' } },
  { tema: 'Contas públicas',
    f: { t: 'Reformular as regras fiscais, entregar superávits primários, limitar crédito subsidiado, cortar no mínimo 10 ministérios e reduzir cargos comissionados e despesas administrativas.', p: '69–71' },
    l: { t: 'Manter o novo arcabouço fiscal, com “justiça tributária” e combate a privilégios. O plano afirma déficit primário perto de 0,4% do PIB em 2026.', p: '11, 49' } },
  { tema: 'Reforma tributária',
    f: { t: 'Revisar e redimensionar a reforma em curso para reduzir a carga e o IVA, que o plano diz estar projetado em torno de 30%.', p: '30, 71–72' },
    l: { t: 'Consolidar a reforma do consumo: cinco tributos viram dois (CBS e IBS), cesta básica isenta e cashback para os mais pobres.', p: '11, 48' } },
  { tema: 'Imposto de Renda',
    f: null,
    l: { t: 'O plano diz que já isentou de IR quem ganha até R$ 5.000 e que cerca de 140 mil contribuintes do topo passaram a contribuir mais.', p: '11, 19' } },
  { tema: 'Jornada de trabalho',
    f: null,
    l: { t: 'Manter a ação no Senado pelo fim da escala 6x1 e jornada de 40 horas sem redução salarial, nos termos aprovados na Câmara.', p: '75' } },
  { tema: 'Regras do trabalho',
    f: { t: 'Negociado sobre o legislado; reduzir gradualmente o custo do trabalho; contrato com menor custo para jovens de 18 a 24 anos (primeiro emprego) e para desempregados com 50+.', p: '43–44' },
    l: { t: 'Combater a pejotização espúria; criar proteção para trabalhadores de plataformas; retomar a assistência sindical nas homologações.', p: '74–75' } },
  { tema: 'Salário mínimo',
    f: null,
    l: { t: 'Continuar a política de valorização do salário mínimo, com aumento real.', p: '74' } },
  { tema: 'Educação',
    f: { t: 'Alfabetização pelo método fônico; ampliar escolas cívico-militares; voucher educacional onde faltar vaga na rede pública; Programa Acolher (aluno bom remunerado para dar reforço); empréstimo estudantil ligado à renda.', p: '35–37' },
    l: { t: 'Pé-de-Meia; prioridade à escola em tempo integral (o plano cita 1,8 milhão de novas matrículas em 2023–2025); meta de 80% das crianças alfabetizadas na idade certa (66% em 2025, segundo o plano).', p: '13, 31' } },
  { tema: 'Creche',
    f: { t: 'Ampliar vagas e dar voucher-creche para a rede privada credenciada onde não houver vaga pública.', p: '21' },
    l: { t: 'O plano cita 3.562 creches e escolas de educação infantil apoiadas pelo Novo PAC e promete ampliar o apoio a estados e municípios.', p: '31' } },
  { tema: 'Saúde',
    f: { t: 'Corrigir a tabela SUS; comprar exames da rede privada em horários ociosos; telessaúde; remédio em domicílio para idosos e doentes crônicos; manter a imunização.', p: '37–38' },
    l: { t: 'Dar continuidade ao Agora Tem Especialistas e à parceria com hospitais privados para exames e cirurgias do SUS. O plano afirma 15 milhões de cirurgias em 2025, o maior volume da história do SUS.', p: '34–39' } },
  { tema: 'Moradia',
    f: { t: 'Retomar o Casa Verde e Amarela, com meta de 2,5 milhões de residências.', p: '47' },
    l: { t: 'Continuar o Minha Casa Minha Vida e a urbanização de favelas (Periferia Viva).', p: '44–46' } },
  { tema: 'Supremo e Judiciário',
    f: { t: 'Acabar com as competências criminais originárias do STF (parlamentares julgados por instâncias inferiores); limitar decisões monocráticas; quarentena de 1 ano para ministro de Estado ir ao STF.', p: '65–66' },
    l: { t: 'Diálogo permanente com o Judiciário, respeitada a autonomia dos Poderes, para reduzir a morosidade.', p: '16' } },
  { tema: 'Reeleição presidencial',
    f: { t: 'Acabar com a reeleição para presidente. O plano cita PEC de autoria de Flávio no Senado.', p: '66' },
    l: null },
  { tema: 'Emendas parlamentares',
    f: { t: 'Dar mais transparência, controle e rastreabilidade às emendas, priorizando políticas do Plano Plurianual.', p: '69' },
    l: { t: 'Enfrentar o que chama de distorção: as emendas somaram R$ 50 bilhões no orçamento de 2026. Critica as emendas impositivas e o orçamento secreto.', p: '15–16' } },
  { tema: 'Combate à corrupção',
    f: { t: 'Fortalecer a Lei das Estatais; recrutamento profissional para cargos de direção; blindar fundos de pensão de estatais da indicação política; transparência de gastos.', p: '69–70' },
    l: { t: 'Aprofundar o Plano de Integridade e Combate à Corrupção 2025–2027, com responsabilização de “corruptos e corruptores, inclusive os do andar de cima”; Portal da Transparência com dados abertos e IA.', p: '18' } },
]

// Termos buscados no texto do plano do Flávio sem nenhuma ocorrência
export const semMencaoFlavio = ['escala 6x1', 'imposto de renda', 'salário mínimo', 'Bolsa Família']

// Patrimônio declarado ao TSE (valores nominais, em R$)
export const patrimonio = [
  { ano: 2006, valor: 385000 },
  { ano: 2010, valor: 691000 },
  { ano: 2014, valor: 714000 },
  { ano: 2016, valor: 1500000 },
  { ano: 2018, valor: 1740000 },
  { ano: 2026, valor: 8186000 },
]
export const patrimonioFonte = { url: 'https://www.poder360.com.br/poder-eleicoes-2026/flavio-declara-r-81-milhoes-em-patrimonio-quase-o-dobro-de-lula/', rotulo: 'Poder360 (dados do TSE/DivulgaCand)' }
export const lulaPatrimonio = 4800000

// Bens por ano: SÓ o que as fontes citam. Sem `bens`, o painel manda para o DivulgaCand.
// A lista de 2026 não fecha o total (faltam ~R$ 111 mil entre os bens citados e os R$ 8,186 mi).
export const detalhes = {
  2018: {
    bens: [
      { nome: 'Apartamento na Barra da Tijuca (RJ)', valor: 917038.09, nota: 'Ele diz ter vendido para pagar a entrada da casa do Lago Sul' },
      { nome: 'Franquia Kopenhagen', valor: 50000, nota: 'Ele diz ter vendido para pagar a entrada da casa. O Poder360 registra que a loja foi entregue à franqueadora (CRM) em 01/02/2021. O MP-RJ investigou a loja (caso arquivado em 2022, sem julgamento de mérito)' },
    ],
    obs: 'Lista parcial: são os bens que a imprensa cita por terem saído do patrimônio até 2026.',
    fonte: { url: 'https://www.metropoles.com/brasil/mansao-de-r-62-milhoes-no-lago-sul-fez-patrimonio-de-flavio-disparar', rotulo: 'Metrópoles' },
  },
  2026: {
    bens: [
      { nome: 'Casa no Lago Sul (Brasília)', valor: 6226043.80, nota: 'Comprada em 2021; financiamento de R$ 3,1 mi no BRB quitado em 2024' },
      { nome: 'Fundo multimercado', valor: 1090520.47 },
      { nome: 'Contas correntes', valor: 568730.23 },
      { nome: 'Veículo (2014)', valor: 133000 },
      { nome: 'Três participações societárias', valor: 56249 },
    ],
    obs: 'Os bens citados somam R$ 8,07 mi; a declaração total é R$ 8,186 mi. Veja a lista completa no DivulgaCand.',
    fonte: { url: 'https://www.poder360.com.br/poder-eleicoes-2026/flavio-declara-r-81-milhoes-em-patrimonio-quase-o-dobro-de-lula/', rotulo: 'Poder360 (dados do TSE)' },
  },
}
// Variação entre 2018 e 2026 segundo as fontes (nominal: Metrópoles; real: Poder360)
export const variacao2026 = { nominal: '+370%', real: '+210,8% descontada a inflação' }
