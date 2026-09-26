# Portfólio - Anthony Farias

Portfólio pessoal em Next.js com estética preta e translúcida (glassmorphism), bilíngue PT/EN.
O conteúdo vem do CV: experiências, competências técnicas, formação e projetos.

Produção: [anthonysfarias.vercel.app](https://anthonysfarias.vercel.app)

## Stack

- **Next.js 16** (App Router, rotas estáticas por idioma)
- **React 19** + **TypeScript**
- **Tailwind CSS 4** (tokens e utilities customizados em `src/app/globals.css`)
- **Framer Motion** para revelações no scroll, timeline e transições
- **react-icons** para os logos de tecnologia

## Rodando localmente

```bash
npm install
npm run dev
```

A raiz `/` redireciona para `/pt`. As duas versões do site são `/pt` e `/en`.

```bash
npm run build   # build de produção
npm start       # serve o build
npm run lint    # eslint
npx tsc --noEmit
```

## Estrutura

```
src/
  app/
    [locale]/          rota por idioma (layout, page, not-found, opengraph-image)
    globals.css        design system: tokens, glass, noise, glow, grid
    robots.ts          robots.txt
    sitemap.ts         sitemap.xml
  components/
    layout/            Navbar, Footer, LocaleToggle
    sections/          Hero, About, Stack, Experience, Projects, Education, Contact
    ui/                primitivos (GlassCard, Reveal, Button, Badge, Typewriter, ...)
  data/                conteúdo: profile, experience, projects, skills, education, socials
  i18n/                configuração de locales e dicionários de UI
  lib/                 cn(), registro de ícones, hooks
```

## Editando o conteúdo

Todo o texto do portfólio vive em `src/data/`. Cada campo traduzível é um objeto
`{ pt, en }` - adicionar um idioma significa estender `locales` em
[`src/i18n/config.ts`](src/i18n/config.ts) e preencher o novo lado dos objetos.

Os rótulos de interface (botões, títulos de seção, mensagens de erro do formulário)
ficam em [`src/i18n/pt.ts`](src/i18n/pt.ts) e [`src/i18n/en.ts`](src/i18n/en.ts).
O tipo `Dictionary` é derivado do dicionário PT, então o TypeScript acusa qualquer
chave faltando na tradução em inglês.

Ícones são referenciados por nome nos arquivos de dados e resolvidos em
[`src/lib/icons.ts`](src/lib/icons.ts). Para usar um ícone novo, importe-o lá e
adicione ao registro.

## Formulário de contato

Não há backend: o formulário valida os campos no cliente e abre o cliente de e-mail
do visitante via `mailto:` com assunto e corpo já preenchidos.

## Deploy

Projeto pronto para a Vercel - importe o repositório e aceite os padrões. O `siteUrl`
usado em metadata, sitemap e Open Graph fica em [`src/data/profile.ts`](src/data/profile.ts).
