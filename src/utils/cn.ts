import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const isAmino = (value: string) => value.includes('amino-');

const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: [isAmino],
      colors: [isAmino],
      borderRadius: [isAmino],
      borderWidth: [isAmino],
      dropShadow: [isAmino],
    },
    classGroups: {
      'font-size': [{ text: [isAmino] }],
      'font-weight': [{ font: [isAmino] }],
      'line-height': [{ leading: [isAmino] }],
      'flex-basis': [{ basis: [isAmino] }],
      'shadow': [{ shadow: [isAmino] }],
    }
  },
});

/**
 * Merges class names using clsx and a custom configured tailwind-merge.
 * Understands custom Zonos Amino design tokens properly.
 */
export const cn = (...inputs: ClassValue[]): string => customTwMerge(clsx(inputs));
