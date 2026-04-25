// Footer.jsx — OneHeart Website UI Kit · design.md §3 Footer
// 4 colunas (desktop): brand+tagline · sitemap · contatos · redes sociais.
// Localização ajustada para Curitiba–PR; CRMs e telefones são placeholders.

function OneHeartFooter({ setScreen }) {
  const isMobile = useIsMobile();
  const s = {
    footer: {
      background: '#471940', // --color-plum
      padding: isMobile ? '56px 20px 24px' : '72px 60px 32px',
      position: 'relative',
      overflow: 'hidden',
    },
    wmPattern: {
      position: 'absolute',
      top: -40, right: -40,
      width: 360, height: 360,
      backgroundImage: "url('./assets/pattern-simbolo-azul.webp')",
      backgroundSize: '200px',
      opacity: 0.08,
      pointerEvents: 'none',
    },
    inner: {
      maxWidth: 1200, margin: '0 auto',
      position: 'relative', zIndex: 2,
    },
    top: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr 1.2fr 1fr',
      gap: isMobile ? 36 : 48,
      marginBottom: isMobile ? 32 : 56,
    },
    brand: {},
    logo: { height: 36, marginBottom: 18 },
    tagline: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 11, fontWeight: 300, letterSpacing: '0.22em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)', marginBottom: 20,
    },
    desc: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6,
      maxWidth: 260,
    },
    col: {},
    colTitle: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: '#e6434e', marginBottom: 20,
    },
    link: {
      display: 'block',
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.72)',
      marginBottom: 12, cursor: 'pointer', transition: 'color 0.15s',
      textDecoration: 'none',
    },
    contactItem: {
      display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14,
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.72)', lineHeight: 1.55,
    },
    socialRow: { display: 'flex', gap: 10, marginTop: 4 },
    socialBtn: {
      width: 40, height: 40, borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.14)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'rgba(255,255,255,0.85)', cursor: 'pointer',
      transition: 'background 0.15s ease, border-color 0.15s ease',
    },
    divider: {
      borderTop: '1px solid rgba(255,255,255,0.12)',
      paddingTop: 24,
      display: 'flex', justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'center',
      flexDirection: isMobile ? 'column' : 'row',
      gap: 16,
    },
    copy: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 12, fontWeight: 400, color: 'rgba(255,255,255,0.45)',
    },
    legal: {
      fontFamily: 'Galano Grotesque, sans-serif',
      fontSize: 12, color: 'rgba(255,255,255,0.45)',
      display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap',
    },
    legalLink: { color: 'rgba(255,255,255,0.55)', cursor: 'pointer', textDecoration: 'none' },
  };

  const Icon = ({ d }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );

  return (
    <footer style={s.footer}>
      <div style={s.wmPattern}></div>
      <div style={s.inner}>
        <div style={s.top}>
          <div style={s.brand}>
            <img src="./assets/logo-branco.webp" alt="OneHeart" style={s.logo} />
            <div style={s.tagline}>Soluções únicas para cada coração</div>
            <div style={s.desc}>Cardiologia intervencionista em Curitiba – PR. Avaliação diagnóstica rigorosa e intervenções de alta complexidade.</div>
          </div>

          <div style={s.col}>
            <div style={s.colTitle}>Navegação</div>
            <a style={s.link} onClick={() => setScreen && setScreen('home')}>Início</a>
            <a style={s.link} onClick={() => setScreen && setScreen('doctors')}>Sobre</a>
            <a style={s.link}>Cuidado Avançado</a>
            <a style={s.link}>Publicações</a>
            <a style={s.link}>Cursos</a>
            <a style={s.link} onClick={() => setScreen && setScreen('contact')}>Contato</a>
          </div>

          <div style={s.col}>
            <div style={s.colTitle}>Contato</div>
            <div style={s.contactItem}>
              <Icon d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              <span>Curitiba – PR<br /><span style={{ opacity: 0.7 }}>Endereço a definir</span></span>
            </div>
            <div style={s.contactItem}>
              <Icon d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <span>(41) XXXX-XXXX</span>
            </div>
            <div style={s.contactItem}>
              <Icon d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
              <span>contato@oneheart.net.br</span>
            </div>
          </div>

          <div style={s.col}>
            <div style={s.colTitle}>Redes Sociais</div>
            <div style={s.socialRow}>
              <a
                style={s.socialBtn} aria-label="Instagram"
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              >
                <Icon d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z M17.5 6.5h.01" />
              </a>
              <a
                style={s.socialBtn} aria-label="LinkedIn"
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              >
                <Icon d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
              </a>
              <a
                style={s.socialBtn} aria-label="YouTube"
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              >
                <Icon d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
              </a>
            </div>
          </div>
        </div>

        <div style={s.divider}>
          <div style={s.copy}>© 2026 OneHeart · Cardiologia Intervencionista</div>
          <div style={s.legal}>
            <span>Responsáveis técnicos: CRM-PR XXXXX · XXXXX · XXXXX</span>
            <a style={s.legalLink}>Política de privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { OneHeartFooter });
