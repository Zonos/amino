import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ClockDuotoneIcon = forwardRef<
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
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M12 8.5a.75.75 0 0 1 .75.75v2.44l1.78 1.78a.75.75 0 1 1-1.06 1.06l-1.927-1.926a1 1 0 0 1-.293-.708V9.25A.75.75 0 0 1 12 8.5Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
