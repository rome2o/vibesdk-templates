# Usage

## Overview
React + Vite app preconfigured with Shopify Polaris. Opinionated setup with Polaris provider, theming, and example components to accelerate building Shopify-style UIs.

## Tech
- React, TypeScript, Vite
- Shopify Polaris (components + tokens)

## Quick Start
```bash
npm install
npm run dev
```

## Build & Preview
- Build: `npm run build`
- Preview: `npm run preview`

## Development Notes
- Polaris requires its CSS and provider setup (see `src/main.tsx` and `src/index.css`).
- Do NOT add Tailwind; Polaris provides its own design system and tokens.
- Prefer Polaris components over custom UI; compose rather than re-implement.

## Project Structure
- `src/main.tsx` — App bootstrap and Polaris provider
- `src/index.css` — Base styles and Polaris CSS import hooks
- `src/pages/HomePage.tsx` — Example landing page
- `src/components/*` — Example components using Polaris
- `worker/*` — Optional Worker entry (if you add an API later)

## Styling Guidelines
- Use Polaris props and tokens for spacing, colors, and typography.
- For one-off layout needs, prefer simple CSS modules or inline styles over adding new CSS frameworks.
- Keep custom styles minimal; lean on Polaris primitives.

## Component Patterns
- Wrap your app with `AppProvider` (already configured in `src/main.tsx`).
- Use Polaris layout primitives (`Page`, `Layout`, `Card`, `BlockStack`, etc.).
- Handle loading and empty states with Polaris `Skeleton*` and `EmptyState` components.

## Error Handling
- Use the included error boundary components under `src/components` when composing routes/pages.
- Surface user-facing errors with Polaris `InlineError` or `Banner` components as appropriate.

## Type Safety
- Prefer explicit prop typings for shared components.
- If integrating a backend, export shared types (e.g., under `src/lib/types.ts`) and keep API responses typed end-to-end.

## Optional: Backend/API
- If you need a Worker-backed API, add code under `worker/` following the patterns used in the other Worker templates in this repo (e.g., route registration, typed responses).
- Keep UI and data-fetching concerns separate: create small `lib` helpers for fetch calls and reuse across components.

## Tips
- Start by replacing `HomePage.tsx` with your real pages.
- Build small, composable UI pieces with Polaris primitives before introducing complex custom components.
- Keep dependency footprint lean; Polaris already covers most UI needs.
