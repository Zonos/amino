import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const LocationDuotoneIcon = forwardRef<
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
      d="M3 11a9 9 0 0 1 18 0c0 2.522-1.672 4.88-3.349 6.645-1.718 1.809-3.653 3.213-4.566 3.837a1.92 1.92 0 0 1-2.17 0c-.913-.624-2.848-2.028-4.566-3.837C4.672 15.88 3 13.522 3 11Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M10 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
