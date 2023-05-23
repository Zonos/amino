import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ExportDuotoneIcon = forwardRef<
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
    <rect
      width="10"
      height="18"
      x="21.104"
      y="10.896"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray300}`}
      data-is-secondary-color="true"
      rx="2"
      transform="rotate(90 21.104 10.896)"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.81 7.604a1 1 0 0 1-1.414 0L13.103 6.31v9.585a1 1 0 1 1-2 0V6.311L9.812 7.604a1 1 0 0 1-1.415-1.415l2.647-2.646a1.5 1.5 0 0 1 2.121 0l2.647 2.646a1 1 0 0 1 0 1.415Z"
      clipRule="evenodd"
    />
  </IconBase>
));
