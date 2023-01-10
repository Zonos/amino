import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const LightDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C8C8CB'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M4 10a8 8 0 1 1 13.495 5.814c-.335.317-.495.67-.495.975V17a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-.211c0-.306-.16-.658-.496-.975A7.98 7.98 0 0 1 4 10Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.293 10.293a1 1 0 0 1 1.414 0L12 11.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13 13.414v4.649A2 2 0 0 1 12.5 22h-1a2 2 0 0 1-.5-3.937v-4.649l-1.707-1.707a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </IconBase>
));
