import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const PrinterDuotoneIcon = forwardRef<
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
      clipRule="evenodd"
      d="M3 11a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M9.5 3a2 2 0 0 0-2 2v3h9V5a2 2 0 0 0-2-2h-5Zm-1 11a1 1 0 0 0-1 1v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a1 1 0 0 0-1-1h-7Z"
      fill="currentColor"
    />
  </IconBase>
));
