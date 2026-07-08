(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Header: fundo ao rolar ── */
  var header = document.getElementById('header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Drawer mobile ── */
  var drawer = document.getElementById('drawer');
  var toggle = document.getElementById('navToggle');

  function setDrawer(open) {
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      var first = drawer.querySelector('nav a');
      if (first) first.focus();
    } else {
      toggle.focus();
    }
  }
  toggle.addEventListener('click', function () {
    setDrawer(!drawer.classList.contains('open'));
  });
  drawer.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]') || e.target.closest('nav a')) setDrawer(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) setDrawer(false);
  });

  /* ── Reveal on scroll ──
     The hidden initial state is gated on html.js-reveal (set in <head>), so
     content is always visible without JS. If anything here fails, force every
     element to its revealed state rather than leave a section blank. */
  var revealEls = document.querySelectorAll('.reveal');
  function revealAll() {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }
  try {
    if (!reduceMotion && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealAll();
    }
  } catch (e) {
    revealAll();
  }

  /* ── Ano no footer ── */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
