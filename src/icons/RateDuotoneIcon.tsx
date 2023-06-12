import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const RateDuotoneIcon = forwardRef<
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
      d="M19.585 18.12c1.063 1.062.31 2.88-1.193 2.88H5.688A1.687 1.687 0 0 1 4 19.312V4.688C4 3.756 4.756 3 5.688 3h12.704c1.503 0 2.256 1.818 1.193 2.88l-3.833 3.834c.396.67.623 1.453.623 2.286s-.227 1.615-.623 2.286l3.833 3.833Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M20.434 9.219a9 9 0 0 1 0 5.562 1.125 1.125 0 0 1-2.14-.695 6.75 6.75 0 0 0 0-4.172 1.125 1.125 0 0 1 2.14-.695Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
