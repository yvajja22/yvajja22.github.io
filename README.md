# Yatin Vajja — Portfolio

Premium software engineer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Live site: [https://yvajja22.github.io](https://yvajja22.github.io)

## Stack

- Next.js 16 with static export (`output: "export"`)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GitHub Pages via GitHub Actions

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production static export to `out/` |
| `npm run lint` | ESLint |

## Project structure

```text
src/
  app/                 # App Router layout, page, styles, SEO metadata
  components/
    layout/            # Navbar, Footer
    sections/          # Hero, About, Experience, Projects, Skills, Education, Contact
    ui/                # Reusable primitives (Button, Container, FadeIn, …)
  lib/
    data.ts            # Source-of-truth content
    types.ts           # Shared types
public/
  Yatin_Vajja_Resume.pdf
  favicon.svg
  og.png
```

## Content updates

Edit `src/lib/data.ts` to update experience, projects, skills, and contact links. Keep Fidelity copy limited to incoming/LEAP positioning until you have real project details to share.

Replace `public/Yatin_Vajja_Resume.pdf` with your latest resume when you have a designer/ATS-formatted PDF.

## Deploy (GitHub Pages)

1. Push to `main` (workflow: `.github/workflows/deploy.yml`).
2. In the repo **Settings → Pages**, set Source to **GitHub Actions**.
3. After the workflow succeeds, the site is served at `https://yvajja22.github.io`.

## Accessibility & SEO

- Semantic landmarks, skip link, focus styles, and reduced-motion support
- Open Graph / Twitter metadata and canonical URL
- Custom SVG favicon and `og.png` preview image
