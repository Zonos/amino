import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const PrinterDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color || 'gray800'}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray300}`}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M3 11a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M9.5 3a2 2 0 0 0-2 2v3h9V5a2 2 0 0 0-2-2h-5Zm-1 11a1 1 0 0 0-1 1v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a1 1 0 0 0-1-1h-7Z"
    />
  </IconBase>
));
