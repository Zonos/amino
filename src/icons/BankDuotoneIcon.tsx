import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const BankDuotoneIcon = forwardRef<
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
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M5 13V8h14v8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2v-3Zm2 3h2v-4H7v4Zm4-4v4h2v-4h-2Zm4 0v4h2v-4h-2Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.298 3.195a2 2 0 0 1 1.404 0l7 2.625A2 2 0 0 1 21 7.693V8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-.307A2 2 0 0 1 4.298 5.82l7-2.625Z"
      clipRule="evenodd"
    />
  </IconBase>
));
