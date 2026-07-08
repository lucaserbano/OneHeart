# Product

## Register

brand

## Users

Dois públicos de peso igual, atendidos pela mesma superfície:

- **Pacientes cardíacos e suas famílias.** Muitas vezes chegam fragilizados, ansiosos e com pouca familiaridade técnica. O site costuma ser o primeiro ponto de contato com a clínica. Precisam de acolhimento, clareza sobre o que é feito e um caminho óbvio para falar com a equipe.
- **Médicos que encaminham (cardiologistas, clínicos, outros especialistas).** Buscam uma referência técnica confiável para procedimentos de alta complexidade. Avaliam credenciais, procedimentos disponíveis (TAVI, MitraClip/PASCAL, FFR, FOP) e a produção científica da equipe.

Contexto de uso: majoritariamente mobile, muitas vezes em momento de decisão ou urgência emocional. Curitiba – PR e região.

## Product Purpose

Site institucional da **OneHeart**, clínica de cardiologia intervencionista (hemodinâmica) de alta complexidade em Curitiba. Existe para apresentar a clínica, seus três hemodinamicistas e seus procedimentos de ponta, convertendo confiança em contato.

**Sucesso = contato via WhatsApp.** O canal primário de conversão é a conversa direta; agendamento/telefone são secundários. Todo o fluxo da página deve, sem atrito, levar os dois públicos até esse contato — o paciente por acolhimento, o médico por autoridade demonstrada.

## Brand Personality

Três forças em equilíbrio, nunca uma anulando a outra:

- **Autoridade técnica** — procedimentos de ponta, equipe experiente, produção científica. Transmitir domínio sem arrogância.
- **Cuidado humano** — "escuta antes da técnica". O coração como órgão e como símbolo de cuidado.
- **Sofisticação sóbria** — acabamento tipográfico refinado, "clínica boutique médica", não hospital asséptico nem startup genérica.

Assinatura da marca: o **gradiente azul → vermelho** (azul = razão, ciência, precisão; vermelho = coração, cuidado). Usar com intenção, como assinatura — nunca como decoração genérica.

Tom editorial: frase curta, voz ativa, benefício antes do mecanismo. Explicar o termo técnico na primeira ocorrência. Nunca inventar conteúdo médico — mudanças de significado clínico exigem confirmação do cliente.

## Anti-references

- **Estética asséptica de hospital** — branco clínico frio, stock de estetoscópios, azul corporativo sem alma.
- **Visual genérico de startup/SaaS** — hero-metric template, cards idênticos em grade infinita, ilustrações "corporate memphis".
- **Gradiente como enfeite** — o gradiente de marca aplicado em todo lugar perde o significado; ele é assinatura, não papel de parede.
- **Site de médico datado** — Comic-Sans-de-jaleco, carrosséis de banner, excesso de ícones de coração literais.

## Design Principles

1. **Escuta antes da técnica.** Começar pelo benefício ao paciente; o mecanismo clínico vem depois e explicado. Vale para copy, hierarquia e ordem das seções.
2. **Autoridade demonstrada, não declarada.** Mostrar procedimentos reais, credenciais e publicações em vez de adjetivos ("os melhores", "excelência"). Prova concreta converte os dois públicos.
3. **Gradiente é assinatura.** O azul→vermelho aparece em poucos momentos de alto valor (hero, CTA primário, detalhes) e por isso significa algo. Parcimônia é a regra.
4. **Um caminho claro até o contato.** Cada seção deságua, direta ou indiretamente, no WhatsApp/avaliação. Nunca deixar o usuário sem próximo passo óbvio.
5. **Sobriedade é o luxo.** Refinamento vem de tipografia, respiro e contenção — não de efeitos. Quando em dúvida, remover.

## Accessibility & Inclusion

- **Meta WCAG 2.1 AA** em todo texto de conteúdo.
- Coral `#e6434e` sobre branco **não** atinge AA para texto pequeno — usar só em texto grande (≥18px Bold) ou como elemento gráfico, nunca como único canal de significado.
- **Mobile-first**, testado a partir de 360–414px. Áreas de toque ≥44×44px.
- **Foco visível** (outline 2px `--blue`, offset 2px) em links e botões.
- Hierarquia semântica: uma H1 por página, landmarks `header`/`nav`/`main`/`footer`, alt text em imagens de conteúdo (`alt=""` em patterns decorativos).
- Respeitar `prefers-reduced-motion`: desativar parallaxes e deslocamentos de gradiente, manter crossfade/instantâneo.
