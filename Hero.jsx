// Hero.jsx — OneHeart Website UI Kit · design.md §4.1

function OneHeartHero({ setScreen }) {
  const isMobile = useIsMobile();
  const s = {
    hero: {
      background: 'linear-gradient(60deg, #36498d 19%, #e6434e 100%)',
      minHeight: isMobile ? '640px' : 'max(600px, 85vh)',
      maxHeight: isMobile ? 'none' : '920px',
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '120px 24px 72px' : '140px 60px 96px',
      position: 'relative',
      overflow: 'hidden',
    },
    patternBg: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('./assets/pattern-simbolo-azul.webp')",
      backgroundSize: '220px',
      opacity: 0.06,
      pointerEvents: 'none',
    },
    inner: {
      maxWidth: 1200,
      margin: '0 auto',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.2fr) minmax(0, 1fr)',
      gap: isMobile ? 32 : 48,
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    content: { maxWidth: 640 },
    eyebrow: {
      display: 'inline-block',
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.85)',
      marginBottom: 28,
      padding: '8px 16px',
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid rgba(255,255,255,0.22)',
      borderRadius: 9999,
      backdropFilter: 'blur(8px)',
    },
    title: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 'clamp(42px, 6.2vw, 72px)',
      fontWeight: 800,
      color: '#fff',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      marginBottom: 24,
    },
    sub: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 20,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.9)',
      lineHeight: 1.55,
      marginBottom: 40,
      maxWidth: 520,
    },
    actions: { display: 'flex', gap: 14, flexWrap: 'wrap' },
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
      boxShadow: '0 8px 28px rgba(29,41,94,0.25)',
      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    },
    btnOutline: {
      background: 'transparent',
      color: '#fff',
      fontFamily: 'Galano Grotesque, sans-serif',
      fontWeight: 600,
      fontSize: 15,
      padding: '15px 30px',
      borderRadius: 9999,
      border: '1.5px solid rgba(255,255,255,0.6)',
      cursor: 'pointer',
      transition: 'background 0.15s ease, border-color 0.15s ease',
    },
    visual: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    glass: {
      width: isMobile ? 'min(80%, 280px)' : 'min(100%, 440px)',
      aspectRatio: '1 / 1',
      borderRadius: 24,
      background: 'rgba(255,255,255,0.08)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.22)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
    },
    symbol: {
      width: '64%',
      height: 'auto',
      filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.25))',
    },
    glassGlow: {
      position: 'absolute',
      inset: -1,
      borderRadius: 24,
      background: 'linear-gradient(135deg, rgba(255,255,255,0.25), transparent 50%)',
      pointerEvents: 'none',
    },
  };

  return (
    <section style={s.hero}>
      <div style={s.patternBg}></div>
      <div style={s.inner}>
        <div style={s.content}>
          <span style={s.eyebrow}>Cardiologia intervencionista · Curitiba – PR</span>
          <h1 style={s.title}>Precisão em hemodinâmica,<br />cuidado em cada batimento.</h1>
          <p style={s.sub}>Avaliação diagnóstica rigorosa e intervenções estruturais e coronarianas de alta complexidade, com equipe experiente.</p>
          <div style={s.actions}>
            <button style={s.btnPrimary} onClick={() => setScreen('contact')}>Agendar avaliação</button>
            <button style={s.btnOutline} onClick={() => setScreen('doctors')}>Conhecer a equipe</button>
          </div>
        </div>
        <div style={s.visual}>
          <div style={s.glass}>
            <img src="./assets/simbolo-colorido.webp" alt="" style={s.symbol} />
            <div style={s.glassGlow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { OneHeartHero });
