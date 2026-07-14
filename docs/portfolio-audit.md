# Auditoria do portfolio - 2026-07-13

## Contexto

Reformulacao integral do portfolio estatico de Carlos Gabriel para refletir o cargo atual de Analista de Desenvolvimento de Sistemas Jr. e posicionar o perfil para oportunidades junior em desenvolvimento de sistemas, full stack e software.

## Fontes e hierarquia

1. `CV_CarlosGabriel_PtBR.pdf` e `CV_CarlosGabriel_En.pdf`, atualizados em 2026-07-13.
2. `Profile.pdf`, exportado do LinkedIn em 2026-07-13.
3. Perfil publico do LinkedIn (acesso publico limitado; o PDF foi usado como evidencia principal do perfil).
4. GitHub publico e repositorios vinculados.
5. Portfolio atual, usado apenas como referencia tecnica e visual.

## Mapa de evidencias

| Tema | Evidencia prioritaria | Conteudo antigo | Acao | Confianca |
| --- | --- | --- | --- | --- |
| Cargo atual | Analista de Desenvolvimento de Sistemas Jr., Xmart, desde jun/2026 | Estagiario | Atualizar e separar a progressao de cargo | Alta |
| Experiencia anterior | Estagiario de Desenvolvimento de Sistemas, dez/2025 a jun/2026 | Periodo 2024-presente em um unico cargo | Criar duas entradas distintas | Alta |
| Formacao atual | ADS na UNICID, jun/2026 a previsao jun/2027 | Impacta, sem datas | Substituir instituicao e periodo | Alta |
| Formacoes concluidas | SENAI 2024-2026; Proz 2023-2024 | Cargas horarias e ensino medio sem prioridade | Manter somente cursos confirmados e relevantes | Alta |
| Posicionamento | Analista Jr. / Full Stack Jr. com perfil generalista | Desenvolvedor/estagiario | Atualizar hero, metadados e contato | Alta |
| Projeto Toca dos Pes | Freelance full stack, homologacao na Vercel, 2026-atual | Ausente | Adicionar sem publicar URL privada | Alta |
| Projeto Clarium | Aplicativo publicado e landing publica | Landing e app tratados como projetos separados | Consolidar como um case | Alta |
| Certificacoes | AZ-900 (fev/2026) e SFPC (out/2024-out/2027) | Google Cloud Foundations sem confirmacao no CV | Remover certificacao nao confirmada | Alta |
| Idioma | Ingles intermediario B2 em aperfeicoamento | Texto parcialmente equivalente | Atualizar sem tratar como certificacao | Alta |
| Disponibilidade | Presencial, hibrido ou remoto em Sao Paulo | Busca exclusiva por estagio | Atualizar CTAs e contato | Alta |
| Eventos | Nao constam nas fontes prioritarias | Sete eventos e logos | Remover secao e assets do fluxo principal | Media/alta |
| Telefone | Presente no CV e LinkedIn | Presente no site | Manter apenas na area de contato | Alta |

## Divergencias e lacunas

- A previsao de conclusao da UNICID diverge: jun/2027 no curriculo e jul/2028 no LinkedIn. Pela hierarquia definida, sera usado jun/2027.
- O perfil publico do GitHub ainda informa estagio e Impacta. Ele esta desatualizado e nao sera usado como fonte profissional.
- O projeto Toca dos Pes esta em homologacao e nao possui link publico confirmado no curriculo. Nenhuma URL sera inventada ou exposta.
- Os links individuais de verificacao das certificacoes nao foram confirmados. O perfil publico do Credly sera mantido como referencia agregada.
- O perfil publico do LinkedIn bloqueou leitura automatizada; o PDF exportado atualizado forneceu o conteudo verificavel.

## Estrategia

- Publico: recrutadores, RH, liderancas tecnicas e clientes freelance de pequeno porte.
- Posicionamento: profissional junior generalista que conecta desenvolvimento de produto, UX/UI, dados, operacoes, observabilidade e AppSec.
- Proposta de valor: evoluir produtos e sistemas de ponta a ponta com atencao a experiencia, confiabilidade e documentacao.
- Hierarquia: hero, entregas selecionadas, experiencia, competencias, sobre, formacao/certificacoes/idioma e contato.
- CTA principal: ver projetos. Secundarios: baixar curriculo e entrar em contato.
- Direcao visual: base escura autoral preservada, contraste editorial entre verde tecnico e amarelo de evidencia, tipografia limpa, grids sem excesso de cards e previews reais quando publicos.
- Motion: feedback curto em controles, revelacao opcional e nao bloqueante, intro apenas na primeira visita com opcao de pular, nenhuma animacao essencial para leitura.

## Riscos

- Conteudo traduzido precisa manter equivalencia sem alterar fatos.
- A intro e a revelacao atuais bloqueiam conteudo e devem degradar corretamente.
- Links externos e curriculos por idioma precisam permanecer sincronizados.
- O portfolio nao deve expor ambientes privados, dados de clientes ou informacoes alem das fontes publicas autorizadas.

## Validacao planejada

- Validacao estrutural de HTML, CSS, JavaScript e JSON-LD.
- Navegador real nos temas claro/escuro, tres idiomas e `prefers-reduced-motion`.
- Larguras 320, 375, 430, 768, 1024, 1280, 1440 e ultrawide.
- Verificacao de overflow, console, links, downloads, navegacao por teclado e menu mobile.

## Rollback

Cada unidade sera registrada em commit Conventional Commit independente. O rollback pode ser feito por `git revert <hash>` apos revisao, sem reescrever o historico.
