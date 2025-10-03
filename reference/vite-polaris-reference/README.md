# Vite + React + Shopify Polaris Reference

A modern React application template built with Vite, TypeScript, and Shopify Polaris design system.

## Features

- ⚡ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Latest React with modern patterns
- 🎨 **Shopify Polaris** - Complete design system and component library
- 📘 **TypeScript** - Full type safety
- 🚀 **Cloudflare Workers** - Deploy to edge
- 🛠️ **Zustand** - Lightweight state management
- 📱 **Responsive** - Mobile-first design
- 🎯 **Modern Tooling** - ESLint, Prettier, and more

## Getting Started

1. **Install dependencies:**

   ```bash
   bun install
   ```

2. **Start development server:**

   ```bash
   bun run dev
   ```

3. **Build for production:**

   ```bash
   bun run build
   ```

4. **Deploy to Cloudflare:**

   ```bash
   bun run deploy
   ```

## Project Structure

```text
src/
├── components/          # Reusable components
│   ├── ErrorBoundary.tsx
│   ├── ErrorFallback.tsx
│   ├── RouteErrorBoundary.tsx
│   └── ExampleCard.tsx
├── pages/              # Page components
│   └── HomePage.tsx
├── lib/                # Utilities and helpers
│   ├── utils.ts
│   └── errorReporter.ts
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Key Differences from vite-reference

- **No Tailwind CSS** - Uses Shopify Polaris design system instead
- **No PostCSS** - Simplified build process
- **Polaris Components** - All UI components from Shopify Polaris
- **Minimal Custom CSS** - Only essential styles, Polaris handles the rest
- **Design System First** - Consistent with Shopify's design language

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run deploy` - Deploy to Cloudflare Workers
- `bun run lint` - Run ESLint

## Shopify Polaris

This template uses Shopify Polaris, a comprehensive design system that provides:

- **Components** - Pre-built, accessible UI components
- **Design Tokens** - Consistent colors, spacing, and typography
- **Icons** - Complete icon library
- **Guidelines** - Design principles and best practices

Learn more at [polaris.shopify.com](https://polaris.shopify.com/)

## State Management

The template includes Zustand for state management with example stores:

- **Timer Store** - Demonstrates timer functionality
- **Counter Store** - Simple counter example

## Error Handling

Comprehensive error handling with:

- **Error Boundaries** - Catch React errors
- **Route Error Handling** - Handle routing errors
- **Error Reporting** - Automatic error reporting to backend

## Deployment

The template is configured for Cloudflare Workers deployment with:

- **Wrangler** - Cloudflare Workers CLI
- **Vite Plugin** - Cloudflare integration
- **TypeScript Support** - Full type definitions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
