import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const CommentDuotoneIcon = forwardRef<
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
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C1C1C4'}
      data-is-secondary-color="true"
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h.375a2 2 0 0 0 1.6-.8l2.175-2.9a2 2 0 0 1 1.6-.8H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </IconBase>
));
