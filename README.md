# Carlos Gabriel - Portfolio Profissional

Portfolio estatico, responsivo e multilingue de Carlos Gabriel Gomes Luz, Analista de Desenvolvimento de Sistemas Jr. e Desenvolvedor Full Stack Jr.

## Visao geral

- HTML, CSS e JavaScript nativos, sem build step
- idiomas `pt-BR`, `en` e `es`
- curriculos em portugues e ingles selecionados automaticamente por idioma
- temas claro e escuro com persistencia local
- introducao de terminal curta, exibida uma vez por sessao e com opcao de pular
- navegacao por teclado, menu mobile com controle de foco e suporte a `Escape`
- animacoes progressivas com `prefers-reduced-motion`
- SEO com canonical, hreflang, Open Graph, Twitter Cards, sitemap e JSON-LD

## Executar localmente

```bash
cd /home/carlosz/site_portfolio/portfolio_profissional
python3 -m http.server 4173
```

Acesse `http://localhost:4173`.

Variantes de idioma:

```text
http://localhost:4173/
http://localhost:4173/?lang=en
http://localhost:4173/?lang=es
```

## Estrutura

```text
portfolio_profissional/
|-- index.html
|-- robots.txt
|-- sitemap.xml
|-- README.md
|-- BRAND.md
|-- NOTICE
|-- SECURITY.md
|-- docs/
|   `-- portfolio-audit.md
`-- assets/
    |-- documents/
    |   |-- CV_Carlos_Gabriel_PtBR.pdf
    |   `-- CV_Carlos_Gabriel_EN.pdf
    |-- images/
    |   |-- brands/
    |   |-- certifications/
    |   `-- projects/
    |-- scripts/
    |   |-- shared.js
    |   |-- theme.js
    |   |-- i18n.js
    |   |-- cursor.js
    |   |-- intro.js
    |   |-- navigation.js
    |   `-- reveal.js
    `-- styles/
        |-- base.css
        |-- components.css
        |-- sections.css
        `-- responsive.css
```

## Conteudo e fontes

O conteudo profissional segue a hierarquia registrada em [`docs/portfolio-audit.md`](docs/portfolio-audit.md): curriculo atualizado, PDF do LinkedIn, perfil publico do LinkedIn, GitHub e, por ultimo, o portfolio anterior.

Informacoes nao confirmadas nao devem ser adicionadas. Ambientes privados, dados de clientes, metricas sem evidencia e links internos nao pertencem ao site publico.

## Internacionalizacao

Todo texto traduzivel, metadado localizado e atributo de acessibilidade esta centralizado em `assets/scripts/i18n.js`.

- `pt-BR` usa `CV_Carlos_Gabriel_PtBR.pdf`
- `en` e `es` usam `CV_Carlos_Gabriel_EN.pdf`
- a preferencia e persistida em `localStorage`
- `?lang=` tem prioridade sobre a preferencia armazenada
- nomes proprios, marcas e tecnologias permanecem inalterados

## Temas e motion

- o tema respeita a preferencia do sistema na primeira visita
- a escolha manual e persistida em `localStorage`
- a intro e ignorada em `prefers-reduced-motion` e apos a primeira exibicao da sessao
- o cursor personalizado so e ativado com `hover: hover`, `pointer: fine` e movimento completo
- o conteudo permanece visivel sem JavaScript ou sem `IntersectionObserver`

## SEO

O dominio canonico configurado e `https://carlosgabriel.netlify.app/`.

Ao alterar dominio, cargo, curriculo ou identidade publica, revise em conjunto:

- `index.html`
- `assets/scripts/i18n.js`
- `assets/images/og-cover.svg`
- `sitemap.xml`
- `robots.txt`
- `BRAND.md`

## Validacao

Comandos usados durante a reformulacao:

```bash
npx html-validate index.html
node --check assets/scripts/shared.js
node --check assets/scripts/theme.js
node --check assets/scripts/i18n.js
node --check assets/scripts/cursor.js
node --check assets/scripts/intro.js
node --check assets/scripts/navigation.js
node --check assets/scripts/reveal.js
xmllint --noout sitemap.xml assets/images/og-cover.svg assets/images/favicon.svg
git diff --check
```

A revisao visual cobre 320, 375, 430, 768, 1024, 1280, 1440 e 1920 px, nos temas claro e escuro, nos tres idiomas e com movimento reduzido.

## Publicacao

O projeto nao exige compilacao. Em uma hospedagem estatica, publique a raiz do repositorio como diretorio do site.

Antes de publicar:

1. execute as validacoes acima;
2. abra o site por servidor HTTP local;
3. teste links, downloads, temas e idiomas;
4. confirme `robots.txt`, `sitemap.xml` e o dominio canonico;
5. publique somente commits revisados.

## Licenca e identidade

O codigo esta sob a licenca MIT. A licenca nao autoriza personificacao, phishing ou reutilizacao enganosa da identidade, curriculos e links profissionais. Consulte `NOTICE`, `SECURITY.md` e `BRAND.md`.
