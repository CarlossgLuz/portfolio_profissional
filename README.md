# Portfolio Profissional

Portfólio estático segmentado a partir do arquivo-fonte `carlos-gabriel-portfolio.html`, preservando integralmente a interface, os textos, as métricas, as proporções e os comportamentos visuais do layout novo.

## Objetivo desta estrutura

- Manter a saída visual e interativa do site exatamente como no arquivo único de origem.
- Separar estilos e scripts por responsabilidade para facilitar manutenção.
- Deixar a base mais legível sem introduzir build step, framework ou alteração de UX.

## Como rodar

Basta servir a pasta do projeto com qualquer servidor estático simples.

```bash
cd portfolio_profissional
python3 -m http.server 4173
```

Depois, abra:

```text
http://localhost:4173
```

Também é possível abrir `index.html` diretamente, mas o uso de um servidor local é a forma recomendada.

## Estrutura

```text
portfolio_profissional/
├── index.html
├── static/
│   ├── css/
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── sections.css
│   │   └── responsive.css
│   └── js/
│       ├── shared.js
│       ├── cursor.js
│       ├── intro.js
│       ├── navigation.js
│       └── reveal.js
├── LICENSE
└── README.md
```

## Organização dos arquivos

- `index.html`
  Shell principal com a marcação completa do site.
- `static/css/base.css`
  Reset, tokens, variáveis e regras globais.
- `static/css/components.css`
  Blocos reutilizáveis, navegação, cursor, intro, footer e utilidades.
- `static/css/sections.css`
  Estilos específicos das seções.
- `static/css/responsive.css`
  Regras de responsividade isoladas.
- `static/js/shared.js`
  Helpers básicos compartilhados.
- `static/js/cursor.js`
  Cursor customizado.
- `static/js/intro.js`
  Intro em terminal.
- `static/js/navigation.js`
  Barra de progresso, navegação, menu mobile e smooth scroll.
- `static/js/reveal.js`
  Reveals com `IntersectionObserver`.

## Regra de manutenção

Se precisar evoluir o projeto, preserve o contrato visual do layout atual:

- não alterar textos, métricas ou hierarchy sem decisão explícita;
- não reorganizar timings de animação sem necessidade real;
- não fundir novamente os arquivos extraídos em blocos inline;
- manter comentários curtos e focados em intenção, não em óbvio.
