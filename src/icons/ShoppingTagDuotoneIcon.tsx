import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const ShoppingTagDuotoneIcon = forwardRef<
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
      d="M18 7.821A1.82 1.82 0 0 0 16.179 6h-4.223a1.82 1.82 0 0 0-1.287.533l-5.822 5.822a2.89 2.89 0 0 0 0 4.09l2.708 2.708a2.89 2.89 0 0 0 4.09 0l5.822-5.822A1.82 1.82 0 0 0 18 12.044z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M19.371 3.936a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-1.06-1.06l5.5-5.5a.75.75 0 0 1 1.06 0m-7.84 13.445a.75.75 0 0 1-1.061 0l-3.85-3.85a.75.75 0 1 1 1.06-1.061l3.85 3.85a.75.75 0 0 1 0 1.06Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
