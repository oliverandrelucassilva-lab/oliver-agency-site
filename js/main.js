document.addEventListener('DOMContentLoaded', () => {
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

  // Cases: fileira nunca quebra linha; as setas rolam manualmente (sem autoplay).
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
  const serviceData = {
    atendimento: {
      name: 'Atendimento Automático via WhatsApp',
      summary: 'Uma recepcionista virtual com IA que responde na hora, agenda horários e envia lembretes, mesmo fora do expediente.',
      steps: [
        'Conectamos a IA ao WhatsApp da sua empresa.',
        'Configuramos a IA com as informações do seu negócio: serviços, horários, regras de agendamento e o tom de voz que você quer.',
        'A IA responde dúvidas e agenda direto na sua agenda.',
        'Lembretes automáticos são enviados antes de cada atendimento.',
        'Casos delicados ou sem resposta são encaminhados para uma pessoa da sua equipe.',
      ],
      included: ['Configuração completa', 'Testes antes de entrar no ar', 'Ajustes iniciais', 'Acompanhamento'],
      audience: 'Negócios que recebem muitas mensagens e perdem clientes por demora na resposta.',
    },
    sites: {
      name: 'Sites institucionais',
      summary: 'Páginas profissionais e personalizadas, feitas para transmitir confiança e levar o visitante ao contato.',
      steps: [
        'Entendemos seu negócio e sua identidade visual.',
        'Criamos o design com suas cores, fotos e informações.',
        'Você revisa e pede os ajustes.',
        'Publicamos no ar, com endereço próprio e botão direto para o WhatsApp.',
      ],
      included: ['Design personalizado', 'Versão para celular', 'Botão de WhatsApp', 'Publicação', 'SEO técnico básico'],
      audience: 'Profissionais e empresas que querem ser encontrados e passar mais credibilidade.',
    },
    seo: {
      name: 'Presença digital / SEO local',
      summary: 'Ajudamos seu negócio a aparecer melhor no Google e no Google Meu Negócio, atraindo clientes da sua região.',
      steps: [
        'Revisamos ou criamos seu perfil no Google Meu Negócio.',
        'Otimizamos categorias, descrição, horários e informações de contato.',
        'Cadastramos o site no Google Search Console.',
        'Conferimos a consistência de nome, endereço e telefone em todos os lugares.',
        'Cadastramos o negócio em diretórios relevantes.',
      ],
      included: ['Perfil otimizado', 'Configuração do Search Console', 'Kit de informações padronizadas'],
      audience: 'Negócios locais que dependem de ser encontrados na cidade e na região.',
    },
    redes: {
      name: 'Gestão de redes sociais',
      summary: 'Cuidamos do conteúdo e da presença ativa nas redes sociais do seu negócio.',
      steps: [
        'Definimos objetivo, público e linha de conteúdo.',
        'Montamos um calendário de publicações.',
        'Criamos as artes e textos.',
        'Publicamos e acompanhamos o desempenho.',
      ],
      included: ['Planejamento', 'Criação e publicação do conteúdo', 'Relatório do que funcionou'],
      audience: 'Quem quer manter perfis ativos e profissionais sem ter tempo de cuidar disso.',
    },
    trafego: {
      name: 'Tráfego pago',
      summary: 'Anúncios segmentados no Google e nas redes sociais para colocar seu negócio na frente de quem já está procurando o que você oferece.',
      steps: [
        'Definimos objetivo, público e verba.',
        'Criamos os anúncios e as segmentações.',
        'Lançamos e acompanhamos as campanhas.',
        'Ajustamos conforme os resultados.',
      ],
      included: ['Estratégia da campanha', 'Criação e acompanhamento dos anúncios'],
      audience: 'Negócios que querem acelerar a chegada de novos clientes com investimento controlado.',
      note: 'O valor investido em anúncios é pago à parte, direto na plataforma.',
    },
  };

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
      const data = serviceData[slug];
      if (!data) return;

      lastFocusedEl = document.activeElement;

      modalIcon.innerHTML = card ? card.querySelector('.card-icon').innerHTML : '';
      modalTitle.textContent = data.name;
      modalSummary.textContent = data.summary;
      fillList(modalSteps, data.steps);
      fillList(modalIncluded, data.included);
      modalAudience.textContent = data.audience;

      if (data.note) {
        modalNote.textContent = data.note;
        modalNote.hidden = false;
      } else {
        modalNote.hidden = true;
      }

      const message = `Olá, Lucas! Vi o serviço de ${data.name} no site da Oliver Agency e queria saber mais.`;
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
    if (serviceData[initialSlug]) {
      const matchingCard = document.querySelector(`.card-service[data-service="${initialSlug}"]`);
      openModal(initialSlug, matchingCard);
    }
  }
});
