import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const StarsDuotoneIcon = forwardRef<
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
      d="M7.347 3.295c.37-1.108 1.936-1.108 2.305 0l.111.333a6.857 6.857 0 0 0 4.098 4.252c1.035.388 1.035 1.852 0 2.24a6.857 6.857 0 0 0-4.098 4.252l-.11.333c-.37 1.107-1.936 1.107-2.306 0l-.11-.333a6.857 6.857 0 0 0-4.098-4.252c-1.035-.388-1.035-1.852 0-2.24a6.857 6.857 0 0 0 4.097-4.252l.111-.333ZM19 16a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.996 10a1 1 0 0 1 1.004.996v.01a1 1 0 1 1-2 .008v-.01A1 1 0 0 1 18.996 10ZM11 17.99a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </IconBase>
));
