// Navbar.jsx — OneHeart Website UI Kit · design.md §3 (6 links, CTA "Agendar avaliação")
const { useState, useEffect } = React;

function OneHeartNavbar({ screen, setScreen }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile(900); // design.md: nav colapsa em tablets/mobile

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // design.md §3: transparente sobre o hero; branco com shadow-sm ao scroll
  const dark = !scrolled && !menuOpen;

  const s = {
    nav: {
      background: dark ? 'transparent' : 'rgba(255,255,255,0.96)',
      backdropFilter: dark ? 'none' : 'saturate(180%) blur(12px)',
      padding: isMobile ? '0 20px' : '0 40px',
      display: 'flex',
      alignItems: 'center',
      height: 72,
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      boxShadow: dark ? 'none' : '0 2px 8px rgba(54,73,141,0.06)',
      transition: 'background 0.25s ease, box-shadow 0.25s ease',
    },
    logo: { height: 34, objectFit: 'contain', cursor: 'pointer' },
    links: { display: 'flex', gap: 24, marginLeft: 36 },
    link: (active) => ({
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 14,
      fontWeight: 500,
      color: dark ? (active ? '#fff' : 'rgba(255,255,255,0.78)') : (active ? '#36498d' : '#4a4a4a'),
      textDecoration: 'none',
      cursor: 'pointer',
      letterSpacing: '0.01em',
      transition: 'color 0.18s',
      padding: '6px 0',
      borderBottom: active ? `2px solid ${dark ? '#e6434e' : '#36498d'}` : '2px solid transparent',
    }),
    spacer: { flex: 1 },
    cta: {
      background: 'linear-gradient(60deg, #36498d 19%, #e6434e 100%)',
      color: '#fff',
      fontFamily: 'Galano Grotesque, sans-serif',
      fontWeight: 700,
      fontSize: 14,
      padding: '12px 24px',
      borderRadius: 9999,
      border: 'none',
      cursor: 'pointer',
      boxShadow: dark ? '0 4px 18px rgba(230,67,78,0.35)' : '0 4px 14px rgba(54,73,141,0.18)',
      whiteSpace: 'nowrap',
      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    },
    burger: {
      width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'transparent', border: 'none', cursor: 'pointer', marginLeft: 8,
      color: dark ? '#fff' : '#36498d',
    },
    drawer: {
      position: 'fixed',
      top: 72, left: 0, right: 0,
      bottom: 0,
      background: '#ffffff',
      zIndex: 99,
      padding: '32px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)',
      opacity: menuOpen ? 1 : 0,
      pointerEvents: menuOpen ? 'auto' : 'none',
      transition: 'transform 0.22s ease, opacity 0.22s ease',
      overflowY: 'auto',
    },
    drawerLink: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 22,
      fontWeight: 600,
      color: '#36498d',
      padding: '16px 4px',
      borderBottom: '1px solid #ecf0f9',
      cursor: 'pointer',
    },
    drawerCta: {
      marginTop: 24,
      background: 'linear-gradient(60deg, #36498d 19%, #e6434e 100%)',
      color: '#fff',
      fontFamily: 'Galano Grotesque, sans-serif',
      fontWeight: 700,
      fontSize: 16,
      padding: '16px 28px',
      borderRadius: 9999,
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 8px 24px rgba(54,73,141,0.22)',
    },
  };

  // design.md §2.4 — 6 links (Início, Sobre, Cuidado Avançado, Publicações, Cursos, Contato)
  // TODO: quando as subpáginas existirem, substituir por <a href="/..."> reais
  const links = [
    { label: 'Início', key: 'home' },
    { label: 'Sobre', key: 'doctors' },
    { label: 'Cuidado Avançado', key: 'home' },
    { label: 'Publicações', key: 'home' },
    { label: 'Cursos', key: 'home' },
    { label: 'Contato', key: 'contact' },
  ];

  const BurgerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {menuOpen ? (<><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>) : (<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>)}
    </svg>
  );

  const handleNav = (key) => { setScreen(key); setMenuOpen(false); };

  return (
    <>
      <nav style={s.nav}>
        <img
          src={dark ? './assets/logo-branco.webp' : './assets/logo-principal-degrade.webp'}
          alt="OneHeart"
          style={s.logo}
          onClick={() => handleNav('home')}
        />
        {!isMobile && (
          <div style={s.links}>
            {links.map(l => (
              <span
                key={l.label}
                style={s.link(
                  (screen === 'home' && l.label === 'Início') ||
                  (screen === 'doctors' && l.label === 'Sobre') ||
                  (screen === 'contact' && l.label === 'Contato')
                )}
                onClick={() => handleNav(l.key)}
              >
                {l.label}
              </span>
            ))}
          </div>
        )}
        <div style={s.spacer}></div>
        {!isMobile && (
          <button style={s.cta} onClick={() => handleNav('contact')}>Agendar avaliação</button>
        )}
        {isMobile && (
          <button style={s.burger} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <BurgerIcon />
          </button>
        )}
      </nav>
      {isMobile && (
        <div style={s.drawer} aria-hidden={!menuOpen}>
          {links.map(l => (
            <span key={l.label} style={s.drawerLink} onClick={() => handleNav(l.key)}>{l.label}</span>
          ))}
          <button style={s.drawerCta} onClick={() => handleNav('contact')}>Agendar avaliação</button>
        </div>
      )}
    </>
  );
}

Object.assign(window, { OneHeartNavbar });
