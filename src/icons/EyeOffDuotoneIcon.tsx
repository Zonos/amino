import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const EyeOffDuotoneIcon = forwardRef<
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
      fillRule="evenodd"
      d="M11 5a1 1 0 0 1 1-1c2.819 0 5.3 1.41 7.041 3.014.878.809 1.599 1.693 2.107 2.53.487.802.852 1.68.852 2.456 0 .795-.384 1.701-.895 2.527a1 1 0 0 1-1.7-1.054c.447-.723.595-1.24.595-1.473 0-.225-.138-.72-.562-1.418-.403-.664-1-1.405-1.752-2.096C16.171 7.09 14.152 6 12 6a1 1 0 0 1-1-1Zm-4.088.498 14.795 14.795a1 1 0 0 1-1.414 1.414l-3.226-3.226C15.613 19.371 13.882 20 12 20c-2.819 0-5.3-1.41-7.041-3.014-.878-.809-1.599-1.693-2.106-2.53C2.365 13.655 2 12.777 2 12c0-.929.527-2.032 1.22-3.018a12.814 12.814 0 0 1 3.003-2.994l.69-.49Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M3.707 2.293a1 1 0 0 0-1.414 1.414l7 7a3 3 0 0 0 4.001 4.001l6.999 7a1 1 0 0 0 1.414-1.415l-18-18Z"
    />
  </IconBase>
));
