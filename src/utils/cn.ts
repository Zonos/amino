import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const isAmino = (value: string) => value.includes('amino-');

// Custom shadow tokens that tailwind-merge doesn't know about by default.
// Without this, `shadow-none` won't override `shadow-raised-standard` etc.
// because tailwind-merge won't know they're in the same conflict group.
const isCustomShadow = (value: string) =>
  /^(raised|btn|input|select|focus|glow)-/.test(value);

// Amino extends Tailwind's color scale with 0 and 1000 (e.g. gray-0, gray-1000).
// tailwind-merge doesn't know these exist, so without this it won't recognize
// bg-gray-0 / bg-gray-1000 as bg-color classes and won't deduplicate them
// against bg-blue-50 etc., causing the wrong color to win via CSS order.
const isAminoExtendedScale = (value: string) => /-(0|1000)$/.test(value);

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      basis: [{ basis: [isAmino] }],
      'bg-color': [{ bg: [isAminoExtendedScale] }],
      'border-color': [{ border: [isAmino, isAminoExtendedScale] }],
      'font-size': [{ text: [isAmino] }],
      'font-weight': [{ font: [isAmino] }],
      leading: [{ leading: [isAmino] }],
      shadow: [{ shadow: [isAmino, isCustomShadow] }],
      'text-color': [{ text: [isAminoExtendedScale] }],
    },
    theme: {
      color: [isAmino, isAminoExtendedScale],
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
