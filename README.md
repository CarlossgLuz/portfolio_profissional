# Carlos Gabriel Portfolio

Portfólio estático multilíngue com layout preservado, animações leves, SEO on-page e avisos de uso para reduzir risco de fraude e impersonação.

## Visão geral

- site estático sem build step
- idiomas suportados: `pt-BR`, `en`, `es`
- troca de idioma com persistência em `localStorage` e suporte via `?lang=`
- URLs de idioma são resolvidas por query string, sem páginas duplicadas por rota
- currículo disponível para visualização e download
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
└── static/
    ├── css/
    │   ├── base.css
    │   ├── components.css
    │   ├── sections.css
    │   └── responsive.css
    ├── docs/
    │   └── CV_Carlos_Gabriel_03-2026.pdf
    ├── img/
    │   └── og-cover.svg
    └── js/
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
- `static/js/i18n.js`
  Dicionários de idioma, persistência da linguagem, atualização de meta tags, canonical e schema.
- `static/docs/CV_Carlos_Gabriel_03-2026.pdf`
  PDF público usado nos CTAs de currículo.
- `static/img/og-cover.svg`
  Imagem social usada por Open Graph e Twitter Cards.

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
./static/docs/CV_Carlos_Gabriel_03-2026.pdf
```

O site oferece acesso em:

- hero
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
- manter a camada de idioma centralizada em `static/js/i18n.js`
- não espalhar textos duplicados fora da estrutura principal sem necessidade
