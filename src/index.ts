import { Hono } from 'hono';

// Initialize Hono app
const app = new Hono();

// Basic route to check if the server is running
app.get('/', (c) => {
  return c.text('Employee Hierarchy API is running!');
});

// Export the app for use in your server
export default app;