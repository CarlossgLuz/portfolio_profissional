# Carlos Gabriel Portfolio

Portfólio estático multilíngue com layout preservado, animações leves, SEO on-page, tema claro/escuro e avisos de uso para reduzir risco de fraude e impersonação.

## Visão geral

- site estático sem build step
- idiomas suportados: `pt-BR`, `en`, `es`
- troca de idioma com persistência em `localStorage` e suporte via `?lang=`
- URLs de idioma são resolvidas por query string, sem páginas duplicadas por rota
- conteúdo em pt-BR revisado com acentuação e ortografia consistentes
- alternância de tema claro/escuro com persistência da preferência e respeito ao tema do sistema
- currículo disponível para visualização e download em áreas contextuais do site
- hero sem CTA de currículo, para manter o foco na apresentação principal
- ajustes de responsividade para telas pequenas, médias e grandes
- SEO básico com canonical, hreflang, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml` e JSON-LD
- proteção complementar de identidade via `NOTICE`, `SECURITY.md` e `BRAND.md`

## Como rodar

```bash
cd portfolio_profissional
python3 -m http.server 4173
```

Abra em seguida:

```text
http://localhost:4173
```

## Estrutura

```text
portfolio_profissional/
├── index.html
├── robots.txt
├── sitemap.xml
├── LICENSE
├── NOTICE
├── SECURITY.md
├── BRAND.md
├── README.md
└── assets/
    ├── styles/
    │   ├── base.css
    │   ├── components.css
    │   ├── sections.css
    │   └── responsive.css
    ├── documents/
    │   └── CV_Carlos_Gabriel_03-2026.pdf
    ├── images/
    │   └── og-cover.svg
    └── scripts/
        ├── shared.js
        ├── i18n.js
        ├── cursor.js
        ├── intro.js
        ├── navigation.js
        └── reveal.js
```

## Organização

- `index.html`
  Estrutura principal do site, metadados SEO, schema `Person` e marcação do conteúdo.
- `assets/scripts/i18n.js`
  Dicionários de idioma, persistência da linguagem, atualização de meta tags, canonical, schema e textos traduzidos.
- `assets/scripts/navigation.js`
  Navegação, menu mobile, progresso de leitura e comportamento de ancoragem.
- `assets/scripts/intro.js`
  Intro de terminal com mensagens localizadas.
- `assets/scripts/reveal.js`
  Revelação progressiva de seções ao entrar na viewport.
- `assets/documents/CV_Carlos_Gabriel_03-2026.pdf`
  PDF público usado nos CTAs de currículo.
- `assets/images/og-cover.svg`
  Imagem social usada por Open Graph e Twitter Cards.

### Convenção de pastas

- `assets/styles`
  folhas de estilo do site.
- `assets/scripts`
  scripts de comportamento, tema e internacionalização.
- `assets/images`
  ícones e imagens públicas.
- `assets/documents`
  arquivos para download público, como currículo.

## Tema e interface

- O site oferece alternância entre tema claro e escuro por meio do controle visual na navegação.
- A preferência é persistida no navegador e, na primeira visita, o sistema respeita `prefers-color-scheme`.
- O visual mantém a mesma direção editorial, com contraste ajustado para leitura e estados interativos consistentes.
- A responsividade foi refinada para preservar hierarquia, legibilidade e toque em telas menores.

## Internacionalização

- Idiomas disponíveis:
  - `pt-BR`
  - `en`
  - `es`
- Seleção por:
  - botões no topo
  - botões no menu mobile
  - query string `?lang=`
- A linguagem escolhida é persistida no navegador.
- Nomes próprios e marcas permanecem estáveis quando fizer sentido:
  - `Carlos Gabriel`
  - `Xmart Solutions`
  - `Clarium`
  - `Credly`
  - nomes oficiais de certificações e tecnologias

## Currículo

O currículo está disponível em:

```text
./assets/documents/CV_Carlos_Gabriel_03-2026.pdf
```

O site oferece acesso em:

- menu mobile
- seção de certificações
- seção de contato

## SEO

Implementado:

- `canonical`
- `hreflang` para `pt-BR`, `en`, `es` e `x-default`
- variações de idioma indexáveis por `?lang=en` e `?lang=es`
- Open Graph completo
- Twitter Cards
- JSON-LD `Person`
- `robots.txt`
- `sitemap.xml`

## Licença e uso

- O código permanece sob a licença MIT em [`LICENSE`](/home/carlosz/site_portfolio/portfolio_profissional/LICENSE).
- Isso não autoriza uso enganoso da identidade pessoal, links, currículo ou certificações.
- Para isso, consulte:
  - [`NOTICE`](/home/carlosz/site_portfolio/portfolio_profissional/NOTICE)
  - [`SECURITY.md`](/home/carlosz/site_portfolio/portfolio_profissional/SECURITY.md)
  - [`BRAND.md`](/home/carlosz/site_portfolio/portfolio_profissional/BRAND.md)

## Regra de manutenção

- preservar o layout e a direção visual existentes
- evitar regressões nas animações e no comportamento mobile
- manter a camada de idioma centralizada em `assets/scripts/i18n.js`
- manter o controle de tema sincronizado com CSS e armazenamento local
- revisar textos de interface sempre que houver novas seções ou CTAs
- não espalhar textos duplicados fora da estrutura principal sem necessidade
