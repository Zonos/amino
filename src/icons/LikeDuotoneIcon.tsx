import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const LikeDuotoneIcon = forwardRef<
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
      d="M12.556 5a2.75 2.75 0 0 0-1.906.768L8.343 7.985A2.75 2.75 0 0 0 7.5 9.967v6.283A2.75 2.75 0 0 0 10.25 19h5.89c1.293 0 2.41-.9 2.687-2.162l1.124-5.134a2.75 2.75 0 0 0-2.686-3.339H15.75a.25.25 0 0 1-.25-.25V6.75A1.75 1.75 0 0 0 13.75 5z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M4.75 9.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
