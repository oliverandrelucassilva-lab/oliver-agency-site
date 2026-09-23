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

  // Carrossel de cases — nunca quebra linha; novos cards entram sempre ao lado,
  // com rotação automática e infinita, mais setas pra navegação manual.
  const casesTrack = document.getElementById('casesTrack');
  if (casesTrack) {
    const originalSlides = Array.from(casesTrack.children);
    const slideCount = originalSlides.length;

    originalSlides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('a, button').forEach((el) => el.setAttribute('tabindex', '-1'));
      casesTrack.appendChild(clone);
    });

    let index = 0;
    let step = 0;

    const measure = () => {
      const first = casesTrack.children[0];
      const gap = parseFloat(window.getComputedStyle(casesTrack).columnGap || '0');
      step = first.getBoundingClientRect().width + gap;
    };

    const goTo = (i, instant) => {
      index = i;
      casesTrack.style.transition = instant ? 'none' : '';
      casesTrack.style.transform = `translateX(-${index * step}px)`;
    };

    const next = () => {
      goTo(index + 1);
      if (index >= slideCount) {
        window.setTimeout(() => {
          goTo(0, true);
          casesTrack.offsetHeight;
          casesTrack.style.transition = '';
        }, 650);
      }
    };

    const prev = () => {
      if (index <= 0) {
        goTo(slideCount, true);
        casesTrack.offsetHeight;
        window.requestAnimationFrame(() => goTo(slideCount - 1));
      } else {
        goTo(index - 1);
      }
    };

    measure();
    goTo(0, true);
    window.addEventListener('resize', () => {
      measure();
      goTo(index, true);
    });

    const prevBtn = document.querySelector('.cases-arrow-prev');
    const nextBtn = document.querySelector('.cases-arrow-next');
    const viewport = document.querySelector('.cases-viewport');
    let autoplay = null;

    const stopAutoplay = () => {
      if (autoplay) window.clearInterval(autoplay);
    };
    const startAutoplay = () => {
      if (reduceMotion) return;
      stopAutoplay();
      autoplay = window.setInterval(next, 4200);
    };

    if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAutoplay(); });
    if (viewport) {
      viewport.addEventListener('mouseenter', stopAutoplay);
      viewport.addEventListener('mouseleave', startAutoplay);
    }

    startAutoplay();
  }
});
