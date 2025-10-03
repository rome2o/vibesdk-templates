import type { DemoItem } from './types';

export const MOCK_ITEMS: DemoItem[] = [
  {
    id: '1',
    name: 'Shopify App Setup',
    description: 'Set up the basic Shopify app structure with Polaris components',
    completed: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Polaris Integration',
    description: 'Integrate Shopify Polaris design system components',
    completed: true,
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    name: 'Durable Object Storage',
    description: 'Implement Cloudflare Durable Object for data persistence',
    completed: false,
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-03T00:00:00Z'
  },
  {
    id: '4',
    name: 'API Endpoints',
    description: 'Create REST API endpoints for CRUD operations',
    completed: false,
    createdAt: '2024-01-04T00:00:00Z',
    updatedAt: '2024-01-04T00:00:00Z'
  }
];