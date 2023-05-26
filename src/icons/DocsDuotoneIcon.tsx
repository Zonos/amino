import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const DocsDuotoneIcon = forwardRef<
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
      d="M6.274 3.546A2 2 0 0 1 7.648 3H14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6.556a2 2 0 0 1 .627-1.454l1.647-1.556Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M16 6v10a2 2 0 0 1-2 2H8v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.274 3.546A2 2 0 0 1 7.648 3H8.4a1.1 1.1 0 0 1 1.1 1.1v2.15a2 2 0 0 1-2 2H5.1A1.1 1.1 0 0 1 4 7.15v-.594a2 2 0 0 1 .627-1.454l1.647-1.556Z"
      clipRule="evenodd"
    />
  </IconBase>
));
