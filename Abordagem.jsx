// Abordagem.jsx — OneHeart Website UI Kit · design.md §4.3
// Texto extraído de scrappe.json — página /cuidado-avancado/ (HeartTeam)

function OneHeartAbordagem({ setScreen }) {
  const isMobile = useIsMobile();
  const s = {
    section: {
      background: '#ecf0f9', // azul 10 derivado (design.md §2.1)
      padding: isMobile ? '64px 20px' : '96px 60px',
    },
    inner: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: isMobile ? 40 : 64,
      alignItems: 'center',
    },
    eyebrow: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#e6434e',
      marginBottom: 16,
    },
    title: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 'clamp(32px, 4vw, 44px)',
      fontWeight: 700,
      color: '#36498d',
      lineHeight: 1.15,
      letterSpacing: '-0.015em',
      marginBottom: 24,
    },
    body: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 17,
      fontWeight: 300,
      color: '#4a4a4a',
      lineHeight: 1.65,
      marginBottom: 16,
      maxWidth: 520,
    },
    cta: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 15,
      fontWeight: 600,
      color: '#36498d',
      textDecoration: 'none',
      cursor: 'pointer',
      borderBottom: '2px solid transparent',
      paddingBottom: 2,
      transition: 'border-color 0.18s',
    },
    visual: {
      position: 'relative',
      aspectRatio: '4 / 3',
      borderRadius: 20,
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #36498d 0%, #471940 100%)',
      boxShadow: '0 24px 64px rgba(54,73,141,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    visualPattern: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('./assets/pattern-simbolo-azul.webp')",
      backgroundSize: '200px',
      opacity: 0.08,
    },
    visualSymbol: {
      width: '56%',
      maxWidth: 320,
      height: 'auto',
      position: 'relative',
      zIndex: 2,
      filter: 'drop-shadow(0 16px 48px rgba(0,0,0,0.35))',
    },
    badge: {
      position: 'absolute',
      bottom: 24,
      left: 24,
      padding: '10px 18px',
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.14)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.22)',
      color: '#fff',
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      zIndex: 2,
    },
  };

  return (
    <section style={s.section}>
      <div style={s.inner}>
        <div>
          <div style={s.eyebrow}>Nossa abordagem</div>
          <h2 style={s.title}>Diagnóstico preciso. Intervenção certa.</h2>
          <p style={s.body}>
            As doenças cardiovasculares se apresentam de maneira única e por vezes complexa. A tomada de decisão inicial é fundamental para oferecermos a melhor estratégia de tratamento a longo prazo.
          </p>
          <p style={s.body}>
            Em situações específicas, é essencial a união de especialistas das diferentes áreas da cardiologia — clínicos, ecocardiograma, imagem cardiovascular, intervencionistas e cirurgiões. Esse conceito de <strong style={{ fontWeight: 600, color: '#36498d' }}>HeartTeam</strong> está incorporado no dia a dia da equipe OneHeart.
          </p>
          <span
            style={s.cta}
            onClick={() => setScreen && setScreen('home')}
            onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = '#36498d')}
            onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
          >
            Conheça nossos cuidados →
          </span>
        </div>
        <div style={s.visual}>
          <div style={s.visualPattern}></div>
          <img src="./assets/simbolo-branco.webp" alt="" style={s.visualSymbol} />
          <span style={s.badge}>HeartTeam · Valve Care Center</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { OneHeartAbordagem });
