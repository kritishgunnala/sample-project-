# MR.DEZINER Studio Website

Premium multi-page cinematic creative agency website built with Next.js (Pages Router), TailwindCSS, Framer Motion, GSAP, and Lenis.

## Live Demo

- Production: [https://mr-deziner-studio.vercel.app](https://mr-deziner-studio.vercel.app)

## Repository

- GitHub: [https://github.com/kritishgunnala/sample-project-](https://github.com/kritishgunnala/sample-project-)

## Tech Stack

- Next.js (Pages Router)
- React
- TailwindCSS
- Framer Motion
- GSAP
- Lenis smooth scrolling

## Pages

- `/` Home
- `/services` Services
- `/process` Process
- `/work` Work
- `/clients` Clients
- `/contact` Contact

## Project Structure

```text
pages/
  index.js
  services.js
  process.js
  work.js
  clients.js
  contact.js
  _app.js

components/
  Navbar.jsx
  Footer.jsx
  HeroSection.jsx
  ServiceCard.jsx
  PortfolioCard.jsx
  TestimonialCard.jsx
  CTASection.jsx
  FloatingPaper.jsx
  NoiseTexture.jsx

styles/
  globals.css
  textures.css
  animations.css
```

## Local Development

### 1) Install dependencies

```bash
npm install
```

### 2) Run dev server

```bash
npm run dev
```

### 3) Open in browser

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Deployment

This project is deployed on Vercel and connected to GitHub for deployment workflows.

## Notes

- The design language follows a cinematic/editorial look with subtle paper textures and grid overlays.
- Figma-driven layout direction was translated into reusable frontend components and multi-page architecture.
