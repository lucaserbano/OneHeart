// CtaFinal.jsx — OneHeart Website UI Kit · design.md §4.7

function OneHeartCtaFinal({ setScreen }) {
  const isMobile = useIsMobile();
  const s = {
    section: {
      position: 'relative',
      minHeight: isMobile ? 320 : 360,
      background: 'linear-gradient(60deg, #36498d 19%, #e6434e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '64px 20px' : '80px 60px',
      overflow: 'hidden',
    },
    pattern: {
      position: 'absolute', inset: 0,
      backgroundImage: "url('./assets/pattern-simbolo-azul.webp')",
      backgroundSize: '220px', opacity: 0.06, pointerEvents: 'none',
    },
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 820,
      textAlign: 'center',
    },
    title: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 'clamp(32px, 4.2vw, 48px)',
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1.15,
      letterSpacing: '-0.015em',
      marginBottom: 18,
    },
    sub: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 18,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.88)',
      lineHeight: 1.55,
      marginBottom: 36,
    },
    actions: {
      display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap',
    },
    btnPrimary: {
      background: '#fff',
      color: '#36498d',
      fontFamily: 'Galano Grotesque, sans-serif',
      fontWeight: 700,
      fontSize: 15,
      padding: '16px 32px',
      borderRadius: 9999,
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 8px 28px rgba(0,0,0,0.18)',
      transition: 'transform 0.15s ease',
    },
    btnSecondary: {
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      fontFamily: 'Galano Grotesque, sans-serif',
      fontWeight: 600,
      fontSize: 15,
      padding: '15px 28px',
      borderRadius: 9999,
      border: '1.5px solid rgba(255,255,255,0.5)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      backdropFilter: 'blur(8px)',
      transition: 'background 0.15s ease',
    },
  };

  const WhatsIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.82 11.82 0 0 0 5.65 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.14-3.39-8.43zM12.06 21.7h-.01a9.82 9.82 0 0 1-5-1.37l-.36-.21-3.8 1 1.02-3.7-.23-.38a9.8 9.8 0 0 1-1.51-5.2c0-5.43 4.42-9.85 9.86-9.85a9.84 9.84 0 0 1 9.85 9.87c-.01 5.43-4.43 9.84-9.82 9.84zm5.4-7.37c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.37.44-.55.15-.18.2-.31.3-.51.1-.2.05-.38-.02-.53-.08-.15-.66-1.58-.9-2.17-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.38-.27.3-1.03 1-1.03 2.44s1.05 2.83 1.2 3.02c.15.2 2.08 3.18 5.04 4.46.71.3 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
    </svg>
  );

  return (
    <section style={s.section}>
      <div style={s.pattern}></div>
      <div style={s.content}>
        <h2 style={s.title}>Pronto para cuidar do seu coração com quem entende?</h2>
        <p style={s.sub}>Agende uma avaliação com nossa equipe.</p>
        <div style={s.actions}>
          <button
            style={s.btnPrimary}
            onClick={() => setScreen && setScreen('contact')}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Agendar avaliação
          </button>
          <button
            style={s.btnSecondary}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
          >
            <WhatsIcon /> WhatsApp: (41) XXXXX-XXXX
          </button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { OneHeartCtaFinal });
