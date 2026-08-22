# Portfolio

Personal developer portfolio — a single-page React application presenting my background, skills, projects and certificates.

## Features

- **Animated hero section** built with Framer Motion, with a downloadable résumé
- **Skills grid** split across frontend, backend, languages and tooling
- **Projects showcase** driven by a reusable `ProjectCard` component
- **Certificates gallery**
- **Client-side routing** via React Router

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite 7 (SWC plugin) |
| Animation | Framer Motion |
| Routing | React Router 7 |
| Linting | ESLint 9 |

## Project Structure

```
src/
├── components/     Navbar, ProjectCard
├── pages/          Hero, Skills, Projects, Certificates, Contact
├── assets/         Profile image, certificates, project thumbnails
└── App.jsx         Route definitions
public/
└── resume.pdf      Served as a direct download
```

## Running Locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

The production bundle is written to `dist/`.
