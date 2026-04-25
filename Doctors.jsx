// Doctors.jsx — OneHeart Website UI Kit · design.md §4.5
// Ordem alfabética (Deborah, Pedro, Wilton). Fotos reais em aspect-ratio 4:5.
// CRM é placeholder "CRM-PR XXXXX" — confirmar com cliente antes de publicar.

const doctors = [
  { name: 'Dra. Deborah Nercolini', title: 'Cardiologista intervencionista', crm: 'CRM-PR XXXXX', photo: './assets/doctors/deborah.webp', anchor: 'deborah' },
  { name: 'Dr. Pedro Nicz',        title: 'Cardiologista intervencionista', crm: 'CRM-PR XXXXX', photo: './assets/doctors/pedro.webp',   anchor: 'pedro' },
  { name: 'Dr. Wilton Gomes',      title: 'Hemodinamicista',               crm: 'CRM-PR XXXXX', photo: './assets/doctors/wilton.webp',  anchor: 'wilton' },
];

function OneHeartDoctors({ setScreen }) {
  const isMobile = useIsMobile();
  const s = {
    section: {
      position: 'relative',
      background: '#f8f9fc',
      padding: isMobile ? '72px 20px' : '120px 60px',
      overflow: 'hidden',
    },
    pattern: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('./assets/pattern-branco.webp')",
      backgroundSize: '320px',
      opacity: 0.35,
      pointerEvents: 'none',
    },
    header: { textAlign: 'center', marginBottom: 56, position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto 56px' },
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
      gap: isMobile ? 20 : 32,
      maxWidth: 1100,
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    card: {
      background: '#fff',
      borderRadius: 20,
      overflow: 'hidden',
      boxShadow: '0 6px 24px rgba(54,73,141,0.08)',
      transition: 'transform 0.22s ease, box-shadow 0.22s ease',
      cursor: 'pointer',
      maxWidth: isMobile ? 420 : 'none',
      margin: isMobile ? '0 auto' : undefined,
      width: isMobile ? '100%' : undefined,
    },
    photoWrap: {
      width: '100%',
      aspectRatio: '4 / 5',
      overflow: 'hidden',
      background: '#ecf0f9',
      position: 'relative',
    },
    photo: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top',
      display: 'block',
      filter: 'saturate(0.95)',
      transition: 'transform 0.4s ease',
    },
    photoOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(54,73,141,0) 55%, rgba(54,73,141,0.08) 100%)',
      pointerEvents: 'none',
    },
    body: { padding: '28px 28px 32px' },
    name: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 20,
      fontWeight: 700,
      color: '#36498d',
      letterSpacing: '-0.01em',
      marginBottom: 4,
    },
    doctorTitle: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 14,
      fontWeight: 500,
      color: '#7f7f7f',
      marginBottom: 12,
    },
    crm: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 12,
      fontWeight: 600,
      color: '#36498d',
      letterSpacing: '0.06em',
      marginBottom: 18,
    },
    link: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 14,
      fontWeight: 600,
      color: '#36498d',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
    },
  };

  return (
    <section style={s.section}>
      <div style={s.pattern}></div>
      <div style={s.header}>
        <div style={s.eyebrow}>Nossa equipe</div>
        <h2 style={s.title}>Conheça nossos hemodinamicistas</h2>
        <p style={s.sub}>Três especialistas dedicados à cardiologia intervencionista em Curitiba.</p>
      </div>
      <div style={s.grid}>
        {doctors.map(d => (
          <article
            key={d.name}
            style={s.card}
            onClick={() => setScreen && setScreen('doctors')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 18px 44px rgba(54,73,141,0.14)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(54,73,141,0.08)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
          >
            <div style={s.photoWrap}>
              <img src={d.photo} alt={`Retrato de ${d.name}`} style={s.photo} />
              <div style={s.photoOverlay}></div>
            </div>
            <div style={s.body}>
              <div style={s.name}>{d.name}</div>
              <div style={s.doctorTitle}>{d.title}</div>
              <div style={s.crm}>{d.crm}</div>
              <span style={s.link}>Ver perfil →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// Página Sobre (stub reutilizando layout — detalhamento completo vem na page Sobre).
function OneHeartDoctorsPage() {
  const s = {
    page: { background: '#f8f9fc', flex: 1 },
    hero: {
      background: 'linear-gradient(60deg, #36498d 19%, #e6434e 100%)',
      padding: '128px 60px 72px',
      position: 'relative',
      overflow: 'hidden',
    },
    heroInner: { maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 },
    heroWm: { position: 'absolute', right: -40, bottom: -40, width: 280, height: 280, opacity: 0.08 },
    heroTag: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 13, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.85)', marginBottom: 14,
    },
    heroTitle: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 48, fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em',
    },
    body: { padding: '72px 60px', maxWidth: 1100, margin: '0 auto' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 },
    card: {
      background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 6px 24px rgba(54,73,141,0.08)',
    },
    photoWrap: { width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', background: '#ecf0f9' },
    photo: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' },
    cardBody: { padding: '28px' },
    name: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 22, fontWeight: 700, color: '#36498d', marginBottom: 4,
    },
    doctorTitle: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 14, fontWeight: 500, color: '#7f7f7f', marginBottom: 10,
    },
    crm: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 12, fontWeight: 600, color: '#36498d', letterSpacing: '0.06em',
    },
    note: {
      marginTop: 56,
      padding: '24px 28px',
      background: '#fff',
      border: '1px dashed #d0d3dc',
      borderRadius: 16,
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 14,
      color: '#7f7f7f',
      lineHeight: 1.6,
    },
  };

  return (
    <div style={s.page}>
      <div style={s.hero}>
        <img src="./assets/simbolo-branco.webp" alt="" style={s.heroWm} />
        <div style={s.heroInner}>
          <div style={s.heroTag}>Sobre nossa equipe</div>
          <h1 style={s.heroTitle}>Especialistas em hemodinâmica</h1>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.grid}>
          {doctors.map(d => (
            <article key={d.name} id={d.anchor} style={s.card}>
              <div style={s.photoWrap}>
                <img src={d.photo} alt={`Retrato de ${d.name}`} style={s.photo} />
              </div>
              <div style={s.cardBody}>
                <div style={s.name}>{d.name}</div>
                <div style={s.doctorTitle}>{d.title}</div>
                <div style={s.crm}>{d.crm}</div>
              </div>
            </article>
          ))}
        </div>
        <div style={s.note}>
          Página <strong>Sobre</strong> completa (bio, formação, especialidades, publicações) ainda a ser implementada — placeholder para link direto dos cards da Home.
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { OneHeartDoctors, OneHeartDoctorsPage });
