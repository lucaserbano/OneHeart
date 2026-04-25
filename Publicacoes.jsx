// Publicacoes.jsx — OneHeart Website UI Kit · design.md §4.6
// Títulos e trechos extraídos literalmente de scrappe.json
// (entradas /entenda-a-tavi/, /reparo-da-valva-mitral-bordo-a-bordo-teer/, /reserva-de-fluxo-ffr).
// Autoria/data são placeholders — a confirmar com cliente.

const publicacoes = [
  {
    tag: 'TAVI',
    tagColor: '#36498d',
    title: 'TAVI: o que é, para quem serve e como é feita a troca valvar sem cirurgia?',
    excerpt: 'Solução minimamente invasiva para estenose aórtica — uma alternativa segura e eficaz à cirurgia de peito aberto.',
    author: 'Equipe OneHeart',
    date: 'XXXX', // TODO: confirmar data de publicação
    href: '#publicacoes-tavi',
  },
  {
    tag: 'MitraClip / PASCAL',
    tagColor: '#9b374f',
    title: 'MitraClip e PASCAL (TEER): o que são? Para quem servem?',
    excerpt: 'Reparo transcateter bordo-a-bordo: procedimento minimamente invasivo para tratar a insuficiência mitral sintomática.',
    author: 'Equipe OneHeart',
    date: 'XXXX',
    href: '#publicacoes-teer',
  },
  {
    tag: 'FFR',
    tagColor: '#e6434e',
    title: 'Reserva de Fluxo Fracionada (FFR): o que é?',
    excerpt: 'Como a medida funcional de uma lesão coronariana ajuda a decidir com precisão quando a angioplastia é necessária.',
    author: 'Equipe OneHeart',
    date: 'XXXX',
    href: '#publicacoes-ffr',
  },
];

function OneHeartPublicacoes() {
  const isMobile = useIsMobile();
  const s = {
    section: {
      background: '#ffffff',
      padding: isMobile ? '72px 20px' : '120px 60px',
      borderTop: '1px solid #f0f1f5',
    },
    header: {
      maxWidth: 1200,
      margin: isMobile ? '0 auto 32px' : '0 auto 56px',
      display: 'flex',
      alignItems: isMobile ? 'flex-start' : 'flex-end',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      gap: isMobile ? 16 : 32,
      flexWrap: 'wrap',
    },
    headLeft: { maxWidth: 640 },
    eyebrow: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: '#e6434e', marginBottom: 16,
    },
    title: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, color: '#36498d',
      lineHeight: 1.15, letterSpacing: '-0.015em', marginBottom: 12,
    },
    sub: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 18, fontWeight: 300, color: '#7f7f7f', lineHeight: 1.55,
    },
    cta: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 15, fontWeight: 600, color: '#36498d',
      display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer',
      borderBottom: '2px solid transparent', paddingBottom: 2, transition: 'border-color 0.18s',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? 20 : 28,
      maxWidth: 1200,
      margin: '0 auto',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      border: '1px solid #e5e5e5',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 4px 16px rgba(54,73,141,0.05)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
      cursor: 'pointer',
    },
    thumb: (c) => ({
      aspectRatio: '16 / 9',
      background: `linear-gradient(135deg, ${c} 0%, #36498d 100%)`,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    thumbPattern: {
      position: 'absolute', inset: 0,
      backgroundImage: "url('./assets/pattern-simbolo-azul.webp')",
      backgroundSize: '140px', opacity: 0.09, pointerEvents: 'none',
    },
    thumbSymbol: { width: 84, height: 84, opacity: 0.95, filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.25))' },
    body: { padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', flex: 1 },
    chip: (c) => ({
      display: 'inline-flex',
      alignSelf: 'flex-start',
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: c, background: `${c}15`,
      padding: '5px 12px', borderRadius: 9999, marginBottom: 14,
    }),
    cardTitle: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 18, fontWeight: 600, color: '#36498d', lineHeight: 1.3,
      letterSpacing: '-0.005em', marginBottom: 10,
    },
    meta: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 12, fontWeight: 500, color: '#7f7f7f', marginBottom: 12,
      letterSpacing: '0.02em',
    },
    excerpt: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 14, fontWeight: 300, color: '#4a4a4a', lineHeight: 1.6,
      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
      marginBottom: 16,
    },
    readMore: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 13, fontWeight: 600, color: '#36498d',
      display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 'auto',
    },
  };

  return (
    <section style={s.section}>
      <div style={s.header}>
        <div style={s.headLeft}>
          <div style={s.eyebrow}>Publicações</div>
          <h2 style={s.title}>Publicações recentes</h2>
          <p style={s.sub}>Conteúdo técnico-científico da nossa equipe.</p>
        </div>
        <span
          style={s.cta}
          onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = '#36498d')}
          onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
        >
          Ver todas as publicações →
        </span>
      </div>
      <div style={s.grid}>
        {publicacoes.map(p => (
          <article
            key={p.title}
            style={s.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(54,73,141,0.12)';
              e.currentTarget.style.borderColor = '#d0d3dc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(54,73,141,0.05)';
              e.currentTarget.style.borderColor = '#e5e5e5';
            }}
          >
            <div style={s.thumb(p.tagColor)}>
              <div style={s.thumbPattern}></div>
              <img src="./assets/simbolo-branco.webp" alt="" style={s.thumbSymbol} />
            </div>
            <div style={s.body}>
              <span style={s.chip(p.tagColor)}>{p.tag}</span>
              <h3 style={s.cardTitle}>{p.title}</h3>
              <div style={s.meta}>{p.author} · {p.date}</div>
              <p style={s.excerpt}>{p.excerpt}</p>
              <span style={s.readMore}>Ler publicação →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { OneHeartPublicacoes });
