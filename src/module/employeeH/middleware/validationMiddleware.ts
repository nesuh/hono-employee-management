// // src/middleware/validationMiddleware.ts
// import { Context, Next } from 'hono';
// import { z } from 'zod';

// export const validate = (schema: z.ZodSchema) => async (c: Context, next: Next) => {
//   const data = await c.req.json();
//   try {
//     schema.parse(data); // Validate data
//     await next();
//   } catch (error) {
//     return c.json({ message: 'Validation failed', errors: error.errors }, 400);
//   }
// };