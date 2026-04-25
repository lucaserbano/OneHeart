// Cuidados.jsx — OneHeart Website UI Kit · design.md §4.4
// 6 procedimentos com descrições adaptadas dos artigos em scrappe.json.
// Nenhum texto médico foi inventado — apenas condensado para formato de card.

const cuidados = [
  {
    title: 'TAVI',
    full: 'Implante Transcateter de Válvula Aórtica',
    desc: 'Troca minimamente invasiva da válvula aórtica por cateter, alternativa segura à cirurgia de peito aberto em casos de estenose aórtica.',
    color: '#36498d',
  },
  {
    title: 'MitraClip / PASCAL',
    full: 'Reparo bordo-a-bordo da valva mitral (TEER)',
    desc: 'Correção da insuficiência mitral por cateter, sem abertura do tórax, para pacientes com risco cirúrgico elevado.',
    color: '#9b374f',
  },
  {
    title: 'FFR',
    full: 'Reserva de Fluxo Fracionada',
    desc: 'Avaliação funcional de obstruções coronarianas para decidir com precisão quando a angioplastia é de fato necessária.',
    color: '#e6434e',
  },
  {
    title: 'FOP',
    full: 'Fechamento do Forame Oval Patente',
    desc: 'Oclusão percutânea do forame oval patente em casos com indicação clínica bem estabelecida, como AVC criptogênico.',
    color: '#471940',
  },
  {
    title: 'Cateterismo / Coronariografia',
    full: 'Diagnóstico das artérias coronárias',
    desc: 'Procedimento minimamente invasivo para mapear o coração e as artérias coronárias — diagnóstico e, quando indicado, tratamento no mesmo ato.',
    color: '#36498d',
  },
  {
    title: 'Angioplastia com stent',
    full: 'Desobstrução coronariana',
    desc: 'Desobstrução de artérias coronárias com balão e implante de stent, restaurando o fluxo sanguíneo para o músculo cardíaco.',
    color: '#9b374f',
  },
];

function OneHeartCuidados() {
  const isMobile = useIsMobile();
  const s = {
    section: {
      background: '#ffffff',
      padding: isMobile ? '72px 20px' : '120px 60px',
      position: 'relative',
    },
    header: { textAlign: 'center', marginBottom: isMobile ? 40 : 64, maxWidth: 720, margin: isMobile ? '0 auto 40px' : '0 auto 64px' },
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
      marginBottom: 16,
    },
    sub: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 18,
      fontWeight: 300,
      color: '#7f7f7f',
      lineHeight: 1.55,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? 16 : 24,
      maxWidth: 1200,
      margin: '0 auto',
    },
    card: {
      background: '#fff',
      border: '1px solid #e5e5e5',
      borderRadius: 16,
      padding: isMobile ? 24 : 32,
      boxShadow: '0 6px 24px rgba(54,73,141,0.06)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    iconWrap: (c) => ({
      width: 56,
      height: 56,
      borderRadius: 14,
      background: `linear-gradient(135deg, ${c}, #36498d)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 22,
      boxShadow: `0 8px 24px ${c}33`,
    }),
    cardSymbol: { width: 30, height: 30, filter: 'brightness(0) invert(1)' },
    cardTitle: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 22,
      fontWeight: 700,
      color: '#36498d',
      lineHeight: 1.2,
      marginBottom: 4,
      letterSpacing: '-0.01em',
    },
    cardFull: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 13,
      fontWeight: 500,
      color: '#7f7f7f',
      letterSpacing: '0.02em',
      marginBottom: 14,
      textTransform: 'uppercase',
    },
    cardDesc: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 15,
      fontWeight: 300,
      color: '#4a4a4a',
      lineHeight: 1.6,
      marginBottom: 20,
    },
    cardLink: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 14,
      fontWeight: 600,
      color: '#36498d',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer',
    },
    footer: { textAlign: 'center', marginTop: 56 },
    btnSecondary: {
      background: 'transparent',
      color: '#36498d',
      fontFamily: 'Galano Grotesque, sans-serif',
      fontWeight: 700,
      fontSize: 15,
      padding: '14px 30px',
      borderRadius: 9999,
      border: '2px solid #36498d',
      cursor: 'pointer',
      transition: 'background 0.15s ease, color 0.15s ease',
    },
  };

  return (
    <section style={s.section}>
      <div style={s.header}>
        <div style={s.eyebrow}>Cuidados</div>
        <h2 style={s.title}>Cuidados que oferecemos</h2>
        <p style={s.sub}>Procedimentos minimamente invasivos de alta complexidade, com indicação criteriosa e acompanhamento próximo.</p>
      </div>
      <div style={s.grid}>
        {cuidados.map(c => (
          <article
            key={c.title}
            style={s.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(54,73,141,0.12)';
              e.currentTarget.style.borderColor = '#d0d3dc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(54,73,141,0.06)';
              e.currentTarget.style.borderColor = '#e5e5e5';
            }}
          >
            <div style={s.iconWrap(c.color)}>
              <img src="./assets/simbolo-branco.webp" alt="" style={s.cardSymbol} />
            </div>
            <h3 style={s.cardTitle}>{c.title}</h3>
            <div style={s.cardFull}>{c.full}</div>
            <p style={s.cardDesc}>{c.desc}</p>
            <span style={s.cardLink}>Saiba mais →</span>
          </article>
        ))}
      </div>
      <div style={s.footer}>
        <button
          style={s.btnSecondary}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#36498d'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#36498d'; }}
        >
          Ver todos os cuidados
        </button>
      </div>
    </section>
  );
}

Object.assign(window, { OneHeartCuidados });
