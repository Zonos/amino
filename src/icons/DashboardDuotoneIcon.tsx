import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const DashboardDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inline, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    inline={inline}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M5.374 4.144a1 1 0 0 0-1.23 1.23L5.972 12l-1.828 6.626a1 1 0 0 0 1.23 1.23L12 18.028l6.626 1.828a1 1 0 0 0 1.23-1.23L18.028 12l1.828-6.626a1 1 0 0 0-1.23-1.23L12 5.972 5.374 4.144Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M14.926 10.12a.85.85 0 0 0-1.046-1.046L12 9.593l-1.881-.52a.85.85 0 0 0-1.045 1.046L9.592 12l-.518 1.882a.85.85 0 0 0 1.045 1.045l1.88-.519 1.881.52a.85.85 0 0 0 1.046-1.046L14.407 12l.519-1.88Z"
      fill="currentColor"
    />
  </IconBase>
));
