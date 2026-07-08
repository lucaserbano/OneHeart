# Design — Site OneHeart

Especificação de design para o novo site institucional da **OneHeart**, clínica de cardiologia intervencionista em Curitiba – PR. Este documento é a fonte de verdade visual e serve de briefing para o Stitch gerar o esqueleto do site.

Formato híbrido: a **Parte 1** define tokens e componentes (tabelas objetivas). A **Parte 2** descreve cada página em prosa — com foco detalhado na Homepage e descrições de alto nível para as subpáginas.

---

## 1. Visão e tom da marca

OneHeart é uma clínica de **cardiologia intervencionista de alta complexidade com atendimento humanizado**. O site precisa transmitir simultaneamente:

- **Autoridade técnica** — procedimentos como TAVI, MitraClip/PASCAL, FFR e FOP são de ponta e atraem tanto pacientes quanto médicos em busca de referência.
- **Cuidado humano** — o paciente cardíaco chega fragilizado; o site é muitas vezes o primeiro ponto de contato.
- **Sofisticação sóbria** — evitar estética asséptica de hospital ou visual genérico de startup. Pensar em "clínica boutique médica" com acabamento tipográfico refinado.

A assinatura visual é o **gradiente azul → vermelho**: azul representa razão, ciência e precisão; o vermelho, o coração e o cuidado. Usar com intenção, não como decoração genérica.

---

## 2. Design tokens

### 2.1 Cores

| Token | Hex | Pantone / origem | Uso principal |
|---|---|---|---|
| `--color-blue` | `#36498d` | PANTONE 288 C (82%) | Primária. Headers, títulos, links, CTAs, ícones. |
| `--color-burgundy` | `#9b374f` | PANTONE 7637C | Apoio. Acentos secundários, destaques de seção. |
| `--color-coral` | `#e6434e` | PANTONE 710C | Ênfase. CTA quente, badges, estados de alerta suave. |
| `--color-plum` | `#471940` | PANTONE 511C | Profundidade. Footer, overlays escuros, seções premium. |
| `--color-gray` | `#7F7F7F` | PANTONE Cool Gray 8C | Texto secundário, bordas, divisores, metadados. |
| `--color-white` | `#FFFFFF` | — | Fundo primário, contraste em superfícies coloridas. |

**Gradiente de marca** (`--gradient-brand`):

```css
background: linear-gradient(60deg, #36498d 19%, #e6434e 100%);
```

Uso **parcimonioso**: hero, botão primário, borda de cards em destaque, barras de separação. Não usar em blocos grandes de texto (prejudica legibilidade).

**Tons derivados** (para UI, não substituem os tokens oficiais):
- Azul escuro `#2a3a73` (hover de primário)
- Azul 10 `#ecf0f9` (fundo sutil em seções)
- Cinza 20 `#e5e5e5` (bordas de card)
- Cinza 60 `#4a4a4a` (texto corpo em modo forte)

### 2.2 Tipografia

| Função | Família | Pesos | Observações |
|---|---|---|---|
| Títulos e destaques | **Galano** | Medium, Bold, ExtraBold | H1 a H3, headlines, números grandes |
| Textos corridos e UI | **Galano Grotesque** | Light 300, Medium 500, Bold 700 | Body, legendas, labels, botões |

**Fallbacks web**: `"Galano", "Galano Grotesque", "Poppins", "Montserrat", system-ui, sans-serif`. Se as fontes proprietárias não estiverem disponíveis na versão final, padronizar em Poppins (similar em métrica e personalidade).

**Escala (desktop)**:

| Nível | Tamanho | Line-height | Peso |
|---|---|---|---|
| Display / Hero | 64–80px | 1.05 | Galano Bold/ExtraBold |
| H1 | 48px | 1.1 | Galano Bold |
| H2 | 36px | 1.2 | Galano Bold |
| H3 | 24px | 1.3 | Galano Medium |
| Body grande | 18px | 1.6 | Galano Grotesque Light |
| Body | 16px | 1.6 | Galano Grotesque Light |
| Small / meta | 14px | 1.5 | Galano Grotesque Medium |

Em mobile, reduzir H1/H2 em ~25% e manter body ≥16px.

### 2.3 Espaçamento, grid e superfície

- **Base de espaçamento**: 8px (tokens: 4, 8, 16, 24, 32, 48, 64, 96, 128).
- **Container**: máx. 1200px, com gutters de 24px (mobile) → 48px (desktop).
- **Grid**: 12 colunas em desktop, 8 em tablet, 4 em mobile.
- **Respiro vertical de seções**: 80–120px entre blocos principais.
- **Raios**: `sm` 8px (inputs, chips), `md` 12px (cards), `lg` 16px (cards destaque, imagens), `pill` 9999px (botões) — as "pílulas" dos swatches de cor do manual inspiram essa linguagem.
- **Sombras**: sutis. `shadow-sm` = `0 1px 2px rgba(54, 73, 141, 0.06)`; `shadow-md` = `0 6px 24px rgba(54, 73, 141, 0.08)`. Nunca sombras duras ou com tom acinzentado neutro — usar a primária com opacidade.

### 2.4 Breakpoints

- `sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px
- Abordagem **mobile-first**.

---

## 3. Componentes comuns

### Header
- Transparente sobre o hero; fundo branco com `shadow-sm` ao scroll.
- Logo à esquerda (versão degradê sobre branco; versão branca sobre gradiente).
- Navegação horizontal com os 6 links (Início, Sobre, Cuidado Avançado, Publicações, Cursos, Contato).
- À direita: CTA primário "Agendar avaliação" (pílula, gradiente).
- Mobile: hambúrguer → drawer lateral com nav e CTA.

### Footer
- Fundo `--color-plum` ou `--color-blue` em profundidade; texto branco, acentos em gray 30.
- 4 colunas (desktop): logo + tagline · sitemap · contatos (endereço, telefone, WhatsApp) · redes sociais.
- Barra inferior: © OneHeart, CRM dos responsáveis técnicos, link para política de privacidade.
- Pattern `pattern-simbolo-azul.png` como textura discreta no canto superior.

### Botões
- **Primário** — fundo com gradiente de marca, texto branco, formato pílula, padding 16px×32px, peso Bold. Hover: elevação sutil + leve deslocamento do gradiente.
- **Secundário** — outline 2px `--color-blue`, texto azul, fundo transparente. Hover: fundo azul, texto branco.
- **Terciário (texto)** — texto azul + ícone seta à direita; underline animado no hover.

### Cards
- Fundo branco, raio 12–16px, `shadow-md`, padding 24–32px.
- **Card de procedimento**: ícone/ilustração no topo (usar símbolo OneHeart em coral quando apropriado), título H3, descrição de 2–3 linhas, link terciário "Saiba mais".
- **Card destaque**: acrescentar borda de 2px com gradiente (usar `border-image` ou pseudo-elemento).
- **Card de médico**: foto em topo (aspect-ratio 4:5), nome em Galano Bold, titulação em Galano Grotesque Medium cinza, mini-bio, link "Ver perfil".

### Uso dos patterns
- `pattern-colorido.png` — hero principal ou seções de CTA grandes, com overlay branco ~85% para legibilidade.
- `pattern-branco.png` — textura sutil em fundos claros de seções intermediárias.
- `pattern-simbolo-azul.png` — acento em rodapés, cards de serviço, páginas internas.

---

## 4. Página Início — layout detalhado

Fluxo vertical, 8 blocos. Cada bloco pensado para um propósito claro e com respiro entre eles.

### 4.1 Hero
- **Estilo**: full-bleed, altura ~85vh em desktop (min 600px). Fundo com o gradiente de marca **ou** foto da equipe com overlay gradiente a 60°.
- **Composição**: logo OneHeart branco no topo-esquerda (ou omitido se o header já estiver presente); à esquerda, conteúdo textual:
  - Eyebrow: "Cardiologia intervencionista · Curitiba – PR" (Galano Grotesque Medium 14px, branco 80%)
  - Headline (Galano ExtraBold, 64–80px, branco): "Precisão em hemodinâmica, cuidado em cada batimento."
  - Sub-headline (Galano Grotesque Light, 20px, branco 85%): "Avaliação diagnóstica rigorosa e intervenções estruturais e coronarianas de alta complexidade, com equipe experiente."
  - Par de CTAs: primário **"Agendar avaliação"** (pílula branca com texto azul) + secundário **"Conhecer a equipe"** (outline branco).
- À direita (desktop ≥lg): composição visual com o símbolo OneHeart grande em versão colorida sobre vidro fosco, ou foto recortada de procedimento/equipe com máscara gradiente.

### 4.2 Faixa de credenciais
- Fundo branco, altura compacta (~120px).
- 4 itens em linha (desktop) · 2×2 (mobile). Cada item: ícone minimalista (stroke azul) + número ou palavra-chave + legenda:
  - "+X anos" · Experiência combinada
  - "Curitiba – PR" · Atendimento de referência
  - "Hemodinâmica avançada" · TAVI, MitraClip, PASCAL, FFR, FOP
  - "Avaliação humanizada" · Escuta antes da técnica
- Divisores sutis em `--color-gray` 20.

### 4.3 Nossa abordagem
- Fundo `ecf0f9` (azul 10).
- Layout 2 colunas: à esquerda, H2 "Diagnóstico preciso. Intervenção certa." + parágrafo curto (2–3 linhas) resumindo a atuação (fundamentar a partir do texto da página "Sobre" do site atual). À direita, imagem ou vídeo curto de procedimento (com máscara em raio `lg`).
- CTA terciário abaixo do parágrafo: "Conheça nossos cuidados →" apontando para **Cuidado Avançado**.

### 4.4 Cuidados em destaque
- Fundo branco.
- H2 centralizado: "Cuidados que oferecemos" + sub: "Procedimentos minimamente invasivos de alta complexidade."
- Grid 3×2 (desktop) de **6 cards de procedimento** — TAVI, MitraClip/PASCAL, FFR, FOP, Cateterismo / Coronariografia, Angioplastia com stent. Cada card usa padrão "Card de procedimento" descrito em §3.
- Rodapé da seção: botão secundário "Ver todos os cuidados".

### 4.5 Equipe
- Fundo com `pattern-branco.png` em opacidade baixa.
- H2 "Conheça nossos hemodinamicistas" + sub curto.
- 3 cards de médico lado a lado (Deborah, Pedro, Wilton), seguindo padrão "Card de médico" em §3.
- Cada card linka para a seção respectiva da página **Sobre**.

### 4.6 Publicações recentes
- Fundo branco.
- H2 "Publicações" + sub "Conteúdo técnico-científico da nossa equipe."
- 2–3 cards de publicação em grid horizontal: thumbnail, tag de tema, título em Galano Medium, linha de autoria/data em cinza, trecho de 2 linhas.
- CTA secundário "Ver todas as publicações" →.

### 4.7 CTA final
- **Faixa full-width com gradiente de marca.** Altura ~360px.
- Conteúdo centralizado: H2 branco "Pronto para cuidar do seu coração com quem entende?" + sub branco 85% "Agende uma avaliação com nossa equipe."
- Botão primário **invertido** (fundo branco, texto azul): "Agendar avaliação". Secundário: telefone/WhatsApp com ícone.

### 4.8 Footer
Conforme §3.

---

## 5. Subpáginas — direção em alto nível

Subpáginas devem reutilizar o design system. Stitch pode extrapolar padrões a partir da Homepage.

### Sobre
Página institucional com três blocos: (1) **hero secundário** curto com a missão da clínica; (2) **história e diferenciais** em bloco de texto alternado com imagens; (3) **perfis detalhados dos 3 médicos** — foto grande retrato (ratio 3:4), nome, CRM, titulação, formação, especialidades, publicações vinculadas, redes profissionais. Ancorar cada médico para permitir link direto a partir dos cards da Homepage.

### Cuidado Avançado
Hub de procedimentos. Topo com **hero secundário** + navegação em chips/âncoras para cada procedimento (TAVI, MitraClip/PASCAL, FFR, FOP, Cateterismo, Angioplastia, Cateterismo direito/Hipertensão pulmonar). Cada procedimento é uma seção de **artigo longo** com título, ilustração, explicação em linguagem acessível e indicação clínica. Layout: 2 colunas (navegação lateral sticky em desktop · texto principal). Em mobile: tabs ou acordeões.

### Publicações
**Grid de artigos** com filtro por tema (TAVI, MitraClip, FFR, FOP etc.). Cada card: thumbnail, chip de tema, título, autoria, data, trecho. Paginação ou carregamento progressivo. Estado vazio amigável caso filtro não retorne resultados.

### Cursos
Estado **"em breve"** fiel ao site atual. Hero secundário com título "Cursos" e parágrafo explicando que a OneHeart está preparando formações em cardiologia intervencionista. Formulário de **"avise-me quando abrir"** com e-mail. Layout já estruturado para, no futuro, receber cards de curso (título, carga horária, modalidade, CTA "inscrever-se").

### Contato
Layout em 2 colunas (desktop): à esquerda, **formulário de contato** (nome, e-mail, telefone, motivo em dropdown, mensagem); à direita, **informações** — endereço da clínica, telefones, WhatsApp com ícone, e-mail, horários de atendimento. Abaixo, **mapa embutido** full-width com pin da clínica. CTA de WhatsApp também flutuante (persistente em todas as páginas).

---

## 6. Imagens e assets

- **Fotos dos médicos** (`Fotos - médicos/`): aplicar tratamento visual consistente — sugestão: fundo neutro, iluminação suave, leve dessaturação controlada para convergir os três retratos à mesma temperatura. Cortes aspect-ratio 4:5 em cards e 3:4 na página Sobre.
- **Logos**:
  - `LOGO ONEHEART_PRINCIPAL DEGRADE.png` — em fundos claros (headers brancos, fichas).
  - `LOGO ONEHEART_BRANCO.png` — em fundos escuros ou sobre o gradiente (hero, footer).
  - `LOGO ONEHEART_SELO DEGRADE.png` — favicon, avatar de redes sociais, badges.
- **Símbolos** (`simbolo-colorido/branco/preto.png`): ícones decorativos, apoio em cards, watermark em seções.
- **Patterns**: aplicar conforme §3.
- **Otimização obrigatória** antes de produção: WebP/AVIF em múltiplos tamanhos (320, 640, 960, 1440). Nunca servir os PNGs/JPGs originais (1–3 MB cada).

---

## 7. Acessibilidade e responsividade

- **Contraste**: garantir AA em todo texto. Coral `#e6434e` sobre branco não atinge AA para texto pequeno — usar apenas em texto grande (≥18px Bold) ou como elemento gráfico/ícone, nunca como único canal de significado.
- **Mobile-first**: todo componente é testado primeiro em 360–414px. Header vira drawer; grid de 3 colunas vira 1; tamanhos de título reduzidos ~25%.
- **Áreas de toque** ≥44×44px.
- **Foco visível** em links e botões (outline 2px `--color-blue` com offset 2px).
- **Hierarquia semântica**: uma H1 por página, estrutura lógica de H2/H3. Landmarks `header`, `nav`, `main`, `footer`.
- **Alt text** obrigatório em imagens de conteúdo; imagens puramente decorativas (patterns) com `alt=""`.
- **Redução de movimento**: respeitar `prefers-reduced-motion` — desativar parallaxes e animações de deslocamento do gradiente.

---

## 8. Conteúdo — fonte e princípios

- O texto das páginas e dos artigos virá do arquivo `Conteúdo - apify/scrappe.json`, que já traz tudo extraído do site atual.
- **Nunca inventar conteúdo médico.** Ajustes de estilo/diagramação são permitidos; mudanças de significado clínico exigem confirmação com o cliente.
- Tom editorial: frase curta, voz ativa, evitar jargão quando possível, explicar termos técnicos na primeira ocorrência. Para pacientes, começar pelo benefício antes do mecanismo.
