import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkCheckDuotoneIcon = forwardRef<
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
      d="M7.75 3A2.75 2.75 0 0 0 5 5.75v14.278a1 1 0 0 0 1.562.827l4.735-3.22a1.25 1.25 0 0 1 1.406 0l4.735 3.22A1 1 0 0 0 19 20.028V5.75A2.75 2.75 0 0 0 16.25 3z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M15.21 7.158a.75.75 0 0 1 .132 1.052l-3.326 4.277a1 1 0 0 1-1.497.093l-1.8-1.8A.75.75 0 0 1 9.78 9.72l1.4 1.399 2.978-3.83a.75.75 0 0 1 1.053-.131Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
