import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ClearDuotoneIcon = forwardRef<
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
      d="M3 22h13a6 6 0 0 0 6-6v-1.889a1 1 0 0 0-1-1h-4.056a.537.537 0 0 1-.522-.5 5.557 5.557 0 0 0-5.034-5.033.537.537 0 0 1-.5-.522V3a1 1 0 0 0-1-1H8a6 6 0 0 0-6 6v13a1 1 0 0 0 1 1Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.595 4.325a1 1 0 0 1 1.312-.53 10 10 0 0 1 5.24 5.167 1 1 0 0 1-1.829.807 8 8 0 0 0-4.193-4.133 1 1 0 0 1-.53-1.311Z"
      clipRule="evenodd"
    />
  </IconBase>
));
