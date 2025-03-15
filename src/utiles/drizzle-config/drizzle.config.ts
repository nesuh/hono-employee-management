// src/utiles/drizzle/drizzle.config.ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src/db/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '0000',
    database: process.env.DATABASE_NAME || 'employee_db',
    ssl: false, // Disable SSL unless required
  },
});