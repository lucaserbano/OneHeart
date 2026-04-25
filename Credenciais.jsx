// Credenciais.jsx — OneHeart Website UI Kit · design.md §4.2

function OneHeartCredenciais() {
  const isMobile = useIsMobile();
  const s = {
    section: {
      background: '#ffffff',
      padding: isMobile ? '24px 20px' : '32px 60px',
      borderBottom: '1px solid #e5e5e5',
    },
    inner: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? 4 : 0,
    },
    item: (i) => ({
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: isMobile ? '14px 12px' : '16px 24px',
      // em desktop: divisor à esquerda exceto no primeiro; em mobile: divisor à esquerda nas col2 (i impar) e topo nas linha2 (i>=2)
      borderLeft: isMobile ? (i % 2 === 1 ? '1px solid #e5e5e5' : 'none') : (i === 0 ? 'none' : '1px solid #e5e5e5'),
      borderTop: isMobile && i >= 2 ? '1px solid #e5e5e5' : 'none',
    }),
    icon: {
      width: 44,
      height: 44,
      flexShrink: 0,
      borderRadius: '50%',
      background: 'rgba(54,73,141,0.08)',
      color: '#36498d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    value: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 18,
      fontWeight: 700,
      color: '#36498d',
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
    },
    label: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 13,
      fontWeight: 400,
      color: '#7f7f7f',
      lineHeight: 1.4,
      marginTop: 2,
    },
  };

  // design.md §4.2 — ícones stroke azul
  const Icon = ({ d }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );

  const items = [
    // TODO: confirmar número de anos com o cliente antes de publicar
    { value: '+ XX anos', label: 'Experiência combinada',
      svg: <Icon d="M12 8v4l2.5 2.5 M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" /> },
    { value: 'Curitiba – PR', label: 'Atendimento de referência',
      svg: <Icon d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /> },
    { value: 'Hemodinâmica avançada', label: 'TAVI · MitraClip · PASCAL · FFR · FOP',
      svg: <Icon d="M3 12h3l2-6 4 12 2-6 3 0 M19 12h2" /> },
    { value: 'Avaliação humanizada', label: 'Escuta antes da técnica',
      svg: <Icon d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /> },
  ];

  return (
    <section style={s.section}>
      <div style={s.inner}>
        {items.map((it, i) => (
          <div key={it.label} style={s.item(i)}>
            <div style={s.icon}>{it.svg}</div>
            <div>
              <div style={s.value}>{it.value}</div>
              <div style={s.label}>{it.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { OneHeartCredenciais });
