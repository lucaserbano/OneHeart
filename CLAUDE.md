# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o projeto

Novo site institucional da **OneHeart**, clínica de cardiologia intervencionista (hemodinâmica) sediada em Curitiba – PR. O site terá 6 páginas: **Início, Sobre, Cuidado Avançado, Publicações, Cursos, Contato**.

- **Idioma**: português do Brasil (PT-BR) em todo o conteúdo voltado ao usuário final.
- **Público**: misto — pacientes (linguagem acessível, foco em educação e agendamento) e profissionais de saúde (procedimentos de alta complexidade, publicações, cursos).
- **Tom**: técnico, confiável e humanizado. Evitar estética asséptica de "hospital" ou de "startup genérica".

## Status e fluxo de trabalho

O projeto está em fase **pré-código** — a raiz contém apenas assets e conteúdo. O fluxo planejado é:

1. `design.md` é finalizado no Claude Code (fonte de verdade para design).
2. `design.md` é exportado para o **Stitch**, que gera o esqueleto do site.
3. Retornamos ao Claude Code com o código gerado para ajustes finais, integração de conteúdo e polimento.

Quando houver código, atualize este arquivo com comandos de build/dev/test e notas de arquitetura.

## Estrutura de pastas

- **[Conteúdo - apify/](Conteúdo - apify/)** — `scrappe.json` com 13 páginas extraídas do site atual (oneheart.net.br), incluindo 6 páginas institucionais e 7 artigos sobre TAVI, MitraClip/PASCAL, FFR, FOP, cateterismo e hipertensão pulmonar. É a **fonte do texto** para migração futura — não inventar conteúdo médico.
- **[ID visual - originais/](ID visual - originais/)** — identidade visual: logos (7 variações), símbolos (3), patterns (3) e os manuais em PDF (`cores-principais.pdf`, `tipografia.pdf`). É a **fonte de verdade da marca**; `design.md` extrai os tokens dela.
- **[Fotos - médicos/](Fotos - médicos/)** — retratos em alta resolução dos 3 médicos (Deborah, Pedro, Wilton) para a página Sobre e cards da Homepage.
- **[design.md](design.md)** — especificação de design (tokens + layouts). Fonte de verdade para decisões visuais.

## Referência rápida de marca

**Cores** (hex extraídos de `cores-principais.pdf`):
- `#36498d` Azul principal · `#9b374f` Bordô · `#e6434e` Coral · `#471940` Ameixa · `#7F7F7F` Cinza · `#FFFFFF` Branco
- **Gradiente de marca**: `linear-gradient(60deg, #36498d 19%, #e6434e 100%)`

**Tipografia** (de `tipografia.pdf`):
- Títulos e destaques: **Galano**
- Textos corridos: **Galano Grotesque** (pesos ExtraLight → Heavy, com itálicos)

Consulte `design.md` para uso semântico completo (quando aplicar cada cor, hierarquia de tipos, componentes).

## Diretrizes ao trabalhar neste projeto

- **`design.md` é a fonte de verdade visual.** Se o código gerado pelo Stitch divergir de `design.md`, apontar a divergência antes de alterar o spec.
- **Não inventar texto médico.** Conteúdo de páginas e artigos vem de `Conteúdo - apify/scrappe.json`. Ao reescrever para web, preservar terminologia clínica; propor alterações em vez de aplicar silenciosamente.
- **Sensibilidade clínica.** O conteúdo pode influenciar decisões de saúde. Nunca simplificar ou adaptar explicações de procedimentos sem confirmação.
- **Assets são grandes.** Fotos de 2–3 MB e patterns de até 1.7 MB. Gerar versões otimizadas (WebP/AVIF, múltiplos tamanhos) antes de servir; não referenciar os originais diretamente em produção.
- **Logos por contexto.** `LOGO ONEHEART_PRINCIPAL DEGRADE.png` em fundos claros; `LOGO ONEHEART_BRANCO.png` em fundos escuros/gradiente; selos para favicon e redes sociais.
- **Arquivos com espaços e acentos** nos nomes de pastas (`Conteúdo - apify`, `ID visual - originais`, `Fotos - médicos`). Citar entre aspas em scripts/comandos.
