(function () {
  'use strict';

  /* ─── Imagens centralizadas (images.config.js) ─── */
  function resolvePath(path) {
    if (!path || typeof SITE_IMAGES === 'undefined') return null;
    const parts = path.split('.');
    let cur = SITE_IMAGES;
    for (let i = 0; i < parts.length; i++) {
      if (cur == null) return null;
      const key = parts[i];
      if (/^\d+$/.test(key)) cur = cur[parseInt(key, 10)];
      else cur = cur[key];
    }
    if (cur && typeof cur === 'object' && cur.src) return cur;
    if (typeof cur === 'string') return { src: cur, alt: '' };
    return null;
  }

  function applyImages() {
    document.querySelectorAll('[data-img]').forEach(function (el) {
      const data = resolvePath(el.getAttribute('data-img'));
      if (!data || !data.src) return;
      el.src = data.src;
      if (data.alt) el.alt = data.alt;
    });
  }

  function applyLinks() {
    if (typeof SITE_LINKS === 'undefined') return;
    const ig = SITE_LINKS.instagram || '#';
    const handle = SITE_LINKS.instagramHandle || '@instagram';
    const wa = SITE_LINKS.whatsapp || '';

    document.querySelectorAll('[data-instagram-link]').forEach(function (el) {
      el.href = ig;
    });
    document.querySelectorAll('[data-instagram-handle]').forEach(function (el) {
      el.textContent = handle;
    });
    document.querySelectorAll('[data-whatsapp-link]').forEach(function (el) {
      const msg = el.getAttribute('data-whatsapp-msg') || '';
      el.href = 'https://wa.me/' + wa + (msg ? '?text=' + encodeURIComponent(msg) : '');
    });
  }

  function buildMarquee() {
    const labels = ['Social Media', 'Tráfego Pago', 'Branding', 'Landing Pages', 'Marketing 360°'];
    const imgs = SITE_IMAGES.marquee || [];
    const inners = [
      document.getElementById('marqueeInner1'),
      document.getElementById('marqueeInner2'),
    ];
    inners.forEach(function (inner) {
      if (!inner) return;
      inner.innerHTML = '';
      imgs.forEach(function (src, i) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        inner.appendChild(img);
        const span = document.createElement('span');
        span.textContent = labels[i] || '';
        inner.appendChild(span);
      });
    });
  }

  applyImages();
  applyLinks();
  buildMarquee();

  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.getElementById('navLinks');

  function setNavOpen(open) {
    navMenu.classList.toggle('open', open);
    navOverlay.classList.toggle('is-visible', open);
    navOverlay.setAttribute('aria-hidden', !open);
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', open);
    navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  function closeNav() {
    setNavOpen(false);
  }

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener('click', function () {
    setNavOpen(!navMenu.classList.contains('open'));
  });

  navOverlay.addEventListener('click', closeNav);

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );
  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  function animateCounter(el, target, duration) {
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        if (!isNaN(target)) animateCounter(el, target, 1800);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll('[data-count]').forEach(function (el) {
    counterObserver.observe(el);
  });

  const heroReveals = document.querySelectorAll('.hero-top .reveal, .hero-stats-wrap.reveal');
  heroReveals.forEach(function (el, i) {
    el.style.transitionDelay = i * 0.1 + 's';
    setTimeout(function () {
      el.classList.add('visible');
    }, 150 + i * 100);
  });

  const galleryCards = document.querySelectorAll('.gallery-card[data-speed]:not([aria-hidden="true"])');
  if (galleryCards.length && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    let ticking = false;
    window.addEventListener(
      'scroll',
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          galleryCards.forEach(function (card) {
            const speed = parseFloat(card.getAttribute('data-speed')) || 0;
            const rect = card.getBoundingClientRect();
            const offset = (rect.top - window.innerHeight * 0.5) * speed;
            const img = card.querySelector('img');
            if (img) img.style.transform = 'translateY(' + offset + 'px) scale(1.05)';
          });
          ticking = false;
        });
      },
      { passive: true }
    );
  }
})();
