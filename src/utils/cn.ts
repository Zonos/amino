import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const isAmino = (value: string) => value.includes('amino-');

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      basis: [{ basis: [isAmino] }],
      'border-color': [{ border: [isAmino] }],
      'font-size': [{ text: [isAmino] }],
      'font-weight': [{ font: [isAmino] }],
      leading: [{ leading: [isAmino] }],
      shadow: [{ shadow: [isAmino] }],
    },
    theme: {
      color: [isAmino],
      'drop-shadow': [isAmino],
      radius: [isAmino],
      spacing: [isAmino],
    },
  },
});

/**
 * Merges class names using clsx and a custom configured tailwind-merge.
 * Understands custom Zonos Amino design tokens properly.
 */
export const cn = (...inputs: ClassValue[]): string =>
  customTwMerge(clsx(inputs));
