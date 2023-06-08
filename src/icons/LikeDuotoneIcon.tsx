import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const LikeDuotoneIcon = forwardRef<
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
      d="M9.628 4.867A2 2 0 0 1 11.276 4h2.14a2 2 0 0 1 2 2v2H17.8a2 2 0 0 1 1.967 2.36l-1.466 8A2 2 0 0 1 16.332 20H9a2 2 0 0 1-2-2V9.31a2 2 0 0 1 .352-1.132l2.276-3.311Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M5 9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
