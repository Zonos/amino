import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const HelloV2DuotoneIcon = forwardRef<
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
      d="M11.066 3.123c0-1.336 1.615-2.005 2.56-1.06l7.986 7.985a1.5 1.5 0 0 1 0 2.121l-9.193 9.192a1.5 1.5 0 0 1-2.12 0l-7.986-7.985c-.945-.945-.276-2.56 1.06-2.56h4.82a3.986 3.986 0 0 1 1.044-1.829 3.986 3.986 0 0 1 1.829-1.045V3.123Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.938 8.184a8 8 0 0 1 3.496-3.497 1 1 0 0 1 .908 1.782A6 6 0 0 0 6.72 9.092a1 1 0 0 1-1.782-.908Z"
      clipRule="evenodd"
    />
  </IconBase>
));
