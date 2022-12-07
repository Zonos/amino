import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const UserDuotoneIcon = forwardRef<
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
      fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M4 19a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5 3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
  </IconBase>
));
