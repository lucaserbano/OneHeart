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

  /* ── Filtro de publicações por categoria ── */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var postCards = document.querySelectorAll('.blog-posts .card-pub');
  if (filterBtns.length && postCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.getAttribute('data-filter');
        filterBtns.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle('active', on);
          b.setAttribute('aria-pressed', String(on));
        });
        postCards.forEach(function (card) {
          var show = cat === 'all' || card.getAttribute('data-category') === cat;
          card.classList.toggle('is-hidden', !show);
        });
      });
    });
  }

  /* ── Sumário do artigo (scroll-spy) ── */
  var tocLinks = document.querySelectorAll('.article-toc a');
  var artSections = document.querySelectorAll('.article-body section[id]');
  if (tocLinks.length && artSections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          tocLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-15% 0px -75% 0px', threshold: 0 });
    artSections.forEach(function (s) { spy.observe(s); });
  }

  /* ── Compartilhar artigo ── */
  var share = document.querySelector('.article-share');
  if (share) {
    var url = window.location.href;
    var title = document.title.replace(/\s*[—·].*$/, '').trim() || document.title;
    var wa = share.querySelector('[data-share="whatsapp"]');
    var mail = share.querySelector('[data-share="email"]');
    var copy = share.querySelector('[data-share="copy"]');
    if (wa) wa.href = 'https://wa.me/?text=' + encodeURIComponent(title + ' — ' + url);
    if (mail) mail.href = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(url);
    if (copy) copy.addEventListener('click', function () {
      var label = copy.querySelector('.share-label');
      function flash(msg) {
        if (!label) return;
        var old = label.getAttribute('data-label') || label.textContent;
        label.setAttribute('data-label', old);
        label.textContent = msg;
        setTimeout(function () { label.textContent = old; }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () { flash('Link copiado!'); }, function () { flash('Copie da barra'); });
      } else {
        flash('Copie da barra');
      }
    });
  }

  /* ── Ano no footer ── */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
