import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names using clsx and tailwind-merge.
 * Use this instead of raw `clsx()` when composing Tailwind utility classes
 * to ensure conflicting utilities resolve correctly (last-wins).
 *
 * @example
 * cn('px-4 py-2', isLarge && 'px-8', className)
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
