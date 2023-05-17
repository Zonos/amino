import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const EyeDuotoneIcon = forwardRef<
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
      d="M4.959 7.014C6.7 5.41 9.18 4 12 4s5.3 1.41 7.041 3.014c.878.809 1.599 1.693 2.107 2.53.487.802.852 1.68.852 2.456 0 .775-.365 1.654-.852 2.457-.508.836-1.229 1.72-2.107 2.529C17.3 18.59 14.82 20 12 20s-5.3-1.41-7.041-3.014c-.878-.809-1.599-1.693-2.106-2.53C2.365 13.655 2 12.777 2 12c0-.775.365-1.654.853-2.457.507-.836 1.228-1.72 2.106-2.529Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M10 12a2 2 0 0 0 1.739-2.989A3 3 0 1 1 9.01 11.74c.292.166.63.261.989.261Z"
    />
  </IconBase>
));
