import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const ChevronLeftCircleDuotoneIcon = forwardRef<
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
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M13.505 15.305a.75.75 0 0 1-1.06-.05l-2.5-2.75a.75.75 0 0 1 0-1.01l2.5-2.75a.75.75 0 0 1 1.11 1.01L11.514 12l2.041 2.245a.75.75 0 0 1-.05 1.06"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
