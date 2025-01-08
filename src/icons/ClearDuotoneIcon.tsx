import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const ClearDuotoneIcon = forwardRef<
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
      d="M8.75 4A4.75 4.75 0 0 0 4 8.75V19a1 1 0 0 0 1 1h10.25A4.75 4.75 0 0 0 20 15.25v-3a1 1 0 0 0-1-1h-4.095a3 3 0 0 0-2.155-2.155V5a1 1 0 0 0-1-1z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M14.342 6.155a.75.75 0 0 1 1.019-.297 7.03 7.03 0 0 1 2.781 2.782.75.75 0 0 1-1.315.72 5.53 5.53 0 0 0-2.187-2.187.75.75 0 0 1-.298-1.018"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
