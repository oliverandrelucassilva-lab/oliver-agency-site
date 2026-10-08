// Todos os textos do site ficam centralizados neste objeto.
// Para editar um texto, altere apenas os valores abaixo — o HTML não precisa ser tocado.
const SITE_CONTENT = {
  hero: {
    eyebrow: 'Tecnologia para Empresas',
    title: 'Automação inteligente para atendimento sem interrupções',
    sub: 'Soluções em atendimento automático via WhatsApp com inteligência artificial, sites institucionais, lojas virtuais e presença digital, desenvolvidas para empresas de todos os segmentos que buscam crescer com organização e profissionalismo.',
    ctaPrimary: 'Falar com a Oliver Agency',
    ctaSecondary: 'Conhecer os serviços',
  },

  sobre: {
    tag: 'Quem somos',
    title: 'Tecnologia sob medida para empresas de todos os segmentos',
    paragraphs: [
      'A Oliver Agency nasceu para resolver um problema recorrente em empresas de todos os portes: clientes perdidos por demora no atendimento, sites desatualizados e baixa visibilidade nas buscas.',
      'A proposta é simples: tecnologia de qualidade, acessível e sem complicação. Cada solução é desenvolvida sob medida, respeitando a rotina de cada operação. O acompanhamento é próximo, com suporte disponível durante todo o projeto.',
    ],
  },

  servicosHead: {
    tag: 'O que fazemos',
    title: 'Soluções para atender melhor e ser encontrado',
    lead: 'Cinco frentes que se complementam: atendimento, presença online, visibilidade, conteúdo e anúncios.',
  },
  servicos: [
    {
      slug: 'atendimento',
      iconColor: 'orange',
      icon: '<path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"/><path d="M8.5 9.5c0-.6.4-1 1-1h1c.4 0 .7.2.9.6l.6 1.2c.2.4.1.8-.2 1.1l-.6.6c.4 1 1.2 1.8 2.2 2.2l.6-.6c.3-.3.7-.4 1.1-.2l1.2.6c.4.2.6.5.6.9v1c0 .6-.4 1-1 1-4.4 0-8-3.6-8-8Z"/>',
      title: 'Atendimento Automático via WhatsApp',
      desc: 'Sistema de automação com inteligência artificial para atendimento empresarial. Respostas imediatas, agendamentos organizados e lembretes automáticos, inclusive fora do horário comercial.',
    },
    {
      slug: 'sites',
      iconColor: 'blue',
      icon: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18"/><path d="M8 21h8"/><path d="M12 18v3"/>',
      title: 'Sites Institucionais',
      desc: 'Sites profissionais e personalizados, desenvolvidos para transmitir credibilidade e transformar visitantes em contatos, com identidade própria e sem aparência de modelo genérico.',
    },
    {
      slug: 'seo',
      iconColor: 'orange',
      icon: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
      title: 'Presença Digital e SEO',
      desc: 'Estratégia de visibilidade para que a empresa seja encontrada por quem busca o serviço, fortalecendo a presença no Google e a credibilidade da marca.',
    },
    {
      slug: 'redes',
      iconColor: 'blue',
      icon: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
      title: 'Gestão de Redes Sociais',
      desc: 'Planejamento, criação e publicação de conteúdo com identidade visual consistente e frequência regular, para atrair e fidelizar o público.',
    },
    {
      slug: 'trafego',
      iconColor: 'orange',
      icon: '<path d="M12 20V10M18 20V4M6 20v-6"/>',
      title: 'Tráfego Pago',
      desc: 'Campanhas segmentadas no Google e nas redes sociais, com foco em alcançar o público que já procura o serviço oferecido.',
    },
  ],

  tecnologiaHead: {
    tag: 'Tecnologia e método',
    title: 'Tecnologia de ponta aplicada à rotina do negócio',
    lead: 'Engenharia, design e estratégia reunidos em soluções simples de usar.',
  },
  tecnologia: [
    {
      dot: 'orange',
      title: 'Automação e Inteligência Artificial',
      desc: 'Atendimento que compreende as mensagens recebidas, responde com naturalidade e mantém a agenda organizada de forma automática.',
      tags: ['Inteligência Artificial', 'Integração com WhatsApp', 'Agenda Integrada', 'Dados Seguros'],
    },
    {
      dot: 'blue',
      title: 'Desenvolvimento Web',
      desc: 'Sites rápidos, responsivos e preparados para serem encontrados nas buscas.',
      tags: ['Sites Responsivos', 'Alta Performance', 'SEO Técnico', 'Hospedagem Profissional'],
    },
    {
      dot: 'orange',
      title: 'Marketing Digital',
      desc: 'Gestão da presença online para que o negócio seja encontrado no momento em que o cliente procura.',
      tags: ['SEO', 'Google Meu Negócio', 'Redes Sociais', 'Tráfego Pago'],
    },
    {
      dot: 'blue',
      title: 'Design e Identidade',
      desc: 'Projetos que refletem a personalidade de cada negócio, com experiência de navegação agradável desde o primeiro acesso.',
      tags: ['Identidade Visual', 'Design para Celular', 'Experiência do Usuário'],
    },
  ],

  portfolioCoversHead: {
    tag: 'Portfólio',
    title: 'Um pouco do que já colocamos no ar',
    lead: 'Imagens reais dos projetos entregues. Passe o mouse (ou toque) para ver o site ou o projeto completo.',
  },
  portfolioMore: {
    title: 'Ver mais projetos',
    desc: 'Veja todos os clientes atendidos pela Oliver Agency, incluindo os que ainda não têm imagem de capa.',
  },

  portfolioHead: {
    tag: 'Clientes',
    title: 'Projetos em operação',
    lead: 'Cada projeto representa uma empresa real que confiou no trabalho da Oliver Agency. O portfólio está em constante crescimento.',
  },
  ctaButtonLabel: 'Ver projeto',
  portfolioFinal: {
    title: 'O próximo projeto pode ser o seu',
    desc: 'Vamos conversar sobre como profissionalizar o atendimento e a presença digital da sua empresa.',
    cta: 'Iniciar conversa',
  },

  processoHead: {
    tag: 'Processo de trabalho',
    title: 'Um processo claro, do início ao fim',
  },
  processo: [
    { number: '01', title: 'Diagnóstico', desc: 'Análise da operação atual do negócio e identificação das oportunidades em que a tecnologia gera resultado real.' },
    { number: '02', title: 'Proposta Personalizada', desc: 'Desenvolvimento de uma solução sob medida, adequada à rotina e às necessidades de cada cliente.' },
    { number: '03', title: 'Implementação', desc: 'Colocação do projeto no ar, com período de testes e validação antes da entrada em operação.' },
    { number: '04', title: 'Acompanhamento Contínuo', desc: 'Suporte permanente após a entrega, com ajustes, melhorias e atendimento sempre que necessário.' },
  ],

  diferenciaisHead: {
    tag: 'Diferenciais',
    title: 'Por que escolher a Oliver Agency',
  },
  diferenciais: [
    {
      icon: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
      title: 'Atendimento Próximo e Personalizado',
      desc: 'Comunicação direta e acessível durante todo o projeto, com acompanhamento de quem conhece a operação do cliente.',
    },
    {
      icon: '<path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
      title: 'Soluções Sob Medida',
      desc: 'Cada negócio possui necessidades próprias. Os projetos são desenvolvidos de forma individual, sem pacotes genéricos.',
    },
    {
      icon: '<path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/>',
      title: 'Investimento Acessível',
      desc: 'Tecnologia de qualidade com valores pensados para a realidade de cada empresa.',
    },
    {
      icon: '<path d="M4 12a8 8 0 0 1 14.9-4"/><path d="M20 12a8 8 0 0 1-14.9 4"/><path d="M19 4v4h-4M5 20v-4h4"/>',
      title: 'Suporte Contínuo',
      desc: 'Acompanhamento após a entrega, com disponibilidade para ajustes, melhorias e suporte técnico.',
    },
  ],

  ctaFinal: {
    title: 'Vamos conversar sobre a sua empresa?',
    desc: 'Uma conversa sem compromisso para entender como a tecnologia pode melhorar o atendimento e a presença online do negócio.',
    cta: 'Falar pelo WhatsApp',
  },

  footer: {
    tagline: 'Automação e tecnologia para empresas que querem atender melhor e crescer.',
  },
};

// Portfólio: adicionar um novo cliente é incluir um item neste array.
const PORTFOLIO_DATA = [
  {
    file: 'jf-move',
    tagLabel: 'Loja Virtual',
    avatar: { type: 'img', src: 'assets/img/jf-move.png', alt: 'Logo da JF Move' },
    name: 'JF Move',
    niche: 'Moda Fitness',
    desc: 'Loja virtual completa, com catálogo de produtos, carrinho e finalização de compra, pronta para vendas online.',
  },
  {
    file: 'clinica-amalos',
    tagLabel: 'Site Institucional',
    avatar: { type: 'img', src: 'assets/img/clinica-amalos.png', alt: 'Logo da Clínica Amalos' },
    name: 'Clínica Amalos',
    niche: 'Saúde Integrativa e Odontológica',
    desc: 'Presença digital desenvolvida para transmitir credibilidade e fortalecer a atração de pacientes da região.',
  },
  {
    file: '193-shoes',
    tagLabel: 'Sistema de Gestão de Estoque',
    avatar: { type: 'img', src: 'assets/img/193-shoes.png', alt: 'Logo da 193 Shoes' },
    name: '193 Shoes',
    niche: 'Loja de Calçados Femininos',
    desc: 'Sistema interno de controle de estoque por numeração, com envio de foto por tamanho direto pelo WhatsApp.',
  },
  {
    file: 'ortomaster',
    tagLabel: 'Atendimento Automático',
    avatar: { type: 'img', src: 'assets/img/ortomaster.png', alt: 'Logo da OrtoMaster' },
    name: 'OrtoMaster',
    niche: 'Clínica Odontológica',
    desc: 'Atendimento via WhatsApp com boas-vindas, esclarecimento de dúvidas e agendamento de pacientes, disponível 24 horas por dia.',
  },
  {
    file: 'clinica-odonto-med',
    tagLabel: 'Site e Atendimento Automático',
    avatar: { type: 'img', src: 'assets/img/clinica-odonto-med.png', alt: 'Logo da Clínica Odonto Med' },
    name: 'Clínica Odonto Med',
    niche: 'Clínica Médica e Odontológica',
    desc: 'Site institucional integrado ao atendimento automático via WhatsApp, com gestão de redes sociais ativa semanalmente.',
  },
  {
    file: 'dra-yumi-sasaki',
    tagLabel: 'Site Institucional',
    avatar: { type: 'img', src: 'assets/img/dra-yumi-sasaki.png', alt: 'Logo da Dra. Yumi Sasaki' },
    name: 'Dra. Yumi Sasaki',
    niche: 'Odontologia',
    desc: 'Site institucional desenvolvido para apresentar a atuação profissional, as especialidades e facilitar o contato direto pelo WhatsApp.',
  },
];

// Capas com prova visual exibidas na seção Portfólio (acima de "Quem somos").
// type: 'external' abre o site do cliente em nova aba; 'page' leva direto para a
// página de case (href) na mesma aba; 'internal' leva até a seção Clientes.
const PORTFOLIO_COVERS = [
  {
    file: '193-shoes',
    name: '193 Shoes',
    niche: 'Loja de Calçados Femininos',
    cover: 'assets/img/covers/193-shoes.jpg',
    link: { type: 'page', href: 'https://oliver-agency-site.vercel.app/cases/193-shoes.html' },
  },
  {
    file: 'dra-yumi-sasaki',
    name: 'Dra. Yumi Sasaki',
    niche: 'Odontologia Estética',
    cover: 'assets/img/covers/dra-yumi-sasaki.jpg',
    link: { type: 'external', href: 'https://www.drayumisasaki.com.br' },
  },
  {
    file: 'clinica-amalos',
    name: 'Clínica Amalos',
    niche: 'Saúde Integrativa e Odontológica',
    cover: 'assets/img/covers/clinica-amalos.jpg',
    link: { type: 'external', href: 'https://clinica-amalos-site.vercel.app' },
  },
  {
    file: 'jf-move',
    name: 'JF Move',
    niche: 'Moda Fitness',
    cover: 'assets/img/covers/jf-move.jpg',
    link: { type: 'internal' },
  },
  {
    file: 'clinica-odonto-med',
    name: 'Clínica Odonto Med',
    niche: 'Clínica Médica e Odontológica',
    cover: 'assets/img/covers/clinica-odonto-med.jpg',
    link: { type: 'internal' },
  },
  {
    file: 'ortomaster',
    name: 'OrtoMaster',
    niche: 'Clínica Odontológica',
    cover: 'assets/img/covers/ortomaster.jpg',
    link: { type: 'internal' },
  },
];

// Conteúdo dos modais de serviço, aberto a partir dos cards em #servicos.
const SERVICE_MODAL_DATA = {
  atendimento: {
    name: 'Atendimento Automático via WhatsApp',
    highlight: 'Atendimento imediato, padronizado e disponível 24 horas por dia.',
    steps: [
      'Solução de IA integrada ao WhatsApp da empresa, adaptada às informações, serviços e identidade de comunicação do negócio.',
      'Respostas instantâneas ao público, a qualquer hora, inclusive fora do expediente.',
      'Agendamentos registrados de forma automática, com lembretes antes de cada atendimento.',
      'Casos que exigem atenção especial são direcionados à equipe responsável.',
    ],
    included: ['Implantação completa do sistema', 'Personalização conforme a operação da empresa', 'Período de testes e validação antes da entrada em operação', 'Acompanhamento e suporte contínuos'],
    audience: 'Empresas com alto volume de mensagens que buscam mais agilidade, organização e redução de oportunidades perdidas por demora no retorno.',
  },
  sites: {
    name: 'Sites Institucionais',
    highlight: 'Uma presença profissional online, pensada para transmitir confiança.',
    steps: [
      'O site é desenhado a partir da identidade do negócio.',
      'O conteúdo é organizado para apresentar bem os serviços e facilitar o contato.',
      'O visitante chega ao WhatsApp com um clique.',
      'O resultado é leve, moderno e adaptado a celular e computador.',
    ],
    included: ['Design personalizado', 'Versão otimizada para celular', 'Botão direto para WhatsApp', 'Publicação no ar e suporte'],
    audience: 'Empresas e profissionais de diversos segmentos que querem ser encontrados e transmitir credibilidade antes mesmo do primeiro contato.',
  },
  seo: {
    name: 'Presença Digital e SEO',
    highlight: 'Mais visibilidade para quem procura o serviço.',
    steps: [
      'Um trabalho estratégico posiciona o negócio nas buscas.',
      'A presença online passa a transmitir mais autoridade e confiança.',
      'O objetivo é ser encontrado por quem já está procurando o serviço.',
    ],
    included: ['Estratégia de visibilidade', 'Presença online organizada e padronizada', 'Acompanhamento dos resultados'],
    audience: 'Empresas que querem aparecer quando o público pesquisa na internet.',
  },
  redes: {
    name: 'Gestão de Redes Sociais',
    highlight: 'Perfis ativos, com identidade e constância.',
    steps: [
      'A comunicação é planejada de acordo com o perfil do negócio e do público.',
      'O conteúdo segue uma linha visual própria e é publicado com regularidade.',
      'O perfil passa a refletir a qualidade do trabalho oferecido.',
    ],
    included: ['Planejamento de conteúdo', 'Criação e publicação das postagens', 'Identidade visual consistente', 'Acompanhamento do desempenho'],
    audience: 'Empresas que querem manter as redes sociais ativas e profissionais sem perder tempo com isso.',
  },
  trafego: {
    name: 'Tráfego Pago',
    highlight: 'Anúncios pensados para atrair o público certo.',
    steps: [
      'As campanhas são planejadas com objetivo claro e público definido.',
      'Os anúncios levam as pessoas interessadas direto para o contato com o negócio.',
      'Os resultados são acompanhados e as campanhas são ajustadas ao longo do tempo.',
    ],
    included: ['Planejamento e gestão das campanhas', 'Definição de público e objetivos', 'Relatórios de desempenho', 'Otimização contínua'],
    audience: 'Empresas que querem acelerar a chegada de novos contatos de forma mensurável.',
    note: 'O investimento em anúncios é separado do valor da gestão.',
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const svgIcon = (inner) => `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8">${inner}</svg>`;
  const svgIconSmall = (inner) => `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8">${inner}</svg>`;
  const arrowIcon = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6"/></svg>';
  const globeIcon = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>';

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  // Preenche os textos de blocos únicos (hero, sobre, CTA final, rodapé etc.)
  const renderStaticText = () => {
    setText('heroEyebrow', SITE_CONTENT.hero.eyebrow);
    setText('heroTitle', SITE_CONTENT.hero.title);
    setText('heroSub', SITE_CONTENT.hero.sub);
    setText('heroCtaPrimary', SITE_CONTENT.hero.ctaPrimary);
    setText('heroCtaSecondary', SITE_CONTENT.hero.ctaSecondary);

    setText('sobreTag', SITE_CONTENT.sobre.tag);
    setText('sobreTitle', SITE_CONTENT.sobre.title);
    const sobreBody = document.getElementById('sobreBody');
    if (sobreBody) {
      sobreBody.innerHTML = SITE_CONTENT.sobre.paragraphs
        .map((p, i) => `<p class="${i === 0 ? 'lead' : ''} reveal">${p}</p>`)
        .join('');
    }

    setText('servicosTag', SITE_CONTENT.servicosHead.tag);
    setText('servicosTitle', SITE_CONTENT.servicosHead.title);
    setText('servicosLead', SITE_CONTENT.servicosHead.lead);

    setText('tecnologiaTag', SITE_CONTENT.tecnologiaHead.tag);
    setText('tecnologiaTitle', SITE_CONTENT.tecnologiaHead.title);
    setText('tecnologiaLead', SITE_CONTENT.tecnologiaHead.lead);

    setText('portfolioCoversTag', SITE_CONTENT.portfolioCoversHead.tag);
    setText('portfolioCoversTitle', SITE_CONTENT.portfolioCoversHead.title);
    setText('portfolioCoversLead', SITE_CONTENT.portfolioCoversHead.lead);

    setText('portfolioTag', SITE_CONTENT.portfolioHead.tag);
    setText('portfolioTitle', SITE_CONTENT.portfolioHead.title);
    setText('portfolioLead', SITE_CONTENT.portfolioHead.lead);

    setText('processoTag', SITE_CONTENT.processoHead.tag);
    setText('processoTitle', SITE_CONTENT.processoHead.title);

    setText('diferenciaisTag', SITE_CONTENT.diferenciaisHead.tag);
    setText('diferenciaisTitle', SITE_CONTENT.diferenciaisHead.title);

    setText('ctaFinalTitle', SITE_CONTENT.ctaFinal.title);
    setText('ctaFinalDesc', SITE_CONTENT.ctaFinal.desc);
    setText('ctaFinalBtn', SITE_CONTENT.ctaFinal.cta);

    setText('footerTagline', SITE_CONTENT.footer.tagline);
  };

  const renderServicos = () => {
    const grid = document.getElementById('servicosGrid');
    if (!grid) return;
    grid.innerHTML = SITE_CONTENT.servicos
      .map(
        (s) => `
        <article class="card card-service reveal" data-service="${s.slug}" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="serviceModal">
          <div class="card-icon icon-${s.iconColor}">${svgIcon(s.icon)}</div>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <span class="card-more">Saiba mais ${arrowIcon}</span>
        </article>`
      )
      .join('');
  };

  const renderTecnologia = () => {
    const grid = document.getElementById('tecnologiaGrid');
    if (!grid) return;
    grid.innerHTML = SITE_CONTENT.tecnologia
      .map(
        (b) => `
        <div class="skill-block reveal">
          <h3 class="skill-title"><span class="dot dot-${b.dot}"></span>${b.title}</h3>
          <p class="skill-desc">${b.desc}</p>
          <div class="badges">
            ${b.tags.map((t) => `<span class="badge">${t}</span>`).join('')}
          </div>
        </div>`
      )
      .join('');
  };

  const renderPortfolioCovers = () => {
    const grid = document.getElementById('portfolioCoversGrid');
    if (!grid) return;

    const cards = PORTFOLIO_COVERS.map((p) => {
      const isExternal = p.link.type === 'external';
      const isPage = p.link.type === 'page';
      const href = isExternal || isPage ? p.link.href : '#cases';
      const target = isExternal ? ' target="_blank" rel="noopener"' : '';
      const label = isExternal ? 'Ver site' : 'Ver projeto';
      const icon = isExternal ? globeIcon : arrowIcon;
      return `
        <a class="portfolio-cover" href="${href}"${target}>
          <span class="portfolio-cover-media">
            <img src="${p.cover}" alt="Captura de tela do projeto ${p.name}" loading="lazy">
            <span class="portfolio-cover-overlay">
              <span class="portfolio-cover-cta">${icon} ${label}</span>
            </span>
          </span>
          <span class="portfolio-cover-caption">
            <strong>${p.name}</strong>
            <span>${p.niche}</span>
          </span>
        </a>`;
    });

    const moreCard = `
      <a class="portfolio-cover portfolio-cover-more" href="#cases">
        <span class="portfolio-cover-more-inner">
          ${arrowIcon}
          <strong>${SITE_CONTENT.portfolioMore.title}</strong>
          <span>${SITE_CONTENT.portfolioMore.desc}</span>
        </span>
      </a>`;

    grid.innerHTML = cards.join('') + moreCard;
  };

  const renderPortfolio = () => {
    const track = document.getElementById('casesTrack');
    if (!track) return;
    const cards = PORTFOLIO_DATA.map((c) => {
      const avatarHtml =
        c.avatar.type === 'img'
          ? `<img src="${c.avatar.src}" alt="${c.avatar.alt}">`
          : `<span class="case-avatar-fallback">${c.avatar.text}</span>`;
      return `
        <div class="cases-slide">
          <article class="case-card reveal">
            <div class="case-tagbar"><span class="case-type">${c.tagLabel}</span></div>
            <div class="case-avatar">${avatarHtml}</div>
            <h3>${c.name}</h3>
            <p class="case-niche">${c.niche}</p>
            <p class="case-result">${c.desc}</p>
            <a class="case-cta-link" href="cases/${c.file}.html">${SITE_CONTENT.ctaButtonLabel} ${arrowIcon}</a>
          </article>
        </div>`;
    });

    const finalCard = `
      <div class="cases-slide">
        <a href="https://wa.me/5575998316140?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20ser%20o%20pr%C3%B3ximo%20projeto%20da%20Oliver%20Agency" class="case-card case-card-placeholder reveal" target="_blank" rel="noopener">
        <div class="case-placeholder-icon">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14M5 12h14"/></svg>
        </div>
        <h3>${SITE_CONTENT.portfolioFinal.title}</h3>
        <p class="case-result">${SITE_CONTENT.portfolioFinal.desc}</p>
        <span class="case-cta-link">${SITE_CONTENT.portfolioFinal.cta} ${arrowIcon}</span>
        </a>
      </div>`;

    track.innerHTML = cards.join('') + finalCard;
  };

  const renderProcesso = () => {
    const list = document.getElementById('processoList');
    if (!list) return;
    list.innerHTML = SITE_CONTENT.processo
      .map(
        (step) => `
        <li class="process-step reveal">
          <span class="step-number">${step.number}</span>
          <div>
            <h3>${step.title}</h3>
            <p>${step.desc}</p>
          </div>
        </li>`
      )
      .join('');
  };

  const renderDiferenciais = () => {
    const grid = document.getElementById('diferenciaisGrid');
    if (!grid) return;
    grid.innerHTML = SITE_CONTENT.diferenciais
      .map(
        (d) => `
        <div class="diff-item reveal">
          <div class="diff-icon">${svgIconSmall(d.icon)}</div>
          <div>
            <h3>${d.title}</h3>
            <p>${d.desc}</p>
          </div>
        </div>`
      )
      .join('');
  };

  renderStaticText();
  renderServicos();
  renderTecnologia();
  renderPortfolioCovers();
  renderPortfolio();
  renderProcesso();
  renderDiferenciais();

  // Ano no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Animação de entrada ao rolar
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${(i % 4) * 60}ms`;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Barra de progresso de leitura
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  }

  // Destaque do link ativo no menu conforme a seção visível
  const navLinks = Array.from(document.querySelectorAll('.main-nav a[href*="#"]'));
  const sectionMap = navLinks
    .map((link) => {
      const id = link.getAttribute('href').split('#')[1];
      const section = id ? document.getElementById(id) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sectionMap.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = sectionMap.find((m) => m.section === entry.target);
          if (!match) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove('active'));
            match.link.classList.add('active');
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sectionMap.forEach((m) => spy.observe(m.section));
  }

  // Efeito de inclinação (tilt) sutil nos cards, seguindo o cursor
  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    const tiltEls = document.querySelectorAll('.card, .case-card:not(.case-card-placeholder)');
    tiltEls.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotateX = (0.5 - py) * 8;
        const rotateY = (px - 0.5) * 8;
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  // Portfólio: fileira nunca quebra linha; as setas rolam manualmente (sem autoplay).
  const casesViewport = document.querySelector('.cases-viewport');
  const casesTrack = document.getElementById('casesTrack');
  const casesPrevBtn = document.querySelector('.cases-arrow-prev');
  const casesNextBtn = document.querySelector('.cases-arrow-next');
  if (casesViewport && casesTrack && (casesPrevBtn || casesNextBtn)) {
    const scrollStep = () => {
      const firstSlide = casesTrack.querySelector('.cases-slide');
      if (!firstSlide) return casesViewport.clientWidth * 0.8;
      const gap = parseFloat(window.getComputedStyle(casesTrack).columnGap || '24');
      return firstSlide.getBoundingClientRect().width + gap;
    };
    const scrollTo = (delta) => {
      casesViewport.scrollBy({ left: delta, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    if (casesNextBtn) casesNextBtn.addEventListener('click', () => scrollTo(scrollStep()));
    if (casesPrevBtn) casesPrevBtn.addEventListener('click', () => scrollTo(-scrollStep()));
  }

  // Modal de serviço
  const serviceCards = document.querySelectorAll('.card-service');
  const modalOverlay = document.getElementById('serviceModalOverlay');
  const modalPanel = document.getElementById('serviceModal');

  if (serviceCards.length && modalOverlay && modalPanel) {
    const modalIcon = document.getElementById('serviceModalIcon');
    const modalTitle = document.getElementById('serviceModalTitle');
    const modalSummary = document.getElementById('serviceModalSummary');
    const modalSteps = document.getElementById('serviceModalSteps');
    const modalIncluded = document.getElementById('serviceModalIncluded');
    const modalAudience = document.getElementById('serviceModalAudience');
    const modalNote = document.getElementById('serviceModalNote');
    const modalCta = document.getElementById('serviceModalCta');
    const modalClose = document.getElementById('serviceModalClose');

    let lastFocusedEl = null;

    const fillList = (container, items) => {
      container.innerHTML = '';
      items.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        container.appendChild(li);
      });
    };

    const openModal = (slug, card) => {
      const data = SERVICE_MODAL_DATA[slug];
      if (!data) return;

      lastFocusedEl = document.activeElement;

      modalIcon.innerHTML = card ? card.querySelector('.card-icon').innerHTML : '';
      modalTitle.textContent = data.name;
      modalSummary.textContent = data.highlight;
      fillList(modalSteps, data.steps);
      fillList(modalIncluded, data.included);
      modalAudience.textContent = data.audience;

      if (data.note) {
        modalNote.textContent = data.note;
        modalNote.hidden = false;
      } else {
        modalNote.hidden = true;
      }

      modalCta.textContent = `Quero saber mais sobre ${data.name}`;
      const message = `Olá! Tenho interesse em ${data.name} e gostaria de saber mais.`;
      modalCta.href = `https://wa.me/5575998316140?text=${encodeURIComponent(message)}`;

      history.pushState({ serviceModal: slug }, '', `#servicos-${slug}`);

      modalOverlay.hidden = false;
      requestAnimationFrame(() => modalOverlay.classList.add('is-open'));
      document.body.style.overflow = 'hidden';
      modalClose.focus();
    };

    const closeModal = (updateHash) => {
      if (modalOverlay.hidden) return;
      modalOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
      window.setTimeout(() => {
        modalOverlay.hidden = true;
      }, reduceMotion ? 0 : 280);
      if (updateHash !== false && window.location.hash.startsWith('#servicos-')) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
      if (lastFocusedEl) lastFocusedEl.focus();
    };

    serviceCards.forEach((card) => {
      const slug = card.getAttribute('data-service');
      const activate = () => openModal(slug, card);
      card.addEventListener('click', activate);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      });
    });

    modalClose.addEventListener('click', () => closeModal());
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modalOverlay.hidden) closeModal();
    });

    // Foco preso dentro do modal
    modalPanel.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusable = modalPanel.querySelectorAll('button, a[href]');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    window.addEventListener('popstate', () => {
      if (!window.location.hash.startsWith('#servicos-')) {
        closeModal(false);
      }
    });

    // Abre direto se a URL já chegar com o hash do serviço
    const initialSlug = window.location.hash.replace('#servicos-', '');
    if (SERVICE_MODAL_DATA[initialSlug]) {
      const matchingCard = document.querySelector(`.card-service[data-service="${initialSlug}"]`);
      openModal(initialSlug, matchingCard);
    }
  }
});
