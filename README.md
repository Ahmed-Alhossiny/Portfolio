# Ahmed Alhossiny — Portfolio

An IDE-styled portfolio built with React, Vite, and Tailwind CSS. Dark theme by default, with a light theme toggle.

## Setup

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, or any static host. No server rewrites are needed, because case study pages use hash URLs such as `/#/project/bazaro`.

## Where to edit content

- `src/data/profile.js` — name, role, email, GitHub, LinkedIn, and CV file path
- `src/data/caseStudies.js` — projects: problem, solution, result, features, tech stack table, links
- `src/data/skills.js` — the skills list in the About section
- `src/components/Hero.jsx` — intro paragraph
- `src/components/AboutSection.jsx` — About text

## CV download button

Put your CV in `public/` and name it exactly `Ahmed-Alhossiny-CV.pdf`. The "Download CV" button appears automatically when that file exists. To use another name, change `cvUrl` in `src/data/profile.js`.

## Adding a project

Copy one object in `src/data/caseStudies.js`, give it a new `id`, `slug`, and `tag`, and fill in the fields. The card, the filter chips, and the case study page are generated from it.

## Theme colors

All colors are CSS variables in `src/index.css` (one block for dark, one for light). Components use the matching Tailwind names from `tailwind.config.js`, for example `bg-c-bg` and `text-c-accent`.

## Structure

```
src/
  App.jsx              layout, scroll-spy nav, hash routing between home and project pages
  main.jsx             React entry point
  index.css            Tailwind directives and theme variables
  components/          one component per section, plus ProjectPage
  data/                content: profile, case studies, skills
  hooks/               useReducedMotion, useTypedText, useScrollReveal,
                       useHashRoute, useTheme, useFileExists
```
