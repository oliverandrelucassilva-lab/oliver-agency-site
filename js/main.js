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
      highlight: 'Atendimento rápido, organizado e disponível o tempo todo.',
      steps: [
        'Um assistente inteligente responde o público no WhatsApp com o jeito e a identidade do negócio.',
        'As dúvidas mais comuns são resolvidas na hora.',
        'Os agendamentos são organizados automaticamente.',
        'A equipe é acionada somente quando o caso exige atendimento humano.',
      ],
      included: ['Assistente personalizado para o negócio', 'Organização de agendamentos', 'Avisos para a equipe', 'Acompanhamento e ajustes contínuos'],
      audience: 'Clínicas e negócios que recebem muitas mensagens e querem atender melhor sem sobrecarregar a equipe.',
    },
    sites: {
      name: 'Sites institucionais',
      highlight: 'Uma presença profissional online, pensada para transmitir confiança.',
      steps: [
        'O site é desenhado a partir da identidade do negócio.',
        'O conteúdo é organizado para apresentar bem os serviços e facilitar o contato.',
        'O visitante chega ao WhatsApp com um clique.',
        'O resultado é leve, moderno e adaptado a celular e computador.',
      ],
      included: ['Design personalizado', 'Versão otimizada para celular', 'Botão direto para WhatsApp', 'Publicação no ar e suporte'],
      audience: 'Empresas e profissionais que querem ser encontrados e passar credibilidade antes mesmo do primeiro contato.',
    },
    seo: {
      name: 'Presença digital / SEO local',
      highlight: 'Mais visibilidade para quem procura o serviço na região.',
      steps: [
        'Um trabalho estratégico posiciona o negócio nas buscas locais.',
        'A presença online passa a transmitir mais autoridade e confiança.',
        'O objetivo é ser encontrado por quem já está procurando o serviço na cidade.',
      ],
      included: ['Estratégia de visibilidade local', 'Presença online organizada e padronizada', 'Acompanhamento dos resultados'],
      audience: 'Negócios locais que querem aparecer quando o público pesquisa na internet.',
    },
    redes: {
      name: 'Gestão de redes sociais',
      highlight: 'Perfis ativos, com identidade e constância.',
      steps: [
        'A comunicação é planejada de acordo com o perfil do negócio e do público.',
        'O conteúdo segue uma linha visual própria e é publicado com regularidade.',
        'O perfil passa a refletir a qualidade do trabalho oferecido.',
      ],
      included: ['Planejamento de conteúdo', 'Criação e publicação das postagens', 'Identidade visual consistente', 'Acompanhamento do desempenho'],
      audience: 'Negócios que querem manter as redes sociais ativas e profissionais sem perder tempo com isso.',
    },
    trafego: {
      name: 'Tráfego pago',
      highlight: 'Anúncios pensados para atrair o público certo.',
      steps: [
        'As campanhas são planejadas com objetivo claro e público definido.',
        'Os anúncios levam as pessoas interessadas direto para o contato com o negócio.',
        'Os resultados são acompanhados e as campanhas são ajustadas ao longo do tempo.',
      ],
      included: ['Planejamento e gestão das campanhas', 'Definição de público e objetivos', 'Relatórios de desempenho', 'Otimização contínua'],
      audience: 'Negócios que querem acelerar a chegada de novos contatos de forma mensurável.',
      note: 'O investimento em anúncios é separado do valor da gestão.',
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
    if (serviceData[initialSlug]) {
      const matchingCard = document.querySelector(`.card-service[data-service="${initialSlug}"]`);
      openModal(initialSlug, matchingCard);
    }
  }
});
