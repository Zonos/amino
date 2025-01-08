import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const EyeOffDuotoneIcon = forwardRef<
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
      d="M12 5C8.974 5 6.958 6.458 5.722 8.038a9.3 9.3 0 0 0-1.31 2.288C4.149 10.991 4 11.61 4 12c0 .451.202 1.233.577 2.065.388.86 1 1.862 1.899 2.74a.75.75 0 0 0 1.052-.004l9.256-9.171a.75.75 0 0 0-.082-1.136C15.512 5.614 13.962 5 12 5m7.298 4.67a.75.75 0 0 0-1.347.66c.201.411.342.79.431 1.095.094.322.118.517.118.575 0 .11-.07.522-.307 1.123a7.8 7.8 0 0 1-1.096 1.915C16.083 16.333 14.474 17.5 12 17.5a7 7 0 0 1-1.804-.23.75.75 0 1 0-.392 1.448c.67.18 1.4.282 2.196.282 3.026 0 5.042-1.458 6.278-3.038a9.3 9.3 0 0 0 1.31-2.288C19.851 13.009 20 12.39 20 12c0-.268-.069-.623-.178-.995a8.5 8.5 0 0 0-.524-1.335"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M19.78 4.22a.75.75 0 0 1 0 1.06l-5.658 5.659-3.183 3.182-5.659 5.66a.75.75 0 0 1-1.06-1.061l5.195-5.196a3.001 3.001 0 0 1 4.11-4.109L18.72 4.22a.75.75 0 0 1 1.06 0"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
