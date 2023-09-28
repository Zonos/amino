import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ClearDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M8.75 4A4.75 4.75 0 0 0 4 8.75V19a1 1 0 0 0 1 1h10.25A4.75 4.75 0 0 0 20 15.25v-3a1 1 0 0 0-1-1h-4.095a3.004 3.004 0 0 0-2.155-2.155V5a1 1 0 0 0-1-1h-3Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M14.342 6.155a.75.75 0 0 1 1.019-.297 7.03 7.03 0 0 1 2.781 2.782.75.75 0 0 1-1.315.72 5.529 5.529 0 0 0-2.187-2.187.75.75 0 0 1-.298-1.018Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
