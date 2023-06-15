import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const PlaneDuotoneIcon = forwardRef<
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
      d="M8.35 5.493a1 1 0 0 1 .97-1.243h.851c.73 0 1.43.29 1.945.805L16.81 9.75H9.414L8.35 5.493Zm.29 7.757h7.17l-5.694 5.695a2.75 2.75 0 0 1-1.945.805H5.52a1 1 0 0 1-.78-1.625l3.9-4.875Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M2 6.581a.75.75 0 0 1 1.266-.544l2.166 2.052a1.5 1.5 0 0 0 1.032.411H18.5A3.5 3.5 0 0 1 22 12v1a1.5 1.5 0 0 1-1.5 1.5h-14A4.5 4.5 0 0 1 2 10V6.581Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
  </IconBase>
));
