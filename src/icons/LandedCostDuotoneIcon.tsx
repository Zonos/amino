import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const LandedCostDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M12.75 5a.994.994 0 0 0-1.026-.995 8 8 0 1 0 8.271 8.27A.994.994 0 0 0 19 11.25h-4.095a3 3 0 0 0-2.155-2.155z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M14.342 6.155a.75.75 0 0 1 1.019-.297 7.03 7.03 0 0 1 2.781 2.782.75.75 0 0 1-1.315.72 5.53 5.53 0 0 0-2.187-2.187.75.75 0 0 1-.298-1.018"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
