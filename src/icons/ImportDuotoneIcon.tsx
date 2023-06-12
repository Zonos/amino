import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ImportDuotoneIcon = forwardRef<
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
    <rect
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      height="18"
      rx="2"
      transform="rotate(90 21.104 10.896)"
      width="10"
      x="21.104"
      y="10.896"
    />
    <path
      clipRule="evenodd"
      d="M8.396 12.396a1 1 0 0 1 1.415 0l1.293 1.293V4.104a1 1 0 1 1 2 0v9.585l1.292-1.293a1 1 0 0 1 1.415 1.415l-2.647 2.646a1.5 1.5 0 0 1-2.121 0l-2.647-2.646a1 1 0 0 1 0-1.415Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
