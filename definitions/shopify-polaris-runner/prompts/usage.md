# Usage

This template provides a minimal React + Vite app preconfigured to use Shopify Polaris components.

Development:

- Install dependencies: `npm install`
- Start dev server: `npm run dev`

Build:

- Build the app: `npm run build`
- Preview production build: `npm run preview`

Notes:

- Polaris requires its CSS and provider setup (see `src/main.tsx` and `src/index.css`). No Tailwind configuration is necessary.
- If you plan to deploy a Worker-backed API, add your Worker code under `worker/` following other templates' patterns.
