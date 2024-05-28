import { z } from 'zod';

export const themeSchema = z.enum(['day', 'night']);

export type Theme = z.infer<typeof themeSchema>;
