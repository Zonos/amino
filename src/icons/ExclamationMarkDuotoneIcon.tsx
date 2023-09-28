import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ExclamationMarkDuotoneIcon = forwardRef<
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
      d="M12.75 9a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0V9Zm0 5.5a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0v-.5Z"
      fill="currentColor"
    />
  </IconBase>
));
