import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const BellDuotoneIcon = forwardRef<
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
      d="M12 4a6.75 6.75 0 0 0-6.75 6.75v.933a.25.25 0 0 1-.046.144l-.59.837C3.326 14.486 4.63 17 6.86 17h1.39v.25A2.75 2.75 0 0 0 11 20h2a2.75 2.75 0 0 0 2.75-2.75V17h1.39c2.23 0 3.533-2.514 2.247-4.336l-.591-.837a.25.25 0 0 1-.046-.144v-.933A6.75 6.75 0 0 0 12 4"
      fill="currentColor"
    />
    <path
      d="M12 4a6.75 6.75 0 0 0-6.75 6.75v.933a.25.25 0 0 1-.046.144l-.59.837C3.326 14.486 4.63 17 6.86 17h10.28c2.23 0 3.533-2.514 2.247-4.336l-.591-.837a.25.25 0 0 1-.046-.144v-.933A6.75 6.75 0 0 0 12 4"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
  </IconBase>
));
