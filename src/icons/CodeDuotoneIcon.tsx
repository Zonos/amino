import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const CodeDuotoneIcon = forwardRef<
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
      d="M7.707 7.293a1 1 0 0 1 0 1.414L4.414 12l3.293 3.293a1 1 0 1 1-1.414 1.414l-3.647-3.646a1.5 1.5 0 0 1 0-2.122l.707.707-.707-.707 3.647-3.646a1 1 0 0 1 1.414 0Zm8.586 0a1 1 0 0 1 1.414 0l3.646 3.646a1.5 1.5 0 0 1 0 2.122l-3.646 3.646a1 1 0 0 1-1.414-1.414L19.586 12l-3.293-3.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.07 4.034a1 1 0 0 1 .708 1.225l-3.624 13.523a1 1 0 0 1-1.932-.518l3.624-13.523a1 1 0 0 1 1.224-.707Z"
      clipRule="evenodd"
    />
  </IconBase>
));
