import { z } from 'zod';

export const themeSchema = z.enum(['day', 'night', 'midnight']);

export type Theme = z.infer<typeof themeSchema>;
