# Shopify Polaris Runner

A Shopify Polaris-based React application template with Cloudflare Workers and Durable Objects integration.

## Features

- ⚡ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Latest React with modern patterns
- 🎨 **Shopify Polaris** - Complete design system and component library
- 📘 **TypeScript** - Full type safety
- 🚀 **Cloudflare Workers** - Deploy to edge
- 💾 **Durable Objects** - Persistent storage with SQLite
- 🛠️ **Zustand** - Lightweight state management
- 📱 **Responsive** - Mobile-first design
- 🎯 **Modern Tooling** - ESLint, Prettier, and more

## Getting Started

1. **Setup the project:**
   ```bash
   ./setup.sh your-project-name
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start development server:**
   ```bash
   bun run dev
   ```

4. **Deploy to Cloudflare:**
   ```bash
   bun run deploy
   ```

## API Endpoints

The template includes example API endpoints:

- `GET /api/test` - Test endpoint
- `GET /api/demo` - Get demo items
- `POST /api/demo` - Add demo item
- `PUT /api/demo/:id` - Update demo item
- `DELETE /api/demo/:id` - Delete demo item
- `GET /api/counter` - Get counter value
- `POST /api/counter/increment` - Increment counter

## Durable Objects

This template uses Cloudflare Durable Objects for persistent storage. The `GlobalDurableObject` class provides:

- Counter operations (increment, decrement, get)
- Demo item CRUD operations
- Persistent storage using SQLite

## Project Structure

```
worker/
├── index.ts           # Main worker entry point
├── userRoutes.ts      # API routes (modify this file)
├── durableObject.ts   # Durable Object implementation
└── core-utils.ts      # Shared utilities and types

shared/
├── types.ts           # TypeScript type definitions
└── mock-data.ts       # Mock data for development
```

## Development

- Add your API routes in `worker/userRoutes.ts`
- Modify the Durable Object in `worker/durableObject.ts`
- The frontend uses the vite-polaris-reference as its base

## License

MIT License