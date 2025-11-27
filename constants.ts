
import { Module } from './types';

export const INITIAL_MODULES: Module[] = [
  {
    id: 1,
    title: "Mindset e Visão Geral do Mercado",
    description: "Entendendo o jogo do longo prazo, metas realistas, produtividade e inteligência emocional.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-indigo-800">1. Como funciona o Mercado Digital Hoje</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        O mercado digital não é um "bilhete de loteria", é um ecossistema de negócios. Hoje, as formas de ganhar dinheiro se dividem em: 
        <strong>Infoprodução</strong> (criar cursos/e-books), <strong>Afiliação</strong> (vender produtos de terceiros), <strong>Prestação de Serviços</strong> (gestor de tráfego, copywriter) e <strong>E-commerce/Dropshipping</strong>.
        Entenda que o dinheiro vem da <em>resolução de problemas</em>.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">2. Mentalidade e Longo Prazo</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        O maior erro do iniciante é o imediatismo. O "efeito J" (curva de crescimento exponencial) só acontece após um período de maturação.
        <br>
        <strong>• Consistência > Intensidade:</strong> Melhor postar 1 vez por dia durante um ano do que 10 vezes em uma semana e desistir.
        <br>
        <strong>• Fracasso como Dado:</strong> Se um anúncio não vendeu, você não "perdeu" dinheiro, você comprou a informação de que aquele anúncio não funciona.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">3. Definindo Metas Realistas</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Não tente fazer R$ 1 milhão no primeiro mês. Quebre sua meta:
        <br>
        1. Fazer a primeira venda (validar o processo).
        <br>
        2. Fazer R$ 1.000,00 consistentes (validar a oferta).
        <br>
        3. Escalar para R$ 10.000,00 (otimizar tráfego).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">4. Gestão de Tempo e Produtividade</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        No digital, você é seu próprio chefe, o que pode ser perigoso. Use a técnica Pomodoro (25min foco / 5min descanso) para estudos e aplicação.
        Separe o "tempo de aprender" do "tempo de fazer". É muito comum cair na armadilha de apenas assistir aulas e nunca executar (obesidade mental).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">5. O Mito da "Renda Passiva"</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Muitos vendem a ideia de ganhar dinheiro dormindo. Isso é possível, mas exige muito trabalho acordado antes.
        A renda passiva real vem da construção de ativos (listas de e-mail, canais no YouTube, produtos validados) que trabalham para você. No início, sua renda será 100% ativa.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">6. Networking e Comunidade</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        "Você é a média das 5 pessoas com quem mais convive". No digital, estar em comunidades (Masterminds, grupos de alunos) acelera seu resultado.
        Não veja outros profissionais como concorrentes, mas como possíveis parceiros (collabs).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">7. Inteligência Emocional</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Você vai levar "hate", vai ter reembolso, vai ter anúncio bloqueado. A capacidade de não levar para o pessoal e focar na solução é o que separa os amadores dos profissionais.
        Desenvolva resiliência. O mercado testa quem realmente quer ficar.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">8. Rotina de Alta Performance</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Cuide do seu "hardware" (corpo e mente). Sono, exercício físico e alimentação influenciam diretamente na sua capacidade criativa e de tomada de decisão.
        Um empreendedor digital cansado toma decisões ruins e perde dinheiro.
      </p>
    `,
    tasks: [
      { id: 'm1-t1', description: "Defina sua Meta Financeira para 3, 6 e 12 meses.", completed: false, userAnswer: "" },
      { id: 'm1-t2', description: "Escolha seu modelo de negócio inicial: Produtor, Afiliado ou Prestador de Serviço? Justifique.", completed: false, userAnswer: "" },
      { id: 'm1-t3', description: "Monte sua agenda semanal bloqueando horários para estudo e execução.", completed: false, userAnswer: "" },
      { id: 'm1-t4', description: "Identifique 3 crenças limitantes sobre dinheiro e reescreva-as.", completed: false, userAnswer: "" },
      { id: 'm1-t5', description: "Pesquise 3 comunidades ou fóruns da sua área para participar.", completed: false, userAnswer: "" },
      { id: 'm1-t6', description: "Liste os 3 maiores 'ladrões de tempo' do seu dia e como eliminá-los.", completed: false, userAnswer: "" },
      { id: 'm1-t7', description: "Defina uma recompensa pessoal para quando atingir sua primeira meta.", completed: false, userAnswer: "" },
      { id: 'm1-t8', description: "Escreva um termo de compromisso consigo mesmo para não desistir em 3 meses.", completed: false, userAnswer: "" },
      { id: 'm1-t9', description: "Analise sua rotina de sono e energia: o que precisa mudar para ter alta performance?", completed: false, userAnswer: "" },
      { id: 'm1-t10', description: "Liste 3 pessoas do mercado que te inspiram e por que (modelagem).", completed: false, userAnswer: "" },
    ],
    isCompleted: false
  },
  {
    id: 2,
    title: "Nicho, Subnicho e Público-Alvo",
    description: "Mapeando dores, sonhos, concorrência e validação de mercado.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-indigo-800">1. Do Nicho ao Subnicho</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Ser "o cara do Marketing" é amplo. Ser "o especialista em Marketing para Delivery de Sushi" é lucrativo.
        Quanto mais específico, menor a concorrência e maior a autoridade. Encontre a intersecção entre: Paixão, Habilidade e Demanda.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">2. Mapa da Empatia: Dores e Sonhos</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Você não vende produtos, vende transformações.
        <br>
        <strong>• Dores:</strong> "Tenho vergonha de aparecer nos stories", "Não sobra dinheiro".
        <br>
        <strong>• Sonhos:</strong> "Viajar sem data de volta", "Ser reconhecido".
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">3. Objeções e Desejos Ocultos</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Objeção é o muro entre o cliente e a compra ("Não tenho tempo", "Não tenho dinheiro").
        Desejos ocultos são os pecados capitais: Ele quer emagrecer pela saúde ou para fazer inveja nos amigos? Entenda a motivação real.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">4. Análise de Concorrência</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Não invente a roda. Liste seus 5 maiores concorrentes e analise: O que eles vendem? Como eles se comunicam? O que os clientes reclamam nos comentários deles?
        Aí mora sua oportunidade de fazer melhor.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">5. Validação de Demanda</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Antes de criar qualquer coisa, verifique se tem gente procurando.
        Use o <strong>Google Trends</strong>, o planejador de palavras-chave do Google e a barra de pesquisa do YouTube/Amazon. Se tem gente buscando, tem dinheiro na mesa.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">6. Definição da Persona (Avatar)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Público-alvo é dados demográficos (Homens, 20-30 anos). Persona é comportamental (João, 25 anos, frustrado com o chefe, joga futebol quarta-feira).
        Quando você escreve para uma pessoa específica, sua comunicação conecta muito mais.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">7. Níveis de Consciência</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Conceito de Eugene Schwartz:
        1. Inconsciente (Não sabe que tem problema).
        2. Consciente do Problema (Sabe que dói, não sabe a cura).
        3. Consciente da Solução (Sabe que existe cura, não conhece seu produto).
        4. Consciente do Produto (Conhece você, mas não comprou).
        5. Totalmente Consciente (Só precisa de uma oferta).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">8. Diferenciação de Mercado (USP)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Unique Selling Proposition (Proposta Única de Venda). O que só você tem? Pode ser seu método, sua história, seu suporte ou sua garantia.
        Se você é igual a todo mundo, sua única arma é preço baixo (o que é péssimo).
      </p>
    `,
    tasks: [
      { id: 'm2-t1', description: "Defina seu Subnicho em uma frase.", completed: false, userAnswer: "" },
      { id: 'm2-t2', description: "Liste 10 Dores e 10 Sonhos da sua persona.", completed: false, userAnswer: "" },
      { id: 'm2-t3', description: "Analise 3 concorrentes e cite um ponto fraco de cada um.", completed: false, userAnswer: "" },
      { id: 'm2-t4', description: "Use o Google Trends para pesquisar 3 termos do seu nicho.", completed: false, userAnswer: "" },
      { id: 'm2-t5', description: "Escreva a história do seu Avatar (Persona) detalhadamente.", completed: false, userAnswer: "" },
      { id: 'm2-t6', description: "Crie o 'Avatar Negativo' (quem você NÃO quer como cliente).", completed: false, userAnswer: "" },
      { id: 'm2-t7', description: "Liste 5 palavras-chave de cauda longa que seu cliente busca.", completed: false, userAnswer: "" },
      { id: 'm2-t8', description: "Anote 3 posts virais dos seus concorrentes e o porquê viralizaram.", completed: false, userAnswer: "" },
      { id: 'm2-t9', description: "Defina sua USP (Proposta Única de Venda) em um parágrafo.", completed: false, userAnswer: "" },
      { id: 'm2-t10', description: "Identifique em qual nível de consciência a maioria do seu público está hoje.", completed: false, userAnswer: "" },
    ],
    isCompleted: false
  },
  {
    id: 3,
    title: "Presença Online e Branding",
    description: "Identidade visual, posicionamento, arquétipos e estrutura profissional.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-indigo-800">1. Perfil Profissional que Vende</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Seu Instagram é sua vitrine. A "Bio" deve responder em 3 segundos: Quem é você e como você pode me ajudar?
        Foto clara, nome de usuário limpo e link estratégico. Arrume a casa antes de trazer visitas.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">2. Brand e Personalidade Própria</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Branding é a gestão da marca. Tenha opinião forte. Quem agrada todo mundo não vende para ninguém. Escolha um "inimigo comum" (ex: contra dietas malucas, contra burocracia).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">3. Criando um Site (Landing Page)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Rede social é terreno alugado. Tenha sua própria Landing Page (Página de Vendas).
        Elementos essenciais: Headline forte + Vídeo + Benefícios + Prova Social + Garantia + Botão CTA.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">4. Arquétipos de Marca</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Qual a personalidade da sua marca?
        • O Herói (Nike) - Superação.
        • O Sábio (Google) - Conhecimento.
        • O Rebelde (Harley Davidson) - Liberdade.
        Definir seu arquétipo guia toda sua comunicação visual e verbal.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">5. Psicologia das Cores</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Cores comunicam sentimentos.
        • Azul: Confiança, tecnologia.
        • Vermelho: Urgência, paixão, fome.
        • Preto: Luxo, exclusividade.
        • Verde: Saúde, dinheiro, crescimento.
        Escolha uma paleta de 3 cores e siga ela fielmente.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">6. Tone of Voice (Tom de Voz)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Como sua marca fala? É formal ou cheia de gírias? É acolhedora ou agressiva?
        Manter um tom de voz consistente ajuda a criar familiaridade com a audiência.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">7. Bio Otimizada</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Fórmula da Bio Perfeita:
        1. O que você faz (Autoridade).
        2. Para quem você faz (Nicho).
        3. Prova social (Nº de alunos, resultados).
        4. CTA (Chamada para o Link).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">8. Destaques Estratégicos</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Use os destaques do Instagram como um menu do seu site:
        • "Comece Aqui" (Quem sou eu).
        • "Depoimentos" (Prova Social).
        • "Serviços/Produtos" (O que vendo).
        • "Dúvidas Frequentes" (Quebra de objeções).
      </p>
    `,
    tasks: [
      { id: 'm3-t1', description: "Reescreva sua Bio do Instagram aplicando a fórmula ensinada.", completed: false, userAnswer: "" },
      { id: 'm3-t2', description: "Defina seu Arquétipo de Marca predominante.", completed: false, userAnswer: "" },
      { id: 'm3-t3', description: "Escolha sua Paleta de Cores e o significado de cada uma.", completed: false, userAnswer: "" },
      { id: 'm3-t4', description: "Crie as capas para 4 Destaques estratégicos.", completed: false, userAnswer: "" },
      { id: 'm3-t5', description: "Desenhe o esboço da sua Landing Page no papel.", completed: false, userAnswer: "" },
      { id: 'm3-t6', description: "Crie o nome do seu projeto ou marca.", completed: false, userAnswer: "" },
      { id: 'm3-t7', description: "Escolha duas fontes (Tipografia) para sua marca: Títulos e Texto.", completed: false, userAnswer: "" },
      { id: 'm3-t8', description: "Defina ou tire uma foto de perfil profissional (rosto visível e fundo limpo).", completed: false, userAnswer: "" },
      { id: 'm3-t9', description: "Liste 3 valores inegociáveis da sua marca.", completed: false, userAnswer: "" },
      { id: 'm3-t10', description: "Defina quem é o 'Inimigo Comum' da sua marca.", completed: false, userAnswer: "" },
    ],
    isCompleted: false
  },
  {
    id: 4,
    title: "Estratégia de Conteúdo e Vídeo",
    description: "Linha editorial, funis de conteúdo, roteiros de vídeo e viralização.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-indigo-800">1. Linha Editorial: O que postar?</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Divida seu conteúdo em 3 pilares: Técnico (Ensina), Conexão (Humaniza/Bastidores) e Venda (Oferta). A regra 80/20: 80% valor, 20% venda.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">2. Edição de Vídeo para Monetizar</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Vídeos curtos (Reels/TikTok) dominam.
        • Cortes a cada 3s (Retenção).
        • Legendas dinâmicas (Acessibilidade).
        • B-Roll (Imagens de cobertura).
        Use CapCut ou InShot.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">3. Gerando Engajamento Real</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Peça opinião ("A ou B?"), crie polêmica leve (opinião impopular) e sempre responda comentários com outra pergunta para gerar diálogo. O algoritmo prioriza conversas.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">4. Funil de Conteúdo</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        • <strong>Topo (Atração):</strong> Reels, memes, dicas rápidas. Viraliza e traz gente nova.
        <br>
        • <strong>Meio (Consciência):</strong> Carrosséis, Stories, Lives. Educa e gera conexão.
        <br>
        • <strong>Fundo (Conversão):</strong> Prova social, oferta direta, quebra de objeção. Vende.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">5. Repurposing (Reciclagem de Conteúdo)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Trabalhe inteligente. Uma Live de 1h vira:
        • 1 Vídeo no YouTube.
        • 1 Podcast (áudio).
        • 5 Reels (cortes).
        • 1 Carrossel (resumo).
        • 1 E-mail para a lista.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">6. Trends e Viralização</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Fique atento aos áudios em alta (setinha para cima no Reels). Adaptar uma trend para o seu nicho é a forma mais fácil de crescer organicamente. Mas cuidado para não fugir da sua essência.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">7. Lives e Aulas ao Vivo</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Nada gera mais autoridade que o "ao vivo". É onde você mostra que realmente sabe, sem edição.
        Faça lives semanais ou colabs com outros especialistas para trocar audiência.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">8. Equipamentos Básicos</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Não espere a câmera perfeita.
        Comece com: Seu Celular (câmera traseira) + Iluminação Natural (janela) ou Ring Light barato + Microfone de lapela (o áudio é mais importante que a imagem).
      </p>
    `,
    tasks: [
      { id: 'm4-t1', description: "Crie um Calendário Semanal com conteúdos de Topo, Meio e Fundo de funil.", completed: false, userAnswer: "" },
      { id: 'm4-t2', description: "Grave e edite um Reels usando cortes rápidos e legendas.", completed: false, userAnswer: "" },
      { id: 'm4-t3', description: "Faça uma lista de 5 objeções e crie um conteúdo para quebrar cada uma.", completed: false, userAnswer: "" },
      { id: 'm4-t4', description: "Planeje uma Live: defina tema, roteiro e data.", completed: false, userAnswer: "" },
      { id: 'm4-t5', description: "Identifique uma Trend atual e escreva como adaptá-la para seu nicho.", completed: false, userAnswer: "" },
      { id: 'm4-t6', description: "Escreva o roteiro de um vídeo de 15 segundos (Gancho + Conteúdo + CTA).", completed: false, userAnswer: "" },
      { id: 'm4-t7', description: "Planeje um post estilo 'Carrossel' com 5 slides educativos.", completed: false, userAnswer: "" },
      { id: 'm4-t8', description: "Crie uma enquete interativa para seus Stories.", completed: false, userAnswer: "" },
      { id: 'm4-t9', description: "Tire uma foto de 'Bastidores' mostrando seu trabalho ou estudo.", completed: false, userAnswer: "" },
      { id: 'm4-t10', description: "Faça uma lista de 15 Hashtags relevantes para seu nicho.", completed: false, userAnswer: "" },
    ],
    isCompleted: false
  },
  {
    id: 5,
    title: "Copywriting e Persuasão",
    description: "Gatilhos mentais, storytelling, estruturas de texto e headlines.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-indigo-800">1. Princípios da Persuasão</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Use Gatilhos Mentais: Reciprocidade (dê antes de pedir), Prova Social (outros fazem), Autoridade (você sabe), Afeição (conexão).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">2. Legendas e CTAs</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Venda o clique, não o produto. "Toque no link para saber mais" é fraco. "Toque no link se você quer parar de perder dinheiro hoje" é forte.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">3. Headlines (Títulos) Magnéticos</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Fórmula: [Promessa] + [Tempo] + [Quebra de Objeção].
        Ex: "Como criar seu site em 24h sem saber programar". O título é 80% do sucesso do anúncio/post.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">4. Estrutura AIDA</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        A base de todo texto de vendas:
        • <strong>Atenção:</strong> Quebre o padrão na primeira frase.
        • <strong>Interesse:</strong> Fale algo curioso ou relevante.
        • <strong>Desejo:</strong> Mostre a transformação/benefício.
        • <strong>Ação:</strong> Diga o que fazer agora.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">5. Storytelling: A Jornada do Herói</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Histórias vendem mais que fatos. Estrutura simplificada:
        1. O mundo comum (Como você estava).
        2. O chamado/Incidente (O problema que surgiu).
        3. O fundo do poço (A pior fase).
        4. A descoberta/Mentor (A solução/produto).
        5. A transformação (Como está hoje).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">6. Estrutura PAS</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Ótima para anúncios curtos:
        • <strong>Problema:</strong> "Está cansado de X?".
        • <strong>Agitação:</strong> "Isso faz você perder Y e se sentir Z...".
        • <strong>Solução:</strong> "A boa notícia é que existe o método W...".
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">7. Prova Social e Autoridade</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Ninguém quer ser cobaia. Mostre prints, vídeos de alunos, números de faturamento. Se não tem depoimentos ainda, use autoridade emprestada (cite estudos, livros ou mentores).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">8. Escrita Conversacional</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Escreva como você fala. Evite palavras difíceis ("juridiquês", "mediquês"). Use "você" e "eu". Frases curtas. O leitor deve sentir que está numa conversa de bar com um amigo inteligente.
      </p>
    `,
    tasks: [
      { id: 'm5-t1', description: "Escreva uma Headline magnética para o seu produto.", completed: false, userAnswer: "" },
      { id: 'm5-t2', description: "Crie um texto usando a estrutura AIDA.", completed: false, userAnswer: "" },
      { id: 'm5-t3', description: "Escreva sua história de superação seguindo a Jornada do Herói.", completed: false, userAnswer: "" },
      { id: 'm5-t4', description: "Crie 3 CTAs diferentes para vender o mesmo produto.", completed: false, userAnswer: "" },
      { id: 'm5-t5', description: "Reescreva um parágrafo técnico seu tornando-o conversacional.", completed: false, userAnswer: "" },
      { id: 'm5-t6', description: "Crie uma headline baseada em curiosidade (sem entregar o assunto).", completed: false, userAnswer: "" },
      { id: 'm5-t7', description: "Crie uma headline baseada em um grande benefício.", completed: false, userAnswer: "" },
      { id: 'm5-t8', description: "Escreva um mini-texto quebrando a objeção 'Não tenho tempo'.", completed: false, userAnswer: "" },
      { id: 'm5-t9', description: "Escreva um mini-texto quebrando a objeção 'Está caro'.", completed: false, userAnswer: "" },
      { id: 'm5-t10', description: "Colete ou simule uma Prova Social (depoimento) para seu produto.", completed: false, userAnswer: "" },
    ],
    isCompleted: false
  },
  {
    id: 6,
    title: "Criação de Produto e Oferta Irresistível",
    description: "Formatos de produtos, precificação, garantias e funis de venda.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-indigo-800">1. Criando um Produto Digital</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Formatos: E-books (rápido, barato), Cursos (valor alto), Mentorias (alto ticket), Comunidades (recorrência).
        Comece com o MVP (Mínimo Produto Viável). Venda antes de produzir tudo.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">2. Oferta Irresistível</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        A oferta é o empacotamento. Deve parecer que o cliente está levando muito mais do que está pagando.
        Pilares: Promessa Única + Bônus + Garantia + Ancoragem de Preço.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">3. Funil de Vendas Simplificado</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Conteúdo Gratuito -> Isca Digital (e-mail) -> Sequência de Nutrição -> Oferta.
        Ou: Anúncio -> WhatsApp -> Conversão X1. O simples funciona e escala.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">4. Precificação Estratégica</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        O preço conta uma história.
        • Ticket Baixo (R$ 19 - R$ 97): Compra por impulso, volume.
        • Ticket Médio (R$ 297 - R$ 997): Exige confiança e conteúdo prévio.
        • Ticket Alto (R$ 2k+): Exige autoridade e contato próximo (mentoria).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">5. Garantias e Inversão de Risco</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        A lei obriga 7 dias. Ouse: "30 dias ou seu dinheiro de volta".
        Garantia Condicional: "Se você aplicar tudo, provar que aplicou e não tiver resultado, eu devolvo o dinheiro + R$ 500 do meu bolso". Isso mata a objeção do medo.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">6. Bônus que Valem Dinheiro</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Bônus servem para quebrar objeções futuras.
        Se vendo curso de emagrecimento, a objeção futura é "o que comer?". Bônus: "E-book de Receitas".
        A objeção é "tenho preguiça". Bônus: "Comunidade de Motivação".
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">7. Entrega (Área de Membros)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        A experiência do aluno define o reembolso e a recompra.
        Organize as aulas em módulos lógicos. Use plataformas como Kiwify, Hotmart ou Memberkit.
        A primeira aula deve ser uma "Vitória Rápida" (Quick Win) para o aluno sentir que valeu a pena.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">8. Upsell, Downsell e Order Bump</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Aumente o lucro sem novos clientes.
        • <strong>Order Bump:</strong> "Leve também essa planilha por + R$ 19" no checkout.
        • <strong>Upsell:</strong> Oferta mais cara logo após a compra.
        • <strong>Downsell:</strong> Oferta mais barata para quem disse "não" à oferta principal.
      </p>
    `,
    tasks: [
      { id: 'm6-t1', description: "Defina o formato e a promessa do seu produto.", completed: false, userAnswer: "" },
      { id: 'm6-t2', description: "Crie 3 Bônus que resolvem problemas futuros do cliente.", completed: false, userAnswer: "" },
      { id: 'm6-t3', description: "Estabeleça o preço e a garantia (incondicional e condicional).", completed: false, userAnswer: "" },
      { id: 'm6-t4', description: "Planeje um Order Bump para colocar no checkout.", completed: false, userAnswer: "" },
      { id: 'm6-t5', description: "Desenhe o fluxo do seu funil de vendas.", completed: false, userAnswer: "" },
      { id: 'm6-t6', description: "Crie o nome oficial do seu produto.", completed: false, userAnswer: "" },
      { id: 'm6-t7', description: "Estruture os módulos do seu curso/ebook (índice).", completed: false, userAnswer: "" },
      { id: 'm6-t8', description: "Defina qual plataforma de vendas você usará e crie sua conta.", completed: false, userAnswer: "" },
      { id: 'm6-t9', description: "Escreva a Política de Reembolso do seu produto.", completed: false, userAnswer: "" },
      { id: 'm6-t10', description: "Escreva o e-mail de Boas-Vindas para quem acabou de comprar.", completed: false, userAnswer: "" },
    ],
    isCompleted: false
  },
  {
    id: 7,
    title: "Estratégias de Venda: Orgânico e Direct",
    description: "Scripts de venda, quebra de objeções, follow-up e vendas por WhatsApp.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-indigo-800">1. Estratégia de Venda Orgânica</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Use Stories para criar consciência e desejo. Técnica do "Evento": faça uma sequência narrativa durante o dia que culmina em uma oferta no final da noite.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">2. Venda por Direct (X1)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Script: Conexão -> Sondagem (entender a dor) -> Diagnóstico (mostrar o problema) -> Apresentação (solução) -> Fechamento. Nunca mande o preço de cara.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">3. Quebrando Objeções</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        "Está caro" = Não viu valor. Reforce a transformação. Compare com algo trivial (custo de uma pizza).
        "Vou ver com meu marido" = Ela não é a decisora ou está usando desculpa. Pergunte: "O que você acha que ele diria?".
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">4. Follow-up (Acompanhamento)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        A venda acontece no acompanhamento. A maioria desiste no primeiro "vácuo".
        Mande mensagem 24h depois: "Ficou alguma dúvida sobre o que conversamos?".
        Mande prova social 48h depois: "Olha o resultado que a Maria teve... lembrei de você".
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">5. Recuperação de Vendas</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Boleto gerado não é venda. Pix gerado não é venda.
        Entre em contato IMEDIATAMENTE. "Vi que você gerou o boleto. Quer o Pix para liberar o acesso na hora?".
        Muitas vezes a pessoa esqueceu ou teve dúvida no pagamento.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">6. WhatsApp Marketing</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        O Zap é terra sagrada. Use Listas de Transmissão (com permissão) ou Grupos VIPs para lançamentos meteoricos.
        Áudio converte mais que texto porque gera proximidade.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">7. Venda Consultiva (Spin Selling)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Para tickets mais altos, não empurre, consulte.
        Situação (Como está?), Problema (O que dói?), Implicação (O que acontece se não resolver?), Necessidade (Como seria resolver?). O cliente se vende sozinho.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">8. Gatilhos de Fechamento</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Ajude o indeciso a decidir.
        • Duplo Vínculo: "Você prefere pagar no cartão ou no Pix?".
        • Perda: "As vagas com o bônus encerram hoje às 18h".
        • Compromisso: "Se eu conseguir um desconto, você fecha agora?".
      </p>
    `,
    tasks: [
      { id: 'm7-t1', description: "Escreva seu Script de Vendas X1 passo a passo.", completed: false, userAnswer: "" },
      { id: 'm7-t2', description: "Crie 3 mensagens de Follow-up para quem parou de responder.", completed: false, userAnswer: "" },
      { id: 'm7-t3', description: "Liste as 5 principais objeções e suas respostas.", completed: false, userAnswer: "" },
      { id: 'm7-t4', description: "Crie um script de recuperação de boleto via WhatsApp.", completed: false, userAnswer: "" },
      { id: 'm7-t5', description: "Treine o Spin Selling escrevendo perguntas de Situação, Problema e Implicação para seu nicho.", completed: false, userAnswer: "" },
      { id: 'm7-t6', description: "Escreva uma mensagem de saudação cordial para o WhatsApp Business.", completed: false, userAnswer: "" },
      { id: 'm7-t7', description: "Grave (simule) um áudio de conexão para enviar após o primeiro 'Oi'.", completed: false, userAnswer: "" },
      { id: 'm7-t8', description: "Escreva um script de Oferta Direta para quem já está pronto para comprar.", completed: false, userAnswer: "" },
      { id: 'm7-t9', description: "Crie uma mensagem usando o gatilho da Escassez.", completed: false, userAnswer: "" },
      { id: 'm7-t10', description: "Planeje o conteúdo de 3 mensagens para uma Lista de Transmissão.", completed: false, userAnswer: "" },
    ],
    isCompleted: false
  },
  {
    id: 8,
    title: "Tráfego Pago e Anúncios",
    description: "Facebook/Google Ads, métricas, pixels, públicos e otimização.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-indigo-800">1. Como Funcionam os Anúncios</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        É um leilão de atenção. Estrutura básica: Campanha (Objetivo) -> Conjunto (Público/Local) -> Anúncio (Criativo).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">2. Principais Erros</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Mexer na campanha toda hora (reseta o aprendizado), segmentação errada e criativo feio/chato.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">3. Escala e Métricas</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        CPC (Custo por Clique), CTR (Taxa de Clique), CPM (Custo por Mil), CPA (Custo por Aquisição/Venda).
        Se o CTR está alto e não vende, o problema é a página. Se o CTR está baixo, o problema é o anúncio.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">4. O Pixel e API de Conversão</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        O Pixel é o "espião" que você instala no site. Ele avisa ao Facebook quem comprou, quem visitou, quem abandonou o carrinho. Sem pixel, você voa cego. A API de Conversão é a evolução do Pixel para burlar bloqueios de cookies (iOS 14).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">5. Públicos (Audiências)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        • <strong>Frio (Interesses):</strong> Pessoas que não te conhecem. Ex: Interesse em "Marketing Digital".
        <br>
        • <strong>Morno (Personalizado):</strong> Envolveu com Instagram, visitou site, viu vídeo 50%.
        <br>
        • <strong>Semelhante (Lookalike):</strong> O Facebook busca pessoas parecidas com seus compradores. Poderosíssimo.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">6. Criativos de Alta Conversão</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        O criativo é 70% do resultado.
        Tipos:
        1. UGC (User Generated Content): Parece vídeo caseiro de cliente recomendando.
        2. Nativo: Parece post orgânico, não anúncio.
        3. Quebra de Padrão: Algo estranho ou curioso nos primeiros 3 segundos.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">7. Teste A/B</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Nunca assuma nada. Teste 2 Headlines, teste vídeo vs imagem, teste público aberto vs segmentado. O mercado decide quem ganha. Deixe rodar por 3 a 7 dias antes de decidir.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">8. Remarketing</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        A mina de ouro. A maioria não compra na primeira vez. Apareça de novo para quem visitou a página e não comprou.
        Anúncio: "Vi que você quase se inscreveu... aqui está um motivo para voltar". O ROI do remarketing costuma ser o mais alto.
      </p>
    `,
    tasks: [
      { id: 'm8-t1', description: "Instale o Pixel do Facebook/Google na sua página.", completed: false, userAnswer: "" },
      { id: 'm8-t2', description: "Crie 3 Criativos diferentes (Vídeo, Imagem, Carrossel).", completed: false, userAnswer: "" },
      { id: 'm8-t3', description: "Defina seus públicos de Remarketing (Visitou site 7d, 30d).", completed: false, userAnswer: "" },
      { id: 'm8-t4', description: "Calcule seu CPA máximo (quanto pode pagar por venda para ter lucro).", completed: false, userAnswer: "" },
      { id: 'm8-t5', description: "Analise uma campanha fictícia: CTR baixo e CPM alto. Qual o diagnóstico?", completed: false, userAnswer: "" },
      { id: 'm8-t6', description: "Defina o orçamento diário inicial da sua primeira campanha.", completed: false, userAnswer: "" },
      { id: 'm8-t7', description: "Escreva o Título (Headline) para seu Anúncio nº 1.", completed: false, userAnswer: "" },
      { id: 'm8-t8', description: "Escreva a Descrição e o Texto Principal para seu Anúncio nº 1.", completed: false, userAnswer: "" },
      { id: 'm8-t9', description: "Escolha ou crie a imagem/vídeo para seu Anúncio nº 2.", completed: false, userAnswer: "" },
      { id: 'm8-t10', description: "Planeje uma estrutura de teste A/B (ex: Público Aberto vs Público Interesses).", completed: false, userAnswer: "" },
    ],
    isCompleted: false
  },
  {
    id: 9,
    title: "Mercado de Afiliados (Opcional)",
    description: "Estratégias para vender produtos de terceiros, tráfego pago e orgânico.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-indigo-800">1. O que é ser Afiliado?</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Vender produtos de terceiros por comissão. Ideal para começar (sem suporte, sem criação).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">2. Divulgar sem Investir (Orgânico)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Páginas de Nicho (ex: perfil de emagrecimento) ou TikToks virais redirecionando para Linktree.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">3. Tráfego Pago para Afiliados</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Velocidade. Mandar direto para a página de vendas do produtor (se permitido) ou para um advertorial/quiz (pre-sell) para evitar bloqueios.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">4. Escolhendo o Produto Vencedor</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Critérios:
        • Promessa forte (Nicho Black ou White).
        • Página de Vendas profissional.
        • VSL (Vídeo de Vendas) bem feito.
        • Material de apoio para afiliados.
        • Comissão de pelo menos 40-50%.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">5. Google Ads (Fundo de Funil)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Estratégia poderosa: Anunciar para quem busca o "Nome do Produto" ou "Nome do Produtor".
        A pessoa já quer comprar, o clique é barato e a conversão é alta. *Verifique se o produtor permite.*
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">6. Vídeo Review (YouTube)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Grave um vídeo: "Curso X Funciona? Cuidado!".
        Conteúdo: Explique o produto, mostre por dentro, dê seu depoimento e deixe o link na descrição. É tráfego qualificado e gratuito a longo prazo.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">7. Parceria com Influenciadores</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Pague um influencer pequeno (micro-influenciador) para fazer stories indicando seu produto de afiliado. Muitas vezes é mais barato que Facebook Ads e traz muito retorno se o público for engajado.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">8. Esteira de Produtos de Terceiros</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Não venda só um produto. Se você capturou o lead (e-mail/zap), venda produtos complementares.
        Vendeu curso de Manicure? Ofereça curso de Alongamento de Unhas depois. O lead é seu ativo.
      </p>
    `,
    tasks: [
      { id: 'm9-t1', description: "Cadastre-se nas plataformas e escolha 3 produtos potenciais.", completed: false, userAnswer: "" },
      { id: 'm9-t2', description: "Crie uma campanha de Google Ads Fundo de Funil (rascunho).", completed: false, userAnswer: "" },
      { id: 'm9-t3', description: "Grave (ou escreva o roteiro de) um Vídeo Review.", completed: false, userAnswer: "" },
      { id: 'm9-t4', description: "Liste 5 micro-influenciadores do nicho para contatar.", completed: false, userAnswer: "" },
      { id: 'm9-t5', description: "Crie uma Pre-sell page (página simples com botão) para evitar bloqueios.", completed: false, userAnswer: "" },
      { id: 'm9-t6', description: "Analise a 'Temperatura' de 3 produtos na Hotmart/Eduzz.", completed: false, userAnswer: "" },
      { id: 'm9-t7', description: "Verifique as Regras de Afiliação de um produto (o que pode/não pode fazer).", completed: false, userAnswer: "" },
      { id: 'm9-t8', description: "Copie e organize seus Hotlinks em um documento seguro.", completed: false, userAnswer: "" },
      { id: 'm9-t9', description: "Crie um link amigável (Bit.ly ou redirecionador) para seu link de afiliado.", completed: false, userAnswer: "" },
      { id: 'm9-t10', description: "Aborde 1 potencial cliente (no orgânico) para testar sua oferta.", completed: false, userAnswer: "" },
    ],
    isCompleted: false
  },
  {
    id: 10,
    title: "Ferramentas, Gestão e Escala",
    description: "Kit de ferramentas, automação, contratação de equipe e próximos passos.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-indigo-800">1. Ferramentas Essenciais</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Canva (Design), CapCut (Vídeo), ActiveCampaign/Mailchimp (E-mail), WordPress (Sites), Trello/Notion (Organização).
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">2. Monetização e LTV</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Lifetime Value: Quanto um cliente gasta com você ao longo do tempo. Venda mais vezes para a mesma pessoa (Esteira de Produtos). É 7x mais barato vender para quem já é cliente.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">3. Escala Vertical vs Horizontal</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Vertical: Gastar mais no mesmo produto/público.
        Horizontal: Criar novos produtos ou novos públicos.
        Para crescer de verdade, você precisará dos dois.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">4. Automação de Marketing</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Use ferramentas para trabalhar por você.
        • E-mails automáticos de boas-vindas.
        • Recuperação automática de carrinho.
        • Chatbots (ManyChat) para responder directs e entregar iscas.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">5. Delegação e Equipe</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Você começa como "Eu-quipe". Para escalar, contrate.
        Primeiras contratações: Suporte (para liberar seu tempo), Designer/Editor (trabalho operacional) e Gestor de Tráfego (se você não for o expert).
        Foque na estratégia.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">6. CRM e Gestão de Leads</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Se você vende High Ticket ou Serviço, precisa de um CRM (PipeDrive, Kommo).
        Organize seus leads em colunas: Novo Lead -> Em Contato -> Proposta Enviada -> Negociação -> Fechado. Não confie na memória.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">7. Legalização e Financeiro</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Não misture dinheiro da empresa com dinheiro pessoal. Tenha contas separadas.
        Comece como MEI (até 81k/ano). Passou disso, migre para ME. Pague seus impostos ou a Receita vai levar seu lucro.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-indigo-800">8. O Próximo Nível (Mentoria)</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        O jogo muda o tempo todo. Para se manter no topo, invista em conhecimento.
        Entre em Masterminds. O ambiente vale mais que o conteúdo. Estar perto de quem fatura 10x mais que você vai puxar sua régua para cima.
      </p>
    `,
    tasks: [
      { id: 'm10-t1', description: "Organize seus processos no Trello/Notion.", completed: false, userAnswer: "" },
      { id: 'm10-t2', description: "Desenhe sua Esteira de Produtos completa (Entrada, Principal, High Ticket).", completed: false, userAnswer: "" },
      { id: 'm10-t3', description: "Configure uma automação simples (e-mail ou ManyChat).", completed: false, userAnswer: "" },
      { id: 'm10-t4', description: "Defina qual será sua primeira contratação e escreva o descritivo da vaga.", completed: false, userAnswer: "" },
      { id: 'm10-t5', description: "Faça um planejamento financeiro separando Pró-labore de Reinvestimento.", completed: false, userAnswer: "" },
      { id: 'm10-t6', description: "Crie uma conta gratuita no Canva para seus designs.", completed: false, userAnswer: "" },
      { id: 'm10-t7', description: "Crie uma conta em um serviço de E-mail Marketing (Mailchimp/Active).", completed: false, userAnswer: "" },
      { id: 'm10-t8', description: "Defina sua meta de LTV (quanto você quer que cada cliente gaste em 1 ano).", completed: false, userAnswer: "" },
      { id: 'm10-t9', description: "Escreva o processo de suporte (SOP) para quando você delegar essa função.", completed: false, userAnswer: "" },
      { id: 'm10-t10', description: "Crie um Checklist diário do CEO (suas 3 tarefas únicas).", completed: false, userAnswer: "" },
    ],
    isCompleted: false
  }
];
