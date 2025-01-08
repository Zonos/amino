import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const MinimizeDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M6 13.25a.75.75 0 0 0 0 1.5h2.19l-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97V18a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M19.78 5.28a.75.75 0 0 0-1.06-1.06l-3.97 3.97V6a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-2.19z"
      fill="currentColor"
    />
  </IconBase>
));
