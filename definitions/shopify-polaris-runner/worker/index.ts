import { Hono } from 'hono';

const app = new Hono();

app.get('/api/health', (c) => c.json({ success: true, status: 'healthy', timestamp: new Date().toISOString() }));

app.get('*', (c) => c.text('Shopify Polaris Runner Worker - ok'));

export default {
  fetch: app.fetch,
};
