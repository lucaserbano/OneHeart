# OneHeart — Site Institucional

Site da **OneHeart**, clínica de cardiologia intervencionista (hemodinâmica) em Curitiba – PR.

Em produção: <https://lucaserbano.github.io/OneHeart/>

## Estrutura

- `index.html` — entry point, monta a página Início.
- `*.jsx` — componentes da Home (Navbar, Hero, Credenciais, Abordagem, Cuidados, Doctors, Publicacoes, CtaFinal, Footer) carregados via Babel standalone, sem build.
- `colors_and_type.css` — tokens da marca (cores, tipografia, espaçamentos, sombras).
- `assets/` — logos, símbolos, patterns e fotos dos médicos em WebP.
- `fonts/` — Galano Grotesque em WOFF2 (8 pesos).
- `design.md` — especificação visual; fonte de verdade.

## Como rodar localmente

```bash
python3 -m http.server 8181
# abrir http://127.0.0.1:8181/
```

Não há build step. Os JSX são compilados pelo Babel standalone direto no navegador.

## Placeholders pendentes (validar com cliente antes de publicar)

- `+ XX anos` na faixa de credenciais
- `CRM-PR XXXXX` nos cards de médico e no footer
- Telefone, WhatsApp e endereço no footer e CTA final
- Datas das publicações
