import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const TrashCanDuotoneIcon = forwardRef<
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
      d="M5 6h14v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2h3V4Zm2 2h4V4h-4v2Zm0 7a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
